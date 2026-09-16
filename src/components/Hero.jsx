import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BOT_LINKS } from "../data/botData";
import DiscordPreview from "./DiscordPreview";
import { UserPlus, Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 overflow-hidden">
      {/* 1. Geometric Grid Canvas with smooth radial fade mask */}
      <div className="absolute inset-0 hero-grid-pattern pointer-events-none opacity-60 z-0"></div>

      {/* 2. Top-center Light Beam / Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[400px] bg-gradient-to-b from-emerald-500/20 via-teal-500/10 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* 3. Deep Atmospheric Nebula Blobs (Emerald + Teal + Midnight Indigo) */}
      <div 
        className="absolute -top-16 left-6 sm:left-[18%] w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse"
        style={{ animationDuration: "7s" }}
      ></div>

      <div 
        className="absolute top-1/4 -right-16 sm:right-[6%] w-[480px] h-[480px] bg-teal-500/12 rounded-full blur-[150px] pointer-events-none z-0 animate-pulse"
        style={{ animationDuration: "9s" }}
      ></div>

      <div className="absolute -bottom-20 left-1/3 w-[600px] h-[300px] bg-[#4F46E5]/10 rounded-full blur-[160px] pointer-events-none z-0"></div>

      {/* 4. Subtle Sparkling Star Accents */}
      <div className="absolute top-24 left-[15%] w-1 h-1 bg-emerald-300 rounded-full blur-[0.5px] opacity-60 animate-ping pointer-events-none"></div>
      <div className="absolute top-44 right-[22%] w-1.5 h-1.5 bg-teal-300 rounded-full blur-[0.5px] opacity-50 pointer-events-none"></div>
      <div className="absolute top-72 left-[8%] w-1 h-1 bg-emerald-400 rounded-full blur-[0.5px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-32 right-[12%] w-1.5 h-1.5 bg-emerald-300 rounded-full blur-[0.5px] opacity-50 animate-ping pointer-events-none" style={{ animationDuration: "4s" }}></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Hero Text & Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* MEE6-style Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-6 shadow-sm shadow-emerald-950/20 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Bot Discord Thế Hệ Mới Cho Cộng Đồng</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] mb-6">
            Nâng Cấp Máy Chủ Discord Cùng{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
              DinoBot
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-lg mb-8 leading-relaxed font-normal">
            Hệ thống kiểm duyệt tự động thông minh, mini games tương tác bằng nút bấm và tiện ích máy chủ chuyên nghiệp — tất cả trong một bot duy nhất.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
            <a
              href={BOT_LINKS.invite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 transition-all w-full sm:w-auto"
            >
              <UserPlus className="w-5 h-5 text-slate-950" />
              <span>Thêm Vào Discord</span>
            </a>

            <Link
              to="/features"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white border border-white/15 font-bold text-sm sm:text-base hover:scale-105 transition-all w-full sm:w-auto backdrop-blur-md"
            >
              <span>Xem Tính Năng</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Live Discord Chat Simulation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-6 w-full"
        >
          <DiscordPreview />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
