import { useForm } from "react-hook-form";
import {
  CURRENT_FORM_VERIFY_EMAIL,
  formSchemaVerifyEmail,
} from "../utils/constants/formSchemaVerifyEmail";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IVerifyEmailRequest } from "@/interfaces/verifyEmailCode";

export default function useVerifyEmail() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof formSchemaVerifyEmail>>({
    resolver: zodResolver(formSchemaVerifyEmail),
    defaultValues: CURRENT_FORM_VERIFY_EMAIL,
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const handleVerifyEmail = (data: IVerifyEmailRequest) => {
    console.log("data", data);
  };
  return {
    control,
    handleSubmit,
    setError,
    errors,
    handleVerifyEmail,
  };
}
