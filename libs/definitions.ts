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



