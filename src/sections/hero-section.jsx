import { ArrowRightIcon, CheckIcon, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function useScrollParallax3D({
  maxRotateX = 8, // deg
  maxTranslateZ = 60, // px
  baseRotateX = -4, // deg inicial para aparecer tilt mesmo sem scroll
  baseTranslateZ = 24, // px inicial para perceber profundidade
} = {}) {
  const containerRef = useRef(null);
  const [transform, setTransform] = useState("translateZ(0px) rotateX(0deg)");

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId = null;
    const update = () => {
      rafId = null;
      const rect = el.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const elementCenterY = rect.top + rect.height / 2;
      const viewportCenterY = viewportHeight / 2;

      // Normaliza a distância ao centro do viewport em [-1, 1]
      const normalizedY = clamp(
        (viewportCenterY - elementCenterY) / (viewportHeight / 2),
        -1,
        1
      );

      const rotateX = baseRotateX + normalizedY * maxRotateX; // inclina com base no scroll + base
      const translateZ = baseTranslateZ + normalizedY * maxTranslateZ; // profundidade baseada no scroll + base

      // Opcional: leve compensação para suavizar a percepção
      setTransform(`translateZ(${translateZ}px) rotateX(${rotateX}deg)`);
    };

    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [maxRotateX, maxTranslateZ, baseRotateX, baseTranslateZ]);

  return { containerRef, transform };
}

export default function HeroSection() {
  const { containerRef, transform } = useScrollParallax3D({
    maxRotateX: 8,
    maxTranslateZ: 60,
    baseRotateX: -4,
    baseTranslateZ: 24,
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

      <h1 className="mt-15 max-w-3xl scale-105 bg-gradient-to-r from-brand-dark to-accent bg-clip-text text-center heading-hero text-transparent md:scale-100">
        Controle total de etiquetas e validade na sua cozinha.
      </h1>
      <p className="mt-2 max-w-xl text-center subtitle text-brand-dark">
        Imprima etiquetas, controle a validade dos alimentos e gere tabelas
        nutricionais com segurança, organização e tranquilidade.
      </p>

      <a
        href="/"
        className="mt-8 flex items-center gap-2 rounded-full bg-brand-dark px-8 py-2.5 font-medium text-white transition hover:opacity-90"
      >
        <span>Faça um orçamento</span>
        <ArrowRightIcon className="size-5" />
      </a>

      <div
        ref={containerRef}
        className="mt-10 w-full max-w-7xl"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <img
          className="w-full rounded-xl border border-brand-dark/15 shadow-sm will-change-transform"
          src="/assets/image.png"
          alt="Visão do painel de controle do sistema"
          loading="lazy"
          style={{
            transform,
            transformOrigin: "center",
            transition: "transform 600ms cubic-bezier(.22,1,.36,1)",
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
