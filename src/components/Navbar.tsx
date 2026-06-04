import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Itineraries", path: "/itineraries" },
    { name: "Blog", path: "/blog" },
    { name: "Travel Tips", path: "/tips" },
    { name: "Reels", path: "/reels" },
    { name: "Map", path: "/map" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Media Kit", path: "/media-kit" },
    { name: "Links", path: "/links" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="The Two Pisceans Logo" className="h-8 w-auto group-hover:opacity-80 smooth-transition" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.slice(0, 6).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-foreground hover:text-primary smooth-transition"
              >
                {link.name}
              </Link>
            ))}
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

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary smooth-transition"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button
                    variant="default"
                    className="mt-4"
                    onClick={() => {
                      window.open('https://www.instagram.com/thetwopisceans', '_blank');
                      setIsOpen(false);
                    }}
                  >
                    <Instagram className="h-4 w-4 mr-2" />
                    Follow on Instagram
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
