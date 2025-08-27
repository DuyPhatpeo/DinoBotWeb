import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-emerald-400">DinoBot</span>. Made with ❤️ by Dino.
      </p>
    </footer>
  );
};

export default Footer;
