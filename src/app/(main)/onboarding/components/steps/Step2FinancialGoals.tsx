import { IOnboardingRequest } from "@/interfaces/onboarding";
import { Control, FieldErrors, Controller } from "react-hook-form";
import {
  FINANCIAL_GOALS_OPTIONS,
  IFinancialGoalOption,
} from "../../utils/constants/onboardingOptions";

interface IStep2FinancialGoalsProps {
  control: Control<IOnboardingRequest>;
  errors: FieldErrors<IOnboardingRequest>;
}

export default function Step2FinancialGoals({
  control,
  errors,
}: IStep2FinancialGoalsProps): React.ReactNode {
  return (
    <div className="w-full max-w-full">
      <div>
        <Controller
          name="financialGoals"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              {FINANCIAL_GOALS_OPTIONS.map((goal: IFinancialGoalOption) => {
                const isSelected = field.value.includes(goal.value);

                return (
                  <label
                    key={goal.value}
                    className={`w-full flex items-start gap-3 border rounded-lg p-3 cursor-pointer transition-colors ${
                      isSelected ? "selected-goal" : "unselected-goal"
                    }`}
                    style={{
                      borderColor: isSelected
                        ? "var(--color-blue)"
                        : "var(--color-gray-border)",
                      backgroundColor: isSelected
                        ? "var(--color-blue-light)"
                        : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor =
                          "var(--color-gray-hover)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={(e) => {
                        if (e.target.checked) {
                          field.onChange([...field.value, goal.value]);
                        } else {
                          field.onChange(
                            field.value.filter((v: string) => v !== goal.value)
                          );
                        }
                      }}
                      className="w-4 h-4 mt-0.5 rounded flex-shrink-0"
                      style={{
                        accentColor: "var(--color-blue)",
                        borderColor: "var(--color-gray-border)",
                      }}
                    />
                    <div className="flex flex-col gap-0">
                      <h6
                        className="font-medium text-sm"
                        style={{ color: "var(--color-text-black)" }}
                      >
                        {goal.label}
                      </h6>
                      <p
                        className="text-xs mt-0.5 break-words"
                        style={{ color: "var(--color-text-gray)" }}
                      >
                        {goal.description}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>
          )}
        />
        {errors.financialGoals && (
          <p className="text-sm mt-2" style={{ color: "var(--color-red)" }}>
            {errors.financialGoals.message}
          </p>
        )}
      </div>
    </div>
  );
}
