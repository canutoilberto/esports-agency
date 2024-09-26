import React from "react";
import { Metadata } from "next";
import EventsList from "@/components/EventsList";

export const metadata: Metadata = {
  title: "Events | E-Sports Central",
  description:
    "Stay updated with upcoming and past E-Sports tournaments and events.",
};

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">E-Sports Events</h1>
      <EventsList />
    </div>
  );
}
