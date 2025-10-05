import LineOr from "@/app/ui/components/LineOr";
import HeaderLogin from "./HeaderLogin";
import BodyLogin from "./BodyLogin";
import FooterLogin from "./FooterLogin";
import useLogin from "../hooks/useLogin";

export default function Login(): React.ReactNode {
  const {
    handleSubmit,
    handleLogin,
    control,
    errors,
    setShowIcon,
    showIcon,
    setCheckRemember,
    loading,
  } = useLogin();
  return (
    <form
      className="bg-white p-6 rounded-lg flex flex-col gap-6"
      onSubmit={handleSubmit(handleLogin)}
    >
      <HeaderLogin />
      <LineOr />
      <BodyLogin
        control={control}
        errors={errors}
        showIcon={showIcon}
        setShowIcon={setShowIcon}
        setCheckRemember={setCheckRemember}
      />
      <FooterLogin loading={loading} />
    </form>
  );
}
