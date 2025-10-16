import z from "zod";
import {
  CURRENT_FORM_SIGN_UP,
  formSchemaSignUp,
} from "../utils/constants/formSchemaSignUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISignUpRequest } from "@/interfaces/signUp";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ISignUpRequestDto, ISignUpResponseDto } from "@/interfaces/dto/auth";
import { useRouter } from "next/navigation";
import { signUpAuthService } from "../services/authService";
import { SignUpAuthUtils } from "../utils/authUtils";
import useSignUpModal from "./useSignUpModal";

export default function useSignUp() {
  const [remember, setRemember] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const modal = useSignUpModal();

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
    setLoading(true);
    modal.showLoading();

    try {
      const response = await performSignUp(data);

      const isSuccess = SignUpAuthUtils.isSignUpSuccessful(response);

      if (isSuccess) {
        handleSignUpSuccess(response);
        return;
      }

      handleSignUpError(response);
    } catch (error) {
      handleUnexpectedError(error);
    } finally {
      setLoading(false);
    }
  };

  const performSignUp = async (
    data: ISignUpRequest
  ): Promise<ISignUpResponseDto> => {
    const signUpRequest: ISignUpRequestDto = {
      fullName: data.fullName || "",
      email: data.email,
      password: data.password,
    };

    const response = await signUpAuthService.signUp(signUpRequest);
    console.log("SignUp response:", response);

    return response;
  };

  const handleSignUpSuccess = (response: ISignUpResponseDto): void => {
    console.log("SignUp successful, redirecting to dashboard...");

    SignUpAuthUtils.processSuccessfulSignUp(response, remember);
    modal.showSuccess();

    // Redirigir después de un breve delay para mostrar el mensaje de éxito
    setTimeout(() => {
      router.push("/dashboard/home");
    }, 1500);
  };

  const handleSignUpError = (response: ISignUpResponseDto): void => {
    console.log("SignUp failed:", response);

    const errorMessage = SignUpAuthUtils.getErrorMessage(response);
    modal.showError(errorMessage);
  };

  const handleUnexpectedError = (error: unknown): void => {
    console.error("Unexpected error during sign-up:", error);
    modal.showError("An unexpected error occurred. Please try again later.");
  };

  const handleTryAgain = (): void => {
    modal.hide();
  };

  return {
    control,
    errors,
    remember,
    loading,
    handleSubmit,
    setError,
    handleSignUp,
    setRemember,
    modal,
    handleTryAgain,
  };
}
