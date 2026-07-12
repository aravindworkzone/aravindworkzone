import useReveal from "../hooks/useReveal";

const company = {
  name: "AV7SCM",
  location: "Tiruppur, India",
  summary: "18 months · 3 roles",
};

const roles = [
  {
    title: "Full-Stack Developer",
    period: "Jan 2026 – Present",
    current: true,
    points: [
      "Maintain and ship notable features across the company's ERP and “The Process”, the production system now running day-to-day operations.",
      "Own modules end-to-end — PostgreSQL schema, Node REST APIs, and the React interfaces internal teams rely on daily.",
    ],
  },
  {
    title: "Junior Full-Stack Developer",
    period: "Jul 2025 – Dec 2025",
    current: false,
    points: [
      "Built features across the React + Node + PostgreSQL stack, moving from guided tasks to owning full modules independently.",
      "Picked up MongoDB and TypeScript, and began building “The Process” from the ground up.",
    ],
  },
  {
    title: "Trainee",
    period: "Jan 2025 – Jun 2025",
    current: false,
    points: [
      "Joined as an ERP + React developer, shipping supervised UI features on the existing system.",
      "Skilled up into backend — learning Node.js and PostgreSQL to move toward full-stack.",
    ],
  },
];

const tech = ["React", "Node.js", "PostgreSQL", "MongoDB", "Oracle", "TypeScript"];

function RoleEntry({ r, index, isLast }) {
  const reveal = useReveal();
  return (
    <div
      ref={reveal.ref}
      className={`relative pl-9 md:pl-12 ${isLast ? "pb-1" : "pb-9 md:pb-10"} ${reveal.className}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Timeline dot */}
      <span
        aria-hidden
        className="absolute left-0 top-[6px] w-[11px] h-[11px] rounded-full"
        style={{
          background: r.current ? "var(--accent)" : "var(--bg)",
          border: r.current ? "none" : "2px solid #b8b5ae",
          boxShadow: r.current ? "0 0 0 4px var(--accent-soft)" : "none",
          animation: r.current ? "pulse 2.2s infinite" : "none",
        }}
      />

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-4">
        <div className="flex flex-wrap items-center gap-3">
          <h4
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "clamp(18px, 2.2vw, 21px)",
              fontWeight: 700,
              color: "var(--ink)",
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
            }}
          >
            {r.title}
          </h4>
          {r.current && (
            <span
              className="px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wider"
              style={{
                fontFamily: "'DM Mono',monospace",
                background: "var(--accent-soft)",
                border: "1px solid var(--accent-border)",
                color: "var(--accent)",
                letterSpacing: "0.08em",
              }}
            >
              CURRENT
            </span>
          )}
        </div>
        <span
          className="flex-shrink-0"
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: 11,
            color: "var(--muted-3)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {r.period}
        </span>
      </div>

      {r.points.map((point) => (
        <div key={point} className="flex gap-3 mb-2.5">
          <span
            aria-hidden
            className="flex-shrink-0 mt-[11px] w-[14px] h-[1.5px] rounded-full"
            style={{ background: "var(--accent)" }}
          />
          <p className="text-[15px] text-[color:var(--muted)] leading-[1.75]">{point}</p>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  const header = useReveal();
  const companyReveal = useReveal();
  const pillsReveal = useReveal();
  return (
    <section
      id="experience"
      className="py-20 md:py-24"
      style={{ background: "var(--bg)", fontFamily: "'DM Sans', sans-serif" }}
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
            Experience
          </h2>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "var(--muted-2)", letterSpacing: "0.08em" }}>
            02 / where I work
          </span>
        </div>

        {/* Company header */}
        <div
          ref={companyReveal.ref}
          className={`flex flex-wrap items-baseline justify-between gap-2 pb-5 mb-8 md:mb-10 ${companyReveal.className}`}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <h3
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "clamp(19px, 2.4vw, 24px)",
              fontWeight: 700,
              color: "var(--ink)",
              letterSpacing: "-0.02em",
            }}
          >
            {company.name}{" "}
            <span style={{ color: "var(--muted)", fontWeight: 600, fontSize: "0.78em" }}>· {company.location}</span>
          </h3>
          <span
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: 11,
              color: "var(--muted-3)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {company.summary}
          </span>
        </div>

        {/* Timeline */}
        <div className="relative">
          <span
            aria-hidden
            className="absolute left-[5px] top-[6px] bottom-1 w-px"
            style={{ background: "var(--border)" }}
          />
          {roles.map((r, i) => (
            <RoleEntry key={r.title} r={r} index={i} isLast={i === roles.length - 1} />
          ))}
        </div>

        {/* Tech pills */}
        <div
          ref={pillsReveal.ref}
          className={`flex flex-wrap gap-2.5 mt-10 md:mt-12 pl-9 md:pl-12 ${pillsReveal.className}`}
        >
          {tech.map((t) => (
            <span
              key={t}
              className="px-4 py-2 rounded-full text-[13px] font-medium cursor-default"
              style={{
                background: "var(--card)",
                border: "1.5px solid var(--border)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                color: "var(--ink)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
