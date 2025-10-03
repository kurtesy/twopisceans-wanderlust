import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import mountainsImg from "@/assets/destination-mountains.jpg";
import cityImg from "@/assets/destination-city.jpg";
import islandImg from "@/assets/destination-island.jpg";
import heroImg from "@/assets/hero-beach.jpg";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Items Every Traveler Needs",
    excerpt: "After years of exploring the world, we've narrowed down our packing list to these absolute essentials. From versatile clothing to tech gadgets, these items have saved us countless times on the road.",
    image: heroImg,
    category: "Travel Tips",
    date: "March 15, 2025",
    readTime: "8 min read",
    featured: true
  },
  {
    id: 2,
    title: "Our Unforgettable Week in the Swiss Alps",
    excerpt: "From sunrise hikes to cozy mountain huts, our alpine adventure exceeded every expectation. Discover the hidden trails and local secrets that made this trip truly special.",
    image: mountainsImg,
    category: "Destination Guide",
    date: "March 10, 2025",
    readTime: "12 min read",
    featured: true
  },
  {
    id: 3,
    title: "A Food Lover's Guide to Prague and Vienna",
    excerpt: "Exploring Central Europe through its incredible culinary scene. From traditional Czech goulash to Viennese pastries, here are the must-try dishes and best restaurants.",
    image: cityImg,
    category: "Food & Culture",
    date: "March 5, 2025",
    readTime: "10 min read",
    featured: false
  },
  {
    id: 4,
    title: "Sustainable Travel: How to Explore Responsibly",
    excerpt: "Our guide to reducing your environmental impact while traveling. Learn practical tips for eco-friendly accommodation, transportation, and supporting local communities.",
    image: islandImg,
    category: "Sustainable Travel",
    date: "February 28, 2025",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 5,
    title: "Photography Tips for Capturing Perfect Travel Moments",
    excerpt: "From golden hour lighting to composition techniques, learn how we capture stunning travel photos with just a smartphone and basic camera gear.",
    image: heroImg,
    category: "Photography",
    date: "February 20, 2025",
    readTime: "9 min read",
    featured: false
  },
  {
    id: 6,
    title: "Budget Travel: Luxury Experiences Without Breaking the Bank",
    excerpt: "Discover our secrets for experiencing high-end travel on a budget. From airline hacks to free activities that feel priceless.",
    image: mountainsImg,
    category: "Budget Travel",
    date: "February 15, 2025",
    readTime: "11 min read",
    featured: false
  }
];

const Blog = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Travel Stories & Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real experiences, practical tips, and inspiring tales from our adventures around the world.
            </p>
          </div>

          {/* Featured Posts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Featured Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card 
                  key={post.id} 
                  className="overflow-hidden group hover:shadow-2xl smooth-transition border-border cursor-pointer"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary smooth-transition">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground smooth-transition"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Posts */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-foreground">More Stories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card 
                  key={post.id} 
                  className="overflow-hidden group hover:shadow-2xl smooth-transition border-border cursor-pointer"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                    />
                    <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary smooth-transition">
                      {post.title}
                    </CardTitle>
                    <CardDescription>
                      {post.excerpt.substring(0, 100)}...
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="ghost" 
                      className="w-full text-primary hover:bg-primary/10 smooth-transition"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <Card className="mt-16 bg-gradient-ocean text-white border-0">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Never Miss an Adventure</h3>
              <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for weekly travel inspiration, tips, and exclusive itineraries delivered to your inbox.
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 smooth-transition"
              >
                Subscribe Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
