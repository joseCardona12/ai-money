import { useForm } from "react-hook-form";
import {
  CURRENT_FORM_VERIFY_PHONE,
  formSchemaVerifyPhone,
} from "../utils/constants/formSchemaVerifyPhone";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IVerifyPhoneRequest } from "@/interfaces/verifyPhoneCode";

export default function useVerifyPhone() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof formSchemaVerifyPhone>>({
    resolver: zodResolver(formSchemaVerifyPhone),
    defaultValues: CURRENT_FORM_VERIFY_PHONE,
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const handleVerifyPhone = (data: IVerifyPhoneRequest) => {
    console.log("data", data);
  };
  
  return {
    control,
    handleSubmit,
    setError,
    errors,
    handleVerifyPhone,
  };
}
