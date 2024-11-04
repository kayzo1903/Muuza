import React from "react";
import Logo from "../ui/logo";
import LocaleSwitcher from "../switcher/LocaleSwitcher";

const LogoHeader = () => {
  return (
    <header className="bg-background shadow w-full h-fit space-y-4 pt-4 relative">
      <nav className="w-full flex justify-between items-center px-4 relative">
        <Logo />
        <div className="w-fit">
          <LocaleSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default LogoHeader;
