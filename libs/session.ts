import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { SessionPayload } from "@/libs/definitions";
import { cookies } from "next/headers";

const secretKey = process.env.JWT_SECRET;
if (!secretKey) throw new Error("JWT_SECRET is not defined in environment variables");
const encodedKey = new TextEncoder().encode(secretKey);

// Encrypts the payload into a JWT token
export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

// Decrypts the JWT token and returns the payload
export async function decrypt(token: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(token || "", encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session:", error);
    return null;
  }
}

// Creates a session by setting the session cookie
export async function createSession({
    id,
    email,
    name,
    role,
  }: {
    id: string;
    email: string;
    name: string;
    role: string;
  }) {
    // Set expiration to 1 day from now
    const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000); 
  
    // Generate the session token with user info
    const sessionToken = await encrypt({
        userId: id,
        email,
        name,
        role,
        expiresAt,
        id: ""
    });

  cookies().set("session", sessionToken, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

// Updates the session expiration
export async function updateSession() {
  const sessionToken = cookies().get("session")?.value;
  const payload = await decrypt(sessionToken);

  if (!sessionToken || !payload) return null;

  // Extend the session expiration
  const newExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  cookies().set("session", sessionToken, {
    httpOnly: true,
    secure: true,
    expires: newExpiresAt,
    sameSite: "lax",
    path: "/",
  });
}

// Deletes the session cookie
export async function deleteSession() {
  cookies().delete("session");
}
