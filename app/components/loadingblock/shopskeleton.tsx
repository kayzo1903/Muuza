import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="header">
        <Skeleton height={50} width="30%" />
      </div>
      
      {/* Main Body */}
      <div className="main-body space-y-4">
        <Skeleton height={40} width="100%" />
        <Skeleton height={40} width="75%" />
        <Skeleton height={40} width="90%" />
      </div>

      {/* Footer */}
      <div className="footer">
        <Skeleton height={50} width="20%" />
      </div>
    </div>
  );
};

export default SkeletonLoader;
