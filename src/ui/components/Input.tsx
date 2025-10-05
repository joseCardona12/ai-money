interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  name?: string;
  error?: string;
}
export default function Input({
  type,
  placeholder,
  error,
  name,
  ...props
}: IInputProps): React.ReactNode {
  return (
    <div className="flex flex-col gap-[5px]">
      <input
        type={type}
        className={`border border-[var(--color-gray)] rounded-md p-2 outline-none text-[var(--color-gray-plus)] text-sm w-full ${
          error && "border-[var(--color-red)]"
        }`}
        placeholder={placeholder}
        name={name}
        {...props}
      />
      {error && <p className="text-[var(--color-red)] text-sm">{error}</p>}
    </div>
  );
}
