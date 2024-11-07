// lib/definitions.ts
import { z } from "zod";



export interface SessionPayload {
  id: string; // User ID
  email: string; //userid
  name: string; //user name
  role: string; // User role, e.g., "user", "admin", etc.
  iat?: number; // Issued at timestamp, compatible with JWT
  exp?: number; // Expiration timestamp, compatible with JWT
  [key: string]: unknown; // Index signature for compatibility with JWTPayload
}

 export interface BusinessRegistrationFormData {
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  postalCode?: string; // Optional
  category: string; // Can be linked to your BusinessCategory interface if categories are predefined
  website?: string; // Optional
  description?: string; // Optional
  operatingHours: {
    start: string; // e.g., "09:00 AM"
    end: string; // e.g., "05:00 PM"
  };
  termsAccepted: boolean;
}

// Define schemas for each step
export const stepSchemas = [
  z.object({
    businessName: z
      .string()
      .min(3, "Business name is required and must be at least 3 characters"),
  }),
  z.object({
    category: z.string().min(1, "Category is required"),
  }),
  z.object({
    address: z.string().min(5, "Address must be at least 5 characters"),
    phone: z
      .string()
      .regex(/^\d+$/, "Phone number must contain only digits")
      .min(10, "Phone number must be at least 10 digits"),
  }),
  z.object({
    description: z
      .string()
      .min(5, "Description should be at least 5 characters"),
    operatingHours: z.string().optional(),
  }),
];


