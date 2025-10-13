"use client";
import { IconBell, IconRefresh } from "@tabler/icons-react";
import { USER_DATA } from "../utils/constants/dashboardData";
import IconButton from "@/ui/components/IconButton";
import UserData from "@/ui/components/UserData";

interface DashboardHeaderProps {
  userData: typeof USER_DATA;
  onRefresh: () => void;
  isLoading: boolean;
}

export default function DashboardHeader({
  userData,
  onRefresh,
  isLoading,
}: DashboardHeaderProps): React.ReactNode {
  return (
    <header className="px-6 flex items-center justify-end p-4 border-b-1 border-[var(--color-gray-border)]">
      <div className="flex items-center gap-4">
        <IconButton
          icon={IconRefresh}
          onClick={onRefresh}
          disabled={isLoading}
          loading={isLoading}
          variant="ghost"
          size="md"
        />
        <IconButton
          icon={IconBell}
          variant="ghost"
          size="md"
          badge={
            userData.notificationCount > 0
              ? userData.notificationCount
              : undefined
          }
        />
        <UserData userData={userData} />
      </div>
    </header>
  );
}
