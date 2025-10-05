import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CURRENT_FORM_LOGIN,
  formSchemaLogin,
} from "../utils/constants/formSchemaLogin";
import { useState } from "react";
import { ILoginRequest } from "@/interfaces/login";
import { TProvider } from "@/interfaces/provider";
import { SignIn, useSignIn } from "@clerk/nextjs";
import { oauthService } from "@/services/auth";

export default function useLogin() {
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [checkRemember, setCheckRemember] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { signIn, isLoaded } = useSignIn();
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
    const bodyLogin = {
      ...data,
      isRemember: checkRemember,
    };
    try {
      const response = await oauthService.login(bodyLogin);
    } catch (error: any) {
      console.log("error", error);
    }
  };

  const handleOauthLogin = async (provider: TProvider): Promise<void> => {
    try {
      await signIn?.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: "/",
        redirectUrlComplete: "/",
      });
    } catch (error: any) {
      console.log("login error", error);
    }
  };

  return {
    control,
    errors,
    showIcon,
    loading,
    checkRemember,
    handleOauthLogin,
    setError,
    handleSubmit,
    handleLogin,
    setShowIcon,
    setCheckRemember,
  };
}
