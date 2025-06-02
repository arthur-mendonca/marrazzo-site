import { Button } from "../components/ui/Button";

const CTASection = () => {
  const phoneNumber = "5532984632851";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-fitness-purple to-fitness-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            ⏰ A decisão que separa aqueles que apenas desejam mudanças daqueles
            que realmente as conquistam...
          </h2>

          <p className="text-lg mb-6 opacity-90">
            Chegou o momento da verdade.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-8 text-left">
            <h3 className="font-medium text-xl mb-4">Você tem duas opções:</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-2">Opção 1:</h4>
                <p className="opacity-90">
                  Continuar como está. Seguir frequentando a academia sem um
                  plano estruturado ou tentando treinar em casa sem orientação
                  adequada. Continuar desperdiçando tempo e dinheiro com
                  abordagens que já provaram não funcionar para você. Aceitar a
                  frustração de ver mais um ano passar sem alcançar o corpo e a
                  saúde que você merece.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Opção 2:</h4>
                <p className="opacity-90">
                  Tomar uma decisão diferente. Investir em uma solução
                  verdadeiramente personalizada, com acompanhamento profissional
                  contínuo. Comprometer-se com um sistema baseado em evidências
                  que já transformou centenas de vidas. Dar a si mesmo a
                  oportunidade de finalmente conquistar os resultados que sempre
                  desejou.
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg font-medium mb-8">
            A escolha é sua. Mas lembre-se: <br />
            <span className="text-xl font-bold mt-2 inline-block">
              Daqui a 90 dias, você vai desejar ter começado hoje.
            </span>
          </p>

          <Button
            className="bg-white hover:bg-white/90 text-fitness-purple font-medium text-lg py-6 px-8 rounded-full shadow-lg"
            onClick={() => window.open(whatsappUrl, "_blank")}>
            CLIQUE AQUI PARA GARANTIR SUA VAGA
          </Button>

          <p className="mt-6 text-sm opacity-80">
            Lembre-se: Apenas 20 vagas disponíveis neste valor especial.
          </p>

          <p className="mt-8 text-xs opacity-70 max-w-md mx-auto">
            Nota: Os resultados podem variar de pessoa para pessoa. Seu
            comprometimento e consistência são fatores determinantes para o
            sucesso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
