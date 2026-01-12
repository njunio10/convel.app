import { useEffect, useState } from "react";
import { X } from "lucide-react";

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

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-[480px] overflow-hidden rounded-[30px] bg-[#e8ede8] shadow-2xl transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão fechar */}
        <button
          type="button"
          className="absolute right-4 top-4 rounded-full bg-white/50 p-2 text-[#003000] backdrop-blur hover:bg-white/80 transition-all z-10"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <X className="h-5 w-5" />
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
                Nome do Estabelecimento <span className="text-red-500">*</span>
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
              <select
                name="tipoNegocio"
                value={formData.tipoNegocio}
                onChange={handleChange}
                required
                className="w-full rounded-[12px] border border-[#003000]/20 bg-white px-4 py-2.5 text-[14px] text-[#003000] outline-none focus:border-[#67d65d] focus:ring-2 focus:ring-[#67d65d]/20 transition-all appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:1.2em] bg-[right_0.5rem_center] bg-no-repeat"
              >
                <option value="">* Selecione *</option>
                <option value="restaurante">Restaurante</option>
                <option value="lanchonete">Lanchonete</option>
                <option value="padaria">Padaria</option>
                <option value="cafeteria">Cafeteria</option>
                <option value="hotel">Hotel</option>
                <option value="buffet">Buffet</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            {/* Nº de funcionários */}
            <div>
              <label className="block text-[14px] font-medium text-[#003000] mb-1.5">
                Nº de funcionários <span className="text-red-500">*</span>
              </label>
              <select
                name="numeroFuncionarios"
                value={formData.numeroFuncionarios}
                onChange={handleChange}
                required
                className="w-full rounded-[12px] border border-[#003000]/20 bg-white px-4 py-2.5 text-[14px] text-[#003000] outline-none focus:border-[#67d65d] focus:ring-2 focus:ring-[#67d65d]/20 transition-all appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:1.2em] bg-[right_0.5rem_center] bg-no-repeat"
              >
                <option value="">* Selecione *</option>
                <option value="1-5">1 a 5 funcionários</option>
                <option value="6-10">6 a 10 funcionários</option>
                <option value="11-20">11 a 20 funcionários</option>
                <option value="21-50">21 a 50 funcionários</option>
                <option value="51+">Mais de 50 funcionários</option>
              </select>
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
              className="w-full rounded-[23px] bg-gradient-to-r from-[#c3f5bf] to-[#67d65d] py-3 text-[15px] font-semibold text-[#003000] shadow-[0_10px_26px_-2px_rgba(103,214,93,0.55),0_18px_48px_-10px_rgba(103,214,93,0.45)] transition-all hover:shadow-none hover:scale-[0.98]"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
