import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  CURRENT_FORM_SIGNUP,
  formSchemaSignUp,
} from "../utils/constants/formSchemaSignUp";
import { ISignUpRequestDto } from "@/interfaces/dto/auth";
import { useState } from "react";

export default function useSignUp() {
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCode, setSelectedCode] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof formSchemaSignUp>>({
    resolver: zodResolver(formSchemaSignUp),
    defaultValues: CURRENT_FORM_SIGNUP,
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const handleSignUp = async (data: ISignUpRequestDto): Promise<void> => {
    setOpenModal(true);
    const bodySignUp = {
      ...data,
      cellphone: `${selectedCode}${data.cellphone}`,
    };
    console.log("body", bodySignUp);
  };
  return {
    control,
    errors,
    showIcon,
    loading,
    setError,
    handleSubmit,
    handleSignUp,
    setShowIcon,
    setLoading,
    selectedCode,
    setSelectedCode,
    openModal,
    setOpenModal,
  };
}
