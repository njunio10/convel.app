import {
  ArrowRightIcon,
  CheckIcon,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function useStraightenOnScroll3D({
  initialRotateX = -12, // inclinação inicial (negativa inclina "para trás")
  initialTranslateZ = 40, // profundidade inicial
  distance = 200, // px de scroll para ficar totalmente reto
} = {}) {
  const containerRef = useRef(null);
  const [transform, setTransform] = useState("translateZ(0px) rotateX(0deg)");

  useEffect(() => {
    let rafId = null;

    const compute = () => {
      rafId = null;
      // Progresso do scroll de 0 (topo) até 1 (distance px)
      const progress = clamp(window.scrollY / distance, 0, 1);

      // Interpola da inclinação inicial até ficar reto (0deg)
      const rotateX = initialRotateX * (1 - progress);
      const translateZ = initialTranslateZ * (1 - progress);

      setTransform(`translateZ(${translateZ}px) rotateX(${rotateX}deg)`);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(compute);
    };

    // Estado inicial ao carregar no topo
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [initialRotateX, initialTranslateZ, distance]);

  return { containerRef, transform };
}

export default function HeroSection() {
  const { containerRef, transform } = useStraightenOnScroll3D({
    initialRotateX: 8,
    initialTranslateZ: 40,
    distance: 200,
  });
  return (
    <section className="flex flex-col items-center justify-center">
      <svg
        className="absolute inset-0 -z-10 size-full max-md:hidden"
        width="1440"
        height="720"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="var(--color-gray-200)"
          strokeOpacity=".5"
          d="M-15.227 702.342H1439.7"
        />
        <circle
          cx="711.819"
          cy="372.562"
          r="308.334"
          stroke="var(--color-gray-200)"
          strokeOpacity=".5"
        />
        <circle
          cx="16.942"
          cy="20.834"
          r="308.334"
          stroke="var(--color-gray-200)"
          strokeOpacity=".5"
        />
        <path
          stroke="var(--color-gray-200)"
          strokeOpacity=".5"
          d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7"
        />
        <circle
          cx="782.595"
          cy="411.166"
          r="308.334"
          stroke="var(--color-gray-200)"
          strokeOpacity=".5"
        />
      </svg>
      {/* <a href='https://prebuiltui.com' className='mt-32 flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium transition hover:bg-gray-100/80'>
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g clipPath='url(#a)' stroke='#1D293D' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'>
                        <path d='M6.626 10.333a1.33 1.33 0 0 0-.958-.958l-4.09-1.054a.333.333 0 0 1 0-.642l4.09-1.055a1.33 1.33 0 0 0 .958-.957l1.055-4.09a.333.333 0 0 1 .642 0l1.054 4.09a1.33 1.33 0 0 0 .958.958l4.09 1.054a.333.333 0 0 1 0 .642l-4.09 1.054a1.33 1.33 0 0 0-.958.958l-1.055 4.09a.334.334 0 0 1-.642 0zM13.336 2v2.667m1.331-1.334H12m-9.336 8v1.333M3.333 12H2' />
                    </g>
                    <defs>
                        <clipPath id='a'>
                            <path fill='#fff' d='M0 0h16v16H0z' />
                        </clipPath>
                    </defs>
                </svg>
                <p className='flex items-center gap-1'>
                    <span>Sign up now and get 200 credits free!</span>
                    <ChevronRight className='size-4' />
                </p>
            </a> */}

      {/* <h1 className="mt-15 max-w-3xl scale-105 bg-gradient-to-r from-[#003000] to-[#6fe965] bg-clip-text text-center heading-hero text-[64px] text-transparent md:scale-100">
        Controle total de etiquetas e validade na sua cozinha.
      </h1> */}

      <h1 className="mt-15 max-w-3xl scale-105 bg-[#003000]  bg-clip-text text-center heading-hero text-[64px] text-transparent md:scale-100">
        Controle total de etiquetas e validade na sua cozinha.
      </h1>
      <p className="mt-4 max-w-xl text-center subtitle text-[#003000]">
        Imprima etiquetas, controle a validade dos alimentos e gere tabelas
        nutricionais com segurança, organização e tranquilidade.
      </p>

      <a
        href="/"
        className="group mt-8 flex items-center gap-2 rounded-[23px] bg-[#c3f5bf] px-8 py-3 font-medium text-[#003000] text-[15px] transition-all overflow-visible shadow-[0_10px_26px_-2px_rgba(195,245,191,0.55),0_18px_48px_-10px_rgba(195,245,191,0.45)] hover:shadow-none"
      >
        <span className="text-[#003000] text-[15px]">Faça um orçamento</span>
        <ArrowUpRight className="size-5 transition-transform duration-500 ease-out group-hover:rotate-45" />
      </a>

      <div
        ref={containerRef}
        className="mt-10 w-full max-w-5xl"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <img
          className="w-full rounded-xl border border-brand-dark/15 shadow-sm will-change-transform"
          src="/assets/sistema3.png"
          alt="Visão do painel de controle do sistema"
          loading="lazy"
          style={{
            height: 497,
            transform,
            transformOrigin: "center",
            transition: "transform 600ms cubic-bezier(.22,1,.36,1)",
            // WebkitMaskImage:
            //   "linear-gradient(to bottom, rgba(0,0,0,1) calc(100% - 90px), rgba(0,0,0,0) 100%)",
            // maskImage:
            //   "linear-gradient(to bottom, rgba(0,0,0,1) calc(100% - 90px), rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      {/* <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-gray-500 md:gap-14">
        {specialFeatures.map((feature, index) => (
          <p className="flex items-center gap-2" key={index}>
            <CheckIcon className="size-5" />
            <span>{feature}</span>
          </p>
        ))}
      </div> */}
    </section>
  );
}
