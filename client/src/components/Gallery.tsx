const Gallery = () => {
  return (
    <section className="py-20 section-fade">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Transformação Real</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <img 
            src="/corre.jpg" 
            alt="Aluno em treinamento" 
            className="w-full h-64 md:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" 
          />
          
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
            alt="Treino de resistência" 
            className="w-full h-64 md:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" 
          />
          
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
            alt="Treino funcional" 
            className="w-full h-64 md:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" 
          />
          
          <img 
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
            alt="Treino personalizado" 
            className="w-full h-64 md:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" 
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
