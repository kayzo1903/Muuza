import Skeleton from "react-loading-skeleton";
import React from "react";

const PostcardsSkeleton: React.FC = () => {
  return (
    <div className="w-96 h-80 flex flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg xl:h-96 relative">
      <div className="w-full h-full">
        <Skeleton height="100%" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

      <div className="relative mt-auto p-4">
        <span className="block text-sm text-gray-200">
          <Skeleton width="50%" />
        </span>
        <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
          <Skeleton width="80%" />
        </h2>
        <div className="w-full flex justify-between flex-nowrap">
          <span className="font-semibold text-text">
            <Skeleton width="30%" />
          </span>
          <Skeleton circle={true} height={24} width={24} />
        </div>
      </div>
    </div>
  );
};

export default PostcardsSkeleton;
