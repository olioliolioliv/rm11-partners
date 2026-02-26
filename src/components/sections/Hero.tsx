export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-20">
        <div className="animate-fade-up" style={{ animationDelay: "0s" }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-semibold tracking-widest text-gold uppercase border border-gold/20 rounded-full bg-gold/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-red animate-pulse" />
            YouTube Partner Program
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Get Paid to Talk
            <br />
            <span className="text-gold">About RM11</span>
          </h1>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-lg md:text-xl text-white-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            We pay YouTube creators{" "}
            <span className="text-white font-medium">
              $1,000–$5,000/month
            </span>{" "}
            to make content about the platform that pays creators more. No other
            fan platform does this.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="#apply"
            className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-white rounded-[23px] transition-opacity duration-300 hover:opacity-90"
            style={{
              background: "linear-gradient(270deg, #fe0127, #460443)",
            }}
          >
            Apply Now
          </a>
          <a
            href="#tiers"
            className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-gold rounded-[23px] border border-gold/30 hover:border-gold/60 hover:bg-gold/5 transition-colors duration-300"
          >
            See Tiers ↓
          </a>
        </div>

        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white-dim animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-success"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            48-hour review
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-success"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Non-exclusive
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-success"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Full creative freedom
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-success"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Uncapped bonuses
          </span>
        </div>
      </div>
    </section>
  );
}
