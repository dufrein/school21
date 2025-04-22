import { loginObjectSchema } from "@constants";
import { z } from "zod";

export const signupFormSchema = z.object({
  name: z
    .string()
    .min(5, "Минимальная длина 5")
    .max(25, "Максимальная длина 15")
    .regex(/^[а-яёй]+$/i, "Имя может содержать только русские буквы"),
  surname: z
    .string()
    .min(5, "Минимальная длина 5")
    .max(25, "Максимальная длина 25")
    .regex(/^[а-яёй]+$/i, "Фамилия может содержать только русские буквы"),
  ...loginObjectSchema,
});
