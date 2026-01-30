import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const USE_BACKEND = false;

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const MOCK_USER = {
    id: "mock-user-001",
    email: "surajan@gmail.com",
    password: "Surajan@9252$$",
    role: "user",
    name: "Surajan shrestha",
  };

  
  const loginUser = async ({ email, password }) => {
    // ---------- MOCK LOGIN ----------
    if (!USE_BACKEND) {
      if (email === MOCK_USER.email && password === MOCK_USER.password) {
        return {
          success: true,
          user: {
            id: MOCK_USER.id,
            email: MOCK_USER.email,
            role: MOCK_USER.role,
            name: MOCK_USER.name,
          },
          token: "mock-jwt-token-123", //  NOT real JWT
        };
      }
      return { success: false, message: "Invalid email or password" };
    }

    // ---------- BACKEND LOGIN (future) ----------
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      return { success: false, message: data.message || "Login failed" };
    }

    return {
      success: true,
      user: data.user,
      token: data.token, // real JWT later later when backend is integrated
    };
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const result = await loginUser(formData);

      if (!result.success) {
        setError(result.message);
        return;
      }

      // SAME storage for mock & backend
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", result.token);

      navigate("/"); 
    } catch {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-sm bg-white p-6 sm:p-8 rounded-md shadow-md border border-blue-400">
        <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Please login using your account details below.
        </p>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-primary mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-primary" />
              <input
                type="email"
                placeholder="user@test.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border border-background rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0A174E]"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-sm font-semibold text-primary mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-primary" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="123456"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full border border-background rounded-md pl-10 pr-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0A174E]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-primary" />
                ) : (
                  <Eye className="h-4 w-4 text-primary" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-600 text-center my-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full viewdetails-btn py-3 rounded-md mt-2"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an Account?
          <a href="/signup" className="text-primary ml-1 hover:underline">
            Create account
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
