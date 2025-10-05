import Button from "@/ui/components/Button";
import { IconSpinner } from "../../../../../public/icons";
import Link from "next/link";

interface IFooterSignUpProps {
  loading: boolean;
}
export default function FooterSignUp({
  loading,
}: IFooterSignUpProps): React.ReactNode {
  return (
    <div className="w-full flex flex-col gap-2">
      <Button
        variant={loading ? "disabled" : "black"}
        disabled={loading}
        onClick={() => {}}
        type="submit"
      >
        {loading ? <IconSpinner className="animate-spin" /> : "Sign Up"}
      </Button>
      <p className="text-sm text-[var(--color-gray-plus)] text-center">
        Do you have an account?{" "}
        <Link href="/login" className="text-[var(--color-orange)]">
          Login
        </Link>
      </p>
    </div>
  );
}
