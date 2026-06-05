// ─────────────────────────────────────────────────────────────────────────
// the wombat notebook — content barrel.
//
// Each page's copy lives in its own file in this folder. This index just
// re-exports everything so existing imports (`from "@/app/content"`) keep
// working — but new code can also import from a specific file if it prefers
// (e.g. `import { home } from "@/app/content/home"`).
//
// File map
//   site.ts      — brand, nav, footer links
//   home.ts      — Home page
//   about.ts     — About / CV
//   running.ts   — Running & triathlon (incl. race log, PRs, photos)
//   reading.ts   — Reading log (years + books)
//   sketches.ts  — Sketches (+ the `Sketch` type)
//   projects.ts  — Projects (+ "Bits & bobs")
//   contact.ts   — Hello / contact page
//
// Adding new content (no code changes needed):
//   • New book year → append a block to `reading.years`. Year filter chips
//     are derived from this array.
//   • New book within a year → append to that year's `books` array, or
//     `miniBooks` for a compact preview.
//   • New race → append to `running.raceLog.rows`. Year & kind chips on the
//     Race log are derived from the row data.
//   • New project → append to `projects.items`. Status chips + counts come
//     from each item's `status.dot`.
//   • New sketch → drop the file in `public/sketches/`, then append a
//     `Sketch` entry to `sketches.items` (see sketches.ts).
//   • New nav / footer link → edit `nav` / `footerLinks` in site.ts.
// ─────────────────────────────────────────────────────────────────────────

export * from "./site";
export * from "./home";
export * from "./about";
export * from "./running";
export * from "./reading";
export * from "./sketches";
export * from "./projects";
export * from "./contact";
