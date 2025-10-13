export interface IOnboardingRequest {
  // Step 1: Basic Information
  currency: string;
  monthlyIncome?: number;

  // Step 2: Financial Goals
  financialGoals: string[];

  // Step 3: Budget Preferences
  budgetPreference: string;

  // Step 4: Initial Setup
  currentBalance: number;
}
