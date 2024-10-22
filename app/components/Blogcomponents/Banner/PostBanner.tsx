import React from "react";

interface PostBannerprops {
  postcategories : string
}

const PostBanner = ({postcategories } : PostBannerprops) => {
  return (
    <div className="w-full h-16 rounded-md flex items-center px-4">
      <h6 className="text-skin1 dark:text-text capitalize">{postcategories}</h6>
    </div>
  );
};

export default PostBanner;
