import SectionTitle from "../components/section-title";
import { BlurFade } from "../components/blur-fade";
import {
  ChartNoAxesCombined,
  Printer,
  Box,
  Utensils,
  ShieldCheck,
  User,
  Dot,
} from "lucide-react";

export default function HowItWorksSection() {
  const data = [
    {
      title: "Impressão de Etiquetas",
      description:
        "Gere e imprima etiquetas personalizadas com data de validade.",
      icon: Printer,
    },
    {
      title: "Controle de Produtos",
      description:
        "Cadastre, edite e organize todos os seus produtos e saiba o que está próximo da validade.",
      icon: Box,
    },
    {
      title: "Tabelas Nutricionais",
      description:
        "Gere tabelas nutricionais com os ingredientes e quantidades de cada produto.",
      icon: Utensils,
    },
    {
      title: "Relatórios Inteligentes",
      description:
        "Dashboards e relatórios detalhados. Uma visão panorâmica do seu negócio.",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Segurança Total",
      description: "Dados protegidos com criptografia, backups automáticos.",
      icon: ShieldCheck,
    },
    {
      title: "Gestão de Fornecedores",
      description:
        "Mantenha um cadastro completo de fornecedores com histórico de compras.",
      icon: User,
    },
  ];
  return (
    <section className="mt-23 flex flex-col items-center justify-center">
      <div className="mt-20 mb-2 inline-flex items-center text-[#67d65d]">
        <Dot className="h-8 w-8 text-[#67d65d]" />
        <span className="text-[17px] font-semibold">Funcionalidades</span>
      </div>
      <BlurFade delay={0.1}>
        <SectionTitle
          title={
            <h3 className="mt-2 heading-2 text-center text-[#003000] text-[48px]">
              Tudo que você precisa para
              <br />
              gerenciar seu restaurante
            </h3>
          }
          // description="Tudo que você precisa para gerenciar seu restaurante de forma profissional e eficiente."
        />
      </BlurFade>

      <div className="mt-10 grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.08}>
            <div className="h-full w-full transition-transform duration-300 hover:-translate-y-1">
              <div className="relative mx-auto flex h-[236px] w-[320px] flex-col items-start rounded-[30px] bg-[#c3f5bf] p-6 sm:p-8 shadow-sm group">
                <div className="w-[56px] h-[56px] rounded-[12px] bg-[#ffffff] p-3 mb-4 transition-all duration-300 group-hover:bg-[#ffffff] group-hover:shadow-[0_0_32px_#6fe965] group-hover:scale-105">
                  <item.icon className="w-[32px] h-[32px] text-[#6fe965]" />
                </div>
                <h2 className="text-lg font-semibold md:text-xl text-[#003000] text-[20px]">
                  {item.title}
                </h2>
                <p className="mt-3 text-left text-sm leading-relaxed text-[#003000] opacity-80 text-[16px]">
                  {item.description}
                </p>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
