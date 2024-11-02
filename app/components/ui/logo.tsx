import React from "react";
import Image from "next/image";
import logo from "@/app/public/logo/muuza_logo.png";
import { Link } from "@/i18n/routing";

function Logo() {
  return (
    <div>
      <Link href={"/shop"}>
        <Image
          alt="Muuza logo"
          src={logo}
          style={{
            height: "48px",
            width: "200px",
          }}
          priority
        />
      </Link>
    </div>
  );
}

export default Logo;
