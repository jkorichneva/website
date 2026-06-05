import {contact, sketches} from "../content";
import SketchesGrid from "@/components/SketchesGrid";
import Image from "next/image";

export const metadata = { title: sketches.pageTitle };

export default function SketchesPage() {
  return (
    <>
      {/* Header */}
      <section style={{ paddingBlock: "clamp(56px,7vw,100px) 32px" }}>
        <div
          className="wrap grid-hero-r"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 280px",
            gap: 56,
            alignItems: "end",
          }}
        >
          <div>
            <span className="eyebrow">{sketches.hero.eyebrow}</span>
            <h1 style={{ marginTop: 16 }}>
              {sketches.hero.headlineLines.map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
              <br />
              <em className="italic" style={{ color: "var(--accent-ink)" }}>
                {sketches.hero.headlineEm}
              </em>
            </h1>
            <p style={{ fontSize: 19, maxWidth: "56ch", marginTop: 24 }}>{sketches.hero.intro}</p>
          </div>
            <div
                className="wombat-frame hero-frame"
                style={{ aspectRatio: "1/1", maxWidth: 380 }}
            >
                <Image
                    src={sketches.hero.image.src}
                    alt={sketches.hero.image.alt}
                    width={480}
                    height={480}
                    className="wombat"
                />
            </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ paddingBlock: "24px 96px" }}>
        <div className="wrap">
          <SketchesGrid items={sketches.items} loadMore={sketches.loadMore} />
        </div>
      </section>
    </>
  );
}
