import React from "react";
import { motion } from "framer-motion";
import { FEATURE_MODULES } from "../data/botData";
import {
  ShieldAlert,
  Gamepad2,
  Coins,
  UserCheck,
  Sparkles,
  Wrench,
  CheckCircle2,
  Zap,
} from "lucide-react";

const iconMap = {
  ShieldAlert,
  Gamepad2,
  Coins,
  UserCheck,
  Sparkles,
  Wrench,
};

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Giải Pháp Toàn Diện Cho Discord</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Tính Năng Nổi Bật Của{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              DinoBot
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Thay thế 5+ bot riêng lẻ bằng một bot duy nhất: An toàn, nhanh chóng, trực quan và luôn luôn miễn phí cho mọi máy chủ.
          </p>
        </div>

        {/* Features 6-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {FEATURE_MODULES.map((module, idx) => {
            const IconComponent = iconMap[module.iconName] || Sparkles;
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative group p-7 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between ${module.borderGlow} hover:shadow-[0_0_35px_rgba(16,185,129,0.12)] hover:-translate-y-1`}
              >
                {/* Subtle top corner gradient glow */}
                <div
                  className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${module.gradient} rounded-full blur-3xl group-hover:opacity-100 opacity-50 transition-opacity`}
                ></div>

                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 shadow-sm">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-800/90 text-emerald-300 border border-emerald-500/20">
                      {module.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {module.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {module.desc}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/60">
                    {module.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
