type Props = { id: string };

export default function ProjectMock({ id }: Props) {
  switch (id) {
    case "dashboard":
      return (
        <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
          <rect x="0" y="0" width="800" height="500" fill="transparent" />
          <g transform="translate(60 50)">
            <rect x="0" y="0" width="680" height="60" rx="10" fill="#FFFFFF" stroke="rgba(61,46,32,.12)" />
            <circle cx="32" cy="30" r="14" fill="#C99B5B" />
            <rect x="60" y="22" width="120" height="16" rx="4" fill="#3D2E20" />
            <rect x="540" y="20" width="60" height="20" rx="10" fill="#F0CC6E" />
            <rect x="608" y="20" width="60" height="20" rx="10" fill="rgba(61,46,32,.08)" />
            <rect x="0" y="80" width="320" height="170" rx="10" fill="#FFFFFF" stroke="rgba(61,46,32,.12)" />
            <path d="M20 220 Q 80 160, 140 180 T 280 140 T 320 160 V 240 H 20 Z" fill="rgba(201,155,91,.5)" />
            <path d="M20 220 Q 80 160, 140 180 T 280 140 T 320 160" stroke="#8C6328" strokeWidth="2" fill="none" />
            <rect x="340" y="80" width="160" height="80" rx="10" fill="#FFFFFF" stroke="rgba(61,46,32,.12)" />
            <rect x="356" y="100" width="40" height="40" rx="6" fill="#7BB0C8" />
            <rect x="410" y="106" width="70" height="10" rx="3" fill="#3D2E20" />
            <rect x="410" y="124" width="50" height="8" rx="3" fill="rgba(61,46,32,.4)" />
            <rect x="520" y="80" width="160" height="80" rx="10" fill="#FFFFFF" stroke="rgba(61,46,32,.12)" />
            <rect x="536" y="100" width="40" height="40" rx="6" fill="#E8B5A8" />
            <rect x="590" y="106" width="70" height="10" rx="3" fill="#3D2E20" />
            <rect x="590" y="124" width="50" height="8" rx="3" fill="rgba(61,46,32,.4)" />
            <rect x="340" y="170" width="340" height="80" rx="10" fill="#FFFFFF" stroke="rgba(61,46,32,.12)" />
            <rect x="360" y="190" width="120" height="14" rx="3" fill="#3D2E20" />
            <rect x="360" y="214" width="280" height="10" rx="3" fill="rgba(61,46,32,.4)" />
            <rect x="360" y="230" width="200" height="10" rx="3" fill="rgba(61,46,32,.3)" />
            <rect x="0" y="270" width="680" height="140" rx="10" fill="#FFFFFF" stroke="rgba(61,46,32,.12)" />
            <rect x="20" y="292" width="80" height="10" rx="3" fill="#3D2E20" />
            <g transform="translate(20 320)">
              <rect x="0" y="0" width="160" height="80" rx="6" fill="#FAF4EA" />
              <rect x="180" y="0" width="160" height="80" rx="6" fill="#FAF4EA" />
              <rect x="360" y="0" width="160" height="80" rx="6" fill="#FAF4EA" />
              <rect x="520" y="0" width="120" height="80" rx="6" fill="#FAF4EA" />
            </g>
          </g>
        </svg>
      );
    case "terminal":
      return (
        <svg viewBox="0 0 500 380" preserveAspectRatio="xMidYMid slice">
          <rect x="40" y="40" width="420" height="300" rx="10" fill="rgba(0,0,0,.35)" />
          <circle cx="62" cy="62" r="5" fill="#E8B5A8" />
          <circle cx="78" cy="62" r="5" fill="#F0CC6E" />
          <circle cx="94" cy="62" r="5" fill="#9BB7A6" />
          <g fontFamily="JetBrains Mono, monospace" fontSize="13" fill="#F4E6C7">
            <text x="60" y="110">$ ./nestor serve</text>
            <text x="60" y="134" fill="#F0CC6E">→ listening on :8080</text>
            <text x="60" y="158">→ migrations ok (12)</text>
            <text x="60" y="182">→ media bucket mounted</text>
            <text x="60" y="206">→ admin: /_/login</text>
            <text x="60" y="234" fill="#7BB0C8">  GET / 200 12ms</text>
            <text x="60" y="252" fill="#7BB0C8">  GET /blog 200 8ms</text>
            <text x="60" y="270" fill="#7BB0C8">  POST /api/post 201 24ms</text>
            <text x="60" y="298" fill="#E8B5A8">▍</text>
          </g>
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 500 380" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <path d="M40 320 Q 80 280, 110 240 T 200 200 T 280 220 T 380 160 T 460 100" strokeWidth="3" opacity=".9" />
            <circle cx="40" cy="320" r="6" fill="white" stroke="none" />
            <circle cx="460" cy="100" r="6" fill="white" stroke="none" />
            <path d="M60 80 L 120 100" opacity=".4" />
            <path d="M120 100 L 160 60" opacity=".4" />
            <path d="M340 280 L 420 300" opacity=".4" />
          </g>
          <g fontFamily="DM Sans" fontSize="11" fill="rgba(255,255,255,.85)">
            <text x="56" y="346">START 06:14</text>
            <text x="380" y="86">PEAK 1812m</text>
            <text x="190" y="186">aid 1 · 24km</text>
          </g>
        </svg>
      );
    case "books":
      return (
        <svg viewBox="0 0 500 380" preserveAspectRatio="xMidYMid slice">
          <g transform="translate(60 60)">
            {[
              [0, 0, 0.85], [68, 0, 0.65], [136, 0, 0.5], [204, 0, 0.8], [272, 0, 0.55], [340, 0, 0.7],
              [0, 106, 0.6], [68, 106, 0.78], [136, 106, 0.85], [204, 106, 0.45], [272, 106, 0.7], [340, 106, 0.55],
              [0, 212, 0.65], [68, 212, 0.85], [136, 212, 0.55], [204, 212, 0.78],
            ].map(([x, y, a], i) => (
              <rect key={i} x={x} y={y} width="60" height="90" rx="3" fill={`rgba(255,255,255,${a})`} />
            ))}
          </g>
        </svg>
      );
    case "swatches":
      return (
        <svg viewBox="0 0 500 380" preserveAspectRatio="xMidYMid slice">
          <g transform="translate(60 70)">
            <rect x="0" y="0" width="80" height="80" rx="8" fill="#FAF4EA" />
            <rect x="92" y="0" width="80" height="80" rx="8" fill="#F2E8D5" />
            <rect x="184" y="0" width="80" height="80" rx="8" fill="#E8D9B8" />
            <rect x="276" y="0" width="80" height="80" rx="8" fill="#C99B5B" />
            <rect x="368" y="0" width="80" height="80" rx="8" fill="#8C6328" />
            <rect x="0" y="92" width="80" height="80" rx="8" fill="#3D2E20" />
            <rect x="92" y="92" width="80" height="80" rx="8" fill="#7BB0C8" />
            <rect x="184" y="92" width="80" height="80" rx="8" fill="#486593" />
            <rect x="276" y="92" width="80" height="80" rx="8" fill="#F0CC6E" />
            <rect x="368" y="92" width="80" height="80" rx="8" fill="#E8B5A8" />
            <rect x="0" y="184" width="172" height="50" rx="8" fill="rgba(255,255,255,.7)" />
            <rect x="184" y="184" width="172" height="50" rx="8" fill="rgba(255,255,255,.7)" />
            <rect x="368" y="184" width="80" height="50" rx="8" fill="rgba(255,255,255,.7)" />
          </g>
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 500 380" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="2">
            <path d="M40 280 L 460 280" />
            <path d="M40 280 L 40 80" />
            <path d="M40 250 Q 100 240, 140 220 T 240 180 T 320 220 T 460 320" stroke="#E8B5A8" strokeWidth="3" />
          </g>
          <g fontFamily="JetBrains Mono, monospace" fontSize="11" fill="rgba(255,255,255,.7)">
            <text x="60" y="60">DAU · 2021 — 2022</text>
            <text x="380" y="332">stopped</text>
          </g>
        </svg>
      );
    default:
      return null;
  }
}
