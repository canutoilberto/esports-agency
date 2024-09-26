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

type Team = {
  id: number;
  name: string;
  slug: string;
  description: string;
  logoUrl: string;
  primaryGame: string;
  achievements: string[];
};

const mockTeams: Team[] = [
  {
    id: 1,
    name: "Cloud9",
    slug: "cloud9",
    description:
      "One of the most recognizable brands in esports, competing across multiple titles.",
    logoUrl: "/placeholder.svg?height=200&width=200",
    primaryGame: "Multiple",
    achievements: [
      "LoL World Championship Quarterfinalists",
      "CS:GO Major Champions",
    ],
  },
  {
    id: 2,
    name: "Team Liquid",
    slug: "team-liquid",
    description:
      "A multi-regional esports powerhouse with top teams in various games.",
    logoUrl: "/placeholder.svg?height=200&width=200",
    primaryGame: "Multiple",
    achievements: [
      "The International 2017 Champions",
      "Intel Grand Slam Season 2 Winners",
    ],
  },
  {
    id: 3,
    name: "Fnatic",
    slug: "fnatic",
    description:
      "One of the oldest and most successful esports organizations in the world.",
    logoUrl: "/placeholder.svg?height=200&width=200",
    primaryGame: "Multiple",
    achievements: [
      "LoL World Championship 2011 Winners",
      "3x CS:GO Major Champions",
    ],
  },
  {
    id: 4,
    name: "T1",
    slug: "t1",
    description:
      "Legendary Korean esports organization, known for their dominance in League of Legends.",
    logoUrl: "/placeholder.svg?height=200&width=200",
    primaryGame: "League of Legends",
    achievements: ["3x LoL World Championship Winners", "2x MSI Champions"],
  },
  {
    id: 5,
    name: "OG",
    slug: "og",
    description:
      "Dota 2 team that made history by winning The International back-to-back.",
    logoUrl: "/placeholder.svg?height=200&width=200",
    primaryGame: "Dota 2",
    achievements: ["2x The International Champions", "4x Dota 2 Major Winners"],
  },
  {
    id: 6,
    name: "FaZe Clan",
    slug: "faze-clan",
    description:
      "Popular organization known for content creation and competitive gaming.",
    logoUrl: "/placeholder.svg?height=200&width=200",
    primaryGame: "Multiple",
    achievements: ["CS:GO Major Champions", "Call of Duty League Champions"],
  },
];

export default function TeamsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockTeams.map((team) => (
        <Card key={team.id} className="flex flex-col h-full">
          <CardHeader>
            <div className="w-24 h-24 mx-auto mb-4">
              <Image
                src={team.logoUrl}
                alt={`${team.name} logo`}
                width={96}
                height={96}
                className="rounded-full"
              />
            </div>
            <CardTitle className="text-2xl text-center">{team.name}</CardTitle>
            <Badge className="mx-auto">{team.primaryGame}</Badge>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="text-center mb-4">
              {team.description}
            </CardDescription>
            <div className="space-y-2">
              <h4 className="font-semibold">Key Achievements:</h4>
              <ul className="list-disc list-inside">
                {team.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href={`/teams/${team.slug}`}>View Team Profile</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
