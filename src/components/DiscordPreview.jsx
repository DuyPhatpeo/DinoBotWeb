import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SIMULATOR_TABS } from "../data/botData";
import logo from "../assets/logo.png";
import { Hash, Sparkles, CheckCircle2, ChevronRight, Terminal } from "lucide-react";

const DiscordPreview = () => {
  const [activeTab, setActiveTab] = useState(SIMULATOR_TABS[0]);

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Tab bar to switch interactive command */}
      <div className="flex items-center gap-1.5 p-1 mb-3 rounded-2xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-md overflow-x-auto text-xs">
        <span className="text-slate-400 font-medium px-2 py-1 flex items-center gap-1">
          <Terminal className="w-3.5 h-3.5 text-emerald-400" /> Thử lệnh:
        </span>
        {SIMULATOR_TABS.map((tab) => {
          const isSelected = activeTab.id === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                isSelected
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/10"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Discord Client Window Frame */}
      <div className="rounded-3xl border border-slate-800/90 bg-[#1E1F22] shadow-2xl shadow-emerald-950/30 overflow-hidden text-slate-200 font-sans">
        {/* Discord Header Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#2B2D31] border-b border-black/20 select-none">
          <div className="flex items-center gap-2">
            <Hash className="w-4 h-4 text-slate-400" />
            <span className="font-bold text-sm text-white">dinobot-playground</span>
            <span className="hidden sm:inline-block text-xs text-slate-400 border-l border-slate-600 pl-2">
              Kênh thử nghiệm lệnh trực tiếp
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px] font-semibold text-emerald-400">Online</span>
          </div>
        </div>

        {/* Discord Chat Area */}
        <div className="p-4 sm:p-5 space-y-4 min-h-[360px] flex flex-col justify-start">
          {/* User Slash Command Prompt */}
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center font-bold text-xs text-white shadow-md flex-shrink-0">
              DP
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-xs sm:text-sm text-white">DuyPhat</span>
                <span className="text-[10px] text-slate-400">Hôm nay lúc 09:15</span>
              </div>
              <div className="mt-0.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#2B2D31] text-xs font-mono text-emerald-400 border border-slate-700/50">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                {activeTab.userPrompt}
              </div>
            </div>
          </div>

          {/* Bot Response Message with Rich Embed */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex items-start gap-3"
            >
              {/* Bot Avatar */}
              <div className="relative flex-shrink-0">
                <img
                  src={logo}
                  alt="DinoBot"
                  className="w-9 h-9 rounded-full object-cover p-0.5 bg-emerald-950 border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#1E1F22]"></span>
              </div>

              {/* Bot Message Body */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-semibold text-xs sm:text-sm text-emerald-400">DinoBot</span>
                  <span className="bg-[#5865F2] text-white text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5 uppercase tracking-wider">
                    <CheckCircle2 className="w-2.5 h-2.5" /> BOT
                  </span>
                  <span className="text-[10px] text-slate-400">v2.4 • Vừa xong</span>
                </div>

                {/* Discord Rich Embed Container */}
                <div
                  className="rounded-xl bg-[#2B2D31] border-l-4 p-4 shadow-lg space-y-3"
                  style={{ borderLeftColor: activeTab.response.color }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">
                      {activeTab.response.author}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">32ms</span>
                  </div>

                  <h5 className="font-bold text-sm sm:text-base text-white flex items-center gap-1.5">
                    {activeTab.response.title}
                  </h5>

                  {/* Embed Fields Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    {activeTab.response.fields.map((field, idx) => (
                      <div
                        key={idx}
                        className={`p-2 rounded-lg bg-black/20 ${
                          field.inline ? "col-span-1" : "col-span-1 sm:col-span-2"
                        }`}
                      >
                        <div className="text-[11px] font-semibold text-slate-400 mb-0.5">
                          {field.name}
                        </div>
                        <div className="text-slate-100 font-medium">{field.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Embed Footer */}
                  <div className="pt-2 border-t border-white/5 text-[10px] text-slate-400 flex items-center justify-between">
                    <span>{activeTab.response.footer}</span>
                    <span className="text-slate-500">DinoBot Engine</span>
                  </div>
                </div>

                {/* Interactive Action Buttons */}
                <div className="mt-2.5 flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      const nextIndex =
                        (SIMULATOR_TABS.findIndex((t) => t.id === activeTab.id) + 1) %
                        SIMULATOR_TABS.length;
                      setActiveTab(SIMULATOR_TABS[nextIndex]);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#4E5058] hover:bg-[#6D6F78] text-xs font-semibold text-white transition shadow-sm cursor-pointer"
                  >
                    <span>Lệnh tiếp theo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="https://discord.com/oauth2/authorize?client_id=1382559506885775360"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white transition shadow-sm"
                  >
                    <span>Mời Bot Ngay</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Discord Input Bar Mockup */}
        <div className="px-4 py-2.5 bg-[#383A40] mx-3 mb-3 rounded-xl flex items-center justify-between text-xs text-slate-400 select-none">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-slate-600/70 flex items-center justify-center text-white text-[10px] font-bold">
              +
            </span>
            <span>Gõ tin nhắn hoặc gõ <span className="text-emerald-400 font-mono">/</span> để dùng lệnh...</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>GIF</span>
            <span>😊</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordPreview;
