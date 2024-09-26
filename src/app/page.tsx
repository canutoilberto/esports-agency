import HeroSection from "@/components/HeroSection";
import LatestPosts from "@/components/LatestPosts";
import Newsletter from "@/components/Newsletter";
import UpcomingEvents from "@/components/UpcomingEvents";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <UpcomingEvents />
      <LatestPosts />
      <Newsletter />
    </main>
  );
}
