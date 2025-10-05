import { ReactElement, useState } from "react";
import Input from "./Input";

interface IInputWithIconProps {
  type: string;
  placeholder: string;
  icon: ReactElement;
  secondIcon?: ReactElement;
  secondType?: string;
}
export default function InputWithIcon({
  type,
  placeholder,
  icon,
  secondIcon,
  secondType,
}: IInputWithIconProps): React.ReactNode {
  const [showIcon, setShowIcon] = useState<boolean>(false);
  return (
    <div className="relative">
      <Input
        type={showIcon && secondType ? secondType : type}
        className="border border-[var(--color-gray)] rounded-md p-2 outline-none text-[var(--color-gray-plus)] text-sm w-full"
        placeholder={placeholder}
      />
      <span
        className="absolute top-3 right-3 text-[var(--color-gray-plus)] bg-white cursor-pointer"
        onClick={() => setShowIcon(!showIcon)}
      >
        {!showIcon ? icon : secondIcon}
      </span>
    </div>
  );
}
