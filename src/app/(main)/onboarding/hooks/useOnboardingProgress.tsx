import { useState } from "react";
import { useForm } from "react-hook-form";
import { CURRENT_FORM_ONBOARDING } from "../utils/constants/formSchemaOnboarding";
import { IOnboardingRequest } from "@/interfaces/onboarding";

export default function useOnboardingProgress() {
  const [step, setStep] = useState<number>(1);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: CURRENT_FORM_ONBOARDING,
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  // Filter errors to only show relevant ones for current step
  const getErrorsForStep = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return {
          currency: errors.currency,
          monthlyIncome: errors.monthlyIncome,
        };
      case 2:
        return {
          financialGoals: errors.financialGoals,
        };
      case 3:
        return {
          budgetPreference: errors.budgetPreference,
        };
      case 4:
        return {
          currentBalance: errors.currentBalance,
        };
      default:
        return {};
    }
  };

  const filteredErrors = getErrorsForStep(step);

  // Navigation logic
  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Step information
  const isLastStep = step === 4;
  const isFirstStep = step === 1;

  const handleOnboardingSubmit = async (
    data: IOnboardingRequest
  ): Promise<void> => {
    console.log("Onboarding data:", data);
  };

  return {
    step,
    setStep,
    control,
    handleSubmit,
    setError,
    errors: filteredErrors,
    handleOnboardingSubmit,
    handleNext,
    handleBack,
    isLastStep,
    isFirstStep,
  };
}
