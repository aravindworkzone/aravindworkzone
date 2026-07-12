import { useState, useEffect } from "react";
import useResumeMeta from "../hooks/useResumeMeta";
import useTheme from "../hooks/useTheme";

const links = ["About", "Experience", "Projects", "Stack"];

function NavLink({ label, isActive, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative text-[13px] font-medium bg-transparent border-none cursor-pointer pb-0.5 transition-colors duration-200"
      style={{ color: isActive || hovered ? "var(--ink)" : "var(--muted)" }}
    >
      {label}
      <span
        aria-hidden
        className="absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full"
        style={{
          background: "var(--accent)",
          opacity: isActive ? 1 : hovered ? 0.35 : 0,
          transform: isActive || hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease",
        }}
      />
    </button>
  );
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      className="flex items-center justify-center w-9 h-9 rounded-md bg-transparent border-none cursor-pointer hover:bg-[color:var(--bg-alt)] transition-colors duration-200"
      style={{ color: "var(--muted)" }}
    >
      {dark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const resume = useResumeMeta();

  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "contact"];
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 90) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-[62px]"
        style={{ background: "var(--nav-bg)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)", fontFamily: "'DM Sans', sans-serif" }}
      >
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2.5 bg-transparent border-none cursor-pointer">
          <div className="px-2.5 py-1.5 text-[13px] font-semibold text-[color:var(--bg)] flex items-center justify-center rounded bg-[color:var(--accent)]">
            A
          </div>
          <span style={{ fontFamily: "'DM Mono',monospace" }} className="text-[13px] font-medium text-[color:var(--ink)]">Aravind</span>
        </button>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:flex items-center gap-9 md:mr-2">
            {links.map((l) => (
              <NavLink
                key={l}
                label={l}
                isActive={active === l.toLowerCase() || (l === "Stack" && active === "skills")}
                onClick={() => scrollTo(l === "Stack" ? "skills" : l)}
              />
            ))}
            <a
              href={resume.downloadUrl}
              target="_blank"
              rel="noreferrer"
              title={resume.updated ? `Updated ${resume.updated}` : "Resume"}
              className="text-[13px] font-semibold px-5 py-2 rounded-md cursor-pointer no-underline hover:bg-[color:var(--bg-alt)] transition-colors"
              style={{ color: "var(--ink)", border: "1.5px solid var(--border)" }}
            >
              Resume ↓
            </a>
          </div>

          <ThemeToggle />

          <button onClick={() => scrollTo("contact")}
            className="hidden md:block text-[13px] font-semibold px-5 py-2 rounded-md bg-[color:var(--ink)] text-[color:var(--bg)] border-none cursor-pointer hover:opacity-80 transition-opacity">
            Hire Me
          </button>

          <button className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="block w-5 h-[1.5px] bg-[color:var(--ink)] transition-all duration-200"
              style={{ transform: menuOpen ? "rotate(45deg) translateY(6.5px)" : "none" }} />
            <span className="block w-5 h-[1.5px] bg-[color:var(--ink)] transition-all duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-5 h-[1.5px] bg-[color:var(--ink)] transition-all duration-200"
              style={{ transform: menuOpen ? "rotate(-45deg) translateY(-6.5px)" : "none" }} />
          </button>
        </div>
      </nav>

      <div
        className="fixed top-[62px] left-0 right-0 z-40 md:hidden flex flex-col px-6 py-5 gap-1 overflow-hidden transition-all duration-300"
        style={{
          background: "var(--bg)", borderBottom: menuOpen ? "1px solid var(--border)" : "none",
          maxHeight: menuOpen ? "400px" : "0px", opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {links.map((l) => (
          <button key={l} onClick={() => scrollTo(l === "Stack" ? "skills" : l)}
            className="text-[15px] font-medium py-3 text-left bg-transparent border-none cursor-pointer"
            style={{ color: "var(--muted)", borderBottom: "1px solid var(--border)" }}>
            {l}
          </button>
        ))}
        <a
          href={resume.downloadUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() => setMenuOpen(false)}
          className="mt-3 text-[13px] font-semibold px-5 py-3 rounded-md text-center no-underline cursor-pointer"
          style={{ color: "var(--ink)", border: "1.5px solid var(--border)" }}
        >
          Resume ↓
        </a>
        <button onClick={() => scrollTo("contact")}
          className="mt-2 text-[13px] font-semibold px-5 py-3 rounded-md bg-[color:var(--ink)] text-[color:var(--bg)] border-none cursor-pointer">
          Hire Me
        </button>
      </div>
    </>
  );
}
