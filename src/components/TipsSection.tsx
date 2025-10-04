import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { tips } from "../data/tips";

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
              <Link to={`/tips/${tip.slug}`} key={index} className="group block">
                <Card
                  className="h-full group-hover:shadow-lg smooth-transition border-border group-hover:border-primary/50"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-earthy mb-4 group-hover:scale-110 smooth-transition">
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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
