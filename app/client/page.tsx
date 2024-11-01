"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";

const Clientpage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div className="h-full flex flex-col items-center justify-center text-2xl">
      Hellow {user?.firstName} welcome to Clerk
    </div>
  );
};

export default Clientpage;
