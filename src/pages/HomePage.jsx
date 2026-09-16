import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import CtaSection from "../components/CtaSection";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section with Interactive Discord Preview */}
      <Hero />

      {/* Live Server Stats */}
      <Stats />

      {/* Core Features Overview */}
      <div className="relative">
        <Features />
        {/* Link to view full features page */}
        <div className="text-center -mt-8 mb-20 relative z-10">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 border border-slate-700/80 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/40 text-sm font-semibold transition hover:scale-105 shadow-sm"
          >
            <span>Khám phá chi tiết các tính năng</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* CTA Invite Banner */}
      <CtaSection />
    </div>
  );
};

export default HomePage;
