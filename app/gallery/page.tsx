export default function Gallery() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Gallery</h1>
        <p className="text-muted-foreground">
          Photos from our events and community moments.{" "}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Follow us on Instagram
          </a>{" "}
          for more.
        </p>
      </section>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg bg-muted flex items-center justify-center"
          >
            <span className="text-xs text-muted-foreground">Photo</span>
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground text-center">
        Photos coming soon — check our Instagram for the latest.
      </p>
    </div>
  );
}
