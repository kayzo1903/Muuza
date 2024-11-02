import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl"; // Import for handling translations
import heroImage from "@/app/public/images/hero-image.png"; // Replace with your image

import SearchFoods from "../PlaceInput/GooglMapsearch";

const Hero = () => {
  const t = useTranslations("HomePage"); // Use translation hook

  return (
    <section className="relative h-fit">
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-fit lg:py-16 px-6 sm:px-12 lg:px-24 space-y-8 lg:space-y-0 lg:gap-2">
        {/* Left Side: Headline and Call to Action */}
        <div className="lg:w-1/2 flex flex-col items-start text-left mt-16 lg:mt-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
            {t("heroTitle")}
          </h1>
          <p className="text-lg sm:text-xl text-foreground mb-8">
            {t("heroDescription")}
          </p>

          {/* Call to Action */}
          <SearchFoods />
        </div>

        {/* Right Side: Hero Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src={heroImage}
            alt="Hero Image"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
