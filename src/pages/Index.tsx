import LetterCard from "@/components/LetterCard";
import PriceCard from "@/components/PriceCard";
import apostlePaulImage from "@/assets/apostle-paul.jpg";

const letters = [
  { title: "ROMANOS", subtitle: "Justiça de Deus" },
  { title: "GÁLATAS", subtitle: "Evangelho" },
  { title: "CORÍNTIOS", subtitle: "Vida Cristã" },
  { title: "ALEGRIA", subtitle: "As Cartas de Paulo" },
  { title: "EFÉSIOS", subtitle: "Graça" },
  { title: "FILIPENSES", subtitle: "Alegria" },
  { title: "TITO", subtitle: "Filemon e Estudo de Bíblia" },
  { title: "COLOSSENSES", subtitle: "Filemon e Estudo de Bíblia" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${apostlePaulImage})`,
          backgroundPosition: 'center 30%'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/90 to-background/95" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 animate-glow">
            AS CARTAS DE
          </h1>
          <h2 className="text-6xl md:text-7xl font-bold text-primary mb-6">
            PAULO
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            EXPLICADAS VERSÍCULO POR VERSÍCULO
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {letters.map((letter, index) => (
            <LetterCard 
              key={index}
              title={letter.title}
              subtitle={letter.subtitle}
            />
          ))}
          
          {/* Price Card in the center */}
          <div className="md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-3">
            <PriceCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
