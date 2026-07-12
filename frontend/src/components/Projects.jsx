import { useState } from "react";
import { Btn } from "./Hero";
import useReveal from "../hooks/useReveal";

const projects = [
  {
    id: "arkalyn",
    name: "Arkalyn Kitty",
    featured: true,
    tagline: "Group expense management with role-based access control",
    badge: "Fintech · Live",
    meta: "Group wallet · Full-stack · TypeScript",
    description:
      "A production-oriented group wallet system built on a pooled balance model. Members contribute to a shared pool, expenses are deducted, and every mutation is logged — financial integrity enforced at every layer.",
    stats: [
      { val: "4", label: "Role tiers" },
      { val: "3", label: "Deployables" },
      { val: "₹", label: "Paise-precise" },
      { val: "7", label: "MCP tools" },
    ],
    arch: [
      "Pooled wallet model",
      "4-tier RBAC (Member / Admin / SuperAdmin / AppOwner)",
      "HMAC-verified Razorpay webhooks",
      "Idempotent payment locks",
      "Atomic overspend guard",
      "Integer-paise money storage (zero float drift)",
      "Append-only ledger (CREDIT/DEBIT/REFUND)",
      "3-package monorepo (backend/frontend/MCP)",
      "Rotating refresh tokens + device cap",
      "Zod + Mongoose double-layer validation",
    ],
    tech: ["React", "Vite", "Tailwind CSS v4", "Redux Toolkit", "RTK Query", "Node.js", "Express", "TypeScript", "MongoDB"],
    live: "https://arkalynkitty-fin.vercel.app",
    repo: "https://github.com/aravindworkzone/Arkalayn-kitty",
    host: "arkalynkitty-fin.vercel.app",
    // TODO: replace with a live screenshot of arkalynkitty-fin.vercel.app —
    // no screenshot exists in the Arkalyn Kitty repo yet.
    img: "/arkalyn-kitty.png",
    alt: "Arkalyn Kitty landing page — shared group wallet for expenses",
  },
  {
    id: "workzone",
    name: "WorkZone",
    tagline: "AI-powered goal-to-routine productivity SaaS",
    badge: "SaaS · Live",
    meta: "Productivity platform · Full-stack · AI-integrated",
    description:
      "Converts yearly goals into structured daily routines using AI. Built with full JWT auth, refresh token rotation with reuse detection, 7-day productivity tracking, and 30-day history aggregation.",
    stats: [
      { val: "JWT", label: "Auth" },
      { val: "AI", label: "Integrated" },
      { val: "7d", label: "Tracker" },
      { val: "30d", label: "History" },
    ],
    arch: [
      "JWT + HTTP-only cookies",
      "Refresh token rotation",
      "Refresh Token Reuse Detection",
      "SHA-256 hashed refresh tokens",
      "3-device cap, oldest evicted",
      "401/403 error separation",
      "AI routine generation (Gemini)",
      "Goal → Routine → Today pipeline",
      "RTK Query caching",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Redux Toolkit", "RTK Query", "Node.js", "Express", "MongoDB", "Gemini AI"],
    live: "https://workzone-todo.vercel.app",
    repo: "https://github.com/aravindworkzone/Workzone",
    host: "workzone-todo.vercel.app",
    img: "/workzone.png",
    alt: "WorkZone dashboard — daily tasks, routines and productivity tracking",
  },
];

function BrowserBar({ host }) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2.5"
      style={{
        background: "#f4f3ef",
        borderBottom: "1px solid #e4e2dd",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
      }}
    >
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#27c93f" }} />
      <div
        className="flex-1 ml-3 px-3 py-1 rounded-md text-center truncate"
        style={{
          fontFamily: "'DM Mono',monospace",
          fontSize: 11,
          color: "#6b6860",
          background: "white",
          border: "1px solid #e4e2dd",
        }}
      >
        🔒 {host}
      </div>
    </div>
  );
}

