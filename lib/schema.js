

import { z } from "zod";

export const onboardingSchema = z.object({
  industry: z.string().min(1, "Industry is required"),
  subIndustry: z.string().min(1, "Sub Industry is required"),
  bio: z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio must be at most 500 characters").
    optional(),
  experience: z.string()
    .transform((val) => parseInt(val, 10))
    .pipe(z.number().min(0, "Experience must be at least 0 year").max(50,
      "Experience must be at most 50 years"
    )),
  skills: z.string().transform((val) =>
    val ? val.split(",").map((skill) => skill.trim())
      .fliter(Boolean) : undefined
  )
})

