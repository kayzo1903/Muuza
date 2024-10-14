import { useTranslations } from "next-intl";
import { Link } from "../../i18n/routing";
import Header from "../components/Header/HomeHeader";
import Hero from "../components/Hero/Hero";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <main className="max-w-screen-2xl mx-auto">
      <div className="mx-auto ">
        <Header />
        <Hero />
      </div>
    </main>
  );
}
