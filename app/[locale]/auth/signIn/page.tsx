import LoginForm from "@/app/components/Auth/Login";

export default async function RegisterPage() {
  return (
    <main className="w-full">
      <h1 className="w-full text-center text-2xl md:text-3xl mt-8">Sign In</h1>
      <LoginForm />
    </main>
  );
}
