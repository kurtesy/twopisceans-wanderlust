import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { travelLocations } from "@/data/travelLocations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Globe, Navigation, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const MapPage = () => {
  const [content, setContent] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Travel Map</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interactive map of the beautiful places we've explored across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Map Container */}
            <Card className="lg:col-span-2 overflow-hidden bg-card border-border shadow-lg h-[500px] md:h-[600px] relative">
              <ComposableMap projectionConfig={{ scale: 140 }}>
                <ZoomableGroup zoom={1}>
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#EAEAEC"
                          stroke="#D6D6DA"
                          style={{
                            default: { outline: "none" },
                            hover: { fill: "#F5F5F5", outline: "none" },
                            pressed: { outline: "none" },
                          }}
                        />
                      ))
                    }
                  </Geographies>

                  {travelLocations.map((location) => (
                    <Marker
                      key={location.name}
                      coordinates={location.coordinates}
                      onMouseEnter={() => setContent(location.name)}
                      onMouseLeave={() => setContent("")}
                      onClick={() => setSelectedLocation(location)}
                    >
                      <circle
                        r={4}
                        fill="#ff4081"
                        stroke="#fff"
                        strokeWidth={2}
                        className="cursor-pointer hover:r-6 smooth-transition"
                      />
                    </Marker>
                  ))}
                </ZoomableGroup>
              </ComposableMap>
              
              {content && (
                <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-in fade-in slide-in-from-bottom-2">
                  {content}
                </div>
              )}

              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                  <Navigation className="h-3 w-3 mr-1" /> Use mouse to zoom & pan
                </Badge>
              </div>
            </Card>

            {/* Sidebar / Details */}
            <div className="space-y-6">
              <Card className="bg-card border-border shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Travel Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="text-muted-foreground">Places Visited</span>
                    <span className="font-bold text-xl">{travelLocations.length}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="text-muted-foreground">Countries</span>
                    <span className="font-bold text-xl">
                      {new Set(travelLocations.map(l => l.country)).size}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {selectedLocation ? (
                <Card className="bg-card border-border shadow-md animate-in slide-in-from-right-4">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-2xl font-bold">{selectedLocation.name}</CardTitle>
                      <Badge className="bg-primary">{selectedLocation.country}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>
                        {selectedLocation.coordinates[1].toFixed(4)}° N, {selectedLocation.coordinates[0].toFixed(4)}° E
                      </span>
                    </div>
                    {selectedLocation.description && (
                      <p className="text-foreground leading-relaxed">
                        {selectedLocation.description}
                      </p>
                    )}
                    
                    {selectedLocation.itinerarySlug && (
                      <div className="pt-4">
                        <Link to={`/itineraries/${selectedLocation.itinerarySlug}`}>
                          <Button className="w-full bg-primary hover:bg-primary/90">
                            View Itinerary
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    )}

                    <div className="pt-4">
                      <p className="text-sm text-muted-foreground italic">
                        Click on other markers to explore more destinations.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-secondary/20 border-border border-dashed">
                  <CardContent className="p-8 text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Click on a marker on the map to see destination details.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MapPage;
