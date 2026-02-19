import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const upcomingEvents = [
  {
    id: 1,
    date: "Mar 8, 2026",
    title: "Holi Celebration",
    description: "Join us for our annual Holi festival with music, colors, and food.",
    location: "Deering Meadow",
    tag: "Cultural",
  },
  {
    id: 2,
    date: "Mar 22, 2026",
    title: "Desi Night",
    description: "A night of Bollywood music, dancing, and South Asian cuisine.",
    location: "Norris University Center",
    tag: "Social",
  },
  {
    id: 3,
    date: "Apr 5, 2026",
    title: "Professional Panel",
    description: "South Asian professionals share their experiences in industry and grad school.",
    location: "Kellogg Global Hub",
    tag: "Professional",
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="py-8">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">
          Northwestern University
        </p>
        <h1 className="text-5xl font-bold tracking-tight leading-tight mb-4">
          South Asian<br />Student Alliance
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mb-8">
          Celebrating South Asian culture, community, and identity at Northwestern.
          Everyone is welcome.
        </p>
        <div className="flex gap-3">
          <Button asChild>
            <Link href="/events">Upcoming Events</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about">About Us</Link>
          </Button>
        </div>
      </section>

      <Separator />

      {/* About blurb */}
      <section>
        <Card className="bg-muted/40 border-0">
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed">
              NUSASA is Northwestern University&apos;s home for South Asian students and allies.
              We foster a sense of belonging through cultural events, professional development,
              and community building — from Diwali celebrations to industry panels. Whether
              you&apos;re South Asian or simply curious about the culture, you belong here.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Upcoming events preview */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/events">View all →</Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {upcomingEvents.map((event) => (
            <Card key={event.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-muted-foreground">{event.date}</span>
                  <Badge variant="secondary">{event.tag}</Badge>
                </div>
                <CardTitle className="text-base">{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">{event.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
