import { STEPS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          How It <span className="text-gold">Works</span>
        </h2>
        <p className="text-white-muted text-center text-lg mb-16 max-w-xl mx-auto">
          Three steps to start earning as an RM11 Creator Partner
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {STEPS.map((step) => (
            <div key={step.number} className="relative text-center px-6 py-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gold/20 bg-bg-card mb-6 text-gold font-bold text-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gold mb-3">
                {step.title}
              </h3>
              <p className="text-white-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
