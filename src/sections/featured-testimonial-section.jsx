import { CheckCircle2, ArrowUpRight, Heart } from "lucide-react";
import { HeroVideoDialog } from "@/registry/magicui/hero-video-dialog";
import { BlurFade } from "../components/blur-fade";

export default function FeaturedTestimonialSection() {
  return (
    <section className="mt-25 w-full">
      <BlurFade delay={0.1}>
        <div className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] bg-[#c3f5bf] shadow-sm overflow-hidden rounded-[30px] h-[600px]">
          <div className="mx-auto flex h-full max-w-6xl flex-col items-center justify-center gap-10 px-6 py-10 text-center sm:px-8 md:flex-row md:items-center md:justify-center md:gap-12 md:px-10 md:text-left">
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
            <div className="flex w-full flex-col items-center justify-center text-center md:w-[52%] md:items-start md:text-left">
              {/* Selo / subtítulo */}
              <div className="flex items-center gap-2 text-sm font-medium text-[#003000]">
                <Heart className="h-5 w-5" />
                <span className="text-[16px] text-[#003000] font-semibold">
                  Ouça quem já usa
                </span>
              </div>

              {/* Citação principal */}
              <h2 className="mt-4 text-xl font-semibold leading-snug text-[#000300] sm:text-2xl md:text-3xl">
                "Com a Convel, finalmente parei de me preocupar com o fluxo de
                caixa. Eu sei para onde meu dinheiro está indo — e estou realmente
                economizando."
              </h2>

              {/* CTA */}
              <a
                href="#contato"
                className="group mt-6 inline-flex items-center gap-2 font-semibold text-[#003000] text-[15px] transition-colors"
              >
                Começar agora
                <ArrowUpRight className="size-6 transition-transform duration-500 ease-out group-hover:rotate-45" />
              </a>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
