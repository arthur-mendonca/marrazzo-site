// import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Button } from "./ui/Button";

const PricingSection = () => {
  const phoneNumber = "5532984632851";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const features = [
    "Avaliação Inicial Detalhada",
    "Programa de Treinamento 100% Individualizado",
    "Atualizações Periódicas do Programa",
    "Orientação Técnica Especializada",
    "Suporte Contínuo via WhatsApp",
    "Avaliações de Progresso",
    "Adaptações para Situações Especiais",
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="inline-block text-fitness-purple font-semibold text-sm md:text-base uppercase tracking-wide mb-3">
            📦 ENTREGÁVEIS
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 max-w-3xl mx-auto">
            O que está incluído na sua Consultoria Online de Personal Trainer
            por apenas R$200,00 mensais...
          </h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <div className="bg-gradient-to-r from-fitness-purple to-fitness-blue p-6 md:p-10 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Consultoria Online de Personal Trainer
                  </h3>
                  <p className="opacity-90">
                    Transformação real, adaptada à sua vida
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="text-3xl font-bold">R$200,00</div>
                  <div className="text-sm opacity-80">por mês</div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10">
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-fitness-purple/20 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-4 h-4 text-fitness-purple" />
                    </div>
                    <span className="text-gray-700">
                      <span className="font-medium text-gray-900">
                        🔹 {feature}
                      </span>
                      <br />
                      <span className="text-sm text-gray-600 mt-0.5 block">
                        {getFeatureDescription(feature)}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center">
                <Button
                  className="bg-fitness-purple hover:bg-fitness-purple/90 text-white font-medium py-6 px-8 rounded-full text-lg shadow-lg w-full md:w-auto md:min-w-[200px]"
                  onClick={() => window.open(whatsappUrl, "_blank")}>
                  Quero garantir minha vaga
                </Button>
              </div>

              <p className="text-center text-sm text-gray-600 mt-4">
                Apenas 20 vagas disponíveis neste valor especial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function getFeatureDescription(feature) {
  switch (feature) {
    case "Avaliação Inicial Detalhada":
      return "Uma análise completa do seu perfil, objetivos, histórico de treino e limitações físicas.";
    case "Programa de Treinamento 100% Individualizado":
      return "Desenvolvido exclusivamente para você com base na sua avaliação inicial.";
    case "Atualizações Periódicas do Programa":
      return "Seu programa é atualizado regularmente para garantir progresso contínuo e evitar platôs.";
    case "Orientação Técnica Especializada":
      return "Instruções detalhadas sobre a execução correta de cada exercício para máxima eficiência.";
    case "Suporte Contínuo via WhatsApp":
      return "Acesso direto para tirar dúvidas, receber ajustes e motivação sempre que precisar.";
    case "Avaliações de Progresso":
      return "Análises regulares do seu desenvolvimento para ajustes precisos no seu programa.";
    case "Adaptações para Situações Especiais":
      return "Alternativas para viagens ou semanas particularmente ocupadas em sua rotina.";
    default:
      return "";
  }
}

export default PricingSection;
