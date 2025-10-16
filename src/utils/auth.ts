/**
 * Utilidades para manejo de autenticación
 */

export class AuthUtils {
  private static readonly TOKEN_KEY = "authToken";
  private static readonly USER_KEY = "user";
  private static readonly REMEMBER_KEY = "rememberMe";

  /**
   * Guarda el token de autenticación
   */
  static setToken(token: string, remember: boolean = false): void {
    if (remember) {
      localStorage.setItem(this.TOKEN_KEY, token);
      localStorage.setItem(this.REMEMBER_KEY, "true");
    } else {
      sessionStorage.setItem(this.TOKEN_KEY, token);
      localStorage.removeItem(this.REMEMBER_KEY);
    }
  }

  /**
   * Obtiene el token de autenticación
   */
  static getToken(): string | null {
    const rememberMe = localStorage.getItem(this.REMEMBER_KEY) === "true";
    
    if (rememberMe) {
      return localStorage.getItem(this.TOKEN_KEY);
    } else {
      return sessionStorage.getItem(this.TOKEN_KEY);
    }
  }

  /**
   * Guarda los datos del usuario
   */
  static setUser(user: any, remember: boolean = false): void {
    const userData = JSON.stringify(user);
    
    if (remember) {
      localStorage.setItem(this.USER_KEY, userData);
    } else {
      sessionStorage.setItem(this.USER_KEY, userData);
    }
  }

  /**
   * Obtiene los datos del usuario
   */
  static getUser(): any | null {
    const rememberMe = localStorage.getItem(this.REMEMBER_KEY) === "true";
    
    let userData: string | null;
    if (rememberMe) {
      userData = localStorage.getItem(this.USER_KEY);
    } else {
      userData = sessionStorage.getItem(this.USER_KEY);
    }

    if (userData) {
      try {
        return JSON.parse(userData);
      } catch (error) {
        console.error("Error parsing user data:", error);
        return null;
      }
    }
    
    return null;
  }

  /**
   * Verifica si el usuario está autenticado
   */
  static isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  /**
   * Limpia todos los datos de autenticación
   */
  static clearAuth(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.REMEMBER_KEY);
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.USER_KEY);
  }

  /**
   * Obtiene headers de autorización para requests HTTP
   */
  static getAuthHeaders(): Record<string, string> {
    const token = this.getToken();
    
    if (token) {
      return {
        Authorization: `Bearer ${token}`,
      };
    }
    
    return {};
  }
}
