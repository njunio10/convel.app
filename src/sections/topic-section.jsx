import { BlurFade } from "../components/blur-fade";
import { ArrowUpRight } from "lucide-react";

export default function TopicSection() {
  return (
    <section className="mt-37 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <h3 className="heading-2 text-left text-[#003000] text-[42px] leading-[1.02] md:col-span-7 md:text-[48px]">
            Transforme o seu restaurante
          </h3>
          <p className="mt-2 max-w-prose text-left subtitle text-[#003000] text-[18px] md:col-start-9 md:col-span-4 md:mt-0">
            Veja tudo que você precisa para transformar a gestão do seu
            restaurante.
          </p>
        </div>

        {/* Grid principal — inspirado no layout do print */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[588px_392px] md:justify-center md:gap-4">
          {/* Card grande 1 */}
          <BlurFade delay={0.1}>
            <article className="group flex flex-col justify-between rounded-[30px] bg-[#c3f5bf] p-3 h-[436px]">
              <div className="relative flex items-center justify-center rounded-[30px] bg-white/95 p-2">
                <img
                  src="/assets/branco.png"
                  alt="Dashboard"
                  className="h-[270px] w-full rounded-[18px] object-cover"
                />
              </div>
              <div className="px-4 py-5">
                <h4 className="text-xl font-semibold text-[#003000] text-[24px]">
                  Visão Inteligente
                </h4>
                <p className="mt-2 text-[#003000] text-[16px]">
                  Todas as informações em um único lugar para clareza total.
                  Contendo uma visão clara e organizada de todos os seus
                  produtos.
                </p>
              </div>
            </article>
          </BlurFade>

          {/* Card grande 2 */}
          <BlurFade delay={0.18}>
            <article className="group flex flex-col justify-between rounded-[30px] bg-[#c3f5bf] p-3 h-[436px]">
              <div className="relative flex items-center justify-center rounded-[30px] bg-white/95 p-2">
                <img
                  src="/assets/branco.png"
                  alt="Cashflow"
                  className="h-[270px] w-full rounded-[30px] object-cover"
                />
              </div>
              <div className="px-4 py-5">
                <h4 className="text-xl font-semibold text-[#003000] text-[24px]">
                  Elimine erros manuais
                </h4>
                <p className="mt-2 text-[#003000] text-[16px]">
                  Sistema integrado reduz falhas humanas e melhora a precisão do
                  seu negócio.
                </p>
              </div>
            </article>
          </BlurFade>
        </div>

        {/* Linha inferior — três colunas no desktop */}
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Card pequeno 1 */}
          <BlurFade delay={0.26}>
            <article className="group flex flex-col rounded-[30px] bg-[#c3f5bf] p-3 h-[436.8px]">
              <div className="rounded-[30px] bg-white/95 p-2 w-[300px] h-[290px] mx-auto">
                <img
                  src="/assets/branco.png"
                  alt="Spending"
                  className="rounded-[30px] object-cover w-[300px] h-[275px]"
                />
              </div>
              <div className="px-2 pt-4">
                <h5 className="text-lg font-semibold text-[#003000] text-[24px]">
                  Conformidade
                </h5>
                <p className="mt-1 text-[#003000] text-[16px]">
                  Evite multas e esteja sempre em conformidade com a vigilancia.
                </p>
              </div>
            </article>
          </BlurFade>

          {/* Card pequeno 2 */}
          <BlurFade delay={0.32}>
            <article className="group flex flex-col rounded-[30px] bg-[#c3f5bf] p-3 h-[436.8px]">
              <div className="rounded-[30px] bg-white/95 p-2 w-[300px] h-[290px] mx-auto">
                <img
                  src="/assets/branco.png"
                  alt="Savings"
                  className="rounded-[30px] object-cover w-[300px] h-[275px]"
                />
              </div>
              <div className="px-2 pt-4">
                <h5 className="text-lg font-semibold text-[#003000] text-[24px]">
                  Economize tempo
                </h5>
                <p className="mt-1 text-[#003000] text-[16px]">
                  Automação de processos libera tempo para o seu negócio.
                </p>
              </div>
            </article>
          </BlurFade>

          {/* Coluna direita empilhada */}
          <div className="flex flex-col gap-5">
            <BlurFade delay={0.38}>
              <article className="flex flex-col items-center gap-4 rounded-[30px] bg-[#c3f5bf] px-5 py-6 h-[208px]">
                <div className="flex -space-x-3">
                  <img
                    src="/assets/team-user-1.png"
                    alt="user 1"
                    className="h-18 w-18 rounded-full border-2 border-[#67d65d]"
                  />
                  <img
                    src="/assets/team-user-2.png"
                    alt="user 2"
                    className="h-18 w-18 rounded-full border-2 border-[#67d65d]"
                  />
                  <img
                    src="/assets/team-user-3.png"
                    alt="user 3"
                    className="h-18 w-18 rounded-full border-2 border-[#67d65d]"
                  />
                  <img
                    src="/assets/team-user-4.png"
                    alt="user 4"
                    className="h-18 w-18 rounded-full border-2 border-[#67d65d]"
                  />
                </div>
                <div className="text-center">
                  <p className=" font-semibold text-[#003000] text-[24px]">
                    Confiado por vários clientes parceiros
                  </p>
                  {/* <p className="text-sm text-[#003000] text-[16px]">
                    Operação mais simples e clara
                  </p> */}
                </div>
              </article>
            </BlurFade>

            <BlurFade delay={0.44}>
              <article className="rounded-[30px] bg-[#c3f5bf] px-5 py-6 h-[208px]">
                <p className="text-lg font-semibold text-[#003000] text-[24px]">
                  Resultados reais
                </p>
                <p className="mt-1 text-[#003000] text-[16px]">
                  Economize tempo e reduza desperdícios. Automação de processos
                  libera tempo.
                </p>
                <a
                  href="#contato"
                  className="group mt-4 inline-flex items-center gap-2 font-semibold text-[#003000] text-[17px] transition-colors"
                >
                  Começar agora
                  <ArrowUpRight className="size-6 transition-transform duration-500 ease-out group-hover:rotate-45" />
                </a>
              </article>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
