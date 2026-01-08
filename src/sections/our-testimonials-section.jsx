import SectionTitle from "../components/section-title";
import { cn } from "../lib/utils";
import { Marquee } from "../components/marquee";

function QuoteIcon({ className }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M10.4 6C7.42 6 5 8.42 5 11.4c0 2.98 2.42 5.4 5.4 5.4.39 0 .77-.04 1.13-.13-.25 1.47-1.17 2.75-2.47 3.56-.35.22-.28.75.14.86l2.74.68c.16.04.33 0 .46-.11 2.06-1.85 3.28-4.53 3.28-7.36C15.68 9.99 13.25 6 10.4 6zm11.2 0c-2.98 0-5.4 2.42-5.4 5.4 0 2.98 2.42 5.4 5.4 5.4.39 0 .77-.04 1.13-.13-.25 1.47-1.17 2.75-2.47 3.56-.35.22-.28.75.14.86l2.74.68c.16.04.33 0 .46-.11 2.06-1.85 3.28-4.53 3.28-7.36C26.88 9.99 24.45 6 21.6 6z" />
    </svg>
  );
}

const reviews = [
  {
    name: "Jaldete T.",
    username: "Thiosti Restaurante",
    body: "I've never seen anything like this before. It's amazing.",
    img: "/assets/jaldete.png",
  },
  {
    name: "Juliana B.",
    username: "Le Pacha Restaurante",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/assets/jaldete.png",
  },
  {
    name: "João B.",
    username: "Café da Vila",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/assets/jaldete.png",
  },
  {
    name: "Marcos B.",
    username: "Pizzaria da Vila",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/assets/jaldete.png",
  },
  {
    name: "Maria B.",
    username: "Bar da Vila",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/assets/jaldete.png",
  },
  {
    name: "Pedro B.",
    username: "Bar do Pedro",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/assets/jaldete.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

function ReviewCard({ img, name, username, body }) {
  return (
    <figure
      className={cn(
        "relative h-[171px] w-[400px] overflow-hidden rounded-[30px]  p-5 sm:p-6 shadow-sm duration-300",
        "bg-[#c3f5bf]"
      )}
    >
      <div className="h-full flex-col justify-between">
        <div className="flex flex-row items-start gap-3">
          <QuoteIcon
            className="w-14 h-14 text-[#003000] opacity-20 rotate-180 shrink-0"
            aria-hidden="true"
          />
          <blockquote className=" text-[#003000] font-semibold text-[18px]">
            {body}
          </blockquote>
        </div>
        <div className=" mt-4 flex items-center gap-2">
          <img
            className="rounded-full"
            width="40"
            height="40"
            alt=""
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className=" font-semibold text-[#003000] text-[15px]">
              {name}
            </figcaption>
            <p className="font-medium text-[#003000] text-[13px]">{username}</p>
          </div>
        </div>
      </div>
    </figure>
  );
}

export default function OurTestimonialSection() {
  return (
    <section className="mt-27 flex w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="mt-15 w-[1000px] grid gap-6 md:grid-cols-12 md:items-start md:gap-12">
        <h3 className="heading-2 text-brand-dark text-left text-[48px] md:col-span-7">
          O que nossos clientes dizem
        </h3>
        <p className="subtitle text-[#003000] text-left text-[18px] md:col-start-9 md:col-span-4 md:mt-1">
          Vários clientes já transformaram sua gestão com a Convel. Confira
          algumas avaliações parceiras.
        </p>
      </div>

      <div className="relative flex  w-[1000px] flex-col items-center justify-center overflow-hidden py-6">
        <Marquee className="[--duration:60s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse className="mt-4 [--duration:60s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-12 md:w-16 lg:w-24 bg-gradient-to-r from-bg to-transparent "></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-12 md:w-16 lg:w-24 bg-gradient-to-l from-bg to-transparent"></div>
      </div>
    </section>
  );
}
