
import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type InstagramPost = {
  id: number;
  embedUrl: string;
  postId: string;
};

const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    embedUrl: "https://www.instagram.com/reel/DIzLyKdx5h2/",
    postId: "DIzLyKdx5h2"
  },
  {
    id: 2,
    embedUrl: "https://www.instagram.com/reel/DIJQ0fGRdrn/",
    postId: "DIJQ0fGRdrn"
  },
  {
    id: 3,
    embedUrl: "https://www.instagram.com/reel/DHv96xnR4ko/",
    postId: "DHv96xnR4ko"
  }
];

const InstagramPostCard = ({ post }: { post: InstagramPost }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-2">
        <div className="bg-gray-50 rounded-lg p-1">
          <div 
            className="instagram-embed-container"
            style={{ minHeight: '300px' }}
          >
            <blockquote 
              className="instagram-media" 
              data-instgrm-captioned 
              data-instgrm-permalink={`${post.embedUrl}?utm_source=ig_embed&utm_campaign=loading`}
              data-instgrm-version="14" 
              style={{
                background: '#FFF',
                border: 0,
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '280px',
                padding: 0,
                width: '99.375%'
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
                        <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                          <g>
                            <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div style={{ paddingTop: '8px' }}>
                    <div style={{
                      color: '#3897f0',
                      fontFamily: 'Arial,sans-serif',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 550,
                      lineHeight: '18px'
                    }}>Ver essa foto no Instagram</div>
                  </div>
                  <div style={{ padding: '12.5% 0' }}></div>
                </a>
                <p style={{
                  color: '#c9c8cd',
                  fontFamily: 'Arial,sans-serif',
                  fontSize: '14px',
                  lineHeight: '17px',
                  marginBottom: 0,
                  marginTop: '8px',
                  overflow: 'hidden',
                  padding: '8px 0 7px',
                  textAlign: 'center',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  <a 
                    href={`${post.embedUrl}?utm_source=ig_embed&utm_campaign=loading`}
                    style={{
                      color: '#c9c8cd',
                      fontFamily: 'Arial,sans-serif',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      lineHeight: '17px',
                      textDecoration: 'none'
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Uma publicação de @personaljuniornobrega
                  </a>
                </p>
              </div>
            </blockquote>
          </div>
        </div>
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

  const maxIndex = Math.max(0, instagramPosts.length - slidesToShow);

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
            Dicas de Treino no Instagram
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-4 md:mb-6 px-4">
            Acompanhe nossos vídeos com dicas práticas, exercícios e técnicas para maximizar seus resultados
          </p>
          <a 
            href="https://instagram.com/personaljuniornobrega" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-medium transition-colors"
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

          {/* Posts Carousel with Touch Support */}
          <div 
            className="overflow-hidden px-4 md:px-0"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              }}
            >
              {instagramPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="flex-shrink-0 px-1 md:px-2"
                  style={{ 
                    width: `${100 / slidesToShow}%`
                  }}
                >
                  <InstagramPostCard post={post} />
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
