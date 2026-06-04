import { Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const quickLinks = [
  { name: "Travel Itineraries", path: "/itineraries" },
  { name: "Blog", path: "/blog" },
  { name: "Travel Tips", path: "/tips" },
  { name: "Reels", path: "/reels" },
  { name: "Links", path: "/links" },
  { name: "Media Kit", path: "/media-kit" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col gap-4">
            <img src={logo} alt="The Two Pisceans Logo" className="h-8 w-20" />
            <p className="text-muted-foreground">
              Exploring the world and sharing our adventures, one destination at a time.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-card-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary smooth-transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-card-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/thetwopisceans"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 smooth-transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@thetwopisceans.com"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 smooth-transition"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The Two Pisceans. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
