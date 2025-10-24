import DashboardLayout from "./components/DashboardLayout";
import PrivateRoute from "@/components/auth/PrivateRoute";

interface DashboardLayoutPageProps {
  children: React.ReactNode;
}

export default function DashboardLayoutPage({
  children,
}: DashboardLayoutPageProps) {
  return (
    <PrivateRoute>
      <DashboardLayout>{children}</DashboardLayout>
    </PrivateRoute>
  );
}
