import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import mountainsImg from "@/assets/destination-mountains.jpg";
import cityImg from "@/assets/destination-city.jpg";
import islandImg from "@/assets/destination-island.jpg";

const destinations = [
  {
    title: "Mountain Adventures",
    location: "Swiss & Italian Alps",
    description: "Experience breathtaking peaks, pristine hiking trails, and charming alpine villages.",
    image: mountainsImg,
    duration: "7 Days"
  },
  {
    title: "Central Europe",
    location: "Austria & Germany",
    description: "Immerse yourself in history, culture, and stunning architecture across Central Europe.",
    image: cityImg,
    duration: "10 Days"
  },
  {
    title: "Tropical Paradise",
    location: "Seychelles",
    description: "Discover crystal-clear waters, white sand beaches, and unforgettable sunsets.",
    image: islandImg,
    duration: "7 Days"
  }
];

export const DestinationsSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Carefully curated travel itineraries to inspire your next adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-2xl smooth-transition border-border"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {destination.duration}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">{destination.location}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-card-foreground">
                  {destination.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {destination.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground smooth-transition"
                >
                  View Itinerary
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 smooth-transition"
          >
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};
