import { Footer } from "@/components/Footer";
import { Instagram, Mail } from "lucide-react";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* You might want to add a Navbar component here */}
            <main className="flex-grow container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        Have a question or want to collaborate? We'd love to hear from you!
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://www.instagram.com/thetwopisceans"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 smooth-transition"
                        >
                            <Instagram className="h-6 w-6" />
                        </a>
                        <a href="mailto:hello@thetwopisceans.com" className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 smooth-transition">
                            <Mail className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}