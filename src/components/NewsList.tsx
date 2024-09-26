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

type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string;
  publishedAt: string;
  categories: string[];
};

const mockPosts: Post[] = [
  {
    id: 1,
    title: "The Rise of Mobile Esports: A New Frontier",
    slug: "rise-of-mobile-esports",
    excerpt:
      "Exploring the growing trend of competitive gaming on smartphones and tablets.",
    imageUrl:
      "https://images.unsplash.com/photo-1645109870868-e1b6f909e444?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishedAt: "2023-08-15",
    categories: ["Mobile Gaming", "Industry Trends"],
  },
  {
    id: 2,
    title: "Top 5 Strategies for Dominating in Battle Royale Games",
    slug: "top-5-battle-royale-strategies",
    excerpt:
      "Expert tips and tricks to help you secure more victories in popular battle royale titles.",
    imageUrl:
      "https://images.unsplash.com/photo-1623934199716-dc28818a6ec7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishedAt: "2023-08-10",
    categories: ["Strategy", "Battle Royale"],
  },
  {
    id: 3,
    title: "The Evolution of Esports Broadcasting",
    slug: "evolution-of-esports-broadcasting",
    excerpt:
      "How streaming platforms and production techniques have transformed the way we watch competitive gaming.",
    imageUrl:
      "https://images.unsplash.com/photo-1553492206-f609eddc33dd?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishedAt: "2023-08-05",
    categories: ["Broadcasting", "Industry"],
  },
  {
    id: 4,
    title: "Breaking Down the Prize Pools: Where the Big Money is in Esports",
    slug: "esports-prize-pools-breakdown",
    excerpt:
      "An analysis of the largest tournament prize pools and what they mean for the industry.",
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishedAt: "2023-07-30",
    categories: ["Finance", "Tournaments"],
  },
  {
    id: 5,
    title: "The Psychology of Esports: Mental Preparation for Pro Gamers",
    slug: "psychology-of-esports",
    excerpt:
      "Delving into the mental aspects of competitive gaming and how pro players prepare for high-stakes matches.",
    imageUrl:
      "https://images.unsplash.com/photo-1657664072470-99b02c2143f2?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishedAt: "2023-07-25",
    categories: ["Psychology", "Pro Gaming"],
  },
  {
    id: 6,
    title: "Emerging Esports Markets: Regions to Watch in 2023",
    slug: "emerging-esports-markets-2023",
    excerpt:
      "A look at the up-and-coming regions that are making waves in the global esports scene.",
    imageUrl:
      "https://images.unsplash.com/photo-1614680376739-414d95ff43df?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishedAt: "2023-07-20",
    categories: ["Global Esports", "Market Analysis"],
  },
];

export default function NewsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockPosts.map((post) => (
        <Card key={post.id} className="flex flex-col h-full">
          <CardHeader className="p-0">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent className="flex-grow p-4">
            <div className="mb-2">
              {post.categories.map((category, index) => (
                <Badge key={index} className="mr-2 mb-2">
                  {category}
                </Badge>
              ))}
            </div>
            <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
            <CardDescription className="text-sm mb-4">
              {post.excerpt}
            </CardDescription>
            <div className="text-sm text-muted-foreground">
              {new Date(post.publishedAt).toLocaleDateString()}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button asChild className="w-full">
              <Link href={`/news/${post.slug}`}>Read More</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
