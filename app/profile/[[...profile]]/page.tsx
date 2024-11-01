import { UserProfile } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";

import { redirect } from "next/navigation";

const Profile = async () => {
  const { userId } = await auth();

  //   console.log(userId);

  const isAuth = !!userId;
  console.log("isAuth=", isAuth);
  const user = await currentUser();

  console.log("user=", user);

  if (!isAuth) {
    redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1 className="text-2xl">{user?.username}</h1>
      <UserProfile />
    </div>
  );
};

export default Profile;
