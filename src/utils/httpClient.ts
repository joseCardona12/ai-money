export class HTTPClient {
  private baseUrl: string = "http://localhost:3001/api";

  constructor(clientBaseUrl?: string) {
    this.baseUrl = clientBaseUrl ?? this.baseUrl;
  }

  private getHeaders(token?: string | null) {
    const headers: Record<string, string> = {
      "Content-type": "application/json",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    return headers;
  }

  async get<T>(url: string): Promise<T> {
    const token = localStorage.getItem("token");
    const headers = this.getHeaders(token);
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers,
      method: "GET",
    });
    return await response.json();
  }

  async post<B, T>(url: string, body: B): Promise<T> {
    const token = localStorage.getItem("token");
    const headers = this.getHeaders(token);
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers,
      method: "POST",
      body: JSON.stringify(body),
    });
    return await response.json();
  }

  async put<B, T>(url: string, body: B): Promise<T> {
    const token = localStorage.getItem("token");
    const headers = this.getHeaders(token);
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers,
      method: "PUT",
      body: JSON.stringify(body),
    });
    return await response.json();
  }
}
