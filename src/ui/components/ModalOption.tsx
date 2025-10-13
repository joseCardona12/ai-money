import { IModalOption } from "@/interfaces/ModalOption";
import { IconLogout } from "../../../public/icons";
import { useRouter } from "next/navigation";

interface IModalOptionProps {
  title: string;
  options: IModalOption[];
}
export default function ModalOption({
  title,
  options,
}: IModalOptionProps): React.ReactNode {
  const router = useRouter();

  return (
    <div className="absolute top-12 right-0 z-100">
      <div className="bg-[var(--color-gray)] border border-[var(--color-gray-border)] rounded-lg w-[200px] shadow-md">
        <h4 className="p-2 pl-4 border-b border-[var(--color-gray-border)]">
          {title}
        </h4>
        <ul className="flex flex-col border-b border-[var(--color-gray-border)]">
          {options.map((option: IModalOption, index: number) => (
            <li
              key={index}
              onClick={() => router.push(option.url)}
              className="flex items-center gap-2 p-2 pl-4 text-sm text-[var(--color-text-gray)] hover:bg-[var(--color-gray-hover)] cursor-pointer"
            >
              <span>{option.icon}</span>
              {option.text}
            </li>
          ))}
        </ul>
        <div className="p-2 pl-4 flex items-center gap-2 text-[var(--color-text-gray)] cursor-pointer text-sm">
          <IconLogout />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
}
