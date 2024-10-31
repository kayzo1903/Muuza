// lib/definitions.ts

export interface SessionPayload {
  id: string; // User ID
  email: string; //userid
  name: string; //user name
  role: string; // User role, e.g., "user", "admin", etc.
  iat?: number; // Issued at timestamp, compatible with JWT
  exp?: number; // Expiration timestamp, compatible with JWT
  [key: string]: unknown; // Index signature for compatibility with JWTPayload
}
