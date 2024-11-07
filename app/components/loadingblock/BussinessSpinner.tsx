import React from "react";

const BusinessSpinner = () => {
  return (
    <svg
      className="w-5 h-5 animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        d="M4 12a8 8 0 0 1 8-8V0a12 12 0 0 0 0 24V16a8 8 0 0 1-8-8z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BusinessSpinner;
