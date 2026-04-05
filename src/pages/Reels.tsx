import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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

                    <div className="elfsight-app-af61a269-9ae5-4347-bded-86256f46ffba" data-elfsight-app-lazy></div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
