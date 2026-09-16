import React from "react";
import { motion } from "framer-motion";
import { BOT_LINKS } from "../data/botData";
import DiscordPreview from "./DiscordPreview";
import { UserPlus, LifeBuoy } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] flex items-center justify-center pt-6 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        {/* Left Column: Hero Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] mb-5">
            Quản Lý & Giải Trí Cùng{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              DinoBot
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-400 max-w-lg mb-8 leading-relaxed">
            Bot Discord tối ưu hoá quản trị máy chủ, mini games nút bấm tương tác và tiện ích cho cộng đồng của bạn.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
            <a
              href={BOT_LINKS.invite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:scale-105 transition-all w-full sm:w-auto"
            >
              <UserPlus className="w-4 h-4 text-slate-950" />
              <span>Thêm Bot</span>
            </a>

            <a
              href={BOT_LINKS.support}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 font-semibold text-sm hover:scale-105 transition-all w-full sm:w-auto"
            >
              <LifeBuoy className="w-4 h-4 text-emerald-400" />
              <span>Hỗ Trợ</span>
            </a>
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
