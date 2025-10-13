import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import Input from "./Input";

interface IFormFieldRadioProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  type: string;
  placeholder: string;
  id?: string;
  label: string;
  error?: FieldError;
  text: string;
}
export default function FormFieldRadio<T extends FieldValues>({
  name,
  control,
  type,
  placeholder,
  id,
  label,
  error,
  text,
}: IFormFieldRadioProps<T>): React.ReactNode {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="flex items-center gap-4 border border-[var(--color-gray-border)] rounded-lg pl-5 cursor-pointer">
            <input
              type={type}
              placeholder={placeholder}
              {...field}
              id={id ?? label.toLocaleLowerCase()}
              className="bg-red-600"
            />
            <p className="text-base">{text}</p>
          </div>
        )}
      />
    </div>
  );
}
