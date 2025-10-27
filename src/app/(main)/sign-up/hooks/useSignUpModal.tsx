"use client";

import { useState } from "react";

export type SignUpStatus = "loading" | "success" | "error" | "idle";

interface IUseSignUpModal {
  status: SignUpStatus;
  message: string;
  showLoading: () => void;
  showSuccess: (message?: string) => void;
  showError: (message?: string) => void;
  hide: () => void;
  isOpen: boolean;
}

export default function useSignUpModal(): IUseSignUpModal {
  const [status, setStatus] = useState<SignUpStatus>("idle");
  const [message, setMessage] = useState<string>("");

  const showLoading = (): void => {
    setStatus("loading");
    setMessage("Creating your account...");
  };

  const showSuccess = (customMessage?: string): void => {
    setStatus("success");
    setMessage(
      customMessage || "Account created successfully! Welcome to AI Money!"
    );
  };

  const showError = (customMessage?: string): void => {
    setStatus("error");
    setMessage(
      customMessage ||
        "There was an error creating your account. Please try again!"
    );
  };

  const hide = (): void => {
    setStatus("idle");
    setMessage("");
  };

  const isOpen = status !== "idle";

  return {
    status,
    message,
    showLoading,
    showSuccess,
    showError,
    hide,
    isOpen,
  };
}
