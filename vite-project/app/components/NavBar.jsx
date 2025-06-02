import { Button } from "../components/ui/Button";

const Navbar = () => {
  const phoneNumber = "5532984632851";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="font-bold text-xl flex items-center">
          <span className="text-fitness-purple">Personal</span>
          <span className="text-fitness-blue ml-1">Training</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#sobre"
            className="text-sm font-medium text-gray-700 hover:text-fitness-purple transition-colors">
            Sobre
          </a>
          <a
            href="#mecanismo"
            className="text-sm font-medium text-gray-700 hover:text-fitness-purple transition-colors">
            Método
          </a>
          <a
            href="#depoimentos"
            className="text-sm font-medium text-gray-700 hover:text-fitness-purple transition-colors">
            Depoimentos
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-gray-700 hover:text-fitness-purple transition-colors">
            FAQ
          </a>
        </nav>
        <Button
          className="bg-fitness-purple hover:bg-fitness-purple/90 text-white rounded-full px-6 shadow-lg"
          onClick={() => window.open(whatsappUrl, "_blank")}>
          Quero começar agora
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
