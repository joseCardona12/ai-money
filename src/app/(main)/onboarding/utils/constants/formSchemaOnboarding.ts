import { IOnboardingRequest } from "@/interfaces/onboarding";
import z from "zod";

export const formSchemaOnboarding = z.object({
  fullName: z.string().optional(),
  email: z.string().email("Invalid email format").min(2).max(250),
  password: z
    .string()
    .min(8, "Expected string to have >=8 characters")
    .max(12, "Expected string to have <12 characters")
    .regex(/[A-Z]/, "Must include a capital letter")
    .regex(/[a-z]/, "Must include a lowecase letter"),
});

export const CURRENT_FORM_ONBOARDING: IOnboardingRequest = {
  email: "",
  password: "",
  fullName: "",
};
