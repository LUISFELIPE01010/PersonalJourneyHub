const MotivationalQuote = () => {
  return (
    <section className="py-12 md:py-16 bg-white section-fade scroll-reveal">
      <div className="container-custom">
        <div className="text-center scroll-reveal">
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600 leading-relaxed max-w-4xl mx-auto">
            "A determinação é a chave para alcançar grandes feitos. Não desvie dos seus objetivos!"
          </blockquote>
          <div className="mt-6 md:mt-8">
            <div className="w-16 h-1 bg-red-600 mx-auto rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotivationalQuote;