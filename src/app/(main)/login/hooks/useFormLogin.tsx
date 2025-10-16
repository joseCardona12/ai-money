import { useForm } from "react-hook-form";
import z from "zod";
import {
  CURRENT_FORM_LOGIN,
  formSchemaLogin,
} from "../utils/constants/formSchemaLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { ILoginRequest } from "@/interfaces/login";
import { ILoginRequestDto, ILoginResponseDto } from "@/interfaces/dto/auth";
import { useRouter } from "next/navigation";
import { loginAuthService } from "../services/authService";
import { LoginAuthUtils } from "../utils/authUtils";
import useLoginModal from "./useLoginModal";

export default function useFormLogin() {
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const modal = useLoginModal();

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
    modal.showLoading();

    try {
      const response = await performLogin(data);

      const isSuccess = LoginAuthUtils.isLoginSuccessful(response);

      if (isSuccess) {
        handleLoginSuccess(response);
        return;
      }

      handleLoginError(response);
    } catch (error) {
      handleUnexpectedError(error);
    } finally {
      setLoading(false);
    }
  };

  const performLogin = async (
    data: ILoginRequest
  ): Promise<ILoginResponseDto> => {
    console.log("Login data:", data);
    console.log("Remember me:", remember);

    const loginRequest: ILoginRequestDto = {
      email: data.email,
      password: data.password,
      isRemember: remember,
    };

    const response = await loginAuthService.login(loginRequest);
    console.log("Login response:", response);

    return response;
  };

  const handleLoginSuccess = (response: ILoginResponseDto): void => {
    console.log("Login successful, redirecting to dashboard...");

    LoginAuthUtils.processSuccessfulLogin(response, remember);
    modal.showSuccess();

    // Redirect after a brief delay to show the success message
    setTimeout(() => {
      router.push("/dashboard/home");
    }, 1500);
  };

  const handleLoginError = (response: ILoginResponseDto): void => {
    const errorMessage = LoginAuthUtils.getErrorMessage(response);
    console.error("Login failed:", errorMessage);

    modal.showError(errorMessage);
  };

  const handleUnexpectedError = (error: unknown): void => {
    console.error("Login error:", error);

    modal.showError("An error occurred during login. Please try again.");
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
    modal: {
      isOpen: modal.isOpen,
      status: modal.status,
      message: modal.message,
      hideModal: modal.hideModal,
    },
  };
}
