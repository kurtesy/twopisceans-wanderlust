import { Footer } from "@/components/Footer";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* You might want to add a Navbar component here */}
            <main className="flex-grow container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About The Two Pisceans</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        We are a couple who share a deep love for travel and adventure. Our blog is a place to document our journeys, share our stories, and hopefully inspire you to explore the world.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}