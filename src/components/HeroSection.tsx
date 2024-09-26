import React from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
      >
        <source
          src="https://videos.pexels.com/video-files/7849228/7849228-uhd_2732_1440_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to E-Sports Central
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
          Your ultimate destination for the latest news, team updates, and event
          coverage in the world of competitive gaming.
        </p>
        <Button size="lg" className="text-lg px-8 py-4">
          Explore Now
        </Button>
      </div>
    </div>
  );
}
