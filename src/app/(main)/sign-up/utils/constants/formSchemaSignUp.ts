import { ISignUpRequestDto } from "@/interfaces/dto/auth";
import z, { email } from "zod";

export const formSchemaSignUp = z.object({
  email: z.string().email("Invalid email format").min(2).max(250),
  cellphone: z.string(),
  password: z
    .string()
    .min(8, "Expected string to have >=8 characters")
    .max(12, "Expected string to have <12 characters")
    .regex(/[A-Z]/, "Must include a capital letter")
    .regex(/[a-z]/, "Must include a lowecase letter"),
});

export const CURRENT_FORM_SIGNUP: ISignUpRequestDto = {
  email: "",
  cellphone: "",
  password: "",
};
