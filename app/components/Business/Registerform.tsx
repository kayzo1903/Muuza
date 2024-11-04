"use client";
import React, { useState } from "react";
import { z } from "zod";
import { businessCategories } from "@/libs/datas";

// Define schemas for each step
const stepSchemas = [
  z.object({
    businessName: z.string().min(3, "Business name is required and must be 3 atlest characters"),
  }),
  z.object({
    category: z.string().min(1, "Category is required"),
  }),
  z.object({
    address: z.string().min(1, "Address is required"),
    phone: z
      .string()
      .regex(/^\d+$/, "Phone number must contain only digits")
      .min(10, "Phone number must be at least 10 digits"),
  }),
  z.object({
    description: z
      .string()
      .min(5, "Description should be at least 5 characters"),
    operatingHours: z.string().optional(),
  }),
];

export default function BusinessRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    businessName: "",
    category: "",
    address: "",
    phone: "",
    description: "",
    operatingHours: "",
  });
  const [errors, setErrors] = useState<string | null>(null);

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate current step data before advancing
  const validateStep = () => {
    const validation = stepSchemas[currentStep].safeParse(formData);
    if (!validation.success) {
      setErrors(validation.error.errors[0].message);
      return false;
    }
    setErrors(null);
    return true;
  };

  // Handle step submission
  const handleNextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      // Submit form data to the server
      console.log(formData);
    }
  };

  // Define form sections as components for each step
  const StepComponents = [
    // Step 1: Business Name
    <div key="step1">
      <label
        htmlFor="businessName"
        className="block text-sm font-medium text-gray-700"
      >
        Business Name
      </label>
      <input
        type="text"
        name="businessName"
        value={formData.businessName}
        onChange={handleInputChange}
        className="mt-1 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        required
      />
    </div>,
    // Step 2: Category
    <div key="step2">
      <label
        htmlFor="category"
        className="block text-sm font-medium text-gray-700"
      >
        Category
      </label>
      <select
        name="category"
        value={formData.category}
        onChange={handleInputChange}
        className="mt-1 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        required
      >
        <option value="" disabled>
          Select a category
        </option>
        {businessCategories.map((category: any) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>,
    // Step 3: Address and Phone Number
    <div key="step3">
      <label
        htmlFor="address"
        className="block text-sm font-medium text-gray-700"
      >
        Address
      </label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        className="mt-1 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        required
      />

      <label
        htmlFor="phone"
        className="block mt-4 text-sm font-medium text-gray-700"
      >
        Phone Number
      </label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        className="mt-1 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        required
      />
    </div>,
    // Step 4: Description and Operating Hours
    <div key="step4">
      <label
        htmlFor="description"
        className="block text-sm font-medium text-gray-700"
      >
        Description
      </label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        className="mt-1 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        rows={4}
        required
      />

      <label
        htmlFor="operatingHours"
        className="block mt-4 text-sm font-medium text-gray-700"
      >
        Operating Hours (optional)
      </label>
      <input
        type="text"
        name="operatingHours"
        value={formData.operatingHours}
        onChange={handleInputChange}
        className="mt-1 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        placeholder="e.g., Mon-Fri: 9am - 5pm"
      />
    </div>,
  ];

  return (
    <div className="w-full flex justify-center items-center px-4 mt-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-6 rounded-lg bg-gray-50 p-8 shadow-lg outline-none"
      >
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Register Your Business
        </h2>

        {/* Render current step */}
        {StepComponents[currentStep]}

        {/* Error message */}
        {errors && <p className="text-red-500 text-sm">{errors}</p>}

        {/* Navigation buttons */}
        <div className="flex justify-between">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="rounded-md bg-gray-300 p-2 text-gray-700 hover:bg-gray-400"
            >
              Previous
            </button>
          )}
          {currentStep < StepComponents.length - 1 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="rounded-md bg-skin p-2 text-white hover:bg-secondcolor"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="rounded-md bg-skin p-2 text-white hover:bg-secondcolor"
            >
              Register Business
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
