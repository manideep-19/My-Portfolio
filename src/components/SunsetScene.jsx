// Hand-built SVG sunset landscape used behind the contact section.
// Layers with data-depth are moved by the parent for scroll parallax.

const SUN = { x: 760, y: 330 };

// A mountain peak drawn as two faces: the side facing the sun is lit, the other is in shade.
function Peak({ x, y, w, base, lit, shade }) {
  const left = x - w / 2;
  const right = x + w / 2;
  const facesSunOnLeft = x > SUN.x; // peaks right of the sun are lit on their left side
  return (
    <>
      <path d={`M${left} ${base} L${x} ${y} L${x} ${base}Z`} fill={facesSunOnLeft ? lit : shade} />
      <path d={`M${x} ${y} L${right} ${base} L${x} ${base}Z`} fill={facesSunOnLeft ? shade : lit} />
    </>
  );
}

// Simple layered pine silhouette
const pine = (x, y, h) => {
  const w = h * 0.42;
  return `M${x} ${y - h} L${x + w * 0.55} ${y - h * 0.55} L${x + w * 0.3} ${y - h * 0.55} L${x + w * 0.75} ${y - h * 0.2} L${x + w * 0.45} ${y - h * 0.2} L${x + w} ${y} L${x - w} ${y} L${x - w * 0.45} ${y - h * 0.2} L${x - w * 0.75} ${y - h * 0.2} L${x - w * 0.3} ${y - h * 0.55} L${x - w * 0.55} ${y - h * 0.55}Z`;
};

const TREES_MID = [
  [40, 575, 46], [70, 572, 34], [104, 568, 52], [140, 566, 38],
  [300, 566, 36], [328, 568, 48], [356, 570, 30],
  [900, 552, 40], [930, 549, 54], [962, 546, 36], [1000, 544, 44],
];
const TREES_FRONT = [
  [30, 668, 70], [78, 660, 92], [120, 662, 58],
  [560, 676, 52], [598, 672, 74],
];

