import { Complexity, nameSurnameSchema } from "@constants";
import { z } from "zod";
import { SexEnum } from '@constants';

export const accountSettingsSchema = z.object({
  ...nameSurnameSchema,
  sex: z.nativeEnum(SexEnum).nullable(),
  level: z.nativeEnum(Complexity)
});
