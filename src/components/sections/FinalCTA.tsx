import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary relative overflow-hidden">
      {/* Background glow orb */}
      <div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(254,1,39,0.12) 0%, rgba(70,4,67,0.08) 40%, transparent 70%)",
          filter: "blur(100px)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to <span className="text-gold text-glow">Get Paid</span>?
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <p className="text-lg text-white-muted mb-10 max-w-lg mx-auto">
            Join the first fan platform that actually invests in YouTube creators.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <a
            href="#apply"
            className="inline-flex items-center px-10 py-4 text-lg font-semibold text-white rounded-[23px] btn-shimmer cta-glow"
            style={{
              background: "linear-gradient(270deg, #fe0127, #460443)",
            }}
          >
            Apply Now
          </a>
          <p className="mt-4 text-sm text-white-dim">
            Applications reviewed within 48 hours.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
