import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Download } from "lucide-react";

const MediaKitPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Navbar />
            <main className="flex-grow pt-32 pb-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Media Kit</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Explore our audience demographics, partnership opportunities, and past collaborations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="p-6 bg-card border border-border rounded-xl shadow-sm text-center">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <ExternalLink className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Interactive Kit</h3>
                            <p className="text-muted-foreground mb-4">View our modern, responsive media kit directly in your browser.</p>
                            <Button asChild variant="outline" className="w-full">
                                <a href="/mediakit.html" target="_blank">Open Full Screen</a>
                            </Button>
                        </div>

                        <div className="p-6 bg-card border border-border rounded-xl shadow-sm text-center">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <Download className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">PDF Version</h3>
                            <p className="text-muted-foreground mb-4">Download a condensed PDF version for offline viewing or printing.</p>
                            <Button asChild className="w-full">
                                <a href="/twopisceans-mediakit-min.pdf" download>Download PDF</a>
                            </Button>
                        </div>

                        <div className="p-6 bg-card border border-border rounded-xl shadow-sm text-center">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Rate Card</h3>
                            <p className="text-muted-foreground mb-4">Calculate potential campaign costs and reach with our interactive tool.</p>
                            <Button asChild variant="outline" className="w-full">
                                <a href="/rate_card.html" target="_blank">View Rate Card</a>
                            </Button>
                        </div>
                    </div>

                    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
                        <div className="bg-muted px-6 py-3 border-b border-border flex justify-between items-center">
                            <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">Preview: Interactive Media Kit</span>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                        </div>
                        <iframe
                            src="/mediakit.html"
                            title="The Two Pisceans Media Kit"
                            className="w-full h-[800px] border-none"
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MediaKitPage;