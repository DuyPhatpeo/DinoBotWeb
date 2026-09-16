import React from "react";
import { motion } from "framer-motion";
import { BOT_LINKS } from "../data/botData";
import logo from "../assets/logo.png";
import { UserPlus, LifeBuoy } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 px-6 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-emerald-500/25 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 sm:p-12 text-center backdrop-blur-2xl shadow-xl shadow-emerald-950/30 overflow-hidden"
        >
          {/* Logo Badge */}
          <div className="mb-5">
            <img
              src={logo}
              alt="DinoBot Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto"
            />
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 max-w-xl mx-auto">
            Thêm <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">DinoBot</span> Vào Máy Chủ
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto mb-8">
            Trải nghiệm bot quản lý và mini game hoàn toàn miễn phí ngay hôm nay.
          </p>

          {/* Action Buttons: Icon used -> Short, punchy text */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8">
            <a
              href={BOT_LINKS.invite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20 hover:scale-105 transition-all"
            >
              <UserPlus className="w-4 h-4 text-slate-950" />
              <span>Thêm Bot</span>
            </a>

            <a
              href={BOT_LINKS.support}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white font-semibold text-sm hover:border-slate-700 hover:scale-105 transition-all"
            >
              <LifeBuoy className="w-4 h-4 text-emerald-400" />
              <span>Hỗ Trợ</span>
            </a>
          </div>

          {/* Clean text guarantees (No extra icons) */}
          <div className="text-xs text-slate-500 flex items-center justify-center gap-4">
            <span>Miễn phí 100%</span>
            <span>•</span>
            <span>Cài đặt 30 giây</span>
            <span>•</span>
            <span>Uptime 99.98%</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
