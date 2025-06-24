// Performance utilities for critical resource loading
export const preloadCriticalImages = () => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = '/foto.png';
  link.as = 'image';
  document.head.appendChild(link);
};

export const deferNonCriticalCSS = () => {
  const links = document.querySelectorAll('link[rel="stylesheet"]');
  links.forEach((link) => {
    if (!link.getAttribute('data-critical')) {
      link.setAttribute('media', 'print');
      link.addEventListener('load', () => {
        link.setAttribute('media', 'all');
      });
    }
  });
};

// Intersection Observer for lazy loading
export const createLazyObserver = (callback: (entry: IntersectionObserverEntry) => void) => {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach(callback);
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.1
    }
  );
};