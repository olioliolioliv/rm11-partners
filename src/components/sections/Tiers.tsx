import { TIERS } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Tiers() {
  return (
    <section id="tiers" className="py-24 md:py-32 bg-bg-secondary relative overflow-hidden">
      {/* Subtle noise */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Choose Your <span className="text-gold text-glow">Tier</span>
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <p className="text-white-muted text-center text-lg mb-16 max-w-xl mx-auto">
            Pick the tier that matches your audience. We&apos;ll handle the rest.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TIERS.map((tier, i) => (
            <AnimateOnScroll key={tier.name} delay={i * 150}>
              <div
                className={`relative rounded-[16px] p-px ${
                  tier.popular
                    ? "bg-gradient-to-b from-accent-red/60 via-accent-purple/40 to-transparent tier-glow"
                    : "bg-border"
                }`}
              >
                <div className="relative rounded-[15px] bg-bg-card p-8 h-full flex flex-col glass-card !border-0">
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold text-white tracking-wider uppercase rounded-full btn-shimmer"
                      style={{ background: "linear-gradient(270deg, #fe0127, #460443)" }}
                    >
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6 pt-2">
                    <h3 className="text-lg font-semibold text-gold-muted mb-1">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gold text-glow">
                        {tier.price}
                      </span>
                      <span className="text-white-dim text-sm">
                        {tier.period}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-sm">
                      <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      <span className="text-white-muted">
                        <span className="text-white">{tier.subscribers}</span> subscribers
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      <span className="text-white-muted">
                        <span className="text-white">{tier.avgViews}</span> avg views/video
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      <span className="text-white-muted">
                        <span className="text-white">{tier.videosPerMonth} videos</span>/month
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      <span className="text-white-muted">{tier.referralBonus}</span>
                    </div>
                  </div>

                  <a
                    href="#apply"
                    className={`block text-center py-3 rounded-[23px] font-semibold text-sm ${
                      tier.popular
                        ? "text-white btn-shimmer cta-glow"
                        : "text-gold border border-gold/30 hover:border-gold/60 hover:bg-gold/5 transition-colors duration-300 border-shimmer"
                    }`}
                    style={
                      tier.popular
                        ? { background: "linear-gradient(270deg, #fe0127, #460443)" }
                        : undefined
                    }
                  >
                    Apply for {tier.name}
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={500}>
          <div className="text-center mt-12">
            <p className="text-white-muted mb-3">
              Have <span className="text-white font-medium">500K+ subscribers</span>? Let&apos;s talk custom deals.
            </p>
            <a
              href="#apply"
              className="text-gold font-medium hover:text-gold-muted transition-colors underline underline-offset-4"
            >
              Contact Us →
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
