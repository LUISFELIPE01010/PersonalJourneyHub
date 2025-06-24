import { Card, CardContent } from "./ui/card";

const BenefitCard = ({ image, title, description }: { image: string, title: string, description: string }) => (
  <Card className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-fade-in h-full flex flex-col">
    <div className="overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110 loading-lazy" 
        loading="lazy"
        decoding="async"
      />
    </div>
    <CardContent className="p-4 md:p-6 flex-1 flex flex-col">
      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 transition-colors duration-300 group-hover:text-primary">{title}</h3>
      <p className="text-dark text-sm md:text-base leading-relaxed flex-1">{description}</p>
    </CardContent>
  </Card>
);

const Benefits = () => {
  return (
    <section id="beneficios" className="py-16 md:py-20 section-fade scroll-reveal">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Onde você pode treinar comigo</h2>
          <div className="section-divider"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Oferecemos treinos personalizados em diferentes locais para atender às suas necessidades e preferências
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 animate-fade-in-up">
          <BenefitCard 
            image="/iron.webp" 
            title="Ironberg Alphaville" 
            description="Academia completa e moderna no coração de Alphaville, com equipamentos de última geração e ambiente motivador para seus treinos."
          />
          
          <BenefitCard 
            image="/academia.jpg" 
            title="Treino Particular em Condomínios" 
            description="Atendimento personalizado na academia do seu condomínio, com toda comodidade e privacidade que você merece."
          />
          
          <BenefitCard 
            image="/ead.png" 
            title="Treinamento Online" 
            description="Acompanhamento personalizado à distância com planos de treino customizados e suporte contínuo."
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
