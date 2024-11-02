import Footer from "@/app/components/Footer/footer";
import ShopHeader from "@/app/components/Header/ShopHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "shop",
  description: "muuza get your food here",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="antialiased">
        <ShopHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
