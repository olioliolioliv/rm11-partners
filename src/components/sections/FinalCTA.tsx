export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to <span className="text-gold">Get Paid</span>?
        </h2>
        <p className="text-lg text-white-muted mb-10 max-w-lg mx-auto">
          Join the first fan platform that actually invests in YouTube creators.
        </p>
        <a
          href="#apply"
          className="inline-flex items-center px-10 py-4 text-lg font-semibold text-white rounded-[23px] transition-opacity duration-300 hover:opacity-90"
          style={{
            background: "linear-gradient(270deg, #fe0127, #460443)",
          }}
        >
          Apply Now
        </a>
        <p className="mt-4 text-sm text-white-dim">
          Applications reviewed within 48 hours.
        </p>
      </div>
    </section>
  );
}
