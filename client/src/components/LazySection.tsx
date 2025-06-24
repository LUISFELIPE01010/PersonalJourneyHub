import { lazy, Suspense } from 'react';

// Lazy load heavy components
export const LazyInstagramVideos = lazy(() => import('./InstagramVideos'));
export const LazyGallery = lazy(() => import('./Gallery'));
export const LazyTestimonials = lazy(() => import('./Testimonials'));

// Loading fallback component
export const SectionLoader = ({ height = '400px' }: { height?: string }) => (
  <div 
    className="loading-skeleton" 
    style={{ height, minHeight: height }}
    role="presentation"
    aria-label="Carregando seção"
  />
);

// Wrapper component for lazy sections
export const LazySection = ({ 
  children, 
  height = '400px' 
}: { 
  children: React.ReactNode;
  height?: string;
}) => (
  <Suspense fallback={<SectionLoader height={height} />}>
    {children}
  </Suspense>
);