import { Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">The Two Pisceans</h3>
            <p className="text-muted-foreground">
              Exploring the world and sharing our adventures, one destination at a time.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-card-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary smooth-transition">
                  Travel Itineraries
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary smooth-transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary smooth-transition">
                  Travel Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary smooth-transition">
                  About Us
                </a>
              </li>
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
