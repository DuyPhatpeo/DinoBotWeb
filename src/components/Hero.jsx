import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BOT_LINKS } from "../data/botData";
import logo from "../assets/logo.png";
import { UserPlus, LifeBuoy, Zap, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* 1. Jockie Music style Watermark Icon Pattern Wallpaper */}
      <div className="absolute inset-0 dino-watermark-pattern pointer-events-none opacity-40 z-0"></div>

      {/* 2. Soft Ambient Vignette & Center Spotlight */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#171a21]/50 to-[#171a21] pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1100px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        {/* ========================================================================= */}
        {/* Left Column: Mascot Illustration with Speed Lines (Jockie Music Style)    */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex items-center justify-center relative"
        >
          {/* Dynamic Speed Lines & Particle Accents */}
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96 flex items-center justify-center">
            {/* Artistic Speed Trails (Left-facing SVG dashed & curved lines) */}
            <svg
              className="absolute -left-10 sm:-left-16 top-1/2 -translate-y-1/2 w-64 sm:w-80 h-48 pointer-events-none select-none text-emerald-400/40"
              viewBox="0 0 200 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M 180 20 L 40 20" strokeDasharray="12 8" />
              <path d="M 190 45 L 20 45" strokeWidth="3" />
              <path d="M 170 70 L 30 70" strokeDasharray="16 10" />
              <path d="M 185 95 L 50 95" strokeDasharray="8 6" />
              {/* Floating Sparkle Symbols */}
              <text x="70" y="15" fill="currentColor" fontSize="14" fontWeight="bold">✦</text>
              <text x="35" y="85" fill="currentColor" fontSize="12">✦</text>
              <text x="60" y="110" fill="currentColor" fontSize="16">✦</text>
            </svg>

            {/* Glowing Backdrop Circle */}
            <div className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-emerald-500/20 to-teal-400/10 blur-2xl pointer-events-none"></div>

            {/* Mascot Image with Gentle Floating Animation */}
            <div className="relative z-10 animate-dino-float">
              <img
                src={logo}
                alt="DinoBot Mascot"
                className="w-56 h-56 sm:w-72 sm:h-72 lg:w-84 lg:h-84 object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* Right Column: Giant Bold Typography & Pill Buttons (Jockie Music Style)   */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
        >
          {/* Giant Bold Headline */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.08]">
              DINOBOT
            </h1>
            <div className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 bg-clip-text text-transparent uppercase">
              BOT DISCORD TOÀN DIỆN
            </div>
          </div>

          {/* Subtitle / Tagline */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-medium">
            Quản trị tự động, mini games nút bấm giải trí và tiện ích cộng đồng thông minh — tất cả trong một bot duy nhất.
          </p>

          {/* Row of Multi-Colored Pill Buttons (Jockie Music Style) */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5">
            {/* Pill 1: MỜI BOT (Emerald) */}
            <a
              href={BOT_LINKS.invite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 transition-all cursor-pointer"
            >
              <UserPlus className="w-4 h-4 text-slate-950" />
              <span>MỜI BOT</span>
            </a>

            {/* Pill 2: HỖ TRỢ (Teal) */}
            <a
              href={BOT_LINKS.support}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-105 transition-all cursor-pointer"
            >
              <LifeBuoy className="w-4 h-4 text-slate-950" />
              <span>HỖ TRỢ</span>
            </a>

            {/* Pill 3: TÍNH NĂNG (Cyan/Indigo) */}
            <Link
              to="/features"
              className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4 text-slate-950" />
              <span>TÍNH NĂNG</span>
            </Link>

            {/* Pill 4: GITHUB (Dark Slate Navy) */}
            <a
              href={BOT_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#202430] hover:bg-[#282d3d] border border-[#2e3448] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              <Github className="w-4 h-4 text-emerald-400" />
              <span>GITHUB</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
