import { loginSchema } from "@/libs/Formvalidation";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { createSession } from "@/libs/session"; // Import the createSession function

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = loginSchema.parse(body);

    if (!email || !password) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Generate and set the session cookie using createSession
    await createSession({
      id: user.id as string,
      email: user.email as string,
      name: user.firstName as string,
      role: user.role as string,
    });

    return NextResponse.json(
      {
        message: "Login successful",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Login route error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
