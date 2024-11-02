import React from "react";
import Image from "next/image";
import logo from "@/app/public/logo/muuza_logo.png";
import { Link } from "@/i18n/routing";

function Logo() {
  return (
    <div className="flex items-center justify-center sm:justify-start">
      <Link href="/shop">
        <Image
          alt="Muuza logo"
          src={logo}
          priority
          className="w-32 h-auto sm:w-48 md:w-52 lg:w-56"
        />
      </Link>
    </div>
  );
}

export default Logo;
