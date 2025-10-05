import { ISelect } from "@/interfaces/select";

interface ISelectProps {
  values: ISelect[];
  name: string;
  id: string;
}
export default function Select({
  values,
  name,
  id,
}: ISelectProps): React.ReactNode {
  return (
    <select
      name={name}
      id={id}
      className="border border-[var(--color-gray)] rounded-md p-2 text-sm text-[var(--color-gray)] cursor-pointer outline-none"
    >
      <option>Select..</option>
      {values.map((item: ISelect, index: number) => (
        <option key={index}>{item.value}</option>
      ))}
    </select>
  );
}
