import Footer from "@/app/components/Footer/footer";
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
