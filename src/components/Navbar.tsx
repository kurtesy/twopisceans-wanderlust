import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="The Two Pisceans Logo" className="h-8 w-auto group-hover:opacity-80 smooth-transition" />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary smooth-transition">
              Home
            </Link>
            <Link to="/itineraries" className="text-foreground hover:text-primary smooth-transition">
              Itineraries
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary smooth-transition">
              Blog
            </Link>
            <Link to="/tips" className="text-foreground hover:text-primary smooth-transition">
              Travel Tips
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://www.instagram.com/thetwopisceans', '_blank')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground smooth-transition"
            >
              <Instagram className="h-4 w-4 mr-2" />
              Follow
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
