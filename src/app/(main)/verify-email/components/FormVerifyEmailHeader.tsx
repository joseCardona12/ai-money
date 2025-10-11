export default function FormVerifyEmailHeader(): React.ReactNode {
  return (
    <div>
      <div>
        <h1 className="text-[1.8rem] font-bold">Verify your email</h1>
        <p className="text-[var(--color-text-gray)] text-sm">
          We've sent a 6-digit code to <strong>name@gmail.com</strong>
        </p>
      </div>
    </div>
  );
}
