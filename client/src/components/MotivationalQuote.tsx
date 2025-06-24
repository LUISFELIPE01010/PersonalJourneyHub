const MotivationalQuote = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-red-600 to-red-700 section-fade">
      <div className="container-custom">
        <div className="text-center">
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed max-w-4xl mx-auto">
            "A determinação é a chave para alcançar grandes feitos. Não desvie dos seus objetivos!"
          </blockquote>
          <div className="mt-6 md:mt-8">
            <div className="w-16 h-1 bg-white mx-auto rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotivationalQuote;