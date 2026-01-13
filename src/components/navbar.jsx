import {
  MenuIcon,
  XIcon,
  ChevronDown,
  FileTextIcon,
  ImageUpIcon,
  FileVideo,
  AudioLines,
  LightbulbIcon,
  ArrowUpRight,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar({ onOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Recursos", href: "/" },
    { name: "Beneficios", href: "/products" },
    { name: "Depoimentos", href: "/stories" },
    { name: "Contato", href: "/pricing" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 flex w-full items-center justify-between border-b border-brand-dark/20  px-4 py-3.5 md:px-16 lg:px-24 transition-colors duration-300 ${
          hasScrolled ? "bg-bg/80 backdrop-blur-md" : "bg-bg backdrop-blur-0"
        }`}
      >
        <div className="container-1200 flex w-full items-center justify-between">
          <a
            href="https://prebuiltui.com?utm_source=slidex"
            className="flex items-center "
          >
            <img
              src="/assets/Logo_Principal.png"
              alt="logo"
              className="h-11 w-auto"
              width={205}
              height={48}
            />
            <img
              src="/assets/letra_escuro.png"
              alt="logo"
              className="h-7 w-auto"
              width={205}
              height={48}
            />
          </a>{" "}
          <div className="text-[16px] hidden items-center space-x-6 text-[#003000] md:flex font-medium">
            {links.map((link) =>
              link.subLinks ? (
                <div
                  key={link.name}
                  className="group relative"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="flex cursor-pointer items-center gap-1 hover:text-brand-dark">
                    {link.name}
                    <ChevronDown
                      className={`mt-px size-4 transition-transform duration-200 ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`absolute top-6 left-0 z-40 w-lg rounded-md border border-brand-dark/10 bg-white p-3 shadow-lg transition-all duration-200 ease-in-out ${
                      openDropdown === link.name
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    <p>Explore our AI tools</p>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {link.subLinks.map((sub) => (
                        <a
                          href={sub.href}
                          key={sub.name}
                          className="group/link flex items-center gap-2 rounded-md p-2 transition hover:bg-brand/10"
                        >
                          <div className="w-max gap-1 rounded-md bg-brand-dark p-2">
                            <sub.icon className="size-4.5 text-white transition duration-300 group-hover/link:scale-110" />
                          </div>
                          <div>
                            <p className="font-medium">{sub.name}</p>
                            <p className="font-light text-brand-dark/70">
                              {sub.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="transition hover:text-[#67d65d]"
                >
                  {link.name}
                </a>
              )
            )}
          </div>
          <button
            onClick={onOpenModal}
            className="relative isolate hidden md:inline-flex items-center gap-2 rounded-[23px] bg-[#c3f5bf] px-8 py-3 font-medium text-[#003000] text-[15px] transition-all group overflow-visible shadow-[0_10px_26px_-2px_rgba(195,245,191,0.55),0_18px_48px_-10px_rgba(195,245,191,0.45)] hover:shadow-none"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              Fale Conosco
              <ArrowUpRight className="size-5 transition-transform duration-500 ease-out group-hover:rotate-45" />
            </span>
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="transition active:scale-90 md:hidden"
          >
            <MenuIcon className="size-6.5" />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-white/20 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {links.map((link) => (
          <div key={link.name} className="text-center">
            {link.subLinks ? (
              <>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.name ? null : link.name
                    )
                  }
                  className="flex items-center justify-center gap-1 text-brand-dark"
                >
                  {link.name}
                  <ChevronDown
                    className={`size-4 transition-transform ${
                      openDropdown === link.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === link.name && (
                  <div className="mt-2 flex flex-col gap-2 text-left text-sm">
                    {link.subLinks.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="block text-brand-dark/70 transition hover:text-brand-dark"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <a
                href={link.href}
                className="block text-brand-dark transition-colors hover:text-[#c3f5bf]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            )}
          </div>
        ))}

        <a
          href="/"
          className="rounded-full bg-brand-dark px-8 py-2.5 font-medium text-white transition hover:opacity-90"
          onClick={() => setIsOpen(false)}
        >
          Sign Up
        </a>

        <button
          onClick={() => setIsOpen(false)}
          className="rounded-md bg-brand-dark p-2 text-white ring-white active:ring-2"
        >
          <XIcon />
        </button>
      </div>
    </>
  );
}
