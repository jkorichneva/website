// ─── ABOUT ───────────────────────────────────────────────────────────────
export const about = {
  pageTitle: "About — the wombat notebook",
  hero: {
    eyebrow: "A long-form hello",
    headlineLines: ["About me,", "and what I do", "between meetings."],
    image: { src: "/wombat-laptop.png", alt: "Wombat at a laptop" },
  },
  essay: {
    pull: "I'm a senior frontend engineer, currently learning to be the back half too.",
    paragraphs: [
      "I've been building things for the web for about a decade now — long enough to have written jQuery in production, watched Angular replace itself, and shipped the same modal component in four different design systems. The thing I love about frontend work has stayed exactly the same: there's a person on the other side of the screen, and what you build is what they actually touch.",
      "Right now I lead the design-systems guild at a fintech in Vienna. I spend my days arguing about <em>naming things</em>, drawing token diagrams on glass walls, and trying to make the gap between Figma and React smaller by another inch.",
      "Lately, though, the part of the stack I haven't touched in years has started looking interesting again. I'm teaching myself Go, building a tiny CMS from scratch, and remembering how good a clean database schema can feel. \"Full-stack\" is a goofy word, but I want the whole picture again.",
      "When I'm not in front of a screen I'm usually out on a long run, or in a coffee shop with a paperback and a sketchbook. The wombat is a long story.",
    ],
    callout: {
      label: "What I'm best at",
      body: "Untangling messy frontend codebases, building component libraries other engineers actually want to use, and translating between designers and engineers without losing anyone in the middle.",
    },
  },
  sidebar: {
    factsLabel: "At a glance",
    facts: [
      { label: "Based in", value: "Berlin, Germany" },
      { label: "Currently", value: "Senior Frontend Engineer", sub: "@ Kaufland e-commerce" },
      { label: "Learning", value: "Go" },
      { label: "Languages", value: "English · German · Russian" },
    ],
    cvButton: { label: "Download CV (PDF)", href: "#" },
    emailButton: { label: "Or email me →", href: "@mailto:ianakorichneva@gmail.com" },
    elsewhereLabel: "Find me",
    elsewhere: [
      { label: "GitHub", value: "@jkorichneva", href: "#" },
      { label: "LinkedIn", value: "/in/yourname", href: "#" },
      { label: "Strava", value: "/athletes/yourname", href: "#" },
    ],
  },
  experience: {
    title: "Where I've worked.",
    meta: "Reverse chronological · ~10 years",
    rows: [
      {
        date: "2023 — Now",
        place: "Vienna, AT",
        role: "Senior Frontend Engineer",
        company: "Saturn Finance",
        body: "Lead of the design-systems guild. Rebuilt the customer-facing app on React 18 + RSC, cut bundle size by 38%, and shipped a token-driven theme system used across web, iOS and Android. Mentor for two mid-level engineers.",
        tags: ["React", "TypeScript", "Design systems", "Storybook", "Playwright"],
      },
      {
        date: "2020 — 2023",
        place: "Remote",
        role: "Frontend Engineer",
        company: "Bluefield Studio",
        body: "Agency life. Shipped 14 client projects across publishing, ed-tech and e-commerce. Wrote a lot of MDX, learnt how to estimate properly, and discovered I really enjoy the messy first week of a project.",
        tags: ["Next.js", "Sanity", "CSS", "a11y"],
      },
      {
        date: "2017 — 2020",
        place: "Berlin, DE",
        role: "Web Developer",
        company: "Hoot & Co.",
        body: "My first proper job out of uni. Built marketing sites in Vue, learnt how a CI pipeline works, and was the only frontend person for most of it — which was terrifying then and wonderful in retrospect.",
        tags: ["Vue", "Nuxt", "Sass", "Webpack"],
      },
      {
        date: "2013 — 2017",
        place: "Education",
        role: "B.Sc. Media Informatics",
        company: "TU Berlin · thesis on accessible color systems",
        body: "Found the web through a side-elective in HCI. Spent more time on the student newspaper's website than on coursework, which turned out to be a good investment.",
        tags: [],
      },
    ],
  },
  beliefs: {
    title: "Things I think about a lot.",
    items: [
      {
        num: "01",
        head: "Software is mostly written for other engineers.",
        body: "The best API is the one a colleague gets right on their first try, half-asleep, with no docs open.",
      },
      {
        num: "02",
        head: "Design tokens beat opinions.",
        body: "Once a value lives in a token, you can argue about it once instead of forever.",
      },
      {
        num: "03",
        head: "Performance is a design property.",
        body: "A 200ms page transition feels like a different product than a 1.2s one — same screens, different app.",
      },
      {
        num: "04",
        head: "If it's hard to type, it's hard to maintain.",
        body: "Fighting TypeScript usually means the boundary is wrong, not the language.",
      },
    ],
  },
  skills: {
    title: "What I'm good at (today).",
    items: [
      { name: "React, TypeScript, modern CSS", width: 96, accent: false },
      { name: "Design systems & tokens", width: 94, accent: false },
      { name: "Build pipelines, Vite, Turborepo", width: 80, accent: false },
      { name: "Accessibility & testing", width: 78, accent: false },
      { name: "Node / Express APIs", width: 64, accent: true },
      { name: "Go, Postgres", note: "(learning)", width: 38, accent: true },
      { name: "Kubernetes, infra", note: "(brave but cautious)", width: 28, accent: true },
    ],
  },
  talks: {
    title: "A few talks & writeups.",
    items: [
      {
        meta: "Talk · CSS Day '25",
        title: "A token is not a variable",
        body: "On the gulf between design tokens and CSS custom properties, and why bridging it is harder than it looks.",
        href: "#",
      },
      {
        meta: "Essay · 2024",
        title: "Component APIs we regret",
        body: "A walk through five real API decisions, why we made them, and what we'd do differently with a fresh head.",
        href: "#",
      },
      {
        meta: "Talk · Vienna.js",
        title: "React Server Components, gently",
        body: "For frontend folks who haven't touched a server in a while — what changes, what doesn't, and how to begin.",
        href: "#",
      },
    ],
  },
};
