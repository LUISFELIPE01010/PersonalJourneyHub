import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Play, Heart, MessageCircle, Share } from "lucide-react";

type InstagramVideo = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  likes: number;
  comments: number;
  duration: string;
};

const instagramVideos: InstagramVideo[] = [
  {
    id: 1,
    title: "Treino de Peito Completo",
    description: "3 exercícios fundamentais para hipertrofia do peitoral",
    thumbnail: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    likes: 1247,
    comments: 89,
    duration: "0:45"
  },
  {
    id: 2,
    title: "Aquecimento Dinâmico",
    description: "Prepare seu corpo antes do treino com estes movimentos",
    thumbnail: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    likes: 892,
    comments: 45,
    duration: "0:30"
  },
  {
    id: 3,
    title: "Treino de Pernas Intenso",
    description: "Fortaleça suas pernas com estes exercícios funcionais",
    thumbnail: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    likes: 1563,
    comments: 127,
    duration: "1:15"
  },
  {
    id: 4,
    title: "Exercícios para Core",
    description: "Fortaleça seu abdome e melhore sua postura",
    thumbnail: "https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    likes: 987,
    comments: 63,
    duration: "0:50"
  },
  {
    id: 5,
    title: "Alongamento Pós-Treino",
    description: "Relaxe os músculos e melhore a recuperação",
    thumbnail: "https://images.unsplash.com/photo-1506629905607-47b3b76b93a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    likes: 654,
    comments: 34,
    duration: "0:40"
  },
  {
    id: 6,
    title: "Treino HIIT 15min",
    description: "Queime calorias rapidamente com alta intensidade",
    thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    likes: 2103,
    comments: 156,
    duration: "1:00"
  }
];

const InstagramVideoCard = ({ video }: { video: InstagramVideo }) => (
  <div className="relative group cursor-pointer">
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 via-red-600 to-red-700 p-0.5">
      <div className="relative bg-white rounded-2xl overflow-hidden">
        <div className="aspect-[9/16] relative overflow-hidden">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Play className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" />
            </div>
          </div>
          
          {/* Duration Badge */}
          <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-lg text-sm font-medium">
            {video.duration}
          </div>
          
          {/* Instagram-style gradient border effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500 via-red-600 to-red-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h4 className="font-bold text-gray-900 mb-1 line-clamp-1">
            {video.title}
          </h4>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {video.description}
          </p>
          
          {/* Engagement Stats */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4" />
                <span>{video.likes.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-4 h-4" />
                <span>{video.comments}</span>
              </div>
            </div>
            <Share className="w-4 h-4 hover:text-gray-700 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const InstagramVideos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 1024) {
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

  const maxIndex = Math.max(0, instagramVideos.length - slidesToShow);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clampedIndex);
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      goToSlide(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    try {
      if (e.touches && e.touches.length > 0 && e.touches[0]) {
        touchStartX.current = e.touches[0].clientX;
      }
    } catch (error) {
      // Safely handle any touch errors
      touchStartX.current = null;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    try {
      if (e.touches && e.touches.length > 0 && e.touches[0]) {
        touchEndX.current = e.touches[0].clientX;
      }
    } catch (error) {
      // Safely handle any touch errors
      touchEndX.current = null;
    }
  };

  const handleTouchEnd = () => {
    try {
      if (touchStartX.current === null || touchEndX.current === null) return;
      
      const distance = touchStartX.current - touchEndX.current;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;

      if (isLeftSwipe && currentIndex < maxIndex) {
        nextSlide();
      } else if (isRightSwipe && currentIndex > 0) {
        prevSlide();
      }
    } catch (error) {
      // Safely handle any touch errors
    } finally {
      // Reset touch values
      touchStartX.current = null;
      touchEndX.current = null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 section-fade">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dicas de Treino no Instagram
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Acompanhe nossos vídeos com dicas práticas, exercícios e técnicas para maximizar seus resultados
          </p>
          <a 
            href="https://instagram.com/personaljuniornobrega" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-medium transition-colors"
          >
            <span>@personaljuniornobrega</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white disabled:opacity-50 w-12 h-12 -ml-6"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white disabled:opacity-50 w-12 h-12 -mr-6"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Video Carousel */}
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                width: `${(instagramVideos.length / slidesToShow) * 100}%`
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {instagramVideos.map((video) => (
                <div 
                  key={video.id} 
                  className="px-3"
                  style={{ width: `${100 / instagramVideos.length}%` }}
                >
                  <InstagramVideoCard video={video} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="text-center mt-6 md:hidden">
            <p className="text-sm text-gray-500">
              Deslize para ver mais vídeos
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => {
              const contactSection = document.getElementById("contato");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            size="lg"
            className="px-8 py-3"
          >
            Quero treinar com você
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramVideos;