import SectionTitle from "../components/section-title";
import { BlurFade } from "../components/blur-fade";
import { CheckIcon, Dot } from "lucide-react";

export default function OurPricingSection() {
  const data = [
    {
      title: "Profissional",
      description:
        "Perfeito para restaurantes em crescimento e pequenas redes de restaurantes",
      price: "$19",
      buttonText: "Get Started",
      features: [
        "Impressão de etiquetas básicas",
        "Impressão de informações nutricionais",
        "Suporte 7 dias por semana",
        "Cadastro de fornecedores",
        "Controle de produtos",
        "Relatórios Inteligentes",
        "Comodato de impressora",
      ],
    },
    {
      title: "Enterprise",
      description:
        "Para grandes operações e redes de restaurantes com muitos estabelecimentos ",
      price: "$49",
      mostPopular: true,
      buttonText: "Upgrade Now",
      features: [
        "Impressão de etiquetas básicas",
        "Impressão de informações nutricionais",
        "Suporte 7 dias por semana",
        "Cadastro de fornecedores",
        "Controle de produtos",
        "Relatórios Inteligentes",
        "Comodato de impressora, etiquetas e ribbons",
      ],
    },
    {
      title: "Custom Plan",
      description: "Perfect for organizations and personal use",
      price: "$149",
      buttonText: "Contact Sales",
      features: [
        "Build fully customized AI models",
        "Manage teams with shared access",
        "Get a dedicated account manager",
        "Integrate private APIs securely",
        "Guaranteed uptime with SLA support",
      ],
    },
  ];

  return (
    <section className="mt-30 flex flex-col items-center justify-center">
      <div className="mb-2 flex w-full items-center justify-center text-[#67d65d]">
        <Dot className="h-8 w-8 text-[#67d65d]" />
        <span className="text-[17px] font-semibold">Orçamentos</span>
      </div>
      <SectionTitle
        title={
          <h3 className="heading-2 text-center text-[#003000] text-[48px]">
            Nossos Planos
          </h3>
        }
        description={
          <p className="mt-2 max-w-prose text-center subtitle text-[#003000] text-[18px] ">
            Planos flexíveis que crescem com o seu negócio. Comece grátis e
            evolua conforme necessário.
          </p>
        }
      />
      <div className="mt-5 grid w-full grid-cols-1 md:grid-cols-[395px_395px] md:justify-center gap-5">
        {data.slice(0, 2).map((plan, index) => (
          <BlurFade key={plan.title} delay={0.15 + index * 0.12}>
            <article className="relative flex w-[395px] h-[480px] flex-col rounded-[30px] bg-[#c3f5bf] p-6">
              {plan.mostPopular ? (
                <span className="absolute right-4 top-4 rounded-full bg-[#67d65d] px-3 py-1 text-xs font-semibold text-white">
                  POPULAR
                </span>
              ) : null}

              <div className="flex flex-col gap-2">
                <h2 className="text-[22px] font-semibold text-[#003000]">
                  {plan.title}
                </h2>

                <p className="mt-1 text-[15px] leading-6 text-[#003000]">
                  {plan.description}
                </p>
              </div>

              <button
                type="button"
                className={`mt-5 inline-flex h-11 w-full items-center justify-center rounded-[23px] px-5 text-[15px] font-semibold transition-all ${
                  plan.mostPopular
                    ? "bg-[#67d65d] text-white shadow-[0_10px_26px_-2px_rgba(103,214,93,0.55),0_18px_48px_-10px_rgba(103,214,93,0.45)] hover:shadow-none"
                    : "bg-[#003000] text-white/90"
                }`}
              >
                {plan.buttonText}
              </button>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span
                      className={`mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full ${
                        plan.mostPopular ? "bg-[#67d65d]" : "bg-[#003000]"
                      }`}
                    >
                      <CheckIcon
                        className={`h-3.5 w-3.5 ${
                          plan.mostPopular ? "text-[#ffffff]" : "text-[#ffffff]"
                        }`}
                      />
                    </span>
                    <span className="text-[15px] text-[#003000]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
