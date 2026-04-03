import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

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
