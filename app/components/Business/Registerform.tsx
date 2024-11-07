"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { business_cat_Types, businessCategories } from "@/libs/datas";
import { useRouter } from "@/i18n/routing";
import { stepSchemas } from "@/libs/definitions";
import CongratulationsPopup from "../congratulates/celebration";
import BusinessSpinner from "../loadingblock/BussinessSpinner";

export default function BusinessRegistrationForm() {
  const router = useRouter();
  const [ownerId, setOwnerId] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // New state for loading
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
  const [showSuccessModal, setShowSuccessModal] = useState(false); // New state for showing success modal

  // Fetch session and get userId
  useEffect(() => {
    const fetchSession = async () => {
      const response = await fetch("/api/getsession");
      if (response.ok) {
        const data = await response.json();
        setOwnerId(data.payload?.userId);
      } else {
        router.push("/auth/signIn");
      }
    };
    fetchSession();
  }, []);

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
  const handleNextStep = async () => {
    if (validateStep()) {
      setIsLoading(true); // Show the spinner
      try {
        await axios.post("/api/registerBusiness", {
          step: currentStep,
          ownerid: ownerId,
          ...formData,
        });
        setCurrentStep((prev) => prev + 1);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          setErrors(err.response.data.error || "Registration failed.");
        } else {
          setErrors("An error occurred. Please try again later.");
        }
      } finally {
        setIsLoading(false); // Hide the spinner when done
      }
    }
  };

  // Handle final submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      try {
        const resp = await axios.post("/api/registerBusiness", {
          step: currentStep,
          ownerid: ownerId,
          ...formData,
        });

        // Check if the response status indicates success
        if (resp.status === 200 || resp.status === 201) {
          // Step 1: Display the success message
          setSuccessMessage("Business registered successfully!");
          setShowSuccessModal(true);
          // Step 2: Delay to give the user time to see the success message
          setTimeout(async () => {
            try {
              // Step 3: Call the updateUserRole API endpoint to update the user role to SELLER
              const updateRoleResponse = await axios.post(
                "/api/updateUserRole",
                {
                  businessId: ownerId, // Ensure resp.data.businessId is returned from the previous request
                }
              );

              // Step 4: Check if the role update was successful
              if (
                updateRoleResponse.status === 200 ||
                updateRoleResponse.status === 201
              ) {
                // Step 5: Route to the dashboard
                router.push("/dashboard");
              } else {
                router.push("/bussiness");
                console.error(
                  "Failed to update user role:",
                  updateRoleResponse.data
                );
              }
            } catch (error) {
              console.error("Error updating user role:", error);
            }
          }, 1000);
        }
      } catch (error) {
        console.error(error);
        setErrors("Failed to submit form. Please try again.");
      }
    }
  };

  // Define form sections as components for each step
  const StepComponents = [
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
        className="mt-1 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-green-100 focus:ring-border-green-200"
        required
      />
    </div>,
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
        className="mt-1 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-green-100 focus:ring-border-green-200"
        required
      >
        <option value="" disabled>
          Select a category
        </option>
        {businessCategories.map((category: business_cat_Types) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>,
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
        className="mt-1 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-green-100 focus:ring-border-green-200"
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
        className="mt-1 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-green-100 focus:ring-border-green-200"
        required
      />
    </div>,
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
        className="mt-1 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-green-100 focus:ring-border-green-200"
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
        className="mt-1 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-green-100 focus:ring-border-green-200"
        placeholder="e.g., Mon-Fri: 9am - 5pm"
      />
    </div>,
  ];

  return (
    <div className="w-full flex justify-center items-center px-4 mt-16">
      {showSuccessModal ? (
        <CongratulationsPopup />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg space-y-6 rounded-lg bg-gray-50 p-8 shadow-lg outline-none"
        >
          <h2 className="text-center text-2xl font-bold text-gray-800">
            Register Your Business
          </h2>

          {/* Render current step */}
          {StepComponents[currentStep]}

          {/* Success and Error messages */}
          {errors && <p className="text-red-500 text-sm">{errors}</p>}
          {successMessage && (
            <p className="text-green-500 text-sm">{successMessage}</p>
          )}

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
                className="relative rounded-md bg-skin p-2 text-white hover:bg-secondcolor"
                disabled={isLoading} // Disable the button while loading
              >
                {isLoading ? (
                  <div className="absolute inset-0 flex justify-center items-center">
                    <BusinessSpinner />
                  </div>
                ) : (
                  "Next"
                )}
              </button>
            ) : (
              <button
                type="submit"
                className="rounded-md bg-skin p-2 text-white hover:bg-secondcolor"
                disabled={isLoading} // Disable the button while loading
              >
                {isLoading ? (
                    <BusinessSpinner />
                  ) : (
                  "Submit"
                )}
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
