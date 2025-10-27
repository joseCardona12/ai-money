"use client";

import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

interface ILogoutButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LogoutButton({
  className = "",
  children = "Logout",
}: ILogoutButtonProps): React.ReactNode {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = (): void => {
    logout();
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className={`text-red-600 hover:text-red-800 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
