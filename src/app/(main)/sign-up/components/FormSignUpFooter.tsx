import Button from "@/ui/components/Button";
import { IconArrowRight } from "../../../../../public/icons";
import Link from "next/link";

export default function FormSignUpFooter(): React.ReactNode {
  return (
    <div className="w-full flex flex-col gap-2">
      <Button
        variant="primary"
        className="w-full flex items-center justify-center gap-2"
      >
        Create account
        <IconArrowRight />
      </Button>
      <p className="text-sm text-[var(--color-text-gray)] text-center">
        Do you have an account?{" "}
        <Link href="/login" className="text-[var(--color-blue)]">
          Sign in
        </Link>
      </p>
    </div>
  );
}
