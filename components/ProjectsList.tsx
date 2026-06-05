"use client";

import { useMemo, useState } from "react";
import ProjectMock from "@/components/ProjectMock";
import type { projects as ProjectsContent } from "@/app/content";

type Projects = typeof ProjectsContent;
type Item = Projects["items"][number];

export default function ProjectsList({
  items,
  filterLabel,
  statusLabels,
}: {
  items: Item[];
  filterLabel: string;
  statusLabels: Record<string, string>;
}) {
  // Derive filter pills from the data so adding a project with a new status
  // (or just one more "live" one) updates the counts automatically.
  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const it of items) c[it.status.dot] = (c[it.status.dot] ?? 0) + 1;
    return c;
  }, [items]);

  const dotKeys = Object.keys(counts);
  const [active, setActive] = useState<string>("all");
  const visible = active === "all" ? items : items.filter((it) => it.status.dot === active);

  return (
    <>
      <section style={{ paddingBlock: "0 32px" }}>
        <div
          className="wrap"
          style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}
        >
          <span className="mono muted" style={{ fontSize: 12, marginRight: 4 }}>
            {filterLabel}
          </span>
          <button
            type="button"
            className={`filter-pill${active === "all" ? " is-active" : ""}`}
            onClick={() => setActive("all")}
          >
            All <span className="ct">{items.length}</span>
          </button>
          {dotKeys.map((k) => (
            <button
              type="button"
              key={k}
              className={`filter-pill${active === k ? " is-active" : ""}`}
              onClick={() => setActive(k)}
            >
              <span className={`dot dot-${k}`} />
              {statusLabels[k] ?? k} <span className="ct">{counts[k]}</span>
            </button>
          ))}
        </div>
      </section>

      <section style={{ paddingBlock: "12px 56px" }}>
        <div className="wrap">
          <div className="proj-grid">
            {visible.map((p, i) => (
              <article className={`proj${"featured" in p && p.featured ? " proj-feat" : ""}`} key={i}>
                <div className="proj-mock" style={{ background: p.mockGradient }}>
                  <ProjectMock id={p.mockId} />
                </div>
                <div className="proj-body">
                  <div className="row" style={{ gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                    <span className={`status status-${p.status.dot}`}>
                      <span className={`dot dot-${p.status.dot}`} /> {p.status.label}
                    </span>
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                    <span className="mono muted" style={{ fontSize: 12 }}>
                      {p.when}
                    </span>
                  </div>
                  {"featured" in p && p.featured ? (
                    <h2 className="serif" style={{ marginTop: 16, fontSize: 36 }}>
                      {p.title}
                      {"titleEm" in p && p.titleEm && (
                        <>
                          {" "}
                          <em className="italic" style={{ color: "var(--accent-ink)" }}>
                            {p.titleEm}
                          </em>
                        </>
                      )}
                    </h2>
                  ) : (
                    <h3 className="serif" style={{ marginTop: 14, fontSize: 26 }}>
                      {p.title}
                    </h3>
                  )}
                  <p
                    style={{
                      marginTop: "featured" in p && p.featured ? 14 : 12,
                      fontSize: "featured" in p && p.featured ? 17 : undefined,
                    }}
                  >
                    {p.body}
                  </p>
                  <div
                    className="row"
                    style={{ gap: 6, marginTop: "featured" in p && p.featured ? 16 : 14, flexWrap: "wrap" }}
                  >
                    {p.stack.map((s) => (
                      <span key={s} className="tag">
                        {s}
                      </span>
                    ))}
                  </div>
                  {"featured" in p && p.featured && "stats" in p && p.stats && (
                    <div className="proj-foot">
                      {p.stats.map((s) => (
                        <div className="proj-stat" key={s.label}>
                          <span className="mono muted">{s.label}</span>
                          <strong>{s.value}</strong>
                        </div>
                      ))}
                      {"cta" in p && p.cta && (
                        <a href={p.cta.href} style={{ marginLeft: "auto" }} className="btn btn-ghost">
                          {p.cta.label}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
