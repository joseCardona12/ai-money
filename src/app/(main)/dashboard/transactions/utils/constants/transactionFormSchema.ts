import z from "zod";

export const transactionFormSchema = z.object({
  type: z.string().min(1, "Type is required"),
  category: z.string().min(1, "Category is required"),
  amount: z.number().min(0.01, "Amount must be greater than 0"),
  date: z.string().min(1, "Date is required"),
  description: z.string().optional(),
});

export const CURRENT_FORM_TRANSACTION = {
  type: "",
  category: "",
  amount: 0,
  date: new Date().toISOString().split('T')[0],
  description: "",
};
