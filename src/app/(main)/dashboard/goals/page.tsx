"use client";
import TitleContent from "@/ui/components/TitleContent";

export default function GoalsPage(): React.ReactNode {
  return (
    <div className="p-6 space-y-6">
      <TitleContent
        title="Goals"
        description="Set and track your financial goals"
      />
      
      <div className="p-8 rounded-xl border border-[var(--color-gray-border)] bg-white">
        <h3 className="text-lg font-semibold mb-4">Financial Goals</h3>
        <p className="text-gray-500">
          This is where goal setting and tracking will be implemented.
        </p>
      </div>
    </div>
  );
}
