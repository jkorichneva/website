"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import SketchArt from "@/components/SketchArt";
import type { Sketch } from "@/app/content";

export default function SketchesGrid({
  items,
  loadMore,
}: {
  items: Sketch[];
  loadMore: string;
}) {
  // Tags are derived from the data. Add `tags: ["plants", "vienna"]` to any
  // sketch entry in content.ts and it will appear here as a filter chip.
  const allTags = useMemo(() => {
    const set = new Set<string>();
    for (const it of items) {
      if (it.tags) for (const tag of it.tags) set.add(tag);
    }
    return Array.from(set);
  }, [items]);

  const [active, setActive] = useState<string>("All");
  const visible = useMemo(() => {
    if (active === "All") return items;
    return items.filter((it) => it.tags?.includes(active));
  }, [active, items]);

  return (
    <>
      {allTags.length > 0 && (
        <div className="row" style={{ gap: 6, flexWrap: "wrap", marginBottom: 22 }}>
          {["All", ...allTags].map((t) => (
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
      )}

      <div className="sketch-grid">
        {visible.map((it, i) => (
          <figure
            className={`sk${it.size === "wide" ? " sk-wide" : it.size === "tall" ? " sk-tall" : ""}`}
            key={i}
          >
            <div className="sk-art" style={{ background: it.bg ?? "var(--bg-soft)" }}>
              {it.image ? (
                <Image
                  src={it.image}
                  alt={it.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              ) : it.svgId ? (
                <SketchArt id={it.svgId} />
              ) : null}
            </div>
            <figcaption>
              <div
                className="row"
                style={{ justifyContent: "space-between", alignItems: "baseline" }}
              >
                <h3 className="serif">{it.title}</h3>
                <span className="mono muted">{it.when}</span>
              </div>
              <p>{it.body}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="muted" style={{ textAlign: "center", marginTop: 28 }}>
          Nothing here yet — try another tag.
        </p>
      )}

      {loadMore && active === "All" && (
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <button className="btn btn-ghost" type="button">
            {loadMore}
          </button>
        </div>
      )}
    </>
  );
}
