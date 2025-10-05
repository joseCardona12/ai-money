import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CURRENT_FORM_LOGIN,
  formSchemaLogin,
} from "../utils/constants/formSchemaLogin";
import { useState } from "react";
import { ILoginRequest } from "@/app/interfaces/login";

export default function useLogin() {
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [checkRemember, setCheckRemember] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof formSchemaLogin>>({
    resolver: zodResolver(formSchemaLogin),
    defaultValues: CURRENT_FORM_LOGIN,
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const handleLogin = (data: ILoginRequest) => {
    setLoading(true);
    const bodyLogin = {
      ...data,
      isRemember: checkRemember,
    };
    console.log("body", bodyLogin);
  };

  return {
    control,
    errors,
    showIcon,
    loading,
    checkRemember,
    setError,
    handleSubmit,
    handleLogin,
    setShowIcon,
    setCheckRemember,
  };
}
