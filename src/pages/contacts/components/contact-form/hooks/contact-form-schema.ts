import * as z from "zod";

export const contactFormSchema = z.object({
  occupation: z.string("REQUIRED"),
  fullName: z.string("REQUIRED").min(4, { message: "Content is too short" }),
  instagram: z.string("REQUIRED").toLowerCase(),
  telegram: z.string("REQUIRED").regex(/^\+7\d{10}$/, {
    message: "ERROR! PHONE INVALID FORMAT. USE +7XXXXXXXXXX FORMAT",
  }),
  agency: z.string().optional(),
  other: z.string().optional(),
  comment: z.string().optional(),
});
