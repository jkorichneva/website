import {running, sketches} from "../content";
import RaceLog from "@/components/RaceLog";
import Image from "next/image";

export const metadata = { title: running.pageTitle };

export default function RunningPage() {
  return (
    <>
      {/* Header */}
      <section style={{ paddingBlock: "clamp(56px,7vw,100px) 32px" }}>
        <div
          className="wrap grid-hero-r"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: 56,
            alignItems: "end",
          }}
        >
          <div>
            <span className="eyebrow">{running.hero.eyebrow}</span>
            <h1 style={{ marginTop: 16 }}>
              {running.hero.headlineLines.map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
              <br />
              <em className="italic" style={{ color: "var(--accent-ink)" }}>
                {running.hero.headlineEm}
              </em>
              {running.hero.headlineEnd}
            </h1>
            <p style={{ fontSize: 19, maxWidth: "56ch", marginTop: 24 }}>{running.hero.intro}</p>
          </div>
          <div
              className="wombat-frame hero-frame"
              style={{ aspectRatio: "1/1", maxWidth: 380 }}
          >
            <Image
                src={running.hero.image.src}
                alt={running.hero.image.alt}
                width={480}
                height={480}
                className="wombat"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ paddingBlock: 24 }}>
        <div className="wrap">
          <div className="stat-strip">
            {running.stats.map((s) => (
              <div key={s.label}>
                <div className="stat-label mono">{s.label}</div>
                <div className="stat-num serif">
                  {s.num}
                  {s.unit && <span className="stat-unit">{s.unit}</span>}
                </div>
                <div className="stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRs */}
      <section style={{ paddingBlock: "56px 64px" }}>
        <div className="wrap">
          <div
            className="between"
            style={{ alignItems: "end", marginBottom: 24, flexWrap: "wrap", gap: 16 }}
          >
            <h2>{running.prs.title}</h2>
            <span className="mono muted" style={{ fontSize: 12 }}>
              {running.prs.meta}
            </span>
          </div>
          <div className="prs">
            {running.prs.items.map((pr) => (
              <div className={`pr${pr.tri ? " pr-tri" : ""}`} key={pr.dist + pr.race}>
                <div className="pr-dist serif">{pr.dist}</div>
                <div className="pr-time serif">{pr.time}</div>
                <div className="pr-detail">
                  <div className="mono muted">{pr.pace}</div>
                  <div>{pr.race}</div>
                </div>
                <span className="pr-star">★</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RaceLog data={running.raceLog} />

      {/* Photos */}
      <section style={{ paddingBlock: 96 }}>
        <div className="wrap">
          <div
            className="between"
            style={{ alignItems: "end", marginBottom: 28, flexWrap: "wrap", gap: 16 }}
          >
            <div>
              <span className="eyebrow">{running.photos.eyebrow}</span>
              <h2 style={{ marginTop: 10 }}>{running.photos.title}</h2>
            </div>
            <span className="mono muted" style={{ fontSize: 12 }}>
              {running.photos.meta}
            </span>
          </div>
          <div className="photos">
            {running.photos.items.map((p, i) => (
              <div
                className={`photo${p.size === "big" ? " big" : p.size === "wide" ? " wide" : ""}`}
                key={i}
              >
                <div className="photo-ph" style={{ background: p.gradient }}>
                  <span className="ph-tag">{p.tag}</span>
                </div>
                {p.capTitle && (
                  <div className="photo-cap">
                    <div className="serif" style={{ fontSize: 22 }}>
                      {p.capTitle}
                    </div>
                    <p style={{ fontSize: 14 }}>{p.capBody}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section style={{ paddingBlock: "0 96px" }}>
        <div className="wrap">
          <div
            className="between"
            style={{ marginBottom: 24, alignItems: "end", flexWrap: "wrap", gap: 16 }}
          >
            <h2>{running.upcoming.title}</h2>
            <span className="mono muted" style={{ fontSize: 12 }}>
              {running.upcoming.meta}
            </span>
          </div>
          <div className="upcoming">
            {running.upcoming.items.map((u) => (
              <div className="up-card" key={u.title}>
                <div className="up-when">
                  <div className="mono muted">{u.whenLines[0]}</div>
                  <div className="serif" style={{ fontSize: 28, lineHeight: 1 }}>
                    {u.whenLines[1]}
                  </div>
                  <div
                    className="mono"
                    style={{
                      color: u.countdownAccent ? "var(--accent-ink)" : "var(--ink-muted)",
                      fontSize: 11,
                    }}
                  >
                    {u.countdown}
                  </div>
                </div>
                <div className="up-body">
                  <h3 className="serif" style={{ fontSize: 22 }}>
                    {u.title}
                    {u.titleEm && (
                      <>
                        {" "}
                        <em className="italic muted">{u.titleEm}</em>
                      </>
                    )}
                  </h3>
                  <p>{u.body}</p>
                  <div className="row" style={{ gap: 6, marginTop: 10 }}>
                    {u.tags.map((t) => (
                      <span
                        key={t.label}
                        className={`tag${t.tone === "sky" ? " sky" : t.tone === "rose" ? " rose" : ""}`}
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
