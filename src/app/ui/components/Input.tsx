interface IInputProps {
  type: string;
  placeholder?: string;
}
export default function Input({ type, placeholder }: IInputProps) {
  return (
    <input
      type={type}
      className="border border-[var(--color-gray)] rounded-md p-2 outline-none text-[var(--color-gray-plus)] text-sm"
      placeholder={placeholder}
    />
  );
}
