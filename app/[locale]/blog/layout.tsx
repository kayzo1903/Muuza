import Footer from "@/app/components/Footer/footer";
import Header from "@/app/components/Header/HomeHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "muuza blog contents",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
