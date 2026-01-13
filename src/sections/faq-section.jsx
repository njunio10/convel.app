import SectionTitle from "../components/section-title";
import { MinusIcon, PlusIcon, ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { BlurFade } from "../components/blur-fade";

function FaqItem({ item, number, open, onClick }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [item.answer]);

  return (
    <div
      className={`rounded-[18px]  bg-[#c3f5bf] px-5 py-4 md:px-6 md:py-5 transition-all duration-300 ease-in-out ${
        open ? "shadow-[0_10px_28px_rgba(0,48,0,0.08)]" : ""
      }`}
    >
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4"
        onClick={onClick}
      >
        <div className="flex items-center gap-4 text-left">
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-lg bg-[#ffffff] text-[16px] font-semibold text-[#67d65d] transition-all duration-300 ${
              open
                ? "shadow-[0_0_15px_rgba(103,214,93,0.8),0_0_25px_rgba(103,214,93,0.5)]"
                : ""
            }`}
          >
            {number}
          </span>
          <span className="text-[20px] font-semibold leading-6 text-[#003000]">
            {item.question}
          </span>
        </div>
        <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center text-[#67d65d] transition-all duration-300 relative">
          <MinusIcon
            className={`h-6 w-6 absolute transition-all duration-300 ${
              open
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 rotate-90 scale-0"
            }`}
          />
          <PlusIcon
            className={`h-6 w-6 absolute transition-all duration-300 ${
              open
                ? "opacity-0 rotate-90 scale-0"
                : "opacity-100 rotate-0 scale-100"
            }`}
          />
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? `${height}px` : "0px",
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div ref={contentRef} className="pt-3">
          <p
            className={`text-[15px] leading-6 text-[#003000] opacity-80 transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [isOpen, setIsOpen] = useState(0);
  const data = [
    {
      question: "Do I need coding or design experience to use PrebuiltUI?",
      answer:
        "Basic coding knowledge (HTML/CSS, Tailwind) helps, but advanced design skills aren't required. You can use components as-is or customize them.",
    },
    {
      question:
        "What is PrebuiltUI and how does it help developers and designers?",
      answer:
        "PrebuiltUI provides ready-to-use, customizable UI components and templates, saving time for developers and designers.",
    },
    {
      question: "Can I use PrebuiltUI components in my existing project?",
      answer:
        "Yes, components can be integrated into HTML, React, Next.js, Vue, and other projects using Tailwind CSS.",
    },
    {
      question: "How customizable are the generated components?",
      answer:
        "Components are highly customizable with Tailwind utility classes, theming, and structural adjustments.",
    },
    {
      question: "Does PrebuiltUI support team collaboration?",
      answer:
        "There's no clear documentation on built-in collaboration features. Check their support for team options.",
    },
    {
      question: "Can I try PrebuiltUI before purchasing a plan?",
      answer: "Yes, you can try PrebuiltUI with full access to features.",
    },
  ];

  return (
    <section className="mt-37 flex flex-col items-center justify-center">
      <BlurFade delay={0.1}>
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <h3 className="heading-2 text-left text-[#003000] text-[42px] leading-[1.02] md:col-span-7 md:text-[48px]">
            Tem perguntas? <br />
            Nós temos respostas.
          </h3>
          <p className="mt-2 max-w-prose text-left subtitle text-[#003000] text-[18px] md:col-start-9 md:col-span-4 md:mt-0">
            Aqui está tudo o que você precisa saber antes de começar.
            <a
              href="#contato"
              className="group mt-4 inline-flex items-center gap-2 font-semibold text-[#67d65d] text-[15px] transition-colors "
            >
              Fale conosco
              <ArrowUpRight className="size-6 transition-transform duration-500 ease-out group-hover:rotate-45" />
            </a>
          </p>
        </div>
      </BlurFade>
      <div className="mx-auto mt-10 w-full max-w-3xl space-y-4">
        {data.map((item, index) => {
          const open = isOpen === index;
          const number = String(index + 1).padStart(2, "0");
          return (
            <BlurFade key={index} delay={0.2 + index * 0.06}>
              <FaqItem
                item={item}
                number={number}
                open={open}
                onClick={() => setIsOpen(open ? null : index)}
              />
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
