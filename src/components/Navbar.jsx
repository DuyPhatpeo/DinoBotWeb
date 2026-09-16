import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Github, UserPlus, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { BOT_LINKS } from "../data/botData";

const NAV_LINKS = [
  { name: "Trang Chủ", path: "/" },
  { name: "Tính Năng", path: "/features" },
  { name: "Lệnh Bot", path: "/commands" },
  { name: "FAQ", path: "/faq" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-[#171a21]/90 border-b border-[#2b3042] shadow-lg shadow-black/25"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="DinoBot Logo"
            className="w-11 h-11 object-contain group-hover:scale-105 transition-transform"
          />
          <span className="text-2xl font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors">
            Dino<span className="text-emerald-400">Bot</span>
          </span>
        </Link>

        {/* Desktop Navigation Links - Jockie Music Style: Clean text-only without background wrappers */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                  isActive
                    ? "text-emerald-400"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3.5">
          <a
            href={BOT_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#202430] border border-[#2e3448] text-slate-200 hover:text-white hover:border-slate-500 text-sm font-semibold transition hover:scale-105 shadow-sm"
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

        {/* Mobile Menu Toggle */}
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
            className="p-2.5 rounded-xl bg-[#202430] border border-[#2e3448] text-slate-200 hover:text-white"
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
            className="sm:hidden border-b border-[#2b3042] bg-[#171a21]/95 backdrop-blur-xl px-6 py-5 space-y-2"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block font-bold text-base py-2.5 px-2 transition-colors ${
                    isActive
                      ? "text-emerald-400"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-3 border-t border-[#2b3042] flex gap-3">
              <a
                href={BOT_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 rounded-xl bg-[#202430] border border-[#2e3448] text-slate-200 text-sm font-semibold"
              >
                GitHub
              </a>
              <a
                href={BOT_LINKS.support}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 rounded-xl bg-[#202430] border border-emerald-500/30 text-emerald-400 text-sm font-semibold"
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
