import React from "react";
import { Metadata } from "next";
import NewsList from "@/components/NewsList";

export const metadata: Metadata = {
  title: "News | E-Sports Central",
  description: "Stay up-to-date with the latest E-Sports news and updates.",
};

export default function NewsPage() {
  return (
    <div className="pt-16">
      {" "}
      {/* Add padding-top to account for fixed Navbar */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">E-Sports News</h1>
        <NewsList />
      </div>
    </div>
  );
}
