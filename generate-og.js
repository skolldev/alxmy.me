import { Resvg } from "@resvg/resvg-js";
import { glob, mkdir, readFile, writeFile } from "node:fs/promises";
import { basename } from "node:path";
import readingTime from "reading-time";
import satori from "satori";
import { decompress } from "wawoff2";

const site = JSON.parse(await readFile("src/_data/site.json", "utf-8"));

// Satori doesnt take woff2, so we need to decompress it
const loadFont = (path) =>
  readFile(path)
    .then(decompress)
    .then((data) => Buffer.from(data));

const [fontRegular, fontSemiBold, fontBold] = await Promise.all([
  loadFont("og-fonts/mona-sans-latin-400-normal.woff2"),
  loadFont("og-fonts/mona-sans-latin-600-normal.woff2"),
  loadFont("og-fonts/mona-sans-latin-700-normal.woff2"),
]);

const fonts = [
  { name: "Mona Sans", data: fontRegular, weight: 400, style: "normal" },
  { name: "Mona Sans", data: fontSemiBold, weight: 600, style: "normal" },
  { name: "Mona Sans", data: fontBold, weight: 700, style: "normal" },
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

// Colours mirror the light theme tokens in src/css/input.css
const C = {
  bg: "#f8f9fb",
  ink: "#16181d",
  ink2: "#555a66",
  line: "#e3e5ea",
  accent: "#3b4ed8",
};

const outerStyle = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  width: "100%",
  height: "100%",
  backgroundColor: C.bg,
  backgroundImage:
    "radial-gradient(circle at 88% 12%, rgba(59,78,216,0.16), rgba(59,78,216,0) 45%), " +
    "radial-gradient(circle at 70% 100%, rgba(80,170,220,0.14), rgba(80,170,220,0) 45%)",
  padding: "72px 80px",
  fontFamily: "Mona Sans",
  color: C.ink,
};

const el = (style, children) => ({
  type: "div",
  props: { style: { display: "flex", ...style }, children },
});

function footer() {
  return el(
    {
      marginTop: "auto",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: `2px solid ${C.line}`,
      paddingTop: 28,
      fontSize: 28,
      color: C.ink2,
    },
    [
      el({ fontWeight: 600, color: C.ink }, site.author),
      el({ color: C.ink, fontWeight: 600 }, "alxmy.me"),
    ],
  );
}

function buildPostCard(title, date, rt, description) {
  const meta = rt ? `${date}  ·  ${rt}` : date;
  return el(outerStyle, [
    el({ fontSize: 26, color: C.ink2, marginBottom: 28 }, meta),
    el(
      {
        fontSize: title.length > 40 ? 64 : 80,
        fontWeight: 700,
        lineHeight: 1.02,
        letterSpacing: "-0.035em",
        maxWidth: 960,
      },
      title,
    ),
    description
      ? el(
          { marginTop: 28, fontSize: 32, lineHeight: 1.4, color: C.ink2, maxWidth: 940 },
          description,
        )
      : null,
    footer(),
  ]);
}

function buildSiteCard() {
  return el(outerStyle, [
    el(
      {
        flexDirection: "column",
        fontSize: 140,
        fontWeight: 700,
        lineHeight: 0.92,
        letterSpacing: "-0.045em",
        marginTop: 24,
      },
      [el({}, "Alexander"), el({}, "May")],
    ),
    el(
      { marginTop: 36, fontSize: 36, lineHeight: 1.35, color: C.ink2, maxWidth: 860 },
      "Frontend engineer in Munich. Angular and TypeScript.",
    ),
    footer(),
  ]);
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

  await generateImage(
    buildPostCard(title, date, rt, description),
    `_site/og/${slug}.png`,
  );
  count++;
}

console.log(`${count + 1} OG images generated (1 site + ${count} posts)`);
