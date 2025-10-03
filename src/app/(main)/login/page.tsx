"use client";
import Button from "@/app/ui/components/Button";
import Input from "@/app/ui/components/Input";
import InputWithIcon from "@/app/ui/components/InputWithIcon";
import { IconEye, IconEyeOff, IconGoogle } from "../../../../public/icons";

export default function LoginView() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-[100vh]">
      <div>
        <h2>Buttons</h2>
        <div>
          <Button variant="gray" onClick={() => {}}>
            <IconGoogle />
          </Button>
          <Button variant="ghost" onClick={() => {}}>
            <IconGoogle />
          </Button>
          <Button variant="black" onClick={() => {}}>
            Hello
          </Button>
        </div>
      </div>
      <div className="items-center gap-2">
        <h2>Inputs</h2>
        <div className="flex gap-2">
          <Input type="text" placeholder="Hello" />
          <InputWithIcon
            type="text"
            placeholder="Hello"
            icon={<IconEye />}
            secondIcon={<IconEyeOff />}
            secondType="password"
          />
        </div>
      </div>
    </div>
  );
}
