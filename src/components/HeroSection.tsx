import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBackground from "@/assets/bg.jpg";
import fscSeal from "@/assets/selo.webp";
import logo from "@/assets/logo.webp";
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="sobre" className="relative min-h-screen flex items-center pt-20" style={{
    backgroundImage: `linear-gradient(rgba(245, 245, 235, 0.7), rgba(245, 245, 235, 0.6)), url(${heroBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Principal */}
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="Logo Santella - Acessórios para Móveis" 
              className="h-32 md:h-40 w-auto object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-santella-text-dark mb-6 leading-tight">Cavilhas de alta resistência e acabamento superior</h1>
          <p className="text-xl md:text-2xl text-santella-text-dark/80 mb-8 font-light">
            Especialistas em cavilhas de madeira desde 2001
          </p>

          <div className="max-w-3xl mx-auto text-lg text-santella-text-dark/90 mb-12 leading-relaxed">
            <p>
              A Santella Acessórios para Móveis foi fundada em 2001 no município de Nova Pádua - RS. 
              Especializada na produção de cavilhas de madeira para montagem de móveis, a Santella Fix 
              transforma madeira serrada de pinus e eucalipto em cavilhas de alta resistência e acabamento 
              superior. Visando as exigências do mercado, a Santella investe continuamente em tecnologia 
              para aperfeiçoar seu processo de fabricação.
            </p>
          </div>

          {/* FSC Certification Card - Enhanced */}
          <Card className="max-w-xl mx-auto mb-12 shadow-elegant border-santella-green-dark/20 bg-white/20 backdrop-blur-sm">
            <CardContent className="p-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white rounded-md p-5 shadow-santella">
                  <img src={fscSeal} alt="Selo FSC - Forest Stewardship Council certificando práticas sustentáveis" className="h-32 w-32 md:h-36 md:w-36 object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-santella-text-dark mb-3">
                Compromisso com o futuro
              </h3>
              <p className="text-santella-text-dark/90 text-base leading-relaxed">
                Matéria prima adquirida de fornecedores que seguem práticas responsáveis de utilização de mão de obra e manejo ambiental consciente, seguindo normas de conduta internacional.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => window.open("mailto:comercial@santellafix.com.br", "_blank")} variant="santella" size="lg" className="text-lg px-8 py-6">
              Solicitar Orçamento
            </Button>
            <Button onClick={() => scrollToSection("produtos")} variant="outline" size="lg" className="text-lg px-8 py-6">
              Ver Produtos
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;