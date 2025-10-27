import useFormLogin from "../hooks/useFormLogin";
import FormLoginBody from "./FormLoginBody";
import FormLoginFooter from "./FormLoginFooter";
import FormLoginHeader from "./FormLoginHeader";
import LoginStatusModal from "./LoginStatusModal";

export default function FormLogin(): React.ReactNode {
  const {
    control,
    errors,
    loading,
    showIcon,
    remember,
    setShowIcon,
    setRemember,
    handleSubmit,
    handleLogin,
    modal,
  } = useFormLogin();
  return (
    <>
      <form
        action=""
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(handleLogin)}
      >
        <FormLoginHeader loading={loading} />
        <FormLoginBody
          loading={loading}
          control={control}
          errors={errors}
          setShowIcon={setShowIcon}
          showIcon={showIcon}
          remember={remember}
          setRemember={setRemember}
        />
        <FormLoginFooter loading={loading} />
      </form>

      <LoginStatusModal
        isOpen={modal.isOpen}
        status={modal.status}
        message={modal.message}
        onClose={modal.hideModal}
      />
    </>
  );
}
