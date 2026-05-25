"use client";
import { useTheme } from "@/lib/ThemeContext";
import { SERVICES } from "@/lib/theme";

/* ── MARQUEE ── */
export function Marquee() {
  const { t } = useTheme();
  const items = ["Web Development","SEO Optimization","Social Media Marketing","Google Ads","UI/UX Design","Content Strategy","Brand Identity","Email Campaigns","E-Commerce","Analytics & Reporting"];
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", borderTop: `1px solid ${t.border}`, borderBottom: `1px solid ${t.border}`, padding: "1rem 0", background: t.tagBg }}>
      <div className="mq" style={{ display: "flex", gap: "3rem", whiteSpace: "nowrap" }}>
        {doubled.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: ".8rem", flexShrink: 0 }}>
            <span style={{ color: t.accent, fontSize: ".55rem" }}>◆</span>
            <span style={{ color: t.textMuted, fontSize: ".8rem", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase" }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── SERVICES ── */
export function Services() {
  const { t } = useTheme();
  return (
    <section id="services" style={{ padding: "7rem 2rem" }} className="sp-pad">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <div style={{ color: t.accent, fontSize: ".73rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: ".7rem" }}>What We Offer</div>
          <h2 style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, letterSpacing: "-1.5px", lineHeight: 1.1 }}>
            Services Built for<br /><span className="st">Real Results</span>
          </h2>
          <p style={{ color: t.textMuted, maxWidth: 500, marginTop: ".9rem", lineHeight: 1.7, fontSize: ".92rem" }}>
            From pixel-perfect websites to performance-driven campaigns — everything your brand needs to dominate online.
          </p>
        </div>
        <div className="sg" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.1rem" }}>
          {SERVICES.map((s, i) => (
            <div key={i} className={`gl ch ${s.featured ? "fs" : ""}`} style={{
              borderRadius: 18, padding: "2rem",
              border: s.featured ? `1px solid ${t.teamBorder}` : `1px solid ${t.border}`,
              background: s.featured ? `linear-gradient(135deg,${t.tagBg},rgba(99,102,241,0.06))` : t.surface,
              gridColumn: s.featured ? "span 2" : "span 1",
              position: "relative", overflow: "hidden",
            }}>
              {s.featured && (
                <div style={{ position: "absolute", top: "1rem", right: "1rem", background: "linear-gradient(135deg,#0ea5e9,#6366f1)", color: "white", fontSize: ".66rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", padding: ".28rem .75rem", borderRadius: 50 }}>Core Service</div>
              )}
              <div style={{ fontSize: "1.8rem", marginBottom: ".9rem" }}>{s.icon}</div>
              <h3 style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "1.1rem", fontWeight: 800, marginBottom: ".55rem", color: t.text }}>{s.title}</h3>
              <p style={{ color: t.textMuted, fontSize: ".85rem", lineHeight: 1.7, marginBottom: "1.1rem" }}>{s.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".38rem" }}>
                {s.tags.map(tag => (
                  <span key={tag} style={{ fontSize: ".7rem", fontWeight: 600, padding: ".26rem .65rem", borderRadius: 50, background: t.tagBg, border: `1px solid ${t.tagBorder}`, color: t.accent }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SOLUTIONS ── */
export function Solutions() {
  const { t } = useTheme();
  const industries = [
    { icon: "🏥", name: "Healthcare",     desc: "HIPAA-compliant websites and patient acquisition" },
    { icon: "🏠", name: "Real Estate",    desc: "Lead-generating portals and hyper-local SEO" },
    { icon: "🛍️", name: "E-Commerce",     desc: "Conversion-optimized stores with full-funnel marketing" },
    { icon: "📚", name: "Education",      desc: "Student enrollment campaigns and institutional branding" },
    { icon: "🍽️", name: "Hospitality",    desc: "Booking-driven websites and reputation management" },
    { icon: "💼", name: "Finance",        desc: "Trust-building digital presence for financial firms" },
    { icon: "⚙️", name: "Manufacturing",  desc: "B2B lead generation and industrial branding" },
    { icon: "🚀", name: "Startups",       desc: "Rapid go-to-market websites and growth hacking" },
  ];
  return (
    <section id="solutions" style={{ padding: "7rem 2rem", background: t.bgAlt }} className="sp-pad">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ color: t.accent, fontSize: ".73rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: ".7rem" }}>Industries We Serve</div>
          <h2 style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 900, letterSpacing: "-1.5px" }}>
            Tailored Solutions for <span className="st">Every Industry</span>
          </h2>
        </div>
        <div className="solg" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem" }}>
          {industries.map((ind, i) => (
            <div key={i} className="gl ch" style={{ borderRadius: 16, padding: "1.6rem", border: `1px solid ${t.border}` }}>
              <div style={{ fontSize: "1.7rem", marginBottom: ".7rem" }}>{ind.icon}</div>
              <h4 style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: 700, fontSize: ".95rem", marginBottom: ".35rem", color: t.text }}>{ind.name}</h4>
              <p style={{ color: t.textMuted, fontSize: ".79rem", lineHeight: 1.6 }}>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PROCESS ── */
export function Process() {
  const { t } = useTheme();
  const steps = [
    { n: "01", icon: "🔍", title: "Discovery & Audit",      desc: "Thorough audit of your digital presence, competitors, and audience to identify growth opportunities." },
    { n: "02", icon: "🗺️", title: "Strategy Blueprint",     desc: "Custom data-driven roadmap with clear KPIs, timelines, and deliverables aligned to your goals." },
    { n: "03", icon: "🎨", title: "Creative Design",        desc: "Pixel-perfect, on-brand visuals and interfaces that convert visitors into customers." },
    { n: "04", icon: "⚡", title: "Development & Launch",   desc: "Engineers build and rigorously test every component before a seamless zero-downtime launch." },
    { n: "05", icon: "🎯", title: "Campaign Execution",     desc: "Multi-channel campaigns — SEO, PPC, social, email — with continuous A/B testing." },
    { n: "06", icon: "📈", title: "Analyze & Scale",        desc: "Monthly reviews with transparent reporting. Double down on what works and scale aggressively." },
  ];
  return (
    <section id="process" style={{ padding: "7rem 2rem" }} className="sp-pad">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <div style={{ color: t.accent, fontSize: ".73rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: ".7rem" }}>How We Work</div>
          <h2 style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 900, letterSpacing: "-1.5px", lineHeight: 1.1 }}>
            Our Battle-Tested <span className="st">6-Step Process</span>
          </h2>
        </div>
        <div className="sg" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.1rem" }}>
          {steps.map((step, i) => (
            <div key={i} className="gl ch" style={{ borderRadius: 18, padding: "2rem", border: `1px solid ${t.border}`, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "1rem", right: "1.2rem", fontFamily: "var(--font-outfit),sans-serif", fontSize: "3.2rem", fontWeight: 900, color: t.accent, opacity: .07, lineHeight: 1 }}>{step.n}</div>
              <div style={{ fontSize: "1.7rem", marginBottom: ".9rem" }}>{step.icon}</div>
              <h4 style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "1rem", fontWeight: 800, marginBottom: ".5rem", color: t.text }}>{step.title}</h4>
              <p style={{ color: t.textMuted, fontSize: ".84rem", lineHeight: 1.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
