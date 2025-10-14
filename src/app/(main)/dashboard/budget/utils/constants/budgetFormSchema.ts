import { z } from "zod";

export const budgetFormSchema = z.object({
  category: z.string().min(1, "Category is required"),
  monthlyBudget: z.number().min(0.01, "Monthly budget must be greater than 0"),
});

export type BudgetFormData = z.infer<typeof budgetFormSchema>;

export const CURRENT_FORM_BUDGET: BudgetFormData = {
  category: "",
  monthlyBudget: 0,
};
