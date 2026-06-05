// ─── HOME ────────────────────────────────────────────────────────────────
export const home = {
  pageTitle: "Iana Korichneva",
  hero: {
    eyebrow: "welcome",
    greeting: "Hi, I'm",
    name: "Iana",
    headlineLines: ["I like wombats and dogs"], // ["I make websites,", "chase finish lines,", "and don't read enough."],
    intro:
      "Senior frontend engineer, slowly becoming a full-stack one. This is the place I keep my notes and drawings.",
    ctaPrimary: { label: "Read about me →", href: "/about" },
    ctaSecondary: { label: "See projects", href: "/projects" },
    meta: [
      { label: "Currently", value: "Building", emValue: "an offline-first app." },
      { label: "Training for", value: "Generali Probe Half Marathon", emValue: "August '26" },
    ],
    image: { src: "/wombat-sitting.png", alt: "Wombat sitting" },
  },
  index: {
    title: "What's in this little corner.",
    meta: "05 rooms · always under construction",
    tiles: [
      {
        num: "01",
        title: "About & CV",
        blurb:
          "Where I've worked on, what I'm trying to learn next.",
        href: "/about",
      },
      {
        num: "02",
        title: "Running & Triathlon",
        blurb:
          "A scrolling log of finish lines crossed and lessons collected along the way.",
        href: "/running",
      },
      {
        num: "03",
        title: "Reading",
        blurb:
          "Currently on the nightstand, plus everything I finished — year by year — with the bits that stuck.",
        href: "/reading",
      },
      {
        num: "04",
        title: "Drawings",
        blurb:
          "Watercolor and pencil mostly. Not all of them are good, but they were all fun to make.",
        href: "/drawings",
      },
      {
        num: "05",
        title: "Projects",
        blurb:
          "Things I've shipped, things still in the oven, and one or two that didn't quite make it. With links.",
        href: "/projects",
      },
    ],
  },
  recently: {
    eyebrow: "Recently",
    title: "What's been keeping me busy.",
    updated: "Updated in June 2026",
    reading: {
      tag: "Currently reading",
      progress: "80%",
      coverEyebrow: "Light reading haha",
      coverTitle: "Designing Data-Intensive Applications",
      title: "Designing Data-Intensive Applications",
      meta: "Legendary and for a good reason.",
      blurb:
        "Although I'm not a backend engineer, this book is great.",
      footLink: { label: "See the whole shelf →", href: "/reading" },
      footMeta: "",
    },
    race: {
      tag: "Surviving",
      date: "June 6th",
      title: "Berlin Triathlon",
      stats: [
        { label: "Time", value: "tbd" },
        { label: "Pace", value: "tbd", suffix: "/km" },
      ],
      blurb:
        "My first triathlon ever",
      footLink: { label: "Race log →", href: "/running" },
    },
  },
  now: {
    eyebrow: "/now",
    title: "May 2026, briefly",
    body: "Long-run mileage is back up to 60km/wk. Reading non-fiction mostly. Drawing every morning while the coffee brews. Trying not to ship a single new side-project until the Go thing is actually finished.",
    items: [
      { label: "Listening to", value: "Phoebe Bridgers, on repeat" },
      { label: "Cooking", value: "One Pot, Pantry — Anna Jones" },
      { label: "Avoiding", value: "Hacker News before 10am" },
    ],
  },
  cta: {
    title: "Want to say hi?",
    body: "I love a long email. Tell me about something you're building, a book you can't shake, or your favorite trail. I'll write back.",
    button: { label: "Get in touch →", href: "/contact" },
    image: { src: "/wombat-sitting.png", alt: "" },
  },
};
