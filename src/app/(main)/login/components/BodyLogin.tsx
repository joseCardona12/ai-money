import InputWithIcon from "@/app/ui/components/InputWithIcon";
import { IconEye, IconEyeOff } from "../../../../../public/icons";
import RememberMe from "@/app/ui/components/RememberMe";
import FormField from "@/app/ui/components/FormField";
import { ILoginRequest } from "@/app/interfaces/login";
import { Control, FieldErrors } from "react-hook-form";

interface IBodyLoginProps {
  control: Control<ILoginRequest>;
  errors: FieldErrors<ILoginRequest>;
  showIcon: boolean;
  setShowIcon: (value: boolean) => void;
  setCheckRemember: (value: boolean) => void;
}
export default function BodyLogin({
  control,
  errors,
  showIcon,
  setShowIcon,
  setCheckRemember,
}: IBodyLoginProps): React.ReactNode {
  return (
    <div className="flex flex-col gap-4">
      <FormField<ILoginRequest>
        control={control}
        label=""
        name="email"
        type="email"
        placeholder="Enter your email..."
        error={errors.email}
      />
      <FormField<ILoginRequest>
        control={control}
        label=""
        name="password"
        type="text"
        secondType="password"
        placeholder="Enter your password..."
        error={errors.password}
        withIcon
        icon={<IconEye />}
        secondIcon={<IconEyeOff />}
        setShowIcon={setShowIcon}
        showIcon={showIcon}
      />
      <div className="flex items-center justify-between">
        <RememberMe setCheckRemember={setCheckRemember} />
        <p className="text-sm text-[var(--color-gray-plus)]">Forgot password</p>
      </div>
    </div>
  );
}
