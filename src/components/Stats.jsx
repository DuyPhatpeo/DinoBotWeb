import React from "react";
import { motion } from "framer-motion";
import { BOT_STATS } from "../data/botData";
import { Server, Users, Terminal, Activity } from "lucide-react";

const iconMap = {
  Server,
  Users,
  Terminal,
  Activity,
};

const Stats = () => {
  return (
    <section id="stats" className="py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid: Clean icon on right + short text on left */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {BOT_STATS.map((stat, idx) => {
            const IconComponent = iconMap[stat.iconName] || Terminal;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl hover:border-emerald-500/30 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-400">
                    {stat.label}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {stat.value}
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
