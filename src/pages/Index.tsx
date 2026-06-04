import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DestinationsSection } from "@/components/DestinationsSection";
import { BlogSection } from "@/components/BlogSection";
import { TipsSection } from "@/components/TipsSection";
import { InstagramCTA } from "@/components/InstagramCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DestinationsSection />
      <BlogSection />
      <TipsSection />
      <InstagramCTA />
      <Footer />
    </div>
  );
};

export default Index;
