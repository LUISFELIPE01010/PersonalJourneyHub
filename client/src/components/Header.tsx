import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

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
        <a href="#" className="text-xl md:text-2xl font-bold text-primary flex items-center gap-2">
          <span className="hidden sm:inline">Junior Nobrega</span>
          <span className="sm:hidden">Junior</span>
          <CgGym className="text-red-600" size={28} />
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
          href="https://wa.me/5513997676164"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex bg-primary text-white px-4 py-2 rounded-full font-medium items-center hover:bg-red-700 transition"
        >
          <FaWhatsapp className="mr-2" />
          <span>Fale comigo</span>
        </a>

        {/* Mobile Menu using Sheet */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-0">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b">
                <div className="flex items-center gap-2">
                  <CgGym className="text-red-600" size={32} />
                  <span className="text-xl font-bold text-primary">Junior Nobrega</span>
                </div>
              </div>
              
              <nav className="flex-1 p-6">
                <div className="space-y-6">
                  <button
                    onClick={() => scrollToSection("sobre")}
                    className="block w-full text-left text-lg font-medium hover:text-primary transition py-2"
                  >
                    Sobre
                  </button>
                  <button
                    onClick={() => scrollToSection("beneficios")}
                    className="block w-full text-left text-lg font-medium hover:text-primary transition py-2"
                  >
                    Benefícios
                  </button>
                  <button
                    onClick={() => scrollToSection("depoimentos")}
                    className="block w-full text-left text-lg font-medium hover:text-primary transition py-2"
                  >
                    Depoimentos
                  </button>
                  <button
                    onClick={() => scrollToSection("contato")}
                    className="block w-full text-left text-lg font-medium hover:text-primary transition py-2"
                  >
                    Contato
                  </button>
                </div>
              </nav>
              
              <div className="p-6 border-t">
                <a
                  href="https://wa.me/5513997676164"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex bg-primary text-white px-6 py-3 rounded-full font-medium items-center justify-center hover:bg-red-700 transition w-full"
                >
                  <FaWhatsapp className="mr-2" size={20} />
                  <span>Fale comigo</span>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
