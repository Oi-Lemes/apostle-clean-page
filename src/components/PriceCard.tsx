import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2, Languages, MessageCircle } from "lucide-react";

const PriceCard = () => {
  return (
    <Card className="bg-gradient-card border-border/50 p-6 text-center hover:shadow-golden transition-all duration-300 animate-float">
      {/* Audio Feature Highlight */}
      <div className="mb-4 p-3 bg-gradient-primary rounded-lg">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Volume2 className="w-5 h-5 text-primary-foreground" />
          <Languages className="w-5 h-5 text-primary-foreground" />
        </div>
        <p className="text-primary-foreground font-bold text-sm">
          20 ÁUDIOS EM LATIM
        </p>
        <p className="text-primary-foreground text-xs">
          Traduzidos para o Português
        </p>
      </div>
      
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-primary mb-2">APENAS</h3>
        <div className="text-4xl font-bold text-primary">R$ 10,00</div>
      </div>
      <Button 
        size="lg" 
        className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 font-bold text-primary-foreground shadow-golden"
      >
        Adquirir Agora
      </Button>
      
      {/* WhatsApp Delivery Info */}
      <div className="mt-4 p-3 bg-muted rounded-lg border border-border/30">
        <div className="flex items-center justify-center gap-2 mb-1">
          <MessageCircle className="w-4 h-4 text-primary" />
          <span className="text-primary font-semibold text-sm">Entrega via WhatsApp</span>
        </div>
        <p className="text-muted-foreground text-xs leading-relaxed">
          Após a compra, você receberá todas as cartas e áudios diretamente no seu WhatsApp
        </p>
      </div>
      
      <p className="text-muted-foreground text-sm mt-3">
        Filemon e Estudo de Bíblia
      </p>
    </Card>
  );
};

export default PriceCard;