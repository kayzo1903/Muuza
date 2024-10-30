// /pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import { AuthOption } from "@/app/util/Auth";

const handler = NextAuth (AuthOption);

export { handler as GET , handler as POST}