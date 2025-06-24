import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play } from "lucide-react";

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

const VideoCard = ({ video }: { video: VideoPost }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Load thumbnail when video metadata is loaded
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleLoadedMetadata = () => {
      videoElement.currentTime = 0.5; // Seek to 0.5 seconds for thumbnail
    };

    const handleSeeked = () => {
      setShowThumbnail(false); // Hide thumbnail once seeked
    };

    videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);
    videoElement.addEventListener('seeked', handleSeeked);

    return () => {
      videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
      videoElement.removeEventListener('seeked', handleSeeked);
    };
  }, []);

  const togglePlay = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (isPlaying) {
      videoElement.pause();
      setIsPlaying(false);
    } else {
      videoElement.muted = true;
      setIsMuted(true);
      setShowThumbnail(false);
      videoElement.currentTime = 0; // Start from beginning
      videoElement.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const toggleMute = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const videoElement = videoRef.current;
    if (!videoElement) return;

    videoElement.muted = !videoElement.muted;
    setIsMuted(videoElement.muted);
  };

  return (
    <div 
      className="relative bg-black rounded-xl overflow-hidden shadow-lg"
      style={{ aspectRatio: '9/16', minHeight: '300px' }}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        muted
        loop
        preload="metadata"
        onEnded={() => {
          setIsPlaying(false);
          setShowThumbnail(true);
        }}
        style={{ backgroundColor: '#000' }}
        poster="" // Remove default poster to show video frame
      >
        <source src={video.videoUrl} type="video/mp4" />
      </video>

      {/* Loading overlay while thumbnail loads */}
      {showThumbnail && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Play Button */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black/30 rounded-full flex items-center justify-center text-white z-10"
        >
          <Play className="w-6 h-6 ml-1" fill="white" />
        </button>
      )}

      {/* Pause Button */}
      {isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 bg-transparent z-10"
        />
      )}

      {/* Mute Button */}
      <button
        onClick={toggleMute}
        className="absolute top-3 right-3 w-10 h-10 bg-black/30 rounded-full flex items-center justify-center text-white z-10"
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>

      {/* Duration Badge */}
      <div className="absolute bottom-12 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
        {video.duration}
      </div>

      {/* Video Info */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
        <h3 className="font-medium text-sm mb-1">{video.title}</h3>
        <p className="text-xs opacity-80">@personaljuniornobrega</p>
      </div>
    </div>
  );
};

const InstagramVideos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const touchStartX = useRef<number>(0);
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
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, videoPosts.length - slidesToShow);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const difference = touchStartX.current - touchEndX;

    if (Math.abs(difference) > 50) {
      if (difference > 0 && currentIndex < videoPosts.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (difference < 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Dicas de Treino em Vídeo</h2>
          <p className="text-lg text-gray-600 mb-6">
            Assista nossos vídeos com dicas práticas, exercícios e técnicas para maximizar seus resultados
          </p>
          <a 
            href="https://instagram.com/personaljuniornobrega" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium"
          >
            <span>@personaljuniornobrega</span>
          </a>
        </div>

        {/* Navigation Buttons for Desktop only */}
        {maxIndex > 0 && (
          <div className="hidden md:flex justify-center gap-4 mb-8">
            <Button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              variant="outline"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              variant="outline"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Carousel for all devices */}
        <div className="relative">
          <div 
            ref={carouselRef}
            className="overflow-hidden px-4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex gap-4 transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {videoPosts.map((video) => (
                <div 
                  key={video.id} 
                  className="flex-shrink-0 w-full max-w-xs mx-auto"
                  style={{ 
                    width: slidesToShow === 1 ? '100%' : `${100 / slidesToShow}%`
                  }}
                >
                  <VideoCard video={video} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator for mobile */}
          <div className="flex justify-center mt-6 space-x-2">
            {videoPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile swipe hint */}
        <div className="md:hidden text-center mt-4">
          <p className="text-sm text-gray-500">
            ← Deslize para ver mais vídeos →
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => window.open("https://instagram.com/personaljuniornobrega", "_blank")}
            size="lg"
          >
            Veja mais dicas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramVideos;