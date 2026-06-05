import Link from "next/link";
import Image from "next/image";
import { home, site } from "./content";

export const metadata = { title: home.pageTitle, description: site.metaDescription };

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ paddingBlock: "clamp(56px, 8vw, 120px)" }}>
        <div
          className="wrap grid-hero-l"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: "clamp(24px, 4vw, 72px)",
            alignItems: "center",
          }}
        >
          <div>
            <span className="eyebrow">{home.hero.eyebrow}</span>
            <h1 style={{ marginTop: 18 }}>
              {home.hero.greeting}{" "}
              <span
                className="hand-underline italic"
                style={{ fontStyle: "italic", color: "var(--accent-ink)" }}
              >
                {home.hero.name}
              </span>
              .
              {home.hero.headlineLines.map((line, i) => (
                <span key={i}>
                  <br />
                  {line}
                </span>
              ))}
            </h1>
            <p
              style={{
                fontSize: 19,
                maxWidth: "52ch",
                marginTop: 28,
                color: "var(--ink-soft)",
              }}
            >
              {home.hero.intro}
            </p>
            <div className="row" style={{ marginTop: 36, gap: 12, flexWrap: "wrap" }}>
              <Link href={home.hero.ctaPrimary.href} className="btn btn-primary">
                {home.hero.ctaPrimary.label}
              </Link>
              <Link href={home.hero.ctaSecondary.href} className="btn btn-ghost">
                {home.hero.ctaSecondary.label}
              </Link>
            </div>
            <div
              className="row"
              style={{ marginTop: 48, gap: 28, flexWrap: "wrap", alignItems: "center" }}
            >
              {home.hero.meta.map((m, i) => (
                <div key={m.label} style={{ display: "flex", gap: 28, alignItems: "center" }}>
                  {i > 0 && (
                    <div style={{ width: 1, height: 36, background: "var(--line)" }} />
                  )}
                  <div>
                    <div
                      className="mono"
                      style={{
                        color: "var(--ink-muted)",
                        fontSize: 11,
                        letterSpacing: ".18em",
                        textTransform: "uppercase",
                      }}
                    >
                      {m.label}
                    </div>
                    <div style={{ marginTop: 6 }}>
                      {m.value} <em className="italic">{m.emValue}</em>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="wombat-frame hero-frame"
            style={{ aspectRatio: "1/1", maxWidth: 400, justifySelf: "end", width: "100%" }}
          >
            <Image
              src={home.hero.image.src}
              alt={home.hero.image.alt}
              width={520}
              height={520}
              className="wombat"
            />
          </div>
        </div>
      </section>

      {/* Index cards */}
      <section style={{ background: "var(--bg-soft)", paddingBlock: "clamp(64px,8vw,104px)" }}>
        <div className="wrap">
          <div
            className="between"
            style={{ marginBottom: 36, alignItems: "end", flexWrap: "wrap", gap: 24 }}
          >
            <h2>{home.index.title}</h2>
            <span className="mono muted" style={{ fontSize: 12 }}>
              {home.index.meta}
            </span>
          </div>
          <div
            className="grid home-tiles"
            style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
          >
            {home.index.tiles.map((t) => (
              <Link key={t.num} href={t.href} className="home-tile">
                <div className="home-tile-num mono">{t.num}</div>
                <h3 className="serif">{t.title}</h3>
                <p>{t.blurb}</p>
                <span className="home-tile-go">Open →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recently */}
      <section>
        <div className="wrap">
          <div
            className="between"
            style={{ marginBottom: 40, alignItems: "end", flexWrap: "wrap", gap: 16 }}
          >
            <div>
              <span className="eyebrow">{home.recently.eyebrow}</span>
              <h2 style={{ marginTop: 10 }}>{home.recently.title}</h2>
            </div>
            <span className="mono muted" style={{ fontSize: 12 }}>
              {home.recently.updated}
            </span>
          </div>

          <div
            className="grid recent-grid"
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            <article
              className="card recent-card"
              style={{ background: "color-mix(in oklab, var(--sky) 14%, var(--bg-card))" }}
            >
              <div
                className="row"
                style={{ alignItems: "center", gap: 10, marginBottom: 14 }}
              >
                <span className="tag sky">{home.recently.reading.tag}</span>
                <span className="mono muted" style={{ fontSize: 12 }}>
                  {home.recently.reading.progress}
                </span>
              </div>
              <div className="row" style={{ gap: 18, alignItems: "flex-start" }}>
                <div
                  style={{
                    flex: "0 0 96px",
                    aspectRatio: "2/3",
                    background: "linear-gradient(165deg, #243A57, #486593)",
                    borderRadius: 6,
                    padding: "14px 10px",
                    color: "#F4E6C7",
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    lineHeight: 1.15,
                    boxShadow: "var(--shadow)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      letterSpacing: ".18em",
                      textTransform: "uppercase",
                      opacity: 0.7,
                    }}
                  >
                    {home.recently.reading.coverEyebrow}
                  </div>
                  <div style={{ fontSize: 13, marginTop: 8, whiteSpace: "pre-line" }}>
                    {home.recently.reading.coverTitle}
                  </div>
                </div>
                <div>
                  <h3 className="serif" style={{ fontSize: 22 }}>
                    {home.recently.reading.title}
                  </h3>
                  <p className="mono muted" style={{ fontSize: 12, marginTop: 4 }}>
                    {home.recently.reading.meta}
                  </p>
                  <p style={{ marginTop: 12 }}>{home.recently.reading.blurb}</p>
                </div>
              </div>
              <div className="recent-card-foot">
                <Link
                  href={home.recently.reading.footLink.href}
                  style={{ border: "none", color: "var(--ink)", fontWeight: 500 }}
                >
                  {home.recently.reading.footLink.label}
                </Link>
                <span className="muted mono" style={{ fontSize: 11 }}>
                  {home.recently.reading.footMeta}
                </span>
              </div>
            </article>

            <article
              className="card recent-card"
              style={{ background: "color-mix(in oklab, var(--sun) 22%, var(--bg-card))" }}
            >
              <div
                className="row"
                style={{ alignItems: "center", gap: 10, marginBottom: 14 }}
              >
                <span className="tag">{home.recently.race.tag}</span>
                <span className="mono muted" style={{ fontSize: 12 }}>
                  {home.recently.race.date}
                </span>
              </div>
              <h3 className="serif" style={{ fontSize: 26 }}>
                {home.recently.race.title}
              </h3>
              <div className="row" style={{ marginTop: 14, gap: 22, flexWrap: "wrap" }}>
                {home.recently.race.stats.map((s) => (
                  <div key={s.label}>
                    <div
                      className="mono muted"
                      style={{
                        fontSize: 10,
                        letterSpacing: ".18em",
                        textTransform: "uppercase",
                      }}
                    >
                      {s.label}
                    </div>
                    <div
                      className="serif"
                      style={{ fontSize: 30, lineHeight: 1, marginTop: 4 }}
                    >
                      {s.value}
                      {s.suffix && <span style={{ fontSize: 14 }}>{s.suffix}</span>}
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 18 }}>{home.recently.race.blurb}</p>
              <div className="recent-card-foot">
                <Link
                  href={home.recently.race.footLink.href}
                  style={{ border: "none", color: "var(--ink)", fontWeight: 500 }}
                >
                  {home.recently.race.footLink.label}
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/*/!* /now strip *!/*/}
      {/*<section style={{ paddingBlock: 0 }}>*/}
      {/*  <div className="wrap">*/}
      {/*    <div className="now-strip">*/}
      {/*      <div>*/}
      {/*        <span className="eyebrow">{home.now.eyebrow}</span>*/}
      {/*        <h3 className="serif" style={{ fontSize: 28, marginTop: 12 }}>*/}
      {/*          {home.now.title}*/}
      {/*        </h3>*/}
      {/*        <p style={{ marginTop: 12, maxWidth: "56ch" }}>{home.now.body}</p>*/}
      {/*      </div>*/}
      {/*      <div className="now-side">*/}
      {/*        {home.now.items.map((it) => (*/}
      {/*          <div className="now-mini" key={it.label}>*/}
      {/*            <span className="mono muted">{it.label}</span>*/}
      {/*            <div>{it.value}</div>*/}
      {/*          </div>*/}
      {/*        ))}*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* CTA */}
      {/*<section>*/}
      {/*  <div className="wrap-narrow" style={{ textAlign: "center" }}>*/}
      {/*    <div*/}
      {/*      className="wombat-frame"*/}
      {/*      style={{ width: 220, aspectRatio: "1/1", margin: "0 auto 12px" }}*/}
      {/*    >*/}
      {/*      <Image*/}
      {/*        src={home.cta.image.src}*/}
      {/*        alt={home.cta.image.alt}*/}
      {/*        width={300}*/}
      {/*        height={300}*/}
      {/*        className="wombat"*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*    <h2>{home.cta.title}</h2>*/}
      {/*    <p style={{ marginTop: 16, fontSize: 18 }}>{home.cta.body}</p>*/}
      {/*    <Link*/}
      {/*      href={home.cta.button.href}*/}
      {/*      className="btn btn-primary"*/}
      {/*      style={{ marginTop: 24 }}*/}
      {/*    >*/}
      {/*      {home.cta.button.label}*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </>
  );
}
