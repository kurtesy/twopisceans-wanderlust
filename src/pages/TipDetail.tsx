import { useParams, Link } from "react-router-dom";
import { tips } from "../data/tips";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import NotFound from "./NotFound";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const TipDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const tip = tips.find((t) => t.slug === slug);

    if (!tip) {
        return <NotFound />;
    }

    const Icon = tip.icon;

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Navbar />
            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <Breadcrumb className="mb-8">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/tips">Travel Tips</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{tip.title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full gradient-ocean mb-6 animate-in fade-in-0 zoom-in-50 duration-500">
                                <Icon className="h-12 w-12 text-white" />
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">{tip.title}</h1>
                            <p className="text-xl text-muted-foreground">{tip.content.introduction}</p>
                        </div>

                        <div className="space-y-8">
                            {tip.content.points.map((point, index) => (
                                <Card key={index} className="bg-card border-border shadow-sm hover:shadow-lg smooth-transition">
                                    <CardHeader>
                                        <CardTitle className="text-primary">{point.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent><p className="text-muted-foreground">{point.description}</p></CardContent>
                                </Card>
                            ))}
                        </div>

                        <p className="text-lg text-center text-muted-foreground mt-12 italic">{tip.content.conclusion}</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TipDetail;