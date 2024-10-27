import { Link } from "@/i18n/routing";

export default async function HomePage() {
  return (
    <main className="max-w-screen-2xl mx-auto px-8">
      <header className="w-full pt-4">
        <nav>
          <div>
            <Link href={"/"} className="text-2xl md:text-4xl font-bold">Muuza</Link>
          </div>
        </nav>
      </header>
      <section className="my-36 space-y-4">
         here you can get your best vendor
      </section>
    </main>
  );
}
