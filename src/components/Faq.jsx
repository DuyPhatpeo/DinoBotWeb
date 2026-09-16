import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_DATA, BOT_LINKS } from "../data/botData";
import { ChevronDown, MessageSquare } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        {/* Section Header: Text focused */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2 block">
            Hỏi & Đáp
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Câu Hỏi <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Thường Gặp</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Những thông tin cần biết trước khi đưa DinoBot vào máy chủ.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-slate-900/80 border-emerald-500/40"
                    : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {item.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "text-emerald-400 rotate-180"
                        : "text-slate-500"
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
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-white/5">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support helper: Icon used -> Short button text */}
        <div className="mt-8 p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-400 text-xs sm:text-sm">
            Cần hỗ trợ thêm về bot? Tham gia server Discord để được trợ giúp.
          </p>
          <a
            href={BOT_LINKS.support}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs font-semibold flex items-center gap-2 transition flex-shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Hỗ Trợ</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
