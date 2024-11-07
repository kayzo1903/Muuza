"use client";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import axios from "axios";
import { business_cat_Types, businessCategories } from "@/libs/datas";
import { useRouter } from "@/i18n/routing";

// Define validation schemas for each step
const stepSchemas = [
  z.object({
    businessName: z
      .string()
      .min(3, "Business name is required and must be at least 3 characters"),
  }),
  z.object({
    category: z.string().min(1, "Category is required"),
  }),
  z.object({
    address: z.string().min(5, "Address must be at least 5 characters"),
    phone: z
      .string()
      .regex(/^\d+$/, "Phone number must contain only digits")
      .min(10, "Phone number must be at least 10 digits"),
  }),
  z.object({
    description: z.string().min(5, "Description should be at least 5 characters"),
    operatingHours: z.string().optional(),
  }),
];

export default function BusinessRegistrationForm() {
  const router = useRouter();
  const [ownerId, setOwnerId] = useState("");
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
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Fetch the session and userId
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch("/api/getsession");
        if (response.ok) {
          const data = await response.json();
          setOwnerId(data.payload?.userId);
        }
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };
    fetchSession();
  }, []);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate the current step's data
  const validateStep = () => {
    const validation = stepSchemas[currentStep].safeParse(formData);
    if (!validation.success) {
      setErrors(validation.error.errors[0].message);
      return false;
    }
    setErrors(null);
    return true;
  };

  // Advance to the next step
  const handleNextStep = async () => {
    if (validateStep()) {
      try {
        await axios.post("/api/registerBusiness", {
          step: currentStep,
          ownerid: ownerId,
          ...formData,
        });
        setCurrentStep((prev) => prev + 1);
      } catch (err) {
        handleApiError(err);
      }
    }
  };

  // Handle the final form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      try {
        const resp = await axios.post("/api/registerBusiness", {
          step: currentStep,
          ownerid: ownerId,
          ...formData,
        });

        if (resp.status === 200 || resp.status === 201) {
          setSuccessMessage("Business registered successfully!");
          setTimeout(() => updateUserRoleAndRedirect(), 500);
        }
      } catch (error) {
        handleApiError(error);
      }
    }
  };

  // Update user role and redirect to dashboard
  const updateUserRoleAndRedirect = async () => {
    try {
      const response = await axios.post("/api/updateUserRole", {
        businessId: ownerId,
      });

      if (response.status === 200 || response.status === 201) {
        router.push("/dashboard");
      } else {
        console.error("Failed to update user role:", response.data);
      }
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  // Helper to handle API errors
  const handleApiError = (error: any) => {
    if (axios.isAxiosError(error) && error.response) {
      setErrors(error.response.data.error || "An error occurred.");
    } else {
      setErrors("An unexpected error occurred. Please try again.");
    }
  };

  // Define form components for each step
  const StepComponents = [
    <BusinessNameStep key="step1" value={formData.businessName} onChange={handleInputChange} />,
    <CategoryStep key="step2" value={formData.category} onChange={handleInputChange} />,
    <ContactStep key="step3" address={formData.address} phone={formData.phone} onChange={handleInputChange} />,
    <DescriptionStep key="step4" description={formData.description} operatingHours={formData.operatingHours} onChange={handleInputChange} />,
  ];

  return (
    <div className="w-full flex justify-center items-center px-4 mt-16">
      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6 rounded-lg bg-gray-50 p-8 shadow-lg outline-none">
        <h2 className="text-center text-2xl font-bold text-gray-800">Register Your Business</h2>

        {/* Render the current step */}
        {StepComponents[currentStep]}

        {/* Display success or error messages */}
        {errors && <p className="text-red-500 text-sm">{errors}</p>}
        {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}

        {/* Navigation buttons */}
        <div className="flex justify-between">
          {currentStep > 0 && (
            <button type="button" onClick={() => setCurrentStep(currentStep - 1)} className="rounded-md bg-gray-300 p-2 text-gray-700 hover:bg-gray-400">
              Previous
            </button>
          )}
          {currentStep < StepComponents.length - 1 ? (
            <button type="button" onClick={handleNextStep} className="rounded-md bg-skin p-2 text-white hover:bg-secondcolor">
              Next
            </button>
          ) : (
            <button type="submit" className="rounded-md bg-skin p-2 text-white hover:bg-secondcolor">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

// Component for Business Name Step
function BusinessNameStep({ value, onChange }: any) {
  return (
    <div>
      <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
      <input type="text" name="businessName" value={value} onChange={onChange} className="mt-1 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
    </div>
  );
}

// Component for Category Step
function CategoryStep({ value, onChange }: any) {
  return (
    <div>
      <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
      <select name="category" value={value} onChange={onChange} className="mt-1 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required>
        <option value="" disabled>Select a category</option>
        {businessCategories.map((category: business_cat_Types) => (
          <option key={category.id} value={category.name}>{category.name}</option>
        ))}
      </select>
    </div>
  );
}

// Component for Address and Phone Step
function ContactStep({ address, phone, onChange }: any) {
  return (
    <div>
      <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
      <input type="text" name="address" value={address} onChange={onChange} className="mt-1 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />

      <label htmlFor="phone" className="block mt-4 text-sm font-medium text-gray-700">Phone Number</label>
      <input type="tel" name="phone" value={phone} onChange={onChange} className="mt-1 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
    </div>
  );
}

// Component for Description Step
function DescriptionStep({ description, operatingHours, onChange }: any) {
  return (
    <div>
      <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
      <textarea name="description" value={description} onChange={onChange} className="mt-1 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required></textarea>

      <label htmlFor="operatingHours" className="block mt-4 text-sm font-medium text-gray-700">Operating Hours</label>
      <input type="text" name="operatingHours" value={operatingHours} onChange={onChange} className="mt-1 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
    </div>
  );
}
