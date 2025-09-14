import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PriceCard = () => {
  return (
    <Card className="bg-gradient-card border-border/50 p-6 text-center hover:shadow-golden transition-all duration-300 animate-float">
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
      <p className="text-muted-foreground text-sm mt-3">
        Filemon e Estudo de Bíblia
      </p>
    </Card>
  );
};

export default PriceCard;