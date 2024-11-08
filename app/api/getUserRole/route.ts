import { SessionPayload } from "@/libs/definitions";
import { decrypt } from "@/libs/session";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

   
export async function GET() {
 const session =  cookies().get("session")?.value;

  if (!session) {
    return NextResponse.json({ message: "No session found" }, { status: 401 });
  }

  try {
    // Decrypt the session token to get the payload
    const payload = (await decrypt(session)) as SessionPayload ;
    const userId = payload.userId as string;

    if (!userId) {
      return NextResponse.json({ message: `Invalid session no user id` } , { status: 401 });
    }

    // Find the user by ID and check their role
    const user = await prisma.user.findUnique({
      where: { id : userId },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (user.role === "SELLER") {
      return NextResponse.json({ message: "User is a seller", status: 201 });
    } else {
      return NextResponse.json({ message: "User is not a seller", status: 403 });
    }
  } catch (error) {
    console.error("Error verifying user role:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
