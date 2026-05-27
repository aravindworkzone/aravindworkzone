import { useState } from "react";
import useReveal from "../hooks/useReveal";

const groups = [
  {
    label: "Frontend",
    items: [
      { icon: "⚛️", name: "React" },
      { icon: "⚡", name: "Vite" },
      { icon: "🎨", name: "Tailwind CSS" },
      { icon: "🔄", name: "Redux Toolkit" },
      { icon: "📡", name: "RTK Query" },
      { icon: "🔷", name: "TypeScript" },
    ],
  },
  {
    label: "Backend",
    items: [
      { icon: "🟢", name: "Node.js" },
      { icon: "⬛", name: "Express" },
      { icon: "🔌", name: "REST API" },
      { icon: "🔐", name: "JWT Auth" },
      { icon: "♻️", name: "Refresh Token Rotation" },
    ],
  },
  {
    label: "Database",
    items: [
      { icon: "🍃", name: "MongoDB" },
      { icon: "🗄️", name: "Mongoose" },
    ],
  },
  {
    label: "Tools & Deployment",
    items: [
      { icon: "📦", name: "Git" },
      { icon: "🐙", name: "GitHub" },
      { icon: "▲", name: "Vercel" },
      { icon: "🚀", name: "Render" },
      { icon: "✉️", name: "EmailJS" },
    ],
  },
];

function Pill({ icon, name }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-full cursor-default"
      style={{
        background: hovered ? "#eef2fd" : "white",
        border: `1.5px solid ${hovered ? "#1a56e8" : "#e4e2dd"}`,
        boxShadow: hovered ? "0 4px 12px rgba(26,86,232,0.1)" : "0 1px 3px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    >
      <span className="text-[15px]">{icon}</span>
      <span className="text-[13px] font-medium" style={{ color: hovered ? "#1a56e8" : "#111110" }}>{name}</span>
    </div>
  );
}

export default function Stack() {
  const reveal = useReveal();
  return (
    <section id="skills" className="py-20 md:py-28" style={{ background: "#fafaf8", fontFamily: "'DM Sans', sans-serif" }}>
      <div className="max-w-[1000px] mx-auto px-6 md:px-16" ref={reveal.ref}>

        <div className={`flex items-baseline justify-between mb-10 md:mb-12 ${reveal.className}`}>
          <h2 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(22px, 2.8vw, 30px)", fontWeight: 700, color: "#111110", letterSpacing: "-0.02em" }}>
            Stack
          </h2>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#b8b5ae", letterSpacing: "0.08em" }}>04 / tools I use</span>
        </div>

        {groups.map((g) => (
          <div key={g.label} className="mb-8 md:mb-10">
            <span className="block mb-3.5"
              style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "#b8b5ae", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              {g.label}
            </span>
            <div className="flex flex-wrap gap-2.5">
              {g.items.map((item) => <Pill key={item.name} {...item} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
