import { CheckCircle2 } from "lucide-react";

export default function FeaturedTestimonialSection() {
  return (
    <section className="mt-20 flex w-full justify-center">
      <div className="relative flex w-full max-w-6xl flex-col gap-8 rounded-3xl bg-[#c3f5bf] px-6 py-8 text-white shadow-sm sm:px-8 md:flex-row md:items-center md:gap-10 md:px-10 md:py-10">
        {/* Cartão de vídeo / imagem à esquerda */}
        <div className="relative w-full overflow-hidden rounded-2xl bg-black/40 md:w-[48%]">
          <img
            src="/assets/image.png"
            alt="Cliente da Convel sorrindo em ambiente de trabalho"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          {/* Overlay escuro suave */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        </div>

        {/* Texto / benefícios à direita */}
        <div className="flex w-full flex-col justify-center md:w-[52%]">
          <p className="heading-2 text-left text-white">
            Transforme a gestão
            <br />
            do seu restaurante
          </p>

          <div className="mt-6 space-y-5 text-sm md:text-base">
            <div className="flex gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-white">
                  Reduza custos em até 30%
                </p>
                <p className="text-white/75">
                  Controle preciso de estoque evita desperdícios e otimiza compras.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-white">
                  Economize 5 horas por semana
                </p>
                <p className="text-white/75">
                  Automação de processos libera tempo para focar no que realmente importa.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-white">
                  Conformidade com a ANVISA
                </p>
                <p className="text-white/75">
                  Evite multas e esteja sempre em conformidade com a vigilância sanitária.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-white">
                  Elimine erros manuais
                </p>
                <p className="text-white/75">
                  Sistema integrado reduz falhas humanas e melhora a precisão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


