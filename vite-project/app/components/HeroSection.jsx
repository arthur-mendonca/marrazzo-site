import { Button } from "../components/ui/Button";

const HeroSection = () => {
  const phoneNumber = "5532984632851";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6 text-gray-800 leading-tight">
              Treinamento Personalizado Para{" "}
              <span className="text-fitness-purple">Resultados Reais</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-600 max-w-lg">
              Como pessoas ocupadas estão finalmente progredindo, seja na
              academia ou em casa, com uma abordagem sensata baseada em
              evidências.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                className="bg-fitness-purple hover:bg-purple-700 text-white font-medium text-lg py-6 px-8 rounded-full shadow-lg"
                onClick={() => window.open(whatsappUrl, "_blank")}>
                Quero Começar Agora
              </Button>
              <Button
                variant="outline"
                className="border-fitness-purple text-fitness-purple hover:bg-fitness-purple/10 font-medium text-lg py-6 px-8 rounded-full">
                Saiba Mais
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3] flex items-center justify-center">
              <img
                src="/lovable-uploads/47b0bceb-b87f-41a6-822c-db5029b196c8.png"
                alt="Medalhistas de powerlifting em competição"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-fitness-orange animate-pulse-light hidden md:block"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-fitness-blue animate-pulse-light hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
