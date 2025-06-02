import { Check } from "lucide-react";

const PromiseSection = () => {
  const promises = [
    "Se encaixa perfeitamente na sua agenda ocupada, eliminando a desculpa da 'falta de tempo'",
    "Potencializa seus treinos na academia ou em casa, maximizando cada minuto investido",
    "Respeita suas limitações físicas e preferências pessoais, tornando o processo não apenas eficaz, mas também agradável",
    "Evolui com você, ajustando-se constantemente para garantir progresso contínuo sem platôs frustrantes",
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="inline-block text-fitness-purple font-semibold text-sm md:text-base uppercase tracking-wide mb-3">
            💪 A PROMESSA
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 max-w-3xl mx-auto">
            A abordagem realista que está ajudando pessoas ocupadas a
            transformarem seus corpos de forma sustentável
          </h3>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:space-x-8 mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-black aspect-[4/3] flex items-center justify-center">
              <img
                src="/lovable-uploads/8efad2cf-f135-4815-8303-364f44c397c8.png"
                alt="Guilherme Marrazzo Logo"
                className="w-full object-contain p-4"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <p className="text-gray-600 mb-6 text-lg">
              Vamos ser honestos: não existem transformações milagrosas da noite
              para o dia. Se você está procurando promessas de "barriga
              tanquinho em 7 dias" ou "perca 10kg em um mês", este programa não
              é para você.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              O que oferecemos é algo muito mais valioso: um sistema comprovado
              que se adapta à sua realidade, respeitando seu ritmo biológico
              individual e criando mudanças genuínas que perduram.
            </p>
            <p className="text-gray-700 mb-6 text-lg font-medium">
              Imagine conquistar progressos consistentes semana após semana. Não
              através de dietas insustentáveis ou rotinas de exercícios
              impossíveis de manter, mas através de um programa meticulosamente
              personalizado que:
            </p>

            <ul className="space-y-3">
              {promises.map((promise, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-fitness-purple/20 flex items-center justify-center mt-1 mr-3">
                    <Check className="w-4 h-4 text-fitness-purple" />
                  </div>
                  <span className="text-gray-700">{promise}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-fitness-purple/10 to-fitness-blue/10 rounded-2xl p-6 md:p-10">
          <p className="text-gray-700 text-lg md:text-xl font-medium text-center">
            Apresento a você a Consultoria Online de Personal Trainer - não um
            programa de transformação rápida, mas um sistema inteligente para
            resultados reais e duradouros.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
