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
    <section id="hero" className="pt-28 md:pt-36 pb-20 md:pb-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">+<CountUp end={100} duration={2.5} /> alunos já</span>
              <span className="block text-primary">transformam suas vidas!</span>
              <span className="block mt-3">Agora é a sua vez.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed">
              Treine com Junior Nobrega, personal trainer especializado em transformar saúde, corpo e mente com treinos personalizados para você.
            </p>
            <Button 
              onClick={scrollToContact}
              className="btn-primary text-lg px-8 py-4"
              size="lg"
            >
              Quero treinar com você
            </Button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/attached_assets/482729031_18487879282000610_862038648878488716_n.jpg" 
              alt="Personal trainer Junior Nobrega" 
              className="rounded-xl shadow-lg w-full h-auto object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;