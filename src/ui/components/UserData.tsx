import { IUserData } from "@/interfaces/dashboard";
import { useState } from "react";
import ModalOption from "./ModalOption";
import { IModalOption } from "@/interfaces/ModalOption";

interface IUserDataProps {
  userData: IUserData;
  options: IModalOption[];
}
export default function UserData({
  userData,
  options,
}: IUserDataProps): React.ReactNode {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="flex gap-3 items-center relative">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium">{userData.name}</p>
        <p className="text-xs" style={{ color: "var(--color-text-gray)" }}>
          {userData.email}
        </p>
      </div>
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium cursor-pointer bg-[var(--color-blue)]"
        onClick={() => setShowMenu(!showMenu)}
      >
        {userData.initials}
      </div>
      {showMenu && <ModalOption title="My account" options={options} />}
    </div>
  );
}
