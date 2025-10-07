import { ISelect } from "@/interfaces/select";

interface ISelectProps {
  values: ISelect[];
  name: string;
  id: string;
  selectedCode: (value: string) => void;
}
export default function Select({
  values,
  name,
  id,
  selectedCode,
}: ISelectProps): React.ReactNode {
  return (
    <select
      name={name}
      id={id}
      className="border border-[var(--color-gray)] rounded-md p-2 text-sm text-[var(--color-gray)] cursor-pointer outline-none"
      onChange={(e) => {
        selectedCode(e.target.value ?? "");
      }}
    >
      <option>Select..</option>
      {values.map((item: ISelect, index: number) => (
        <option key={index}>{item.value}</option>
      ))}
    </select>
  );
}
