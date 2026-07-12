import { useState } from "react";
import useResumeMeta from "../hooks/useResumeMeta";

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
    dark: { ...base, background: "var(--ink)", color: "var(--bg)", boxShadow: hovered ? "0 6px 20px rgba(0,0,0,0.18)" : "0 1px 3px rgba(0,0,0,0.12)" },
    border: { ...base, background: hovered ? "var(--bg-alt)" : "transparent", color: "var(--ink)", border: `1.5px solid ${hovered ? "var(--ink)" : "var(--border)"}` },
    accent: { ...base, background: "var(--accent)", color: "#fff", opacity: hovered ? 0.93 : 1, boxShadow: hovered ? "0 6px 20px rgba(26,86,232,0.35)" : "0 1px 3px rgba(26,86,232,0.2)" },
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

function InfoDot({ text }) {
  const [open, setOpen] = useState(false);
  return (
    <span className="relative inline-flex">
      <button
        type="button"
        aria-label={text}
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="flex items-center justify-center rounded-full cursor-pointer"
        style={{
          width: 18,
          height: 18,
          padding: 0,
          background: "var(--accent-soft)",
          border: "1px solid var(--accent-border)",
          color: "var(--accent)",
          fontFamily: "'DM Mono',monospace",
          fontSize: 10.5,
          lineHeight: 1,
        }}
      >
        i
      </button>
      {open && (
        <span
          className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-md pointer-events-none"
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: 10.5,
            letterSpacing: "0.04em",
            background: "var(--ink)",
            color: "var(--bg)",
            boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
            zIndex: 20,
          }}
        >
          {text}
        </span>
      )}
    </span>
  );
}

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0, resting: true });
  const resume = useResumeMeta();
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-[62px] relative overflow-hidden"
      style={{ background: "var(--bg)", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Subtle background mesh */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(600px 400px at 85% 20%, rgba(26,86,232,0.07), transparent 60%), radial-gradient(500px 300px at 10% 80%, rgba(26,122,74,0.06), transparent 60%)",
        }}
      />

      <div
        className="relative w-full max-w-[1000px] mx-auto px-6 md:px-16 py-16 md:py-10
          flex flex-col md:grid md:gap-20 md:items-center gap-10"
        style={{ gridTemplateColumns: "1fr auto" }}
      >
        <div>
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-8"
            style={{ background: "var(--green-soft)", border: "1px solid var(--green-border)", animation: "fadeUp 0.5s ease both" }}
          >
            <span className="w-[7px] h-[7px] rounded-full bg-[color:var(--green)]" style={{ animation: "pulse 2.2s infinite" }} />
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "var(--green)", letterSpacing: "0.06em" }}>
              Available · Replies within 24 hrs
            </span>
          </div>

          <h1
            className="mb-5"
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "clamp(36px, 5.8vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "var(--ink)",
              animation: "fadeUp 0.6s ease 0.1s both",
            }}
          >
            Full-Stack<br />
            <em style={{ fontStyle: "italic" }} className="gradient-text">MERN</em> Developer<br />
            <span style={{ color: "var(--muted)", fontWeight: 600, fontSize: "0.62em" }}>
              who ships to production.
            </span>
          </h1>

          <p
            className="mb-8 max-w-[480px]"
            style={{ fontSize: 16.5, color: "var(--muted)", lineHeight: 1.75, animation: "fadeUp 0.6s ease 0.2s both" }}
          >
            I build production-grade web apps —{" "}
            <span style={{ color: "var(--ink)", fontWeight: 600 }}>secure auth</span>,{" "}
            <span style={{ color: "var(--ink)", fontWeight: 600 }}>payment integrity</span>, and{" "}
            <span style={{ color: "var(--ink)", fontWeight: 600 }}>AI-native tooling</span> that hold up under real users, not just in a demo.
          </p>

          <div className="flex gap-3 flex-wrap items-start" style={{ animation: "fadeUp 0.6s ease 0.3s both" }}>
            <Btn variant="dark" onClick={() => scrollTo("projects")}>View Projects →</Btn>
            <Btn variant="border" onClick={() => scrollTo("contact")}>Contact Me</Btn>
          </div>
          <div className="flex gap-3 flex-wrap items-start mt-4" style={{ animation: "fadeUp 0.6s ease 0.3s both" }}>
            <div className="flex items-center gap-2">
              <Btn variant="border" href={resume.downloadUrl}>Resume ↓</Btn>
              {resume.updated && (
                <InfoDot text={`Resume last Updated on ${resume.updated} · via Google Drive`} />
              )}
            </div>
          </div>


          {/* Trust strip */}
          <div
            className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8"
            style={{ animation: "fadeUp 0.6s ease 0.4s both" }}
          >
            {[
              { label: "Live apps", val: "2" },
              { label: "Auth", val: "JWT + RTR" },
              { label: "Stack", val: "MERN + TS" },
              { label: "Notice", val: "30 days" },
            ].map((t) => (
              <div key={t.label} className="flex items-baseline gap-2">
                <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 18, fontWeight: 700, color: "var(--ink)" }}>
                  {t.val}
                </span>
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "var(--muted-2)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Avatar / ID card */}
        <div
          className="w-full md:min-w-[260px]"
          style={{ animation: "fadeUp 0.7s ease 0.35s both", perspective: 700 }}
        >
        <div
          className="rounded-2xl p-6 md:p-7 w-full"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-card)",
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: tilt.resting ? "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)" : "transform 0.12s ease-out",
            willChange: "transform",
          }}
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            setTilt({ x: -py * 7, y: px * 7, resting: false });
          }}
          onMouseLeave={() => setTilt({ x: 0, y: 0, resting: true })}
        >
          <div className="flex items-center gap-3 mb-5 pb-5" style={{ borderBottom: "1px solid var(--border)" }}>
            <img
              src="/avatar.png"
              alt="Aravind A"
              className="rounded-full flex-shrink-0"
              style={{
                width: 64,
                height: 64,
                objectFit: "cover",
                border: "2px solid var(--card)",
                boxShadow: "0 4px 14px rgba(26,86,232,0.35), 0 0 0 2px rgba(26,86,232,0.25)",
              }}
            />
            <div className="min-w-0">
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)", lineHeight: 1.2 }}>Aravind A</div>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10.5, color: "var(--muted)", letterSpacing: "0.04em" }}>
                Tiruppur, India · MERN
              </div>
            </div>
          </div>

          {[
            { label: "Role", val: "Full-Stack Dev", color: "var(--ink)" },
            { label: "Shipped", val: "2 products, solo", color: "var(--ink)" },
            { label: "Response", val: "< 24 hours", color: "var(--ink)" },
            { label: "Status", val: "Open to work", color: "var(--green)" },
          ].map((row, i, arr) => (
            <div
              key={row.label}
              className="flex justify-between items-center py-3"
              style={{ borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none" }}
            >
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "var(--muted-2)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {row.label}
              </span>
              <span style={{ fontSize: 13, fontWeight: 600, color: row.color, textAlign: "right" }}>{row.val}</span>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
