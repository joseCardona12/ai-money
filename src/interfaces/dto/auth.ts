import { IUser } from "../user";

export interface ILoginRequestDto {
  email: string;
  password: string;
  isRemember: boolean;
}

export interface ILoginResponseDto {
  message: string;
  status: number;
  data?: {
    token: string;
    user: IUser;
  };
}

export interface ISignUpRequestDto {
  fullName: string;
  email: string;
  password: string;
}

export interface ISignUpRequestCompleteDto {
  fullName: string;
  email: string;
  password: string;
  phone_number: string;
  address: string;
  bio: string;
  profile_picture: string;
  join_date: string;
  role_id: number;
  provider_id: number;
}

export interface ISignUpResponseDto {
  message: string;
  status: number;
  data?: {
    token: string;
    user: IUser;
  };
}

export interface IForgotPasswordRequestDto {
  email: string;
}

export interface IForgotPasswordResponseDto {
  message: string;
  status: number;
}

export interface IResetPasswordRequestDto {
  token: string;
  newPassword: string;
}

export interface IResetPasswordResponseDto {
  message: string;
  status: number;
}
