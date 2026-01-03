import { Complexity, nameSurnameSchema, zodEnumOptions } from "@constants";
import { z } from "zod";
import { SexEnum } from "@constants";

export const accountSettingsSchema = z.object({
  ...nameSurnameSchema,
  sex: z.nativeEnum(SexEnum, zodEnumOptions).nullable(),
  level: z.nativeEnum(Complexity, zodEnumOptions),
});
