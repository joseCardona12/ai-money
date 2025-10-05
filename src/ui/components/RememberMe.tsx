import Input from "./Input";

interface IRememberMeProps {
  setCheckRemember: (value: boolean) => void;
  checkRemember: boolean;
}
export default function RememberMe({
  setCheckRemember,
  checkRemember,
}: IRememberMeProps): React.ReactNode {
  return (
    <div className="flex items-center p-0 gap-1">
      <Input
        type="checkbox"
        className="border border-[var(--color-gray-plus)] rounded-md cursor-pointer"
        onChange={(e) => {
          setCheckRemember(e.target.checked);
        }}
        checked={checkRemember}
      />
      <p
        className="text-[.8rem] text-[var(--color-gray-plus)] cursor-pointer"
        onClick={() => {
          setCheckRemember(!checkRemember);
        }}
      >
        Remember me
      </p>
    </div>
  );
}
