import {
  CURRENT_BUTTON_VARIANT,
  TButtonVariant,
} from "@/utils/constants/buttonVariant";
import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: TButtonVariant;
  className?: string;
}
export default function Button({
  children,
  variant,
  className,
  ...props
}: IButtonProps): React.ReactNode {
  return (
    <button
      className={`${CURRENT_BUTTON_VARIANT[variant]} transition-colors duration-200 text-sm pl-6 pr-6 pt-3 pb-3 rounded-md ${className} shadow-sm/2`}
      {...props}
    >
      {children}
    </button>
  );
}
