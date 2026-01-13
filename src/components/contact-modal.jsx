import { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";
import { CustomSelect } from "./custom-select";

export function ContactModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    telefone: "",
    nomeEstabelecimento: "",
    tipoNegocio: "",
    numeroFuncionarios: "",
    mensagem: "",
    aceitoTermos: false,
  });

  const scrollPosition = useRef(0);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    // Função para prevenir scroll apenas no body, não nos elementos do modal
    const preventScroll = (e) => {
      // Permite scroll em elementos com overflow (como dropdowns)
      let element = e.target;
      while (element && element !== document.body) {
        const overflow = window.getComputedStyle(element).overflow;
        const overflowY = window.getComputedStyle(element).overflowY;

        // Se o elemento tem scroll, permite
        if (
          overflow === "auto" ||
          overflow === "scroll" ||
          overflowY === "auto" ||
          overflowY === "scroll"
        ) {
          return;
        }
        element = element.parentElement;
      }

      // Bloqueia scroll no body
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    if (open) {
      // Salva a posição atual do scroll
      scrollPosition.current = window.scrollY;

      window.addEventListener("keydown", onKeyDown);

      // Previne o scroll da página
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.width = "100%";
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      // Bloqueia eventos de scroll
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      // Restaura a posição do scroll
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";

      // Volta para a posição salva
      window.scrollTo(0, scrollPosition.current);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);

      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
    };
  }, [open, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Formulário enviado:", formData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-[580px] my-8 overflow-hidden rounded-[30px] bg-[#ffffff] shadow-2xl transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão fechar */}
        <button
          type="button"
          className="absolute right-4 top-4 rounded-full bg-[#67d65d] p-2 text-[#ffffff] backdrop-blur hover:bg-[#67d65d]/80 transition-all z-10"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <X className="h-3 w-3" />
        </button>

        {/* Conteúdo do formulário */}
        <div className="p-8">
          <h2 className="text-[28px] font-bold text-[#003000] mb-2">
            Solicitar Teste Grátis
          </h2>
          <p className="text-[14px] text-[#003000]/70 mb-6">
            Preencha seus dados e entraremos em contato
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Grid de 2 colunas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nome Completo */}
              <div>
                <label className="block text-[14px] font-medium text-[#003000] mb-1.5">
                  Nome Completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nomeCompleto"
                  value={formData.nomeCompleto}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[12px] border border-[#003000]/20 bg-white px-4 py-2.5 text-[14px] text-[#003000] outline-none focus:border-[#67d65d] focus:ring-2 focus:ring-[#67d65d]/20 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[14px] font-medium text-[#003000] mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[12px] border border-[#003000]/20 bg-white px-4 py-2.5 text-[14px] text-[#003000] outline-none focus:border-[#67d65d] focus:ring-2 focus:ring-[#67d65d]/20 transition-all"
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="block text-[14px] font-medium text-[#003000] mb-1.5">
                  Telefone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[12px] border border-[#003000]/20 bg-white px-4 py-2.5 text-[14px] text-[#003000] outline-none focus:border-[#67d65d] focus:ring-2 focus:ring-[#67d65d]/20 transition-all"
                />
              </div>

              {/* Nome do Estabelecimento */}
              <div>
                <label className="block text-[14px] font-medium text-[#003000] mb-1.5">
                  Nome do Estabelecimento{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nomeEstabelecimento"
                  value={formData.nomeEstabelecimento}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[12px] border border-[#003000]/20 bg-white px-4 py-2.5 text-[14px] text-[#003000] outline-none focus:border-[#67d65d] focus:ring-2 focus:ring-[#67d65d]/20 transition-all"
                />
              </div>

              {/* Tipo de negócio */}
              <div>
                <label className="block text-[14px] font-medium text-[#003000] mb-1.5">
                  Tipo de negócio <span className="text-red-500">*</span>
                </label>
                <CustomSelect
                  name="tipoNegocio"
                  value={formData.tipoNegocio}
                  onChange={handleChange}
                  required
                  placeholder="* Selecione *"
                  options={[
                    { value: "restaurante", label: "Restaurante" },
                    { value: "lanchonete", label: "Lanchonete" },
                    { value: "padaria", label: "Padaria" },
                    { value: "cafeteria", label: "Cafeteria" },
                    { value: "hotel", label: "Hotel" },
                    { value: "buffet", label: "Buffet" },
                    { value: "outro", label: "Outro" },
                  ]}
                />
              </div>

              {/* Nº de funcionários */}
              <div>
                <label className="block text-[14px] font-medium text-[#003000] mb-1.5">
                  Nº de funcionários <span className="text-red-500">*</span>
                </label>
                <CustomSelect
                  name="numeroFuncionarios"
                  value={formData.numeroFuncionarios}
                  onChange={handleChange}
                  required
                  placeholder="* Selecione *"
                  options={[
                    { value: "1-5", label: "1 a 5 funcionários" },
                    { value: "6-10", label: "6 a 10 funcionários" },
                    { value: "11-20", label: "11 a 20 funcionários" },
                    { value: "21-50", label: "21 a 50 funcionários" },
                    { value: "51+", label: "Mais de 50 funcionários" },
                  ]}
                />
              </div>
            </div>

            {/* Mensagem */}
            <div>
              <label className="block text-[14px] font-medium text-[#003000] mb-1.5">
                Mensagem (Opcional)
              </label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows="4"
                placeholder="Conte-nos mais sobre suas necessidades..."
                className="w-full rounded-[12px] border border-[#003000]/20 bg-white px-4 py-2.5 text-[14px] text-[#003000] outline-none focus:border-[#67d65d] focus:ring-2 focus:ring-[#67d65d]/20 transition-all resize-none"
              />
            </div>

            {/* Checkbox termos */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="aceitoTermos"
                id="aceitoTermos"
                checked={formData.aceitoTermos}
                onChange={handleChange}
                required
                className="mt-1 h-4 w-4 rounded border-[#003000]/20 text-[#67d65d] focus:ring-2 focus:ring-[#67d65d]/20"
              />
              <label
                htmlFor="aceitoTermos"
                className="text-[13px] text-[#003000]/70"
              >
                Aceito os termos de uso e política de privacidade{" "}
                <span className="text-red-500">*</span>
              </label>
            </div>

            {/* Botão Enviar */}
            <button
              type="submit"
              className="w-full rounded-[23px] bg-[#67d65d] py-3 text-[15px] font-semibold text-white shadow-[0_10px_26px_-2px_rgba(103,214,93,0.55),0_18px_48px_-10px_rgba(103,214,93,0.45)] transition-all hover:shadow-none"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
