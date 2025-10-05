import { buttonVariant, TButtonVariant } from "@/utils/constants/buttonVariant";

interface IButtonProps {
  children: React.ReactNode;
  variant: TButtonVariant;
  onClick: () => void;
  type: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}
export default function Button({
  children,
  variant,
  onClick,
  type,
  disabled,
}: IButtonProps): React.ReactNode {
  return (
    <button
      className={`p-2 rounded-md pl-10 pr-10 cursor-pointer transition-colors duration-200 ${buttonVariant[variant]} w-full text-sm flex justify-center`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
