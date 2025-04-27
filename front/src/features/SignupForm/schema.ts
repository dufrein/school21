import { loginObjectSchema, nameSurnameSchema } from "@constants";
import { z } from "zod";

export const signupFormSchema = z.object({
  ...nameSurnameSchema,
  ...loginObjectSchema,
});
