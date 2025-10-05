export class HTTPClient {
  private baseUrl: string = "http://localhost:3000/api";

  constructor(clientBaseUrl?: string) {
    this.baseUrl = clientBaseUrl ?? this.baseUrl;
  }

  private getHeaders() {
    return {
      "Content-type": "application/json",
    };
  }

  async post<B, T>(url: string, body: B): Promise<T> {
    const headers = this.getHeaders();
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers,
      method: "POST",
      body: JSON.stringify(body),
    });
    return await response.json();
  }
}
