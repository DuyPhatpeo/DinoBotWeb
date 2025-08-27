import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Ban, Users, Gamepad2, Laugh, Info } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Moderation",
    desc: "Kick, ban, mute, and warn – all the tools you need to keep your server safe and under control.",
  },
  {
    icon: Ban,
    title: "Anti-Spam & AutoMod",
    desc: "Block spam, harmful links, and automatically filter rule-breaking messages.",
  },
  {
    icon: Users,
    title: "Role & Member Management",
    desc: "Auto-assign roles, manage permissions, and easily keep track of your community members.",
  },
  {
    icon: Gamepad2,
    title: "Mini Games",
    desc: "Try your luck with fun games you can play directly inside Discord.",
  },
  {
    icon: Laugh,
    title: "Fun & Memes",
    desc: "Entertainment commands: memes, quotes, gifs, and more to keep the server lively.",
  },
  {
    icon: Info,
    title: "Utility Commands",
    desc: "Quickly fetch info about servers, users, avatars, ping, and many other handy tools.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 bg-black">
      <h3 className="text-5xl font-extrabold text-center mb-20 text-white">
        DinoBot <span className="text-emerald-400">Features</span>
      </h3>

      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex items-center gap-8 bg-gray-900 p-8 rounded-3xl shadow-lg hover:bg-gray-800 hover:shadow-emerald-500/30 transition"
          >
            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-emerald-500/10">
              <f.icon className="w-12 h-12 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">{f.title}</h4>
              <p className="text-gray-400 text-lg leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
