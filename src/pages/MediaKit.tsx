import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const MediaKitPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">
                <iframe
                    src="/twopisceans-mediakit-min.pdf"
                    title="The Two Pisceans Media Kit"
                    className="w-full h-screen border-none"
                />
            </main>
            <Footer />
        </div>
    );
};

export default MediaKitPage;