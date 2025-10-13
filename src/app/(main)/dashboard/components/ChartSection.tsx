"use client";
import { CHART_DATA, CHART_CONFIG } from "../utils/constants/dashboardData";

interface ChartSectionProps {
  chartData: typeof CHART_DATA;
  selectedTimeframe: string;
  setSelectedTimeframe: (timeframe: string) => void;
}

export default function ChartSection({
  chartData,
  selectedTimeframe,
  setSelectedTimeframe,
}: ChartSectionProps): React.ReactNode {
  return (
    <div
      className="p-6 rounded-xl border"
      style={{
        backgroundColor: "var(--color-white)",
        borderColor: "var(--color-gray)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">
          Comparing of budget and expense
        </h3>
        <select
          value={selectedTimeframe}
          onChange={(e) => setSelectedTimeframe(e.target.value)}
          className="text-sm px-3 py-1 rounded border"
          style={{
            borderColor: "var(--color-gray)",
            color: "var(--color-text-gray)",
          }}
        >
          <option>This year</option>
          <option>Last year</option>
        </select>
      </div>

      {/* Chart */}
      <div className="h-64 flex items-end justify-between gap-2 mb-4">
        {chartData.map((data, index) => (
          <div key={index} className="flex flex-col items-center gap-1 flex-1">
            {/* Bars */}
            <div className="flex items-end gap-1 h-48">
              {/* Budget Bar */}
              <div
                className="w-3 rounded-t"
                style={{
                  height: `${(data.budget / CHART_CONFIG.maxValue) * 100}%`,
                  backgroundColor: "var(--color-blue)",
                }}
              />
              {/* Expense Bar */}
              <div
                className="w-3 rounded-t"
                style={{
                  height: `${(data.expense / CHART_CONFIG.maxValue) * 100}%`,
                  backgroundColor: "var(--color-text-dark)",
                }}
              />
            </div>
            {/* Month Label */}
            <span
              className="text-xs"
              style={{ color: "var(--color-text-gray)" }}
            >
              {data.month}
            </span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "var(--color-blue)" }}
          />
          <span className="text-sm" style={{ color: "var(--color-text-gray)" }}>
            budget
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "var(--color-text-dark)" }}
          />
          <span className="text-sm" style={{ color: "var(--color-text-gray)" }}>
            expense
          </span>
        </div>
      </div>
    </div>
  );
}