export default function SunsetScene() {
  return (
    <svg className="scene__art" viewBox="0 0 1440 760" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id="sc-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f47a52" />
          <stop offset="0.35" stopColor="#ff9f6e" />
          <stop offset="0.62" stopColor="#ffc59a" />
          <stop offset="0.8" stopColor="#ffe0c2" />
        </linearGradient>
        <radialGradient id="sc-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.35" stopColor="#fff6ea" stopOpacity="0.95" />
          <stop offset="0.6" stopColor="#ffe2c4" stopOpacity="0.45" />
          <stop offset="1" stopColor="#ffd0a8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sc-sun" cx="0.45" cy="0.4" r="0.6">
          <stop offset="0" stopColor="#fffaf2" />
          <stop offset="1" stopColor="#ffe9d2" />
        </radialGradient>
        <linearGradient id="sc-haze" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd9bd" stopOpacity="0" />
          <stop offset="1" stopColor="#ffd9bd" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="sc-lake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd7b5" />
          <stop offset="1" stopColor="#e7845c" />
        </linearGradient>
        <linearGradient id="sc-hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a8401d" />
          <stop offset="1" stopColor="#7c2c13" />
        </linearGradient>
        <linearGradient id="sc-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3c170c" />
          <stop offset="1" stopColor="#1d0d07" />
        </linearGradient>
        <linearGradient id="sc-ray" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff3e4" stopOpacity="0.5" />
          <stop offset="1" stopColor="#fff3e4" stopOpacity="0" />
        </linearGradient>
        <filter id="sc-soft"><feGaussianBlur stdDeviation="6" /></filter>
      </defs>

      {/* sky */}
      <rect width="1440" height="760" fill="url(#sc-sky)" />

      {/* sun, glow and slowly turning rays */}
      <g data-depth="1.1">
        <g className="sc-rays" style={{ transformOrigin: `${SUN.x}px ${SUN.y}px` }}>
          {Array.from({ length: 12 }, (_, i) => (
            <path
              key={i}
              d={`M${SUN.x} ${SUN.y} L${SUN.x + 760} ${SUN.y - 60} L${SUN.x + 760} ${SUN.y + 60}Z`}
              fill="url(#sc-ray)"
              opacity="0.35"
              transform={`rotate(${i * 30} ${SUN.x} ${SUN.y})`}
            />
          ))}
        </g>
        <circle cx={SUN.x} cy={SUN.y} r="300" fill="url(#sc-glow)" />
        <circle cx={SUN.x} cy={SUN.y} r="165" fill="url(#sc-sun)" />
      </g>

      {/* soft clouds */}
      <g fill="#fff4ea" filter="url(#sc-soft)">
        <g className="sc-cloud" opacity="0.55">
          <ellipse cx="230" cy="150" rx="170" ry="22" />
          <ellipse cx="300" cy="134" rx="90" ry="24" />
        </g>
        <g className="sc-cloud sc-cloud--b" opacity="0.45">
          <ellipse cx="1150" cy="210" rx="190" ry="20" />
          <ellipse cx="1100" cy="196" rx="80" ry="20" />
        </g>
        <g className="sc-cloud sc-cloud--c" opacity="0.4">
          <ellipse cx="640" cy="96" rx="120" ry="14" />
        </g>
      </g>

      {/* birds */}
      <g fill="none" stroke="#6a2a16" strokeWidth="3" strokeLinecap="round">
        <path className="bird" d="M640 215 q14 -12 28 0 q14 -12 28 0" />
        <path className="bird bird--2" d="M722 252 q10 -9 20 0 q10 -9 20 0" />
        <path className="bird bird--3" d="M826 198 q12 -10 24 0 q12 -10 24 0" />
        <path className="bird bird--2" d="M880 236 q8 -7 16 0 q8 -7 16 0" />
      </g>

      {/* far range */}
      <g data-depth="0.8" opacity="0.92">
        <Peak x={160} y={340} w={460} base={560} lit="#f6a585" shade="#e88a6c" />
        <Peak x={500} y={280} w={520} base={560} lit="#f7ab8a" shade="#ea8d6e" />
        <Peak x={1010} y={350} w={440} base={560} lit="#f6a585" shade="#e88a6c" />
        <Peak x={1260} y={250} w={520} base={560} lit="#f7ab8a" shade="#e7876a" />
        {/* snow-lit tips */}
        <path d="M500 280 L540 324 L522 318 L506 330 L492 316 L470 314Z" fill="#ffd9c2" opacity="0.8" />
        <path d="M1260 250 L1300 296 L1280 290 L1262 304 L1246 288 L1226 288Z" fill="#ffd9c2" opacity="0.8" />
      </g>
      <rect y="380" width="1440" height="200" fill="url(#sc-haze)" />

      {/* mid range */}
      <g data-depth="0.6">
        <Peak x={120} y={430} w={420} base={610} lit="#ec7a54" shade="#d4603c" />
        <Peak x={430} y={400} w={460} base={610} lit="#ef825a" shade="#d75f3a" />
        <Peak x={1080} y={420} w={480} base={610} lit="#ec7a54" shade="#d4603c" />
        <Peak x={1370} y={440} w={360} base={610} lit="#ef825a" shade="#d75f3a" />
      </g>
      <rect y="470" width="1440" height="150" fill="url(#sc-haze)" opacity="0.6" />

      {/* hills with pines */}
      <g data-depth="0.4">
        <path d="M0 590 C 220 545, 380 560, 560 585 S 900 560, 1080 540 S 1330 560, 1440 545 L1440 760 L0 760Z" fill="url(#sc-hill)" />
        <g fill="#7a2a12">
          {TREES_MID.map(([x, y, h]) => <path key={`${x}-${y}`} d={pine(x, y, h)} />)}
        </g>
      </g>

      {/* lake with sun reflection */}
      <g data-depth="0.3">
        <path d="M240 612 C 380 596, 620 592, 820 598 S 1060 606, 1120 616 C 1000 640, 520 644, 240 612Z" fill="url(#sc-lake)" />
        <g className="sc-shimmer" stroke="#fff6ea" strokeLinecap="round">
          <line x1="712" y1="604" x2="808" y2="604" strokeWidth="3" />
          <line x1="726" y1="612" x2="796" y2="612" strokeWidth="2.5" />
          <line x1="738" y1="620" x2="782" y2="620" strokeWidth="2" />
          <line x1="748" y1="627" x2="772" y2="627" strokeWidth="1.6" />
        </g>
      </g>

      {/* cliff, rock and hiker */}
      <g data-depth="0.22">
        <path d="M1440 760 L1440 478 L1330 458 L1250 462 L1176 482 L1110 520 L1050 580 L996 660 L960 760Z" fill="#2c120a" />
        {/* lit cliff edge facing the sun */}
        <path d="M1176 482 L1250 462 L1330 458 L1440 478 L1440 488 L1330 468 L1252 472 L1182 492 L1118 528 L1110 520Z" fill="#b5532c" opacity="0.75" />
        <path d="M1194 474 C 1198 448, 1232 438, 1250 448 C 1258 452, 1262 460, 1264 468 L1194 478Z" fill="#3a170c" />
        <path d="M1200 456 C 1210 444, 1232 440, 1246 446" stroke="#c4602f" strokeWidth="2" fill="none" opacity="0.7" />
        <g transform="translate(1262 467) scale(1.08)">
          <g fill="#160a06">
            <Hiker />
          </g>
        </g>
      </g>

      {/* foreground with pines */}
      <g data-depth="0.1">
        <path d="M0 650 C 180 610, 360 620, 560 650 S 920 696, 1080 668 S 1340 650, 1440 660 L1440 760 L0 760Z" fill="url(#sc-front)" />
        <g fill="#2a0f07">
          {TREES_FRONT.map(([x, y, h]) => <path key={`${x}-${y}`} d={pine(x, y, h)} />)}
        </g>
      </g>
      <path d="M0 708 C 260 680, 520 696, 760 716 S 1200 706, 1440 696 L1440 760 L0 760Z" fill="#140a06" />
      {/* grass tufts */}
      <g stroke="#140a06" strokeWidth="3" strokeLinecap="round" fill="none">
        {[180, 240, 420, 700, 860, 1010, 1180, 1320].map((x, i) => (
          <path key={x} d={`M${x} ${712 - (i % 3) * 4} q-4 -18 -10 -26 M${x} ${712 - (i % 3) * 4} q2 -20 6 -30 M${x} ${712 - (i % 3) * 4} q6 -14 14 -20`} />
        ))}
      </g>

      {/* drifting leaves and embers */}
      <g>
        <ellipse className="sc-leaf" cx="300" cy="560" rx="9" ry="4" fill="#e8743f" />
        <ellipse className="sc-leaf sc-leaf--2" cx="620" cy="520" rx="7" ry="3" fill="#f39a5e" />
        <ellipse className="sc-leaf sc-leaf--3" cx="980" cy="590" rx="8" ry="3.5" fill="#d9612f" />
        <ellipse className="sc-leaf sc-leaf--4" cx="1200" cy="420" rx="7" ry="3" fill="#f39a5e" />
      </g>
      <g fill="#ffbf8f">
        <circle className="ember" cx="220" cy="660" r="3" />
        <circle className="ember ember--2" cx="560" cy="690" r="2.5" />
        <circle className="ember ember--3" cx="900" cy="680" r="3.2" />
        <circle className="ember ember--4" cx="1180" cy="700" r="2.4" />
        <circle className="ember ember--5" cx="380" cy="710" r="2" />
      </g>

    </svg>
  );
}

