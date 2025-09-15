import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        onClick={() => {
          const msg = encodeURIComponent("Olá! Gostaria de solicitar um orçamento de cavilhas (pinus/eucalipto). Pode me ajudar?");
          window.open(`https://wa.me/555496916949?text=${msg}`, "_blank");
        }}
        variant="santella"
        size="lg"
        className="rounded-full shadow-elegant"
      >
        <MessageSquare className="w-5 h-5 mr-2" />
        WhatsApp
      </Button>
    </div>
  );
};

export default FloatingCTA;