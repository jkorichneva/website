"use client";

import { useState } from "react";
import Image from "next/image";
import { contact } from "../content";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      {/* Hero */}
      <section style={{ paddingBlock: "clamp(56px,7vw,100px) 32px" }}>
        <div
          className="wrap grid-hero-r"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: 60,
            alignItems: "center",
          }}
        >
          <div>
            <span className="eyebrow">{contact.hero.eyebrow}</span>
            <h1 style={{ marginTop: 16 }}>
              {contact.hero.headlineLines.map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
              <em className="italic" style={{ color: "var(--accent-ink)" }}>
                {contact.hero.headlineEm}
              </em>
            </h1>
            <p style={{ fontSize: 19, maxWidth: "56ch", marginTop: 24 }}>{contact.hero.intro}</p>
          </div>
          <div
            className="wombat-frame hero-frame"
            style={{ aspectRatio: "1/1", maxWidth: 380 }}
          >
            <Image
              src={contact.hero.image.src}
              alt={contact.hero.image.alt}
              width={480}
              height={480}
              className="wombat"
            />
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section style={{ paddingBlock: "24px 96px" }}>
        <div
          className="wrap grid-2"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 56,
            alignItems: "flex-start",
          }}
        >
          <form
            className={`contact-form card${sent ? " sent" : ""}`}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="cf-row">
              <label>
                <span className="cf-label">{contact.form.nameLabel}</span>
                <input type="text" placeholder={contact.form.namePlaceholder} />
              </label>
              <label>
                <span className="cf-label">{contact.form.emailLabel}</span>
                <input type="email" placeholder={contact.form.emailPlaceholder} />
              </label>
            </div>

            <label>
              <span className="cf-label">{contact.form.topicLabel}</span>
              <div className="cf-pills">
                {contact.form.topics.map((t, i) => (
                  <span key={t} style={{ display: "contents" }}>
                    <input type="radio" name="topic" id={`t${i + 1}`} defaultChecked={i === 0} />
                    <label htmlFor={`t${i + 1}`}>{t}</label>
                  </span>
                ))}
              </div>
            </label>

            <label>
              <span className="cf-label">
                {contact.form.bodyLabel}{" "}
                <span
                  className="muted mono"
                  style={{ fontSize: 11, textTransform: "none" }}
                >
                  {contact.form.bodyHint}
                </span>
              </span>
              <textarea rows={8} placeholder={contact.form.bodyPlaceholder} />
            </label>

            <div className="cf-foot">
              <div className="cf-hint">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                {contact.form.hint}
              </div>
              <button type="submit" className="btn btn-primary">
                {contact.form.submit}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

            <div className={`cf-thx${sent ? " on" : ""}`}>
              <span className="serif" style={{ fontSize: 28 }}>
                {contact.form.thanks.title}
              </span>
              <p>{contact.form.thanks.body}</p>
            </div>
          </form>

          <aside style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div className="card" style={{ padding: 24 }}>
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted)",
                }}
              >
                {contact.direct.label}
              </span>
              <h3 className="serif" style={{ marginTop: 8, fontSize: 26 }}>
                {contact.direct.address}
              </h3>
              <p style={{ fontSize: 14, marginTop: 6 }}>{contact.direct.body}</p>
              <a
                href={contact.direct.button.href}
                className="btn btn-ghost"
                style={{ marginTop: 14, width: "100%", justifyContent: "center" }}
              >
                {contact.direct.button.label}
              </a>
            </div>

            <div className="card-soft" style={{ padding: 24 }}>
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted)",
                }}
              >
                {contact.elsewhere.label}
              </span>
              <ul className="el-list">
                {contact.elsewhere.items.map((it) => (
                  <li key={it.label}>
                    <span>{it.label}</span>
                    <a href={it.href}>{it.value}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ padding: 24 }}>
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted)",
                }}
              >
                {contact.office.label}
              </span>
              <h3 className="serif" style={{ marginTop: 8, fontSize: 22 }}>
                {contact.office.title}
              </h3>
              <p style={{ fontSize: 14, marginTop: 6 }}>{contact.office.body}</p>
              <a
                href={contact.office.button.href}
                className="btn btn-ghost"
                style={{ marginTop: 12, width: "100%", justifyContent: "center" }}
              >
                {contact.office.button.label}
              </a>
            </div>

            <div className="callout" style={{ padding: 20 }}>
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: ".14em",
                  color: "var(--accent-ink)",
                }}
              >
                {contact.recruiters.label}
              </span>
              <p style={{ fontSize: 14, marginTop: 8, color: "var(--ink)" }}>
                {contact.recruiters.body}
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Sign-off */}
      <section>
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <div
            className="wombat-frame"
            style={{ width: 180, aspectRatio: "1/1", margin: "0 auto 8px" }}
          >
            <Image
              src={contact.signoff.image.src}
              alt={contact.signoff.image.alt}
              width={240}
              height={240}
              className="wombat"
            />
          </div>
          <p
            className="serif italic"
            style={{
              fontSize: 24,
              color: "var(--ink)",
              lineHeight: 1.4,
              ...({ textWrap: "balance" } as React.CSSProperties),
            }}
          >
            {contact.signoff.body}
          </p>
        </div>
      </section>
    </>
  );
}
