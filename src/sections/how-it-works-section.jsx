import SectionTitle from "../components/section-title";
import { BlurFade } from "../components/blur-fade";
import {
  ChartNoAxesCombined,
  Printer,
  Box,
  Utensils,
  ShieldCheck,
  User,
} from "lucide-react";

export default function HowItWorksSection() {
  const data = [
    {
      title: "Impressão de Etiquetas",
      description:
        "Gere e imprima etiquetas personalizadas com data de validade, fornecedor e data de chegada automaticamente.",
      icon: Printer,
    },
    {
      title: "Controle de Produtos",
      description:
        "Cadastre, edite e organize todos os seus produtos com categorias, fornecedores e saiba o que está próximo da validade.",
      icon: Box,
    },
    {
      title: "Tabelas Nutricionais",
      description:
        "Gere tabelas nutricionais personalizadas com os ingredientes e quantidades de cada produto.",
      icon: Utensils,
    },
    {
      title: "Relatórios Inteligentes",
      description:
        "Dashboards e relatórios detalhados com insights dos produtos mais utilizados na sua loja com filtros por período. Uma visão panorâmica do seu negócio.",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Segurança Total",
      description:
        "Dados protegidos com criptografia, backups automáticos e controle de acesso por usuário e função.",
      icon: ShieldCheck,
    },
    {
      title: "Gestão de Fornecedores",
      description:
        "Mantenha um cadastro completo de fornecedores com histórico de compras, avaliações e condições comerciais.",
      icon: User,
    },
  ];
  return (
    <section className="mt-20 flex flex-col items-center justify-center">
      <BlurFade delay={0.1}>
        <SectionTitle
          title="Recursos que fazem a diferença"
          description="Tudo que você precisa para gerenciar seu restaurante de forma profissional e eficiente."
        />
      </BlurFade>

      <div className="mt-15 grid w-full max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.08}>
            <div className="h-full rounded-[14px] bg-accent/40 p-0.5 pt-4 transition-all duration-300 hover:-translate-y-1">
              <div className="relative flex h-full flex-col items-center rounded-xl bg-white p-6 pb-10">
                <div className="absolute -top-6 rounded-full bg-brand-dark p-3">
                  <item.icon className="size-6 text-white" />
                </div>
                <h2 className="mt-5 text-center text-lg font-medium">
                  {item.title}
                </h2>
                <p className="mt-4 text-center text-base/6 text-brand-dark/70">
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
