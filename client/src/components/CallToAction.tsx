import { FaWhatsapp } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section id="contato" className="py-20 bg-secondary section-fade">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Está pronto para mudar sua vida com treinos de verdade?
          </h2>
          <p className="text-xl mb-10 leading-relaxed px-4">
            Comece hoje. Sem enrolação, sem fórmula mágica.<br />
            Com treino, acompanhamento e motivação, o resultado vem.
          </p>

          <a 
            href="https://wa.me/5500000000000" 
            className="inline-flex items-center bg-primary text-white font-semibold px-10 py-5 rounded-lg text-lg shadow-lg hover:bg-red-700 transition transform hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-2xl mr-3" />
            Fale comigo no WhatsApp agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;