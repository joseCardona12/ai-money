"use client";
import StatsCards from "./StatsCards";
import ChartSection from "./ChartDashboard/ChartSection";
import TransactionsSection from "./TransactionsSection";
import AlertsSection from "./AlertsSection";
import QuickActionsSection from "./QuickActionsSection";
import { IUseDashboard } from "../hooks/useDashboard";
import TitleContent from "@/ui/components/TitleContent";

interface DashboardContentProps {
  dashboardData: IUseDashboard;
}

export default function DashboardContent({
  dashboardData,
}: DashboardContentProps): React.ReactNode {
  return (
    <div className="p-6 space-y-6">
      <TitleContent
        title="Dashboard"
        description="Summary of your financial activity"
      />
      <StatsCards statsCards={dashboardData.statsCards} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ChartSection
            chartData={dashboardData.chartData}
            selectedTimeframe={dashboardData.selectedTimeframe}
            setSelectedTimeframe={dashboardData.setSelectedTimeframe}
          />
        </div>
        <div>
          <TransactionsSection
            transactions={dashboardData.transactions}
            onTransactionClick={dashboardData.handleTransactionClick}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AlertsSection alerts={dashboardData.alerts} />
        <QuickActionsSection
          quickActions={dashboardData.quickActions}
          onQuickAction={dashboardData.handleQuickAction}
        />
      </div>
    </div>
  );
}
