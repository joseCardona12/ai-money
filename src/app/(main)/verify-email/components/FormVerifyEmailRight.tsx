import { IconCheck, IconEmail } from "../../../../../public/icons";

export default function FormVerifyEmailRight(): React.ReactNode {
  return (
    <div className="flex flex-col gap-6">
      <div className="right-header flex flex-col gap-2 justify-center items-center">
        <div className="h-14 w-14 bg-[var(--color-blue-light-2)] rounded-full flex justify-center items-center">
          <IconEmail className="w-8 h-8 text-[var(--color-blue)]" />
        </div>
        <h2 className="font-bold text-[1.6rem] w-100 text-center">
          One more step to get started
        </h2>
      </div>
      <div className="right-body flex flex-col gap-6">
        <p className="text-sm text-[var(--color-text-gray)] w-90 text-center">
          Email verification helps us keep your account secure and ensures you
          can recover access if needed.
        </p>
        <div className="justify-between bg-[var(--color-gray)] p-3 rounded-lg border border-[var(--color-gray-border)] flex flex-col gap-2">
          <h5 className="text-sm">Why verify your email?</h5>
          <ul className="flex flex-col gap-1">
            <li className="text-[.8rem] text-[var(--color-text-gray)] flex items-center gap-2">
              <IconCheck />
              Secure your account from unauthorized access
            </li>
            <li className="text-[.8rem] text-[var(--color-text-gray)] flex items-center gap-2">
              <IconCheck />
              Receive important notifications and updates
            </li>
            <li className="text-[.8rem] text-[var(--color-text-gray)] flex items-center gap-2">
              <IconCheck />
              Enable password recovery options
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
