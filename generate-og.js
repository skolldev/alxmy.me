import { readFile, writeFile, mkdir } from "node:fs/promises";
import { glob } from "node:fs/promises";
import { basename } from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { decompress } from "wawoff2";
import readingTime from "reading-time";

// Load site data
const site = JSON.parse(await readFile("src/_data/site.json", "utf-8"));

// Decompress woff2 → raw font data for Satori
const loadFont = (path) =>
  readFile(path).then(decompress).then((data) => Buffer.from(data));

const [fontRegular, fontBold, fontExtraBold] = await Promise.all([
  loadFont("src/fonts/jetbrains-mono-v24-latin-regular.woff2"),
  loadFont("src/fonts/jetbrains-mono-v24-latin-700.woff2"),
  loadFont("src/fonts/jetbrains-mono-v24-latin-800.woff2"),
]);

const fonts = [
  { name: "JetBrains Mono", data: fontRegular, weight: 400, style: "normal" },
  { name: "JetBrains Mono", data: fontBold, weight: 700, style: "normal" },
  { name: "JetBrains Mono", data: fontExtraBold, weight: 800, style: "normal" },
];

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return null;
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const val = line.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
    data[key] = val;
  }
  return { data, content: match[2] };
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function buildCard(title, date, rt) {
  const meta = rt ? `${date}  •  ${rt}` : date;

  return {
    type: "div",
    props: {
      style: {
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "#0a0a0a",
        padding: "32px",
        fontFamily: "JetBrains Mono",
        color: "#ffffff",
      },
      children: {
        type: "div",
        props: {
          style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: "3px solid #ffffff",
            padding: "48px",
            width: "100%",
            height: "100%",
          },
          children: [
            {
              type: "div",
              props: {
                style: {
                  fontSize: 64,
                  fontWeight: 800,
                  lineHeight: 0.9,
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                },
                children: title,
              },
            },
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  marginTop: 24,
                  fontSize: 20,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: 0.7,
                },
                children: meta,
              },
            },
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  position: "absolute",
                  bottom: 80,
                  right: 80,
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#ffcc00",
                },
                children: site.author,
              },
            },
          ],
        },
      },
    },
  };
}

async function generateImage(element, outPath) {
  const svg = await satori(element, {
    width: 1200,
    height: 630,
    fonts,
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: 2400 },
  });
  const png = resvg.render().asPng();
  await writeFile(outPath, png);
  console.log(`Generated: ${outPath}`);
}

await mkdir("_site/og", { recursive: true });

let count = 0;
for await (const file of glob("src/blog/*.md")) {
  const slug = basename(file, ".md");
  const raw = await readFile(file, "utf-8");
  const parsed = parseFrontmatter(raw);
  if (!parsed) continue;

  const { data, content } = parsed;
  const title = data.title || slug;
  const date = data.date ? formatDate(data.date) : "";
  const rt = readingTime(content).text;

  await generateImage(buildCard(title, date, rt), `_site/og/${slug}.png`);
  count++;
}

console.log(`Done — ${count} OG image${count !== 1 ? "s" : ""} generated`);
