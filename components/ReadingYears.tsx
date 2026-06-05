"use client";

import { useState } from "react";
import type { reading as ReadingContent } from "@/app/content";

type Reading = typeof ReadingContent;
type Year = Reading["years"][number];

export default function ReadingYears({
  years,
  eyebrow,
  title,
}: {
  years: Year[];
  eyebrow: string;
  title: string;
}) {
  // Filter tabs are derived from the data: every year present + "All".
  // To add a new year, just append a year block in content.ts.
  const tabs = ["All", ...years.map((y) => y.year)];
  const [active, setActive] = useState<string>(years[0]?.year ?? "All");
  const visible = active === "All" ? years : years.filter((y) => y.year === active);

  return (
    <>
      <div
        className="between"
        style={{ alignItems: "end", marginBottom: 28, flexWrap: "wrap", gap: 16 }}
      >
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2 style={{ marginTop: 10 }}>{title}</h2>
        </div>
        <div className="row" style={{ gap: 6, flexWrap: "wrap" }}>
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              className={`filter-pill${active === t ? " is-active" : ""}`}
              onClick={() => setActive(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {visible.map((yr, idx) => (
        <YearBlock key={yr.year} year={yr} marginTop={idx === 0 ? 0 : 36} forceExpanded={active === yr.year} />
      ))}
    </>
  );
}

function YearBlock({
  year: yr,
  marginTop,
  forceExpanded,
}: {
  year: Year;
  marginTop: number;
  forceExpanded: boolean;
}) {
  // If the user explicitly picked this year, expand it: show full books if we have
  // them, otherwise fall through to the mini-books preview.
  const showFullBooks = "books" in yr && yr.books && yr.books.length > 0;
  const showMini = "miniBooks" in yr && yr.miniBooks && yr.miniBooks.length > 0;

  return (
    <div className="year-block" style={{ marginTop }}>
      <div className={`year-head${"muted" in yr && yr.muted && !forceExpanded ? " muted" : ""}`}>
        <div className="serif year-label">{yr.year}</div>
        <div className="year-summary">
          {yr.summary.map((s) => {
            const suffix = "suffix" in s ? s.suffix : undefined;
            return (
              <div key={s.label}>
                <span className="mono muted">{s.label}</span> <strong>{s.value}</strong>
                {suffix && (
                  <>
                    {" "}
                    <span className="muted">{suffix}</span>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {showFullBooks && (
        <div className="book-list">
          {yr.books!.map((b) => (
            <article className="bk" key={b.title}>
              <div className="bk-thumb" style={{ background: b.coverGradient }}>
                <span className="bk-meta">{b.coverMeta}</span>
                <span className="bk-title">{b.coverTitle}</span>
              </div>
              <div>
                <div className="bk-line">
                  <h4>
                    {b.title}
                    {b.favourite && <span className="bk-star"> ★</span>}
                  </h4>
                  <span className="mono muted">{b.when}</span>
                </div>
                <p className="mono muted" style={{ fontSize: 12 }}>
                  {b.meta}
                </p>
                <p style={{ fontSize: 15, marginTop: 6 }}>{b.body}</p>
              </div>
            </article>
          ))}
        </div>
      )}

      {showMini && (
        <div className="row" style={{ gap: 10, flexWrap: "wrap", marginTop: showFullBooks ? 28 : 22 }}>
          {yr.miniBooks!.map((m) => (
            <div key={m.title} className="mini-bk" style={{ background: m.gradient }}>
              {m.title}
            </div>
          ))}
          {"moreLabel" in yr && yr.moreLabel && <div className="mini-bk more">{yr.moreLabel}</div>}
        </div>
      )}
    </div>
  );
}
