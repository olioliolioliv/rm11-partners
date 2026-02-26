"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-header shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 h-16">
        <a href="#" className="text-gold font-bold text-xl tracking-tight text-glow">
          RM11
        </a>
        <a
          href="#apply"
          className="inline-flex items-center px-5 py-2 text-sm font-semibold text-white rounded-[23px] btn-shimmer cta-glow"
          style={{
            background: "linear-gradient(270deg, #fe0127, #460443)",
          }}
        >
          Apply Now
        </a>
      </div>
    </header>
  );
}
