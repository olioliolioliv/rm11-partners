export const TIERS = [
  {
    name: "Rising",
    price: "$1,000",
    period: "/month",
    subscribers: "5K–25K",
    avgViews: "2,000+",
    videosPerMonth: 2,
    referralBonus: "5% of all creator referral earnings + $50 signup bonus for them",
    popular: false,
  },
  {
    name: "Established",
    price: "$2,500",
    period: "/month",
    subscribers: "25K–100K",
    avgViews: "8,000+",
    videosPerMonth: 2,
    referralBonus: "5% of all creator referral earnings + $50 signup bonus for them",
    popular: true,
  },
  {
    name: "Elite",
    price: "$5,000",
    period: "/month",
    subscribers: "100K+",
    avgViews: "25,000+",
    videosPerMonth: 2,
    referralBonus: "5% of all creator referral earnings + $50 signup bonus for them",
    popular: false,
  },
] as const;

export const STEPS = [
  {
    number: "01",
    title: "Apply",
    description:
      "Tell us about your channel. We review every application within 48 hours.",
  },
  {
    number: "02",
    title: "Get Approved",
    description:
      "We'll match you to a tier based on your audience size and assign your monthly rate.",
  },
  {
    number: "03",
    title: "Create & Earn",
    description:
      "Make 2 videos/month featuring RM11. Get paid on the 1st. Earn referral bonuses on top.",
  },
] as const;

export const PROOF_POINTS = [
  {
    stat: "90%",
    title: "Creator Payouts",
    description: "The highest in the industry. You keep more of what you earn.",
  },
  {
    stat: "Daily",
    title: "Payments",
    description:
      "No waiting weeks or months. Get paid every single day.",
  },
  {
    stat: "Built-in",
    title: "CRM & Analytics",
    description:
      "Powerful tools to manage subscribers and track performance.",
  },
  {
    stat: "AI",
    title: "Powered Tools",
    description:
      "Smart features that help creators maximize their revenue.",
  },
  {
    stat: "0%",
    title: "Traffic Leak",
    description:
      "Your fans never see another creator. Every visitor from your link stays on your page — your traffic, your revenue.",
  },
] as const;

export const BENEFITS = [
  {
    icon: "dollar",
    title: "Monthly Retainer",
    description: "Paid in advance on the 1st of every month",
  },
  {
    icon: "link",
    title: "Creator Referral Revenue",
    description: "Earn 5% of every creator you refer — plus they get a $50 signup bonus",
  },
  {
    icon: "palette",
    title: "Full Creative Freedom",
    description: "No scripts, no pre-approvals. Be yourself.",
  },
  {
    icon: "rocket",
    title: "Early Feature Access",
    description: "Test new RM11 features before anyone else",
  },
  {
    icon: "chart",
    title: "Partner Dashboard",
    description: "Real-time analytics on views, signups & earnings",
  },
  {
    icon: "handshake",
    title: "Direct Line to RM11",
    description: "Talk directly with the product & partnerships team",
  },
  {
    icon: "megaphone",
    title: "Co-Marketing",
    description: "We promote YOUR content across our channels",
  },
  {
    icon: "trophy",
    title: "Quarterly Bonuses",
    description: "Up to $2,500 extra for top performers",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Do I need to be exclusive to RM11?",
    answer:
      "No. You can work with other brands. The only rule: don't promote a direct competitor (Fanvue, Fansly, etc.) in the same video where you feature RM11.",
  },
  {
    question: "How fast is the application process?",
    answer:
      "We review every application within 48 hours. No ghosting, ever.",
  },
  {
    question: "When do I get paid?",
    answer:
      "Monthly retainer is paid on the 1st of each month, in advance. Referral commissions are paid on the 15th.",
  },
  {
    question: 'What counts as a "dedicated video"?',
    answer:
      "RM11 must be a primary topic or deep integration — not a 30-second mention. Minimum 3–5 minutes of RM11-focused content depending on your tier.",
  },
  {
    question: "Can I use my own style and format?",
    answer:
      "100%. We don't approve scripts or require specific formats. Your audience trusts you because you're authentic — we want to keep it that way.",
  },
  {
    question: "What if my channel grows — can I move up tiers?",
    answer:
      "Yes. We do quarterly reviews and will upgrade your tier (and pay) if your metrics qualify.",
  },
  {
    question: "What payment methods do you support?",
    answer: "Wire transfer, PayPal, and crypto (USDT/USDC).",
  },
  {
    question: "What's the minimum commitment?",
    answer:
      "3 months. After that, it's month-to-month and either side can cancel with 30 days notice.",
  },
] as const;

export const SUBSCRIBER_OPTIONS = [
  { value: "5k-10k", label: "5K–10K" },
  { value: "10k-25k", label: "10K–25K" },
  { value: "25k-50k", label: "25K–50K" },
  { value: "50k-100k", label: "50K–100K" },
  { value: "100k-250k", label: "100K–250K" },
  { value: "250k-500k", label: "250K–500K" },
  { value: "500k-plus", label: "500K+" },
] as const;

export const NICHE_OPTIONS = [
  "OnlyFans Marketing",
  "AI Influencers",
  "Creator Economy",
  "Digital Marketing",
  "Agency Content",
  "Other",
] as const;

export const TIER_OPTIONS = [
  { value: "rising", label: "Rising ($1K/mo)" },
  { value: "established", label: "Established ($2.5K/mo)" },
  { value: "elite", label: "Elite ($5K/mo)" },
  { value: "custom", label: "Custom (500K+ subs)" },
] as const;

export const REFERRAL_OPTIONS = [
  { value: "youtube", label: "YouTube" },
  { value: "twitter", label: "Twitter / X" },
  { value: "instagram", label: "Instagram" },
  { value: "tiktok", label: "TikTok" },
  { value: "referral", label: "Friend / Referral" },
  { value: "other", label: "Other" },
] as const;
