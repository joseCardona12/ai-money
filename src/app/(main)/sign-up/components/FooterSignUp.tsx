import Button from "@/ui/components/Button";
import { IconSpinner } from "../../../../../public/icons";
import Link from "next/link";
import Modal from "@/ui/components/Modal";

interface IFooterSignUpProps {
  loading: boolean;
  setOpenModal: (value: boolean) => void;
  openModal: boolean;
}
export default function FooterSignUp({
  loading,
  setOpenModal,
  openModal,
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
      <Modal setOpenModal={setOpenModal} openModal={openModal} high="medium">
        <div className="flex flex-col justify-center items-center gap-4">
          <IconSpinner className="text-[var(--color-orange)] text-4xl animate-spin" />
          <p className="text-[var(--color-gray-plus)] font-medium">
            Loading...
          </p>
        </div>
      </Modal>
    </div>
  );
}
