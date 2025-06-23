import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-8 md:py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Junior Nobrega</h3>
            <p className="text-gray-300 text-sm md:text-base">Personal Trainer CREF 176473-G/SP</p>
          </div>

          <div className="flex space-x-4 md:space-x-6">
            <a 
              href="https://instagram.com/personaljuniornobrega" 
              className="text-white hover:text-primary transition p-2"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl md:text-2xl" />
            </a>
            <a 
              href="https://www.youtube.com/channel/UCvPuoAmYTM6UC6gvcVn0K_Q" 
              className="text-white hover:text-primary transition p-2"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-xl md:text-2xl" />
            </a>
            <a 
              href="https://wa.me/5513997676164" 
              className="text-white hover:text-primary transition p-2"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-xl md:text-2xl" />
            </a>
          </div>
        </div>

        <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-gray-800 text-center text-xs md:text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Junior Nobrega Personal Trainer. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">CREF 176473-G/SP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;