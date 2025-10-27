"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthUtils } from "@/utils/auth";

interface IPrivateRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export default function PrivateRoute({
  children,
  redirectTo = "/login",
}: IPrivateRouteProps): React.ReactNode {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = (): void => {
      try {
        const authenticated = AuthUtils.isAuthenticated();
        setIsAuthenticated(authenticated);
        
        if (!authenticated) {
          console.log("User not authenticated, redirecting to:", redirectTo);
          router.push(redirectTo);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false);
        router.push(redirectTo);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, [router, redirectTo]);

  // Mostrar loading mientras verificamos la autenticación
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  // Si no está autenticado, no renderizar nada (ya se redirigió)
  if (!isAuthenticated) {
    return null;
  }

  // Si está autenticado, renderizar los children
  return <>{children}</>;
}
