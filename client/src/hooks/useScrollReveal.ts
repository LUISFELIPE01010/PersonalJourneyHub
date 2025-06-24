import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    // Aguarda um pequeno delay para garantir que o DOM está pronto
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -100px 0px'
        }
      );

      elements.forEach((element) => {
        observer.observe(element);
      });

      // Cleanup function
      return () => {
        elements.forEach((element) => {
          observer.unobserve(element);
        });
      };
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);
};