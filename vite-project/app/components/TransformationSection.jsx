import { Check, X } from "lucide-react";

const TransformationSection = () => {
  const before = [
    "Passar horas na academia sem ver resultados proporcionais ao esforço",
    "Sentir dores nas costas, joelhos ou outras articulações após os treinos",
    "Perder motivação rapidamente ao não ver progresso visível",
    "Seguir planilhas genéricas que não consideram suas limitações",
    "Gastar dinheiro com mensalidades, suplementos sem retorno adequado",
    "Sentir-se perdido entre tantas informações contraditórias",
    "Ter baixa energia para atividades com família e amigos após treinos exaustivos",
    "Preocupar-se com sua saúde a longo prazo apesar dos esforços",
  ];

  const after = [
    "Maximizar cada minuto de treino com exercícios que realmente funcionam",
    "Movimentar-se com facilidade, sem dores ou desconfortos pós-treino",
    "Manter-se motivado ao ver progresso consistente e mensurável",
    "Seguir um programa personalizado que evolui com você",
    "Investir de forma inteligente em sua saúde, com retorno garantido",
    "Ter clareza e confiança no seu plano, baseado em ciência",
    "Ter energia de sobra para aproveitar momentos com quem ama",
    "Construir uma base sólida de saúde para os próximos anos",
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="inline-block text-fitness-purple font-semibold text-sm md:text-base uppercase tracking-wide mb-3">
            🔄 ANTES X DEPOIS
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 max-w-3xl mx-auto">
            A transformação que acontece quando você finalmente tem um programa
            que funciona especificamente para VOCÊ...
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="flex-1 bg-white rounded-xl shadow-md p-6 border-t-4 border-red-500 hover:shadow-lg transition-shadow">
            <h4 className="font-bold text-xl mb-6 text-gray-800 flex items-center">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <X className="w-5 h-5 text-red-500" />
              </span>
              ANTES DA CONSULTORIA
            </h4>

            <ul className="space-y-3">
              {before.map((item, index) => (
                <li key={index} className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500 hover:shadow-lg transition-shadow">
            <h4 className="font-bold text-xl mb-6 text-gray-800 flex items-center">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <Check className="w-5 h-5 text-green-500" />
              </span>
              DEPOIS DA CONSULTORIA
            </h4>

            <ul className="space-y-3">
              {after.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
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

export default TransformationSection;
