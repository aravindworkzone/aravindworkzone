import useReveal from "../hooks/useReveal";

const facts = [
  {
    num: "01",
    text: (<>Built and shipped <span className="text-[#1a56e8]">two production SaaS apps solo</span> — from database schema to deployed URL, no team, no shortcuts.</>),
  },
  {
    num: "02",
    text: (<>Chose <span className="text-[#1a56e8]">security-first architecture by default</span> — refresh token rotation, HMAC-verified webhooks, atomic writes — before anyone asked me to.</>),
  },
  {
    num: "03",
    text: (<>Write about <span className="text-[#1a56e8]">the engineering decisions behind my work</span>, not just the finished product — because I want teams to see how I think, not just what I built.</>),
  },
];

export default function About() {
  const reveal = useReveal();
  return (
    <section id="about" className="pt-12 pb-20 md:pt-14 md:pb-28" style={{ background: "#fafaf8", fontFamily: "'DM Sans', sans-serif" }}>
      <div className="max-w-[1000px] mx-auto px-6 md:px-16" ref={reveal.ref}>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start ${reveal.className}`}>

          <div>
            <span className="block mb-6"
              style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#7d7a72", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              About
            </span>
            <h2 className="mb-7"
              style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, lineHeight: 1.25, letterSpacing: "-0.02em", color: "#111110" }}>
              Self-taught.<br />
              <em style={{ fontStyle: "italic" }} className="gradient-text">Shipped in production.</em>
              <br />Looking to go further.
            </h2>
            <p className="text-[15px] text-[#6b6860] leading-[1.85] mb-4">
              I'm a Full-Stack MERN Developer from Tiruppur, India. I taught myself this craft by building real things end-to-end — not by finishing courses. That means every line on this site is something I designed, broke, debugged, and shipped myself.
            </p>
            <p className="text-[15px] text-[#6b6860] leading-[1.85]">
              Right now I maintain a company's internal employee portal, and outside of work I build production-grade systems on my own: payment integrity, secure auth, and AI-native tooling. I'm looking for a team that builds real products — where I can bring that same ownership.
            </p>
          </div>

          <div>
            {facts.map((f, i) => (
              <div key={f.num} className="flex gap-5 py-5"
                style={{ borderTop: i === 0 ? "1px solid #e4e2dd" : "none", borderBottom: "1px solid #e4e2dd" }}>
                <span className="flex-shrink-0 mt-0.5"
                  style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#7d7a72", letterSpacing: "0.06em" }}>
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
