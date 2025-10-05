"use client";
import Button from "@/app/ui/components/Button";
import Input from "@/app/ui/components/Input";
import InputWithIcon from "@/app/ui/components/InputWithIcon";
import { IconEye, IconEyeOff, IconGoogle } from "../../../../public/icons";
import Login from "./components/Login";

export default function LoginView() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-[100vh]">
      <Login />
    </div>
  );
}
