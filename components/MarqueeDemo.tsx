import { cn } from "@/lib/utils";
import Marquee from "./magicui/marquee";

const reviews = [
    {
      name: "João",
      username: "@joao",
      body: "Nunca vi nada igual. É impressionante. Estou apaixonado por isso.",
      img: "https://avatar.vercel.sh/joao",
    },
    {
      name: "Maria",
      username: "@maria",
      body: "Não sei nem o que dizer. Estou sem palavras. Isso é incrível.",
      img: "https://avatar.vercel.sh/maria",
    },
    {
      name: "Carlos",
      username: "@carlos",
      body: "Estou sem palavras. Isso é incrível. Estou apaixonado.",
      img: "https://avatar.vercel.sh/carlos",
    },
    {
      name: "Ana",
      username: "@ana",
      body: "Estou sem palavras. Isso é incrível. Estou apaixonada.",
      img: "https://avatar.vercel.sh/ana",
    },
    {
      name: "Fernanda",
      username: "@fernanda",
      body: "Estou sem palavras. Isso é incrível. Estou apaixonada.",
      img: "https://avatar.vercel.sh/fernanda",
    },
    {
      name: "Gustavo",
      username: "@gustavo",
      body: "Estou sem palavras. Isso é incrível. Estou apaixonado.",
      img: "https://avatar.vercel.sh/gustavo",
    },
  ];
  
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  
  // Componente que representa um card de review
  const ReviewCard = ({
    img,
    name,
    username,
    body,
  }: {
    img: string;
    name: string;
    username: string;
    body: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // Estilos claros
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // Estilos escuros
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt="" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    );
  };

export function MarqueeDemo() {
    return (
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
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
        {/* Gradiente para criar efeito de transição suave nas bordas */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    );
  }