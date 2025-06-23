
import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type InstagramPost = {
  id: number;
  title: string;
  description: string;
  embedUrl: string;
  postId: string;
};

const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    title: "Treino de Hipertrofia",
    description: "Técnicas avançadas para maximizar o ganho de massa muscular",
    embedUrl: "https://www.instagram.com/reel/DLQeuVtR_Q2/",
    postId: "DLQeuVtR_Q2"
  },
  {
    id: 2,
    title: "Exercícios Funcionais",
    description: "Movimentos que melhoram sua performance no dia a dia",
    embedUrl: "https://www.instagram.com/reel/DK1_ghhx8os/",
    postId: "DK1_ghhx8os"
  },
  {
    id: 3,
    title: "Técnicas de Treino",
    description: "Como executar exercícios com perfeição e segurança",
    embedUrl: "https://www.instagram.com/reel/DJ7eGe6RfJ0/",
    postId: "DJ7eGe6RfJ0"
  },
  {
    id: 4,
    title: "Força e Resistência",
    description: "Estratégias para desenvolver força e resistência muscular",
    embedUrl: "https://www.instagram.com/reel/DJRgWs6xmxD/",
    postId: "DJRgWs6xmxD"
  },
  {
    id: 5,
    title: "Condicionamento Físico",
    description: "Exercícios para melhorar seu condicionamento geral",
    embedUrl: "https://www.instagram.com/reel/DIzLyKdx5h2/",
    postId: "DIzLyKdx5h2"
  },
  {
    id: 6,
    title: "Performance Avançada",
    description: "Dicas avançadas para atletas e praticantes experientes",
    embedUrl: "https://www.instagram.com/reel/DHv96xnR4Ud/",
    postId: "DHv96xnR4Ud"
  }
];

const InstagramPostCard = ({ post }: { post: InstagramPost }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="mb-4">
          <h4 className="font-bold text-gray-900 mb-2 text-lg leading-tight">
            {post.title}
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {post.description}
          </p>
        </div>
        
        <div 
          className="relative aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => window.open(post.embedUrl, '_blank')}
        >
          {/* Video thumbnail placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">💪</div>
              <h5 className="font-semibold text-gray-700 mb-2">{post.title}</h5>
              <p className="text-sm text-gray-500 px-4">{post.description}</p>
            </div>
          </div>

          {/* Play button overlay - always visible */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div 
              className={`bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-lg transition-all duration-300 ${
                isHovered ? 'scale-110 bg-white' : 'scale-100'
              }`}
            >
              <svg className="w-16 h-16 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>

          {/* Instagram branding */}
          <div className="absolute top-4 right-4 z-20">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
          </div>

          {/* Hover overlay */}
          <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        </div>
        
        <div className="text-center mt-4">
          <button
            onClick={() => window.open(post.embedUrl, '_blank')}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Assistir Vídeo
          </button>
        </div>
      </div>
    </div>
  );
};

const InstagramVideos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
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

  

  const maxIndex = Math.max(0, instagramPosts.length - slidesToShow);

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

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white via-gray-50 to-white section-fade">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Vídeos de Treino
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Assista aos melhores vídeos com dicas práticas, exercícios e técnicas para maximizar seus resultados
          </p>
          <a 
            href="https://instagram.com/personaljuniornobrega" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 text-red-600 hover:text-red-700 font-semibold transition-colors text-lg group"
          >
            <span>@personaljuniornobrega</span>
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile */}
          {slidesToShow < instagramPosts.length && (
            <>
              <Button
                onClick={prevSlide}
                disabled={currentIndex === 0 || isTransitioning}
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm shadow-xl hover:bg-white disabled:opacity-50 w-14 h-14 -ml-7 hidden lg:flex border-gray-200 hover:border-red-300 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </Button>

              <Button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex || isTransitioning}
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm shadow-xl hover:bg-white disabled:opacity-50 w-14 h-14 -mr-7 hidden lg:flex border-gray-200 hover:border-red-300 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </Button>
            </>
          )}

          {/* Posts Carousel */}
          <div 
            className="overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              ref={sliderRef}
              className={`flex transition-transform duration-300 ease-out ${isTransitioning ? 'transition-transform' : ''}`}
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                width: `${(instagramPosts.length / slidesToShow) * 100}%`
              }}
            >
              {instagramPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="px-3 md:px-4"
                  style={{ width: `${100 / instagramPosts.length}%` }}
                >
                  <InstagramPostCard post={post} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          {maxIndex > 0 && (
            <div className="flex justify-center mt-8 space-x-3">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-red-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400 w-3'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Mobile swipe hint */}
          <div className="lg:hidden text-center mt-6">
            <p className="text-sm text-gray-500">
              Deslize para ver mais vídeos
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            onClick={() => {
              const contactSection = document.getElementById("contato");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            size="lg"
            className="px-8 py-4 text-lg bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Quero treinar com você
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramVideos;
