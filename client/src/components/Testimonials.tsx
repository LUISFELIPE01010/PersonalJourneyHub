
import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  age: string;
  beforeImage: string;
  afterImage: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Roberta Souza",
    age: "36 anos",
    beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    afterImage: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    text: "Com o Junior eu consegui emagrecer 12kg em 4 meses, ganhei autoestima e disposição pra tudo. O treino é pesado, mas vale a pena!"
  },
  {
    id: 2,
    name: "Caio Lima",
    age: "28 anos",
    beforeImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    afterImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    text: "Treino com o Junior há 8 meses e ganhei 7kg de massa muscular. Ele me ensinou como treinar de forma correta e como manter disciplina."
  },
  {
    id: 3,
    name: "Leticia Silva",
    age: "42 anos",
    beforeImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    afterImage: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    text: "Comecei a treinar para melhorar minha saúde. O Junior adaptou tudo para minha condição física e hoje tenho muito mais disposição e qualidade de vida."
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="bg-white shadow-lg h-full">
    <CardContent className="p-6">
      <div className="mb-4">
        <h4 className="font-bold text-lg">{testimonial.name}</h4>
        <p className="text-sm text-gray-600 mb-4">{testimonial.age}</p>
        
        <div className="flex gap-2 mb-4">
          <div className="flex-1">
            <img 
              src={testimonial.beforeImage} 
              alt={`${testimonial.name} - antes`} 
              className="w-full h-48 object-cover rounded-lg" 
            />
          </div>
          <div className="flex-1">
            <img 
              src={testimonial.afterImage} 
              alt={`${testimonial.name} - depois`} 
              className="w-full h-48 object-cover rounded-lg" 
            />
          </div>
        </div>
      </div>
      
      <p className="italic text-gray-700 mb-4">
        "{testimonial.text}"
      </p>
      
      <div className="flex text-yellow-400">
        <Star className="fill-current" />
        <Star className="fill-current" />
        <Star className="fill-current" />
        <Star className="fill-current" />
        <Star className="fill-current" />
      </div>
    </CardContent>
  </Card>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const translateValue = `-${currentIndex * (100 / slidesToShow)}%`;

  return (
    <section id="depoimentos" className="py-20 bg-secondary section-fade">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Resultados comprovados</h2>
          <div className="section-divider"></div>
          <p className="text-lg">Mais de 100 alunos já treinam com Junior e comprovam resultados reais.</p>
        </div>
        
        <div className="relative px-4 md:px-12">
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-all duration-300 ease-in-out"
              style={{ transform: `translateX(${translateValue})` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className={`px-4 md:px-6 ${
                    slidesToShow === 3 ? "min-w-[33.333%]" : "min-w-full"
                  }`}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-3">
            {Array.from({ length: Math.ceil(testimonials.length / slidesToShow) }).map((_, index) => {
              const dotIndex = index * slidesToShow;
              return (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full ${
                    currentIndex === dotIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={() => goToSlide(dotIndex)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
