import { Card, CardContent } from "./ui/card";

const BenefitCard = ({ image, title, description }: { image: string, title: string, description: string }) => (
  <Card className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-48 md:h-64 object-cover" 
    />
    <CardContent className="p-4 md:p-6">
      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{title}</h3>
      <p className="text-dark text-sm md:text-base">{description}</p>
    </CardContent>
  </Card>
);

const Benefits = () => {
  return (
    <section id="beneficios" className="py-16 md:py-20 section-fade">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Onde você pode treinar comigo</h2>
          <div className="section-divider"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Oferecemos treinos personalizados em diferentes locais para atender às suas necessidades e preferências
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <BenefitCard 
            image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
            title="Ironberg Alphaville" 
            description="Academia completa e moderna no coração de Alphaville, com equipamentos de última geração e ambiente motivador para seus treinos."
          />
          
          <BenefitCard 
            image="https://images.unsplash.com/photo-1571019613576-2b22c76fd955?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
            title="Treino Particular em Condomínios" 
            description="Atendimento personalizado na academia do seu condomínio, com toda comodidade e privacidade que você merece."
          />
          
          <div className="sm:col-span-2 lg:col-span-1 sm:mx-auto lg:mx-0 sm:max-w-sm lg:max-w-none">
            <BenefitCard 
              image="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              title="Flexibilidade Total" 
              description="Escolha o local que melhor se adapta à sua rotina. Treino onde você se sente mais confortável e motivado."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
