import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = () => {
  return (
    <div className="w-full mx-auto max-w-lg p-4 md:p-8">
      {/* Skeleton for email input */}
      <Skeleton height={20} width={80} style={{ marginBottom: 8 }} />
      <Skeleton height={40} style={{ marginBottom: 16 }} />

      {/* Skeleton for password input */}
      <Skeleton height={20} width={80} style={{ marginBottom: 8 }} />
      <Skeleton height={40} style={{ marginBottom: 16 }} />

      {/* Skeleton for login button */}
      <Skeleton height={45} width="100%" style={{ marginBottom: 16 }} />

      {/* Skeleton for register link */}
      <Skeleton height={20} width="60%" style={{ marginTop: 16 }} />
    </div>
  );
};

export default LoadingSkeleton;
