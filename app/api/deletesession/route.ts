import { deleteSession } from "@/libs/session";
import { NextResponse } from "next/server";

export async function POST() {
  await deleteSession(); // Custom function to delete session
  return NextResponse.json({ message: "Logged out" }, { status: 200 });
}
