"use client";
import TitleContent from "@/ui/components/TitleContent";

export default function AnalyticsPage(): React.ReactNode {
  return (
    <div className="p-6 space-y-6">
      <TitleContent
        title="Analytics"
        description="Analyze your financial data and trends"
      />
      
      <div className="p-8 rounded-xl border border-[var(--color-gray-border)] bg-white">
        <h3 className="text-lg font-semibold mb-4">Financial Analytics</h3>
        <p className="text-gray-500">
          This is where financial analytics and reports will be implemented.
        </p>
      </div>
    </div>
  );
}
