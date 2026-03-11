import { useState } from "react";
import { Btn } from "./Hero";

const arch = ["JWT + HTTP-only cookies", "Refresh token rotation", "Reuse detection", "RTK Query caching", "AI Integration", "Soft delete", "Session Limitation"];
const techTodo = ["React", "Node.js", "MongoDB", "Express", "Redux(RTK query, Slice)", "Tailwind"];
const techOwta = ["React", "Node.js", "MongoDB", "Express", "Redux", "Tailwind"];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-28" style={{ background: "#f4f3ef", fontFamily: "'DM Sans', sans-serif" }}>
      <div className="max-w-[1000px] mx-auto px-6 md:px-16">

        <div className="flex items-baseline justify-between mb-10 md:mb-12">
          <h2 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(22px, 2.8vw, 30px)", fontWeight: 700, color: "#111110", letterSpacing: "-0.02em" }}>
            Projects
          </h2>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#b8b5ae", letterSpacing: "0.08em" }}>02 / selected work</span>
        </div>

        <div
          className="rounded-2xl p-7 md:p-11 mb-4 cursor-default"
          style={{
            background: "white", border: "1px solid #e4e2dd",
            boxShadow: hovered === "todo" ? "0 12px 40px rgba(0,0,0,0.1)" : "0 2px 12px rgba(0,0,0,0.04)",
            transform: hovered === "todo" ? "translateY(-3px)" : "translateY(0)",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={() => setHovered("todo")} onMouseLeave={() => setHovered(null)}
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-5 mb-7">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-1.5">
                <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 700, color: "#111110", letterSpacing: "-0.02em" }}>
                  Todo Planner
                </span>
                <span className="px-3 py-0.5 rounded-full text-[10px] font-medium tracking-wider"
                  style={{ fontFamily: "'DM Mono',monospace", background: "#eef2fd", border: "1px solid rgba(26,86,232,0.2)", color: "#1a56e8" }}>
                  SaaS · Live
                </span>
              </div>
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: "#b8b5ae" }}>
                Productivity platform · Full-stack · AI-integrated
              </span>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              <Btn variant="accent" href="https://workzone-todo.vercel.app">Live →</Btn>
              <Btn variant="border" href="https://gitlab.com/aravind.workzone/todo.git">GitLab</Btn>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-10 py-5 mb-6"
            style={{ borderTop: "1px solid #e4e2dd", borderBottom: "1px solid #e4e2dd" }}>
            {[
              { val: "67", label: "Commits" },
              { val: "3", label: "Task types" },
              { val: "7-day", label: "Productivity" },
              { val: "AI", label: "Integrated" },
            ].map((s) => (
              <div key={s.label}>
                <span className="block" style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(20px,4vw,28px)", fontWeight: 700, color: "#111110", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                  {s.val}
                </span>
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "#b8b5ae", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-[15px] text-[#6b6860] leading-[1.8] mb-5 max-w-[580px]">
            A productivity SaaS that converts yearly goals into structured daily routines using AI. Built with production-grade authentication — HTTP-only cookies, short-lived access tokens, refresh token rotation, and replay attack prevention.
          </p>

          <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "#b8b5ae", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
            Architecture decisions
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {arch.map((a) => (
              <span key={a} className="px-3 py-1 rounded-full text-[11px] tracking-wide"
                style={{ fontFamily: "'DM Mono',monospace", background: "#eef2fd", border: "1px solid rgba(26,86,232,0.14)", color: "#1a56e8" }}>
                {a}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {techTodo.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-[11px]"
                style={{ fontFamily: "'DM Mono',monospace", background: "#f4f3ef", border: "1px solid #e4e2dd", color: "#6b6860" }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div
          className="rounded-2xl px-7 md:px-10 py-7 md:py-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 cursor-default"
          style={{
            background: "white", border: "1px solid #e4e2dd",
            boxShadow: hovered === "owta" ? "0 8px 28px rgba(0,0,0,0.08)" : "0 1px 4px rgba(0,0,0,0.03)",
            transform: hovered === "owta" ? "translateY(-2px)" : "translateY(0)",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={() => setHovered("owta")} onMouseLeave={() => setHovered(null)}
        >
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-1.5">
              <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 22, fontWeight: 700, color: "#111110", letterSpacing: "-0.02em" }}>OWTA</span>
              <span className="px-3 py-0.5 rounded-full text-[10px] font-medium tracking-wider"
                style={{ fontFamily: "'DM Mono',monospace", background: "#edf6f1", border: "1px solid rgba(26,122,74,0.18)", color: "#1a7a4a" }}>
                In Development
              </span>
            </div>
            <p className="text-[14px] text-[#6b6860] leading-[1.7] max-w-[500px] mb-3.5">
              Full-stack e-commerce platform — product management, cart system, order flow, and admin panel.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {techOwta.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-[11px]"
                  style={{ fontFamily: "'DM Mono',monospace", background: "#f4f3ef", border: "1px solid #e4e2dd", color: "#6b6860" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="px-4 py-2 rounded-md text-[11px] tracking-wider self-start sm:self-auto"
            style={{ fontFamily: "'DM Mono',monospace", background: "#f4f3ef", border: "1px solid #e4e2dd", color: "#b8b5ae" }}>
            Coming Soon
          </div>
        </div>
      </div>
    </section>
  );
}
