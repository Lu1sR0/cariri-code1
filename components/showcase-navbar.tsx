"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const ShowcaseNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-1 flex items-center justify-between">
        <Link href="/">
          <Image
            src="caririlogo.png"
            alt="Cariri Code Logo"
            width={1000}
            height={1000}
            className="w-auto h-20 cursor-pointer"
          />
        </Link>
        <div className="hidden md:flex gap-x-6 items-center text-gray-700 font-medium text-lg">
          <Link href="/showcase" className="hover:text-[#2420ee] transition">
            Projetos
          </Link>
          <Link href="/" className="hover:text-[#2420ee] cursor-pointer">
            Serviços
          </Link>

          <Link href="/" className="hover:text-[#2420ee] cursor-pointer">
            Garantias
          </Link>
          <Link className="hover:text-[#2420ee] cursor-pointer" href="/meeting">
            Agendar uma reunião
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-x-4">
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=5535996715241&text=Oi+gostaria+de+fazer+um+orçamento&type=phone_number&app_absent=0"
            }
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
                <Link
                  href="/"
                  className="text-lg text-gray-700 hover:text-[#2420ee] transition cursor-pointer"
                  onClick={toggleMenu}
                >
                  Serviços
                </Link>

                <Link
                  href="/"
                  className="text-lg text-gray-700 hover:text-[#2420ee] transition cursor-pointer"
                  onClick={toggleMenu}
                >
                  Garantias
                </Link>
                <Link
                  href="/meeting"
                  onClick={toggleMenu}
                  className="text-lg text-gray-700 hover:text-[#2420ee] transition cursor-pointer"
                >
                  Agendar Reunião
                </Link>
                <Link
                  href={
                    "https://api.whatsapp.com/send/?phone=5535996715241&text=Oi+gostaria+de+fazer+um+orçamento&type=phone_number&app_absent=0"
                  }
                  target="_blank"
                  className="py-2 px-5 text-base bg-black text-white rounded-lg hover:bg-gradient-to-r from-blue-500 to-blue-800 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
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

export default ShowcaseNavbar;
