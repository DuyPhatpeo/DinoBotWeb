import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, UserPlus, Menu, X, Terminal, Shield, Zap, Sparkles } from "lucide-react";
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Logo & Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src={logo}
              alt="DinoBot Logo"
              className="w-10 h-10 object-contain drop-shadow-[0_0_12px_#10b981] group-hover:scale-105 transition-transform"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#080B11]"></span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                Dino<span className="text-emerald-400">Bot</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                v2.4 ONLINE
              </span>
            </div>
            <span className="text-[10px] text-slate-400 -mt-1 hidden sm:block">
              Discord Bot Đa Năng
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors relative py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* GitHub Button */}
          <a
            href={BOT_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-semibold transition hover:scale-105"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          {/* Invite Bot Primary Button */}
          <a
            href={BOT_LINKS.invite}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-200"
          >
            <UserPlus className="w-4 h-4 text-slate-950" />
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
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden border-b border-slate-800 bg-[#0B0F19] px-6 py-4 space-y-3"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-emerald-400 font-medium text-sm py-2"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href={BOT_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold"
              >
                <Github className="w-4 h-4" />
                <span>Mã Nguồn GitHub</span>
              </a>
              <a
                href={BOT_LINKS.support}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 text-emerald-400 text-xs font-semibold"
              >
                <span>Tham Gia Server Hỗ Trợ</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
