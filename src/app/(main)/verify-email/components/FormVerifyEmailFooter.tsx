import Button from "@/ui/components/Button";
import Link from "next/link";
import { IconArrowLeft } from "../../../../../public/icons";

export default function FormVerifyEmailFooter(): React.ReactNode {
  return (
    <div className="flex flex-col gap-6">
      <Button variant="primary" className="w-full">
        Verify email
      </Button>
      <div className="flex flex-col ">
        <p className="text-center text-sm">Didn't receive the code?</p>
        <div className="flex flex-col gap-4">
          <Button variant="outline" type="button">
            Resend code
          </Button>
          <div className="flex items-center gap-2">
            <IconArrowLeft className="text-sm text-[var(--color-text-gray)]" />
            <Link href="/" className="text-sm text-[var(--color-text-gray)]">
              Use a different email
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
