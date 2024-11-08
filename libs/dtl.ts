import "server-only";
import { redirect } from "@/i18n/routing";
import { cookies } from "next/headers";

export const verifySession = async () => {
  const session = cookies().get("session")?.value
  if (!session) {
    redirect("/auth/signIn")
  }
};
