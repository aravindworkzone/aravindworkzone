export default function Footer() {
  return (
    <footer
      className="flex flex-col sm:flex-row justify-between items-center gap-3 px-6 md:px-16 py-6 text-center sm:text-left"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", fontFamily: "'DM Sans', sans-serif" }}
    >
      <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "var(--muted-2)" }}>© 2026 Aravind A</span>

      <div className="flex items-center gap-2" style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "var(--green)" }}>
        <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--green)]" style={{ animation: "pulse 2s infinite" }} />
        Open to work
      </div>

      <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "var(--muted-2)" }}>MERN Stack Developer</span>
    </footer>
  );
}
