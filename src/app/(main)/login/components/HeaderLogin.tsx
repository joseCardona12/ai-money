import Button from "@/ui/components/Button";
import { IProvider, TProvider } from "@/interfaces/provider";
import { CURRENT_PROVIDERS } from "../utils/constants/providers";

interface IHeaderLoginProps {
  handleOauthLogin: (provider: TProvider) => void;
}
export default function HeaderLogin({
  handleOauthLogin,
}: IHeaderLoginProps): React.ReactNode {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 items-center">
        <div className="w-11 h-11 rounded-full bg-[var(--color-orange)]"></div>
        <div className="flex flex-col items-center">
          <h1 className="text-[1.3rem] text-[var(--color-black)] font-bold">
            Welcome back
          </h1>
          <p className="text-[var(--color-gray-plus)]">
            Please enter your details to sign in.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 w-full justify-between">
        {CURRENT_PROVIDERS.map((provider: IProvider, index: number) => (
          <Button
            onClick={() => handleOauthLogin(provider.provider)}
            type="button"
            key={index}
            variant="gray"
          >
            {provider.icon}
          </Button>
        ))}
      </div>
    </div>
  );
}
