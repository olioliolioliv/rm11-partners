"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, #fe0127 0%, #460443 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to <span className="text-gold">Get Paid</span>?
          </h2>
          <p className="text-lg text-white-muted mb-10 max-w-lg mx-auto">
            Join the first fan platform that actually invests in YouTube creators.
          </p>
          <a
            href="#apply"
            className="inline-flex items-center px-10 py-4 text-lg font-semibold text-white rounded-[23px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(254,1,39,0.4)] hover:scale-[1.02]"
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
