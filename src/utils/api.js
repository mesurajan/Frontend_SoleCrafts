
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// Generic fetch function
async function apiFetch(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const finalOptions = { ...defaultOptions, ...options };
  if (options.body && typeof options.body !== "string") {
    finalOptions.body = JSON.stringify(options.body);
  }

  const res = await fetch(url, finalOptions);
  if (!res.ok) {
    const err = await res.json();
    throw err;
  }
  return res.json();
}

// Specific endpoints (optional)
export const signup = (data) => apiFetch("/api/signup", { method: "POST", body: data });
export const login = (data) => apiFetch("/api/login", { method: "POST", body: data });

// Or just export generic fetch
export default apiFetch;
