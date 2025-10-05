export default function LineOr(): React.ReactNode {
  return (
    <div className="flex items-center gap-2">
      <div className="h-[1px] w-full bg-[var(--color-gray)]"></div>
      <span className="text-sm text-[var(--color-gray-plus)]">OR</span>
      <div className="h-[1px] w-full bg-[var(--color-gray)]"></div>
    </div>
  );
}
