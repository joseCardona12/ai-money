import { IUserData } from "@/interfaces/dashboard";

interface IUserDataProps {
  userData: IUserData;
}
export default function UserData({
  userData,
}: IUserDataProps): React.ReactNode {
  return (
    <div className="flex gap-3 items-center">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium">{userData.name}</p>
        <p className="text-xs" style={{ color: "var(--color-text-gray)" }}>
          {userData.email}
        </p>
      </div>
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium"
        style={{ backgroundColor: "var(--color-blue)" }}
      >
        {userData.initials}
      </div>
    </div>
  );
}
