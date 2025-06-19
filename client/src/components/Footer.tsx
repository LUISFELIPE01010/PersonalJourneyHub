import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-3">Junior Nobrega</h3>
            <p className="text-gray-300">Personal Trainer CREF 000000-G/XX</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://instagram.com/personaljuniornobrega" 
              className="text-white hover:text-primary transition"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a 
              href="https://www.youtube.com/channel/UCvPuoAmYTM6UC6gvcVn0K_Q" 
              className="text-white hover:text-primary transition"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-2xl" />
            </a>
            <a 
              href="https://wa.me/5513997676164" 
              className="text-white hover:text-primary transition"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Junior Nobrega Personal Trainer. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
