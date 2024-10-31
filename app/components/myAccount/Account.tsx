// Myaccount.tsx
"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/routing";
import axios from "axios";

export default function Myaccount() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const response = await fetch("/api/getsession");

      if (response.ok) {
        const data = await response.json();
        setName(data.payload.name);
      }
    };

    fetchSession();
  }, []);

  const handleSignOut = async () => {
    await axios.post("/api/deletesession");
    setName(null); // Clear the state on sign-out
  };

  if (name) {
    return (
      <div className="w-full mt-4 flex justify-between items-center flex-nowrap">
        <h3 className="text-2xl">hi {name}</h3>
        <div>
          <button onClick={handleSignOut} className="text-skin text-2xl">signOut</button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 w-full">
      <h3 className="text-2xl">
        hi
        <Link href="auth/signIn" className="text-skin mx-2">
          signIn
        </Link>
      </h3>
    </div>
  );
}
