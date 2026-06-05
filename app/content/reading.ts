// ─── READING ─────────────────────────────────────────────────────────────
export const reading = {
  pageTitle: "Reading — the wombat notebook",
  hero: {
    eyebrow: "Reading log",
    headlineLines: ["Books I've", "read, am reading,", "or keep "],
    headlineEm: "not",
    headlineEnd: " finishing.",
    intro:
      "Mostly fiction, some history, occasional tech. I keep a paper notebook of favourite lines. These are the books — the lines stay private.",
    image: { src: "/wombat-reading.png", alt: "" },
  },
  stats: [
    { num: "186", label: "books logged" },
    { num: "23", label: "finished in 2025" },
    { num: "9", label: "so far this year" },
    { num: "14", label: "on the favourites shelf" },
  ],
  // Year filter chips on the Reading page are derived from `years[].year`
  // below — to add a new year just append a block, no need to register it here.
  yearSection: {
    eyebrow: "Year by year",
    title: "Everything I've finished.",
  },
  years: [
    {
      year: "2026",
      muted: false,
      summary: [
        { label: "Finished", value: "9 books" },
        { label: "Favourites", value: "3", suffix: "marked with ★" },
        { label: "Average", value: "312 p." },
      ],
      books: [
        {
          coverGradient: "linear-gradient(160deg, #243A57, #486593)",
          coverMeta: "novel",
          coverTitle: "In Memoriam",
          title: "In Memoriam",
          favourite: true,
          when: "Mar — Apr",
          meta: "Alice Winn · 2023 · 386 p.",
          body:
            "A WWI love story between two schoolboys. Wrenching, surprisingly funny in places, and one of those books I'm going to think about for years. Read it slowly on the train to Berlin and missed my stop twice.",
        },
        {
          coverGradient: "linear-gradient(150deg, #6F4A1E, #C99B5B)",
          coverMeta: "essays",
          coverTitle: "A Field\nGuide",
          title: "A Field Guide to Getting Lost",
          when: "Feb",
          meta: "Rebecca Solnit · 2005 · 224 p.",
          body:
            "Slow, drifting, somewhere between memoir and philosophy. Read one essay a night. The chapter on the colour blue is the one everyone warns you about, deservedly.",
        },
        {
          coverGradient: "linear-gradient(155deg, #4F6334, #9BB7A6)",
          coverMeta: "novel",
          coverTitle: "Piranesi",
          title: "Piranesi",
          favourite: true,
          when: "Feb",
          meta: "Susanna Clarke · 2020 · 245 p.",
          body:
            "Reread. Even better the second time, once the mystery is gone and you can just live in the house.",
        },
        {
          coverGradient: "linear-gradient(150deg, #B5786A, #E8B5A8)",
          coverMeta: "novel",
          coverTitle: "Tomorrow×3",
          title: "Tomorrow, and Tomorrow, and Tomorrow",
          when: "Jan",
          meta: "Gabrielle Zevin · 2022 · 416 p.",
          body:
            "Read it on holiday. Loved 70% of it, drifted on the back third. Will revisit on paper next time — I think I read it too fast on Kindle.",
        },
        {
          coverGradient: "linear-gradient(145deg, #3D2E20, #6B5640)",
          coverMeta: "non-fic",
          coverTitle: "Designing\nData",
          title: "Designing Data-Intensive Applications",
          when: "Jan — Feb",
          meta: "Martin Kleppmann · 2017 · 590 p.",
          body:
            "Started this when I started learning Go. Finished it because it's that rare technical book that actually makes you smarter at the kitchen table, not just at the keyboard.",
        },
        {
          coverGradient: "linear-gradient(165deg, #486593, #7BB0C8)",
          coverMeta: "novel",
          coverTitle: "Trust",
          title: "Trust",
          favourite: true,
          when: "Jan",
          meta: "Hernán Díaz · 2022 · 416 p.",
          body:
            "Four books in one, each unsettling what came before. The structural trick is the point and it lands.",
        },
      ],
      more: "Show 3 more from 2026 →",
    },
    {
      year: "2025",
      muted: true,
      summary: [
        { label: "Finished", value: "23 books" },
        { label: "Favourites", value: "5" },
        { label: "Average", value: "284 p." },
      ],
      miniBooks: [
        { title: "Babel", gradient: "linear-gradient(160deg, #243A57, #486593)" },
        { title: "The Bee Sting", gradient: "linear-gradient(150deg, #6F4A1E, #C99B5B)" },
        { title: "Hellfire", gradient: "linear-gradient(155deg, #4F6334, #9BB7A6)" },
        { title: "North Woods", gradient: "linear-gradient(165deg, #486593, #7BB0C8)" },
        { title: "Birnam Wood", gradient: "linear-gradient(150deg, #B5786A, #E8B5A8)" },
        { title: "The Maniac", gradient: "linear-gradient(145deg, #3D2E20, #6B5640)" },
        { title: "The Wager", gradient: "linear-gradient(160deg, #8C6328, #F0CC6E)" },
      ],
      moreLabel: "+ 16 more",
      expand: "Expand 2025 →",
    },
    {
      year: "2024",
      muted: true,
      summary: [
        { label: "Finished", value: "31 books" },
        { label: "Favourites", value: "7" },
        { label: "Average", value: "302 p." },
      ],
      miniBooks: [
        { title: "Orbital", gradient: "linear-gradient(160deg, #486593, #243A57)" },
        { title: "Klara & Sun", gradient: "linear-gradient(150deg, #6F4A1E, #C99B5B)" },
        { title: "Lapvona", gradient: "linear-gradient(155deg, #B5786A, #E8B5A8)" },
        { title: "Sea of Tranquility", gradient: "linear-gradient(150deg, #4F6334, #9BB7A6)" },
        { title: "Crying in H Mart", gradient: "linear-gradient(150deg, #8C6328, #F0CC6E)" },
        { title: "The Overstory", gradient: "linear-gradient(145deg, #3D2E20, #6B5640)" },
      ],
      moreLabel: "+ 25 more",
      expand: "Expand 2024 →",
    },
  ],
};
