import Button from "@/ui/components/Button";
import Link from "next/link";
import { IconSpinner } from "../../../../../public/icons";

interface IFooterLoginProps {
  loading: boolean;
}
export default function FooterLogin({
  loading,
}: IFooterLoginProps): React.ReactNode {
  return (
    <div className="w-full flex flex-col gap-2">
      <Button
        variant={loading ? "disabled" : "black"}
        disabled={loading}
        onClick={() => {}}
        type="submit"
      >
        {loading ? <IconSpinner className="animate-spin" /> : "Sign In"}
      </Button>
      <p className="text-sm text-[var(--color-gray-plus)] text-center">
        Don't have an account yet?{" "}
        <Link href="/sign-up" className="text-[var(--color-orange)]">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
