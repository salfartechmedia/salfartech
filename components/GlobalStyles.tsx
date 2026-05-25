"use client";

import { useTheme } from "@/lib/ThemeContext";

export default function GlobalStyles() {
  const { t } = useTheme();

  return (
    <style>{`
      body {
        background: ${t.bg};
        color: ${t.text};
      }
      .fi { font-family: var(--font-lora), serif; font-style: italic; }

      @keyframes fadeUp   { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:translateY(0) } }
      @keyframes shimmer  { 0%   { background-position:-300% center } 100% { background-position:300% center } }
      @keyframes float    { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-14px) } }
      @keyframes spin     { from { transform:rotate(0deg) } to { transform:rotate(360deg) } }
      @keyframes marquee  { from { transform:translateX(0) } to { transform:translateX(-50%) } }

      .fu  { animation: fadeUp 0.65s ease both; }
      .fl  { animation: float 4.5s ease-in-out infinite; }
      .sp  { animation: spin 22s linear infinite; }
      .d1  { animation-delay: .1s } .d2 { animation-delay: .2s }
      .d3  { animation-delay: .3s } .d4 { animation-delay: .4s }
      .d5  { animation-delay: .5s }

      .st  {
        background: linear-gradient(90deg,#38bdf8,#fff,#38bdf8,#818cf8,#38bdf8);
        background-size: 300% auto;
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer 4s linear infinite;
      }
      .stl {
        background: linear-gradient(90deg,#0284c7,#4f46e5,#0284c7);
        background-size: 300% auto;
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer 4s linear infinite;
      }

      .ch { transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease; }
      .ch:hover {
        transform: translateY(-8px);
        box-shadow: ${t.cardShadow};
        border-color: ${t.borderHov} !important;
      }

      .btnp {
        background: linear-gradient(135deg,#0ea5e9,#6366f1);
        color: #fff; font-weight: 700; text-decoration: none;
        border-radius: 10px; display: inline-block;
        transition: all .3s ease; position: relative; overflow: hidden;
        font-family: var(--font-outfit), sans-serif;
      }
      .btnp::before {
        content: ''; position: absolute; top: 0; left: -100%;
        width: 100%; height: 100%;
        background: linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent);
        transition: left .5s ease;
      }
      .btnp:hover::before { left: 100%; }
      .btnp:hover {
        box-shadow: 0 0 28px rgba(14,165,233,.5), 0 10px 30px rgba(0,0,0,.25);
        transform: translateY(-2px);
      }

      .btno {
        border: 1.5px solid ${t.border};
        color: ${t.text}; font-weight: 600; text-decoration: none;
        border-radius: 10px; background: ${t.surface};
        display: inline-block; transition: all .3s ease;
        font-family: var(--font-outfit), sans-serif;
      }
      .btno:hover { border-color: ${t.borderHov}; background: ${t.surfaceHov}; }

      .nl { color: ${t.textMuted}; text-decoration: none; font-size: .88rem; font-weight: 500; transition: color .2s; }
      .nl:hover { color: ${t.accent}; }

      .mq  { animation: marquee 28s linear infinite; }

      .gbg {
        background-image:
          linear-gradient(${t.gridLine} 1px, transparent 1px),
          linear-gradient(90deg, ${t.gridLine} 1px, transparent 1px);
        background-size: 60px 60px;
      }

      .gl {
        background: ${t.surface};
        backdrop-filter: blur(16px);
        border: 1px solid ${t.border};
        transition: background .35s, border-color .35s;
      }

      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: ${t.scrollTr}; }
      ::-webkit-scrollbar-thumb { background: ${t.scrollT}; border-radius: 3px; }

      /* ── Responsive ── */
      @media(max-width:1024px) {
        .sg  { grid-template-columns: 1fr 1fr !important; }
        .sg > .fs { grid-column: span 1 !important; }
        .wg  { grid-template-columns: 1fr !important; }
        .tg  { grid-template-columns: 1fr 1fr !important; }
        .prg { grid-template-columns: 1fr !important; }
        .mg  { grid-template-columns: 1fr 1fr !important; }
        .fg  { grid-template-columns: 1fr 1fr !important; }
        .cing{ flex-direction: column !important; text-align: center; }
        .cib { align-items: center !important; }
      }
      @media(max-width:768px) {
        .sp-pad  { padding: 5rem 1.4rem !important; }
        .dnd     { display: none !important; }
        .mmb     { display: flex !important; }
        .h1s     { font-size: clamp(2.3rem,9vw,3.5rem) !important; }
        .sg      { grid-template-columns: 1fr !important; }
        .solg    { grid-template-columns: 1fr 1fr !important; }
        .tg      { grid-template-columns: 1fr !important; }
        .testg   { grid-template-columns: 1fr !important; }
        .portg   { grid-template-columns: 1fr 1fr !important; }
        .fg      { grid-template-columns: 1fr !important; }
        .ph      { flex-direction: column; align-items: flex-start !important; gap: .8rem; }
        .sr      { flex-wrap: wrap !important; }
        .sr > div {
          flex: 1 1 40%;
          border-right: none !important;
          border-bottom: 1px solid ${t.statsBorder};
        }
      }
      @media(max-width:480px) {
        .solg { grid-template-columns: 1fr !important; }
        .portg{ grid-template-columns: 1fr !important; }
        .mg   { grid-template-columns: 1fr 1fr !important; }
        .ha   { flex-direction: column !important; width: 100%; }
        .ha a { width: 100%; text-align: center; }
        .sr > div { flex: 1 1 100%; }
        .prg  { grid-template-columns: 1fr !important; }
      }
    `}</style>
  );
}
