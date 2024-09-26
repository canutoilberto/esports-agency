import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { mockPosts } from "@/lib/mockData";

export async function generateStaticParams() {
  return mockPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function NewsPost({ params }: { params: { slug: string } }) {
  const post = mockPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={1200}
        height={600}
        className="w-full h-[60vh] object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center mb-6">
        <p className="text-muted-foreground mr-4">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        <div className="space-x-2">
          {post.categories.map((category, index) => (
            <Badge key={index} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <p>{post.excerpt}</p>
        {/* In a real scenario, we would have the full content here */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </article>
  );
}
