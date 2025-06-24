import { useEffect, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Benefits from "../components/Benefits";
import MotivationalQuote from "../components/MotivationalQuote";
import Quiz from "../components/Quiz";
import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { LazySection, LazyTestimonials, LazyGallery, LazyInstagramVideos } from "../components/LazySection";

export default function Home() {
  const sectionsRef = useRef<HTMLElement[]>([]);
  useScrollReveal();

  useEffect(() => {
    // Set page title dynamically
    document.title = "Junior Nobrega - Personal Trainer Santos | Treinos Personalizados";
    
    // Add structured data to body
    document.body.setAttribute('itemscope', '');
    document.body.setAttribute('itemtype', 'https://schema.org/WebPage');
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section-fade');
    sections.forEach(section => {
      observer.observe(section);
      sectionsRef.current.push(section as HTMLElement);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-white text-black min-h-screen">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <LazySection height="600px">
        <LazyTestimonials />
      </LazySection>
      <MotivationalQuote />
      <LazySection height="500px">
        <LazyGallery />
      </LazySection>
      <Quiz />
      <LazySection height="700px">
        <LazyInstagramVideos />
      </LazySection>
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}