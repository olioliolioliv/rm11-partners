"use client";

import { useState, type FormEvent } from "react";
import {
  SUBSCRIBER_OPTIONS,
  NICHE_OPTIONS,
  TIER_OPTIONS,
  REFERRAL_OPTIONS,
} from "@/lib/constants";

const inputClass =
  "w-full bg-bg-input border border-border rounded-[12px] px-4 py-3 text-white text-sm placeholder:text-white-dim focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors";
const labelClass = "block text-sm text-gold-muted font-medium mb-1.5";
const errorClass = "text-xs text-error mt-1";

interface FormErrors {
  [key: string]: string;
}

function validate(form: FormData): FormErrors {
  const errors: FormErrors = {};
  const str = (k: string) => (form.get(k) as string || "").trim();

  if (str("fullName").length < 2) errors.fullName = "Name must be at least 2 characters";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str("email"))) errors.email = "Please enter a valid email";
  if (!/youtube\.com|youtu\.be/i.test(str("youtubeUrl"))) errors.youtubeUrl = "Must be a YouTube URL";
  if (!str("subscriberCount")) errors.subscriberCount = "Please select your subscriber count";
  if (!str("avgViews") || isNaN(Number(str("avgViews").replace(/,/g, "")))) errors.avgViews = "Please enter a valid number";

  const niches = form.getAll("contentNiche") as string[];
  if (niches.length === 0) errors.contentNiche = "Select at least one niche";

  try { if (str("videoLink1") && !new URL(str("videoLink1"))) throw 0; } catch { errors.videoLink1 = "Please enter a valid URL"; }
  if (!str("videoLink1")) errors.videoLink1 = "Please enter a valid URL";

  if (str("motivation").length < 20) errors.motivation = "Please write at least 20 characters";
  if (str("motivation").length > 500) errors.motivation = "Maximum 500 characters";
  if (!str("preferredTier")) errors.preferredTier = "Please select a tier";
  if (!str("referralSource")) errors.referralSource = "Please tell us how you found us";

  return errors;
}

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [selectedNiches, setSelectedNiches] = useState<string[]>([]);

  const toggleNiche = (niche: string) => {
    setSelectedNiches((prev) =>
      prev.includes(niche) ? prev.filter((n) => n !== niche) : [...prev, niche]
    );
  };

  // ── YOUR TEAM: replace this URL with your WordPress endpoint ──
  const FORM_ENDPOINT =
    process.env.NEXT_PUBLIC_FORM_ENDPOINT || "https://rm11.com/wp-json/rm11/v1/partner-apply";

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");

    const formData = new FormData(e.currentTarget);
    // Add niches manually since they're custom buttons, not native checkboxes
    selectedNiches.forEach((n) => formData.append("contentNiche", n));

    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);

    // Build plain object from FormData
    const data: Record<string, unknown> = {};
    formData.forEach((val, key) => {
      if (key === "contentNiche") {
        if (!data.contentNiche) data.contentNiche = [];
        (data.contentNiche as string[]).push(val as string);
      } else {
        data[key] = val;
      }
    });

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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,218,145,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translateX(-50%)",
        }}
      />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Apply <span className="text-gold text-glow">Now</span>
        </h2>
        <p className="text-white-muted text-center text-lg mb-12">
          Fill out the form below and we&apos;ll get back to you within 48 hours
        </p>

        {submitted ? (
          <div className="text-center py-16 px-8 rounded-[16px] glass-card">
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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
            onSubmit={onSubmit}
            noValidate
            className="space-y-6 p-8 rounded-[16px] glass-card"
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
                <input name="fullName" placeholder="Your full name" className={inputClass} />
                {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
              </div>
              <div>
                <label className={labelClass}>Email Address *</label>
                <input name="email" type="email" placeholder="you@example.com" className={inputClass} />
                {errors.email && <p className={errorClass}>{errors.email}</p>}
              </div>
            </div>

            {/* Row 2: YouTube URL */}
            <div>
              <label className={labelClass}>YouTube Channel URL *</label>
              <input name="youtubeUrl" placeholder="https://youtube.com/@yourchannel" className={inputClass} />
              {errors.youtubeUrl && <p className={errorClass}>{errors.youtubeUrl}</p>}
            </div>

            {/* Row 3: Subscribers + Avg Views */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Current Subscriber Count *</label>
                <select name="subscriberCount" className={inputClass}>
                  <option value="">Select range</option>
                  {SUBSCRIBER_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.subscriberCount && <p className={errorClass}>{errors.subscriberCount}</p>}
              </div>
              <div>
                <label className={labelClass}>Avg Views Per Video (last 10) *</label>
                <input name="avgViews" placeholder="e.g. 15000" className={inputClass} />
                {errors.avgViews && <p className={errorClass}>{errors.avgViews}</p>}
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
                    className={`px-3 py-1.5 rounded-full text-sm border transition-colors duration-200 ${
                      selectedNiches.includes(niche)
                        ? "border-gold bg-gold/10 text-gold"
                        : "border-border text-white-dim hover:border-border-hover"
                    }`}
                  >
                    {niche}
                  </button>
                ))}
              </div>
              {errors.contentNiche && <p className={errorClass}>{errors.contentNiche}</p>}
            </div>

            {/* Other niche */}
            {selectedNiches.includes("Other") && (
              <div>
                <label className={labelClass}>Describe your niche</label>
                <input name="otherNiche" placeholder="Tell us about your content" className={inputClass} />
              </div>
            )}

            {/* Video links */}
            <div className="space-y-4">
              <label className={labelClass}>Links to Recent Relevant Videos *</label>
              <input name="videoLink1" placeholder="Video URL #1 (required)" className={inputClass} />
              {errors.videoLink1 && <p className={errorClass}>{errors.videoLink1}</p>}
              <input name="videoLink2" placeholder="Video URL #2 (optional)" className={inputClass} />
              <input name="videoLink3" placeholder="Video URL #3 (optional)" className={inputClass} />
            </div>

            {/* Motivation */}
            <div>
              <label className={labelClass}>Why do you want to partner with RM11? *</label>
              <textarea
                name="motivation"
                placeholder="Tell us why you're interested and what makes you a great fit..."
                rows={4}
                className={inputClass + " resize-none"}
              />
              {errors.motivation && <p className={errorClass}>{errors.motivation}</p>}
            </div>

            {/* Row: Tier + Referral */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Which tier are you applying for? *</label>
                <select name="preferredTier" className={inputClass}>
                  <option value="">Select tier</option>
                  {TIER_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.preferredTier && <p className={errorClass}>{errors.preferredTier}</p>}
              </div>
              <div>
                <label className={labelClass}>How did you hear about this program? *</label>
                <select name="referralSource" className={inputClass}>
                  <option value="">Select source</option>
                  {REFERRAL_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.referralSource && <p className={errorClass}>{errors.referralSource}</p>}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className={labelClass}>Anything else you want us to know?</label>
              <textarea
                name="notes"
                placeholder="Optional — anything else you'd like to share"
                rows={3}
                className={inputClass + " resize-none"}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 text-base font-semibold text-white rounded-[23px] btn-shimmer cta-glow disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: "linear-gradient(270deg, #fe0127, #460443)" }}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>

            <p className="text-xs text-white-dim text-center">
              By submitting, you agree to be contacted by the RM11
              partnerships team. We review all applications within 48 hours.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
