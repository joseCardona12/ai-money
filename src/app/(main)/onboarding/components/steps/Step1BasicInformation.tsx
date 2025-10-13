import { IOnboardingRequest } from "@/interfaces/onboarding";
import FormFieldNumber from "@/ui/components/FormFieldNumber";
import FormFieldRadio from "@/ui/components/FormFieldRadio";
import { Control, FieldErrors } from "react-hook-form";
import {
  CURRENCY_OPTIONS,
  ICurrencyOption,
} from "../../utils/constants/onboardingOptions";

interface IStep1BasicInformationProps {
  control: Control<IOnboardingRequest>;
  errors: FieldErrors<IOnboardingRequest>;
}

export default function Step1BasicInformation({
  control,
  errors,
}: IStep1BasicInformationProps): React.ReactNode {
  return (
    <div className="w-full max-w-full">
      <div className="mb-6">
        <h5 className="font-medium text-base mb-4">Preferred Currency</h5>
        <div className="flex flex-col gap-3">
          {CURRENCY_OPTIONS.map((currency: ICurrencyOption) => (
            <FormFieldRadio<IOnboardingRequest>
              key={currency.value}
              name="currency"
              type="radio"
              error={errors.currency}
              control={control}
              text={`${currency.label} (${currency.symbol})`}
              value={currency.value}
            />
          ))}
        </div>
      </div>

      <div>
        <FormFieldNumber<IOnboardingRequest>
          label="Monthly Income"
          name="monthlyIncome"
          placeholder="5000"
          error={errors.monthlyIncome}
          control={control}
          isOptional
          min={0}
        />
        <p className="text-xs text-[var(--color-text-gray)] mt-1">
          This helps us provide better budget recommendations
        </p>
      </div>
    </div>
  );
}
