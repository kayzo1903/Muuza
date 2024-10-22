import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import React from "react";
import { FaShareAlt } from "react-icons/fa";

interface Postcardinterface {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
}

const Postscards: React.FC<Postcardinterface> = ({
  category,
  date,
  slug,
  title,
  image,
}) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex w-full md:w-96 h-80 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg xl:h-96 relative"
    >
      <Image
        src={urlForImage(image)} // urlForImage() takes the image reference and converts it to a URL
        alt={slug}
        fill={true}
        style={{ objectFit: "cover" }}
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

      <div className="relative mt-auto p-4">
        <span className="block text-sm text-gray-200">
          {new Date(date).toLocaleDateString()}
        </span>
        <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
          {title}
        </h2>
        <div className="w-full flex justify-between flex-nowrap">
          <span className="font-semibold text-skin">{category}</span>
          <FaShareAlt className="text-white" />
        </div>
      </div>
    </Link>
  );
};

export default Postscards;
