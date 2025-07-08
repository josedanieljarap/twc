import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Panadería Moisés",
  description: "Pan artesanal delicioso y nutritivo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-blue-200">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
