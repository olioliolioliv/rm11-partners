import { PROOF_POINTS } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function WhyRM11() {
  return (
    <section id="why" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Why Creators Choose{" "}
            <span className="text-gold text-glow">RM11</span>
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <p className="text-white-muted text-center text-lg mb-16 max-w-xl mx-auto">
            The platform built for creators who want more
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {PROOF_POINTS.map((point, i) => (
            <AnimateOnScroll key={point.title} delay={i * 100}>
              <div className="group text-center p-6 rounded-[16px] glass-card h-full">
                <div className="text-3xl md:text-4xl font-bold text-gold text-glow mb-2 transition-transform duration-300 group-hover:scale-110">
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
