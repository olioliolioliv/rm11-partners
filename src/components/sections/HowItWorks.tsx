import { STEPS } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            How It <span className="text-gold text-glow">Works</span>
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <p className="text-white-muted text-center text-lg mb-16 max-w-xl mx-auto">
            Three steps to start earning as an RM11 Creator Partner
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          {STEPS.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={i * 150}>
              <div className="relative text-center px-6 py-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gold/20 bg-bg-card mb-6 text-gold font-bold text-lg glass-card !p-0 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(255,218,145,0.15)]">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gold mb-3">
                  {step.title}
                </h3>
                <p className="text-white-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
