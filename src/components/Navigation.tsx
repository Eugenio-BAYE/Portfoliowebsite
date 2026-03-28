import { Menu } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => scrollToSection("home")}
            className="relative text-emerald-400 hover:text-emerald-300 transition-all duration-300 font-semibold tracking-tight hover:tracking-wide px-3 py-1.5 rounded-lg hover:bg-emerald-400/5 border border-transparent hover:border-emerald-400/20 hover:shadow-lg hover:shadow-emerald-500/20"
          >
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 bg-clip-text text-transparent">
              Eugénio BAYE
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("about")} className="text-zinc-300 hover:text-emerald-400 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-zinc-300 hover:text-emerald-400 transition-colors font-medium">
              Projects
            </button>
            <button onClick={() => scrollToSection("experience")} className="text-zinc-300 hover:text-emerald-400 transition-colors font-medium">
              Experience
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-zinc-300 hover:text-emerald-400 transition-colors font-medium">
              Skills
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-zinc-300 hover:text-emerald-400 transition-colors font-medium">
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-300 hover:text-emerald-400"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button onClick={() => scrollToSection("about")} className="block w-full text-left py-2 text-zinc-300 hover:text-emerald-400 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("projects")} className="block w-full text-left py-2 text-zinc-300 hover:text-emerald-400 transition-colors font-medium">
              Projects
            </button>
            <button onClick={() => scrollToSection("experience")} className="block w-full text-left py-2 text-zinc-300 hover:text-emerald-400 transition-colors font-medium">
              Experience
            </button>
            <button onClick={() => scrollToSection("skills")} className="block w-full text-left py-2 text-zinc-300 hover:text-emerald-400 transition-colors font-medium">
              Skills
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left py-2 text-zinc-300 hover:text-emerald-400 transition-colors font-medium">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
