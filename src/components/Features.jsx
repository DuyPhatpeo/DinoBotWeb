import React from "react";
import { motion } from "framer-motion";
import { FEATURE_MODULES } from "../data/botData";
import {
  ShieldAlert,
  Gamepad2,
  Sparkles,
  UserCheck,
  Wrench,
  Coins,
} from "lucide-react";

const iconMap = {
  ShieldAlert,
  Gamepad2,
  Sparkles,
  UserCheck,
  Wrench,
  Coins,
};

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Text-focused, minimal */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2 block">
            Tính Năng Cốt Lõi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Tối Ưu Cho <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Mọi Máy Chủ</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Tập hợp các công cụ quản lý và mini game tương tác chỉ trong một bot duy nhất.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURE_MODULES.map((module, idx) => {
            const IconComponent = iconMap[module.iconName] || Sparkles;
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between ${module.borderGlow} hover:shadow-lg hover:shadow-emerald-950/20`}
              >
                <div>
                  {/* Top Bar: Clean icon + Title (balanced) */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {module.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                    {module.desc}
                  </p>

                  {/* Clean Bullet Points: Text with simple bullet dash, no redundant icons */}
                  <ul className="space-y-2 pt-3 border-t border-slate-800/60 text-xs text-slate-300">
                    {module.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 flex-shrink-0"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
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
