import { IOnboardingRequest } from "@/interfaces/onboarding";
import { Control, FieldErrors } from "react-hook-form";
import Step1BasicInformation from "./steps/Step1BasicInformation";
import Step2FinancialGoals from "./steps/Step2FinancialGoals";
import Step3BudgetPreferences from "./steps/Step3BudgetPreferences";
import Step4InitialSetup from "./steps/Step4InitialSetup";

interface IOnboardingProgressBodyProps {
  control: Control<IOnboardingRequest>;
  errors: FieldErrors<IOnboardingRequest>;
  step: number;
}

export default function OnboardingProgressBody({
  control,
  errors,
  step,
}: IOnboardingProgressBodyProps): React.ReactNode {
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <Step1BasicInformation control={control} errors={errors} />;
      case 2:
        return <Step2FinancialGoals control={control} errors={errors} />;
      case 3:
        return <Step3BudgetPreferences control={control} errors={errors} />;
      case 4:
        return <Step4InitialSetup control={control} errors={errors} />;
      default:
        return <Step1BasicInformation control={control} errors={errors} />;
    }
  };

  return (
    <div className="w-full max-w-full overflow-hidden">
      {renderStepContent()}
    </div>
  );
}
