import { BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

interface LetterCardProps {
  title: string;
  subtitle: string;
}

const LetterCard = ({ title, subtitle }: LetterCardProps) => {
  return (
    <Card className="bg-gradient-card border-border/50 p-4 hover:shadow-golden transition-all duration-300 hover:scale-105 cursor-pointer group">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-glow">
            <BookOpen className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-foreground text-sm leading-tight">{title}</h3>
          <p className="text-muted-foreground text-xs mt-1 leading-tight">{subtitle}</p>
        </div>
      </div>
    </Card>
  );
};

export default LetterCard;