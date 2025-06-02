const SolutionSection = () => {
  const pillars = [
    {
      number: "1",
      title: "Personalização Científica Total",
      description:
        "Diferente de programas genéricos, desenvolvemos seu plano baseado em uma análise completa do seu corpo, histórico, objetivos e limitações. Utilizamos princípios comprovados de fisiologia do exercício para mapear suas necessidades específicas e criar um programa que funcione exclusivamente para VOCÊ, seja para treinar em casa ou otimizar seu tempo na academia.",
    },
    {
      number: "2",
      title: "Acompanhamento Contínuo e Ajustes em Tempo Real",
      description:
        "Através de nossa plataforma exclusiva, você recebe feedback constante sobre sua execução técnica, evitando lesões e garantindo máxima eficiência em cada movimento. Seu programa é ajustado semanalmente com base no seu progresso, garantindo que você nunca fique estagnado.",
    },
    {
      number: "3",
      title: "Integração Perfeita com Sua Vida Real",
      description:
        "Desenvolvemos seu programa considerando o tempo que você REALMENTE tem disponível, o acesso a equipamentos que possui, e suas preferências pessoais. Isso significa que você finalmente terá um plano que consegue seguir consistentemente, sem sacrificar sua vida pessoal ou profissional.",
    },
  ];

  return (
    <section id="mecanismo" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="inline-block text-fitness-purple font-semibold text-sm md:text-base uppercase tracking-wide mb-3">
            🔑 O MECANISMO DA SOLUÇÃO
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 max-w-3xl mx-auto">
            A abordagem em 3 pilares que está permitindo pessoas comuns
            alcançarem resultados extraordinários mesmo com apenas 3-4 horas de
            treino por semana...
          </h3>
        </div>

        <div className="mb-10 md:mb-16 md:text-center">
          <p className="text-gray-700 text-lg font-medium max-w-3xl mx-auto mb-4">
            A Consultoria Online de Personal Trainer resolve esses problemas
            fundamentais através de uma abordagem baseada em três pilares
            essenciais:
          </p>
        </div>

        <div className="space-y-8 md:space-y-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-start bg-white rounded-xl overflow-hidden shadow-md">
              <div className="bg-gradient-to-br from-fitness-purple to-fitness-blue p-6 md:p-8 text-white md:w-24 md:flex-shrink-0 flex md:flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold mr-4 md:mr-0 md:mb-2">
                  {pillar.number}
                </span>
                <span className="hidden md:inline text-sm font-medium uppercase">
                  Pilar
                </span>
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {pillar.title}
                </h4>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