function ProjectCard({ p, hovered, setHovered, index }) {
  const reveal = useReveal();
  return (
    <div ref={reveal.ref} className={reveal.className} style={{ transitionDelay: `${index * 80}ms` }}>
      <div
        className="overflow-hidden mb-5 cursor-default"
        style={{
          background: "white",
          border: "1px solid #e4e2dd",
          borderRadius: 16,
          boxShadow: hovered === p.id ? "0 16px 48px rgba(0,0,0,0.12)" : "0 2px 12px rgba(0,0,0,0.04)",
          transform: hovered === p.id ? "translateY(-4px)" : "translateY(0)",
          transition: "all 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onMouseEnter={() => setHovered(p.id)}
        onMouseLeave={() => setHovered(null)}
      >
        <BrowserBar host={p.host} />

        <a
          href={p.live}
          target="_blank"
          rel="noreferrer"
          className="relative block overflow-hidden"
          style={{ borderBottom: "1px solid #e4e2dd", background: "#111110" }}
          aria-label={`Open ${p.name} live site`}
        >
          <img
            src={p.img}
            alt={p.alt}
            loading="lazy"
            className="w-full block"
            style={{
              aspectRatio: "2.4 / 1",
              objectFit: "cover",
              objectPosition: "top",
              transform: hovered === p.id ? "scale(1.025)" : "scale(1)",
              transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
          <div
            className="absolute inset-0 flex items-end justify-center pb-5 pointer-events-none"
            style={{
              background: "linear-gradient(to top, rgba(17,17,16,0.55), transparent 45%)",
              opacity: hovered === p.id ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          >
            <span
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-semibold"
              style={{
                background: "#fafaf8",
                color: "#111110",
                boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
                transform: hovered === p.id ? "translateY(0)" : "translateY(10px)",
                transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              Open live site
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
          </div>
        </a>

        <div className="p-7 md:p-11">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-5 mb-7">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-1.5">
                <span
                  style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: "clamp(22px, 3vw, 34px)",
                    fontWeight: 700,
                    color: "#111110",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.name}
                </span>
                <span
                  className="px-3 py-0.5 rounded-full text-[10px] font-medium tracking-wider"
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    background: "#eef2fd",
                    border: "1px solid rgba(26,86,232,0.2)",
                    color: "#1a56e8",
                  }}
                >
                  {p.badge}
                </span>
                {p.featured && (
                  <span
                    className="px-3 py-0.5 rounded-full text-[10px] font-semibold tracking-wider"
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      background: "linear-gradient(90deg, #1a56e8, #4f7fff)",
                      color: "white",
                      letterSpacing: "0.08em",
                    }}
                  >
                    ★ FEATURED
                  </span>
                )}
              </div>
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: "#7d7a72" }}>
                {p.meta}
              </span>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              <Btn variant="accent" href={p.live}>Live →</Btn>
              <Btn variant="border" href={p.repo}>GitHub</Btn>
            </div>
          </div>

          <div
            className="flex flex-wrap gap-6 md:gap-10 py-5 mb-6"
            style={{ borderTop: "1px solid #e4e2dd", borderBottom: "1px solid #e4e2dd" }}
          >
            {p.stats.map((s) => (
              <div key={s.label}>
                <span
                  className="block"
                  style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: "clamp(20px,4vw,28px)",
                    fontWeight: 700,
                    color: "#111110",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  {s.val}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: 10,
                    color: "#7d7a72",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-[15px] text-[#6b6860] leading-[1.8] mb-5 max-w-[640px]">{p.description}</p>

          <p
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: 10,
              color: "#7d7a72",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Architecture decisions
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {p.arch.map((a) => (
              <span
                key={a}
                className="px-3 py-1 rounded-full text-[11px] tracking-wide"
                style={{
                  fontFamily: "'DM Mono',monospace",
                  background: "#eef2fd",
                  border: "1px solid rgba(26,86,232,0.14)",
                  color: "#1a56e8",
                }}
              >
                {a}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-[11px]"
                style={{
                  fontFamily: "'DM Mono',monospace",
                  background: "#f4f3ef",
                  border: "1px solid #e4e2dd",
                  color: "#6b6860",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [hovered, setHovered] = useState(null);
  const header = useReveal();

  return (
    <section
      id="projects"
      className="py-20 md:py-28"
      style={{ background: "#f4f3ef", fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-[1000px] mx-auto px-6 md:px-16">
        <div ref={header.ref} className={`flex items-baseline justify-between mb-10 md:mb-12 ${header.className}`}>
          <h2
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "clamp(22px, 2.8vw, 30px)",
              fontWeight: 700,
              color: "#111110",
              letterSpacing: "-0.02em",
            }}
          >
            Selected projects
          </h2>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#7d7a72", letterSpacing: "0.08em" }}>
            02 / shipped work
          </span>
        </div>

        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} hovered={hovered} setHovered={setHovered} index={i} />
        ))}
      </div>
    </section>
  );
}
