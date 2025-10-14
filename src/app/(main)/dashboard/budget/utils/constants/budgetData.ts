import { IBudgetCategory, IBudgetSummary, IBudgetAlert } from "../../types/budget";
import { SelectOption } from "@/interfaces/selectOption";

export const BUDGET_CATEGORIES: IBudgetCategory[] = [
  {
    id: 1,
    name: "Food & Dining",
    icon: "🍽️",
    color: "#FF6B35",
    budgeted: 500,
    spent: 406,
  },
  {
    id: 2,
    name: "Transportation",
    icon: "🚗",
    color: "#4285F4",
    budgeted: 400,
    spent: 420,
    isOverBudget: true,
  },
  {
    id: 3,
    name: "Shopping",
    icon: "🛍️",
    color: "#9C27B0",
    budgeted: 500,
    spent: 380,
  },
  {
    id: 4,
    name: "Bills & Utilities",
    icon: "💡",
    color: "#FFC107",
    budgeted: 1200,
    spent: 1148,
  },
  {
    id: 5,
    name: "Entertainment",
    icon: "🎬",
    color: "#E91E63",
    budgeted: 300,
    spent: 340,
    isOverBudget: true,
  },
  {
    id: 6,
    name: "Healthcare",
    icon: "🏥",
    color: "#F44336",
    budgeted: 200,
    spent: 85,
  },
  {
    id: 7,
    name: "Education",
    icon: "📚",
    color: "#2196F3",
    budgeted: 150,
    spent: 150,
  },
  {
    id: 8,
    name: "Other",
    icon: "📋",
    color: "#607D8B",
    budgeted: 250,
    spent: 180,
  },
];

export const BUDGET_SUMMARY: IBudgetSummary = {
  totalBudgeted: 3500,
  totalSpent: 3109,
  remaining: 391,
  percentageSpent: 88.8,
  month: "January",
  year: 2024,
};

export const BUDGET_ALERTS: IBudgetAlert[] = [
  {
    id: 1,
    categoryName: "Transportation",
    overAmount: 20,
    message: "Transportation: $20.00 over",
  },
  {
    id: 2,
    categoryName: "Entertainment",
    overAmount: 40,
    message: "Entertainment: $40.00 over",
  },
];

export const AVAILABLE_CATEGORIES: SelectOption[] = [
  { value: "food-dining", label: "Food & Dining" },
  { value: "transportation", label: "Transportation" },
  { value: "shopping", label: "Shopping" },
  { value: "bills-utilities", label: "Bills & Utilities" },
  { value: "entertainment", label: "Entertainment" },
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
  { value: "travel", label: "Travel" },
  { value: "fitness", label: "Fitness & Sports" },
  { value: "personal-care", label: "Personal Care" },
  { value: "gifts", label: "Gifts & Donations" },
  { value: "insurance", label: "Insurance" },
  { value: "taxes", label: "Taxes" },
  { value: "investments", label: "Investments" },
  { value: "other", label: "Other" },
];

export const MONTHS: SelectOption[] = [
  { value: "january", label: "January" },
  { value: "february", label: "February" },
  { value: "march", label: "March" },
  { value: "april", label: "April" },
  { value: "may", label: "May" },
  { value: "june", label: "June" },
  { value: "july", label: "July" },
  { value: "august", label: "August" },
  { value: "september", label: "September" },
  { value: "october", label: "October" },
  { value: "november", label: "November" },
  { value: "december", label: "December" },
];
