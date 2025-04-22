import { loginObjectSchema } from "@constants";
import { z } from "zod";

export const resetPassFormSchema = z.object({...loginObjectSchema});
