import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import mountainsImg from "@/assets/destination-mountains.jpg";
import cityImg from "@/assets/destination-city.jpg";
import islandImg from "@/assets/destination-island.jpg";

export interface BlogPostContent {
  introduction: string;
  sections: {
    title: string;
    content: string;
  }[];
  conclusion: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  content?: BlogPostContent;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "10-essential-items-every-traveler-needs",
    title: "10 Essential Items Every Traveler Needs",
    excerpt: "After years of exploring the world, we've narrowed down our packing list to these absolute essentials. From versatile clothing to tech gadgets, these items have saved us countless times on the road.",
    image: hero1,
    category: "Travel Tips",
    date: "March 15, 2025",
    readTime: "8 min read",
    featured: true,
    content: {
      introduction: "Packing can be one of the most stressful parts of travel. Over the years, we've learned that less is often more, but there are some items you simply shouldn't leave home without. Here are our top 10 essentials that make every journey smoother.",
      sections: [
        {
          title: "1. Universal Power Adapter",
          content: "A high-quality universal adapter is non-negotiable. Look for one that includes multiple USB ports so you can charge your phone, camera, and laptop simultaneously, regardless of the country's plug type."
        },
        {
          title: "2. Noise-Canceling Headphones",
          content: "Whether it's a crying baby on a plane or a noisy hostel, noise-canceling headphones are a lifesaver. They help you create your own peaceful environment anywhere in the world."
        },
        {
          title: "3. Portable Power Bank",
          content: "In the age of digital maps and boarding passes, a dead phone can be a major problem. We always carry a 20,000mAh power bank to ensure we're never stranded without a charge."
        },
        {
          title: "4. Packing Cubes",
          content: "These are a game-changer for organization. They help you compress your clothes and keep your suitcase organized, making it much easier to find what you need without unpacking everything."
        },
        {
          title: "5. Reusable Water Bottle with Filter",
          content: "Stay hydrated and reduce plastic waste. A bottle with a built-in filter is especially useful in countries where tap water might not be safe to drink."
        },
        {
          title: "6. Quick-Dry Travel Towel",
          content: "Even if you're staying in nice hotels, a compact, quick-dry towel is great for beach days or unexpected stops. They take up minimal space and dry in a fraction of the time of a standard towel."
        },
        {
          title: "7. First Aid Kit",
          content: "Always carry a basic kit with bandages, antiseptic wipes, pain relievers, and any personal medications. It's better to have it and not need it than vice-versa."
        },
        {
          title: "8. Versatile Scarf or Sarong",
          content: "This is one of the most versatile items you can pack. It can be a blanket on a cold plane, a beach towel, a head covering for religious sites, or even an emergency bag."
        },
        {
          title: "9. Solid Toiletries",
          content: "Solid shampoo, conditioner, and soap bars are great for avoiding liquid restrictions at airport security and they won't leak in your bag."
        },
        {
          title: "10. Digital & Physical Document Backups",
          content: "Keep copies of your passport, insurance, and travel bookings. We use an encrypted cloud service for digital copies and keep physical copies hidden in a separate part of our luggage."
        }
      ],
      conclusion: "Packing these essentials will give you peace of mind and help you handle most travel challenges with ease. Remember, the best thing you can pack is an open mind and a sense of adventure! Happy travels!"
    }
  },
  {
    id: 2,
    slug: "best-photography-gadgets-we-use",
    title: "Best Photography Gadgets We Use",
    excerpt: "Capturing the world requires the right gear. From action cameras to professional DSLRs, here are the essential gadgets we use to document our travels.",
    image: hero2,
    category: "Photography",
    date: "March 10, 2025",
    readTime: "12 min read",
    featured: true,
    content: {
      introduction: "One of the questions we get asked most often is, 'What camera do you use?' The truth is, we use a variety of tools depending on the situation. Here is a deep dive into our current photography and videography kit.",
      sections: [
        {
          title: "GoPro Hero 11",
          content: "Our go-to for action shots, water adventures, and stabilization. The GoPro 11's HyperSmooth technology allows us to capture cinematic footage even while hiking or swimming, and its rugged design means we never worry about the elements."
        },
        {
          title: "Canon EOS 2200D",
          content: "When we want that professional DSLR look with shallow depth of field and high resolution, we reach for our Canon. It's our primary tool for landscape photography and those iconic 'hero' shots you see on our blog."
        },
        {
          title: "iPhone 17",
          content: "The best camera is the one you have with you. The iPhone 17's computational photography is incredible, especially for quick social media updates and high-quality 4K video on the fly. Its low-light performance has become a staple for our evening explorations."
        },
        {
          title: "Insta360 Flow Gimbal",
          content: "To take our smartphone videography to the next level, we use the Insta360 Flow. This AI-powered gimbal provides rock-steady stabilization and smart tracking, allowing us to film ourselves easily while moving through crowded markets or scenic trails."
        }
      ],
      conclusion: "While gear is important, remember that the most important part of photography is your unique perspective. These tools simply help us bring our vision to life. What's in your camera bag?"
    }
  },
  {
    id: 3,
    slug: "food-lovers-guide-prague-vienna",
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
    slug: "sustainable-travel-guide",
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
    slug: "travel-photography-tips",
    title: "Photography Tips for Capturing Perfect Travel Moments",
    excerpt: "From golden hour lighting to composition techniques, learn how we capture stunning travel photos with just a smartphone and basic camera gear.",
    image: mountainsImg,
    category: "Photography",
    date: "February 20, 2025",
    readTime: "9 min read",
    featured: false
  },
  {
    id: 6,
    slug: "budget-travel-luxury-experiences",
    title: "Budget Travel: Luxury Experiences Without Breaking the Bank",
    excerpt: "Discover our secrets for experiencing high-end travel on a budget. From airline hacks to free activities that feel priceless.",
    image: hero3,
    category: "Budget Travel",
    date: "February 15, 2025",
    readTime: "11 min read",
    featured: false
  }
];
