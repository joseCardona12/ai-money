import { ILoginRequest } from "@/app/interfaces/login";
import z from "zod";

export const formSchemaLogin = z.object({
  email: z.string().email("Invalid email format").min(2).max(250),
  password: z
    .string()
    .min(8)
    .max(12)
    .regex(/[A-Z]/, "Must include a capital letter")
    .regex(/[a-z]/, "Must include a lowecase letter"),
});

export const CURRENT_FORM_LOGIN: ILoginRequest = {
  email: "",
  password: "",
};
