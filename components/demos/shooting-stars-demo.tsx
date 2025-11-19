import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const features = [
  {
    icon: "/icons/fast.svg",
    title: "Entrega Rápida",
    description:
      "Entrega de 1-2 semanas para a maioria dos projetos. Ligue para mais informações.",
  },
  {
    icon: "/icons/design.svg",
    title: "Design & Desenvolvimento",
    description:
      "Nós projetamos e desenvolvemos seu site com as tecnologias e tendências mais recentes.",
  },
  {
    icon: "/icons/scalable.svg",
    title: "Escalabilidade + Manutenção",
    description: "Oferecemos manutenção e escalabilidade para todos os sites.",
  },
  {
    icon: "/icons/team.svg",
    title: "Equipe de Especialistas",
    description:
      "Uma equipe de especialistas pronta para ajudar você, a qualquer momento.",
  },
  
  {
    icon: "/icons/flexible.svg",
    title: "Sites Dinâmicos",
    description: "Construímos soluções dinâmicas que são fáceis de gerenciar.",
  },
  {
    icon: "/icons/support.svg",
    title: "Suporte 24/7",
    description:
      "Oferecemos suporte 24/7 para todos os nossos clientes. Ligue para mais informações.",
  },

];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-neutral-900 flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="relative flex-col z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2">
        Nossas garantias para você.
        <p className="md:text-center mx-auto text-xl md:text-2xl text-gray-200">
          Garantimos a mais alta qualidade de trabalho, com os prazos de entrega
          mais rápidos.
        </p>
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col p-10 bg-neutral-800 rounded-xl cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-neutral-700 hover:shadow-lg hover:rotate-1"
          >
            <button
              className="
          w-16 p-4 
          animate-shine flex items-center justify-center rounded-md bg-gradient-to-br  
          from-neutral-700 to-neutral-800 
          font-medium text-slate-400 transition-colors 
          focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
          hover:bg-neutral-600"
            >
              <Image
                src={feature.icon}
                width={10000}
                height={10000}
                alt="ícone"
                className="w-8 h-8"
              />
            </button>

            <h3 className="text-xl font-bold mt-4 text-white">
              {feature.title}
            </h3>
            <p className="text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