// Hiker silhouette facing left (toward the sun): hood, backpack, one foot up on the rock.
// Origin is at the back foot; drawn with fills + thick round strokes for limbs.
function Hiker() {
  return (
    <>
      {/* back (standing) leg */}
      <path d="M-2 -86 C 0 -58, 1 -32, 0 -9 L 12 -9 C 14 -32, 16 -58, 17 -86Z" />
      {/* front leg stepping up onto the rock */}
      <path d="M-20 -88 C -28 -76, -36 -68, -40 -58 C -43 -50, -43 -40, -42 -29 L -32 -29 C -32 -40, -31 -48, -28 -55 C -22 -66, -12 -76, -2 -86Z" />
      {/* boots */}
      <path d="M-4 -11 L 13 -11 C 16 -7, 19 -3, 19 0 L -6 0 C -6 -4, -5 -8, -4 -11Z" />
      <path d="M-45 -32 L -31 -32 C -29 -28, -29 -25, -29 -22 L -53 -22 C -53 -26, -50 -30, -45 -32Z" />
      {/* backpack */}
      <path d="M10 -142 C 24 -146, 36 -138, 36 -124 L 36 -98 C 36 -90, 30 -85, 21 -87 L 13 -89Z" />
      {/* parka */}
      <path d="M-22 -134 C -27 -120, -28 -100, -24 -76 C -10 -72, 8 -72, 20 -76 C 22 -100, 22 -122, 17 -136 C 8 -143, -13 -143, -22 -134Z" />
      {/* front arm + hand */}
      <path d="M-19 -132 C -28 -122, -33 -104, -31 -88 C -30 -82, -27 -78, -23 -79 C -22 -85, -23 -94, -22 -104 C -20 -114, -16 -122, -12 -128Z" />
      <circle cx="-26" cy="-79" r="5" />
      {/* neck */}
      <path d="M-10 -146 L 2 -146 L 3 -134 L -10 -134Z" />
      {/* head facing left, with nose and beanie */}
      <ellipse cx="-4" cy="-156" rx="12.5" ry="13.5" />
      <path d="M-15.5 -157 L -20 -152 L -15.5 -150Z" />
      <path d="M-17 -159 C -17 -175, 9 -177, 9 -159 C 0 -162, -9 -162, -17 -159Z" />
      <circle cx="-4" cy="-175" r="3.5" />
    </>
  );
}
