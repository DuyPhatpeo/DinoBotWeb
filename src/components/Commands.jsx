import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMMANDS_DATA } from "../data/botData";
import { Search, Copy, Check } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "Tất cả" },
  { id: "moderation", label: "Quản trị" },
  { id: "fun", label: "Mini Games" },
  { id: "utility", label: "Tiện ích" },
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
    <section id="commands" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Text focused */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2 block">
            Danh Sách Lệnh
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Tra Cứu Lệnh <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">DinoBot</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hỗ trợ Slash Command (/) và Prefix (!). Bấm để sao chép cú pháp lệnh.
          </p>
        </div>

        {/* Filter Controls: Search Input (with search icon) + Clean Text-Only Category Pills */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Box: Icon used -> Short placeholder */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm lệnh (vd: ban, roll)..."
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 transition-all"
            />
          </div>

          {/* Text-Only Category Pills (Clean, minimal, no icon overload) */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? "bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20"
                      : "bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Commands Grid */}
        {filteredCommands.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {filteredCommands.map((cmd, idx) => {
                const isCopied = copiedIndex === idx;
                return (
                  <motion.div
                    key={cmd.name}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Card Header: Command Name & Role Badge (Text only, clean) */}
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-base font-bold text-emerald-400 font-mono">
                          {cmd.name}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider ${
                            cmd.role === "Admin"
                              ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                              : cmd.role === "Moderator"
                              ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                              : "bg-slate-800 text-slate-300"
                          }`}
                        >
                          {cmd.role}
                        </span>
                      </div>

                      {/* Syntax Box with Copy Action (Icon used -> No extra label) */}
                      <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-slate-800/80 mb-2.5 font-mono text-xs text-slate-300">
                        <span className="truncate pr-2">{cmd.syntax}</span>
                        <button
                          onClick={() => handleCopy(cmd.syntax, idx)}
                          title="Sao chép"
                          className="flex-shrink-0 p-1 rounded-md bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-400 transition-all cursor-pointer"
                        >
                          {isCopied ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      {/* Description: 1 line short text */}
                      <p className="text-slate-400 text-xs leading-relaxed mb-3">
                        {cmd.desc}
                      </p>
                    </div>

                    {/* Example row (Clean text) */}
                    <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                      <span>Ví dụ:</span>
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
          <div className="text-center py-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 max-w-sm mx-auto">
            <p className="text-slate-300 text-sm font-semibold mb-1">Không có kết quả</p>
            <p className="text-slate-500 text-xs">Thử tìm bằng từ khoá khác</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Commands;
