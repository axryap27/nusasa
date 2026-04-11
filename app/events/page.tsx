import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const upcoming = [
  {
    id: 1,
    date: "April 18, 2026",
    title: "Holi",
    description:
      "Fill your Saturday with color and fun, celebrate with us on the Lakefill",
    location: "Lakefill",
    tag: "Cultural",
  },
  {
    id: 2,
    date: "April 18, 2026",
    title: "Holi AP",
    description:
      "Keep the fun going with a chicago after on the rooftops of Azul.",
    location: "Azul Rooftop",
    tag: "Social",
  },

];

const past = [
  {
    id: 3,
    date: "Feb 27, 2026",
    title: "Mock Shaadi",
    description:
      "Join us in wedding two .",
    location: "Guild Hall",
    tag: "Social",
  },
  {
    id: 4,
    date: "Feb 27, 2026",
    title: "Mock Shaadi AP",
    description:
      "Come join us in Chicago to celebrate the newly-wedded!",
    location: "Hubbard In, Chicago",
    tag: "Social",
  },
  {
    id: 5,
    date: "Feb 7, 2026",
    title: "SASA Show",
    description: "Our annual showcase featuring dance, music, and cultural performances by the South Asian community of Northwestern",
    location: "Cahn Auditorium",
    tag: "Cultural",
  },
];

function EventCard({ event, muted = false }: { event: typeof upcoming[0]; muted?: boolean }) {
  return (
    <Card className={muted ? "opacity-60" : ""}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2 mb-1">
          <span className="text-xs text-muted-foreground">{event.date}</span>
          <Badge variant="secondary">{event.tag}</Badge>
        </div>
        <CardTitle className="text-base">{event.title}</CardTitle>
        <CardDescription className="leading-relaxed">{event.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">{event.location}</p>
      </CardContent>
    </Card>
  );
}

export default function Events() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Events</h1>
        <p className="text-muted-foreground">
          Cultural events, social gatherings, and professional development.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Upcoming</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {upcoming.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </section>

      <Separator />

      <section>
        <h2 className="text-xl font-semibold mb-4 text-muted-foreground">Past Events</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {past.map((e) => (
            <EventCard key={e.id} event={e} muted />
          ))}
        </div>
      </section>
    </div>
  );
}
