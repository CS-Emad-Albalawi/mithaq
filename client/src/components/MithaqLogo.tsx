// (c) 2026 Mithaq Technology. All Rights Reserved.
/**
 * MithaqLogo — Brand mark renderer with optional inline wordmark.
 *
 * Design layers (bottom to top):
 *   1. Shadow ghost — a faint, offset copy of the trefoil that adds
 *      a subtle 3D float feel.
 *   2. Outer band — radial gradient stroke (#3D6FBF center → #0A1F3D
 *      outer) so each petal looks lit from the centre, fading to a
 *      deep navy at the outer tip.
 *   3. Inner stripe — radial gradient stroke (#A8CCF5 center →
 *      #5A8FD8 outer) running down the middle of the dark band.
 *   4. Bind triangle — connects the three petals' inner endpoints,
 *      symbolising the three Saudi frameworks (NDMO / PDPL / NCA ECC)
 *      bound together by Mithaq.
 *   5. Centre node — a small filled circle anchoring the whole mark.
 *
 * `gradientUnits="userSpaceOnUse"` keeps the radial gradient anchored
 * to the SVG origin so all three rotated petals share a single,
 * consistent radial direction (centre → outer). Without it each
 * rotated petal would compute the gradient from its own bounding
 * box, breaking the unified glow.
 *
 * The optional wordmark next to it ("ميثاق" / "Mithaq") stays in
 * the theme's primary text colour with a tight three-layer
 * text-shadow → glowing edges that hug the glyphs.
 */
import { useLanguage } from "@/contexts/LanguageContext";

const SIZES = { xs: 24, sm: 32, md: 40, lg: 56, xl: 72 } as const;

interface MithaqLogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
  showName?: boolean;
  showText?: boolean;
  /** When true (default), apply the navy neon halo around the mark. */
  glow?: boolean;
  className?: string;
}

// Asymmetric teardrop: rounded fat outer end at (0, -70), tapering
// to a near-point at (0, -3). Width 56 × height 67 → slightly taller
// than wide, so three rotated copies form a proper trefoil rather
// than overlapping eggs.
const PETAL_PATH =
  "M 0,-70 " +
  "C 18,-70 28,-40 20,-20 " +
  "Q 12,-10 0,-3 " +
  "Q -12,-10 -20,-20 " +
  "C -28,-40 -18,-70 0,-70 " +
  "Z";

export function MithaqLogo({
  size = "md",
  showName = false,
  showText,
  glow = true,
  className = "",
}: MithaqLogoProps) {
  const { isAr } = useLanguage();
  const px = typeof size === "number" ? size : SIZES[size];
  const displayName = showText ?? showName;

  // Per-instance ids so multiple logos on a single page (Navbar +
  // Footer) don't share gradient/filter definitions.
  const deepId = `mithaq-deep-${px}`;
  const brightId = `mithaq-bright-${px}`;

  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      style={{ textDecoration: "none" }}
      aria-label={isAr ? "ميثاق — منصة حوكمة البيانات" : "Mithaq — Data Governance Platform"}
    >
      <svg
        width={px}
        height={px}
        viewBox="-75 -75 150 150"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={isAr ? "شعار ميثاق" : "Mithaq logo"}
        style={{
          flexShrink: 0,
          overflow: "visible",
          filter: glow
            ? "drop-shadow(0 0 4px rgba(90,143,216,0.55)) drop-shadow(0 0 11px rgba(46,90,158,0.35))"
            : "none",
        }}
      >
        <defs>
          {/* Outer band: bright in the centre, deep navy at the
              petal tips. r=70 matches the petal outer-tip radius. */}
          <radialGradient
            id={deepId}
            cx="0"
            cy="0"
            r="70"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#3D6FBF" />
            <stop offset="55%" stopColor="#1E3A6B" />
            <stop offset="100%" stopColor="#0A1F3D" />
          </radialGradient>
          {/* Inner stripe: brightest at the centre, fading to a
              mid-blue at the outer end of each petal. */}
          <radialGradient
            id={brightId}
            cx="0"
            cy="0"
            r="70"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#B8D4F5" />
            <stop offset="100%" stopColor="#5A8FD8" />
          </radialGradient>
        </defs>

        {/* Shadow ghost — faint offset copy adds a 3D float feel */}
        <g
          fill="none"
          stroke="#0A1F3D"
          strokeWidth="11"
          strokeLinejoin="round"
          opacity="0.4"
          transform="translate(1.5, 2.5)"
        >
          <path d={PETAL_PATH} />
          <path d={PETAL_PATH} transform="rotate(120)" />
          <path d={PETAL_PATH} transform="rotate(240)" />
        </g>

        {/* Outer band — radial gradient gives each petal a "lit
            from the centre" depth */}
        <g
          fill="none"
          stroke={`url(#${deepId})`}
          strokeWidth="11"
          strokeLinejoin="round"
        >
          <path d={PETAL_PATH} />
          <path d={PETAL_PATH} transform="rotate(120)" />
          <path d={PETAL_PATH} transform="rotate(240)" />
        </g>

        {/* Inner stripe — the duotone band runs down the middle of
            the dark outer stroke */}
        <g
          fill="none"
          stroke={`url(#${brightId})`}
          strokeWidth="3.5"
          strokeLinejoin="round"
        >
          <path d={PETAL_PATH} />
          <path d={PETAL_PATH} transform="rotate(120)" />
          <path d={PETAL_PATH} transform="rotate(240)" />
        </g>

        {/* Bind triangle — connects the three petals' inner
            endpoints; symbolises the three Saudi frameworks
            (NDMO / PDPL / NCA ECC) tied together by Mithaq */}
        <path
          d="M 0,-11 L 9.53,5.5 L -9.53,5.5 Z"
          fill="none"
          stroke="#7BA8E0"
          strokeWidth="1.5"
          strokeLinejoin="round"
          opacity="0.85"
        />

        {/* Centre node — focal anchor */}
        <circle cx="0" cy="0" r="2.6" fill="#B8D4F5" />
      </svg>

      {displayName && (
        <span
          style={{
            fontSize: px * 0.5,
            fontWeight: 700,
            color: "var(--text-primary)",
            fontFamily: isAr
              ? "'IBM Plex Sans Arabic', 'Noto Sans Arabic', sans-serif"
              : "'Inter', 'IBM Plex Sans Arabic', sans-serif",
            lineHeight: 1,
            textDecoration: "none",
            textDecorationLine: "none",
            textShadow: [
              "0 0 1px rgba(220,235,255,0.95)",
              "0 0 4px rgba(90,143,216,0.55)",
              "0 0 8px rgba(46,90,158,0.30)",
            ].join(", "),
          }}
        >
          {isAr ? "ميثاق" : "Mithaq"}
        </span>
      )}
    </div>
  );
}

export default MithaqLogo;
