import { Card } from "@/components/ui/card";

interface LetterCardProps {
  title: string;
  subtitle: string;
  image: string;
}

const LetterCard = ({ title, subtitle, image }: LetterCardProps) => {
  return (
    <Card className="bg-gradient-card border-border/50 hover:shadow-golden transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden">
      <div className="relative">
        {/* Image Background */}
        <div className="h-32 relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/50 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="p-4 relative -mt-8 z-10">
          <div className="bg-gradient-card rounded-lg p-3 border border-border/30">
            <h3 className="font-bold text-primary text-sm leading-tight mb-1">{title}</h3>
            <p className="text-muted-foreground text-xs leading-tight">{subtitle}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LetterCard;