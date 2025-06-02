const UniqueSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-fitness-purple/5 via-fitness-blue/5 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="inline-block text-fitness-purple font-semibold text-sm md:text-base uppercase tracking-wide mb-3">
            🌟 O MECANISMO ÚNICO
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 max-w-3xl mx-auto">
            A expertise de um atleta de powerlifting e profissional credenciado
            que domina com maestria os fundamentos que realmente importam para
            sua transformação...
          </h3>
        </div>

        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-8">
              O que realmente diferencia esta consultoria não é um "sistema
              revolucionário" ou uma "fórmula mágica" - é algo muito mais
              valioso: a combinação única de conhecimento científico,
              experiência prática e domínio técnico dos movimentos fundamentais
              que realmente transformam corpos.
            </p>

            <h4 className="font-bold text-xl mb-4 text-gray-800">
              Expertise Comprovada nos Fundamentos:
            </h4>
            <p className="text-gray-700 mb-8">
              Como atleta ativo de powerlifting e profissional credenciado,
              trago para sua consultoria o domínio técnico refinado dos três
              pilares do desenvolvimento físico - agachamento, supino e
              levantamento terra - os mesmos movimentos que formam a base do
              treinamento de atletas de elite mundial.
            </p>

            <h4 className="font-bold text-xl mb-4 text-gray-800">
              Por que isso importa para você:
            </h4>
            <p className="text-gray-700 mb-4">
              Mesmo que seu objetivo não seja competir em powerlifting, estes
              movimentos fundamentais, quando executados com técnica perfeita e
              adaptados às suas necessidades específicas, produzem resultados
              incomparáveis em termos de:
            </p>

            <ul className="list-disc pl-5 mb-8 space-y-2 text-gray-700">
              <li>
                <span className="font-medium">
                  Desenvolvimento muscular total
                </span>{" "}
                - Ativando mais grupos musculares em menos tempo
              </li>
              <li>
                <span className="font-medium">Fortalecimento estrutural</span> -
                Criando uma base sólida que previne lesões no dia a dia
              </li>
              <li>
                <span className="font-medium">Eficiência metabólica</span> -
                Maximizando o gasto calórico durante e após o treino
              </li>
              <li>
                <span className="font-medium">Transferência funcional</span> -
                Melhorando seu desempenho em atividades cotidianas e outros
                esportes
              </li>
            </ul>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-xl mb-8 bg-gray-100">
              <img
                src="/lovable-uploads/1e4c1dec-12bb-4bdc-ac2d-cb07068e0a59.png"
                alt="Atleta de powerlifting realizando levantamento terra com barra pesada"
                className="w-full h-full object-cover"
              />
            </div>

            <h4 className="font-bold text-xl mb-4 text-gray-800">
              Individualização Baseada em Experiência Real:
            </h4>
            <p className="text-gray-700 mb-4">
              Diferente de "especialistas" que apenas repetem teorias, cada
              ajuste no seu programa é baseado em:
            </p>

            <ul className="list-disc pl-5 mb-8 space-y-2 text-gray-700">
              <li>
                Anos de experiência prática com centenas de alunos de diferentes
                perfis
              </li>
              <li>
                Conhecimento adquirido através da minha própria jornada como
                atleta
              </li>
              <li>
                Compreensão profunda de como adaptar movimentos técnicos para
                diferentes tipos de corpo, limitações e objetivos
              </li>
            </ul>

            <div className="p-6 bg-white rounded-xl border border-fitness-purple/20 shadow-md">
              <p className="text-gray-700 font-medium">
                Não existe "fórmula secreta" - existe conhecimento aplicado com
                precisão às suas necessidades específicas. É esta combinação de
                expertise técnica e capacidade de personalização que torna cada
                programa verdadeiramente único e eficaz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
