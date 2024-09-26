"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

type Event = {
  id: number;
  title: string;
  game: string;
  date: string;
  location: string;
};

const events: Event[] = [
  {
    id: 1,
    title: "ESL Pro League Season 17",
    game: "CS:GO",
    date: "2023-09-15",
    location: "Malta",
  },
  {
    id: 2,
    title: "The International 2023",
    game: "Dota 2",
    date: "2023-10-12",
    location: "Seattle, USA",
  },
  {
    id: 3,
    title: "League of Legends World Championship",
    game: "LoL",
    date: "2023-10-10",
    location: "South Korea",
  },
  {
    id: 4,
    title: "Valorant Champions Tour 2023",
    game: "Valorant",
    date: "2023-08-06",
    location: "Los Angeles, USA",
  },
];

export default function UpcomingEvents() {
  const [isMounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  return (
    <section className="py-12 bg-muted">
      {isMounted && (
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Upcoming E-Sports Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary">{event.game}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center mb-2">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
