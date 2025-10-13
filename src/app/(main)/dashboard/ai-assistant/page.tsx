"use client";
import TitleContent from "@/ui/components/TitleContent";

export default function AIAssistantPage(): React.ReactNode {
  return (
    <div className="p-6 space-y-6">
      <TitleContent
        title="AI Assistant"
        description="Get personalized financial advice and insights"
      />
      
      <div className="p-8 rounded-xl border border-[var(--color-gray-border)] bg-white">
        <h3 className="text-lg font-semibold mb-4">AI Financial Assistant</h3>
        <p className="text-gray-500">
          This is where the AI assistant chat and recommendations will be implemented.
        </p>
      </div>
    </div>
  );
}
