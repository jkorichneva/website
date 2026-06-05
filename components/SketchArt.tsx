type Props = { id: string };

export default function SketchArt({ id }: Props) {
  switch (id) {
    case "coffee":
      return (
        <svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="#3D2E20" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M60 280 L 250 280 L 250 220 Q 250 200, 230 200 L 80 200 Q 60 200, 60 220 Z" />
            <path d="M250 230 Q 290 230, 290 250 Q 290 270, 250 270" />
            <path d="M90 200 Q 95 170, 110 165 Q 125 170, 120 200" strokeDasharray="2 4" />
            <path d="M130 200 Q 138 168, 158 170 Q 175 173, 168 200" strokeDasharray="2 4" />
            <ellipse cx="155" cy="240" rx="14" ry="6" />
            <path d="M330 110 L 540 100 L 552 312 L 340 322 Z" />
            <path d="M338 130 L 540 122" />
            <path d="M340 156 L 542 148" />
            <path d="M342 184 L 544 176" />
            <path d="M344 212 L 546 204" />
            <path d="M346 240 L 548 232" />
            <path d="M348 268 L 482 262" />
            <path d="M380 80 L 420 50 L 432 60 L 392 92 Z" />
            <path d="M420 50 L 444 32" />
            <path d="M444 32 L 452 40 L 432 60" />
          </g>
        </svg>
      );
    case "plant":
      return (
        <svg viewBox="0 0 360 360" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="#3D2E20" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M120 280 L 150 330 L 220 330 L 240 280 Z" />
            <path d="M120 280 L 240 280" />
            <path d="M175 280 Q 150 220, 140 160" />
            <path d="M178 280 Q 200 230, 220 180" />
            <path d="M182 280 Q 220 250, 270 230" />
            <path d="M170 280 Q 130 230, 100 220" />
            <ellipse cx="140" cy="158" rx="22" ry="10" transform="rotate(-30 140 158)" />
            <ellipse cx="222" cy="180" rx="22" ry="10" transform="rotate(30 222 180)" />
            <ellipse cx="270" cy="230" rx="22" ry="10" transform="rotate(20 270 230)" />
            <ellipse cx="100" cy="220" rx="22" ry="10" transform="rotate(-20 100 220)" />
          </g>
        </svg>
      );
    case "shoe":
      return (
        <svg viewBox="0 0 360 360" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="#3D2E20" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M40 240 Q 30 200, 80 196 L 200 192 Q 260 188, 290 220 L 330 240 Q 340 250, 330 260 L 70 270 Q 30 268, 40 240 Z" />
            <path d="M80 196 Q 110 178, 150 184" />
            <path d="M150 184 Q 190 188, 210 196" />
            <path d="M90 220 L 130 200" />
            <path d="M120 230 L 160 208" />
            <path d="M150 232 L 185 212" />
            <path d="M180 234 L 215 220" />
            <path d="M220 200 L 260 230" />
            <path d="M250 200 L 285 235" />
            <ellipse cx="100" cy="262" rx="14" ry="6" />
            <ellipse cx="240" cy="262" rx="14" ry="6" />
          </g>
        </svg>
      );
    case "cathedral":
      return (
        <svg viewBox="0 0 320 480" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="#3D2E20" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M160 30 L 140 90 L 140 240 L 180 240 L 180 90 Z" />
            <path d="M150 70 L 170 70" />
            <path d="M148 110 L 172 110" />
            <path d="M146 150 L 174 150" />
            <path d="M100 240 L 220 240 L 240 420 L 80 420 Z" />
            <path d="M100 270 L 220 270" />
            <path d="M100 310 L 220 310" />
            <path d="M100 350 L 220 350" />
            <path d="M100 390 L 220 390" />
            <path d="M80 420 L 240 420" />
            <path d="M80 420 L 60 460" />
            <path d="M240 420 L 260 460" />
          </g>
        </svg>
      );
    case "keyboard":
      return (
        <svg viewBox="0 0 360 360" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="#3D2E20" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <rect x="40" y="100" width="280" height="180" rx="20" />
            <rect x="60" y="120" width="240" height="60" rx="8" />
            <rect x="60" y="195" width="34" height="22" rx="4" />
            <rect x="104" y="195" width="34" height="22" rx="4" />
            <rect x="148" y="195" width="34" height="22" rx="4" />
            <rect x="192" y="195" width="34" height="22" rx="4" />
            <rect x="236" y="195" width="34" height="22" rx="4" />
            <rect x="60" y="225" width="34" height="22" rx="4" />
            <rect x="104" y="225" width="34" height="22" rx="4" />
            <rect x="148" y="225" width="80" height="22" rx="4" />
            <rect x="236" y="225" width="34" height="22" rx="4" />
          </g>
        </svg>
      );
    case "hills":
      return (
        <svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="#3D2E20" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M0 240 Q 80 200, 160 220 T 320 210 T 480 230 T 600 220" />
            <path d="M0 280 Q 120 240, 220 260 T 420 260 T 600 270" />
            <path d="M0 320 L 600 320" />
            <circle cx="450" cy="80" r="34" />
            <path d="M70 220 L 86 200 L 102 220" />
            <path d="M120 230 L 134 214 L 148 230" />
            <path d="M260 220 L 275 200 L 290 220" />
            <path d="M340 240 L 388 230" />
            <path d="M380 244 L 404 234" />
            <path d="M510 250 L 540 244" />
          </g>
        </svg>
      );
    case "face":
      return (
        <svg viewBox="0 0 360 360" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="#3D2E20" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="180" cy="180" r="120" />
            <circle cx="140" cy="160" r="6" />
            <circle cx="220" cy="160" r="6" />
            <path d="M150 220 Q 180 246, 210 220" />
            <path d="M120 110 Q 180 60, 240 110" />
            <path d="M80 200 L 60 200" />
            <path d="M280 200 L 300 200" />
          </g>
        </svg>
      );
    case "books":
      return (
        <svg viewBox="0 0 320 480" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="#3D2E20" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M40 380 L 280 380 L 280 410 L 40 410 Z" />
            <path d="M50 340 L 270 340 L 270 380 L 50 380 Z" />
            <path d="M70 290 L 250 290 L 250 340 L 70 340 Z" />
            <path d="M60 230 L 260 230 L 260 290 L 60 290 Z" />
            <path d="M80 170 L 240 170 L 240 230 L 80 230 Z" />
            <path d="M90 110 L 230 110 L 230 170 L 90 170 Z" />
            <path d="M100 50 L 220 50 L 220 110 L 100 110 Z" />
            <path d="M150 270 L 220 270" />
            <path d="M120 200 L 200 200" />
            <path d="M140 360 L 230 360" />
          </g>
        </svg>
      );
    case "bike":
      return (
        <svg viewBox="0 0 360 360" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="#3D2E20" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="110" cy="240" r="58" />
            <circle cx="250" cy="240" r="58" />
            <path d="M110 240 L 175 140 L 250 240" />
            <path d="M175 140 L 200 140 L 220 240" />
            <path d="M110 240 L 175 140" />
            <path d="M170 140 L 145 100 L 165 96" />
            <path d="M250 240 L 270 130 L 280 130" />
          </g>
        </svg>
      );
    default:
      return null;
  }
}
