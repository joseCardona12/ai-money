"use client";
import TitleContent from "@/ui/components/TitleContent";

export default function BudgetPage(): React.ReactNode {
  return (
    <div className="p-6 space-y-6">
      <TitleContent
        title="Budget"
        description="Plan and manage your monthly budget"
      />
      
      <div className="p-8 rounded-xl border border-[var(--color-gray-border)] bg-white">
        <h3 className="text-lg font-semibold mb-4">Budget Planning</h3>
        <p className="text-gray-500">
          This is where budget planning and management will be implemented.
        </p>
      </div>
    </div>
  );
}
