import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Trophy } from "lucide-react";
import { mockEvents } from "@/lib/mockData";

export async function generateStaticParams() {
  return mockEvents.map((event) => ({
    slug: event.slug,
  }));
}

export default function EventDetails({ params }: { params: { slug: string } }) {
  const event = mockEvents.find((e) => e.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Image
        src={event.imageUrl}
        alt={event.name}
        width={1200}
        height={600}
        className="w-full h-[60vh] object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">{event.name}</h1>
      <Badge className="mb-4">{event.game}</Badge>
      <p className="text-lg mb-6">{event.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="flex items-center">
          <CalendarDays className="mr-2 h-5 w-5" />
          <span>
            {new Date(event.startDate).toLocaleDateString()} -{" "}
            {new Date(event.endDate).toLocaleDateString()}
          </span>
        </div>
        <div className="flex items-center">
          <MapPin className="mr-2 h-5 w-5" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center">
          <Trophy className="mr-2 h-5 w-5" />
          <span>Prize Pool: {event.prizePool}</span>
        </div>
      </div>
      {/* In a real scenario, we would have more detailed information here */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Participating Teams</h2>
        <p>
          Information about the teams participating in this event would be
          displayed here.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Schedule</h2>
        <p>
          A detailed schedule of matches and activities during the event would
          be shown in this section.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">How to Watch</h2>
        <p>
          Information about streaming platforms and channels to watch the event
          would be provided here.
        </p>
      </div>
    </div>
  );
}
