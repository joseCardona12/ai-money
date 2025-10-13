import { useState } from "react";
import { CURRENT_CONTENT_TAB } from "../utils/constants/contentTab";
import { IContentTab } from "@/interfaces/contentTab";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useForm } from "react-hook-form";
import {
  CURRENT_FORM_FORGOT_PASSWORD,
  formSchemaForgotPassword,
} from "../utils/constants/formSchemaForgotPassword";
import { IForgotPasswordRequest } from "@/interfaces/forgotPassword";

export default function useForgotPassword() {
  const [elementTab, setElementTab] = useState<string>("email");
  const [contentTabs, setContentTabs] =
    useState<IContentTab[]>(CURRENT_CONTENT_TAB);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof formSchemaForgotPassword>>({
    resolver: zodResolver(formSchemaForgotPassword),
    defaultValues: CURRENT_FORM_FORGOT_PASSWORD,
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const handleForgotPassword = (data: IForgotPasswordRequest) => {
    console.log("data", data);
  };
  return {
    elementTab,
    setElementTab,
    contentTabs,
    setContentTabs,
    errors,
    control,
    handleSubmit,
    setError,
    handleForgotPassword,
  };
}
