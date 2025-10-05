import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import Input from "./Input";
import { ReactElement } from "react";

interface IFormFieldProps<T extends FieldValues> {
  label: string;
  type: string;
  name: Path<T>;
  control: Control<T>;
  error?: FieldError;
  placeholder: string;
  id?: string;
  withIcon?: boolean;
  showIcon?: boolean;
  secondType?: string;
  setShowIcon?: (value: boolean) => void;
  icon?: ReactElement;
  secondIcon?: ReactElement;
}

export default function FormField<T extends FieldValues>({
  label,
  type,
  name,
  control,
  error,
  placeholder,
  id,
  withIcon,
  showIcon,
  secondType,
  setShowIcon,
  icon,
  secondIcon,
}: IFormFieldProps<T>): React.ReactNode {
  return (
    <div>
      <label htmlFor={id || label.toLocaleLowerCase()}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) =>
          withIcon ? (
            <div className="relative">
              <Input
                type={showIcon && secondType ? secondType : type}
                className="border border-[var(--color-gray)] rounded-md p-2 outline-none text-[var(--color-gray-plus)] text-sm w-full"
                placeholder={
                  placeholder || `Enter your ${label.toLocaleLowerCase()}`
                }
                {...field}
                id={id ?? label.toLocaleLowerCase()}
                error={error?.message}
              />
              <span
                className="absolute top-3 right-3 text-[var(--color-gray-plus)] bg-white cursor-pointer"
                onClick={() => {
                  setShowIcon?.(!showIcon);
                }}
              >
                {!showIcon ? icon : secondIcon}
              </span>
            </div>
          ) : (
            <Input
              {...field}
              id={id ?? label.toLocaleLowerCase()}
              type={type}
              placeholder={
                placeholder || `Enter your ${label.toLocaleLowerCase()}`
              }
              error={error?.message}
            />
          )
        }
      />
    </div>
  );
}
