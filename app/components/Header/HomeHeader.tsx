"use client";
import { Link } from "@/i18n/routing";
import React, { useState } from "react";
import LocaleSwitcher from "../switcher/LocaleSwitcher";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useTranslations } from "next-intl";
import Logo from "../ui/logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu
  const t = useTranslations("header");

  // Toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-background shadow w-full h-20 py-2">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-nowrap items-center">
          {/* Mobile Menu Toggle */}
          <div className="md:hidden pl-2">
            {isOpen ? (
              <AiOutlineClose
                className="text-skin text-3xl"
                onClick={toggleMenu}
              />
            ) : (
              <HiOutlineMenuAlt2
                className="text-skin text-3xl"
                onClick={toggleMenu}
              />
            )}
          </div>
          {/* Logo */}
          <Logo />
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-4 capitalize">
          <Link
            href="/sell-on-muuza"
            className="text-gray-700 hover:text-green-600 font-semibold"
          >
            {t("sell")}
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-green-600 font-semibold"
          >
            {t("about")}
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-green-600 font-semibold"
          >
            {t("blog")}
          </Link>
        </nav>

        {/* Desktop Button and Locale Switcher */}
        <div className="flex gap-8 flex-nowrap pr-2">
          <div>
            <LocaleSwitcher />
          </div>
          <Link
            href="/shop"
            className="bg-secondcolor hidden md:flex hover:bg-green-600 text-white py-[10px] px-4 rounded-full transition duration-300"
          >
            {t("try muuza")}
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu with Slide-in Effect */}
      <div
        className={`absolute top-20 left-0 h-full bg-background z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-full p-6 md:hidden bg-background`}
      >
        <div className="flex flex-col space-y-6">
          <Link
            href="/sell-on-muuza"
            className="text-gray-700 hover:text-green-600 text-lg"
            onClick={toggleMenu} // Close menu on click
          >
            {t("sell")}
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-green-600 text-lg"
            onClick={toggleMenu}
          >
            {t("about")}
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-green-600 text-lg"
            onClick={toggleMenu}
          >
            {t("blog")}
          </Link>
          <Link
            href="/shop"
            className="bg-secondcolor hover:bg-green-600 text-white py-2 px-4 rounded-full transition duration-300 text-center"
            onClick={toggleMenu}
          >
            {t("try muuza")}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
