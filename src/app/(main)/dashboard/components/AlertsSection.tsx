"use client";
import { ALERTS_DATA } from "../utils/constants/dashboardData";

interface AlertsSectionProps {
  alerts: typeof ALERTS_DATA;
}

export default function AlertsSection({
  alerts,
}: AlertsSectionProps): React.ReactNode {
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
        <h3 className="text-lg font-semibold">Alert & Recomendations</h3>
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex items-start gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${alert.color}20` }}
            >
              <alert.icon className="w-4 h-4" style={{ color: alert.color }} />
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-text-gray)" }}
            >
              {alert.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
