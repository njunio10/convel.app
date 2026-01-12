import { ArrowUpRight } from "lucide-react";
import { ContactModal } from "../components/contact-modal";
import { useState } from "react";

export default function CallToActionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 lg:py-32">
      <div className="container-1200">
        <div className="rounded-[30px] bg-[#c3f5bf] h-[325px] overflow-hidden">
          <div className="grid h-full items-center gap-2 px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-16">
            {/* Conteúdo de texto */}
            <div className="pr-8">
              <h2 className="heading-2 mb-4 text-[#003000] text-[42px]">
                Transforme a gestão do seu restaurante
              </h2>
              <p className="subtitle mb-8 text-[#003000] text-[15px]">
                Imprima etiquetas, controle a validade dos alimentos e gere
                tabelas nutricionais com segurança, organização e tranquilidade.
              </p>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-[23px] bg-[#67d65d] px-8 text-[15px] font-semibold text-white shadow-[0_10px_26px_-2px_rgba(103,214,93,0.55),0_18px_48px_-10px_rgba(103,214,93,0.45)] transition-all hover:shadow-none"
              >
                Teste Grátis por 14 dias
                <ArrowUpRight className="size-5 transition-transform duration-500 ease-out group-hover:rotate-45" />
              </button>
            </div>

            {/* Imagem */}
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="/assets/celular.webp"
                alt="Pessoa sorrindo usando celular"
                className="h-full max-h-[325px] w-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Contato */}
      <ContactModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
