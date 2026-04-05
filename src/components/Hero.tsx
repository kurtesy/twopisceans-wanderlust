import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const images = [hero1, hero2, hero3];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Collage Background */}
      <div className="absolute inset-0 flex flex-row">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative flex-1 h-full overflow-hidden border-r last:border-r-0 border-black/10"
          >
            <img
              src={image}
              alt={`Travel moment ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl drop-shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            The Two Pisceans
          </h1>
          <p className="mb-8 text-xl text-white/90 md:text-2xl drop-shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Exploring the world, one adventure at a time. Join us on our journey through breathtaking destinations, cultural discoveries, and unforgettable experiences.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Link to="/itineraries">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 smooth-transition shadow-lg w-full"
              >
                Explore Itineraries
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/blog">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm smooth-transition w-full"
              >
                Read Our Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-8 rounded-full border-2 border-white/50 p-2">
          <div className="h-2 w-2 rounded-full bg-white/70 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
