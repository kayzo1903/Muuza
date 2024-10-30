import Footer from "@/app/components/Footer/footer";
import AuthHeader from "@/app/components/Header/AuthHeader";
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
      <body>
        <AuthHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
