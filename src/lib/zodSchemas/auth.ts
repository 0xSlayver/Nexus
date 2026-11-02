import * as z from "@zod/mini";

// --- Sign In Schema ---
export const signInSchema = z.object({
  email: z.string().check(z.email({ message: "Invalid email address." })),

  password: z.string().check(z.minLength(8, { message: "Invalid password." })),
});

// --- Sign Up Schema ---
export const signUpSchema = z
  .object({
    name: z.string().check(
      z.minLength(6, {
        message: "Your name must be more than 6 characters.",
      }),
    ),

    email: z
      .string()
      .check(
        z.lowercase(),
        z.email({ message: "Please enter a valid email address." }),
      ),

    password: z
      .string()
      .check(
        z.minLength(8, { message: "Password must be more than 8 characters" }),
      ),
    confirmPassword: z.string(),
  })
  .check(
    z.refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }),
  );
