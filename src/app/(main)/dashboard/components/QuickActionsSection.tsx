"use client";
import { QUICK_ACTIONS_DATA } from "../utils/constants/dashboardData";

interface QuickActionsSectionProps {
  quickActions: typeof QUICK_ACTIONS_DATA;
  onQuickAction: (actionId: number) => void;
}

export default function QuickActionsSection({
  quickActions,
  onQuickAction,
}: QuickActionsSectionProps): React.ReactNode {
  return (
    <div
      className="p-6 rounded-xl border"
      style={{
        backgroundColor: "var(--color-white)",
        borderColor: "var(--color-gray)",
      }}
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Quick actions</h3>
      </div>

      {/* Actions Grid */}
      <div className="grid grid-cols-2 gap-4">
        {quickActions.map((action) => (
          <button
            key={action.id}
            onClick={() => onQuickAction(action.id)}
            className="p-4 rounded-xl border transition-all hover:shadow-md"
            style={{
              backgroundColor: action.bgColor || "var(--color-gray-light)",
              borderColor: "var(--color-gray)",
            }}
          >
            <div className="flex flex-col items-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "white" }}
              >
                <action.icon
                  className="w-6 h-6"
                  style={{ color: action.color }}
                />
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: action.color }}
              >
                {action.title}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
