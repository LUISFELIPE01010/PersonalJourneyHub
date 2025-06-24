import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

type VideoPost = {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl?: string;
};

const videoPosts: VideoPost[] = [
  {
    id: 1,
    title: "Treino de Força para Iniciantes",
    thumbnail: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 2,
    title: "Exercícios de Cardio Eficazes",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 3,
    title: "Técnicas de Alongamento",
    thumbnail: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  }
];

const VideoCard = ({ video }: { video: VideoPost }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleVideoClick = () => {
    // Aqui você pode adicionar a lógica para reproduzir o vídeo
    console.log(`Playing video: ${video.title}`);
  };

  return (
    <div 
      className="relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleVideoClick}
    >
      <div className="relative aspect-video bg-gray-100">
        <img 
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Play Button Overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
          <div className={`bg-white bg-opacity-90 rounded-full p-3 md:p-4 transform transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            <Play className="w-6 h-6 md:w-8 md:h-8 text-primary fill-current" />
          </div>
        </div>

        {/* Duration Badge (opcional) */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          2:30
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm md:text-base line-clamp-2">
          {video.title}
        </h3>
        <p className="text-xs md:text-sm text-gray-600 mt-2">
          @personaljuniornobrega
        </p>
      </div>
    </div>
  );
};

const InstagramVideos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

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

  const maxIndex = Math.max(0, videoPosts.length - slidesToShow);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
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

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white to-gray-50 section-fade">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Dicas de Treino em Vídeo
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-4 md:mb-6 px-4">
            Assista nossos vídeos com dicas práticas, exercícios e técnicas para maximizar seus resultados
          </p>
          <a 
            href="https://instagram.com/personaljuniornobrega" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-red-700 font-medium transition-colors"
          >
            <span>@personaljuniornobrega</span>
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile */}
          {maxIndex > 0 && (
            <>
              <Button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white disabled:opacity-50 w-10 h-10 md:w-12 md:h-12 md:-ml-6 hidden md:flex"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </Button>

              <Button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white disabled:opacity-50 w-10 h-10 md:w-12 md:h-12 md:-mr-6 hidden md:flex"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </>
          )}

          {/* Videos Carousel with Touch Support */}
          <div 
            className="overflow-hidden px-4 md:px-0"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-out gap-4 md:gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              }}
            >
              {videoPosts.map((video) => (
                <div 
                  key={video.id} 
                  className="flex-shrink-0"
                  style={{ 
                    width: `calc(${100 / slidesToShow}% - ${(slidesToShow - 1) * (slidesToShow === 1 ? 0 : 1.5)}rem / ${slidesToShow})`
                  }}
                >
                  <VideoCard video={video} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator - Smaller on mobile */}
          {maxIndex > 0 && (
            <div className="flex justify-center mt-6 md:mt-8 space-x-1 md:space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-primary w-3 h-1.5 md:w-6 md:h-2' 
                      : 'bg-gray-300 hover:bg-gray-400 w-1.5 h-1.5 md:w-2 md:h-2'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 md:mt-12">
          <Button 
            onClick={() => {
              const contactSection = document.getElementById("contato");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            size="lg"
            className="px-6 py-3 md:px-8"
          >
            Quero treinar com você
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramVideos;