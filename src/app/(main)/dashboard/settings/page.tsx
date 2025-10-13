"use client";
import TitleContent from "@/ui/components/TitleContent";

export default function SettingsPage(): React.ReactNode {
  return (
    <div className="p-6 space-y-6">
      <TitleContent
        title="Settings"
        description="Manage your account and application preferences"
      />
      
      <div className="p-8 rounded-xl border border-[var(--color-gray-border)] bg-white">
        <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
        <p className="text-gray-500">
          This is where user settings and preferences will be implemented.
        </p>
      </div>
    </div>
  );
}
