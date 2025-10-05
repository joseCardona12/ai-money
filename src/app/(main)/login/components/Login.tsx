import LineOr from "@/ui/components/LineOr";
import HeaderLogin from "./HeaderLogin";
import BodyLogin from "./BodyLogin";
import FooterLogin from "./FooterLogin";
import useLogin from "../hooks/useLogin";

export default function Login(): React.ReactNode {
  const {
    handleSubmit,
    handleLogin,
    setShowIcon,
    setCheckRemember,
    handleOauthLogin,
    control,
    errors,
    showIcon,
    loading,
    checkRemember,
  } = useLogin();
  return (
    <form
      className="bg-white p-6 rounded-lg flex flex-col gap-6"
      onSubmit={handleSubmit(handleLogin)}
    >
      <HeaderLogin handleOauthLogin={handleOauthLogin} />
      <LineOr />
      <BodyLogin
        control={control}
        errors={errors}
        showIcon={showIcon}
        setShowIcon={setShowIcon}
        setCheckRemember={setCheckRemember}
        checkRemember={checkRemember}
      />
      <FooterLogin loading={loading} />
    </form>
  );
}
