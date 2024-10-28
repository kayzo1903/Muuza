"use client";
import React, { useState, useEffect, useRef } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { HiLocationMarker } from "react-icons/hi";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

// Define the required libraries for Google Maps API
const libraries: "places"[] = ["places"];

const SearchPlace: React.FC = () => {
  const t = useTranslations("HomePage"); // Use translation hook
  const [searchValue, setSearchValue] = useState<string>("");
  const [predictions, setPredictions] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const autocompleteServiceRef =
    useRef<google.maps.places.AutocompleteService | null>(null);

  // Load Google Maps API with the 'places' library
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  // Load the Google Maps Places Library on initial render
  useEffect(() => {
    if (isLoaded && typeof window !== "undefined" && google && google.maps) {
      autocompleteServiceRef.current =
        new google.maps.places.AutocompleteService();
    }
  }, [isLoaded]);

  // Handle input change and fetch predictions
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);

    if (value && autocompleteServiceRef.current) {
      const request = {
        input: value,
        componentRestrictions: { country: "tz" }, // Restrict to Tanzania
      };

      autocompleteServiceRef.current.getPlacePredictions(
        request,
        (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            setPredictions(results);
          } else {
            setPredictions([]);
          }
        }
      );
    } else {
      setPredictions([]);
    }
  };

  // Handle prediction click
  const handlePredictionClick = (
    prediction: google.maps.places.AutocompletePrediction
  ) => {
    setSearchValue(prediction.description);
    setPredictions([]);
  };

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <form className="w-full">
      <div className="relative max-w-md">
        <HiLocationMarker className="absolute left-3 top-6 transform -translate-y-1/2 text-secondcolor text-2xl" />
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder={t("placeholder")}
          className="w-full shadow-md px-2 py-3 pl-12 pr-4 mb-4 bg-gray-1000 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        {/* Render predictions */}
        {predictions.length > 0 && (
          <ul className="absolute left-0 right-0 z-10 mt-2 bg-white border rounded-lg shadow-lg">
            {predictions.map((prediction) => (
              <li
                key={prediction.place_id}
                onClick={() => handlePredictionClick(prediction)}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                {prediction.description}
              </li>
            ))}
          </ul>
        )}
        <button
          type="submit"
          className="text-white bg-secondcolor rounded-md py-2 px-2 text-xl hover:text-skin transition-all duration-300"
        >
          <Link href={"/shop"}>{t("ctaButton")}</Link>
        </button>
      </div>
    </form>
  );
};

export default SearchPlace;
