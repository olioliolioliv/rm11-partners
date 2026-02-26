"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicationSchema, type ApplicationFormData } from "@/lib/schemas";
import {
  SUBSCRIBER_OPTIONS,
  NICHE_OPTIONS,
  TIER_OPTIONS,
  REFERRAL_OPTIONS,
} from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const inputClass =
  "w-full bg-bg-input border border-border rounded-[12px] px-4 py-3 text-white text-sm placeholder:text-white-dim focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors";
const labelClass = "block text-sm text-gold-muted font-medium mb-1.5";
const errorClass = "text-xs text-error mt-1";

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      contentNiche: [],
    },
  });

  const selectedNiches = watch("contentNiche") || [];

  const toggleNiche = (niche: string) => {
    const current = selectedNiches;
    if (current.includes(niche)) {
      setValue(
        "contentNiche",
        current.filter((n) => n !== niche),
        { shouldValidate: true }
      );
    } else {
      setValue("contentNiche", [...current, niche], { shouldValidate: true });
    }
  };

  // ── YOUR TEAM: replace this URL with your WordPress endpoint ──
  const FORM_ENDPOINT =
    process.env.NEXT_PUBLIC_FORM_ENDPOINT || "https://rm11.com/wp-json/rm11/v1/partner-apply";

  const onSubmit = async (data: ApplicationFormData) => {
    setSubmitError("");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Failed to submit. Please try again."
      );
    }
  };

  return (
    <section id="apply" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Apply <span className="text-gold">Now</span>
          </h2>
          <p className="text-white-muted text-center text-lg mb-12">
            Fill out the form below and we&apos;ll get back to you within 48 hours
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <>
            {submitted ? (
              <div className="text-center py-16 px-8 rounded-[16px] border border-border bg-bg-card animate-fade-up">

                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gold mb-3">
                  Application Submitted!
                </h3>
                <p className="text-white-muted max-w-md mx-auto">
                  Thanks for applying to the RM11 Creator Partners program.
                  Our team will review your application and get back to you
                  within 48 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 p-8 rounded-[16px] border border-border bg-bg-card"
              >
                {submitError && (
                  <div className="p-4 rounded-[12px] bg-error/10 border border-error/20 text-error text-sm">
                    {submitError}
                  </div>
                )}

                {/* Row 1: Name + Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input
                      {...register("fullName")}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                    {errors.fullName && (
                      <p className={errorClass}>{errors.fullName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className={errorClass}>{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: YouTube URL */}
                <div>
                  <label className={labelClass}>YouTube Channel URL *</label>
                  <input
                    {...register("youtubeUrl")}
                    placeholder="https://youtube.com/@yourchannel"
                    className={inputClass}
                  />
                  {errors.youtubeUrl && (
                    <p className={errorClass}>{errors.youtubeUrl.message}</p>
                  )}
                </div>

                {/* Row 3: Subscribers + Avg Views */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>
                      Current Subscriber Count *
                    </label>
                    <select {...register("subscriberCount")} className={inputClass}>
                      <option value="">Select range</option>
                      {SUBSCRIBER_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.subscriberCount && (
                      <p className={errorClass}>
                        {errors.subscriberCount.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>
                      Avg Views Per Video (last 10) *
                    </label>
                    <input
                      {...register("avgViews")}
                      placeholder="e.g. 15000"
                      className={inputClass}
                    />
                    {errors.avgViews && (
                      <p className={errorClass}>{errors.avgViews.message}</p>
                    )}
                  </div>
                </div>

                {/* Content Niche */}
                <div>
                  <label className={labelClass}>Content Niche *</label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {NICHE_OPTIONS.map((niche) => (
                      <button
                        key={niche}
                        type="button"
                        onClick={() => toggleNiche(niche)}
                        className={`px-3 py-1.5 rounded-full text-sm border transition-all duration-200 ${
                          selectedNiches.includes(niche)
                            ? "border-gold bg-gold/10 text-gold"
                            : "border-border text-white-dim hover:border-border-hover"
                        }`}
                      >
                        {niche}
                      </button>
                    ))}
                  </div>
                  {errors.contentNiche && (
                    <p className={errorClass}>{errors.contentNiche.message}</p>
                  )}
                </div>

                {/* Other niche description */}
                {selectedNiches.includes("Other") && (
                  <div>
                    <label className={labelClass}>
                      Describe your niche
                    </label>
                    <input
                      {...register("otherNiche")}
                      placeholder="Tell us about your content"
                      className={inputClass}
                    />
                  </div>
                )}

                {/* Video links */}
                <div className="space-y-4">
                  <label className={labelClass}>
                    Links to Recent Relevant Videos *
                  </label>
                  <input
                    {...register("videoLink1")}
                    placeholder="Video URL #1 (required)"
                    className={inputClass}
                  />
                  {errors.videoLink1 && (
                    <p className={errorClass}>{errors.videoLink1.message}</p>
                  )}
                  <input
                    {...register("videoLink2")}
                    placeholder="Video URL #2 (optional)"
                    className={inputClass}
                  />
                  {errors.videoLink2 && (
                    <p className={errorClass}>{errors.videoLink2.message}</p>
                  )}
                  <input
                    {...register("videoLink3")}
                    placeholder="Video URL #3 (optional)"
                    className={inputClass}
                  />
                  {errors.videoLink3 && (
                    <p className={errorClass}>{errors.videoLink3.message}</p>
                  )}
                </div>

                {/* Motivation */}
                <div>
                  <label className={labelClass}>
                    Why do you want to partner with RM11? *
                  </label>
                  <textarea
                    {...register("motivation")}
                    placeholder="Tell us why you're interested and what makes you a great fit..."
                    rows={4}
                    className={inputClass + " resize-none"}
                  />
                  {errors.motivation && (
                    <p className={errorClass}>{errors.motivation.message}</p>
                  )}
                </div>

                {/* Row: Tier + Referral */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>
                      Which tier are you applying for? *
                    </label>
                    <select
                      {...register("preferredTier")}
                      className={inputClass}
                    >
                      <option value="">Select tier</option>
                      {TIER_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.preferredTier && (
                      <p className={errorClass}>
                        {errors.preferredTier.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>
                      How did you hear about this program? *
                    </label>
                    <select
                      {...register("referralSource")}
                      className={inputClass}
                    >
                      <option value="">Select source</option>
                      {REFERRAL_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.referralSource && (
                      <p className={errorClass}>
                        {errors.referralSource.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className={labelClass}>
                    Anything else you want us to know?
                  </label>
                  <textarea
                    {...register("notes")}
                    placeholder="Optional — anything else you'd like to share"
                    rows={3}
                    className={inputClass + " resize-none"}
                  />
                  {errors.notes && (
                    <p className={errorClass}>{errors.notes.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-base font-semibold text-white rounded-[23px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(254,1,39,0.4)] hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                  style={{
                    background: "linear-gradient(270deg, #fe0127, #460443)",
                  }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </button>

                <p className="text-xs text-white-dim text-center">
                  By submitting, you agree to be contacted by the RM11
                  partnerships team. We review all applications within 48
                  hours.
                </p>
              </form>
            )}
          </>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
