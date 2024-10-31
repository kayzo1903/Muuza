import { decrypt } from "@/libs/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const session =  cookies().get("session")?.value;
   
  if (session) {
    const payload = await decrypt(session);
    return NextResponse.json({ payload }, { status: 200 });
  }

  return NextResponse.json({ message: "No session found" , session } , { status: 401 });
}
