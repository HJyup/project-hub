type RequestOptions = {
  url: string;
  headers?: Record<string, string>;
  body?: Record<string, string | number | Date>;
};

class HttpClient {
  async get({ url, headers }: RequestOptions) {
    return this.request({
      url,
      method: "GET",
      headers: headers || {},
    });
  }

  async post({ url, headers, body }: RequestOptions) {
    return this.request({
      url,
      method: "POST",
      headers: headers || {},
      body,
    });
  }

  async put({ url, headers, body }: RequestOptions) {
    return this.request({
      url,
      method: "PUT",
      headers: headers || {},
      body,
    });
  }

  async delete({ url, headers }: RequestOptions) {
    return this.request({
      url,
      method: "DELETE",
      headers: headers || {},
    });
  }

  private async request({
    url,
    method,
    headers,
    body,
  }: RequestOptions & { method: "GET" | "POST" | "PUT" | "DELETE" }) {
    headers = {
      ...headers,
      "Content-Type": headers?.["Content-Type"] || "application/json",
    };

    const options: RequestInit = {
      method,
      headers,
      body:
        method !== "GET" && method !== "DELETE" && body !== undefined
          ? JSON.stringify(body)
          : null,
    };

    const response = await fetch(url, options);

    if (response.ok) {
      return response.json();
    }

    const errorData = await response.json();
    throw new Error(errorData.message || "Request failed");
  }
}

const request = new HttpClient();
export default request;
