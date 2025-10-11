import z from "zod";
import {
  CURRENT_FORM_SIGN_UP,
  formSchemaSignUp,
} from "../utils/constants/formSchemaSignUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISignUpRequest } from "@/interfaces/signUp";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function useSignUp() {
  const [remember, setRemember] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof formSchemaSignUp>>({
    resolver: zodResolver(formSchemaSignUp),
    defaultValues: CURRENT_FORM_SIGN_UP,
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const handleSignUp = async (data: ISignUpRequest): Promise<void> => {
    console.log("data", data);
  };
  return {
    control,
    errors,
    remember,
    handleSubmit,
    setError,
    handleSignUp,
    setRemember,
  };
}
