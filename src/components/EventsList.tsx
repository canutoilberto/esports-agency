import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

type Event = {
  id: number;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
  location: string;
  game: string;
  prizePool: string;
};

const mockEvents: Event[] = [
  {
    id: 1,
    name: "The International 2023",
    slug: "the-international-2023",
    description:
      "The biggest annual Dota 2 tournament, featuring the world's top teams.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    startDate: "2023-10-12",
    endDate: "2023-10-29",
    location: "Seattle, USA",
    game: "Dota 2",
    prizePool: "$40,000,000+",
  },
  {
    id: 2,
    name: "League of Legends World Championship 2023",
    slug: "lol-worlds-2023",
    description:
      "The pinnacle of League of Legends esports, crowning the world's best team.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    startDate: "2023-10-10",
    endDate: "2023-11-19",
    location: "South Korea",
    game: "League of Legends",
    prizePool: "$2,225,000+",
  },
  {
    id: 3,
    name: "PGL CS:GO Major Copenhagen 2024",
    slug: "pgl-csgo-major-copenhagen-2024",
    description:
      "One of the most prestigious Counter-Strike: Global Offensive tournaments.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    startDate: "2024-03-17",
    endDate: "2024-03-31",
    location: "Copenhagen, Denmark",
    game: "CS:GO",
    prizePool: "$1,000,000",
  },
  {
    id: 4,
    name: "Valorant Champions Tour 2023",
    slug: "valorant-champions-tour-2023",
    description:
      "The ultimate Valorant competition, featuring the best teams from around the world.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    startDate: "2023-08-06",
    endDate: "2023-08-26",
    location: "Los Angeles, USA",
    game: "Valorant",
    prizePool: "$1,000,000+",
  },
  {
    id: 5,
    name: "ESL Pro League Season 17",
    slug: "esl-pro-league-season-17",
    description: "Top-tier CS:GO action featuring the world's best teams.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    startDate: "2023-02-22",
    endDate: "2023-03-26",
    location: "Malta",
    game: "CS:GO",
    prizePool: "$850,000",
  },
  {
    id: 6,
    name: "Evo 2023",
    slug: "evo-2023",
    description:
      "The largest and longest-running fighting game tournament in the world.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    startDate: "2023-08-04",
    endDate: "2023-08-06",
    location: "Las Vegas, USA",
    game: "Multiple Fighting Games",
    prizePool: "Varies by game",
  },
];

export default function EventsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockEvents.map((event) => (
        <Card key={event.id} className="flex flex-col h-full">
          <CardHeader className="p-0">
            <Image
              src={event.imageUrl}
              alt={event.name}
              width={400}
              height={200}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent className="flex-grow p-4">
            <Badge className="mb-2">{event.game}</Badge>
            <CardTitle className="text-xl mb-2">{event.name}</CardTitle>
            <CardDescription className="text-sm mb-4">
              {event.description}
            </CardDescription>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <CalendarDays className="mr-2 h-4 w-4" />
              <span>
                {new Date(event.startDate).toLocaleDateString()} -{" "}
                {new Date(event.endDate).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-2 h-4 w-4" />
              <span>{event.location}</span>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <div className="w-full flex justify-between items-center">
              <span className="font-bold">Prize Pool: {event.prizePool}</span>
              <Button asChild>
                <Link href={`/events/${event.slug}`}>View Details</Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
