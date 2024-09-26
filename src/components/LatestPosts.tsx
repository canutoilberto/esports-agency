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
  excerpt: string;
  category: string;
  date: string;
  author: string;
  imageUrl: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: "The Rise of Mobile Esports: A New Frontier",
    excerpt:
      "Exploring the growing trend of competitive gaming on smartphones and tablets.",
    category: "Mobile Gaming",
    date: "2023-08-15",
    author: "Jane Doe",
    imageUrl:
      "https://images.pexels.com/photos/2883029/pexels-photo-2883029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Top 5 Strategies for Dominating in Battle Royale Games",
    excerpt:
      "Expert tips and tricks to help you secure more victories in popular battle royale titles.",
    category: "Strategy",
    date: "2023-08-10",
    author: "John Smith",
    imageUrl:
      "https://images.unsplash.com/photo-1615680022648-2db11101c73a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "The Evolution of Esports Broadcasting",
    excerpt:
      "How streaming platforms and production techniques have transformed the way we watch competitive gaming.",
    category: "Industry",
    date: "2023-08-05",
    author: "Alex Johnson",
    imageUrl:
      "https://images.pexels.com/photos/2883029/pexels-photo-2883029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Breaking Down the Prize Pools: Where the Big Money is in Esports",
    excerpt:
      "An analysis of the largest tournament prize pools and what they mean for the industry.",
    category: "Finance",
    date: "2023-07-30",
    author: "Sarah Williams",
    imageUrl:
      "https://images.unsplash.com/photo-1615680022648-2db11101c73a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function LatestPosts() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
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
                <Badge className="mb-2">{post.category}</Badge>
                <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                <CardDescription className="text-sm mb-4">
                  {post.excerpt}
                </CardDescription>
                <div className="text-sm text-muted-foreground">
                  <span>{post.date}</span> • <span>{post.author}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button asChild className="w-full">
                  <Link href={`/post/${post.id}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
