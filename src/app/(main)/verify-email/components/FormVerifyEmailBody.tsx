import Input from "@/ui/components/Input";

export default function FormVerifyEmailBody(): React.ReactNode {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center w-full gap-2">
        <Input className="w-full" type="number" />
        <Input className="w-full" type="number" />
        <Input className="w-full" type="number" />
        <Input className="w-full" type="number" />
        <Input className="w-full" type="number" />
        <Input className="w-full" type="number" />
      </div>
      <p className="text-sm text-[var(--color-text-gray)]">
        Enter the code sent to your email
      </p>
    </div>
  );
}
