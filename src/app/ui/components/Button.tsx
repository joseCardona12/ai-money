import {
  buttonVariant,
  TButtonVariant,
} from "@/app/src/utils/constants/buttonVariant";

interface IButtonProps {
  children: React.ReactNode;
  variant: TButtonVariant;
  onClick: () => void;
}
export default function Button({
  children,
  variant,
  onClick,
}: IButtonProps): React.ReactNode {
  return (
    <button
      className={`p-2 rounded-md pl-6 pr-6 cursor-pointer transition-colors duration-200 ${buttonVariant[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
