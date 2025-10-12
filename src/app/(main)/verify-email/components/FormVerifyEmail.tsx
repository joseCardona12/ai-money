import useVerifyEmail from "../hooks/useVerifyEmail";
import FormVerifyEmailBody from "./FormVerifyEmailBody";
import FormVerifyEmailFooter from "./FormVerifyEmailFooter";
import FormVerifyEmailHeader from "./FormVerifyEmailHeader";

export default function FormVerifyEmail(): React.ReactNode {
  const { control, errors, handleSubmit, handleVerifyEmail } = useVerifyEmail();
  return (
    <form action="" onSubmit={handleSubmit(handleVerifyEmail)}>
      <FormVerifyEmailHeader />
      <FormVerifyEmailBody errors={errors} control={control} />
      <FormVerifyEmailFooter />
    </form>
  );
}
