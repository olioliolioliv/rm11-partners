"use client";

import { PROOF_POINTS } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function WhyRM11() {
  return (
    <section id="why" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Why Creators Choose{" "}
            <span className="text-gold">RM11</span>
          </h2>
          <p className="text-white-muted text-center text-lg mb-16 max-w-xl mx-auto">
            The platform built for creators who want more
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {PROOF_POINTS.map((point, i) => (
            <AnimateOnScroll key={point.title} delay={i * 0.1}>
              <div className="text-center group p-4">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2 transition-all duration-300 group-hover:scale-110">
                  {point.stat}
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">
                  {point.title}
                </h3>
                <p className="text-xs text-white-dim leading-relaxed">
                  {point.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
