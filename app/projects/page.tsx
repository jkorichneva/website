import Image from "next/image";
import { projects } from "../content";
import ProjectsList from "@/components/ProjectsList";

export const metadata = { title: projects.pageTitle };

export default function ProjectsPage() {
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
            <span className="eyebrow">{projects.hero.eyebrow}</span>
            <h1 style={{ marginTop: 16 }}>
              {projects.hero.headlineLines.map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
              <em className="italic" style={{ color: "var(--accent-ink)" }}>
                {projects.hero.headlineEm}
              </em>
            </h1>
            <p style={{ fontSize: 19, maxWidth: "56ch", marginTop: 24 }}>{projects.hero.intro}</p>
          </div>
          <div
            className="wombat-frame hero-frame"
            style={{ aspectRatio: "1/1", maxWidth: 320 }}
          >
            <Image
              src={projects.hero.image.src}
              alt={projects.hero.image.alt}
              width={420}
              height={420}
              className="wombat"
            />
          </div>
        </div>
      </section>

      <ProjectsList
        items={projects.items}
        filterLabel={projects.filters.label}
        statusLabels={projects.filters.statusLabels}
      />

      {/* Bits */}
      <section style={{ paddingBlock: "56px 96px", background: "var(--bg-soft)" }}>
        <div className="wrap">
          <div style={{ marginBottom: 28 }}>
            <span className="eyebrow">{projects.bits.eyebrow}</span>
            <h2 style={{ marginTop: 10 }}>{projects.bits.title}</h2>
          </div>
          <div className="bits">
            {projects.bits.items.map((b) => (
              <a href="#" key={b.title} className="bit">
                <div className="bit-head">
                  <span className="mono muted">{b.meta}</span>
                  <span className="mono muted">{b.metaRight}</span>
                </div>
                <h3 className="serif">{b.title}</h3>
                <p>{b.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
