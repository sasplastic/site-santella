import { Phone, Mail } from "lucide-react";
import logoSantella from "@/assets/logo.webp";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-santella-text-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <img
              src={logoSantella}
              alt="Logo Santella"
              className="h-8 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Especialistas em cavilhas de madeira desde 2001. 
              Alta resistência e acabamento superior.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Sobre a Santella
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("produtos")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Nossos Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Entre em Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white/60" />
                <a 
                  href="tel:+5554329613600" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  (54) 3296-1360
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white/60" />
                <a 
                  href="mailto:comercial@santellafix.com.br" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  comercial@santellafix.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white/60" />
                <a 
                  href="mailto:producao@santellafix.com.br" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  producao@santellafix.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Informações</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <span className="text-white/60 text-xs">
                  Nova Pádua - RS
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
          <p>
            © {new Date().getFullYear()} Santella Acessórios para Móveis Ltda. Todos os direitos reservados.
          </p>
          <p className="mt-2 md:mt-0">
            Desenvolvido com tecnologia sustentável
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;