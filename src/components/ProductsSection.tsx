import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import pinusImg from "@/assets/pinus.webp";
import eucaliptoImg from "@/assets/eucalipto.webp";
import { CheckCircle } from "lucide-react";

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-santella-text-dark mb-4">
            Nossos Produtos
          </h2>
          <p className="text-lg text-santella-text-dark/80 max-w-2xl mx-auto">
            Cavilhas de alta qualidade em pinus e eucalipto, com medidas padrão e especiais sob encomenda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Cavilhas de Pinus */}
          <Card className="shadow-elegant border-santella-gray-soft/30 overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${pinusImg})`
              }}
            />
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-santella-text-dark">
                Cavilhas de Pinus
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-santella-text-dark">Características:</p>
                    <p className="text-santella-text-dark/80 text-sm">
                      Madeira leve, macia, de cor clara e com fibras longas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-santella-text-dark">Vantagens:</p>
                    <p className="text-santella-text-dark/80 text-sm">
                      Fácil de trabalhar e cortar, bom acabamento e aceita bem vernizes e tingimentos, proporcionando um visual mais claro e rústico.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-santella-text-dark">Aplicações:</p>
                    <p className="text-santella-text-dark/80 text-sm">
                      Móveis, decoração, construção civil e peças internas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-santella-green-light p-4 rounded-lg">
                <h4 className="font-semibold text-santella-text-dark mb-3">Medidas Disponíveis:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm ml-4">
                  <div>
                    <p className="font-medium">Diâmetros:</p>
                    <ul className="text-santella-text-dark/80">
                      <li>• CAVILHA 5MM</li>
                      <li>• CAVILHA 6MM</li>
                      <li>• CAVILHA 8MM</li>
                      <li>• CAVILHA 10MM</li>
                      <li>• CAVILHA 12MM</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Comprimentos:</p>
                    <ul className="text-santella-text-dark/80">
                      <li>• De 20mm à 100mm</li>
                      <li>• Medidas especiais até 1000mm sob encomenda</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => window.open("mailto:comercial@santellafix.com.br?subject=Cotação Cavilhas de Pinus", "_blank")}
                variant="santella"
                className="w-full"
              >
                Pedir Cotação de Pinus
              </Button>
            </CardContent>
          </Card>

          {/* Cavilhas de Eucalipto */}
          <Card className="shadow-elegant border-santella-gray-soft/30 overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${eucaliptoImg})`
              }}
            />
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-santella-text-dark">
                Cavilhas de Eucalipto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-santella-text-dark">Características:</p>
                    <p className="text-santella-text-dark/80 text-sm">
                      Madeira mais dura, densa e pesada, com fibras mais curtas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-santella-text-dark">Vantagens:</p>
                    <p className="text-santella-text-dark/80 text-sm">
                      Alta resistência, durabilidade e estabilidade dimensional.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-santella-text-dark">Aplicações:</p>
                    <p className="text-santella-text-dark/80 text-sm">
                      Estruturas, pisos, vigas, móveis que exigem firmeza e projetos que buscam maior resistência.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-santella-green-light p-4 rounded-lg">
                <h4 className="font-semibold text-santella-text-dark mb-3">Medidas Disponíveis:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm ml-4">
                  <div>
                    <p className="font-medium">Diâmetros:</p>
                    <ul className="text-santella-text-dark/80">
                      <li>• CAVILHA 6MM</li>
                      <li>• CAVILHA 8MM</li>
                      <li>• CAVILHA 10MM</li>
                      <li>• CAVILHA 12MM</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Comprimentos:</p>
                    <ul className="text-santella-text-dark/80">
                      <li>• De 20mm à 100mm</li>
                      <li>• Medidas especiais até 1000mm sob encomenda</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => window.open("mailto:comercial@santellafix.com.br?subject=Cotação Cavilhas de Eucalipto", "_blank")}
                variant="santella"
                className="w-full"
              >
                Pedir Cotação de Eucalipto
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;