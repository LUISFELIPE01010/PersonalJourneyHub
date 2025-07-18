import { Button } from "./ui/button";
import CountUp from "react-countup";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-24 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24 bg-gradient-to-br from-gray-50 via-white to-gray-100" itemScope itemType="https://schema.org/Person">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Mobile: Photo first, Desktop: Text first */}
          <div className="lg:w-1/2 flex justify-center order-1 lg:order-2 scroll-reveal-right hero">
            <img 
              src="/foto.png" 
              alt="Junior Nobrega - Personal trainer profissional em Santos especializado em treinos personalizados"
              className="rounded-xl shadow-lg w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] object-cover transform-gpu will-change-transform"
              loading="eager"
              decoding="async"
              itemProp="image"
              style={{
                contentVisibility: 'auto',
                containIntrinsicSize: '320px 320px',
                imageRendering: 'auto'
              }}
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1 scroll-reveal-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" itemProp="headline">
              <span className="block">+<CountUp end={100} duration={4} /> alunos já</span>
              <span className="block text-primary">transformam suas vidas!</span>
              <span className="block mt-2 lg:mt-3">Agora é a sua vez.</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 leading-relaxed text-gray-700" itemProp="description">
              Treine com <span itemProp="name">Junior Nobrega</span>, personal trainer especializado em transformar saúde, corpo e mente com treinos personalizados para você.
            </p>
            <Button 
              onClick={scrollToContact}
              className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
              size="lg"
            >
              Quero treinar com você
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;