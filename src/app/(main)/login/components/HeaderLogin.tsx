import Button from "@/app/ui/components/Button";
import { IconGoogle } from "../../../../../public/icons";

export default function HeaderLogin(): React.ReactNode {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 items-center">
        <div className="w-11 h-11 rounded-full bg-[var(--color-orange)]"></div>
        <div className="flex flex-col items-center">
          <h1 className="text-[1.3rem] text-[var(--color-black)] font-bold">
            Welcome back
          </h1>
          <p className="text-[var(--color-gray-plus)]">
            Please enter your details to sign in.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 w-full justify-between">
        <Button variant="gray" onClick={() => {}} type="button">
          <IconGoogle />
        </Button>
        <Button variant="gray" onClick={() => {}} type="button">
          <IconGoogle />
        </Button>
        <Button variant="gray" onClick={() => {}} type="button">
          <IconGoogle />
        </Button>
      </div>
    </div>
  );
}
