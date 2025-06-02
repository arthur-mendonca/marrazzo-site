import { Check, X } from "lucide-react";

const TargetSection = () => {
  const perfectFor = [
    "Frequenta academia regularmente mas não vê resultados proporcionais ao seu esforço",
    "Tem uma agenda ocupada e precisa maximizar resultados com o mínimo de tempo",
    "Alterna entre treinos em casa e na academia dependendo da sua disponibilidade",
    "Já tentou seguir programas genéricos sem sucesso duradouro",
    "Está cansado de desperdiçar dinheiro com abordagens que não funcionam",
    "Tem objetivos específicos (perda de peso, ganho muscular, melhora de desempenho)",
    "Valoriza orientação profissional e personalizada",
    "Está comprometido em fazer mudanças reais, desde que tenha o suporte adequado",
  ];

  const notFor = [
    "Busca resultados milagrosos sem nenhum esforço da sua parte",
    "Não está disposto a dedicar pelo menos 3-4 horas semanais aos treinos",
    "Prefere seguir modismos fitness em vez de abordagens baseadas em evidências",
    "Não está aberto a receber e implementar orientações profissionais",
    "Busca apenas soluções temporárias, não mudanças sustentáveis",
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="inline-block text-fitness-purple font-semibold text-sm md:text-base uppercase tracking-wide mb-3">
            👥 PARA QUEM É
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 max-w-3xl mx-auto">
            Descubra se você é o tipo de pessoa que realmente se beneficiará
            desta consultoria (e para quem ela definitivamente NÃO é
            indicada)...
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-gradient-to-br from-fitness-purple/10 to-white rounded-xl p-6 md:p-8 border border-fitness-purple/20">
            <h4 className="font-bold text-xl mb-6 text-gray-800">
              Esta consultoria é PERFEITA para você se:
            </h4>

            <ul className="space-y-3">
              {perfectFor.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-fitness-purple/20 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="w-4 h-4 text-fitness-purple" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 bg-gradient-to-br from-red-50 to-white rounded-xl p-6 md:p-8 border border-red-200/30">
            <h4 className="font-bold text-xl mb-6 text-gray-800">
              Esta consultoria NÃO é para você se:
            </h4>

            <ul className="space-y-3">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
