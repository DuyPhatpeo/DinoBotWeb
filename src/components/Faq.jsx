import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_DATA, BOT_LINKS } from "../data/botData";
import { HelpCircle, ChevronDown, MessageSquare } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Giải Đáp Thắc Mắc</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Câu Hỏi <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Thường Gặp</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Mọi điều bạn cần biết về DinoBot trước khi tích hợp vào cộng đồng Discord của mình.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-slate-900/80 border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                    : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <span className="text-emerald-400 font-mono text-sm">0{idx + 1}.</span>
                    <span>{item.q}</span>
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-emerald-500/20 text-emerald-400 rotate-180"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-400 text-sm sm:text-base leading-relaxed border-t border-white/5">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-white text-base">Vẫn còn câu hỏi chưa được giải đáp?</h4>
            <p className="text-slate-400 text-sm">Hãy tham gia máy chủ Discord hỗ trợ để được đội ngũ trợ giúp 24/7.</p>
          </div>
          <a
            href={BOT_LINKS.support}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-2xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-sm font-semibold flex items-center gap-2 transition flex-shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Hỏi Tại Discord Hỗ Trợ</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
