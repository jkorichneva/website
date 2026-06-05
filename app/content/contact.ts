// ─── CONTACT ─────────────────────────────────────────────────────────────
export const contact = {
  pageTitle: "Hello — the wombat notebook",
  hero: {
    eyebrow: "Say hello",
    headlineLines: ["Write me", "a letter. "],
    headlineEm: "A long one.",
    intro:
      "The internet's best feature is still a long, slow email from someone you don't know yet. Tell me what you're working on. Tell me about your dog. Tell me which book I should read next.",
    image: { src: "/wombat-sitting.png", alt: "" },
  },
  form: {
    nameLabel: "Your name",
    namePlaceholder: "e.g. Hana Müller",
    emailLabel: "Your email",
    emailPlaceholder: "you@somewhere.net",
    topicLabel: "What's this about?",
    topics: [
      "A nice hello",
      "A work conversation",
      "A speaking ask",
      "A book recommendation",
      "Something else",
    ],
    bodyLabel: "The letter",
    bodyHint: "(take your time)",
    bodyPlaceholder: "Hi — I came across your site because…",
    hint: "I reply within a week, usually faster. No newsletter signup, promise.",
    submit: "Send letter",
    thanks: {
      title: "Off it goes. ✉️",
      body: "Thanks for writing. I'll get back to you soon — wombat's honour.",
    },
  },
  direct: {
    label: "Direct email",
    address: "hello@yourname.dev",
    addressBreakAt: 6,
    body: "If forms aren't your thing — they aren't mine either.",
    button: { label: "Open in mail client →", href: "mailto:hello@yourname.dev" },
  },
  elsewhere: {
    label: "Elsewhere",
    items: [
      { label: "GitHub", value: "@yourhandle", href: "#" },
      { label: "Bluesky", value: "@yourhandle.bsky.social", href: "#" },
      { label: "LinkedIn", value: "/in/yourname", href: "#" },
      { label: "Strava", value: "athletes/yourname", href: "#" },
      { label: "Read.cv", value: "read.cv/yourname", href: "#" },
      { label: "Letterboxd", value: "@yourname", href: "#" },
      { label: "Are.na", value: "@yourname", href: "#" },
    ],
  },
  office: {
    label: "Office hours",
    title: "Coffee on Thursdays.",
    body: "If you're in Vienna and want to talk frontend, design systems, or training plans, my calendar is open one afternoon a week.",
    button: { label: "Book a slot →", href: "#" },
  },
  recruiters: {
    label: "Recruiters · please read",
    body:
      "Happy to chat about senior frontend or full-stack roles, EU-remote, IC track. Not currently available for short-term contracts. Please include comp band & stack in your first email — saves us both a round.",
  },
  signoff: {
    body: "Thanks for reading this far. Wombat says hi.",
    image: { src: "/wombat-sitting.png", alt: "" },
  },
};
