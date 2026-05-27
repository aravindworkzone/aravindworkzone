import { useState } from "react";
import useReveal from "../hooks/useReveal";

const items = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Security-first auth",
    body: "JWT with HTTP-only cookies, refresh token rotation, and reuse-detection that invalidates entire sessions on replay attacks.",
    tag: "WorkZone",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 14h3M8 17h6" />
      </svg>
    ),
    title: "RBAC at middleware layer",
    body: "3-tier role hierarchy (Member / Admin / Super Admin) enforced server-side with atomic balance updates — no negative pool, no race conditions.",
    tag: "Arkalayn Kitty",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "AI integration that works",
    body: "Gemini-powered routine generation with controlled prompts and strict JSON parsing — turns yearly goals into actionable daily plans.",
    tag: "AI · Gemini",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12l5 5L20 7" />
      </svg>
    ),
    title: "Shipped, not stuck in dev",
    body: "Every project is publicly deployed — Vercel + Render. Real URLs. Real users could hit them right now. Not screenshots in a folder.",
    tag: "2 live apps",
  },
];

function Card({ item, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="rounded-2xl p-6 md:p-7 cursor-default h-full"
      style={{
        background: "white",
        border: `1px solid ${hovered ? "rgba(26,86,232,0.4)" : "#e4e2dd"}`,
        boxShadow: hovered ? "0 12px 32px rgba(26,86,232,0.12)" : "0 2px 10px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${index * 40}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between mb-5">
        <div
          className="flex items-center justify-center rounded-xl"
          style={{
            width: 44,
            height: 44,
            background: hovered ? "#1a56e8" : "#eef2fd",
            color: hovered ? "#fafaf8" : "#1a56e8",
            transition: "all 0.25s ease",
          }}
        >
          {item.icon}
        </div>
        <span
          className="px-2.5 py-1 rounded-full"
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: 10,
            color: "#6b6860",
            background: "#f4f3ef",
            border: "1px solid #e4e2dd",
            letterSpacing: "0.04em",
          }}
        >
          {item.tag}
        </span>
      </div>
      <h3
        style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: 19,
          fontWeight: 700,
          color: "#111110",
          letterSpacing: "-0.015em",
          marginBottom: 8,
          lineHeight: 1.3,
        }}
      >
        {item.title}
      </h3>
      <p className="text-[14px] text-[#6b6860] leading-[1.65]">{item.body}</p>
    </div>
  );
}

export default function Highlights() {
  const reveal = useReveal();
  return (
    <section
      id="highlights"
      className="py-20 md:py-24"
      style={{ background: "#fafaf8", fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-[1000px] mx-auto px-6 md:px-16" ref={reveal.ref}>
        <div className={`flex items-baseline justify-between mb-10 md:mb-12 ${reveal.className}`}>
          <h2
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "clamp(22px, 2.8vw, 30px)",
              fontWeight: 700,
              color: "#111110",
              letterSpacing: "-0.02em",
            }}
          >
            What I bring to the table
          </h2>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#b8b5ae", letterSpacing: "0.08em" }}>
            01 / why hire me
          </span>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 ${reveal.className}`}>
          {items.map((item, i) => (
            <Card key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
