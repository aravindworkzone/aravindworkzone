import useReveal from "../hooks/useReveal";

const facts = [
  {
    num: "01",
    text: (<>Built a <span className="text-[#1a56e8]">SaaS with JWT refresh token rotation</span> and reuse detection — not something you find in tutorials.</>),
  },
  {
    num: "02",
    text: (<>Designed a <span className="text-[#1a56e8]">pooled wallet system with 3-tier RBAC</span> and atomic balance updates — financial integrity at every layer.</>),
  },
  {
    num: "03",
    text: (<>Everything I build is <span className="text-[#1a56e8]">deployed and publicly accessible</span> — not sitting in a local environment.</>),
  },
];

export default function About() {
  const reveal = useReveal();
  return (
    <section id="about" className="py-20 md:py-28" style={{ background: "#fafaf8", fontFamily: "'DM Sans', sans-serif" }}>
      <div className="max-w-[1000px] mx-auto px-6 md:px-16" ref={reveal.ref}>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start ${reveal.className}`}>

          <div>
            <span className="block mb-6"
              style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#b8b5ae", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              About
            </span>
            <h2 className="mb-7"
              style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, lineHeight: 1.25, letterSpacing: "-0.02em", color: "#111110" }}>
              Self-taught.<br />
              <em style={{ fontStyle: "italic" }} className="gradient-text">Shipped in production.</em>
              <br />Looking to go further.
            </h2>
            <p className="text-[15px] text-[#6b6860] leading-[1.85] mb-4">
              I'm a Full-Stack MERN Developer based in Tiruppur, India — self-taught and focused on building real, deployed applications rather than tutorial projects. I specialize in React, Node.js, MongoDB, and TypeScript — covering the full stack from JWT auth systems with refresh token rotation to AI-integrated backends and role-based access control.
            </p>
            <p className="text-[15px] text-[#6b6860] leading-[1.85]">
              Currently working as a MERN stack developer on a company's internal employee portal, and open to full-stack developer roles in product-focused companies.
            </p>
          </div>

          <div>
            {facts.map((f, i) => (
              <div key={f.num} className="flex gap-5 py-5"
                style={{ borderTop: i === 0 ? "1px solid #e4e2dd" : "none", borderBottom: "1px solid #e4e2dd" }}>
                <span className="flex-shrink-0 mt-0.5"
                  style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#b8b5ae", letterSpacing: "0.06em" }}>
                  {f.num}
                </span>
                <p className="text-[15px] font-medium text-[#111110] leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
