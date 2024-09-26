import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { mockTeams } from "@/lib/mockData";

export async function generateStaticParams() {
  return mockTeams.map((team) => ({
    slug: team.slug,
  }));
}

export default function TeamProfile({ params }: { params: { slug: string } }) {
  const team = mockTeams.find((t) => t.slug === params.slug);

  if (!team) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
        <Image
          src={team.logoUrl}
          alt={`${team.name} logo`}
          width={200}
          height={200}
          className="rounded-full mb-4 md:mb-0 md:mr-8"
        />
        <div>
          <h1 className="text-4xl font-bold mb-2">{team.name}</h1>
          <Badge className="mb-4">{team.primaryGame}</Badge>
          <p className="text-lg mb-4">{team.description}</p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Key Achievements</h2>
        <ul className="list-disc list-inside space-y-2">
          {team.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
      {/* In a real scenario, we would have more detailed information here */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Current Roster</h2>
        <p>
          Information about the current team roster would be displayed here.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Performances</h2>
        <p>
          Details about recent tournament performances and results would be
          shown in this section.
        </p>
      </div>
    </div>
  );
}
