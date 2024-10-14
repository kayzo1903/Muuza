import AboutPage from "../components/About/About";
import BlogSection from "../components/Blog/Blog";
import Header from "../components/Header/HomeHeader";
import Hero from "../components/Hero/Hero";
import HowToEarn from "../components/HowToEarn/Howtoearn";
import NewsletterSubscription from "../components/Newsletter/Newsletter";
import ServicesProvided from "../components/services/Service";

export default function HomePage() {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <div className="mx-auto ">
        <Header />
        <Hero />
        <HowToEarn />
        <AboutPage />
        <ServicesProvided />
        <BlogSection />
        <NewsletterSubscription />
      </div>
    </main>
  );
}
