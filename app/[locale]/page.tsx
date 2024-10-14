import Header from "../components/Header/HomeHeader";
import Hero from "../components/Hero/Hero";

export default function HomePage() {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <div className="mx-auto ">
        <Header />
        <Hero />
      </div>
    </main>
  );
}
