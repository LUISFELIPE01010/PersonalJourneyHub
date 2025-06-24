
import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

type VideoPost = {
  id: number;
  title: string;
  videoUrl: string;
  duration: string;
};

const videoPosts: VideoPost[] = [
  {
    id: 1,
    title: "Treino de Força para Iniciantes",
    videoUrl: "/video1.mp4",
    duration: "2:30"
  },
  {
    id: 2,
    title: "Exercícios de Cardio Eficazes",
    videoUrl: "/video2.mp4",
    duration: "2:45"
  },
  {
    id: 3,
    title: "Técnicas de Alongamento",
    videoUrl: "/video3.mp4",
    duration: "3:15"
  },
  {
    id: 4,
    title: "Treino Funcional",
    videoUrl: "/video4.mp4",
    duration: "2:50"
  }
];

const VideoCard = ({ video, isActive, onVideoClick }: { 
  video: VideoPost; 
  isActive: boolean;
  onVideoClick: () => void;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (isPlaying) {
      videoElement.pause();
      setIsPlaying(false);
    } else {
      videoElement.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const videoElement = videoRef.current;
    if (!videoElement) return;

    videoElement.muted = !videoElement.muted;
    setIsMuted(videoElement.muted);
  };

  return (
    <div 
      className="relative bg-black rounded-2xl overflow-hidden cursor-pointer group"
      style={{ aspectRatio: '9/16' }}
      onClick={onVideoClick}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        muted={isMuted}
        loop
        preload="metadata"
        onLoadedData={handleVideoLoad}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={video.videoUrl} type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Simple Play Button - Always Visible */}
      {!isPlaying && isLoaded && (
        <button
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-200 hover:scale-110"
        >
          <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
        </button>
      )}

      {/* Video Controls Overlay - Only when playing */}
      {isPlaying && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Pause Button */}
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
          >
            <div className="flex space-x-1">
              <div className="w-1.5 h-5 bg-white rounded"></div>
              <div className="w-1.5 h-5 bg-white rounded"></div>
            </div>
          </button>

          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="absolute top-3 right-3 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
        </div>
      )}

      {/* Duration Badge */}
      <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
        {video.duration}
      </div>

      {/* Video Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="font-semibold text-sm mb-1 line-clamp-2">
          {video.title}
        </h3>
        <p className="text-xs opacity-80">
          @personaljuniornobrega
        </p>
      </div>

      {/* Active Video Indicator */}
      {isActive && (
        <div className="absolute top-2 left-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
      )}
    </div>
  );
};

const InstagramVideos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 900) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 640) {
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

  const handleVideoClick = (index: number) => {
    // Se o vídeo clicado não está visível, role até ele
    const videoIndex = index - currentIndex;
    if (videoIndex < 0 || videoIndex >= slidesToShow) {
      goToSlide(Math.max(0, Math.min(index, maxIndex)));
    }
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
            ref={carouselRef}
            className="overflow-hidden px-4 md:px-6 lg:px-8 touch-pan-x"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-out gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              }}
            >
              {videoPosts.map((video, index) => (
                <div 
                  key={video.id} 
                  className="flex-shrink-0"
                  style={{ 
                    width: slidesToShow === 1 
                      ? `calc(100% - 2rem)` 
                      : `calc(${100 / slidesToShow}% - ${(slidesToShow - 1) * 1.25}rem / ${slidesToShow})`
                  }}
                >
                  <VideoCard 
                    video={video} 
                    isActive={index >= currentIndex && index < currentIndex + slidesToShow}
                    onVideoClick={() => handleVideoClick(index)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator - Mobile only */}
          {maxIndex > 0 && (
            <div className="flex justify-center mt-6 md:mt-8 space-x-1 md:space-x-2 md:hidden">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-primary w-6 h-2' 
                      : 'bg-gray-300 hover:bg-gray-400 w-2 h-2'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Swipe hint for mobile */}
          <div className="md:hidden text-center mt-4">
            <p className="text-sm text-gray-500">
              ← Deslize para ver mais vídeos →
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 md:mt-12">
          <Button 
            onClick={() => {
              window.open("https://instagram.com/personaljuniornobrega", "_blank", "noopener,noreferrer");
            }}
            size="lg"
            className="px-6 py-3 md:px-8"
          >
            Veja mais dicas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramVideos;
