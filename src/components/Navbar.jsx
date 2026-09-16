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
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#080B11]/85 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo & Brand (No drop-shadow on logo, larger size) */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="DinoBot Logo"
            className="w-11 h-11 object-contain group-hover:scale-105 transition-transform"
          />
          <span className="text-2xl font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors">
            Dino<span className="text-emerald-400">Bot</span>
          </span>
        </a>

        {/* Desktop Navigation Links: Larger, clear spacing */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-200 hover:text-emerald-400 hover:bg-white/[0.04] px-3 py-1.5 rounded-xl transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons: Larger size, prominent and easy to click */}
        <div className="hidden sm:flex items-center gap-3.5">
          <a
            href={BOT_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 hover:text-white hover:border-slate-600 text-sm font-semibold transition hover:scale-105 shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={BOT_LINKS.invite}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:scale-105 transition-all"
          >
            <UserPlus className="w-4 h-4 text-slate-950" />
            <span>Mời Bot</span>
          </a>
        </div>

        {/* Mobile Menu Toggle: Larger buttons */}
        <div className="flex sm:hidden items-center gap-2.5">
          <a
            href={BOT_LINKS.invite}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs shadow-sm"
          >
            Mời Bot
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white"
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
            className="sm:hidden border-b border-slate-800 bg-[#0B0F19] px-6 py-5 space-y-3"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-200 hover:text-emerald-400 font-semibold text-base py-2"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 flex gap-3">
              <a
                href={BOT_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-sm font-semibold"
              >
                GitHub
              </a>
              <a
                href={BOT_LINKS.support}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 rounded-xl bg-slate-800 text-emerald-400 text-sm font-semibold"
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
