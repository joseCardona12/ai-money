import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  CURRENT_FORM_ONBOARDING,
  formSchemaOnboarding,
} from "../utils/constants/formSchemaOnboarding";
import { zodResolver } from "@hookform/resolvers/zod";

export default function useOnboardingProgress() {
  const [step, setStep] = useState<number>(1);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof formSchemaOnboarding>>({
    resolver: zodResolver(formSchemaOnboarding),
    defaultValues: CURRENT_FORM_ONBOARDING,
    mode: "onChange",
    reValidateMode: "onChange",
  });
  return {
    step,
    setStep,
    control,
    handleSubmit,
    setError,
    errors,
  };
}
