"use client";

import { useTheme } from "@/lib/ThemeContext";

interface LogoProps { size?: number }

export default function Logo({ size = 38 }: LogoProps) {
  const { t } = useTheme();
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="lg1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="lg2" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <filter id="gf">
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <path d="M24 2L43 13V35L24 46L5 35V13L24 2Z" stroke="url(#lg1)" strokeWidth="1.5" fill="rgba(56,189,248,0.06)" />
        <path d="M24 10L36 24L24 38L12 24Z" fill="url(#lg1)" opacity=".1" />
        <path d="M18 30C18 30 14 28 14 24C14 20 18 19 21 19C24 19 27 20 27 17C27 14 24 13 21 13"
          stroke="url(#lg1)" strokeWidth="2.5" strokeLinecap="round" fill="none" filter="url(#gf)" />
        <line x1="27" y1="19" x2="34" y2="19" stroke="url(#lg2)" strokeWidth="2.5" strokeLinecap="round" filter="url(#gf)" />
        <line x1="30.5" y1="19" x2="30.5" y2="31" stroke="url(#lg2)" strokeWidth="2.5" strokeLinecap="round" filter="url(#gf)" />
        <circle cx="14" cy="31" r="1.5" fill="#38bdf8" />
        <circle cx="21" cy="31" r="1.5" fill="#6366f1" />
      </svg>
      <span style={{
        fontFamily: "var(--font-outfit), sans-serif", fontWeight: 800,
        fontSize: size * 0.44, letterSpacing: "-.5px",
        background: `linear-gradient(135deg,${t.text},${t.accent})`,
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
      }}>
        Salf<span style={{ WebkitTextFillColor: t.accent }}>ar</span>tech
      </span>
    </div>
  );
}
