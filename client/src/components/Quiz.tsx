import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CheckCircle, ArrowRight, RotateCcw } from "lucide-react";

type Question = {
  id: number;
  question: string;
  options: string[];
};

type Result = {
  type: string;
  title: string;
  description: string;
  recommendation: string;
};

const questions: Question[] = [
  {
    id: 1,
    question: "Qual é seu objetivo principal?",
    options: ["Emagrecer", "Ganhar massa muscular", "Melhorar condicionamento", "Reabilitação/Saúde"]
  },
  {
    id: 2,
    question: "Qual sua experiência com exercícios?",
    options: ["Iniciante", "Intermediário", "Avançado"]
  },
  {
    id: 3,
    question: "Quantos dias por semana você pode treinar?",
    options: ["2-3 dias", "4-5 dias", "6+ dias"]
  },
  {
    id: 4,
    question: "Onde prefere treinar?",
    options: ["Academia", "Casa/Condomínio", "Ambos"]
  }
];

const results: Record<string, Result> = {
  beginner: {
    type: "Iniciante Focado",
    title: "Programa Iniciante Personalizado",
    description: "Ideal para quem está começando ou retomando os exercícios",
    recommendation: "Treino individual 2-3x por semana com foco em técnica e adaptação"
  },
  intermediate: {
    type: "Intermediário Consistente", 
    title: "Programa Intermediário Intensivo",
    description: "Para quem já tem base e quer evoluir seus resultados",
    recommendation: "Treino individual ou dupla 4-5x por semana com progressões específicas"
  },
  advanced: {
    type: "Avançado Competitivo",
    title: "Programa Avançado de Alta Performance", 
    description: "Para atletas e praticantes experientes buscando máxima performance",
    recommendation: "Treino individual intensivo 5-6x por semana com periodização avançada"
  },
  health: {
    type: "Saúde e Bem-estar",
    title: "Programa Terapêutico e Preventivo",
    description: "Foco em saúde, reabilitação e qualidade de vida",
    recommendation: "Treino adaptado individual 2-4x por semana com acompanhamento especial"
  }
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const nextQuestion = () => {
    if (!selectedAnswer) return;
    
    setAnswers([...answers, selectedAnswer]);
    setSelectedAnswer("");
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = (): Result => {
    const objective = answers[0];
    const experience = answers[1];
    const frequency = answers[2];
    
    if (objective === "Reabilitação/Saúde") return results.health;
    if (experience === "Iniciante") return results.beginner;
    if (experience === "Avançado" || frequency === "6+ dias") return results.advanced;
    return results.intermediate;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setSelectedAnswer("");
  };

  const result = showResult ? getResult() : null;

  return (
    <section id="quiz" className="py-20 bg-gray-50 section-fade">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Qual treino é ideal para você?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Responda algumas perguntas e descubra o programa perfeito para seus objetivos
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!showResult ? (
            <Card className="shadow-xl">
              <CardContent className="p-8">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
                    <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center">
                  {questions[currentQuestion].question}
                </h3>

                {/* Options */}
                <div className="space-y-4 mb-8">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:border-primary ${
                        selectedAnswer === option 
                          ? 'border-primary bg-primary/5 text-primary font-medium' 
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {selectedAnswer === option && (
                          <CheckCircle className="w-5 h-5 text-primary" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Next Button */}
                <Button 
                  onClick={nextQuestion}
                  disabled={!selectedAnswer}
                  className="w-full py-3 text-lg"
                  size="lg"
                >
                  {currentQuestion === questions.length - 1 ? "Ver Resultado" : "Próxima"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    {result?.type}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {result?.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {result?.description}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h4 className="font-semibold mb-2 text-lg">Recomendação Personalizada:</h4>
                  <p className="text-gray-700">
                    {result?.recommendation}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => {
                      window.open('https://wa.me/5513997676164?text=Olá! Acabei de fazer o quiz e quero começar meu treino personalizado!', '_blank');
                    }}
                    className="flex-1 py-3 text-lg bg-primary hover:bg-primary/90 text-white"
                    size="lg"
                  >
                    Começar Agora
                  </Button>
                  <Button 
                    onClick={resetQuiz}
                    variant="outline"
                    className="flex-1 py-3 text-lg"
                    size="lg"
                  >
                    <RotateCcw className="w-5 h-5 mr-2" />
                    Refazer Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;