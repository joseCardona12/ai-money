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
        className={`border border-[var(--color-gray-border)] p-2 outline-none rounded-md text-sm text-[var(--color-text-gray)] shadow-sm/2 focus:shadow-sm ${
          error && "border-[var(--color-red)] text-[var(--color-red)]"
        }`}
        placeholder={placeholder}
        name={name}
        {...props}
      />
      {error && <p className="text-[var(--color-red)] text-sm">{error}</p>}
    </div>
  );
}
