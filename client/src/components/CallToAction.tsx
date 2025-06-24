import { FaWhatsapp } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section id="contato" className="py-16 md:py-20 bg-secondary section-fade scroll-reveal">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 px-4">
            Está pronto para mudar sua vida com treinos de verdade?
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-10 leading-relaxed px-4">
            Comece hoje. Sem enrolação, sem fórmula mágica.<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Com treino, acompanhamento e motivação, o resultado vem.
          </p>

          <a 
            href="https://wa.me/5513997676164" 
            className="inline-flex items-center bg-primary text-white font-semibold px-6 sm:px-10 py-4 sm:py-5 rounded-lg text-base sm:text-lg shadow-lg hover:bg-red-700 transition transform hover:-translate-y-1 mx-4 ml-[0px] mr-[0px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-xl sm:text-2xl mr-2 sm:mr-3" />
            <span className="whitespace-nowrap">Fale comigo no WhatsApp agora</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;