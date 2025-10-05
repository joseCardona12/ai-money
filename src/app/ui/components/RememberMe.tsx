import Input from "./Input";

interface IRememberMeProps {
  setCheckRemember: (value: boolean) => void;
}
export default function RememberMe({
  setCheckRemember,
}: IRememberMeProps): React.ReactNode {
  return (
    <div className="flex items-center p-0 gap-1">
      <Input
        type="checkbox"
        className="border border-[var(--color-gray-plus)] rounded-md"
        onChange={(e) => {
          setCheckRemember(e.target.checked);
        }}
      />
      <p className="text-[.8rem] text-[var(--color-gray-plus)]">Remember me</p>
    </div>
  );
}
