import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InstagramEmbed } from "@/components/InstagramEmbed";

const reels = [
    {
        id: 1,
        url: "https://www.instagram.com/p/DKe32yRCd4R/",
    },
    {
        id: 2,
        // Replace with another reel URL from your page
        url: "https://www.instagram.com/p/DLour6RC-Ze/",
    },
    {
        id: 3,
        // Replace with another reel URL from your page
        url: "https://www.instagram.com/p/DE7e4TOi69B/",
    },
    {
        id: 4,
        // Replace with another reel URL from your page
        url: "https://www.instagram.com/p/DPYorbxCAbl/",
    },
];

export default function Reels() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-32 pb-20 px-4 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
                            Our Top Reels
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            A collection of our favorite moments and adventures, captured on video.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-center">
                        {reels.map((reel) => (
                            <div key={reel.id} className="flex justify-center w-full">
                                <InstagramEmbed url={reel.url} />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}