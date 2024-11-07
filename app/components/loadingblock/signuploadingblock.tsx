// components/SkeletonLoader.tsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface SkeletonLoaderProps {
  height?: number;
  width?: number;
}

const SignUpSkeleton: React.FC<SkeletonLoaderProps> = ({ height = 40, width = "100%" }) => {
  return <Skeleton height={height} width={width} />;
};

export default SignUpSkeleton;
