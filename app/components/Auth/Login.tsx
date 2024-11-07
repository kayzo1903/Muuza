"use client";
import React, { useState } from "react";
import axios from "axios";
import { Link, useRouter } from "@/i18n/routing";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("/api/login", { email, password });
      if (res.status === 200) {
        router.push("/shop");
      } else {
        setError("Unexpected response format or missing token.");
      }
    } catch (err: unknown) {
      // Check if error is an AxiosError
      if (axios.isAxiosError(err)) {
        const serverError = err.response?.data?.error || "Login failed";
        setError(serverError);
        console.error("Login error details:", err); // Log detailed error
      } else {
        // Handle any other types of errors
        setError("An unexpected error occurred.");
        console.error("Unexpected error:", err);
      }
    } finally {
      setLoading(false);
    }
    
  };

  return (
    <div className="w-full">
      {/* Login Form */}
      <form className="mx-auto max-w-lg rounded-lg" onSubmit={handleLogin}>
        <div className="flex flex-col gap-4 p-4 md:p-8">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          {/* Password Input with Toggle Visibility */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Password
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-600">{error}</p>}

          {/* Loading State */}
          {loading ? (
            <button
              type="button"
              className="block rounded-lg bg-gray-400 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100"
              disabled
            >
              Logging in...
            </button>
          ) : (
            <button
              type="submit"
              className="block rounded-lg bg-skin px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-secondcolor focus-visible:ring active:bg-gray-600 md:text-base"
            >
              Log in
            </button>
          )}

          {/* Register Link */}
          <div className="flex items-center justify-center p-4">
            <p className="text-center text-xl text-gray-500">
              Don&apos;t have an account?
              <Link
                href="/auth/register"
                className="text-indigo-500 mx-2 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
