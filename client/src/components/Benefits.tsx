import { Card, CardContent } from "./ui/card";

const BenefitCard = ({ image, title, description }: { image: string, title: string, description: string }) => (
  <Card className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-64 object-cover" 
    />
    <CardContent className="p-6">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-dark">{description}</p>
    </CardContent>
  </Card>
);

const Benefits = () => {
  return (
    <section id="beneficios" className="py-16 section-fade">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">O que você ganha treinando com Junior Nobrega?</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <BenefitCard 
            image="https://images.unsplash.com/photo-1571019613576-2b22c76fd955?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
            title="Emagrecimento eficaz" 
            description="Reduza gordura corporal com treinos personalizados, nutrição estratégica e disciplina."
          />
          
          <BenefitCard 
            image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
            title="Hipertrofia com segurança" 
            description="Aumente sua massa muscular com metodologia segura, progressiva e motivadora."
          />
          
          <BenefitCard 
            image="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
            title="Motivação para evoluir" 
            description="Mais do que treinar, você aprende a manter o foco e a energia para não desistir."
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
