import { z } from "zod";

export const applicationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  youtubeUrl: z
    .string()
    .url("Please enter a valid URL")
    .refine(
      (url) => /youtube\.com|youtu\.be/i.test(url),
      "Must be a YouTube URL"
    ),
  subscriberCount: z.string().min(1, "Please select your subscriber count"),
  avgViews: z
    .string()
    .min(1, "Please enter your average views")
    .refine((val) => !isNaN(Number(val.replace(/,/g, ""))), "Must be a number"),
  contentNiche: z
    .array(z.string())
    .min(1, "Select at least one niche"),
  otherNiche: z.string().optional(),
  videoLink1: z.string().url("Please enter a valid URL"),
  videoLink2: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  videoLink3: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  motivation: z
    .string()
    .min(20, "Please write at least 20 characters")
    .max(500, "Maximum 500 characters"),
  preferredTier: z.string().min(1, "Please select a tier"),
  referralSource: z.string().min(1, "Please tell us how you found us"),
  notes: z.string().max(500).optional(),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;
