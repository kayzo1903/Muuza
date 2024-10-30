"use client";
import { Link } from "@/i18n/routing";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

interface DecodedToken {
  id: number;
  email: string;
  name: string;
  exp: number;
}

export const Myaccount = () => {
  const [userName, setUserName] = useState<string | null>(null);
 
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode<DecodedToken>(token);
        setUserName(decodedToken.name); // Set the user's first name
        
      } catch (error) {
        console.error("Error decoding token", error);
      }
    }
  }, []);

  return (
    <div>
      hi {" "}
      {userName ? <Link href={"auth/signIn"} className="text-skin">signIn</Link> : userName}
    </div>
  );
};
