import { Dumbbell, MessageCircle, TrendingUp, Flame } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
    <CardContent className="p-4 md:p-6 flex items-start">
      <div className="mr-3 md:mr-4 text-primary text-xl md:text-2xl flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold mb-2 text-sm md:text-base">{title}</h4>
        <p className="text-dark text-sm md:text-base">{description}</p>
      </div>
    </CardContent>
  </Card>
);

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-20 bg-secondary section-fade scroll-reveal">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Quem é Junior Nobrega</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <div className="lg:w-2/5 w-full">
            <img 
              src="/fotojunior.png" 
              alt="Junior Nobrega, Personal Trainer" 
              className="rounded-xl shadow-lg w-full h-auto object-cover max-w-sm sm:max-w-md mx-auto" 
            />
          </div>
          
          <div className="lg:w-3/5 w-full">
            <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Sou Junior Nobrega, personal trainer formado em Educação Física, e minha missão é transformar sua vida através da atividade física.
            </p>
            <p className="text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
              Apaixonado por saúde, bem-estar e performance, trabalho com atendimento próximo e motivador, construindo resultados reais para quem busca emagrecer, ganhar massa muscular ou melhorar o condicionamento físico. Acredito que cada pessoa tem potencial único, e meu papel é desbloquear esse potencial através de treinos estratégicos e acompanhamento personalizado.
            </p>
            
            <h3 className="text-lg md:text-xl font-bold mb-6 md:mb-8">Por que escolher treinar comigo:</h3>
            
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <FeatureCard 
                icon={<Dumbbell className="h-5 w-5 md:h-6 md:w-6" />}
                title="Crio treinos sob medida para VOCÊ"
                description="Desenvolvo programas únicos baseados no SEU corpo, SEU tempo e SEUS objetivos específicos."
              />
              
              <FeatureCard 
                icon={<MessageCircle className="h-5 w-5 md:h-6 md:w-6" />}
                title="Estou sempre ao seu lado"
                description="Acompanho cada passo da sua jornada com feedback constante e ajustes precisos."
              />
              
              <FeatureCard 
                icon={<TrendingUp className="h-5 w-5 md:h-6 md:w-6" />}
                title="Resultados reais, sem enganação"
                description="Uso métodos científicos comprovados. Nada de promessas vazias ou fórmulas milagrosas."
              />
              
              <FeatureCard 
                icon={<Flame className="h-5 w-5 md:h-6 md:w-6" />}
                title="Transformo sua mentalidade"
                description="Não só treino seu corpo, mas desenvolvo sua disciplina e confiança para vencer qualquer desafio."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
