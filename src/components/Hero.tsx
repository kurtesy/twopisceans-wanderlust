import heroImage from "@/assets/hero-beach.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster={heroImage}
      >
        <source src="/video/intro.mp4" type="video/mp4" />
        {/* Fallback to image if video doesn't load */}
      </video>
      
      {/* Fallback background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="absolute inset-0 gradient-hero-overlay" />
      
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            The Two Pisceans
          </h1>
          <p className="mb-8 text-xl text-white/90 md:text-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Exploring the world, one adventure at a time. Join us on our journey through breathtaking destinations, cultural discoveries, and unforgettable experiences.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Link to="/itineraries">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 smooth-transition shadow-lg"
              >
                Explore Itineraries
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/blog">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm smooth-transition"
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
