import React from "react";
import { motion } from "framer-motion";
import { BOT_STATS } from "../data/botData";
import { Server, Users, Terminal, Activity, Zap } from "lucide-react";

const iconMap = {
  Server,
  Users,
  Terminal,
  Activity,
};

const Stats = () => {
  return (
    <section id="stats" className="py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Subtle top pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <Zap className="w-3.5 h-3.5" />
            <span>Chỉ Số Hiệu Năng Thời Gian Thực</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BOT_STATS.map((stat, idx) => {
            const IconComponent = iconMap[stat.iconName] || Terminal;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/15 transition-all"></div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
                  {stat.value}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>{stat.change}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
