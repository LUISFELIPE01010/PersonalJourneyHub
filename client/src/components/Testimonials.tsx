import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  age: string;
  image: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Luciana M.",
    age: "36 anos",
    image: "https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    text: "Com o Junior eu consegui emagrecer 12kg em 4 meses, ganhei autoestima e disposição pra tudo. O treino é pesado, mas vale a pena!"
  },
  {
    id: 2,
    name: "Carlos P.",
    age: "28 anos",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    text: "Treino com o Junior há 8 meses e ganhei 7kg de massa muscular. Ele me ensinou como treinar de forma correta e como manter disciplina."
  },
  {
    id: 3,
    name: "Maria T.",
    age: "42 anos",
    image: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    text: "Comecei a treinar para melhorar minha saúde. O Junior adaptou tudo para minha condição física e hoje tenho muito mais disposição e qualidade de vida."
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="bg-white shadow-lg h-full">
    <CardContent className="p-8">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-16 h-16 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.age}</p>
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + slidesToShow;
      return newIndex >= testimonials.length ? 0 : newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - slidesToShow;
      return newIndex < 0
        ? Math.floor((testimonials.length - 1) / slidesToShow) * slidesToShow
        : newIndex;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const translateValue = `-${currentIndex * (100 / slidesToShow)}%`;

  return (
    <section id="depoimentos" className="py-16 bg-secondary section-fade">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Resultados comprovados</h2>
          <div className="section-divider mb-4"></div>
          <p className="text-lg">Mais de 100 alunos já treinam com Junior e comprovam resultados reais.</p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-all duration-300 ease-in-out"
              style={{ transform: `translateX(${translateValue})` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className={`px-4 ${
                    slidesToShow === 3 ? "min-w-[33.333%]" : "min-w-full"
                  }`}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          <Button 
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white shadow-lg rounded-full z-10 text-primary hover:bg-white hover:text-primary"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button 
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white shadow-lg rounded-full z-10 text-primary hover:bg-white hover:text-primary"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / slidesToShow) }).map((_, index) => {
              const dotIndex = index * slidesToShow;
              return (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
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
