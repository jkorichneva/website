"use client";

import { useMemo, useState } from "react";
import type { running as RunningContent } from "@/app/content";

type Running = typeof RunningContent;
type Row = Running["raceLog"]["rows"][number];

// Derive a coarse kind from the per-row kindTone field:
//   "sky"  → Tri, "rose" → Ultra, anything else → Run.
function rowKind(r: Row): "Run" | "Tri" | "Ultra" {
  if (r.kindTone === "sky") return "Tri";
  if (r.kindTone === "rose") return "Ultra";
  return "Run";
}

// Parse the trailing " '25" / " '26" off "Apr 27 '26".
function rowYear(r: Row): string | null {
  const m = r.date.match(/'(\d{2})\s*$/);
  if (!m) return null;
  const yy = parseInt(m[1], 10);
  return String(2000 + yy);
}

export default function RaceLog({
  data,
}: {
  data: Running["raceLog"];
}) {
  const years = useMemo(() => {
    const set = new Set<string>();
    for (const r of data.rows) {
      const y = rowYear(r);
      if (y) set.add(y);
    }
    return Array.from(set).sort((a, b) => Number(b) - Number(a));
  }, [data.rows]);

  const [active, setActive] = useState<string>("All");

  const visible = useMemo(() => {
    if (active === "All") return data.rows;
    if (["Run", "Tri", "Ultra"].includes(active)) {
      return data.rows.filter((r) => rowKind(r) === active);
    }
    return data.rows.filter((r) => rowYear(r) === active);
  }, [active, data.rows]);

  const tabs = ["All", "Run", "Tri", "Ultra", ...years];

  return (
    <section style={{ paddingBlock: 64, background: "var(--bg-soft)" }}>
      <div className="wrap">
        <div
          className="between"
          style={{ alignItems: "end", marginBottom: 28, flexWrap: "wrap", gap: 16 }}
        >
          <div>
            <span className="eyebrow">{data.eyebrow}</span>
            <h2 style={{ marginTop: 10 }}>{data.title}</h2>
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

        <div className="race-table card" style={{ padding: 0 }}>
          <div className="race-row race-head">
            <div>Date</div>
            <div>Race</div>
            <div>Distance</div>
            <div className="num">Time</div>
            <div className="num">Pace</div>
            <div className="num">Place</div>
            <div />
          </div>

          {visible.map((r) => (
            <div
              className={`race-row${"pinned" in r && r.pinned ? " pinned" : ""}`}
              key={r.date + r.race}
            >
              <div className="mono">{r.date}</div>
              <div>
                <div>
                  <strong>{r.race}</strong>
                  {"pr" in r && r.pr && (
                    <>
                      {" "}
                      <span className="tag sun" style={{ marginLeft: 4 }}>
                        PR
                      </span>
                    </>
                  )}
                </div>
                <div className="mono muted" style={{ fontSize: 12 }}>
                  {r.sub}
                </div>
              </div>
              <div>
                <span
                  className={`tag${
                    r.kindTone === "sky" ? " sky" : r.kindTone === "rose" ? " rose" : ""
                  }`}
                >
                  {r.kind}
                </span>
              </div>
              <div className="num serif" style={{ fontSize: 20 }}>
                {r.time}
              </div>
              <div className="num mono">{r.pace}</div>
              <div className="num mono">{r.place}</div>
              <div className="num">
                <a href="#" style={{ border: "none" }}>
                  →
                </a>
              </div>
            </div>
          ))}

          {visible.length === 0 && (
            <div className="race-row" style={{ gridTemplateColumns: "1fr" }}>
              <div className="mono muted">No races match this filter.</div>
            </div>
          )}

          {data.footLink && active === "All" && (
            <div className="race-row race-foot">
              <div />
              <div>
                <a href="#" style={{ border: "none", fontWeight: 500 }}>
                  {data.footLink}
                </a>
              </div>
              <div /><div /><div /><div /><div />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
