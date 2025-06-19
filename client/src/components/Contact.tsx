
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-secondary section-fade">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Entre em Contato</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8 text-center">
                <FaWhatsapp className="text-green-600 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">WhatsApp</h3>
                <p className="text-gray-600 mb-6">
                  Fale comigo diretamente no WhatsApp para tirar suas dúvidas e agendar seu treino.
                </p>
                <Button asChild className="btn-primary">
                  <a 
                    href="https://wa.me/5513997676164" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Conversar no WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8 text-center">
                <FaInstagram className="text-pink-600 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Instagram</h3>
                <p className="text-gray-600 mb-6">
                  Siga meu Instagram para ver dicas, treinos e transformações dos meus alunos.
                </p>
                <Button asChild className="btn-primary">
                  <a 
                    href="https://instagram.com/personaljuniornobrega" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Seguir no Instagram
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="bg-white shadow-lg inline-block">
              <CardContent className="p-8">
                <FaYoutube className="text-red-600 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Canal no YouTube</h3>
                <p className="text-gray-600 mb-6">
                  Acesse meu canal no YouTube para vídeos de treinos e dicas de exercícios.
                </p>
                <Button asChild className="btn-primary">
                  <a 
                    href="https://www.youtube.com/channel/UCvPuoAmYTM6UC6gvcVn0K_Q" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Ver Canal no YouTube
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
