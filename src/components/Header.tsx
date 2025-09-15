import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoSantella from "@/assets/logo.webp";
import fscSeal from "@/assets/selo.webp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBrandLogo, setShowBrandLogo] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (y / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(y > 10);
      setShowBrandLogo(y > 150);

      // Active section detection
      const sectionIds = ["sobre", "produtos", "contato"];
      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.35) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    // Initialize state on mount in case the page loads scrolled
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-1 md:py-3">
        <div className="relative flex items-center">
          <div className={`flex items-center ${showBrandLogo ? 'gap-3' : 'gap-0'}`}>
            {/* Animated brand logo: expands from 0 and fades in */}
            <div
              className={`overflow-hidden transition-[max-width] duration-500 ${
                showBrandLogo ? 'max-w-[220px] md:max-w-[300px]' : 'max-w-0'
              }`}
            >
              <img
                src={logoSantella}
                alt="Logo Santella - Cavilhas de madeira de alta qualidade"
                className={`h-14 md:h-20 w-auto transition-opacity duration-500 ${showBrandLogo ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
            <img
              src={fscSeal}
              alt="Selo FSC - Forest Stewardship Council"
              className="h-14 md:h-20 w-auto object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2 z-10">
            {[
              { id: "sobre", label: "Sobre" },
              { id: "produtos", label: "Produtos" },
              { id: "contato", label: "Contato" },
            ].map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative font-medium transition-colors px-1 py-0.5 focus:outline-none ${
                  activeSection === link.id
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
                <span
                  className={`pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ${
                    activeSection === link.id ? 'scale-x-100' : 'group-hover:scale-x-100'
                  }`}
                />
              </button>
            ))}
          </nav>
          <div className="hidden md:flex ml-auto">
            <Button
              onClick={() => window.open("mailto:comercial@santellafix.com.br", "_blank")}
              variant="santella"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile orçamento button anchored right */}
          <div className="md:hidden absolute right-0 top-1/2 -translate-y-1/2">
            <Button
              onClick={() => window.open("mailto:comercial@santellafix.com.br", "_blank")}
              variant="santella"
              size="sm"
              className="px-3 py-1 text-xs"
            >
              Orçamento
            </Button>
          </div>
        </div>
      </div>
      {/* Scroll progress bar (hidden until header becomes opaque) */}
      <div className={`absolute bottom-0 left-0 h-[2px] w-full transition-colors duration-300 ${isScrolled ? 'bg-primary/20' : 'bg-transparent'}`}>
        <div
          className={`h-full transition-[width,background-color] duration-150 ease-linear ${isScrolled ? 'bg-primary' : 'bg-transparent'}`}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};

export default Header;