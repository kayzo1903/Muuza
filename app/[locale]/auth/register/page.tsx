import SignupForm from "@/app/components/Auth/Signupform";

export default async function RegisterPage() {
  return (
    <main className="w-full">
      <h1 className="w-full text-center text-2xl md:text-3xl mt-8">Sign Up</h1>
      <div>
        <SignupForm />
      </div>
    </main>
  );
}
