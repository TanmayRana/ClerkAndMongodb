import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  return NextResponse.json(
    {
      message: "Authenticated",
      data: {
        userId: userId,
        username: user?.username,
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.emailAddresses[0].emailAddress,
        imageUrl: user?.imageUrl,
      },
    },
    {
      status: 200,
    }
  );
}