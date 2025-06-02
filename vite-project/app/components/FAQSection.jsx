import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/Accordion";

const FAQSection = () => {
  const faqs = [
    {
      question:
        "Esta consultoria é apenas para quem treina em casa ou também para quem frequenta academia?",
      answer:
        "A consultoria é perfeitamente adaptável para ambos os cenários! Se você frequenta academia, otimizaremos seu programa para aproveitar ao máximo os equipamentos disponíveis. Se prefere treinar em casa ou alterna entre os dois ambientes, desenvolveremos estratégias específicas para cada situação.",
    },
    {
      question: "Quanto tempo preciso dedicar aos treinos?",
      answer:
        "Nossos programas são tipicamente desenhados para sessões de 30-45 minutos, 3-4 vezes por semana. No entanto, isso é totalmente adaptável à sua disponibilidade real.",
    },
    {
      question: "Como funciona o acompanhamento online?",
      answer:
        "Você recebe acesso ao nosso aplicativo exclusivo, onde encontra seus treinos detalhados com vídeos demonstrativos. Além disso, mantemos contato via WhatsApp para ajustes, dúvidas e motivação. Realizamos também videoconferências quinzenais para avaliações de progresso.",
    },
    {
      question: "E se eu tiver limitações físicas ou condições médicas?",
      answer:
        "Nosso processo de avaliação inicial identifica todas as suas limitações, e seu programa é desenvolvido considerando-as integralmente. Trabalhamos frequentemente com pessoas em recuperação de lesões ou com condições crônicas, sempre em coordenação com seus profissionais de saúde quando necessário.",
    },
    {
      question:
        "Como sei que vou receber atenção personalizada mesmo à distância?",
      answer:
        "Limitamos rigorosamente o número de clientes que atendemos simultaneamente para garantir atenção individualizada. Além disso, nosso sistema de acompanhamento permite que monitoremos seu progresso em tempo real, oferecendo ajustes imediatos quando necessário.",
    },
    {
      question:
        "O que acontece se eu precisar viajar ou tiver uma semana atípica?",
      answer:
        "A flexibilidade é uma das maiores vantagens de nosso sistema! Seu programa inclui alternativas para situações especiais, como viagens ou semanas particularmente ocupadas, garantindo que você mantenha a consistência mesmo em circunstâncias desafiadoras.",
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer:
        "Absolutamente! Não trabalhamos com contratos de longo prazo. Você pode cancelar quando desejar, embora recomendemos um compromisso mínimo de 3 meses para ver resultados transformadores.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="inline-block text-fitness-purple font-semibold text-sm md:text-base uppercase tracking-wide mb-3">
            ❓ F.A.Q.
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 max-w-3xl mx-auto">
            Respostas para as perguntas mais comuns que podem estar passando
            pela sua cabeça agora...
          </h3>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-fitness-purple hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
