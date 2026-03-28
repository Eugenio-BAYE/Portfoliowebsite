import { useState, useEffect } from "react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = ["home", "about", "projects", "skills", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 80);

      let current = "home";
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;
        const top = element.getBoundingClientRect().top + scrollY;
        if (scrollY >= top - 100) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Logo top-left */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="pointer-events-auto relative text-emerald-400 hover:text-emerald-300 transition-all duration-300 font-semibold tracking-tight hover:tracking-wide px-3 py-1.5 rounded-lg hover:bg-emerald-400/5 border border-transparent hover:border-emerald-400/20 hover:shadow-lg hover:shadow-emerald-500/20"
          >
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 bg-clip-text text-transparent">
              Eugénio BAYE
            </span>
          </button>
        </div>
      </div>

      {/* Right-side vertical nav */}
      <nav
        style={{ opacity: isScrolled ? 1 : 0, pointerEvents: isScrolled ? "auto" : "none", transition: "opacity 0.4s ease" }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-4"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group flex items-center gap-3"
          >
            <span
              className={`text-sm font-medium transition-all duration-200 opacity-0 group-hover:opacity-100 ${
                activeSection === item.id ? "text-emerald-400 opacity-100" : "text-zinc-400"
              }`}
            >
              {item.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-200 ${
                activeSection === item.id
                  ? "w-3 h-3 bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.5)]"
                  : "w-2 h-2 bg-zinc-600 group-hover:bg-zinc-400"
              }`}
            />
          </button>
        ))}
      </nav>
    </>
  );
}
