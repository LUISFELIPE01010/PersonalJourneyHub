
import { Button } from "./ui/button";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-white section-fade">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Entre em Contato</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600">
            Pronto para transformar sua vida? Entre em contato comigo!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaWhatsapp className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">
              Fale comigo diretamente para agendar seu treino
            </p>
            <Button asChild className="bg-primary hover:bg-red-700">
              <a
                href="https://wa.me/5513997676164"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conversar no WhatsApp
              </a>
            </Button>
          </div>
          
          <div className="text-center">
            <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaInstagram className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Instagram</h3>
            <p className="text-gray-600 mb-4">
              Siga para ver dicas e transformações dos alunos
            </p>
            <Button asChild variant="outline">
              <a
                href="https://instagram.com/personaljuniornobrega"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seguir no Instagram
              </a>
            </Button>
          </div>
          
          <div className="text-center">
            <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaYoutube className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">YouTube</h3>
            <p className="text-gray-600 mb-4">
              Vídeos de treinos e dicas de exercícios
            </p>
            <Button asChild variant="outline">
              <a
                href="https://www.youtube.com/channel/UCvPuoAmYTM6UC6gvcVn0K_Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Canal no YouTube
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
