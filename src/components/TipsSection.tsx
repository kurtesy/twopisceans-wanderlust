import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Map, Wallet, Camera, Backpack, Globe } from "lucide-react";

const tips = [
  {
    icon: Map,
    title: "Plan Flexibly",
    description: "Leave room for spontaneity while having a rough itinerary"
  },
  {
    icon: Wallet,
    title: "Budget Smart",
    description: "Use local transportation and eat where locals eat"
  },
  {
    icon: Camera,
    title: "Capture Moments",
    description: "Balance photography with living in the present"
  },
  {
    icon: Backpack,
    title: "Pack Light",
    description: "Bring versatile clothing and essential items only"
  },
  {
    icon: Globe,
    title: "Respect Cultures",
    description: "Learn basic phrases and local customs before visiting"
  },
  {
    icon: Lightbulb,
    title: "Stay Connected",
    description: "Get local SIM cards and download offline maps"
  }
];

export const TipsSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Travel Tips & Tricks
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert advice to make your journeys smoother and more memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-lg smooth-transition border-border hover:border-primary/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-ocean mb-4 group-hover:scale-110 smooth-transition">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {tip.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
