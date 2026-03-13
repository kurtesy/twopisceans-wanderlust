import cityImg from "@/assets/destination-city.jpg";
import {
    Plane,
    Bed,
    Camera,
    Landmark,
    Ship,
    Building2,
    Mountain,
    Palmtree,
    ShoppingBag,
    Flower2,
    Globe,
    Waves,
} from "lucide-react";

export const itineraries = [
    {
        id: 1,
        slug: "dubai-desert-city-fusion",
        title: "Dubai Desert & City Fusion",
        location: "Dubai, UAE",
        duration: "8 Days",
        price: "$2,999",
        difficulty: "Easy",
        season: "November - March",
        image: cityImg,
        description: "From soaring skyscrapers to vast deserts, experience the dynamic contrasts of Dubai with thrilling activities and cultural exploration.",
        highlights: [
            "Views from Burj Khalifa & Sky Observatory",
            "Thrilling Jet Ski on Kite Beach",
            "Arabian Desert Safari adventure",
            "Exploring the Museum of the Future",
            "Yacht tour in Dubai Marina",
            "A day at Atlantis and Global Village"
        ],
        dailyPlan: [
            {
                day: "Day 1: Arrival in Dubai",
                date: "November 20, 2025",
                activities: [
                    { time: "21:25", description: "Depart from Berlin", icon: Plane },
                ],
            },
            {
                day: "Day 2: Skyscrapers & Sea",
                date: "November 21, 2025",
                activities: [
                    { time: "07:00", description: "Arrive in Dubai and check into Gevora Hotel", icon: Bed },
                    { time: "13:00", description: "Sky Observatory for panoramic city views", icon: Landmark },
                    { time: "16:45", description: "Jet Ski adventure at Kite Beach", icon: Waves },
                ],
            },
            {
                day: "Day 3: Aquatic Adventures",
                date: "November 22, 2025",
                activities: [
                    { time: "07:30", description: "Full day at Atlantis, The Palm", icon: Palmtree },
                ],
            },
            {
                day: "Day 4: Iconic Landmarks",
                date: "November 23, 2025",
                activities: [
                    { time: "Morning", description: "Check into City Premier Hotel", icon: Bed },
                    { time: "14:30", description: "Photoshoot at a scenic location", icon: Camera },
                ],
            },
            {
                day: "Day 5: Modern Marvels",
                date: "November 24, 2025",
                activities: [
                    { time: "08:30", description: "Visit the 125th floor of Burj Khalifa", icon: Building2 },
                    { time: "12:30", description: "Explore the Dubai Mall", icon: ShoppingBag },
                    { time: "16:30", description: "Experience the Dubai Frame", icon: Landmark },
                    { time: "20:00", description: "Evening Marina Yacht tour", icon: Ship },
                ],
            },
            {
                day: "Day 6: Desert & Gold",
                date: "November 25, 2025",
                activities: [
                    { time: "Morning", description: "Wander through the Gold Souk", icon: ShoppingBag },
                    { time: "Afternoon", description: "Thrilling Arabian Desert Safari", icon: Mountain },
                ],
            },
            {
                day: "Day 7: Culture & Wonders",
                date: "November 26, 2025",
                activities: [
                    { time: "Morning", description: "Visit the Museum of the Future", icon: Building2 },
                    { time: "Afternoon", description: "Stroll through the Miracle Garden", icon: Flower2 },
                    { time: "Evening", description: "Explore Global Village", icon: Globe },
                ],
            },
        ],
    },
];