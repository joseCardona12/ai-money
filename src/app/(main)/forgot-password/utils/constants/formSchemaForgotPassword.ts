import { IForgotPasswordRequest } from "@/interfaces/forgotPassword";
import z from "zod";

export const formSchemaForgotPassword = z.object({
  email: z.string().optional(),
  phoneNumber: z.string().optional(),
});

export const CURRENT_FORM_FORGOT_PASSWORD: IForgotPasswordRequest = {
  email: "",
  phoneNumber: "",
};
