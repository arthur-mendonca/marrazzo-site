const ProblemSection = () => {
  const problems = [
    {
      title: "Programas genéricos que ignoram sua individualidade",
      description:
        'Seu corpo, histórico, limitações e objetivos são únicos. Planilhas "tamanho único" e treinos copiados de revistas ou influencers simplesmente não funcionam para a maioria das pessoas.',
    },
    {
      title: "Falta de orientação técnica adequada",
      description:
        "Mesmo frequentando academias, sem feedback correto sobre execução e progressão de cargas, você acaba executando exercícios incorretamente, o que não só impede resultados como aumenta drasticamente o risco de lesões.",
    },
    {
      title: "Incompatibilidade com sua rotina real",
      description:
        "Planos que exigem 2 horas diárias na academia são irrealistas para quem tem uma vida ocupada. Quando você não consegue seguir o plano, vem a frustração e a desistência.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="inline-block text-fitness-purple font-semibold text-sm md:text-base uppercase tracking-wide mb-3">
            🔍 O MECANISMO DO PROBLEMA
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 max-w-3xl mx-auto">
            Por que 83% das pessoas desistem dos programas de exercícios em
            menos de 90 dias (e como você pode fazer parte dos 17% que
            conseguem)...
          </h3>
        </div>

        <div className="mb-12">
          <p className="text-gray-700 text-lg md:text-center max-w-3xl mx-auto mb-8">
            Você já se perguntou por que, apesar de toda sua determinação
            inicial, acaba abandonando os exercícios depois de algumas semanas?
            Ou por que continua frequentando a academia religiosamente, mas os
            resultados simplesmente não aparecem?
          </p>
          <p className="text-gray-700 text-lg font-semibold md:text-center max-w-3xl mx-auto mb-8">
            A verdade é que o sistema tradicional de fitness está quebrado. E
            não é culpa sua.
          </p>
          <p className="text-gray-700 text-lg md:text-center max-w-3xl mx-auto mb-8">
            Aqui estão os 3 motivos principais pelos quais a maioria das pessoas
            falha:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-fitness-purple/20 text-fitness-purple flex items-center justify-center font-bold text-xl mb-4">
                {index + 1}
              </div>
              <h4 className="font-semibold text-gray-800 text-lg mb-3">
                {problem.title}
              </h4>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-fitness-pink/10 rounded-2xl p-6 md:p-8 border border-fitness-pink/20">
          <p className="text-gray-700 text-lg font-medium text-center">
            O resultado? Um ciclo interminável de começos entusiasmados seguidos
            de abandonos frustrados, ou pior: anos de treino consistente com
            resultados medíocres, cada tentativa deixando você mais desmotivado
            que a anterior.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
