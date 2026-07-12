import { useState } from "react";
import { Btn } from "./Hero";
import ContactModal from "./ContactModal";
import useReveal from "../hooks/useReveal";

const links = [
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 6L22 7" />
      </svg>
    ),
    label: "Email",
    val: "aravind.workzone@gmail.com",
    href: "mailto:aravind.workzone@gmail.com",
    copyable: true,
  },
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    label: "GitHub",
    val: "github.com/aravindworkzone",
    href: "https://github.com/aravindworkzone",
  },
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    val: "linkedin.com/in/aravind-a-dev",
    href: "https://linkedin.com/in/aravind-a-dev",
  },
];

function ContactRow({ icon, label, val, href, copyable }) {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard?.writeText(val).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-4 px-5 py-4 rounded-xl no-underline"
      style={{
        background: "var(--card)",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        boxShadow: hovered ? "var(--shadow-accent)" : "var(--shadow-card)",
        transform: hovered ? "translateX(5px)" : "translateX(0)",
        transition: "all 0.22s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="flex items-center justify-center rounded-lg flex-shrink-0"
        style={{
          width: 38,
          height: 38,
          background: hovered ? "var(--accent)" : "var(--accent-soft)",
          color: hovered ? "var(--bg)" : "var(--accent)",
          transition: "all 0.22s ease",
        }}
      >
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <div
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: 10,
            color: "var(--muted-2)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 3,
          }}
        >
          {label}
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)" }} className="truncate">
          {val}
        </div>
      </div>
      {copyable && (
        <button
          onClick={copy}
          aria-label={copied ? "Copied" : "Copy email address"}
          title={copied ? "Copied!" : "Copy email"}
          className="flex items-center justify-center rounded-md border-none cursor-pointer flex-shrink-0"
          style={{
            width: 30,
            height: 30,
            background: copied ? "var(--green-soft)" : "var(--bg-alt)",
            color: copied ? "var(--green)" : "var(--muted)",
            transition: "all 0.2s ease",
          }}
        >
          {copied ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l5 5L20 7" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="12" height="12" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
      )}
      <span
        style={{
          color: hovered ? "var(--accent)" : "var(--muted-2)",
          fontSize: 18,
          transition: "all 0.22s ease",
          transform: hovered ? "translateX(2px)" : "translateX(0)",
        }}
      >
        →
      </span>
    </a>
  );
}

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);
  const reveal = useReveal();

  return (
    <>
      <section
        id="contact"
        className="pt-12 pb-20 md:pt-16 md:pb-28 relative overflow-hidden"
        style={{ background: "var(--bg-alt)", fontFamily: "'DM Sans', sans-serif" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(500px 300px at 80% 30%, rgba(26,86,232,0.06), transparent 60%)",
          }}
        />

        <div className="relative max-w-[1000px] mx-auto px-6 md:px-16" ref={reveal.ref}>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start ${reveal.className}`}>
            {/* Left */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6"
                style={{ background: "var(--green-soft)", border: "1px solid var(--green-border)" }}
              >
                <span className="w-[7px] h-[7px] rounded-full bg-[color:var(--green)]" style={{ animation: "pulse 2.2s infinite" }} />
                <span
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: 11,
                    color: "var(--green)",
                    letterSpacing: "0.06em",
                  }}
                >
                  Hiring? I reply within 24 hours.
                </span>
              </div>

              <h2
                className="mb-5"
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  fontSize: "clamp(30px, 4.2vw, 50px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  color: "var(--ink)",
                }}
              >
                Let's <em style={{ fontStyle: "italic" }} className="gradient-text">work</em><br />
                together.
              </h2>
              <p className="text-[15.5px] text-[color:var(--muted)] leading-[1.8] mb-6 max-w-[400px]">
                Open to full-stack developer roles in product-focused companies. Send a message — I'll respond fast.
              </p>

              <div className="flex flex-col gap-2.5 mb-7 max-w-[320px]">
                {[
                  { k: "Response", v: "< 24 hours" },
                  { k: "Notice period", v: "30 days" },
                  { k: "Current Location", v: "Tiruppur, India" },
                ].map((row, i, arr) => (
                  <div
                    key={row.k}
                    className="flex justify-between items-center pb-2"
                    style={{ borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none" }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Mono',monospace",
                        fontSize: 10,
                        color: "var(--muted-2)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {row.k}
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)" }}>{row.v}</span>
                  </div>
                ))}
              </div>

              <Btn variant="dark" onClick={() => setModalOpen(true)}>Send a Message →</Btn>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-2.5 mt-4 md:mt-0">
              <span
                className="block mb-1"
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: 10,
                  color: "var(--muted-2)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Reach me directly
              </span>
              {links.map((l) => (
                <ContactRow key={l.label} {...l} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
