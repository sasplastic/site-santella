import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    // Optional: tag source
    formData.append("source", "site-santella");
    // Subject and reply-to for better inbox handling
    const nameVal = (formData.get("name") || "Site Santella").toString();
    const emailVal = (formData.get("email") || "").toString();
    formData.append("_subject", `Contato do site - ${nameVal}`);
    if (emailVal) formData.append("_replyto", emailVal);

    // Use env var if present, otherwise fall back to provided endpoint id
    const FORMSPREE_ID = (import.meta.env.VITE_FORMSPREE_ID as string | undefined) || "xpwjelnl";

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        }
      );

      if (res.ok) {
        form.reset();
        toast({
          title: "Mensagem enviada!",
          description: "Entraremos em contato em breve. Obrigado!",
        });
      } else {
        const data = await res.json().catch(() => ({}));
        const msg = (data?.errors && Array.isArray(data.errors) && data.errors[0]?.message) || "Não foi possível enviar sua mensagem. Tente novamente.";
        toast({
          title: "Falha no envio",
          description: msg,
        });
      }
    } catch (error) {
      toast({
        title: "Erro de rede",
        description: "Verifique sua conexão e tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-santella-text-dark mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-santella-text-dark/80 max-w-2xl mx-auto">
            Solicite seu orçamento personalizado ou tire suas dúvidas sobre nossos produtos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-santella-text-dark flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Contatos Diretos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-santella-text-dark/60" />
                  <a 
                    href="tel:+5554329613600" 
                    className="text-santella-text-dark hover:text-primary transition-colors"
                  >
                    (54) 3296-1360
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-santella-text-dark/60" />
                  <a 
                    href="mailto:comercial@santellafix.com.br" 
                    className="text-santella-text-dark hover:text-primary transition-colors"
                  >
                    comercial@santellafix.com.br
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-santella-text-dark/60" />
                  <a 
                    href="mailto:producao@santellafix.com.br" 
                    className="text-santella-text-dark hover:text-primary transition-colors"
                  >
                    producao@santellafix.com.br
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {
                  const msg = encodeURIComponent("Olá! Gostaria de solicitar um orçamento de cavilhas (pinus/eucalipto). Pode me ajudar?");
                  window.open(`https://wa.me/555496916949?text=${msg}`, "_blank");
                }}
                variant="santella"
                className="flex-1"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Chamar no WhatsApp
              </Button>
              <Button
                onClick={() => window.open("mailto:comercial@santellafix.com.br", "_blank")}
                variant="outline"
                className="flex-1"
              >
                <Mail className="w-4 h-4 mr-2" />
                Enviar E-mail
              </Button>
            </div>

            {/* Address and Map */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-santella-text-dark flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-santella-text-dark/80 mb-4">
                  Travessão Bonito, S/N, Nova Pádua - RS, Brasil
                </p>
                <div className="rounded-lg overflow-hidden border border-santella-gray-soft/40">
                  <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      title="Mapa - Santella"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6706.196442544327!2d-51.308139!3d-29.005056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951e83bca8b7520b%3A0x349164d0bc029881!2sSantella!5e1!3m2!1spt-BR!2sus!4v1757946007838!5m2!1spt-BR!2sus"
                      className="absolute inset-0 w-full h-full"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-xl text-santella-text-dark">
                Solicite seu Orçamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Descreva suas necessidades: tipo de cavilha, quantidade, medidas especiais..."
                    rows={4}
                  />
                </div>

                {/* Honeypot anti-spam field (invisível ao usuário) */}
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="flex items-center space-x-2">
                  <Checkbox id="consent" required />
                  <Label htmlFor="consent" className="text-sm text-santella-text-dark/80">
                    Concordo em ser contatado(a) pela Santella para resposta à esta solicitação.
                  </Label>
                </div>

                <Button
                  type="submit"
                  variant="santella"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;