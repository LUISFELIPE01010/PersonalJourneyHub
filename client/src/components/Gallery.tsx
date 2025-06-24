const Gallery = () => {
  return (
    <section className="py-20 section-fade scroll-reveal">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Transformação Real</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <div className="group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <img 
              src="/corre.jpg" 
              alt="Aluno em treinamento" 
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
          
          <div className="group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" 
              alt="Treino de resistência" 
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
          
          <div className="group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <img 
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" 
              alt="Treino funcional" 
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
          
          <div className="group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <img 
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" 
              alt="Treino personalizado" 
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
