import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TipsSection } from "@/components/TipsSection";

const Tips = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-32 pb-10">
                {/* The TipsSection component has its own internal padding, so we adjust the wrapper padding */}
                <TipsSection />
            </main>

            <Footer />
        </div>
    );
};

export default Tips;