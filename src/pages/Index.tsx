import LetterCard from "@/components/LetterCard";
import PriceCard from "@/components/PriceCard";
import apostlePaulImage from "@/assets/apostle-paul.jpg";
import romansImage from "@/assets/romans.jpg";
import galatiansImage from "@/assets/galatians.jpg";
import corinthiansImage from "@/assets/corinthians.jpg";
import ephesiansImage from "@/assets/ephesians.jpg";
import philippiansImage from "@/assets/philippians.jpg";
import titusImage from "@/assets/titus.jpg";
import colossiansImage from "@/assets/colossians.jpg";
import joyImage from "@/assets/joy.jpg";

const letters = [
  { 
    title: "ROMANOS", 
    subtitle: "Justiça de Deus", 
    description: "A salvação pela fé e a transformação do coração humano",
    image: romansImage 
  },
  { 
    title: "GÁLATAS", 
    subtitle: "Evangelho", 
    description: "A liberdade em Cristo e a vida no Espírito Santo",
    image: galatiansImage 
  },
  { 
    title: "CORÍNTIOS", 
    subtitle: "Vida Cristã", 
    description: "Orientações práticas para a igreja e vida comunitária",
    image: corinthiansImage 
  },
  { 
    title: "ALEGRIA", 
    subtitle: "As Cartas de Paulo", 
    description: "A verdadeira alegria que vem da fé em Jesus Cristo",
    image: joyImage 
  },
  { 
    title: "EFÉSIOS", 
    subtitle: "Graça", 
    description: "A unidade da igreja e a armadura espiritual",
    image: ephesiansImage 
  },
  { 
    title: "FILIPENSES", 
    subtitle: "Alegria", 
    description: "Contentamento e alegria mesmo nas dificuldades",
    image: philippiansImage 
  },
  { 
    title: "TITO", 
    subtitle: "Filemon e Estudo de Bíblia", 
    description: "Liderança cristã e organização da igreja primitiva",
    image: titusImage 
  },
  { 
    title: "COLOSSENSES", 
    subtitle: "Filemon e Estudo de Bíblia", 
    description: "A supremacia de Cristo e vida cristã prática",
    image: colossiansImage 
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Apostle Paul */}
      <div className="relative overflow-hidden">
        {/* Background Image - More Prominent */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${apostlePaulImage})`,
            backgroundPosition: 'center 20%'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background/95" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
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
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {letters.map((letter, index) => (
            <LetterCard 
              key={index}
              title={letter.title}
              subtitle={letter.subtitle}
              description={letter.description}
              image={letter.image}
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
