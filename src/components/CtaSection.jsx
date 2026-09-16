import React from "react";
import { motion } from "framer-motion";
import { BOT_LINKS } from "../data/botData";
import logo from "../assets/logo.png";
import { UserPlus, LifeBuoy, ShieldCheck, Zap, Sparkles } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 px-6 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Glow ambient circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-950 p-8 sm:p-14 text-center backdrop-blur-2xl shadow-[0_0_60px_rgba(16,185,129,0.15)] overflow-hidden"
        >
          {/* Subtle Cyber Grid Lines in background */}
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

          {/* Logo Badge */}
          <div className="relative inline-block mb-6">
            <img
              src={logo}
              alt="DinoBot Logo"
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto drop-shadow-[0_0_25px_#10b981] animate-bounce"
              style={{ animationDuration: "3s" }}
            />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-5 max-w-2xl mx-auto">
            Sẵn Sàng Nâng Tầm Máy Chủ Của Bạn Cùng{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
              DinoBot
            </span>
            ?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-9 leading-relaxed">
            Hơn 1,250 máy chủ đã tin dùng DinoBot để quản lý thành viên, tự động hoá kiểm duyệt và giải trí. Cài đặt miễn phí chỉ với 1 cú click chuột!
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href={BOT_LINKS.invite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300"
            >
              <UserPlus className="w-5 h-5 text-slate-950" />
              <span>Thêm Vào Discord Miễn Phí</span>
            </a>

            <a
              href={BOT_LINKS.support}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-base hover:scale-105 transition-all duration-300"
            >
              <LifeBuoy className="w-5 h-5 text-emerald-400" />
              <span>Tham Gia Server Hỗ Trợ</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-400">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Kích hoạt dưới 30 giây</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Bảo mật chuẩn Discord Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>100% Không gián đoạn (24/7)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
