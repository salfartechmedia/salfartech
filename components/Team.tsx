"use client";

import { useTheme } from "@/lib/ThemeContext";
import { TEAM_MEMBERS } from "@/lib/theme";

export default function Team() {
  const { t } = useTheme();
  const coFounders = TEAM_MEMBERS.filter(m => m.isCoF);
  const employees  = TEAM_MEMBERS.filter(m => !m.isCoF);

  return (
    <section id="team" style={{ padding: "7rem 2rem", background: t.bgAlt }} className="sp-pad">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ color: t.accent, fontSize: ".73rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: ".7rem" }}>Meet The Team</div>
          <h2 style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: ".9rem" }}>
            The Minds Behind <span className="st">Salfartech</span>
          </h2>
          <p style={{ color: t.textMuted, maxWidth: 520, margin: "0 auto", fontSize: ".92rem", lineHeight: 1.7 }}>
            A passionate trio united by one mission — to help businesses grow with creativity, strategy, and technology.
          </p>
        </div>

        {/* Co-Founders Grid */}
        <div className="tg" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem", marginBottom: "1.2rem" }}>
          {coFounders.map((m, i) => (
            <div key={i} className="ch" style={{
              borderRadius: 22, padding: "2.4rem",
              background: t.teamGrad, border: `1px solid ${t.teamBorder}`,
              position: "relative", overflow: "hidden",
            }}>
              {/* Blob */}
              <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: `radial-gradient(circle,${m.bc}22 0%,transparent 70%)`, pointerEvents: "none" }} />

              {/* Co-Founder Badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: `${m.bc}18`, border: `1px solid ${m.bc}44`,
                borderRadius: 50, padding: ".3rem .85rem",
                fontSize: ".7rem", fontWeight: 700, color: m.bc,
                letterSpacing: "1px", textTransform: "uppercase", marginBottom: "1.4rem",
              }}>
                <span style={{ fontSize: ".55rem" }}>★</span> Co-Founder
              </div>

              {/* Avatar + Name */}
              <div style={{ display: "flex", alignItems: "center", gap: "1.1rem", marginBottom: "1.3rem" }}>
                <div style={{
                  width: 68, height: 68, borderRadius: "50%", background: m.grad, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-outfit),sans-serif", fontWeight: 900, fontSize: "1.5rem", color: "white",
                  boxShadow: `0 0 24px ${m.bc}44`,
                }}>{m.initials}</div>
                <div>
                  <div style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: 900, fontSize: "1.3rem", color: t.text, lineHeight: 1.1 }}>{m.name}</div>
                  <div style={{ color: t.textMuted, fontSize: ".82rem", marginTop: ".2rem" }}>{m.role}</div>
                </div>
              </div>

              {/* Bio */}
              <p className="fi" style={{ color: t.textMuted, fontSize: ".88rem", lineHeight: 1.75, marginBottom: "1.4rem" }}>{m.bio}</p>

              {/* Skill Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".45rem" }}>
                {m.skills.map((sk, j) => (
                  <span key={j} style={{
                    display: "flex", alignItems: "center", gap: ".35rem",
                    fontSize: ".75rem", fontWeight: 600, padding: ".32rem .75rem", borderRadius: 50,
                    background: `${m.bc}12`, border: `1px solid ${m.bc}30`, color: m.bc,
                  }}>
                    <span>{m.icons[j]}</span>{sk}
                  </span>
                ))}
              </div>

              {/* Bottom bar */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, borderRadius: "0 0 22px 22px", background: m.grad }} />
            </div>
          ))}
        </div>

        {/* Employee */}
        {employees.map((m, i) => (
          <div key={i} className="ch" style={{
            borderRadius: 22, padding: "2.2rem 2.4rem",
            background: t.teamGrad, border: `1px solid ${t.teamBorder}`,
            position: "relative", overflow: "hidden",
            maxWidth: 640, margin: "0 auto",
          }}>
            <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: `radial-gradient(circle,${m.bc}22 0%,transparent 70%)`, pointerEvents: "none" }} />

            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: `${m.bc}18`, border: `1px solid ${m.bc}44`,
              borderRadius: 50, padding: ".28rem .8rem",
              fontSize: ".68rem", fontWeight: 700, color: m.bc,
              letterSpacing: "1px", textTransform: "uppercase", marginBottom: "1.2rem",
            }}>
              <span style={{ fontSize: ".5rem" }}>●</span> Team Member
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.1rem" }}>
              <div style={{
                width: 58, height: 58, borderRadius: "50%", background: m.grad, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-outfit),sans-serif", fontWeight: 900, fontSize: "1.2rem", color: "white",
                boxShadow: `0 0 20px ${m.bc}44`,
              }}>{m.initials}</div>
              <div>
                <div style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: 900, fontSize: "1.2rem", color: t.text }}>{m.name}</div>
                <div style={{ color: t.textMuted, fontSize: ".8rem", marginTop: ".15rem" }}>{m.role}</div>
              </div>
            </div>

            <p className="fi" style={{ color: t.textMuted, fontSize: ".86rem", lineHeight: 1.75, marginBottom: "1.2rem" }}>{m.bio}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
              {m.skills.map((sk, j) => (
                <span key={j} style={{
                  display: "flex", alignItems: "center", gap: ".3rem",
                  fontSize: ".74rem", fontWeight: 600, padding: ".3rem .72rem", borderRadius: 50,
                  background: `${m.bc}12`, border: `1px solid ${m.bc}30`, color: m.bc,
                }}>
                  <span>{m.icons[j]}</span>{sk}
                </span>
              ))}
            </div>

            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, borderRadius: "0 0 22px 22px", background: m.grad }} />
          </div>
        ))}
      </div>
    </section>
  );
}
