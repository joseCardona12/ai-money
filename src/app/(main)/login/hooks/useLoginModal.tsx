import { useState } from "react";
import { LoginStatus } from "../components/LoginStatusModal";

interface IUseLoginModal {
  isOpen: boolean;
  status: LoginStatus;
  message: string;
  showModal: (status: LoginStatus, message?: string) => void;
  hideModal: () => void;
  showLoading: () => void;
  showSuccess: (message?: string) => void;
  showError: (message?: string) => void;
}

export default function useLoginModal(): IUseLoginModal {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<LoginStatus>("idle");
  const [message, setMessage] = useState<string>("");

  const showModal = (newStatus: LoginStatus, newMessage?: string): void => {
    setStatus(newStatus);
    setMessage(newMessage || "");
    setIsOpen(true);
  };

  const hideModal = (): void => {
    setIsOpen(false);
    setStatus("idle");
    setMessage("");
  };

  const showLoading = (): void => {
    showModal("loading", "Please wait while we sign you in");
  };

  const showSuccess = (successMessage?: string): void => {
    showModal(
      "success", 
      successMessage || "Login successful! Redirecting to dashboard..."
    );
  };

  const showError = (errorMessage?: string): void => {
    showModal(
      "error", 
      errorMessage || "There was an error with the credentials. Please check again!"
    );
  };

  return {
    isOpen,
    status,
    message,
    showModal,
    hideModal,
    showLoading,
    showSuccess,
    showError,
  };
}
