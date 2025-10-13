import BarProgress from "@/ui/components/BarProgress";
import useOnboardingProgress from "../hooks/useOnboardingProgress";
import FormField from "@/ui/components/FormField";
import { IOnboardingRequest } from "@/interfaces/onboarding";
import FormFieldRadio from "@/ui/components/FormFieldRadio";
import OnboardingProgressBody from "./OnboardingProgressBody";

export default function OnboardingProgress(): React.ReactNode {
  const { step, setStep, errors, control } = useOnboardingProgress();
  return (
    <div className="flex flex-col gap-4">
      <BarProgress step={step} setStep={setStep} totalStep={4} />
      <div>
        <div>
          <h1 className="text-[1.8rem] font-bold">Basic Information</h1>
          <p className="text-[var(--color-text-gray)] text-sm">
            Let's start with some basic details about your finances.
          </p>
        </div>
        <OnboardingProgressBody errors={errors} control={control} />
      </div>
    </div>
  );
}
