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

const tools = [
  {
    id: "job-engine",
    name: "Job-Engine",
    badge: "Backend · AI Pipeline",
    description:
      "A 5-stage idempotent pipeline that sources jobs from 8 APIs in parallel, verifies each against live career pages (Greenhouse / Lever / Tavily), and pushes only verified leads to Notion. Swappable LLM provider, cache-on-disk, unit-tested architectural invariants.",
    stats: [
      { val: "5", label: "Stages" },
      { val: "8", label: "Job sources" },
      { val: "0", label: "Duplicate leads" },
      { val: "CI", label: "GitHub Actions" },
    ],
    tags: [
      "Idempotent pipeline",
      "Parallel sourcing",
      "ATS verification",
      "LLM provider abstraction",
      "Zod schemas",
      "Negative caching",
    ],
    repo: "https://github.com/aravindworkzone/Job-Engine",
  },
  {
    id: "mail-analyzer",
    name: "Mail Analyzer",
    badge: "Automation · AI",
    description:
      "Serverless daily Gmail triage — categorizes and summarizes unread mail with an LLM, selectively enriches flagged items with web context, and appends a digest to Notion. Runs on GitHub Actions cron, read-only scope, privacy-sanitized queries.",
    stats: [
      { val: "24h", label: "Scan window" },
      { val: "3", label: "Categories" },
      { val: "0", label: "Servers" },
      { val: "RO", label: "Read-only scope" },
    ],
    tags: [
      "Serverless cron",
      "Gmail OAuth",
      "LLM JSON mode",
      "Selective enrichment",
      "Privacy-first",
      "Append-only writes",
    ],
    repo: "https://github.com/aravindworkzone/Mail-Analizer",
  },
];

function ToolCard({ t, index }) {
  const reveal = useReveal();
  const [hovered, setHovered] = useState(false);
  return (
    <div ref={reveal.ref} className={`${reveal.className} h-full`} style={{ transitionDelay: `${index * 80}ms` }}>
      <div
        className="p-6 md:p-7 h-full flex flex-col cursor-default"
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          boxShadow: hovered ? "var(--shadow-card-hover)" : "var(--shadow-card)",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          transition: "all 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: 22,
              fontWeight: 700,
              color: "var(--ink)",
              letterSpacing: "-0.02em",
            }}
          >
            {t.name}
          </span>
          <span
            className="px-3 py-0.5 rounded-full text-[10px] font-medium tracking-wider"
            style={{
              fontFamily: "'DM Mono',monospace",
              background: "var(--accent-soft)",
              border: "1px solid var(--accent-border)",
              color: "var(--accent)",
            }}
          >
            {t.badge}
          </span>
        </div>

        <p className="text-[14px] text-[color:var(--muted)] leading-[1.7] mb-5">{t.description}</p>

        <div
          className="flex flex-wrap gap-x-6 gap-y-3 py-4 mb-5"
          style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
        >
          {t.stats.map((s) => (
            <div key={s.label}>
              <span
                className="block"
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--ink)",
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
                  color: "var(--muted-2)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {t.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-[11px] tracking-wide"
              style={{
                fontFamily: "'DM Mono',monospace",
                background: "var(--accent-soft)",
                border: "1px solid var(--accent-border)",
                color: "var(--accent)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <Btn variant="border" href={t.repo}>GitHub</Btn>
        </div>
      </div>
    </div>
  );
}

function BrowserBar({ host }) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2.5"
      style={{
        background: "var(--bg-alt)",
        borderBottom: "1px solid var(--border)",
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
          color: "var(--muted)",
          background: "var(--card)",
          border: "1px solid var(--border)",
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
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          boxShadow: hovered === p.id ? "var(--shadow-card-hover)" : "var(--shadow-card)",
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
          style={{ borderBottom: "1px solid var(--border)", background: "#111110" }}
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
                    color: "var(--ink)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.name}
                </span>
                <span
                  className="px-3 py-0.5 rounded-full text-[10px] font-medium tracking-wider"
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    background: "var(--accent-soft)",
                    border: "1px solid var(--accent-border)",
                    color: "var(--accent)",
                  }}
                >
                  {p.badge}
                </span>
                {p.featured && (
                  <span
                    className="px-3 py-0.5 rounded-full text-[10px] font-semibold tracking-wider"
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
                      color: "white",
                      letterSpacing: "0.08em",
                    }}
                  >
                    ★ FEATURED
                  </span>
                )}
              </div>
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: "var(--muted-2)" }}>
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
            style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
          >
            {p.stats.map((s) => (
              <div key={s.label}>
                <span
                  className="block"
                  style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: "clamp(20px,4vw,28px)",
                    fontWeight: 700,
                    color: "var(--ink)",
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
                    color: "var(--muted-2)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-[15px] text-[color:var(--muted)] leading-[1.8] mb-5 max-w-[640px]">{p.description}</p>

          <p
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: 10,
              color: "var(--muted-2)",
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
                  background: "var(--accent-soft)",
                  border: "1px solid var(--accent-border)",
                  color: "var(--accent)",
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
                  background: "var(--bg-alt)",
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
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
  const toolsHeader = useReveal();

  return (
    <section
      id="projects"
      className="py-20 md:py-28"
      style={{ background: "var(--bg-alt)", fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-[1000px] mx-auto px-6 md:px-16">
        <div ref={header.ref} className={`flex items-baseline justify-between mb-10 md:mb-12 ${header.className}`}>
          <h2
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "clamp(22px, 2.8vw, 30px)",
              fontWeight: 700,
              color: "var(--ink)",
              letterSpacing: "-0.02em",
            }}
          >
            Selected projects
          </h2>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "var(--muted-2)", letterSpacing: "0.08em" }}>
            02 / shipped work
          </span>
        </div>

        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} hovered={hovered} setHovered={setHovered} index={i} />
        ))}

        <div ref={toolsHeader.ref} className={`flex items-baseline justify-between mt-16 md:mt-20 mb-10 md:mb-12 ${toolsHeader.className}`}>
          <h2
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "clamp(22px, 2.8vw, 30px)",
              fontWeight: 700,
              color: "var(--ink)",
              letterSpacing: "-0.02em",
            }}
          >
            Automation &amp; AI Pipelines
          </h2>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "var(--muted-2)", letterSpacing: "0.08em" }}>
            03 / backend &amp; tooling
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {tools.map((t, i) => (
            <ToolCard key={t.id} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
