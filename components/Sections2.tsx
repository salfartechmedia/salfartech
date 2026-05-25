"use client";

import Link from "next/link";
import { useTheme } from "@/lib/ThemeContext";
import Logo from "./Logo";

/* ── WHY US ── */
export function WhyUs() {
  const { t } = useTheme();
  const features = [
    { icon: "🚀", title: "Results-First Mindset",        desc: "Every strategy built around measurable outcomes — leads, revenue, sustainable growth." },
    { icon: "🤝", title: "Dedicated Account Management", desc: "Your dedicated manager is always just a message away, keeping you fully informed." },
    { icon: "💡", title: "Bespoke Strategies",           desc: "No cookie-cutter templates. Every solution custom-crafted for your brand and goals." },
    { icon: "🔬", title: "Continuous Optimization",      desc: "We never stop testing and improving — campaigns get smarter every month." },
  ];
  const metrics = [
    { num: "200+", label: "Projects Delivered",  sub: "Across 15+ countries" },
    { num: "$50M+",label: "Revenue Generated",   sub: "For our clients" },
    { num: "340%", label: "Avg. Traffic Growth", sub: "Within 6 months" },
    { num: "98%",  label: "Retention Rate",      sub: "Clients stay with us" },
    { num: "50+",  label: "Expert Team",         sub: "Specialists across domains" },
    { num: "8+",   label: "Years Experience",    sub: "In digital excellence" },
  ];
  return (
    <section id="about" style={{ padding: "7rem 2rem" }} className="sp-pad">
      <div className="wg" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        <div>
          <div style={{ color: t.accent, fontSize: ".73rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: ".7rem" }}>Why Salfartech</div>
          <h2 style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "clamp(1.9rem,3vw,2.8rem)", fontWeight: 900, letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: "1rem" }}>
            The Strategic Partner <span className="st">You Deserve</span>
          </h2>
          <p style={{ color: t.textMuted, lineHeight: 1.8, marginBottom: "2rem", fontSize: ".92rem" }}>
            We become an extension of your team, deeply invested in your success. Every decision is rooted in data, every creative choice serves a strategic purpose.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: ".9rem" }}>
            {features.map((f, i) => (
              <div key={i} className="ch" style={{ display: "flex", gap: ".9rem", background: t.surface, border: `1px solid ${t.border}`, borderRadius: 14, padding: "1.1rem 1.3rem" }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, background: `linear-gradient(135deg,${t.tagBg},rgba(99,102,241,0.07))`, border: `1px solid ${t.tagBorder}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>{f.icon}</div>
                <div>
                  <div style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: 700, fontSize: ".92rem", marginBottom: ".18rem", color: t.text }}>{f.title}</div>
                  <div style={{ color: t.textMuted, fontSize: ".8rem", lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mg" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {metrics.map((m, i) => (
            <div key={i} className="ch" style={{ borderRadius: 16, padding: "1.5rem", textAlign: "center", background: i === 0 ? "linear-gradient(135deg,#0ea5e9,#6366f1)" : t.surface, border: i === 0 ? "none" : `1px solid ${t.border}` }}>
              <div style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "2rem", fontWeight: 900, color: i === 0 ? "white" : t.accent, letterSpacing: "-1px" }}>{m.num}</div>
              <div style={{ fontSize: ".8rem", fontWeight: 600, color: i === 0 ? "rgba(255,255,255,.9)" : t.text, margin: ".28rem 0 .12rem" }}>{m.label}</div>
              <div style={{ fontSize: ".7rem", color: i === 0 ? "rgba(255,255,255,.6)" : t.textFaint }}>{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── TESTIMONIALS ── */
export function Testimonials() {
  const { t } = useTheme();
  const reviews = [
    { name: "Arjun Mehta",  role: "CEO, TechNova Solutions",    av: "AM", text: "Salfartech didn't just build us a website — they transformed our entire digital strategy. Our leads tripled in 4 months." },
    { name: "Priya Sharma", role: "Marketing Director, GrowFast",av: "PS", text: "The SEO results were beyond expectations. We went from page 5 to position 1 for our core keywords in under 6 months." },
    { name: "Rahul Kapoor", role: "Founder, RetailEdge",         av: "RK", text: "Our e-commerce revenue grew by 280% after partnering with Salfartech. Their PPC expertise is genuinely world-class." },
    { name: "Sara Ali",     role: "CMO, HealthBridge",           av: "SA", text: "Professional, proactive, and performance-driven. Salfartech is the digital partner every business needs." },
  ];
  return (
    <section style={{ padding: "7rem 2rem", background: t.bgAlt }} className="sp-pad">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ color: t.accent, fontSize: ".73rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: ".7rem" }}>Client Stories</div>
          <h2 style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 900, letterSpacing: "-1.5px" }}>
            What Our Clients <span className="st">Say</span>
          </h2>
        </div>
        <div className="testg" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.1rem" }}>
          {reviews.map((r, i) => (
            <div key={i} className="gl ch" style={{ borderRadius: 18, padding: "2rem", border: `1px solid ${t.border}` }}>
              <div style={{ color: t.accent, fontSize: "2.2rem", lineHeight: 1, marginBottom: ".8rem", fontFamily: "serif" }}>&ldquo;</div>
              <p className="fi" style={{ color: t.textMuted, lineHeight: 1.8, fontSize: ".93rem", marginBottom: "1.3rem" }}>{r.text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: ".8rem" }}>
                <div style={{ width: 42, height: 42, borderRadius: "50%", background: "linear-gradient(135deg,#0ea5e9,#6366f1)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: ".82rem", color: "white" }}>{r.av}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: ".88rem", color: t.text }}>{r.name}</div>
                  <div style={{ color: t.textFaint, fontSize: ".76rem" }}>{r.role}</div>
                </div>
                <div style={{ marginLeft: "auto", color: "#f59e0b", fontSize: ".82rem" }}>★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PORTFOLIO ── */
export function Portfolio() {
  const { t } = useTheme();
  const projects = [
    { title: "NovaMed Healthcare",       type: "Web Dev + SEO",         result: "+420% Organic Traffic", tag: "Healthcare" },
    { title: "LuxeStay Hospitality",     type: "Full Digital Marketing", result: "+280% Direct Bookings", tag: "Hospitality" },
    { title: "SwiftShop E-Commerce",     type: "Store Dev + PPC",        result: "+340% Revenue",         tag: "E-Commerce" },
    { title: "BuildRight Constructions", type: "Brand Identity + Web",   result: "+190% Lead Gen",        tag: "B2B" },
    { title: "EduPath Learning",         type: "SEO + Content",          result: "+500% Enrollments",     tag: "Education" },
    { title: "FinTrust Capital",         type: "Web + Social Media",     result: "+230% Brand Reach",     tag: "Finance" },
  ];
  return (
    <section id="portfolio" style={{ padding: "7rem 2rem" }} className="sp-pad">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="ph" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3.5rem" }}>
          <div>
            <div style={{ color: t.accent, fontSize: ".73rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: ".7rem" }}>Our Work</div>
            <h2 style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 900, letterSpacing: "-1.5px" }}>
              Recent <span className="st">Success Stories</span>
            </h2>
          </div>
          <Link href="#contact" style={{ color: t.accent, textDecoration: "none", fontSize: ".86rem", fontWeight: 600 }}>View All →</Link>
        </div>
        <div className="portg" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.1rem" }}>
          {projects.map((p, i) => (
            <div key={i} className="ch" style={{ borderRadius: 18, padding: "1.8rem", background: t.teamGrad, border: `1px solid ${t.teamBorder}`, position: "relative", overflow: "hidden", minHeight: 170 }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 100, height: 100, background: `radial-gradient(circle,${t.glowHero} 0%,transparent 70%)` }} />
              <span style={{ fontSize: ".66rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: t.accent, background: t.tagBg, padding: ".22rem .65rem", borderRadius: 50, border: `1px solid ${t.tagBorder}` }}>{p.tag}</span>
              <h4 style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: 800, fontSize: "1rem", margin: ".7rem 0 .25rem", color: t.text }}>{p.title}</h4>
              <p style={{ color: t.textMuted, fontSize: ".8rem", marginBottom: ".9rem" }}>{p.type}</p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: ".35rem", background: t.tagBg, border: `1px solid ${t.tagBorder}`, borderRadius: 50, padding: ".28rem .75rem", color: t.accent, fontWeight: 700, fontSize: ".8rem" }}>📈 {p.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PRICING ── */
export function Pricing() {
  const { t } = useTheme();
  const plans = [
    { name: "Starter",    price: "$799",  period: "/mo", popular: false,
      desc: "Perfect for small businesses establishing their digital presence.",
      features: ["5-page Website","Basic SEO Setup","Google My Business","Monthly Report","Email Support"] },
    { name: "Growth",     price: "$1,999",period: "/mo", popular: true,
      desc: "For growing businesses that need a comprehensive digital strategy.",
      features: ["Custom Website (15 pages)","Full SEO Campaign","Google + Meta Ads","Social Media (3 platforms)","Email Marketing","Weekly Reports","Dedicated Manager"] },
    { name: "Enterprise", price: "Custom",period: "",    popular: false,
      desc: "Full-service digital transformation for established enterprises.",
      features: ["Custom Web Application","360° Digital Marketing","AI-Powered Campaigns","Multi-channel Strategy","Advanced Analytics","24/7 Priority Support"] },
  ];
  return (
    <section style={{ padding: "7rem 2rem", background: t.bgAlt }} className="sp-pad">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ color: t.accent, fontSize: ".73rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: ".7rem" }}>Pricing</div>
          <h2 style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 900, letterSpacing: "-1.5px" }}>
            Transparent <span className="st">Pricing, No Surprises</span>
          </h2>
          <p style={{ color: t.textMuted, marginTop: ".7rem", fontSize: ".88rem" }}>All plans include a dedicated account manager and monthly performance reporting.</p>
        </div>
        <div className="prg" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.1rem" }}>
          {plans.map((plan, i) => (
            <div key={i} className="ch" style={{ borderRadius: 20, padding: "2.2rem", background: plan.popular ? `linear-gradient(135deg,${t.tagBg},rgba(99,102,241,.1))` : t.surface, border: plan.popular ? `1px solid ${t.teamBorder}` : `1px solid ${t.border}`, position: "relative", boxShadow: plan.popular ? `0 0 40px ${t.accent}18` : "none" }}>
              {plan.popular && <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#0ea5e9,#6366f1)", color: "white", fontSize: ".7rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", padding: ".28rem 1.1rem", borderRadius: 50, whiteSpace: "nowrap" }}>Most Popular</div>}
              <div style={{ color: t.textMuted, fontSize: ".83rem", fontWeight: 600, marginBottom: ".45rem" }}>{plan.name}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: ".18rem", marginBottom: ".7rem" }}>
                <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "2.6rem", fontWeight: 900, color: plan.popular ? t.accent : t.text, letterSpacing: "-2px" }}>{plan.price}</span>
                <span style={{ color: t.textFaint, fontSize: ".83rem" }}>{plan.period}</span>
              </div>
              <p style={{ color: t.textMuted, fontSize: ".82rem", lineHeight: 1.6, marginBottom: "1.3rem" }}>{plan.desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: ".55rem", marginBottom: "1.8rem" }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: "flex", gap: ".55rem", alignItems: "center", fontSize: ".83rem" }}>
                    <span style={{ color: t.accent, fontSize: ".78rem" }}>✓</span>
                    <span style={{ color: t.textMuted }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="#contact" className={plan.popular ? "btnp" : "btno"} style={{ display: "block", textAlign: "center", padding: ".85rem", fontSize: ".88rem" }}>
                {plan.price === "Custom" ? "Get Custom Quote →" : "Get Started →"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ── */
export function CTA() {
  const { t } = useTheme();
  return (
    <section id="contact" style={{ padding: "3rem 2rem 6rem" }}>
      <div className="cing" style={{ maxWidth: 1200, margin: "0 auto", background: t.ctaBg, borderRadius: 26, padding: "4.5rem 4rem", border: `1px solid ${t.teamBorder}`, display: "flex", justifyContent: "space-between", alignItems: "center", gap: "2.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,.12) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 560 }}>
          <div style={{ color: t.accent, fontSize: ".73rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: ".9rem" }}>Ready to Grow?</div>
          <h2 style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "clamp(1.7rem,3vw,2.5rem)", fontWeight: 900, letterSpacing: "-1px", lineHeight: 1.1, color: t.text, marginBottom: ".9rem" }}>
            Let&apos;s Build Something<br /><span className="st">Extraordinary Together</span>
          </h2>
          <p style={{ color: t.textMuted, fontSize: ".92rem", lineHeight: 1.7 }}>
            Schedule a free 30-minute strategy call. No commitment, no hard sell — just honest insights on how to grow your digital presence.
          </p>
        </div>
        <div className="cib" style={{ display: "flex", flexDirection: "column", gap: ".75rem", flexShrink: 0 }}>
          <a href="mailto:hello@salfartech.com" className="btnp" style={{ padding: "1rem 2.2rem", fontSize: ".95rem", textAlign: "center", whiteSpace: "nowrap" }}>📅 Book Free Consultation</a>
          <a href="tel:+1234567890" className="btno" style={{ padding: ".75rem 2rem", fontSize: ".86rem", textAlign: "center" }}>📞 +1 (234) 567-890</a>
          <p style={{ color: t.textFaint, fontSize: ".73rem", textAlign: "center" }}>Response within 2 business hours</p>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
export function Footer() {
  const { t } = useTheme();
  const cols = [
    { title: "Services", links: ["Web Development","SEO","Paid Advertising","Social Media","Email Marketing","Brand Design"] },
    { title: "Company",  links: ["About Us","Our Team","Portfolio","Careers","Blog","Press"] },
    { title: "Contact",  links: ["hello@salfartech.com","+1 (234) 567-890","New York, USA","Mon–Fri: 9AM–6PM"] },
  ];
  return (
    <footer style={{ borderTop: `1px solid ${t.footBorder}`, padding: "3.5rem 2rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="fg" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "2.5rem", marginBottom: "2.5rem" }}>
          <div>
            <Logo size={34} />
            <p style={{ color: t.textMuted, fontSize: ".84rem", lineHeight: 1.7, marginTop: ".9rem", maxWidth: 280 }}>
              A premier digital marketing and web development agency helping businesses thrive in the digital age.
            </p>
            <div style={{ display: "flex", gap: ".6rem", marginTop: "1.2rem" }}>
              {["in","tw","fb","ig"].map(s => (
                <div key={s} style={{ width: 34, height: 34, borderRadius: 8, background: t.surface, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".72rem", fontWeight: 700, color: t.textMuted, cursor: "pointer", transition: "all .2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = t.borderHov; (e.currentTarget as HTMLElement).style.color = t.accent; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = t.border;    (e.currentTarget as HTMLElement).style.color = t.textMuted; }}
                >{s.toUpperCase()}</div>
              ))}
            </div>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: 700, fontSize: ".88rem", marginBottom: "1.1rem", color: t.text }}>{col.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: ".55rem" }}>
                {col.links.map(l => (
                  <a key={l} href="#" style={{ color: t.textMuted, fontSize: ".81rem", textDecoration: "none", transition: "color .2s" }}
                    onMouseEnter={e => (e.target as HTMLElement).style.color = t.accent}
                    onMouseLeave={e => (e.target as HTMLElement).style.color = t.textMuted}
                  >{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: `1px solid ${t.border}`, paddingTop: "1.3rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: ".8rem" }}>
          <p style={{ color: t.textFaint, fontSize: ".76rem" }}>© 2026 Salfartech. All rights reserved.</p>
          <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
            {["Privacy Policy","Terms of Service","Cookie Policy"].map(l => (
              <a key={l} href="#" style={{ color: t.textFaint, fontSize: ".76rem", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
