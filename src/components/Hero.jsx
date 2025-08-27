import React from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { UserPlus, LifeBuoy } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-20 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Text bên trái */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center md:items-start text-center md:text-left"
      >
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Meet{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-[0_0_16px_#34d399]">
            DinoBot
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-400 max-w-xl mb-8">
          A smart and fun Discord bot that makes your server more lively,
          secure, and entertaining. Add DinoBot to your server today!
        </p>

        {/* CTA buttons */}
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          {/* Invite Bot */}
          <a
            href="https://discord.com/oauth2/authorize?client_id=1382559506885775360"
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-400 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-emerald-500/40 hover:scale-105 transition"
          >
            <UserPlus className="w-5 h-5" />
            Invite Bot
          </a>

          {/* Join Support */}
          <a
            href="https://discord.gg/FMcRut9kPV"
            className="flex items-center gap-2 border border-emerald-500 px-6 py-3 rounded-xl font-semibold text-emerald-400 hover:bg-gray-800 hover:scale-105 transition"
          >
            <LifeBuoy className="w-5 h-5" />
            Join Support
          </a>
        </div>
      </motion.div>

      {/* Logo bên phải */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex-shrink-0"
      >
        <img
          src={logo}
          alt="DinoBot Logo"
          className="w-72 h-72 md:w-[28rem] md:h-[28rem] drop-shadow-[0_0_40px_#34d399]"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
