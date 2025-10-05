import LineOr from "@/ui/components/LineOr";
import HeaderSignUp from "./HeaderSignUp";
import useSignUp from "../hooks/useSignUp";
import BodySignUp from "./BodySignUp";
import FooterSignUp from "./FooterSignUp";

export default function SignUp(): React.ReactNode {
  const {
    handleSubmit,
    handleSignUp,
    control,
    errors,
    setShowIcon,
    showIcon,
    loading,
  } = useSignUp();
  return (
    <form
      className="bg-white p-6 rounded-lg flex flex-col gap-6"
      onSubmit={handleSubmit(handleSignUp)}
    >
      <HeaderSignUp handleOauthSignUp={() => {}} />
      <LineOr />
      <BodySignUp
        control={control}
        errors={errors}
        setShowIcon={setShowIcon}
        showIcon={showIcon}
      />
      <FooterSignUp loading={loading} />
    </form>
  );
}
