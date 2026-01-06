import { BlurFade } from "../components/blur-fade";

export default function TopicSection() {
  return (
    <section className="mt-24 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="mb-8">
          <h3 className="heading-2 text-left text-[#000300] text-[48px]">
            Acompanhe tudo em tempo real
          </h3>
          <p className="mt-2 max-w-2xl text-left subtitle text-[#000300]/70">
            Apenas o layout reproduzido, mantendo as cores do projeto.
          </p>
        </div>

        {/* Grid principal — inspirado no layout do print */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Card grande 1 */}
          <BlurFade delay={0.1}>
            <article className="group flex flex-col justify-between rounded-[30px] bg-[#e4f3e3] p-3">
              <div className="relative flex items-center justify-center rounded-[24px] bg-white/95 p-2">
                <img
                  src="/assets/Principal.png"
                  alt="Dashboard"
                  className="h-[260px] w-full rounded-[18px] object-cover"
                />
              </div>
              <div className="px-4 py-5">
                <h4 className="text-xl font-semibold text-[#000300]">
                  Visão Inteligente
                </h4>
                <p className="mt-2 text-[#000300]/80">
                  Todas as informações em um único lugar para clareza total. Com
                  o sistema
                </p>
              </div>
            </article>
          </BlurFade>

          {/* Card grande 2 */}
          <BlurFade delay={0.18}>
            <article className="group flex flex-col justify-between rounded-[30px] bg-[#e4f3e3] p-3">
              <div className="relative flex items-center justify-center rounded-[24px] bg-white/95 p-2">
                <img
                  src="/assets/sistema.png"
                  alt="Cashflow"
                  className="h-[260px] w-full rounded-[18px] object-cover"
                />
              </div>
              <div className="px-4 py-5">
                <h4 className="text-xl font-semibold text-[#000300]">
                  Fluxo de Operações
                </h4>
                <p className="mt-2 text-[#000300]/80">
                  Acompanhe entradas, saídas e desempenho com simplicidade.
                </p>
              </div>
            </article>
          </BlurFade>
        </div>

        {/* Linha inferior — três colunas no desktop */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Card pequeno 1 */}
          <BlurFade delay={0.26}>
            <article className="rounded-[30px] bg-[#e4f3e3] p-4">
              <div className="rounded-[20px] bg-white/95 p-2">
                <img
                  src="/assets/cadastro.png"
                  alt="Spending"
                  className="h-[180px] w-full rounded-[14px] object-cover"
                />
              </div>
              <div className="px-2 pt-4">
                <h5 className="text-lg font-semibold text-[#000300]">
                  Distribuição
                </h5>
                <p className="mt-1 text-[#000300]/80">
                  Veja a divisão por categorias de forma clara.
                </p>
              </div>
            </article>
          </BlurFade>

          {/* Card pequeno 2 */}
          <BlurFade delay={0.32}>
            <article className="rounded-[30px] bg-[#e4f3e3] p-4">
              <div className="rounded-[20px] bg-white/95 p-2">
                <img
                  src="/assets/Principal_medio.png"
                  alt="Savings"
                  className="h-[180px] w-full rounded-[14px] object-cover"
                />
              </div>
              <div className="px-2 pt-4">
                <h5 className="text-lg font-semibold text-[#000300]">Metas</h5>
                <p className="mt-1 text-[#000300]/80">
                  Acompanhe objetivos e progresso com facilidade.
                </p>
              </div>
            </article>
          </BlurFade>

          {/* Coluna direita empilhada */}
          <div className="flex flex-col gap-5">
            <BlurFade delay={0.38}>
              <article className="flex items-center gap-4 rounded-[30px] bg-[#e4f3e3] px-5 py-6">
                <div className="flex -space-x-2">
                  <img
                    src="/assets/team-user-1.png"
                    alt="user 1"
                    className="h-9 w-9 rounded-full border-2 border-white"
                  />
                  <img
                    src="/assets/team-user-2.png"
                    alt="user 2"
                    className="h-9 w-9 rounded-full border-2 border-white"
                  />
                  <img
                    src="/assets/team-user-3.png"
                    alt="user 3"
                    className="h-9 w-9 rounded-full border-2 border-white"
                  />
                  <img
                    src="/assets/team-user-4.png"
                    alt="user 4"
                    className="h-9 w-9 rounded-full border-2 border-white"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#000300]">
                    Confiado por milhares de usuários
                  </p>
                  <p className="text-sm text-[#000300]/70">
                    Operação mais simples e clara
                  </p>
                </div>
              </article>
            </BlurFade>

            <BlurFade delay={0.44}>
              <article className="rounded-[30px] bg-[#e4f3e3] px-5 py-6">
                <p className="text-2xl font-bold text-[#000300]">
                  Resultados reais
                </p>
                <p className="mt-1 text-[#000300]/80">
                  Economize tempo e reduza desperdícios diariamente.
                </p>
                <button className="mt-4 inline-flex items-center justify-center rounded-full bg-[#b1ff00] px-4 py-2 text-[#003000] hover:brightness-95 transition">
                  Começar agora
                </button>
              </article>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
