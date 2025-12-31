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
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-5 shadow-sm transition-colors",
        // light
        "border-brand-dark/20 bg-white hover:bg-brand/10",
        // dark
        "dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-brand-dark dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-brand-dark/70 dark:text-gray-400">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-brand-dark/80 dark:text-gray-200">
        {body}
      </blockquote>
    </figure>
  );
}

export default function OurTestimonialSection() {
  return (
    <section className="flex flex-col items-center justify-center">
      <SectionTitle
        title="Oque nossos clientes dizem"
        description="Vários clientes já transformaram sua gestão com a Convel. Confira algumas avaliações de nossos clientes."
      />

      <div className="relative mt-10 flex w-full flex-col items-center justify-center overflow-hidden py-6">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-r from-bg to-transparent dark:from-gray-900"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-l from-bg to-transparent dark:from-gray-900"></div>
      </div>
    </section>
  );
}
