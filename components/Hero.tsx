"use client";

import Link from "next/link";
import { useTheme } from "@/lib/ThemeContext";

export default function Hero() {
  const { dark, t } = useTheme();
  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "8rem 2rem 5rem", textAlign: "center",
      position: "relative", overflow: "hidden",
      background: `radial-gradient(ellipse 80% 55% at 50% 0%,${t.glowHero} 0%,transparent 70%)`,
    }} className="gbg sp-pad">

      {/* Decorative orbs */}
      <div className="fl" style={{ position: "absolute", top: "14%", left: "7%", width: 280, height: 280, borderRadius: "50%", background: `radial-gradient(circle,${t.glowHero} 0%,transparent 70%)`, pointerEvents: "none" }} />
      <div className="fl d4" style={{ position: "absolute", bottom: "18%", right: "6%", width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,.09) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div className="sp" style={{ position: "absolute", top: "10%", right: "10%", width: 160, height: 160, borderRadius: "50%", border: `1px dashed ${t.border}`, pointerEvents: "none" }} />

      {/* Badge */}
      <div className="fu" style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: t.badgeBg, border: `1px solid ${t.badgeBorder}`,
        borderRadius: 50, padding: ".42rem 1.1rem",
        fontSize: ".76rem", fontWeight: 700, color: t.accent,
        letterSpacing: "1px", textTransform: "uppercase", marginBottom: "2rem",
      }}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: t.accent, display: "inline-block", boxShadow: `0 0 6px ${t.accent}` }} />
        Trusted Digital Growth Partner
      </div>

      <h1 className="fu d1 h1s" style={{
        fontFamily: "var(--font-outfit), sans-serif",
        fontSize: "clamp(2.8rem,5.5vw,5rem)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-3px", marginBottom: "1rem",
      }}>
        <span className={dark ? "st" : "stl"}>Transform Your</span><br />
        <span style={{ color: t.text }}>Digital Presence</span>
      </h1>

      <p className="fi fu d2" style={{ fontSize: "1.1rem", color: t.textMuted, maxWidth: 560, lineHeight: 1.75, margin: ".8rem auto 0" }}>
        We architect powerful websites and execute data-driven marketing strategies that turn visitors into loyal customers.
      </p>

      <div className="fu d3 ha" style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="#contact" className="btnp" style={{ padding: "1rem 2.2rem", fontSize: ".95rem" }}>Start Your Project →</Link>
        <Link href="#services" className="btno" style={{ padding: "1rem 2.2rem", fontSize: ".95rem" }}>View Services ↓</Link>
      </div>

      {/* Stats bar */}
      <div className="fu d4 sr" style={{
        display: "flex", marginTop: "4.5rem",
        border: `1px solid ${t.statsBorder}`, borderRadius: 16,
        background: t.statsBg, backdropFilter: "blur(12px)", overflow: "hidden",
      }}>
        {[
          { num: "200+", label: "Projects Delivered" },
          { num: "98%",  label: "Client Satisfaction" },
          { num: "5×",   label: "Average ROI Growth" },
          { num: "50+",  label: "Team Members" },
          { num: "8+",   label: "Years Excellence" },
        ].map((s, i) => (
          <div key={i} style={{ padding: "1.4rem 2rem", textAlign: "center", borderRight: i < 4 ? `1px solid ${t.statsBorder}` : "none", flexShrink: 0 }}>
            <div style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "1.85rem", fontWeight: 900, color: t.accent, letterSpacing: "-1px" }}>{s.num}</div>
            <div style={{ fontSize: ".76rem", color: t.textMuted, marginTop: ".15rem", fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
