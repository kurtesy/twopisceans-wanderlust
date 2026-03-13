import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import NotFound from "./NotFound";
import { Badge } from "@/components/ui/badge";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Clock, DollarSign, LucideProps } from "lucide-react";
import { travelItineraries as itineraries } from "@/data/travelItineraries";
import { ForwardRefExoticComponent, RefAttributes } from "react";

const ItineraryDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const itinerary = itineraries.find((i) => i.slug === slug);

    if (!itinerary) {
        return <NotFound />;
    }

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
                                    <Link to="/itineraries">Itineraries</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{itinerary.title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12">
                            <div className="relative h-96 rounded-lg overflow-hidden mb-8">
                                <img src={itinerary.image} alt={itinerary.title} className="w-full h-full object-cover" />
                                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">{itinerary.difficulty}</Badge>
                            </div>
                            <div className="flex items-center gap-2 mb-2 text-primary">
                                <MapPin className="h-5 w-5" />
                                <span className="font-semibold">{itinerary.location}</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">{itinerary.title}</h1>
                            <p className="text-xl text-muted-foreground mb-6">{itinerary.description}</p>

                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
                                <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>{itinerary.duration}</span></div>
                                <div className="flex items-center gap-2"><DollarSign className="h-4 w-4" /><span>{itinerary.price}</span></div>
                                <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /><span>Best season: {itinerary.season}</span></div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Daily Plan</h2>
                            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:content-['']">
                                {itinerary.dailyPlan?.map((day, index) => (
                                    <div key={index} className="relative">
                                        <div className="flex items-start">
                                            <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">
                                                {index + 1}
                                            </div>
                                            <div className="ml-6 flex-grow">
                                                <h3 className="text-xl font-semibold text-foreground mb-1">{day.day}</h3>
                                                <p className="text-sm text-muted-foreground mb-4">{day.date}</p>
                                                <Card className="bg-card border-border">
                                                    <CardContent className="p-4 space-y-3">
                                                        {day.activities.map((activity, actIndex) => {
                                                            const Icon = activity.icon as ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
                                                            return (
                                                                <div key={actIndex} className="flex items-center gap-3">
                                                                    <Icon className="h-5 w-5 text-primary shrink-0" />
                                                                    <p className="text-muted-foreground"><span className="font-semibold">{activity.time}:</span> {activity.description}</p>
                                                                </div>
                                                            );
                                                        })}
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ItineraryDetail;