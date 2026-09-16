import React from "react";
import logo from "../assets/logo.png";
import { BOT_LINKS } from "../data/botData";
import { Github, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#06080E] text-slate-400 text-xs sm:text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src={logo}
                alt="DinoBot Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-black text-white">
                Dino<span className="text-emerald-400">Bot</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Bot Discord hỗ trợ quản trị, trò chơi nút bấm và tiện ích máy chủ.
            </p>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Uptime 99.98%</span>
            </div>
          </div>

          {/* Feature Links (Text only, clean) */}
          <div>
            <h4 className="text-white font-bold text-xs mb-3 tracking-wider uppercase">
              Tính Năng
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#features" className="hover:text-emerald-400 transition">
                  Kiểm Duyệt
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition">
                  Oẳn Tù Tì
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition">
                  Giveaway
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition">
                  Quản Lý Role
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links (Text only, clean) */}
          <div>
            <h4 className="text-white font-bold text-xs mb-3 tracking-wider uppercase">
              Tài Nguyên
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#commands" className="hover:text-emerald-400 transition">
                  Danh Sách Lệnh
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition">
                  Câu Hỏi Thường Gặp
                </a>
              </li>
              <li>
                <a
                  href={BOT_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={BOT_LINKS.support}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition"
                >
                  Báo Lỗi
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links (Icon + short label) */}
          <div>
            <h4 className="text-white font-bold text-xs mb-3 tracking-wider uppercase">
              Liên Hệ
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={BOT_LINKS.support}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Discord</span>
                </a>
              </li>
              <li>
                <a
                  href={BOT_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition"
                >
                  <Github className="w-4 h-4 text-emerald-400" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Clean single line text */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} DinoBot. Phát triển bởi DuyPhat.
          </p>

          <p className="text-[11px] text-slate-600">
            Dự án độc lập, không liên kết chính thức với Discord Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
