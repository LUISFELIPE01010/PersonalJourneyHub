import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/5513997676164" 
      className="fixed bottom-8 right-8 bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:bg-green-700 transition-all hover:scale-110 z-50"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppButton;
