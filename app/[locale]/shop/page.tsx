import ShopHeader from "@/app/components/Header/ShopHeader";

export default async function HomePage() {

  return (
    <main className="max-w-screen-2xl mx-auto">
       <ShopHeader />
      <section className="my-36 space-y-4 px-8">
         here you can get your best vendor
      </section>
    </main>
  );
}
