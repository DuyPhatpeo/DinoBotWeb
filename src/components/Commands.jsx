import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMMANDS_DATA } from "../data/botData";
import { Search, Copy, Check, Terminal, Shield, Gamepad2, Coins, Wrench, Sparkles } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "Tất Cả Lệnh", icon: Terminal },
  { id: "moderation", label: "Quản Trị", icon: Shield },
  { id: "games", label: "Trò Chơi & Fun", icon: Gamepad2 },
  { id: "economy", label: "Kinh Tế (Coins)", icon: Coins },
  { id: "utility", label: "Tiện Ích", icon: Wrench },
];

const Commands = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [copiedIndex, setCopiedIndex] = useState(null);

  const filteredCommands = COMMANDS_DATA.filter((cmd) => {
    const matchesCategory =
      activeCategory === "all" || cmd.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      cmd.name.toLowerCase().includes(query) ||
      cmd.desc.toLowerCase().includes(query) ||
      cmd.syntax.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  const handleCopy = (syntax, index) => {
    navigator.clipboard.writeText(syntax);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <section id="commands" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Thư Viện Lệnh Tương Tác</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Khám Phá Toàn Bộ <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Lệnh DinoBot</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Hỗ trợ đầy đủ hệ thống Slash Command (/) trực quan, an toàn và dễ sử dụng. Tra cứu cú pháp, quyền hạn và sao chép lệnh chỉ với một click.
          </p>
        </div>

        {/* Filter Controls: Search Bar + Category Pills */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm lệnh (vd: ban, daily, roll)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const IconComp = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/25 scale-105"
                      : "bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Commands Grid */}
        {filteredCommands.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filteredCommands.map((cmd, idx) => {
                const isCopied = copiedIndex === idx;
                return (
                  <motion.div
                    key={cmd.name}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.12)] transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Card Header: Command Name & Role Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-bold text-emerald-400 font-mono flex items-center gap-1.5 group-hover:text-emerald-300 transition-colors">
                          <Terminal className="w-4 h-4" />
                          {cmd.name}
                        </span>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
                            cmd.role === "Admin"
                              ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                              : cmd.role === "Moderator"
                              ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                              : "bg-slate-800 text-slate-300 border border-slate-700"
                          }`}
                        >
                          {cmd.role}
                        </span>
                      </div>

                      {/* Syntax Box with Copy Action */}
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-slate-800/80 mb-3 font-mono text-xs text-slate-300">
                        <span className="truncate pr-2">{cmd.syntax}</span>
                        <button
                          onClick={() => handleCopy(cmd.syntax, idx)}
                          title="Sao chép cú pháp lệnh"
                          className="flex-shrink-0 p-1.5 rounded-lg bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-400 transition-all cursor-pointer"
                        >
                          {isCopied ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                        {cmd.desc}
                      </p>
                    </div>

                    {/* Example Usage */}
                    <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="font-semibold text-slate-400">Ví dụ:</span>
                      <span className="font-mono text-slate-400 truncate max-w-[200px]">
                        {cmd.example}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-16 p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 max-w-md mx-auto">
            <Terminal className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">Không tìm thấy lệnh</h4>
            <p className="text-slate-400 text-sm">
              Không có lệnh nào khớp với từ khoá "{searchQuery}". Hãy thử tìm từ khoá khác nhé!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Commands;
