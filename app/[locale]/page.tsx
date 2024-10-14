import { useTranslations } from "next-intl";
import { Link } from "../../i18n/routing";
import Header from "../components/Header/HomeHeader";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <main className="max-w-screen-2xl mx-auto">
      <div className="mx-auto ">
        <Header />
        <div className="w-full py-4 px-2">
          <h1>{t("title")}</h1>
          <Link href="/dashboard">{t("about")}</Link>
        </div>
      </div>
    </main>
  );
}
