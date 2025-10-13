import { IOnboardingRequest } from "@/interfaces/onboarding";
import z from "zod";

export const step1Schema = z.object({
  currency: z.string().optional(),
  monthlyIncome: z
    .number()
    .min(0, "Monthly income must be a positive number")
    .optional(),
});

export const step2Schema = z.object({
  financialGoals: z
    .array(z.string())
    .min(1, "Please select at least one financial goal"),
});

export const step3Schema = z.object({
  budgetPreference: z.string().min(1, "Please select a budget preference"),
});

export const step4Schema = z.object({
  currentBalance: z.number().min(0, "Balance must be a positive number"),
});

export const formSchemaOnboarding = z.object({
  currency: z.string().min(1, "Please select a currency"),
  monthlyIncome: z
    .number()
    .min(0, "Monthly income must be a positive number")
    .optional(),
  financialGoals: z
    .array(z.string())
    .min(1, "Please select at least one financial goal"),
  budgetPreference: z.string().min(1, "Please select a budget preference"),
  currentBalance: z.number().min(0, "Balance must be a positive number"),
});

export const CURRENT_FORM_ONBOARDING: IOnboardingRequest = {
  currency: "",
  monthlyIncome: undefined,
  financialGoals: [],
  budgetPreference: "",
  currentBalance: 0,
};
