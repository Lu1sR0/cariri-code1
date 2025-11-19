"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink, Element } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto px-8 py-4 min-h-[64px] flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-x-3">
            <Image
              src="caririlogo.png"
              alt="Cariri Code Logo"
              width={1000}
              height={1000}
              className="w-auto h-16 cursor-pointer"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-bold text-lg">Cariri Code</span>
              <span className="text-sm text-gray-600">TI & Programação Para Empresas</span>
            </div>
          </div>
        </Link>
  <div className="hidden md:flex gap-x-8 items-center text-gray-700 font-medium text-lg md:text-xl ml-auto mr-16">
          <ScrollLink
            to="Projetos"
            smooth={true}
            className="hover:text-[#2420ee] cursor-pointer"
          >
            Projetos
          </ScrollLink>
          <ScrollLink
            to="services"
            smooth={true}
            className="hover:text-[#2420ee] cursor-pointer"
          >
            Serviços
          </ScrollLink>

          <ScrollLink
            to="guarentees"
            smooth={true}
            className="hover:text-[#2420ee] cursor-pointer"
          >
            Garantias
          </ScrollLink>
          <Link className="hover:text-[#2420ee] cursor-pointer" href="/meeting">
            Agendar uma reunião
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-x-4">
          <Link
            href={""}
            target="_blank"
            className="py-2
            px-10
        
            md:px-10
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
            Entrar em Contato
          </Link>
        </div>
        {/* Versão mobile abaixo */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FiX className="text-2xl text-gray-700" />
            ) : (
              <FiMenu className="text-2xl text-gray-700" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
          >
            <div className="py-4">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center gap-y-4"
              >
                <Link
                  href="/showcase"
                  className="text-lg text-gray-700 hover:text-[#2420ee] transition cursor-pointer"
                  onClick={toggleMenu}
                >
                  Projetos
                </Link>
                <ScrollLink
                  to="services"
                  smooth={true}
                  className="text-lg text-gray-700 hover:text-[#2420ee] transition cursor-pointer"
                  onClick={toggleMenu}
                >
                  Serviços
                </ScrollLink>

                <ScrollLink
                  to="guarentees"
                  smooth={true}
                  href="/"
                  className="text-lg text-gray-700 hover:text-[#2420ee] transition cursor-pointer"
                  onClick={toggleMenu}
                >
                  Garantias
                </ScrollLink>
                <Link
                  href="/meeting"
                  onClick={toggleMenu}
                  className="text-lg text-gray-700 hover:text-[#2420ee] transition cursor-pointer"
                >
                  Agendar Reunião
                </Link>
                <Link
                  href={
                    ""
                  }
                  target="_blank"
                  className="py-2 px-5 text-base bg-black text-white rounded-lg hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                  onClick={toggleMenu}
                >
                  Entrar em Contato
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
