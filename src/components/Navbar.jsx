import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react"; // icon GitHub
import logo from "@assets/logo.png"; // nhớ bỏ logo của bạn vào src/assets/logo.png

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between px-6 py-4 
                 bg-gray-900/80 backdrop-blur-md shadow-lg sticky top-0 z-50"
    >
      {/* Logo + Brand */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="DinoBot Logo"
          className="w-10 h-10 object-contain drop-shadow-[0_0_8px_#34d399]"
        />
        <h1 className="text-2xl font-bold text-emerald-400 drop-shadow-[0_0_6px_#34d399]">
          DinoBot
        </h1>
      </div>

      {/* Menu */}
      <div className="flex gap-6 items-center text-gray-300">
        <a href="#features" className="relative group transition">
          Features
          <span
            className="absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-400 
                           transition-all group-hover:w-full"
          ></span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/DuyPhatpeo/DinoBotDiscord"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-emerald-500 px-4 py-2 rounded-xl 
                     font-semibold text-emerald-400 hover:bg-gray-800 hover:scale-105 transition"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
