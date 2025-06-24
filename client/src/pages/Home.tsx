import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import MotivationalQuote from "../components/MotivationalQuote";
import Gallery from "../components/Gallery";
import Quiz from "../components/Quiz";
import InstagramVideos from "../components/InstagramVideos";
import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
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
      <Quiz />
      <Testimonials />
      <InstagramVideos />
      <MotivationalQuote />
      <Gallery />
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}