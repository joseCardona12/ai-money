import { IOnboardingRequest } from "@/interfaces/onboarding";
import FormFieldRadio from "@/ui/components/FormFieldRadio";
import { Control, FieldErrors } from "react-hook-form";

interface IOnboardingProgressBodyProps {
  control: Control<IOnboardingRequest>;
  errors: FieldErrors<IOnboardingRequest>;
}
export default function OnboardingProgressBody({
  control,
  errors,
}: IOnboardingProgressBodyProps): React.ReactNode {
  return (
    <div>
      <h5>Preferred Currency</h5>
      <div className="flex flex-col gap-2">
        <FormFieldRadio<IOnboardingRequest>
          label="Full name"
          name="email"
          type="radio"
          placeholder="email"
          error={errors.email}
          control={control}
          text="USD - US Dollar ($)"
        />
        <FormFieldRadio<IOnboardingRequest>
          label="Full name"
          name="email"
          type="radio"
          placeholder="email"
          error={errors.email}
          control={control}
          text="COL - Colombian Peso ($)"
        />
      </div>
    </div>
  );
}
