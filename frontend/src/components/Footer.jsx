export default function Footer() {
  return (
    <footer
      className="flex flex-col sm:flex-row justify-between items-center gap-3 px-6 md:px-16 py-6 text-center sm:text-left"
      style={{ background: "#fafaf8", borderTop: "1px solid #e4e2dd", fontFamily: "'DM Sans', sans-serif" }}
    >
      <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#7d7a72" }}>© 2026 Aravind A</span>

      <div className="flex items-center gap-2" style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#1a7a4a" }}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#1a7a4a]" style={{ animation: "pulse 2s infinite" }} />
        Open to work
      </div>

      <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#7d7a72" }}>MERN Stack Developer</span>
    </footer>
  );
}
