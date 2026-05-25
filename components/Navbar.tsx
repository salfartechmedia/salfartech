"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useTheme } from "@/lib/ThemeContext";

export default function Navbar() {
  const { dark, setDark, t } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mob, setMob] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = ["Services", "Solutions", "Process", "Team", "Portfolio", "Contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, width: "100%", zIndex: 200, padding: "0 2.5rem",
      background: scrolled ? t.navBg : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? `1px solid ${t.border}` : "1px solid transparent",
      transition: "all .4s ease",
      display: "flex", alignItems: "center", justifyContent: "space-between", height: 72,
    }}>
      <Logo size={36} />

      {/* Desktop links */}
      <div className="dnd" style={{ display: "flex", gap: "1.8rem", alignItems: "center" }}>
        {links.map(l => (
          <Link key={l} href={`#${l.toLowerCase()}`} className="nl">{l}</Link>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
        {/* Theme Toggle */}
        <button
          onClick={() => setDark(d => !d)}
          title={dark ? "Light Mode" : "Dark Mode"}
          style={{
            width: 46, height: 26, borderRadius: 13,
            background: dark ? "linear-gradient(135deg,#0ea5e9,#6366f1)" : "rgba(0,0,0,0.12)",
            border: `1.5px solid ${t.border}`, cursor: "pointer",
            position: "relative", transition: "all .3s", flexShrink: 0,
          }}>
          <div style={{
            position: "absolute", top: 3, left: dark ? 22 : 3,
            width: 18, height: 18, borderRadius: "50%", background: "white",
            boxShadow: "0 1px 4px rgba(0,0,0,.3)", transition: "left .3s ease",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10,
          }}>
            {dark ? "🌙" : "☀️"}
          </div>
        </button>

        <Link href="#contact" className="btnp dnd" style={{ padding: ".55rem 1.3rem", fontSize: ".86rem" }}>
          Get Started →
        </Link>

        {/* Hamburger */}
        <button
          className="mmb"
          onClick={() => setMob(o => !o)}
          style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 4 }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{ width: 22, height: 2, borderRadius: 2, background: t.text, display: "block" }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {mob && (
        <div style={{
          position: "fixed", top: 72, left: 0, right: 0,
          background: t.navBg, backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${t.border}`,
          padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.2rem", zIndex: 199,
        }}>
          {links.map(l => (
            <Link key={l} href={`#${l.toLowerCase()}`} className="nl" style={{ fontSize: "1rem" }} onClick={() => setMob(false)}>
              {l}
            </Link>
          ))}
          <Link href="#contact" className="btnp" style={{ padding: ".7rem 1.4rem", fontSize: ".9rem", textAlign: "center" }}>
            Get Started →
          </Link>
        </div>
      )}
    </nav>
  );
}
