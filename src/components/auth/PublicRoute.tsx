"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthUtils } from "@/utils/auth";

interface IPublicRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
  allowAuthenticated?: boolean;
}

export default function PublicRoute({
  children,
  redirectTo = "/dashboard/home",
  allowAuthenticated = false,
}: IPublicRouteProps): React.ReactNode {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = (): void => {
      try {
        const authenticated = AuthUtils.isAuthenticated();
        setIsAuthenticated(authenticated);
        
        // Si está autenticado y no se permite acceso autenticado, redirigir
        if (authenticated && !allowAuthenticated) {
          console.log("User already authenticated, redirecting to:", redirectTo);
          router.push(redirectTo);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, [router, redirectTo, allowAuthenticated]);

  // Mostrar loading mientras verificamos la autenticación
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Si está autenticado y no se permite, no renderizar nada (ya se redirigió)
  if (isAuthenticated && !allowAuthenticated) {
    return null;
  }

  // Renderizar los children
  return <>{children}</>;
}
