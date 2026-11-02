import * as z from "@zod/mini";
import { signInSchema, signUpSchema } from "@/lib/zodSchemas/auth";

export type SignInFormValuesTypes = z.infer<typeof signInSchema>;
export type SignUpFormValuesTypes = z.infer<typeof signUpSchema>;
