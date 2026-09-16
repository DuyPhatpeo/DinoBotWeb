import React from "react";
import { motion } from "framer-motion";
import { BOT_LINKS } from "../data/botData";
import DiscordPreview from "./DiscordPreview";
import { UserPlus, LifeBuoy, ArrowDownCircle, ShieldCheck, Sparkles, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background ambient neon glow spheres */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Cyber grid subtle backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Hero Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Trust Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-300 mb-6 shadow-sm shadow-emerald-500/10">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: "6s" }} />
            <span>Siêu Bot Quản Trị & Giải Trí Discord Thế Hệ Mới</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] mb-6">
            Nâng Tầm Máy Chủ Discord Cùng{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(16,185,129,0.35)]">
              DinoBot
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed font-normal">
            Bảo vệ cộng đồng với hệ thống kiểm duyệt tự động thông minh, khuấy động tương tác bằng kho Mini Games phong phú, và tối ưu quản lý máy chủ với tốc độ phản hồi dưới 35ms.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
            {/* Primary Invite Button */}
            <a
              href={BOT_LINKS.invite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <UserPlus className="w-5 h-5 text-slate-950" />
              <span>Thêm Vào Discord</span>
            </a>

            {/* Support Server Button */}
            <a
              href={BOT_LINKS.support}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold text-sm sm:text-base hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <LifeBuoy className="w-5 h-5 text-emerald-400" />
              <span>Server Hỗ Trợ</span>
            </a>

            {/* Quick Link to Commands */}
            <a
              href="#commands"
              className="flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-400 hover:text-emerald-400 transition"
            >
              <ArrowDownCircle className="w-4 h-4" />
              <span>Khám phá lệnh</span>
            </a>
          </div>

          {/* Trust Social Proof Indicators */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 border-t border-slate-800/80 w-full text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9/5</span>
              <span>sao từ máy chủ</span>
            </div>

            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Không spam & An toàn 100%</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Phản hồi &lt; 35ms</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Live Interactive Discord Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-6 w-full relative"
        >
          {/* Neon background aura */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-70 pointer-events-none"></div>

          {/* Interactive Discord Mockup */}
          <div className="relative">
            <DiscordPreview />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
