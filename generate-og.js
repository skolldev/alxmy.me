import { Resvg } from "@resvg/resvg-js";
import { glob, mkdir, readFile, writeFile } from "node:fs/promises";
import { basename } from "node:path";
import readingTime from "reading-time";
import satori from "satori";
import { decompress } from "wawoff2";

// Load site data
const site = JSON.parse(await readFile("src/_data/site.json", "utf-8"));

// Decompress woff2 → raw font data for Satori
const loadFont = (path) =>
  readFile(path)
    .then(decompress)
    .then((data) => Buffer.from(data));

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
    const val = line
      .slice(idx + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
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

const gridBg =
  "linear-gradient(rgba(245,245,245,0.08) 3px, transparent 3px), " +
  "linear-gradient(90deg, rgba(245,245,245,0.08) 3px, transparent 3px)";

const outerStyle = {
  display: "flex",
  position: "relative",
  width: "100%",
  height: "100%",
  backgroundColor: "#0a0a0a",
  backgroundImage: gridBg,
  backgroundSize: "64px 64px",
  padding: "48px",
  fontFamily: "JetBrains Mono",
  color: "#ffffff",
};

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  border: "3px solid #ffffff",
  padding: "48px",
  width: "100%",
  height: "100%",
};

function buildPostCard(title, date, rt, description) {
  const meta = rt ? `${date}  •  ${rt}` : date;

  return {
    type: "div",
    props: {
      style: outerStyle,
      children: {
        type: "div",
        props: {
          style: cardStyle,
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
            description
              ? {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      marginTop: 24,
                      fontSize: 36,
                      letterSpacing: "0.1em",
                      opacity: 0.7,
                    },
                    children: description,
                  },
                }
              : null,
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  marginTop: description ? 16 : 24,
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
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  position: "absolute",
                  bottom: 48,
                  left: 48,
                  right: 48,
                  fontSize: 36,
                  fontWeight: 700,
                },
                children: [
                  {
                    type: "span",
                    props: {
                      style: { letterSpacing: "0.1em", color: "#ffcc00" },
                      children: "alxmy.me",
                    },
                  },
                  {
                    type: "span",
                    props: {
                      style: {
                        letterSpacing: "0.2em",
                        opacity: 0.7,
                      },
                      children: site.author,
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
  };
}

function buildSiteCard() {
  return {
    type: "div",
    props: {
      style: outerStyle,
      children: {
        type: "div",
        props: {
          style: cardStyle,
          children: [
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  fontSize: 128,
                  fontWeight: 800,
                  lineHeight: 0.9,
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                },
                children: [
                  { type: "span", props: { children: "Alexander" } },
                  {
                    type: "span",
                    props: {
                      style: { color: "#ffcc00" },
                      children: "May",
                    },
                  },
                ],
              },
            },
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  marginTop: 24,
                  fontSize: 36,
                  letterSpacing: "0.1em",
                  opacity: 0.7,
                },
                children: "Frontend engineer with a security habit",
              },
            },
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  position: "absolute",
                  bottom: 48,
                  left: 48,
                  fontSize: 36,
                  fontWeight: 700,
                  color: "#ffcc00",
                },
                children: "alxmy.me",
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
await mkdir("_site/images", { recursive: true });

// Site-wide OG
await generateImage(buildSiteCard(), "_site/images/og.png");

// Per-post OG
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
  const description = data.description || "";

  await generateImage(buildPostCard(title, date, rt, description), `_site/og/${slug}.png`);
  count++;
}

console.log(
  `Done — ${count + 1} OG image${count ? "s" : ""} generated (1 site + ${count} post${count !== 1 ? "s" : ""})`,
);
