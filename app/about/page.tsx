import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const values = [
  {
    title: "Community",
    description:
      "We create spaces where South Asian students feel seen, supported, and at home — whether they grew up immersed in the culture or are connecting with it for the first time.",
  },
  {
    title: "Culture",
    description:
      "From classical dance to Bollywood, from Diwali to Eid, we celebrate the full diversity and richness of South Asian traditions and identities.",
  },
  {
    title: "Leadership",
    description:
      "We empower students to lead, organize, and grow — preparing them to be advocates for their communities both on campus and beyond.",
  },
];

const board = [
  { name: "Priya Sharma", role: "President", initials: "PS" },
  { name: "Arjun Mehta", role: "Vice President", initials: "AM" },
  { name: "Sana Hussain", role: "Treasurer", initials: "SH" },
  { name: "Rohan Patel", role: "Events Chair", initials: "RP" },
  { name: "Kavya Nair", role: "Marketing Chair", initials: "KN" },
  { name: "Dev Kapoor", role: "Cultural Chair", initials: "DK" },
];

export default function About() {
  return (
    <div className="space-y-14">
      {/* Mission */}
      <section>
        <h1 className="text-4xl font-bold tracking-tight mb-6">About NUSASA</h1>
        <div className="max-w-2xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            The Northwestern University South Asian Student Alliance (NUSASA) is a
            cultural and community organization dedicated to fostering a welcoming
            environment for South Asian students and allies at Northwestern.
          </p>
          <p>
            Founded by students who wanted a stronger sense of South Asian community
            on campus, NUSASA has grown into one of Northwestern&apos;s most active
            cultural organizations — hosting dozens of events each year ranging from
            large-scale cultural showcases to intimate community dinners.
          </p>
        </div>
      </section>

      <Separator />

      {/* Values */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Our Values</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {values.map((v) => (
            <Card key={v.title}>
              <CardHeader>
                <CardTitle className="text-base">{v.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Exec board */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Executive Board</h2>
        <p className="text-muted-foreground mb-8">Meet the team running NUSASA this year.</p>
        <div className="grid gap-6 sm:grid-cols-3">
          {board.map((member) => (
            <div key={member.name} className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">{member.name}</p>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
