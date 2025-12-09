import { REQUIRED_FIELD_MESSAGE } from "@/constants/zod-messages";
import { z } from "zod";

const usernameError = REQUIRED_FIELD_MESSAGE("Username");
const passwordError = REQUIRED_FIELD_MESSAGE("Password");

export const BASIC_AUTH_SCHEMA = z.object({
  username: z.string({ error: usernameError }).min(1, usernameError),
  password: z.string({ error: passwordError }).min(1, passwordError),
});

export type IBasicAuthSchema = z.infer<typeof BASIC_AUTH_SCHEMA>;
