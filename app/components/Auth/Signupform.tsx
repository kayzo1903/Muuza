"use client";
import React, { useState } from "react";
import axios from "axios";
import { countries } from "@/libs/datas";
import { Link, useRouter } from "@/i18n/routing";
import { signupSchema } from "@/libs/Formvalidation";

export default function SignupForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const isChecked = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
  
    setFormData({
      ...formData,
      [name]: isChecked,
    });
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate using Zod schema
    const validationResult = signupSchema.safeParse(formData);
    if (!validationResult.success) {
      setError(validationResult.error.errors[0].message);
      setSuccess("");
      return;
    }

    try {
      const { data } = await axios.post("/api/register", formData, {
        headers: { "Content-Type": "application/json" },
      });

      setSuccess(data.message);
      setError("");
      router.push(`/auth/signIn`);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.error || "Registration failed.");
      } else {
        setError("An error occurred. Please try again later.");
      }
      setSuccess("");
    }
  };

  return (
    <form className="mx-auto max-w-lg rounded-lg" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 p-4 md:p-8">
        {/* First Name and Last Name Inputs */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label
              htmlFor="firstName"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              First Name
            </label>
            <input
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="lastName"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Last Name
            </label>
            <input
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
        </div>

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
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
        </div>

        {/* Country Dropdown */}
        <div>
          <label
            htmlFor="country"
            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >
            Country
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
            className="w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          >
            <option value="" disabled>
              Select your country
            </option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* Password Input */}
        <div>
          <label
            htmlFor="password"
            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >
            Password (must include special characters)
          </label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            placeholder="Your password (e.g., P@ssw0rd!)"
            className="w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
        </div>

        {/* Confirm Password Input */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            className="w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleInputChange}
            required
            className="h-4 w-4"
          />
          <label className="text-sm text-gray-600">
            I agree to the{" "}
            <Link
              href="/terms"
              className="text-indigo-500 hover:text-indigo-600"
            >
              Terms of Service
            </Link>
            ,{" "}
            <Link
              href="/privacy"
              className="text-indigo-500 hover:text-indigo-600"
            >
              Privacy Policy
            </Link>
            , and{" "}
            <Link
              href="/user-agreement"
              className="text-indigo-500 hover:text-indigo-600"
            >
              User Agreement
            </Link>
          </label>
        </div>

        {/* Sign-Up Button */}
        <button
          type="submit"
          className="block rounded-lg bg-skin px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-secondcolor focus-visible:ring active:bg-gray-600 md:text-base"
        >
          Sign Up
        </button>

        {/* Error and Success Messages */}
        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}
      </div>
      <div className="flex items-center justify-center p-4">
        <p className="text-center text-sm text-gray-500">
          Already have an account?
          <Link
            href="/auth/signIn"
            className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
          >
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
}
