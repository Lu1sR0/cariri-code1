"use client";

import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Element } from "react-scroll";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { AnimatedListDemo } from "@/components/AnimatedList";
import { AnimatedTooltipPreview } from "@/components/Tooltip";
import { TabsDemo } from "@/components/ProjectsTabs";
import WordFadeIn from "@/components/magicui/word-fade-in";
import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";

export default function Home() {
  return (
    <div
      className="overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
    >
      <Navbar />

      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <h1>
            <CoverDemo />
          </h1>
          <p
            className="md:text-center
           text-xl md:text-2xl my-2 md:my-2 md:w-4/5 mx-auto text-gray-500"
          >
            Agende uma ligação conosco para discutir seu projeto e obter um
            orçamento em minutos
          </p>

          <div
            className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   "
          >
            <Link
              href="/meeting"
              className="py-3 
            px-10
            md:px-16
      md:text-xl
      hover:bg-[#2420ee]
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Agendar Reunião
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#2420ee"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-[#2420ee]" />
                Criação de Logos
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#2420ee"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-[#2420ee]" />
                Desenvolvimento de sites
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#2420ee"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-[#2420ee]" />
                Identidade Visual
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#2420ee"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-[#2420ee]" />
                Muito mais
              </p>
            </BoxReveal>
          </div>

          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Confiado por marcas e empresas de todo o país
              </h1>
              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-[#2420ee] text-3xl md:text-5xl">
                    <NumberTicker value={1000} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Clientes Felizes
                    </p>
                  </h1>
                </div>

                <div className="w-px bg-gray-300 self-stretch"></div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-[#2420ee] text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={100} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Projetos entregues
                    </p>
                  </h1>
                </div>
              </div>
            </div>

            <section className="mt-10 md:w-4/5">
              <AnimatedTooltipPreview />
            </section>
          </div>
        </div>
      </main>
         <Element name="Projetos"
        className="py-16
         md:py-16md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto"
      >
        <div className="flex items-center justify-center relative">
          <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center   z-20   "
            words="Código Que Ajudam Seu Negócio a evoluir"
          />
        </div>
        <p
          className="md:text-center text-xl md:text-2xl my-6 py-6
         md:py-6   md:w-4/5 mx-auto text-gray-500"
        >
          Dê uma olhada em alguns dos nossos projetos recentes.
        </p>

        <BlurFadeDemo />
        
              </Element>
      
      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto ">
          <h1>
            <WordPullUpDemo />
          </h1>
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            Todos os nossos serviços são projetados para ajudar seu negócio a se
            destacar
          </p>
          <TabsDemo />
        </div>
      </Element>

      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>
      {/* Seção de reviews */}
      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>
      <section className="md:px-16 xl:px-24 py-12 md:py-32">
        <h2 className="text-center text-3xl md:text-5xl font-bold">
          O que nossos clientes estão dizendo
        </h2>
        <div className="my-12">
          <AnimatedListDemo />
        </div>
      </section>
      {/* <ChatComponent /> */}
      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>
      <Footer />
    </div>
  );
}
