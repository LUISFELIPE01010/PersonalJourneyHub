import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CgGym } from "react-icons/cg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full bg-white z-50 transition-all duration-300 ${
        scrolled ? "shadow-md py-2" : "py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary flex items-center gap-2">
          Junior Nobrega
          <CgGym className="text-red-600" size={24} />
        </a>

        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection("sobre")}
            className="font-medium hover:text-primary transition"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection("beneficios")}
            className="font-medium hover:text-primary transition"
          >
            Benefícios
          </button>
          <button 
            onClick={() => scrollToSection("depoimentos")}
            className="font-medium hover:text-primary transition"
          >
            Depoimentos
          </button>
          <button 
            onClick={() => scrollToSection("contato")}
            className="font-medium hover:text-primary transition"
          >
            Contato
          </button>
        </nav>

        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex bg-primary text-white px-4 py-2 rounded-full font-medium items-center hover:bg-red-700 transition"
        >
          <FaWhatsapp className="mr-2" />
          <span>Fale comigo</span>
        </a>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute w-full">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("sobre")}
              className="font-medium hover:text-primary transition"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="font-medium hover:text-primary transition"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="font-medium hover:text-primary transition"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="font-medium hover:text-primary transition"
            >
              Contato
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
