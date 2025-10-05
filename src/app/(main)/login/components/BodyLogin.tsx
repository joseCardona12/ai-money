import InputWithIcon from "@/ui/components/InputWithIcon";
import { IconEye, IconEyeOff } from "../../../../../public/icons";
import RememberMe from "@/ui/components/RememberMe";
import FormField from "@/ui/components/FormField";
import { ILoginRequest } from "@/interfaces/login";
import { Control, FieldErrors } from "react-hook-form";
import Link from "next/link";

interface IBodyLoginProps {
  control: Control<ILoginRequest>;
  errors: FieldErrors<ILoginRequest>;
  showIcon: boolean;
  checkRemember: boolean;
  setShowIcon: (value: boolean) => void;
  setCheckRemember: (value: boolean) => void;
}
export default function BodyLogin({
  control,
  errors,
  showIcon,
  checkRemember,
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
        <RememberMe
          setCheckRemember={setCheckRemember}
          checkRemember={checkRemember}
        />
        <Link
          href="/"
          className="text-sm text-[var(--color-gray-plus)] hover:text-[var(--color-orange)] underline"
        >
          Forgot password
        </Link>
      </div>
    </div>
  );
}
