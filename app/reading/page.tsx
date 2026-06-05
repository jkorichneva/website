import Image from "next/image";
import { reading } from "../content";
import ReadingYears from "@/components/ReadingYears";

export const metadata = { title: reading.pageTitle };

export default function ReadingPage() {
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
            <span className="eyebrow">{reading.hero.eyebrow}</span>
            <h1 style={{ marginTop: 16 }}>
              {reading.hero.headlineLines.map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
              <em className="italic" style={{ color: "var(--accent-ink)" }}>
                {reading.hero.headlineEm}
              </em>
              {reading.hero.headlineEnd}
            </h1>
            <p style={{ fontSize: 19, maxWidth: "56ch", marginTop: 24 }}>{reading.hero.intro}</p>
          </div>
          <div
            className="wombat-frame hero-frame"
            style={{ aspectRatio: "1/1", maxWidth: 320 }}
          >
            <Image
              src={reading.hero.image.src}
              alt={reading.hero.image.alt}
              width={420}
              height={420}
              className="wombat"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ paddingBlock: "0 32px" }}>
        <div className="wrap">
          <div className="reading-stats">
            {reading.stats.map((s) => (
              <div key={s.label}>
                <div className="rs-num serif">{s.num}</div>
                <div className="rs-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Years */}
      <section style={{ paddingBlock: "80px 96px", background: "var(--bg-soft)" }}>
        <div className="wrap">
          <ReadingYears
            years={reading.years}
            eyebrow={reading.yearSection.eyebrow}
            title={reading.yearSection.title}
          />
        </div>
      </section>
    </>
  );
}
