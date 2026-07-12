import useReveal from "../hooks/useReveal";

const roles = [
  {
    role: "MERN Stack Developer",
    company: "AV7SCM",
    period: "Jan 2025 – Present",
    location: "Tiruppur, India",
    points: [
      "Build and ship modules for “The Process”, a production ERP system (React · Node.js · PostgreSQL) that runs the company's day-to-day operations.",
      "Work end-to-end — designing PostgreSQL schemas, building Node REST APIs, and wiring the React interfaces internal teams use daily.",
      "Extend and maintain a live legacy system without breaking existing workflows — real production constraints, not greenfield rewrites.",
      "Work across Oracle, PostgreSQL, and TypeScript, adapting to whatever each module requires.",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Oracle", "TypeScript"],
  },
];

function RoleEntry({ r, index }) {
  const reveal = useReveal();
  return (
    <div
      ref={reveal.ref}
      className={`relative pl-9 md:pl-12 pb-2 ${reveal.className}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Timeline dot */}
      <span
        aria-hidden
        className="absolute left-0 top-[7px] w-[11px] h-[11px] rounded-full"
        style={{ background: "#1a56e8", boxShadow: "0 0 0 4px #eef2fd" }}
      />

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-1.5">
        <h3
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: "clamp(19px, 2.4vw, 24px)",
            fontWeight: 700,
            color: "#111110",
            letterSpacing: "-0.02em",
            lineHeight: 1.3,
          }}
        >
          {r.role} <span style={{ color: "#1a56e8" }}>· {r.company}</span>
        </h3>
        <span
          className="flex-shrink-0"
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: 11,
            color: "#8a877f",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {r.period}
        </span>
      </div>

      <span
        className="block mb-5"
        style={{
          fontFamily: "'DM Mono',monospace",
          fontSize: 10.5,
          color: "#8a877f",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {r.location}
      </span>

      <div className="mb-6">
        {r.points.map((point) => (
          <div key={point} className="flex gap-3 mb-3">
            <span
              aria-hidden
              className="flex-shrink-0 mt-[11px] w-[14px] h-[1.5px] rounded-full"
              style={{ background: "#1a56e8" }}
            />
            <p className="text-[15px] text-[#6b6860] leading-[1.75]">{point}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2.5">
        {r.tech.map((t) => (
          <span
            key={t}
            className="px-4 py-2 rounded-full text-[13px] font-medium cursor-default"
            style={{
              background: "white",
              border: "1.5px solid #e4e2dd",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              color: "#111110",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const header = useReveal();
  return (
    <section
      id="experience"
      className="py-20 md:py-24"
      style={{ background: "#fafaf8", fontFamily: "'DM Sans', sans-serif" }}
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
            Experience
          </h2>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#7d7a72", letterSpacing: "0.08em" }}>
            02 / where I work
          </span>
        </div>

        <div className="relative">
          {/* Timeline rail */}
          <span
            aria-hidden
            className="absolute left-[5px] top-[7px] bottom-0 w-px"
            style={{ background: "#e4e2dd" }}
          />
          {roles.map((r, i) => (
            <RoleEntry key={`${r.company}-${r.role}`} r={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
