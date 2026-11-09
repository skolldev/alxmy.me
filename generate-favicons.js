// Generates the favicon set in src/favicons/ from one source mark.
// Run manually after changing the mark: `npm run build:favicons`.
//
// Mark: "M." in Mona Sans 700, white on the brand indigo tile, with a
// light-cyan full stop. Colours mirror --accent (oklch 0.5 0.2 266) in
// src/css/input.css, shaded a step lighter/darker for the tile gradient.
import { Resvg } from "@resvg/resvg-js";
import { readFile, writeFile } from "node:fs/promises";
import satori from "satori";
import { decompress } from "wawoff2";

const OUT = "src/favicons";
const SIZE = 512;

const font = Buffer.from(
  await decompress(await readFile("og-fonts/mona-sans-latin-700-normal.woff2")),
);
const fonts = [{ name: "Mona Sans", data: font, weight: 700, style: "normal" }];

const C = {
  tileTop: "#4a76f0",
  tile: "#2d54d3", // --accent
  tileBottom: "#2238b8",
  mark: "#ffffff",
  stop: "#9ff0ff",
};

const h = (type, style, children) => ({ type, props: { style, children } });

// `radius` 0 = full-bleed square (iOS and maskable icons get masked by the OS).
// `scale` shrinks the glyph so it stays inside the maskable safe zone.
const mark = (radius, scale = 1) =>
  h(
    "div",
    {
      width: SIZE,
      height: SIZE,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: radius,
      background: `linear-gradient(180deg, ${C.tileTop} 0%, ${C.tile} 55%, ${C.tileBottom} 100%)`,
    },
    h("div", { display: "flex", alignItems: "flex-end" }, [
      h(
        "div",
        {
          display: "flex",
          fontFamily: "Mona Sans",
          fontWeight: 700,
          fontSize: 320 * scale,
          lineHeight: 1,
          color: C.mark,
        },
        "M",
      ),
      h("div", {
        width: 68 * scale,
        height: 68 * scale,
        borderRadius: 34 * scale,
        background: C.stop,
        marginLeft: 14 * scale,
        marginBottom: 22 * scale,
      }),
    ]),
  );

const render = (el) => satori(el, { width: SIZE, height: SIZE, fonts });
const png = (svg, size) =>
  new Resvg(svg, { fitTo: { mode: "width", value: size } }).render().asPng();

// ICO with embedded PNG payloads (supported by every browser that reads .ico).
function ico(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  let offset = 6 + 16 * pngs.length;
  const entries = pngs.map(({ size, data }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt16LE(1, 4); // colour planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    return e;
  });
  return Buffer.concat([header, ...entries, ...pngs.map((p) => p.data)]);
}

const rounded = await render(mark(112));
const square = await render(mark(0));
const maskable = await render(mark(0, 0.78));

await writeFile(`${OUT}/favicon.svg`, rounded);
await writeFile(`${OUT}/favicon-16x16.png`, png(rounded, 16));
await writeFile(`${OUT}/favicon-32x32.png`, png(rounded, 32));
await writeFile(
  `${OUT}/favicon.ico`,
  ico([16, 32, 48].map((size) => ({ size, data: png(rounded, size) }))),
);
await writeFile(`${OUT}/apple-touch-icon.png`, png(square, 180));
await writeFile(`${OUT}/android-chrome-192x192.png`, png(rounded, 192));
await writeFile(`${OUT}/android-chrome-512x512.png`, png(rounded, 512));
await writeFile(`${OUT}/maskable-512x512.png`, png(maskable, 512));

console.log(`Favicons written to ${OUT}/`);
