import React from "react";
import logo from "../assets/logo.png";
import { BOT_LINKS } from "../data/botData";
import { Github, MessageSquare, ExternalLink, Heart, ShieldCheck, Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#06080E] text-slate-400 text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Mission Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="DinoBot Logo"
                className="w-10 h-10 object-contain drop-shadow-[0_0_10px_#10b981]"
              />
              <span className="text-2xl font-black tracking-tight text-white">
                Dino<span className="text-emerald-400">Bot</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Bot Discord đa năng toàn diện cho cộng đồng của bạn. Đảm bảo an ninh, gia tăng tương tác và mang lại niềm vui cho mọi thành viên trong máy chủ.
            </p>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Tất cả dịch vụ đang hoạt động (99.98%)</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">
              Tính Năng
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#features" className="hover:text-emerald-400 transition">
                  Kiểm Duyệt AutoMod
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition">
                  Mini Games & Casino
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition">
                  Kinh Tế & Bảng Xếp Hạng
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition">
                  Quản Lý Vai Trò
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">
              Tài Nguyên
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#commands" className="hover:text-emerald-400 transition flex items-center gap-1">
                  <span>Thư Viện Lệnh</span>
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
                  className="hover:text-emerald-400 transition flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={BOT_LINKS.support}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition flex items-center gap-1"
                >
                  <span>Báo Lỗi & Góp Ý</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Support Column */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">
              Cộng Đồng
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href={BOT_LINKS.support}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Discord Hỗ Trợ</span>
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
                  <span>DuyPhatpeo</span>
                </a>
              </li>
              <li>
                <a
                  href={BOT_LINKS.invite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-xs hover:bg-emerald-500/20 transition"
                >
                  + Mời Vào Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal disclaimer */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} <span className="text-slate-300 font-medium">DinoBot</span>. Phát triển bởi{" "}
            <a
              href="https://github.com/DuyPhatpeo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline font-semibold"
            >
              DuyPhat
            </a>
            .
          </p>

          <p className="text-[11px] text-slate-600">
            DinoBot là dự án độc lập, không liên kết hoặc được bảo trợ chính thức bởi Discord Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
