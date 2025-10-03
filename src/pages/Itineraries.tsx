import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Clock, DollarSign } from "lucide-react";
import mountainsImg from "@/assets/destination-mountains.jpg";
import cityImg from "@/assets/destination-city.jpg";
import islandImg from "@/assets/destination-island.jpg";

const itineraries = [
  {
    id: 1,
    title: "Alpine Adventure: Swiss Alps Explorer",
    location: "Switzerland",
    duration: "7 Days",
    price: "$2,499",
    difficulty: "Moderate",
    season: "June - September",
    image: mountainsImg,
    description: "Experience the majestic Swiss Alps with pristine hiking trails, charming villages, and breathtaking mountain vistas.",
    highlights: [
      "Matterhorn base camp trek",
      "Traditional Swiss cheese making",
      "Cable car rides to mountain peaks",
      "Stay in authentic alpine chalets"
    ]
  },
  {
    id: 2,
    title: "Central European Culture Trail",
    location: "Prague & Vienna",
    duration: "10 Days",
    price: "$3,299",
    difficulty: "Easy",
    season: "Year-round",
    image: cityImg,
    description: "Immerse yourself in centuries of history, stunning architecture, and vibrant culture across two iconic European capitals.",
    highlights: [
      "Prague Castle and Charles Bridge",
      "Vienna Opera House performance",
      "Traditional beer halls and cafes",
      "UNESCO World Heritage sites"
    ]
  },
  {
    id: 3,
    title: "Tropical Island Paradise Escape",
    location: "Maldives",
    duration: "5 Days",
    price: "$4,999",
    difficulty: "Easy",
    season: "November - April",
    image: islandImg,
    description: "Discover crystal-clear waters, pristine white beaches, and luxurious overwater bungalows in this tropical paradise.",
    highlights: [
      "Snorkeling with manta rays",
      "Private beach dining experiences",
      "Overwater villa accommodation",
      "Sunset dolphin cruises"
    ]
  }
];

const Itineraries = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Our Travel Itineraries
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Carefully curated journeys designed to immerse you in the world's most captivating destinations. Each itinerary is crafted from our personal experiences.
            </p>
          </div>

          <div className="grid gap-12">
            {itineraries.map((itinerary) => (
              <Card key={itinerary.id} className="overflow-hidden border-border hover:shadow-2xl smooth-transition">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src={itinerary.image} 
                      alt={itinerary.title}
                      className="w-full h-full object-cover hover:scale-110 smooth-transition"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {itinerary.difficulty}
                    </Badge>
                  </div>
                  
                  <div className="p-8">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center gap-2 mb-2 text-primary">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm font-medium">{itinerary.location}</span>
                      </div>
                      <CardTitle className="text-3xl mb-2">{itinerary.title}</CardTitle>
                      <CardDescription className="text-base">{itinerary.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{itinerary.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <DollarSign className="h-4 w-4" />
                          <span className="text-sm">{itinerary.price}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">Best season: {itinerary.season}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-foreground">Trip Highlights:</h4>
                        <ul className="space-y-2">
                          {itinerary.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 smooth-transition"
                      >
                        View Full Itinerary
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Itineraries;
