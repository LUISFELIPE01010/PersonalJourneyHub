
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
      setIsLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

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
        
        <div className="bg-gray-50 rounded-xl p-4 mb-4 relative group">
          <div 
            className={`instagram-embed-container transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ minHeight: '400px' }}
          >
            {/* Play indicator overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-80 group-hover:opacity-100 transition-opacity">
              <div className="bg-black/20 rounded-full p-4 backdrop-blur-sm">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            
            <blockquote 
              className="instagram-media cursor-pointer hover:scale-[1.02] transition-transform duration-200" 
              data-instgrm-permalink={`${post.embedUrl}?utm_source=ig_embed&utm_campaign=loading`}
              data-instgrm-version="14" 
              style={{
                background: '#FFF',
                border: 0,
                borderRadius: '12px',
                boxShadow: 'none',
                margin: '0',
                maxWidth: '100%',
                minWidth: '280px',
                padding: 0,
                width: '100%'
              }}
            >
              <div style={{ padding: '16px' }}>
                <a 
                  href={`${post.embedUrl}?utm_source=ig_embed&utm_campaign=loading`}
                  style={{
                    background: '#FFFFFF',
                    lineHeight: 0,
                    padding: 0,
                    textAlign: 'center',
                    textDecoration: 'none',
                    width: '100%'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{
                      backgroundColor: '#F4F4F4',
                      borderRadius: '50%',
                      flexGrow: 0,
                      height: '40px',
                      marginRight: '14px',
                      width: '40px'
                    }}></div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        flexGrow: 0,
                        height: '14px',
                        marginBottom: '6px',
                        width: '100px'
                      }}></div>
                      <div style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        flexGrow: 0,
                        height: '14px',
                        width: '60px'
                      }}></div>
                    </div>
                  </div>
                  <div style={{ padding: '19% 0' }}></div>
                  <div style={{
                    display: 'block',
                    height: '50px',
                    margin: '0 auto 12px',
                    width: '50px'
                  }}>
                    <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1">
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-511.000000, -20.000000)" fill="#e10600">
                          <g>
                            <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div style={{ paddingTop: '8px' }}>
                    <div style={{
                      color: '#e10600',
                      fontFamily: 'Inter, Arial, sans-serif',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: '18px'
                    }}>Ver no Instagram</div>
                  </div>
                  <div style={{ padding: '12.5% 0' }}></div>
                </a>
              </div>
            </blockquote>
          </div>
        </div>
        
        <div className="text-center">
          <a
            href={post.embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Ver no Instagram
          </a>
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

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="//www.instagram.com/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
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
            Dicas de Treino no Instagram
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Clique nos vídeos para assistir dicas práticas, exercícios e técnicas para maximizar seus resultados
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
