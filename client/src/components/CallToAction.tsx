import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { FaWhatsapp } from "react-icons/fa";

const CallToAction = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGoalChange = (value: string) => {
    setFormData(prev => ({ ...prev, goal: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.name && formData.phone && formData.goal) {
      toast({
        title: "Formulário enviado",
        description: "Entraremos em contato em breve.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        goal: ""
      });
    } else {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contato" className="py-16 bg-secondary section-fade">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Está pronto para mudar sua vida com treinos de verdade?
          </h2>
          <p className="text-xl mb-8">
            Comece hoje. Sem enrolação, sem fórmula mágica.<br />
            Com treino, acompanhamento e motivação, o resultado vem.
          </p>
          
          <a 
            href="https://wa.me/5500000000000" 
            className="inline-flex items-center bg-primary text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:bg-red-700 transition transform hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-2xl mr-3" />
            Fale comigo no WhatsApp agora
          </a>
          
          <Card className="mt-12 max-w-md mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Deixe seus dados para contato</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="goal">Objetivo</Label>
                  <Select
                    value={formData.goal}
                    onValueChange={handleGoalChange}
                    required
                  >
                    <SelectTrigger id="goal">
                      <SelectValue placeholder="Selecione seu objetivo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emagrecimento">Emagrecimento</SelectItem>
                      <SelectItem value="hipertrofia">Hipertrofia</SelectItem>
                      <SelectItem value="condicionamento">Condicionamento Físico</SelectItem>
                      <SelectItem value="saude">Saúde e Bem-estar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-white font-semibold py-3 rounded-lg shadow hover:bg-red-700 transition"
                >
                  Solicitar Contato
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
