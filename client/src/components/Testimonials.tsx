
import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

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
    name: "Roberta Souza",
    age: "36 anos",
    image: "/roberta.png",
    text: "Com o Junior eu consegui emagrecer 12kg em 4 meses, ganhei autoestima e disposição pra tudo. O treino é pesado, mas vale a pena!"
  },
  {
    id: 2,
    name: "Caio Lima",
    age: "28 anos",
    image: "/caio.png",
    text: "Treino com o Junior há 8 meses e ganhei 7kg de massa muscular. Ele me ensinou como treinar de forma correta e como manter disciplina."
  },
  {
    id: 3,
    name: "Leticia Silva",
    age: "42 anos",
    image: "/leticia.png",
    text: "Comecei a treinar para melhorar minha saúde. O Junior adaptou tudo para minha condição física e hoje tenho muito mais disposição e qualidade de vida."
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="bg-white shadow-lg h-full mx-2">
    <CardContent className="p-4 md:p-6">
      <div className="mb-4">
        <h4 className="font-bold text-lg md:text-xl">{testimonial.name}</h4>
        <p className="text-sm text-gray-600 mb-4">{testimonial.age}</p>
        
        <div className="mb-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-48 md:h-64 object-cover rounded-lg" 
          />
        </div>
      </div>
      
      <p className="italic text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
        "{testimonial.text}"
      </p>
      
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="fill-current w-4 h-4 md:w-5 md:h-5" />
        ))}
      </div>
    </CardContent>
  </Card>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
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

  const maxIndex = Math.max(0, testimonials.length - slidesToShow);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clampedIndex);
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < maxIndex) {
      nextSlide();
    }
    if (isRightSwipe && currentIndex > 0) {
      prevSlide();
    }
  };

  const translateValue = `-${currentIndex * (100 / slidesToShow)}%`;

  return (
    <section id="depoimentos" className="py-16 md:py-20 bg-secondary section-fade">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Resultados comprovados</h2>
          <div className="section-divider"></div>
          <p className="text-base md:text-lg">Mais de 100 alunos já treinam com Junior e comprovam resultados reais.</p>
        </div>
        
        <div className="relative">
          {/* Navigation Buttons - Smaller on mobile */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white w-8 h-8 md:w-10 md:h-10 md:left-2"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white w-8 h-8 md:w-10 md:h-10 md:right-2"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
          </Button>

          <div className="overflow-hidden px-2 md:px-8">
            <div 
              ref={sliderRef}
              className="flex transition-all duration-300 ease-in-out"
              style={{ transform: `translateX(${translateValue})` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className={`flex-shrink-0 ${
                    slidesToShow === 3 ? "w-1/3" : 
                    slidesToShow === 2 ? "w-1/2" : "w-full"
                  }`}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Dots Navigation */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <div className="flex space-x-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-1.5 h-1.5 md:w-3 md:h-3 rounded-full transition-colors ${
                  currentIndex === index ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Mobile Navigation Hint */}
        <div className="md:hidden text-center mt-4">
          <p className="text-sm text-gray-600">
            Deslize para ver mais depoimentos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
