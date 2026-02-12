import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NUSASA — Northwestern SASA",
  description: "Northwestern University South Asian Student Alliance",
};

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <nav className="flex items-center justify-between border-b px-6 py-4">
          <Link href="/" className="text-xl font-bold">NUSASA</Link>
          <div className="flex gap-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
        <main className="mx-auto max-w-5xl px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
