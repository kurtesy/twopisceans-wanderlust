import { Lightbulb, Map, Wallet, Camera, Backpack, Globe, LucideIcon } from "lucide-react";

export interface Tip {
    icon: LucideIcon;
    title: string;
    description: string;
    slug: string;
    content: {
        introduction: string;
        points: { title: string; description: string }[];
        conclusion: string;
    };
}

export const tips: Tip[] = [
    {
        icon: Map,
        title: "Plan Flexibly",
        description: "Leave room for spontaneity while having a rough itinerary",
        slug: "plan-flexibly",
        content: {
            introduction: "The best travel memories often come from unexpected moments. While a good plan is a great starting point, the magic happens when you allow for detours. Here's how to strike the perfect balance between planning and spontaneity.",
            points: [
                { title: "The 3-Day Rule", description: "For any destination, plan the first day, have a loose idea for the second, and leave the third completely open. This gives you structure but also freedom." },
                { title: "Book Only the Essentials", description: "Secure your first night's accommodation and any must-see tickets in advance. Leave the rest open to discover local favorites." },
                { title: "Embrace 'Getting Lost'", description: "Wander down that interesting-looking alley. You might discover a hidden cafe, a local market, or a piece of street art not in any guidebook." },
            ],
            conclusion: "Flexible planning isn't about having no plan; it's about creating a framework that invites adventure in. Stay open, say 'yes' more, and watch your trip transform."
        }
    },
    {
        icon: Wallet,
        title: "Budget Smart",
        description: "Use local transportation and eat where locals eat",
        slug: "budget-smart",
        content: {
            introduction: "Traveling doesn't have to break the bank. In fact, some of the most authentic experiences are also the most affordable. It's all about spending your money wisely to maximize your journey.",
            points: [
                { title: "Eat Like a Local", description: "Skip the tourist-trap restaurants. Follow the locals to street food stalls and small, family-run eateries for delicious, authentic, and cheap meals." },
                { title: "Master Public Transport", description: "Taxis are convenient but costly. Using buses, trams, and subways not only saves money but also gives you a real feel for the city's rhythm." },
                { title: "Find Free Activities", description: "Most cities have beautiful parks, free walking tours, and fascinating neighborhoods to explore on foot. These often become the highlights of a trip." },
            ],
            conclusion: "Smart budgeting enhances your travel, connecting you more deeply with the culture you're exploring. Spend less on fluff and more on what truly matters: the experience."
        }
    },
    {
        icon: Camera,
        title: "Capture Moments",
        description: "Balance photography with living in the present",
        slug: "capture-moments",
        content: { introduction: "", points: [], conclusion: "" } // Placeholder
    },
    {
        icon: Backpack,
        title: "Pack Light",
        description: "Bring versatile clothing and essential items only",
        slug: "pack-light",
        content: { introduction: "", points: [], conclusion: "" } // Placeholder
    },
    {
        icon: Globe,
        title: "Respect Cultures",
        description: "Learn basic phrases and local customs before visiting",
        slug: "respect-cultures",
        content: { introduction: "", points: [], conclusion: "" } // Placeholder
    },
    {
        icon: Lightbulb,
        title: "Stay Connected",
        description: "Get local SIM cards and download offline maps",
        slug: "stay-connected",
        content: { introduction: "", points: [], conclusion: "" } // Placeholder
    }
];