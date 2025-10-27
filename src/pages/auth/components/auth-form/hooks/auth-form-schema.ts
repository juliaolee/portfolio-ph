import * as z from "zod";

export const authFormSchema = z.object({
  username: z.string("REQUIRED").min(3, { message: "Username is too short" }),
  password: z.string("REQUIRED").min(3, { message: "Password is too short" }),
});
