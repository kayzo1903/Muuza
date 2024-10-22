import Posts from "@/app/components/Blogcomponents/Posts/Posts";

export default async function HomePage() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <section className="w-full mx-auto min-h-screen mt-8 md:mt-16">
        <Posts />
      </section>
    </main>
  );
}
