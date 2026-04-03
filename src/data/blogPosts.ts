import heroImg from "@/assets/hero-beach.jpg";
import mountainsImg from "@/assets/destination-mountains.jpg";
import cityImg from "@/assets/destination-city.jpg";
import islandImg from "@/assets/destination-island.jpg";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
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
