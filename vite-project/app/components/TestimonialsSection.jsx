// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "./ui/Avatar";
import { Card, CardContent } from "./ui/Card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Como atleta de powerlifting, o treinamento de força eficaz foi crucial para meu sucesso. Nos últimos dois campeonatos, consegui quebrar 12 recordes estaduais de forma consecutiva, uma conquista que ressalta a eficácia e dedicação aplicadas nos treinos. Cada sessão foi meticulosamente planejada para maximizar meu potencial, e o foco nos detalhes fez toda a diferença. Com determinação e estratégia, alcancei e superei meus objetivos, mostrando que com o treino certo, não há limites para o que podemos conquistar.",
      name: "Natalia Marrazzo",
      title: "31 anos, dona de casa",
      image: "/lovable-uploads/15b3a101-6d49-4220-b31e-fc7a29327a24.png",
    },
    {
      quote:
        "Com o treinamento de força, meu desempenho no tatame atingiu um novo nível. Como lutador de Jiu-Jitsu, achei essencial fortalecer minha resistência e explosão muscular. Graças a esse treino especializado, conquistei o título mineiro de Jiu-Jitsu. A dedicação ao treino de força não só aprimorou meu condicionamento físico, mas também aumentou minha confiança nas competições. Esse título é a prova do impacto positivo que o treinamento certo pode ter na trajetória de um atleta.",
      name: "Matheus Alfenas",
      title: "33 anos, Personal Trainer",
      image: "/lovable-uploads/641396fb-4fd9-488f-b32f-1a186fb4cb9a.png",
    },
    {
      quote:
        "Treinar com um Personal Trainer é fundamental para maximizar seu treino. Com sessões de uma hora, três vezes por semana, consegui resultados impressionantes em apenas um ano. Sob a orientação especializada do meu treinador, alcancei um marco incrível, levantando 200kg no levantamento terra. Além de melhorar minha força, ele me ajudou a eliminar dores lombares, proporcionando uma qualidade de vida muito melhor. Se você procura resultados reais e duradouros, essa é a consultoria que você precisa!",
      name: "Gustavo Santos",
      title: "36 anos, Empresário",
      image: "/lovable-uploads/b5ab79e2-4fb9-4fd9-8339-2ca3de180ca6.png",
    },
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="inline-block text-fitness-purple font-semibold text-sm md:text-base uppercase tracking-wide mb-3">
            👥 DEPOIMENTOS
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 max-w-3xl mx-auto">
            O que acontece quando pessoas comuns como você decidem investir em
            um acompanhamento verdadeiramente personalizado...
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col h-full">
                {testimonial.image && (
                  <div className="mb-6 flex justify-center">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name}`}
                      className="rounded-md w-full max-h-64 object-cover"
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <div className="text-4xl text-fitness-purple mb-4">"</div>
                  <p className="text-gray-700 mb-6 italic">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="h-px bg-gray-200 mb-4"></div>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback className="bg-fitness-purple text-white">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
