export class HTTPClient {
  private protocol: string = "http";
  private host: string = "localhost";
  private port: string = "3001";
  private baseUrl: string = `${this.protocol}://${this.host}:${this.port}/api`;

  constructor(
    protocolClient?: string,
    hostClient?: string,
    portClient?: string,
    urlClient?: string
  ) {
    this.protocol = protocolClient || this.protocol;
    this.host = hostClient || this.host;
    this.baseUrl = urlClient || this.baseUrl;
    this.port = portClient || this.port;
  }

  private getHeaders(
    headers: Record<string, string> = {}
  ): Record<string, string> {
    const baseHeaders: Record<string, string> = {
      "Content-Type": "application/json",
      ...headers,
    };

    // Intentar obtener el token de autenticación
    try {
      const token =
        localStorage.getItem("authToken") ||
        sessionStorage.getItem("authToken");
      if (token) {
        baseHeaders.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      // Ignorar errores de localStorage/sessionStorage en caso de que no estén disponibles
      console.warn("Could not access storage for auth token:", error);
    }

    return baseHeaders;
  }

  private async managementError<T>(response: Response): Promise<T> {
    const responseData = await response.json();

    if (!response.ok) {
      // Si el backend devuelve un error estructurado, lo retornamos tal como está
      if (responseData.message && responseData.status) {
        return responseData as T;
      }

      // Si no, creamos una estructura de error estándar
      return {
        message: "Opss. There is an Error with response",
        status: response.status,
        code: "HTTP_ERROR",
      } as T;
    }

    return responseData as T;
  }

  public async get<T>(path: string): Promise<T> {
    const headers: Record<string, string> = this.getHeaders();
    console.log(`${this.baseUrl}/${path}`);
    const response = await fetch(`${this.baseUrl}/${path}`, {
      headers,
      method: "GET",
    });
    return await this.managementError(response);
  }

  public async post<T, B>(path: string, body: B): Promise<T> {
    console.log("data-------", path, body);
    const headers: Record<string, string> = this.getHeaders();
    console.log("headers", `${this.baseUrl}/${path}`);
    const response = await fetch(`${this.baseUrl}/${path}`, {
      headers,
      method: "POST",
      body: JSON.stringify(body),
    });
    console.log("response", response);
    return await this.managementError(response);
  }

  public async delete<T>(path: string): Promise<T> {
    console.log("data-------", path);
    const headers: Record<string, string> = this.getHeaders();
    console.log("headers", `${this.baseUrl}/${path}`);
    const response = await fetch(`${this.baseUrl}/${path}`, {
      headers,
      method: "DELETE",
    });
    console.log("response", response);
    return await this.managementError(response);
  }
}
