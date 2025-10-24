import Button from "@/ui/components/Button";
import Link from "next/link";
import { IconSpinner } from "../../../../../public/icons";

interface IFormLoginFooterProps {
  loading: boolean;
}
export default function FormLoginFooter({
  loading,
}: IFormLoginFooterProps): React.ReactNode {
  return (
    <div className="w-full flex flex-col gap-4">
      <Button
        variant="primary"
        className="w-full"
        type="submit"
        disabled={loading}
      >
        {loading ? "Signing in..." : "Sign in"}
      </Button>
      <p className="text-sm text-[var(--color-text-gray)] text-center">
        Don't have an account?{" "}
        <Link href="/sign-up" className="text-[var(--color-blue)]">
          Sign Up for free
        </Link>
      </p>
    </div>
  );
}
