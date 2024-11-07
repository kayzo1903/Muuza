import SignupForm from "@/app/components/Auth/Signupform";
import SignUpSkeleton from "@/app/components/loadingblock/signuploadingblock";
import { Suspense } from "react";

export default async function RegisterPage() {
  return (
    <main className="w-full">
      <h1 className="w-full text-center text-2xl md:text-3xl mt-8">Sign Up</h1>
      <div>
        <Suspense  fallback={<SignUpSkeleton />}>
          <SignupForm />
        </Suspense>
      </div>
    </main>
  );
}
