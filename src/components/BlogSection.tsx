import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "10 Essential Tips for Solo Travel in Southeast Asia",
    excerpt: "Discover our top recommendations for safely navigating and enjoying your solo journey through Thailand, Vietnam, and Cambodia.",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "Travel Tips"
  },
  {
    title: "Hidden Gems of the Mediterranean",
    excerpt: "Explore lesser-known coastal towns and villages that offer authentic experiences away from tourist crowds.",
    date: "March 10, 2025",
    readTime: "6 min read",
    category: "Destinations"
  },
  {
    title: "Sustainable Travel: How We Minimize Our Footprint",
    excerpt: "Learn about our approach to responsible tourism and practical ways to travel more sustainably.",
    date: "March 5, 2025",
    readTime: "7 min read",
    category: "Travel Tips"
  }
];

export const BlogSection = () => {
  return (
    <section className="py-20 px-4 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Latest Travel Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tips, stories, and insights from our adventures around the globe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl smooth-transition bg-card border-border"
            >
              <CardContent className="p-6">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary smooth-transition">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto text-primary hover:text-primary/80 smooth-transition"
                >
                  Read More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 smooth-transition" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground smooth-transition"
          >
            View All Blog Posts
          </Button>
        </div>
      </div>
    </section>
  );
};
