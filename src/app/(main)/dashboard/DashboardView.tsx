"use client";
import DashboardSidebar from "./components/DashboardSidebar";
import DashboardHeader from "./components/DashboardHeader";
import DashboardContent from "./components/DashboardContent";
import useDashboard from "./hooks/useDashboard";

export default function DashboardView(): React.ReactNode {
  const dashboardData = useDashboard();

  return (
    <div
      className="flex h-screen"
      style={{ backgroundColor: "var(--color-gray)" }}
    >
      <DashboardSidebar
        onMenuItemClick={dashboardData.handleMenuItemClick}
        onToggleDarkMode={dashboardData.toggleDarkMode}
        isDarkMode={dashboardData.isDarkMode}
      />
      <div className="flex-1 flex flex-col">
        <DashboardHeader
          userData={dashboardData.userData}
          onRefresh={dashboardData.refreshData}
          isLoading={dashboardData.isLoading}
        />
        <div className="flex-1 overflow-auto">
          <DashboardContent dashboardData={dashboardData} />
        </div>
      </div>
    </div>
  );
}
