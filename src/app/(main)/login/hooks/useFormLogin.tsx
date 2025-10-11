import { useForm } from "react-hook-form";
import z from "zod";
import {
  CURRENT_FORM_LOGIN,
  formSchemaLogin,
} from "../utils/constants/formSchemaLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { ILoginRequest } from "@/interfaces/login";

export default function useFormLogin() {
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);
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

  const handleLogin = async (data: ILoginRequest): Promise<void> => {
    setLoading(true);
    console.log("data", data);
    console.log("is remeber", remember);
  };
  return {
    control,
    setError,
    handleSubmit,
    errors,
    setShowIcon,
    showIcon,
    setRemember,
    remember,
    handleLogin,
    loading,
  };
}
