import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { HeroVideoDialog } from "@/registry/magicui/hero-video-dialog";

export default function FeaturedTestimonialSection() {
  return (
    <section className="mt-20 w-full">
      <div className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] bg-[#c3f5bf] shadow-sm overflow-hidden rounded-[30px]">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10 sm:px-8 md:flex-row md:items-center md:gap-12 md:px-10">
          {/* Mídia à esquerda */}
          <div className="relative w-full overflow-hidden md:w-[48%] rounded-[30px]">
            <HeroVideoDialog
              className="w-full"
              thumbnailClassName="w-[480px] h-[400px] rounded-[30px]"
              animationStyle="top-in-bottom-out"
              videoSrc="/assets/depoimento.mp4"
              thumbnailSrc="/assets/jaldete.png"
              thumbnailAlt="Cliente da Convel sorrindo em ambiente de trabalho"
            />
          </div>

          {/* Texto à direita */}
          <div className="flex w-full flex-col justify-center md:w-[52%]">
            {/* Selo / subtítulo */}
            <div className="flex items-center gap-2 text-sm font-medium text-[#000300]">
              <CheckCircle2 className="h-4 w-4" />
              <span>Ouça quem já usa</span>
            </div>

            {/* Citação principal */}
            <h2 className="mt-4 text-xl font-semibold leading-snug text-[#000300] sm:text-2xl md:text-3xl">
              “Com a Convel, finalmente parei de me preocupar com o fluxo de
              caixa. Eu sei para onde meu dinheiro está indo — e estou realmente
              economizando.”
            </h2>

            {/* CTA */}
            <a
              href="#contato"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border-2 border-[#000300] px-4 py-2 font-semibold text-[#000300] transition hover:-translate-y-0.5 hover:bg-[#000300] hover:text-[#c3f5bf]"
            >
              Fale com a gente
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
