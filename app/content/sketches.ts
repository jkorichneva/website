// ─── SKETCHES ────────────────────────────────────────────────────────────
//
// To add a new sketch:
//   1. Drop the image file in `public/sketches/` (any size — it'll be cover-fit).
//   2. Add an entry to `sketches.items` below:
//        {
//          size: "default",                          // "default" | "wide" | "tall"
//          image: "/sketches/your-file.jpg",         // OR svgId for built-in SVGs
//          title: "Drawing title",
//          when: "May 19",
//          body: "Caption.",
//          tags: ["plants", "vienna"],               // optional — surfaces as filter chips
//        }
//   3. Save. The grid + filter chips auto-update.
//
export type Sketch = {
  size?: "default" | "wide" | "tall";
  bg?: string;
  image?: string;        // URL of a raster image in /public, e.g. "/sketches/foo.jpg"
  svgId?: string;        // ID of a built-in SVG in components/SketchArt.tsx
  title: string;
  when: string;
  body: string;
  tags?: string[];
};

export const sketches = {
  pageTitle: "Sketches — the wombat notebook",
  hero: {
    eyebrow: "From a paper notebook",
    headlineLines: ["Sketches.", "Scanned in."],
    headlineEm: "Nothing precious.",
    intro:
      "I draw most mornings while the coffee is brewing — ten minutes, one page, no plan. These are the ones that didn't end up in the bin. Pencil, fineliner, occasionally watercolour when I'm pretending to have my life together.",
    image: { src: "/wombat-drawing.png", alt: "Wombat drawing" },
  },
  items: [
    {
      size: "wide",
      bg: "#FBF7EE",
      svgId: "coffee",
      title: "Sunday morning, with cold filter",
      when: "May 19",
      body: "Pencil & fineliner · A5 · drawn at the kitchen table while the water boiled twice.",
    },
    {
      size: "default",
      bg: "#EFEBE0",
      svgId: "plant",
      title: "The kitchen monstera",
      when: "May 11",
      body: "Still alive. Mostly because the neighbour waters it when I forget.",
    },
    {
      size: "default",
      bg: "#EFE9DC",
      svgId: "shoe",
      title: "My beat-up Saucony",
      when: "Apr 30",
      body: "1,180 km and still going. Probably one race away from the bin.",
    },
    {
      size: "tall",
      bg: "#F1E9D5",
      svgId: "cathedral",
      title: "From the Wienzeile café",
      when: "Apr 14",
      body: "Drew this for half an hour while waiting for a friend who didn't show.",
    },
    {
      size: "default",
      bg: "#EEECE2",
      svgId: "keyboard",
      title: "Mechanical keyboard, six o'clock",
      when: "Mar 22",
      body: "One of those drawings that turned out way better than the morning I had.",
    },
    {
      size: "wide",
      bg: "#F2EEE0",
      svgId: "hills",
      title: "Long-run loop, Wienerwald",
      when: "Mar 09",
      body: "Watercolour wash, fineliner over the top. Drawn from a photo on my phone.",
    },
    {
      size: "default",
      bg: "#EAE5D5",
      svgId: "face",
      title: "Self-portrait, ten minutes",
      when: "Feb 21",
      body: "The kind that's awful but I can't bring myself to throw away.",
    },
    {
      size: "tall",
      bg: "#EFE9DC",
      svgId: "books",
      title: "To-be-read, January",
      when: "Jan 28",
      body: "Aspirational. Eight months later, four read. Better than last year.",
    },
    {
      size: "default",
      bg: "#EFEBE0",
      svgId: "bike",
      title: "The borrowed road bike",
      when: "Jan 12",
      body: "Drew this the day I bought my own. It still lives in the hallway.",
    },
  ] as Sketch[],
  loadMore: "Load 24 more sketches →",
};
