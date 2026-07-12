import { useState, useEffect } from "react";

const links = ["About", "Experience", "Projects", "Stack"];

function NavLink({ label, isActive, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative text-[13px] font-medium bg-transparent border-none cursor-pointer pb-0.5 transition-colors duration-200"
      style={{ color: isActive || hovered ? "#111110" : "#6b6860" }}
    >
      {label}
      <span
        aria-hidden
        className="absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full"
        style={{
          background: "#1a56e8",
          opacity: isActive ? 1 : hovered ? 0.35 : 0,
          transform: isActive || hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease",
        }}
      />
    </button>
  );
}

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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
        style={{ background: "rgba(250,250,248,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid #e4e2dd", fontFamily: "'DM Sans', sans-serif" }}
      >
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2.5 bg-transparent border-none cursor-pointer">
          <div className="px-2.5 py-1.5 text-[13px] font-semibold text-[#fafaf8] flex items-center justify-center rounded bg-[#1a56e8]">
            A
          </div>
          <span style={{ fontFamily: "'DM Mono',monospace" }} className="text-[13px] font-medium text-[#111110]">Aravind</span>
        </button>

        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l}
              label={l}
              isActive={active === l.toLowerCase() || (l === "Stack" && active === "skills")}
              onClick={() => scrollTo(l === "Stack" ? "skills" : l)}
            />
          ))}
          <button onClick={() => scrollTo("contact")}
            className="text-[13px] font-semibold px-5 py-2 rounded-md bg-[#111110] text-[#fafaf8] border-none cursor-pointer hover:opacity-80 transition-opacity">
            Hire Me
          </button>
        </div>

        <button className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-5 h-[1.5px] bg-[#111110] transition-all duration-200"
            style={{ transform: menuOpen ? "rotate(45deg) translateY(6.5px)" : "none" }} />
          <span className="block w-5 h-[1.5px] bg-[#111110] transition-all duration-200"
            style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-[1.5px] bg-[#111110] transition-all duration-200"
            style={{ transform: menuOpen ? "rotate(-45deg) translateY(-6.5px)" : "none" }} />
        </button>
      </nav>

      <div
        className="fixed top-[62px] left-0 right-0 z-40 md:hidden flex flex-col px-6 py-5 gap-1 overflow-hidden transition-all duration-300"
        style={{
          background: "#fafaf8", borderBottom: menuOpen ? "1px solid #e4e2dd" : "none",
          maxHeight: menuOpen ? "320px" : "0px", opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {links.map((l) => (
          <button key={l} onClick={() => scrollTo(l === "Stack" ? "skills" : l)}
            className="text-[15px] font-medium py-3 text-left bg-transparent border-none cursor-pointer"
            style={{ color: "#6b6860", borderBottom: "1px solid #e4e2dd" }}>
            {l}
          </button>
        ))}
        <button onClick={() => scrollTo("contact")}
          className="mt-3 text-[13px] font-semibold px-5 py-3 rounded-md bg-[#111110] text-[#fafaf8] border-none cursor-pointer">
          Hire Me
        </button>
      </div>
    </>
  );
}
