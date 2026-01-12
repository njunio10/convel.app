import {
  DribbbleIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

// Componente customizado para ícone do WhatsApp
const WhatsAppIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="px-4 pt-10 text-[#003000] border-t border-[#67d65d] md:px-16 lg:px-24 bg-[#ffffff]">
      <div className="container-1000">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:gap-16">
          <div className="flex-1">
            <a href="https://prebuiltui.com?utm_source=slidex">
              <img
                src="assets/Principal.png"
                alt="logo"
                className="h-9 w-auto"
                width={205}
                height={48}
              />
            </a>
            <p className="mt-6 max-w-sm text-sm/6">
              Transforme a gestão do seu restaurante com nossa solução de
              impressão de etiquetas e controle de validade de alimentos.
            </p>
            <div className="mt-2 flex items-center gap-3 text-[#67d65d]">
              <a
                href="https://wa.me/5511999999999"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <WhatsAppIcon className="size-5 transition duration-200 hover:-translate-y-0.5" />
              </a>
              <a
                href="https://www.instagram.com/prebuiltui/"
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramIcon className="size-5 transition duration-200 hover:-translate-y-0.5" />
              </a>
              <a
                href="https://x.com/prebuiltui"
                aria-label="Twitter"
                title="Twitter"
              >
                <TwitterIcon className="size-5 transition duration-200 hover:-translate-y-0.5" />
              </a>
              <a
                href="https://www.linkedin.com/company/prebuiltui/"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedinIcon className="size-5 transition duration-200 hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-around gap-8 md:flex-1 md:flex-row md:gap-20">
            <div className="flex flex-col">
              <h2 className="mb-5 font-semibold text-[#003000]">Menu</h2>
              <a
                href="/"
                className="py-1.5 transition duration-200 hover:text-[#67d65d]"
                aria-label="Home"
                title="Home"
              >
                Recursos
              </a>
              <a
                href="/about"
                className="py-1.5 transition duration-200 hover:text-[#67d65d]"
                aria-label="About"
                title="About"
              >
                Beneficios
              </a>
              <a
                href="/careers"
                className="py-1.5 transition duration-200 hover:text-[#67d65d]"
                aria-label="Careers"
                title="Careers"
              >
                Depoimentos
              </a>
              <a
                href="/partners"
                className="py-1.5 transition duration-200 hover:text-[#67d65d]"
                aria-label="Partners"
                title="Partners"
              >
                Contato
              </a>
            </div>
            <div>
              <h2 className="mb-5 font-semibold text-[#003000]">
                Fale conosco
              </h2>
              <div className="max-w-xs space-y-6 text-sm">
                <p>Deixe seu contato e retornaremos o mais breve possível.</p>
                <form className="flex items-center justify-center gap-2 rounded-[30px] bg-gray-100 p-1.5">
                  <input
                    className="w-full max-w-64 rounded-[30px]  px-2 py-2 outline-none"
                    type="email"
                    placeholder="Digite seu email"
                    required
                  />
                  <button className="rounded-[30px] bg-[#67d65d] px-4 py-2 text-white transition hover:opacity-90">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-[#67d65d] py-4 md:flex-row">
          <p className="text-center">
            Copyright 2025 ©{" "}
            <a href="https://prebuiltui.com?utm_source=slidex">Convel</a> All
            Right Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy-policy"
              className="transition duration-200 hover:text-[#67d65d]"
              aria-label="Privacy Policy"
              title="Privacy Policy"
            >
              Política de Privacidade
            </a>
            <a
              href="/terms-of-service"
              className="transition duration-200 hover:text-[#67d65d]"
              aria-label="Terms of Service"
              title="Terms of Service"
            >
              Termos de Serviço
            </a>
            <a
              href="/cookie-policy"
              className="transition duration-200 hover:text-[#67d65d]"
              aria-label="Cookie Policy"
              title="Cookie Policy"
            >
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
