const ExpertSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          <div className="md:w-2/5">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
              <img
                src="/lovable-uploads/415836f2-68b2-495d-9055-d19be0165084.png"
                alt="Personal trainer especialista em powerlifting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:w-3/5">
            <h2 className="inline-block text-fitness-purple font-semibold text-sm md:text-base uppercase tracking-wide mb-3">
              👨‍🏫 SOBRE O EXPERT
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Minha Jornada para o Treinamento Personalizado: Transformando
              Vidas
            </h3>

            <div className="space-y-4 text-gray-700">
              <p>
                Com 20 anos dedicados à musculação, desenvolvi não apenas força
                física, mas também uma compreensão profunda do impacto do
                treinamento personalizado. Minha experiência como atleta de
                powerlifting, aliada aos títulos em arremesso de peso e ao
                futebol americano, revelou a importância de um treino focado e
                adaptado às necessidades individuais.
              </p>
              <p>
                Essa trajetória me conduziu à consultoria online, onde aplico
                meu conhecimento para auxiliar clientes a atingirem suas metas
                fitness de forma eficaz. Cada programa é elaborado com cuidado,
                respeitando o histórico, as preferências e os objetivos
                pessoais, garantindo resultados duradouros e mensuráveis.
              </p>
              <p>
                Ao optar pelo meu serviço de consultoria, você investe em uma
                abordagem personalizada que promove saúde, bem-estar e
                transformação genuína. Vamos juntos superar limites e conquistar
                novas conquistas em sua jornada fitness.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-white px-4 py-2 rounded-full text-sm font-medium text-fitness-purple border border-fitness-purple/20 shadow-sm">
                Atleta de Powerlifting
              </div>
              <div className="bg-white px-4 py-2 rounded-full text-sm font-medium text-fitness-purple border border-fitness-purple/20 shadow-sm">
                20+ Anos de Experiência
              </div>
              <div className="bg-white px-4 py-2 rounded-full text-sm font-medium text-fitness-purple border border-fitness-purple/20 shadow-sm">
                Especialista em Treinamento Personalizado
              </div>
              <div className="bg-white px-4 py-2 rounded-full text-sm font-medium text-fitness-purple border border-fitness-purple/20 shadow-sm">
                Profissional Credenciado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
