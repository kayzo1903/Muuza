import Footer from "@/app/components/Footer/footer";
import LogoHeader from "@/app/components/Header/AuthLogo";
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
        <LogoHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
