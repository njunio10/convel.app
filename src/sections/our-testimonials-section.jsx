import SectionTitle from "../components/section-title";
import { cn } from "../lib/utils";
import { Marquee } from "../components/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

function ReviewCard({ img, name, username, body }) {
  return (
    <figure
      className={cn(
        "relative h-[171px] w-[400px] overflow-hidden rounded-[30px] border p-5 sm:p-6 shadow-sm duration-300",
        "border-brand-dark/20 bg-[#c3f5bf]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-[#000300]">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-[#000300]">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-[#000300]">
        {body}
      </blockquote>
    </figure>
  );
}

export default function OurTestimonialSection() {
  return (
    <section className="flex w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="mt-15 w-full max-w-6xl grid gap-6 md:grid-cols-2 items-start">
        <h3 className="heading-2 text-brand-dark text-left">
          O que nossos clientes dizem
        </h3>
        <p className="subtitle text-brand-dark/70 text-left md:pl-6">
          Vários clientes já transformaram sua gestão com a Convel. Confira
          algumas avaliações de nossos clientes.
        </p>
      </div>

      <div className="relative mt-10 flex w-full max-w-6xl flex-col items-center justify-center overflow-hidden py-6">
        <Marquee className="[--duration:30s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse className="mt-4 [--duration:30s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-r from-bg to-transparent "></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-l from-bg to-transparent"></div>
      </div>
    </section>
  );
}
