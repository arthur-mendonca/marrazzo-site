const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-bold text-xl flex items-center">
              <span className="text-fitness-purple">Personal</span>
              <span className="text-fitness-blue ml-1">Training</span>
            </div>
            <p className="text-gray-400 mt-2">
              Treinamento personalizado para resultados reais
            </p>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <nav className="flex flex-col space-y-2">
              <h4 className="font-semibold mb-2">Links Rápidos</h4>
              <a
                href="#sobre"
                className="text-gray-400 hover:text-white transition-colors">
                Sobre
              </a>
              <a
                href="#mecanismo"
                className="text-gray-400 hover:text-white transition-colors">
                Método
              </a>
              <a
                href="#depoimentos"
                className="text-gray-400 hover:text-white transition-colors">
                Depoimentos
              </a>
              <a
                href="#faq"
                className="text-gray-400 hover:text-white transition-colors">
                FAQ
              </a>
            </nav>

            <div className="flex flex-col space-y-2">
              <h4 className="font-semibold mb-2">Contato</h4>
              <a
                href="mailto:contato@personaltraining.com"
                className="text-gray-400 hover:text-white transition-colors">
                guilhermemarrazzodacosta@gmail.com
              </a>
              <a
                href="tel:+5511999999999"
                className="text-gray-400 hover:text-white transition-colors">
                +55 (32) 984632851
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {currentYear} Personal Training. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
