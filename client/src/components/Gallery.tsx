const Gallery = () => {
  return (
    <section className="py-16 section-fade">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Transformação Real</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img 
            src="https://pixabay.com/get/g77228a5b5df31af10cae3e8f4918755364909ac0e0e63b797d65b1285dd1c515a4ac25e8ed766bdbbb8d0a01dfa6c2c4caaf46f55bb2ed1d61b37c5a0c57dc52_1280.jpg" 
            alt="Aluno em treinamento" 
            className="w-full h-56 object-cover rounded-lg shadow-md" 
          />
          
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
            alt="Treino de resistência" 
            className="w-full h-56 object-cover rounded-lg shadow-md" 
          />
          
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
            alt="Treino funcional" 
            className="w-full h-56 object-cover rounded-lg shadow-md" 
          />
          
          <img 
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
            alt="Treino personalizado" 
            className="w-full h-56 object-cover rounded-lg shadow-md" 
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
