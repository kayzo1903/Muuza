import { Myaccount } from "@/app/components/myAccount/Account";

export default async function HomePage() {
  return (
    <main className="max-w-screen-2xl mx-auto px-8">
      <header className="w-full pt-4">
        <nav>
          <div>
            <Myaccount />
          </div>
        </nav>
      </header>
      <section className="my-36 space-y-4">
         here you can get your best vendor
      </section>
    </main>
  );
}
