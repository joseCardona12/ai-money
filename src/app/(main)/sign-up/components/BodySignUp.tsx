import { ISignUpRequestDto } from "@/interfaces/dto/auth";
import FormField from "@/ui/components/FormField";
import Select from "@/ui/components/Select";
import { CURRENT_COUNTRY_NUMBERS } from "@/utils/constants/countryNumbers";
import { Control, FieldErrors } from "react-hook-form";
import { IconEye, IconEyeOff } from "../../../../../public/icons";

interface IBodySignUpProps {
  control: Control<ISignUpRequestDto>;
  errors: FieldErrors<ISignUpRequestDto>;
  showIcon: boolean;
  setShowIcon: (value: boolean) => void;
}
export default function BodySignUp({
  control,
  errors,
  showIcon,
  setShowIcon,
}: IBodySignUpProps): React.ReactNode {
  return (
    <div className="flex flex-col gap-4">
      <FormField<ISignUpRequestDto>
        control={control}
        label=""
        name="email"
        type="text"
        placeholder="Enter your email..."
        error={errors.email}
      />
      <div className="flex items-center justify-between">
        <Select
          values={CURRENT_COUNTRY_NUMBERS.map((country) => ({
            label: country.name,
            value: country.code,
          }))}
          id=""
          name="numbers"
        />
        <FormField<ISignUpRequestDto>
          control={control}
          label=""
          name="cellphone"
          type="number"
          placeholder="Enter your cellphone..."
          error={errors.cellphone}
        />
      </div>
      <FormField<ISignUpRequestDto>
        control={control}
        label=""
        name="password"
        type="text"
        secondType="password"
        placeholder="Enter your password..."
        error={errors.password}
        icon={<IconEye />}
        secondIcon={<IconEyeOff />}
        setShowIcon={setShowIcon}
        showIcon={showIcon}
        withIcon
      />
    </div>
  );
}
