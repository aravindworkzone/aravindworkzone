import { useState } from "react";

export function Btn({ children, onClick, href, variant = "dark" }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const base = {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: "12px 24px", borderRadius: 8,
    fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600,
    cursor: "pointer", textDecoration: "none", border: "none",
    transition: "transform 0.2s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s ease, opacity 0.18s ease",
    transform: clicked ? "scale(0.97)" : hovered ? "translateY(-2px)" : "translateY(0)",
  };

  const styles = {
    dark: { ...base, background: "#111110", color: "#fafaf8", boxShadow: hovered ? "0 6px 20px rgba(0,0,0,0.18)" : "0 1px 3px rgba(0,0,0,0.12)" },
    border: { ...base, background: hovered ? "#f4f3ef" : "transparent", color: "#111110", border: `1.5px solid ${hovered ? "#111110" : "#e4e2dd"}` },
    accent: { ...base, background: "#1a56e8", color: "#fff", opacity: hovered ? 0.93 : 1, boxShadow: hovered ? "0 6px 20px rgba(26,86,232,0.35)" : "0 1px 3px rgba(26,86,232,0.2)" },
  };

  const handleClick = () => { setClicked(true); setTimeout(() => setClicked(false), 260); onClick?.(); };
  const Tag = href ? "a" : "button";

  return (
    <Tag href={href} target={href ? "_blank" : undefined} rel={href ? "noreferrer" : undefined}
      style={styles[variant]} onClick={handleClick}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {children}
    </Tag>
  );
}

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-[62px]"
      style={{ background: "#fafaf8", fontFamily: "'DM Sans', sans-serif" }}>
      <div className="w-full max-w-[1000px] mx-auto px-6 md:px-16 py-16 md:py-10
        flex flex-col md:grid md:gap-20 md:items-center gap-10"
        style={{ gridTemplateColumns: "1fr auto" }}>

        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-8"
            style={{ background: "#edf6f1", border: "1px solid rgba(26,122,74,0.18)", animation: "fadeUp 0.5s ease both" }}>
            <span className="w-[7px] h-[7px] rounded-full bg-[#1a7a4a]" style={{ animation: "pulse 2.2s infinite" }} />
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#1a7a4a", letterSpacing: "0.06em" }}>Available for work</span>
          </div>

          <h1 className="mb-5"
            style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(34px, 5.5vw, 68px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#111110", animation: "fadeUp 0.6s ease 0.1s both" }}>
            Full-Stack Developer<br />
            building{" "}
            <em style={{ fontStyle: "italic", color: "#1a56e8" }}>real products</em>
            <br className="max-sm:hidden" />
            {" "}with the MERN stack.
          </h1>

          <p className="mb-8 max-w-[460px]"
            style={{ fontSize: 16, color: "#6b6860", lineHeight: 1.75, animation: "fadeUp 0.6s ease 0.2s both" }}>
            I don't just write code — I architect features, think in systems, and ship things that work in production.
          </p>

          <div className="flex gap-3 flex-wrap" style={{ animation: "fadeUp 0.6s ease 0.3s both" }}>
            <Btn variant="dark" onClick={() => scrollTo("projects")}>View My Work →</Btn>
            <Btn variant="border" onClick={() => scrollTo("contact")}>Get In Touch</Btn>
          </div>
        </div>

        <div className="rounded-2xl p-6 md:p-7 w-full md:min-w-[240px]"
          style={{ background: "white", border: "1px solid #e4e2dd", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", animation: "fadeUp 0.7s ease 0.35s both" }}>
          {[
            { label: "Role", val: "MERN Stack Dev", color: "#111110" },
            { label: "Stack", val: "React · Node · Mongo", color: "#1a56e8" },
            { label: "Projects Live", val: "1", color: "#111110" },
            { label: "GitLab Commits", val: "85+", color: "#111110" },
            { label: "Status", val: "Open to work", color: "#1a7a4a" },
          ].map((row, i, arr) => (
            <div key={row.label} className="flex justify-between items-center py-3"
              style={{ borderBottom: i < arr.length - 1 ? "1px solid #e4e2dd" : "none" }}>
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "#b8b5ae", letterSpacing: "0.08em", textTransform: "uppercase" }}>{row.label}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: row.color, textAlign: "right" }}>{row.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
