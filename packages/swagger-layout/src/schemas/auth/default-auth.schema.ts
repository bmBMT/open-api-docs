import { REQUIRED_FIELD_MESSAGE } from "@/constants/zod-messages";
import { z } from "zod";

const error = REQUIRED_FIELD_MESSAGE("Field");

export const DEFAULT_AUTH_SCHEMA = z.object({
  value: z.string({ error }).min(1, error),
});

export type IDefaultAuthSchema = z.infer<typeof DEFAULT_AUTH_SCHEMA>;
