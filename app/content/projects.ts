// ─── PROJECTS ────────────────────────────────────────────────────────────
export const projects = {
  pageTitle: "Projects — the wombat notebook",
  hero: {
    eyebrow: "Things I've made",
    headlineLines: ["Projects, side", "projects, and the", "occasional "],
    headlineEm: "good idea.",
    intro:
      "Some of these are shipped and earning their keep. Some are still in the oven. A couple didn't make it but taught me something useful on the way.",
    image: { src: "/wombat-browser.png", alt: "" },
  },
  // Filter chips on the Projects page are derived from the data:
  // each unique `status.dot` value below becomes a chip with an auto count.
  // Add a new status by inventing a key (e.g. "archived") and giving it a label here;
  // the dot color comes from CSS (.dot-<key> in globals.css).
  filters: {
    label: "STATUS",
    statusLabels: {
      live: "Live",
      cooking: "In progress",
      rest: "Resting",
      buried: "Buried",
    } as Record<string, string>,
  },
  items: [
    {
      featured: true,
      mockId: "dashboard",
      mockGradient: "linear-gradient(160deg, #F2E8D5, #E8D9B8)",
      status: { label: "Live in production", dot: "live" },
      tags: ["Design system"],
      when: "2023 — Now",
      title: "Saturn",
      titleEm: "UI Kit",
      body: "A 140-component design system shipping across web, iOS and Android for ~4 million users. I led the rebuild from a fork of MUI into a fully token-driven system. The interesting parts were the boring ones — naming, deprecation policy, and a tiny Figma plugin that does about 70% of the keep-in-sync work.",
      stack: ["React", "TypeScript", "Tokens", "Figma plugin", "Storybook"],
      stats: [
        { label: "Components", value: "142" },
        { label: "Consumers", value: "11 squads" },
        { label: "Bundle reduction", value: "−38%" },
      ],
      cta: { label: "Case study →", href: "#" },
    },
    {
      mockId: "terminal",
      mockGradient: "linear-gradient(160deg, #243A57, #486593)",
      status: { label: "Cooking", dot: "cooking" },
      tags: ["Personal"],
      when: "2026 → ?",
      title: "Nestor — a tiny CMS in Go",
      body: "The reason I'm learning Go. A single-binary CMS for hobby sites — blog posts, image galleries, a draft \"now\" page. Postgres, HTMX, no JS framework. About 60% done.",
      stack: ["Go", "Postgres", "HTMX", "Single-binary"],
    },
    {
      mockId: "map",
      mockGradient: "linear-gradient(155deg, #4F6334, #9BB7A6)",
      status: { label: "Live", dot: "live" },
      tags: ["Side project"],
      when: "2024",
      title: "Race Plan",
      body: "A planner for ultra runners — splits, aid-station nutrition, drop-bag contents. Started for my own races, ~600 monthly users now. Hand-coded SVG elevation profiles, no Mapbox bill.",
      stack: ["Next.js", "SVG", "Stripe"],
    },
    {
      mockId: "books",
      mockGradient: "linear-gradient(160deg, #6F4A1E, #C99B5B)",
      status: { label: "Live", dot: "live" },
      tags: ["Open source"],
      when: "2022 — Now",
      title: "readlog.js",
      body: "Tiny static-site generator for personal reading logs. 240 GitHub stars, somehow used by a research lab to track their journal club. The code that powers this site's reading page.",
      stack: ["JavaScript", "Markdown", "Static"],
    },
    {
      mockId: "swatches",
      mockGradient: "linear-gradient(155deg, #B5786A, #E8B5A8)",
      status: { label: "Resting", dot: "rest" },
      tags: ["Side project"],
      when: "2023",
      title: "tonelab",
      body: "A tiny playground for designing accessible colour scales using OKLCH. Got me invited to give a CSS Day talk, then I ran out of steam. Probably my favourite thing I've ever shipped.",
      stack: ["CSS", "a11y", "OKLCH"],
    },
    {
      mockId: "chart",
      mockGradient: "linear-gradient(155deg, #3D2E20, #6B5640)",
      status: { label: "Buried", dot: "buried" },
      tags: ["Lessons learned"],
      when: "2021 — 2022",
      title: "Pacepal (RIP)",
      body: "A social app for finding running partners by pace and pace alone. We had 300 weekly active users and an offer to be acquired by a company we did not want to be acquired by. Learned more about co-founders that year than about software.",
      stack: ["React Native", "Firebase"],
    },
  ],
  bits: {
    eyebrow: "Bits & bobs",
    title: "Smaller things, weekend things.",
    items: [
      {
        meta: "CLI",
        metaRight: "★ 1.2k",
        title: "tokens-to-css",
        body: "A 90-line CLI that turns a Figma tokens.json into CSS custom properties. Used at three companies I don't work for.",
      },
      {
        meta: "Browser ext",
        metaRight: "v0.4",
        title: "Lighter Hacker News",
        body: "Strips HN down to just the conversations I actually want to read. Three CSS rules, big quality of life.",
      },
      {
        meta: "Library",
        metaRight: "★ 480",
        title: "use-stable-callback",
        body: "A 22-line React hook that solved a specific pain in a specific way. Apparently I wasn't alone.",
      },
      {
        meta: "Bot",
        metaRight: "2025",
        title: "@wienlauf.bot",
        body: "A Mastodon bot that posts every official park run in Vienna with weather and a tiny map. Costs €0.40/mo.",
      },
      {
        meta: "One-pager",
        metaRight: "2024",
        title: "paceconverter.run",
        body: "min/km ↔ min/mi. No analytics, no ads, no JS framework. ~14k unique visits/mo somehow.",
      },
      {
        meta: "Toy",
        metaRight: "2023",
        title: "SVG flipbook",
        body: "A weekend project that turns hand-drawn frames into a 24fps SVG-only animation. Quietly delightful.",
      },
    ],
  },
};
