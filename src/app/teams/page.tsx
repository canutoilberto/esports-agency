import React from "react";
import { Metadata } from "next";
import TeamsList from "@/components/TeamsList";

export const metadata: Metadata = {
  title: "Teams | E-Sports Central",
  description: "Explore top E-Sports teams and their achievements.",
};

export default function TeamsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">E-Sports Teams</h1>
      <TeamsList />
    </div>
  );
}
