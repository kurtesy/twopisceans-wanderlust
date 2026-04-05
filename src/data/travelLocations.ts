export interface TravelLocation {
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
  country: string;
  description?: string;
  itinerarySlug?: string;
}

export const travelLocations: TravelLocation[] = [
  { name: "Reykjavik", coordinates: [-21.9426, 64.1466], country: "Iceland", itinerarySlug: "iceland-northern-lights" },
  { name: "London", coordinates: [-0.1276, 51.5074], country: "UK", itinerarySlug: "uk-grand-tour" },
  { name: "York", coordinates: [-1.0803, 53.9591], country: "UK", itinerarySlug: "uk-grand-tour" },
  { name: "Newcastle", coordinates: [-1.6178, 54.9783], country: "UK", itinerarySlug: "uk-grand-tour" },
  { name: "Edinburgh", coordinates: [-3.1883, 55.9533], country: "UK", itinerarySlug: "uk-grand-tour" },
  { name: "Belfast", coordinates: [-5.9301, 54.5973], country: "UK", itinerarySlug: "uk-grand-tour" },
  { name: "Liverpool", coordinates: [-2.9916, 53.4084], country: "UK", itinerarySlug: "uk-grand-tour" },
  { name: "Newport", coordinates: [-2.9977, 51.5837], country: "Wales, UK", itinerarySlug: "uk-grand-tour" },
  { name: "Corfu", coordinates: [19.8562, 39.6243], country: "Greece", itinerarySlug: "corfu-saranda-ionian-coast" },
  { name: "Saranda", coordinates: [20.0100, 39.8756], country: "Albania", itinerarySlug: "corfu-saranda-ionian-coast" },
  { name: "Nuremberg", coordinates: [11.0767, 49.4521], country: "Germany", itinerarySlug: "nuremberg-bamberg" },
  { name: "Bamberg", coordinates: [10.8917, 49.8917], country: "Germany", itinerarySlug: "nuremberg-bamberg" },
  { name: "Valencia", coordinates: [-0.3763, 39.4699], country: "Spain", itinerarySlug: "tomatina-london" },
  { name: "Cork", coordinates: [-8.4756, 51.8985], country: "Ireland", itinerarySlug: "tomatina-london" },
  { name: "Manchester", coordinates: [-2.2426, 53.4808], country: "UK", itinerarySlug: "tomatina-london" },
  { name: "Rovaniemi", coordinates: [25.7289, 66.5039], country: "Finland", itinerarySlug: "rovaniemi-lapland" },
  { name: "Helsinki", coordinates: [24.9384, 60.1699], country: "Finland", itinerarySlug: "rovaniemi-lapland" },
  { name: "Amsterdam", coordinates: [4.9041, 52.3676], country: "Netherlands", itinerarySlug: "amsterdam-weekend" },
  { name: "Dubai", coordinates: [55.2708, 25.2048], country: "UAE", itinerarySlug: "dubai-desert-city-fusion" },
  { name: "Patna", coordinates: [85.1376, 25.5941], country: "India", itinerarySlug: "india-family-adventure" },
  { name: "Kolkata", coordinates: [88.3639, 22.5726], country: "India", itinerarySlug: "india-family-adventure" },
  { name: "Digha", coordinates: [87.5117, 21.6267], country: "India", itinerarySlug: "india-family-adventure" },
  { name: "Mandarmani", coordinates: [87.6970, 21.6521], country: "India", itinerarySlug: "india-family-adventure" },
  { name: "Jabalpur", coordinates: [79.9339, 23.1815], country: "India", itinerarySlug: "india-family-adventure" },
  { name: "Hyderabad", coordinates: [78.4867, 17.3850], country: "India", itinerarySlug: "india-family-adventure" },
  { name: "Bucharest", coordinates: [26.1025, 44.4268], country: "Romania", itinerarySlug: "bucharest-new-year" },
  { name: "Berlin", coordinates: [13.4050, 52.5200], country: "Germany", description: "Our home base!" },
];
