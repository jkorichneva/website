import Link from "next/link";
import Image from "next/image";
import { about } from "../content";

export const metadata = { title: about.pageTitle };

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section style={{ paddingBlock: "clamp(56px,7vw,104px) 24px" }}>
        <div
          className="wrap grid-hero-r"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 360px",
            gap: 60,
            alignItems: "end",
          }}
        >
          <div>
            <span className="eyebrow">{about.hero.eyebrow}</span>
            <h1 style={{ marginTop: 18 }}>
              {about.hero.headlineLines.map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h1>
          </div>
          <div
            className="wombat-frame hero-frame"
            style={{ aspectRatio: "1/1", maxWidth: 360 }}
          >
            <Image
              src={about.hero.image.src}
              alt={about.hero.image.alt}
              width={420}
              height={420}
              className="wombat"
            />
          </div>
        </div>
      </section>

      {/* Essay + sidebar */}
      <section style={{ paddingBlock: "24px 72px" }}>
        <div
          className="wrap grid-essay"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: 56,
            alignItems: "flex-start",
          }}
        >
          <article style={{ fontSize: 18, lineHeight: 1.7, color: "var(--ink)" }}>
            <p
              className="serif italic"
              style={{ fontSize: 24, lineHeight: 1.4, color: "var(--ink)", marginBottom: 28 }}
            >
              {about.essay.pull}
            </p>
            {about.essay.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <div className="callout" style={{ marginTop: 36 }}>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "var(--accent-ink)",
                  marginBottom: 8,
                }}
              >
                {about.essay.callout.label}
              </div>
              <p style={{ color: "var(--ink)", margin: 0 }}>{about.essay.callout.body}</p>
            </div>
          </article>

          <aside style={{ position: "sticky", top: 96 }}>
            <div className="card" style={{ padding: 26 }}>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted)",
                  marginBottom: 14,
                }}
              >
                {about.sidebar.factsLabel}
              </div>
              <dl className="facts">
                {about.sidebar.facts.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>
                      {f.value}
                      {f.sub && (
                        <>
                          <br />
                          <span className="muted mono" style={{ fontSize: 12 }}>
                            {f.sub}
                          </span>
                        </>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="card-soft" style={{ marginTop: 16, padding: 22 }}>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted)",
                  marginBottom: 12,
                }}
              >
                {about.sidebar.elsewhereLabel}
              </div>
              <ul className="elsewhere">
                {about.sidebar.elsewhere.map((e) => (
                  <li key={e.label}>
                    <span>{e.label}</span>
                    <a href={e.href}>{e.value}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Experience */}
      <section style={{ paddingBlock: 72, background: "var(--bg-soft)" }}>
        <div className="wrap">
          <div
            className="between"
            style={{ alignItems: "end", marginBottom: 36, flexWrap: "wrap", gap: 16 }}
          >
            <h2>{about.experience.title}</h2>
            <span className="mono muted" style={{ fontSize: 12 }}>
              {about.experience.meta}
            </span>
          </div>
          <div className="timeline">
            {about.experience.rows.map((r) => (
              <div className="t-row" key={r.date}>
                <div className="t-date">
                  <div className="serif" style={{ fontSize: 28 }}>
                    {r.date}
                  </div>
                  <div className="mono muted" style={{ fontSize: 12, marginTop: 4 }}>
                    {r.place}
                  </div>
                </div>
                <div className="t-body">
                  <div
                    className="row"
                    style={{ alignItems: "center", gap: 10, flexWrap: "wrap" }}
                  >
                    <h3 className="serif" style={{ fontSize: 24 }}>
                      {r.role}
                    </h3>
                    <span className="tag">{r.company}</span>
                  </div>
                  <p style={{ marginTop: 10 }}>{r.body}</p>
                  {r.tags.length > 0 && (
                    <div className="row" style={{ gap: 6, marginTop: 14, flexWrap: "wrap" }}>
                      {r.tags.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs + skills */}
      <section style={{ paddingBlock: 96 }}>
        <div
          className="wrap grid-2"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: 56,
            alignItems: "flex-start",
          }}
        >
          <div>
            <h2>{about.beliefs.title}</h2>
            <ul className="beliefs">
              {about.beliefs.items.map((b) => (
                <li key={b.num}>
                  <span className="mono">{b.num}</span>
                  <div>
                    <strong>{b.head}</strong>
                    {b.body}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{about.skills.title}</h2>
            <div className="skills">
              {about.skills.items.map((s, i) => (
                <div className="skill-row" key={i}>
                  <div className="skill-name">
                    {s.name}
                    {s.note && (
                      <>
                        {" "}
                        <span className="mono muted" style={{ fontSize: 11 }}>
                          {s.note}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="skill-bar">
                    <div
                      style={{
                        width: `${s.width}%`,
                        background: s.accent ? "var(--accent)" : "var(--ink)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Talks */}
      <section style={{ paddingBlock: "0 96px" }}>
        <div className="wrap">
          <h2 style={{ marginBottom: 28 }}>{about.talks.title}</h2>
          <div className="talks">
            {about.talks.items.map((t) => (
              <a key={t.title} href={t.href} className="talk">
                <span className="mono muted" style={{ fontSize: 11 }}>
                  {t.meta}
                </span>
                <h3 className="serif" style={{ fontSize: 22, marginTop: 6 }}>
                  {t.title}
                </h3>
                <p>{t.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
