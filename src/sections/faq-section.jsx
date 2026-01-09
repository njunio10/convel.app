import SectionTitle from "../components/section-title";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

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
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
        <h3 className="heading-2 text-left text-[#003000] text-[42px] leading-[1.02] md:col-span-7 md:text-[48px]">
          Tem perguntas? <br />
          Nós temos respostas.
        </h3>
        <p className="mt-2 max-w-prose text-left subtitle text-[#003000] text-[18px] md:col-start-9 md:col-span-4 md:mt-0">
          Aqui está tudo o que você precisa saber antes de começar.
        </p>
      </div>
      <div className="mx-auto mt-10 w-full max-w-3xl space-y-4">
        {data.map((item, index) => {
          const open = isOpen === index;
          const number = String(index + 1).padStart(2, "0");
          return (
            <div
              key={index}
              className={`rounded-[18px] border border-[#67d65d]/30 bg-[#c3f5bf] px-5 py-4 md:px-6 md:py-5 ${
                open ? "shadow-[0_10px_28px_rgba(0,48,0,0.08)]" : ""
              }`}
            >
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4"
                onClick={() => setIsOpen(open ? null : index)}
              >
                <div className="flex items-center gap-4 text-left">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#67d65d] text-[13px] font-semibold text-[#003000]">
                    {number}
                  </span>
                  <span className="text-[18px] font-medium leading-6 text-[#003000]">
                    {item.question}
                  </span>
                </div>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#67d65d] text-[#67d65d]">
                  {open ? (
                    <MinusIcon className="h-4 w-4" />
                  ) : (
                    <PlusIcon className="h-4 w-4" />
                  )}
                </span>
              </button>
              <div className={`${open ? "block" : "hidden"} pt-3`}>
                <p className="text-[15px] leading-6 text-[#003000]/80">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
