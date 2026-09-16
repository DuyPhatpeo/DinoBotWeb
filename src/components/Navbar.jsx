import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, UserPlus, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { BOT_LINKS } from "../data/botData";

const NAV_LINKS = [
  { name: "Tính Năng", href: "#features" },
  { name: "Chỉ Số", href: "#stats" },
  { name: "Lệnh Bot", href: "#commands" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#080B11]/80 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo & Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="DinoBot Logo"
            className="w-9 h-9 object-contain drop-shadow-[0_0_10px_#10b981] group-hover:scale-105 transition-transform"
          />
          <span className="text-xl font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors">
            Dino<span className="text-emerald-400">Bot</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-slate-300 hover:text-emerald-400 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons: Icon used -> Short text */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={BOT_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-semibold transition"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={BOT_LINKS.invite}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs shadow-sm hover:scale-105 transition-all"
          >
            <UserPlus className="w-3.5 h-3.5 text-slate-950" />
            <span>Mời Bot</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={BOT_LINKS.invite}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs"
          >
            Mời Bot
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden border-b border-slate-800 bg-[#0B0F19] px-6 py-4 space-y-3"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-emerald-400 font-medium text-sm py-1.5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 flex gap-2">
              <a
                href={BOT_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold"
              >
                GitHub
              </a>
              <a
                href={BOT_LINKS.support}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 rounded-lg bg-slate-800 text-emerald-400 text-xs font-semibold"
              >
                Hỗ Trợ
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
