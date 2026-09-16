import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BOT_LINKS } from "../data/botData";
import DiscordPreview from "./DiscordPreview";
import { UserPlus, Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background ambient radial glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-emerald-500/12 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-12 w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Hero Text & Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* MEE6-style Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold mb-6 shadow-sm backdrop-blur-md">
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
              className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:scale-105 transition-all w-full sm:w-auto"
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
