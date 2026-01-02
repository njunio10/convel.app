import { BlurFade } from "../components/blur-fade";

const steps = [
  {
    label: "Passo 1",
    title: "Cadastre sua operação",
    description:
      "Configure sua cozinha em poucos minutos: produtos, categorias, fornecedores e responsáveis. A base para ter tudo sob controle.",
  },
  {
    label: "Passo 2",
    title: "Gere etiquetas inteligentes",
    description:
      "Crie e imprima etiquetas com data de produção e validade automaticamente, evitando desperdícios e garantindo conformidade.",
  },
  {
    label: "Passo 3",
    title: "Acompanhe e se antecipe",
    description:
      "Monitore o que está perto de vencer, veja alertas e relatórios claros e tome decisões rápidas para o dia a dia do seu negócio.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="mt-24 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-6xl">
        <BlurFade delay={0.1}>
          <div className="mt-15 flex w-full flex-col items-start">
            <h3 className="heading-2 text-left text-brand-dark">
              Como a Convel funciona
            </h3>
            {/* <p className="mt-3 max-w-xl text-left subtitle text-brand-dark/70">
            Três passos simples para organizar etiquetas, validade e
            informações da sua cozinha em um só lugar.
          </p> */}
          </div>
        </BlurFade>

        <div className="mt-10 grid w-full grid-cols-1 gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <BlurFade key={step.label} delay={0.15 + index * 0.12}>
              <article className="group flex h-full flex-col justify-between rounded-[26px] bg-brand-dark px-5 pb-7 pt-5 text-white shadow-[0_0_40px_rgba(0,0,0,0.45)] md:px-7 md:pt-7">
                {/* Mockup superior inspirado no layout de cartão */}
                <div className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-black via-brand-dark to-black p-4 shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
                      <span className="size-1.5 rounded-full bg-brand" />
                      <span>Convel</span>
                    </span>
                    <span className="rounded-full bg-white/5 px-3 py-1">
                      Etiquetas &amp; validade
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2 text-[10px] text-white/70">
                    <div className="col-span-2 space-y-2">
                      <div className="h-2 rounded-full bg-white/10" />
                      <div className="h-2 rounded-full bg-white/10" />
                      <div className="h-2 w-2/3 rounded-full bg-accent" />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className="h-10 rounded-lg bg-black/60" />
                      <div className="h-2 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>

                {/* Conteúdo principal do passo */}
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-black px-3 py-1 text-xs font-medium text-accent shadow-[0_0_24px_rgba(177,255,0,0.5)]">
                    <span className="size-1.5 rounded-full bg-accent" />
                    {step.label}
                  </span>

                  <h2 className="text-lg font-semibold md:text-xl">
                    {step.title}
                  </h2>

                  <p className="text-sm leading-6 text-white/75">
                    {step.description}
                  </p>
                </div>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}


