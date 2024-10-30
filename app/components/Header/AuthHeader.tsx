import React from "react";
import Image from "next/image";
import logo from "@/app/public/logo/muuzalogo.png";
import { Link } from "@/i18n/routing";

function AuthHeader() {
  return (
    <header className="bg-background shadow w-full h-20 py-2">
      <div>
        <Link href={"/"}>
          <Image
            alt="Muuza logo"
            src={logo}
            style={{
              height: "48px",
              width: "202px",
            }}
            priority
          />
        </Link>
      </div>
    </header>
  );
}

export default AuthHeader;
