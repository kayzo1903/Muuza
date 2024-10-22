import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ArticleLoadingBlock = () => {
  return (
    <div className="container space-y-4">
      <header className="mb-4 lg:mb-6 space-y-4">
        <div className="w-full flex flex-nowrap items-center justify-between">
          <Skeleton width={100} height={30} />
          <Skeleton width={30} height={30} circle />
        </div>
        <Skeleton height={40} width="60%" />
        <div className="flex items-center mb-6 not-italic">
          <Skeleton circle height={64} width={64} />
          <div className="ml-4">
            <Skeleton width={120} height={20} />
            <Skeleton width={150} height={20} />
            <Skeleton width={100} height={20} />
          </div>
        </div>
      </header>
      <div className="w-full rounded-lg h-96 relative shadow-lg py-4">
        <Skeleton height="100%" />
      </div>
      <div className="w-full prose md:prose-xl my-4">
        <Skeleton count={5} />
      </div>
      <div className="w-full py-4">
        <Skeleton height={30} width={150} />
      </div>
      <div className="flex w-full flex-wrap justify-center md:justify-start items-start gap-4 h-fit py-4">
        {Array(3).map((_, index) => (
          <div key={index} className="w-full md:w-1/3">
            <Skeleton height={200} />
            <Skeleton height={20} width="80%" />
            <Skeleton height={20} width="60%" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleLoadingBlock;
