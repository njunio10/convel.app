import { BlurFade } from "../components/blur-fade";
import { ArrowDownRight } from "lucide-react";

const steps = [
  {
    label: "Passo 1",
    title: "Cadastre sua operação",
    description:
      "Configure sua cozinha em poucos minutos: produtos, categorias, fornecedores e responsáveis.",
  },
  {
    label: "Passo 2",
    title: "Gere etiquetas inteligentes",
    description:
      "Crie e imprima etiquetas com data de produção e validade automaticamente.",
  },
  {
    label: "Passo 3",
    title: "Acompanhe e se antecipe",
    description:
      "Monitore o que está perto de vencer, veja alertas e relatórios claros e tome decisões.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="mt-24 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        <BlurFade delay={0.1}>
          <div className="mt-15 flex w-full flex-col items-start">
            <div className="mb-2 inline-flex items-center gap-2 text-[#67d65d]">
              <ArrowDownRight className="h-5 w-5" />
              <span className="text-[16px] font-semibold">Veja Aqui</span>
            </div>
            <h3 className="heading-2 text-left text-[#0003000] text-[48px]">
              Como funciona ?
            </h3>
            {/* <p className="mt-3 max-w-xl text-left subtitle text-brand-dark/70">
            Três passos simples para organizar etiquetas, validade e
            informações da sua cozinha em um só lugar.
          </p> */}
          </div>
        </BlurFade>

        <div className="mt-10 grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <BlurFade key={step.label} delay={0.2 + index * 0.1}>
              <article className="group flex h-[513px] flex-col justify-between rounded-[30px] bg-[#c3f5bf] px-5 pb-7 pt-2.5 text-white">
                {/* Imagem do sistema no topo do card */}
                <div className="relative mb-4 flex items-center justify-center">
                  <div className="w-[300px] h-[290px] shrink-0 rounded-[30px] overflow-hidden bg-white/95">
                    <img
                      src="/assets/branco.png"
                      alt="Tela do sistema Convel"
                      width={300}
                      height={290}
                      className="w-[300px] h-[290px] object-cover"
                    />
                  </div>
                </div>

                {/* Conteúdo principal do passo */}
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 rounded-[11px] border border-[#67d65d] bg-[#ffffff] px-3 py-1 text-xs font-medium text-[#67d65d] text-[16px]">
                    <span className="size-1.5 rounded-full bg-[#67d65d]" />
                    {step.label}
                  </span>

                  <h2 className="text-lg font-semibold md:text-xl text-[#003000] text-[24px]">
                    {step.title}
                  </h2>

                  <p className="text-sm leading-6 text-[#003000] opacity-80 text-[16px]">
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
