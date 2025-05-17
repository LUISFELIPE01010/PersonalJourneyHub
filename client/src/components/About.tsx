import { Dumbbell, MessageCircle, TrendingUp, Flame } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="bg-white shadow-md">
    <CardContent className="p-6 flex items-start">
      <div className="mr-4 text-primary text-2xl">
        {icon}
      </div>
      <div>
        <h4 className="font-bold mb-2">{title}</h4>
        <p className="text-dark">{description}</p>
      </div>
    </CardContent>
  </Card>
);

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary section-fade">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Quem é Junior Nobrega</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          <div className="md:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
              alt="Junior Nobrega, Personal Trainer" 
              className="rounded-xl shadow-lg w-full h-auto object-cover" 
            />
          </div>
          
          <div className="md:w-3/5">
            <p className="text-lg mb-8 leading-relaxed">
              Junior Nobrega é personal trainer, formado em Educação Física, com foco em transformar vidas por meio da atividade física.
            </p>
            <p className="text-lg mb-10 leading-relaxed">
              Apaixonado por saúde, bem-estar e performance, Junior atua com um atendimento próximo e motivador, construindo resultados reais para quem busca emagrecer, ganhar massa muscular ou melhorar o condicionamento físico.
            </p>
            
            <h3 className="text-xl font-bold mb-8">Diferenciais:</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <FeatureCard 
                icon={<Dumbbell className="h-6 w-6" />}
                title="Treinos adaptados para cada aluno"
                description="Programas personalizados de acordo com seus objetivos e condição física."
              />
              
              <FeatureCard 
                icon={<MessageCircle className="h-6 w-6" />}
                title="Suporte e acompanhamento constante"
                description="Comunicação direta e feedback regular para ajustar sua evolução."
              />
              
              <FeatureCard 
                icon={<TrendingUp className="h-6 w-6" />}
                title="Foco em resultado sem fórmulas mágicas"
                description="Métodos comprovados e baseados em ciência para resultados duradouros."
              />
              
              <FeatureCard 
                icon={<Flame className="h-6 w-6" />}
                title="Motivação e disciplina"
                description="Apoio para você sair da zona de conforto e conquistar suas metas."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
