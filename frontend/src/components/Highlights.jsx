import { useState } from "react";
import useReveal from "../hooks/useReveal";

const items = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
    title: "Money-safe by design",
    body: "Razorpay payments hardened with HMAC webhook verification, idempotent payment locks, and an atomic overspend guard — no double-charges, no negative balance, even under concurrent requests.",
    tag: "Arkalyn Kitty",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Auth that survives attacks",
    body: "JWT in HTTP-only cookies, rotating refresh tokens with reuse detection, and a 3-device session cap — one replayed token kills the whole session.",
    tag: "WorkZone + Arkalyn",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.9 5.1a2 2 0 0 0 1.2 1.2L20.2 11l-5.1 1.9a2 2 0 0 0-1.2 1.2L12 19.2l-1.9-5.1a2 2 0 0 0-1.2-1.2L3.8 11l5.1-1.9a2 2 0 0 0 1.2-1.2L12 3z" />
        <path d="M19 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z" />
      </svg>
    ),
    title: "I build AI tooling, not just call it",
    body: "A 7-tool MCP server on Render that lets an AI assistant query live app data, plus Gemini generation locked to strict JSON contracts.",
    tag: "MCP · Gemini",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3v12" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    ),
    title: "Correct under concurrency",
    body: "Atomic MongoDB mutations, a race-condition-safe session-rotation fix, and immutable audit logs — the quiet production killers, handled up front.",
    tag: "Backend rigor",
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
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#7d7a72", letterSpacing: "0.08em" }}>
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
