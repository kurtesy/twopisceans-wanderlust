import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

export const InstagramCTA = () => {
  return (
    <section className="py-20 px-4 gradient-earthy">
      <div className="max-w-4xl mx-auto text-center">
        <Instagram className="h-16 w-16 text-white mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Follow Our Journey
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join our community on Instagram for daily travel inspiration, behind-the-scenes moments, and real-time updates from our adventures around the world.
        </p>
        <Button
          size="lg"
          className="bg-white text-primary hover:bg-white/90 smooth-transition shadow-xl"
          onClick={() => window.open('https://www.instagram.com/thetwopisceans', '_blank')}
        >
          <Instagram className="mr-2 h-5 w-5" />
          @thetwopisceans
        </Button>
      </div>
    </section>
  );
};
