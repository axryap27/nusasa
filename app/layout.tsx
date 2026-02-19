import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NUSASA — Northwestern SASA",
  description: "Northwestern University South Asian Student Alliance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased flex min-h-screen flex-col`}>
        <Nav />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
