import { loginObjectSchema } from "@constants";
import { z } from "zod";

export const loginFormSchema = z.object({...loginObjectSchema});
