import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
          <div>
            <p className="font-semibold">NUSASA</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Northwestern University South Asian Student Alliance
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-medium">Links</p>
            <div className="flex flex-col gap-1 text-muted-foreground">
              <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link href="/events" className="hover:text-foreground transition-colors">Events</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-medium">Connect</p>
            <div className="flex flex-col gap-1 text-muted-foreground">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Instagram
              </a>
              <a
                href="mailto:nusasa@u.northwestern.edu"
                className="hover:text-foreground transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
        <Separator className="my-6" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} NUSASA — Northwestern University South Asian Student Alliance.
        </p>
      </div>
    </footer>
  );
}
