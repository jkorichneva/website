import Link from "next/link";
import { footerLinks, site } from "@/app/content";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div>
          <div className="serif" style={{ fontSize: 20 }}>
            {site.brand}
          </div>
          <div className="credit">
            {site.footerCredit} · © {site.year} {site.ownerName}
          </div>
        </div>
        <div className="links">
          {footerLinks.map((l) => (
            <Link key={l.href + l.label} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
