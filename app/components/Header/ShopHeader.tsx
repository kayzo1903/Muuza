"use client";
import React, { useState } from "react";
import Logo from "../ui/logo";
import {
  FaCartPlus,
  FaChevronCircleDown,
  FaList,
  FaTimes,
} from "react-icons/fa";
import Search from "../search/Search";
import Addlocation from "../Addlocation/Addlocation";
import { Link } from "@/i18n/routing";
import Myaccount from "../myAccount/Account";
import LocaleSwitcher from "../switcher/LocaleSwitcher";
import NoteMessage from "../notification/Notification";

function ShopHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsCategoriesOpen(false);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <header className="bg-background shadow w-full h-fit space-y-4 pt-4 relative">
      <nav className="w-full flex justify-between items-center pr-4 relative">
        <Logo />
        <div className="flex gap-4 items-center font-thin text-xl text-skin">
          <div className="w-fit">
            <LocaleSwitcher />
          </div>
          <NoteMessage />
          <FaCartPlus />
          <button onClick={toggleNav} aria-label="Toggle Navigation">
            <FaList />
          </button>
        </div>
      </nav>
      <Search />
      <Addlocation />
      <div
        className={`transition-all duration-500 w-full h-screen bg-white absolute top-0 ${isNavOpen ? "left-0" : "-left-[110%]"}`}
      >
        <div className="w-full h-full px-4 py-2 relative">
          <div className="absolute top-4 right-4">
            <button onClick={toggleNav}>
              <FaTimes className="text-3xl text-skin" />
            </button>
          </div>
          <div className="w-full">
            <div className="w-full mt-8 border-b-[1px] pb-8 border-gray-300">
              <ul className="flex flex-col gap-4 text-gray-900 text-2xl w-full font-semibold">
                <li>
                  <Link href={"/Dashboard"} onClick={toggleNav}>
                    My Dashboard
                  </Link>
                </li>
                <li className="relative">
                  {/* Categories Dropdown */}
                  <button
                    className="flex items-center w-full text-left"
                    onClick={toggleCategories}
                  >
                    Categories
                    <FaChevronCircleDown
                      className={`ml-2 transition-transform ${
                        isCategoriesOpen ? "rotate-180" : ""
                      } text-skin`}
                    />
                  </button>
                  <ul
                    className={`${
                      isCategoriesOpen
                        ? "max-h-64 opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden transition-all duration-300 bg-gray-100 rounded-lg ml-4 p-4 shadow-md space-y-2`}
                  >
                    <li>
                      <Link href={"/foods"} onClick={toggleNav}>
                        Foods
                      </Link>
                    </li>
                    <li>
                      <Link href={"/most-reviewed"} onClick={toggleNav}>
                        Most Reviewed
                      </Link>
                    </li>
                    <li>
                      <Link href={"/trending"} onClick={toggleNav}>
                        Trending
                      </Link>
                    </li>
                    <li>
                      <Link href={"/nearby"} onClick={toggleNav}>
                        Near-By
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href={"/sell-on-muuza"} onClick={toggleNav}>
                    Sell on Muuza
                  </Link>
                </li>
                <li>
                  <Link href={"/favourites"} onClick={toggleNav}>
                    My Favourites
                  </Link>
                </li>
                <li>
                  <Link href={"/help"} onClick={toggleNav}>
                    Help
                  </Link>
                </li>
                <li>
                  <Link href={"/setting/changelocation"} onClick={toggleNav}>
                    Change Location
                  </Link>
                </li>
              </ul>
            </div>
            <Myaccount />
          </div>
        </div>
      </div>
    </header>
  );
}

export default ShopHeader;
