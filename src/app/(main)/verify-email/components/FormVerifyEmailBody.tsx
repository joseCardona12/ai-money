import { IVerifyEmailRequest } from "@/interfaces/verifyEmailCode";
import FormField from "@/ui/components/FormField";
import Input from "@/ui/components/Input";
import { Control, FieldErrors } from "react-hook-form";

interface IFormVerifyEmailBodyProps {
  control: Control<IVerifyEmailRequest>;
  errors: FieldErrors<IVerifyEmailRequest>;
}
export default function FormVerifyEmailBody({
  control,
  errors,
}: IFormVerifyEmailBodyProps): React.ReactNode {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center w-full gap-2">
        <FormField<IVerifyEmailRequest>
          label=""
          name="codeOne"
          type="number"
          placeholder=""
          error={errors.codeOne}
          control={control}
          className="w-full"
        />
        <FormField<IVerifyEmailRequest>
          label=""
          name="codeTwo"
          type="number"
          placeholder=""
          error={errors.codeTwo}
          control={control}
          className="w-full"
        />
        <FormField<IVerifyEmailRequest>
          label=""
          name="codeThree"
          type="number"
          placeholder=""
          error={errors.codeThree}
          control={control}
          className="w-full"
        />
        <FormField<IVerifyEmailRequest>
          label=""
          name="codeFour"
          type="number"
          placeholder=""
          error={errors.codeFour}
          control={control}
          className="w-full"
        />
        <FormField<IVerifyEmailRequest>
          label=""
          name="codeFive"
          type="number"
          placeholder=""
          error={errors.codeFive}
          control={control}
          className="w-full"
        />
        <FormField<IVerifyEmailRequest>
          label=""
          name="codeSix"
          type="number"
          placeholder=""
          error={errors.codeSix}
          control={control}
          className="w-full"
        />
      </div>
      <p className="text-sm text-[var(--color-text-gray)]">
        Enter the code sent to your email
      </p>
    </div>
  );
}
