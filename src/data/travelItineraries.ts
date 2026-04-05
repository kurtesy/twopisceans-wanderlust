import {
    Plane,
    Bed,
    Moon,
    Mountain,
    Globe,
    Waves,
    Landmark,
    ShoppingBag,
    Train,
    Ship,
    Bus,
    Utensils,
    Flower2,
    Palmtree,
    Camera,
    Building2,
} from "lucide-react";

import cityImg from "@/assets/destination-city.jpg";
import icelandImg from "@/assets/iceland-1.jpg";
import ukImg from "@/assets/UK-1.jpg"
import corfuImg from "@/assets/corfu-1.jpg"
import beachImg from "@/assets/destination-island.jpg";
import festivalImg from "@/assets/hero-1.jpg";

export const travelItineraries = [

    // ─────────────────────────────────────────────
    // 1. ICELAND
    // ─────────────────────────────────────────────
    {
        id: 1,
        slug: "iceland-northern-lights",
        title: "Iceland: Fire, Ice & Northern Lights",
        location: "Reykjavik, Iceland",
        duration: "8 Days",
        price: "€3,787",
        difficulty: "Moderate",
        season: "February",
        image: icelandImg,
        description:
            "A winter adventure through Iceland's dramatic landscapes — from volcanic craters and glacier caves to geothermal lagoons and the magical Northern Lights above Reykjavik.",
        highlights: [
            "Northern Lights Bus Tour on arrival night",
            "Golden Circle: Thingvellir, Geysir & Gullfoss",
            "South Coast complete day tour",
            "Sky Lagoon geothermal spa",
            "Snaefellsnes Peninsula exploration",
            "Katla Ice Cave adventure",
            "Blue Lagoon relaxation session",
        ],
        dailyPlan: [
            {
                day: "Day 1: Arrival in Reykjavik",
                date: "February 20, 2025",
                activities: [
                    { time: "11:00", description: "Depart from Berlin on Play Airlines", icon: Plane },
                    { time: "14:20", description: "Arrive in Reykjavik, check into Bolholt Apartment", icon: Bed },
                    { time: "21:30", description: "Northern Lights Bus Tour around Reykjavik", icon: Moon },
                ],
            },
            {
                day: "Day 2: Golden Circle",
                date: "February 21, 2025",
                activities: [
                    { time: "09:00", description: "Full-day Golden Circle tour — Thingvellir, Geysir & Gullfoss waterfall", icon: Mountain },
                    { time: "18:00", description: "Return to Reykjavik", icon: Bed },
                ],
            },
            {
                day: "Day 3: South Coast",
                date: "February 22, 2025",
                activities: [
                    { time: "08:00", description: "South Coast complete day tour via Viator — black sand beaches & waterfalls", icon: Mountain },
                    { time: "18:00", description: "Return to Reykjavik", icon: Bed },
                ],
            },
            {
                day: "Day 4: Sky Lagoon",
                date: "February 23, 2025",
                activities: [
                    { time: "Morning", description: "Free time in Reykjavik city centre", icon: Globe },
                    { time: "Afternoon", description: "Sky Lagoon geothermal spa — 7-step ritual", icon: Waves },
                ],
            },
            {
                day: "Day 5: Snaefellsnes Peninsula",
                date: "February 24, 2025",
                activities: [
                    { time: "Full Day", description: "Snaefellsnes Peninsula — subglacial volcano, Mount Kirkjufell & Ytri Tunga beach", icon: Mountain },
                ],
            },
            {
                day: "Day 6: Katla Ice Cave",
                date: "February 25, 2025",
                activities: [
                    { time: "Full Day", description: "Katla Volcano Ice Cave tour", icon: Mountain },
                ],
            },
            {
                day: "Day 7: Blue Lagoon",
                date: "February 26, 2025",
                activities: [
                    { time: "09:15", description: "Blue Lagoon morning session", icon: Waves },
                    { time: "14:00", description: "Blue Lagoon afternoon session", icon: Waves },
                    { time: "18:15", description: "Return to Reykjavik", icon: Bed },
                ],
            },
            {
                day: "Day 8: Departure",
                date: "February 27, 2025",
                activities: [
                    { time: "Morning", description: "Final stroll in Reykjavik, check out of Bolholt Apartment", icon: Bed },
                    { time: "Afternoon", description: "Fly back to Berlin on Play Airlines", icon: Plane },
                ],
            },
        ],
    },

    // ─────────────────────────────────────────────
    // 2. UK GRAND TOUR
    // ─────────────────────────────────────────────
    {
        id: 2,
        slug: "uk-grand-tour",
        title: "UK Grand Tour",
        location: "London · York · Newcastle · Edinburgh · Belfast · Liverpool · Newport · Wales · UK",
        duration: "17 Days",
        price: "£2,844",
        difficulty: "Moderate",
        season: "April - May",
        image: ukImg,
        description:
            "An epic journey through the United Kingdom — from London's iconic landmarks to Scotland's Highland lochs, Northern Ireland's rugged coastline, the valleys of Wales, and a Harry Potter finale.",
        highlights: [
            "British Museum, Sky Garden & Kensington Palace in London",
            "Loch Ness & Scottish Highlands full-day tour",
            "Alnwick Castle day trip from Newcastle",
            "Giant's Causeway & Titanic Belfast",
            "Snowdonia National Park, North Wales",
            "Warner Bros. Harry Potter Studios",
            "Stonehenge & Bath day trip",
        ],
        dailyPlan: [
            {
                day: "Day 1: Arrival in London",
                date: "April 24, 2025",
                activities: [
                    { time: "Morning", description: "Fly from Berlin to London", icon: Plane },
                    { time: "Afternoon", description: "Check into London Airbnb (4 nights, 24th–28th)", icon: Bed },
                    { time: "Evening", description: "Buckingham Palace, St James's Park stroll", icon: Landmark },
                ],
            },
            {
                day: "Day 2: London — Historic Heart",
                date: "April 25, 2025",
                activities: [
                    { time: "Morning", description: "Churchill War Rooms, Parliament Square, Westminster Abbey & Bridge", icon: Landmark },
                    { time: "15:00", description: "British Museum visit (free entry)", icon: Landmark },
                    { time: "Evening", description: "Piccadilly Circus, Covent Garden & Trafalgar Square", icon: Globe },
                ],
            },
            {
                day: "Day 3: London — Sky & River",
                date: "April 26, 2025",
                activities: [
                    { time: "Before 10:00", description: "Sky Garden — free entry before 10 am", icon: Landmark },
                    { time: "Afternoon", description: "Tower Bridge, Borough Market, Shakespeare's Globe, St Paul's Cathedral", icon: Landmark },
                    { time: "Evening", description: "London Eye & Canary Wharf", icon: Globe },
                ],
            },
            {
                day: "Day 4: London — Kensington & Soho",
                date: "April 27, 2025",
                activities: [
                    { time: "Morning", description: "Kensington Palace, Kensington Gardens & Royal Albert Hall", icon: Landmark },
                    { time: "Afternoon", description: "Harrods shopping, Hyde Park, The Ritz Afternoon Tea option", icon: ShoppingBag },
                    { time: "Evening", description: "Soho & Mayfair evening walk", icon: Globe },
                ],
            },
            {
                day: "Day 5: London → York → Newcastle",
                date: "April 28, 2025",
                activities: [
                    { time: "12:40", description: "Train from London King's Cross to York (Grand Central)", icon: Train },
                    { time: "14:30", description: "Arrive York — explore the medieval city & Shambles", icon: Landmark },
                    { time: "20:17", description: "Train from York to Newcastle (Transpennine)", icon: Train },
                    { time: "21:18", description: "Arrive Newcastle — check into Grey Street Hotel", icon: Bed },
                ],
            },
            {
                day: "Day 6: Newcastle & Alnwick Castle",
                date: "April 29, 2025",
                activities: [
                    { time: "Morning", description: "Explore Newcastle city & Quayside", icon: Globe },
                    { time: "12:06", description: "Train to Alnmouth for Alnwick Castle visit", icon: Train },
                    { time: "18:00", description: "Return train from Alnmouth to Newcastle", icon: Train },
                ],
            },
            {
                day: "Day 7: Newcastle → Edinburgh",
                date: "April 30, 2025",
                activities: [
                    { time: "07:08", description: "Train from Newcastle to Edinburgh", icon: Train },
                    { time: "09:00", description: "Arrive Edinburgh — check into Airbnb (2 nights, 30th–2nd)", icon: Bed },
                    { time: "Afternoon", description: "Edinburgh Castle & Royal Mile exploration", icon: Landmark },
                ],
            },
            {
                day: "Day 8: Loch Ness & Scottish Highlands",
                date: "May 1, 2025",
                activities: [
                    { time: "07:45", description: "Full-day Loch Ness & Scottish Highlands tour", icon: Mountain },
                ],
            },
            {
                day: "Day 9: Edinburgh → Belfast",
                date: "May 2, 2025",
                activities: [
                    { time: "07:20", description: "Fly from Edinburgh to Belfast (RyanAir RK9451)", icon: Plane },
                    { time: "08:10", description: "Arrive Belfast — check into Holiday Inn Belfast City Centre", icon: Bed },
                    { time: "Afternoon", description: "Titanic Belfast Museum", icon: Landmark },
                ],
            },
            {
                day: "Day 10: Belfast → Liverpool (overnight ferry)",
                date: "May 3, 2025",
                activities: [
                    { time: "Morning", description: "Explore Belfast city", icon: Globe },
                    { time: "22:30", description: "Overnight ferry from Belfast to Liverpool", icon: Ship },
                ],
            },
            {
                day: "Day 11: Liverpool",
                date: "May 4, 2025",
                activities: [
                    { time: "06:30", description: "Arrive Liverpool — check into Novotel Liverpool Centre", icon: Bed },
                    { time: "Afternoon", description: "Explore Liverpool — Albert Dock, The Beatles Story", icon: Globe },
                ],
            },
            {
                day: "Day 12: Snowdonia & Travel to Birmingham",
                date: "May 5, 2025",
                activities: [
                    { time: "08:45", description: "Day trip to Snowdonia National Park, North Wales", icon: Mountain },
                    { time: "18:30", description: "Train from Liverpool Lime Street to Birmingham New Street", icon: Train },
                    { time: "20:20", description: "Arrive Birmingham — check into Holiday Inn Express Snow Hill", icon: Bed },
                ],
            },
            {
                day: "Day 13: Birmingham → Newport, Wales",
                date: "May 6, 2025",
                activities: [
                    { time: "Morning", description: "Explore Birmingham city", icon: Globe },
                    { time: "19:30", description: "Train from Birmingham New Street to Newport (Cross Country)", icon: Train },
                    { time: "21:00", description: "Arrive Newport — check into Airbnb (2 nights)", icon: Bed },
                ],
            },
            {
                day: "Day 14: Bath & Stonehenge",
                date: "May 7, 2025",
                activities: [
                    { time: "Full Day", description: "Day trip to Bath and Stonehenge, Salisbury", icon: Landmark },
                ],
            },
            {
                day: "Day 15: Newport → London",
                date: "May 8, 2025",
                activities: [
                    { time: "Morning", description: "Travel from Newport to London", icon: Train },
                    { time: "Afternoon", description: "Check into London Airbnb (2 nights, 8th–10th)", icon: Bed },
                    { time: "Evening", description: "Final London evening — The Tea House, Bread Ahead", icon: Globe },
                ],
            },
            {
                day: "Day 16: Harry Potter Studios",
                date: "May 9, 2025",
                activities: [
                    { time: "10:30", description: "Warner Bros. Harry Potter Studio Tour", icon: Landmark },
                    { time: "Evening", description: "Last evening in London", icon: Globe },
                ],
            },
            {
                day: "Day 17: Departure",
                date: "May 10, 2025",
                activities: [
                    { time: "19:20", description: "Fly from London Stansted to Berlin on RyanAir", icon: Plane },
                    { time: "22:40", description: "Arrive Berlin", icon: Plane },
                ],
            },
        ],
    },

    // ─────────────────────────────────────────────
    // 3. CORFU + SARANDA
    // ─────────────────────────────────────────────
    {
        id: 3,
        slug: "corfu-saranda-ionian-coast",
        title: "Corfu & Saranda — Ionian Coast Escape",
        location: "Corfu, Greece & Saranda, Albania",
        duration: "6 Days",
        price: "€TBD",
        difficulty: "Easy",
        season: "June",
        image: corfuImg,
        description:
            "Sun, sea and the stunning Ionian coastline — a perfect summer escape combining the lush Greek island of Corfu with the hidden gem of the Albanian Riviera, Saranda.",
        highlights: [
            "Stay at Almyros Beach Resort, Corfu",
            "Ferry day trip to Saranda, Albania",
            "Explore Corfu Old Town (UNESCO)",
            "Crystal-clear Ionian Sea beaches",
            "Albanian Riviera scenery",
        ],
        dailyPlan: [
            {
                day: "Day 1: Arrival in Corfu",
                date: "June 25, 2025",
                activities: [
                    { time: "06:00", description: "Depart Berlin on Easyjet U25003", icon: Plane },
                    { time: "09:15", description: "Arrive Corfu — check into Almyros Beach Resort", icon: Bed },
                    { time: "Afternoon", description: "Relax by the beach", icon: Waves },
                ],
            },
            {
                day: "Day 2: Explore Corfu",
                date: "June 26, 2025",
                activities: [
                    { time: "Morning", description: "Visit Corfu Old Town — Venetian architecture & fortresses", icon: Landmark },
                    { time: "Afternoon", description: "Beach relaxation & swimming", icon: Waves },
                ],
            },
            {
                day: "Day 3: Corfu Island Day",
                date: "June 27, 2025",
                activities: [
                    { time: "Full Day", description: "Leisure day — beaches, local restaurants and boat tours", icon: Waves },
                ],
            },
            {
                day: "Day 4: Ferry to Saranda, Albania",
                date: "June 28, 2025",
                activities: [
                    { time: "11:30", description: "Ferry from Corfu to Saranda (Open Ferry)", icon: Ship },
                    { time: "11:10", description: "Arrive Saranda — explore the Albanian Riviera", icon: Globe },
                    { time: "Evening", description: "Overnight stay in Saranda", icon: Bed },
                ],
            },
            {
                day: "Day 5: Saranda",
                date: "June 29, 2025",
                activities: [
                    { time: "Full Day", description: "Explore Saranda beaches, Ksamil Islands and surroundings", icon: Waves },
                ],
            },
            {
                day: "Day 6: Return & Departure",
                date: "June 30, 2025",
                activities: [
                    { time: "17:00", description: "Ferry from Saranda back to Corfu", icon: Ship },
                    { time: "18:50", description: "Arrive Corfu", icon: Plane },
                    { time: "21:00", description: "Fly from Corfu to Berlin on Easyjet U25004", icon: Plane },
                    { time: "22:35", description: "Arrive Berlin", icon: Plane },
                ],
            },
        ],
    },

    // ─────────────────────────────────────────────
    // 4. NUREMBERG & BAMBERG
    // ─────────────────────────────────────────────
    {
        id: 4,
        slug: "nuremberg-bamberg",
        title: "Nuremberg & Bamberg",
        location: "Nuremberg & Bamberg, Germany",
        duration: "5 Days",
        price: "€TBD",
        difficulty: "Easy",
        season: "July",
        image: cityImg,
        description:
            "A charming summer break to Bavaria — exploring Nuremberg's medieval old town and Nazi history sites, with a scenic day trip to UNESCO-listed Bamberg.",
        highlights: [
            "Nuremberg Old Town & Imperial Castle",
            "Day trip to UNESCO-listed Bamberg",
            "Nuremberg Christmas Market history",
            "Franconian cuisine & local beers",
            "Easy weekend escape from Berlin by bus",
        ],
        dailyPlan: [
            {
                day: "Day 1: Arrival in Nuremberg",
                date: "July 25, 2025",
                activities: [
                    { time: "15:40", description: "Depart Berlin by bus", icon: Bus },
                    { time: "21:40", description: "Arrive Nuremberg — check into hotel", icon: Bed },
                ],
            },
            {
                day: "Day 2: Nuremberg Old Town",
                date: "July 26, 2025",
                activities: [
                    { time: "Morning", description: "Explore Nuremberg Old Town — Imperial Castle & Medieval walls", icon: Landmark },
                    { time: "Afternoon", description: "Documentation Centre Nazi Party Rally Grounds", icon: Landmark },
                    { time: "Evening", description: "Dinner in old town with local Franconian cuisine", icon: Utensils },
                ],
            },
            {
                day: "Day 3: Day Trip to Bamberg",
                date: "July 26, 2025",
                activities: [
                    { time: "Morning", description: "Day trip to Bamberg — UNESCO Old Town, Cathedral & Little Venice", icon: Landmark },
                    { time: "Afternoon", description: "Return to Nuremberg", icon: Train },
                ],
            },
            {
                day: "Day 4: Day Trip to Rothenberg ob der Tauber",
                date: "July 27, 2025",
                activities: [
                    { time: "Morning", description: "Day trip to Rothenberg ob der Tauber — perfectly preserved medieval town", icon: Landmark },
                    { time: "Afternoon", description: "Return to Nuremberg", icon: Train },
                ],
            },
            {
                day: "Day 5: Departure",
                date: "July 29, 2025",
                activities: [
                    { time: "00:50", description: "Overnight bus from Nuremberg to Berlin", icon: Bus },
                    { time: "06:35", description: "Arrive Berlin", icon: Bus },
                ],
            },
        ],
    },

    // ─────────────────────────────────────────────
    // 5. TOMATINA + LONDON
    // ─────────────────────────────────────────────
    {
        id: 5,
        slug: "tomatina-london",
        title: "La Tomatina & London",
        location: "Valencia, Spain → Cork → Manchester → London, UK",
        duration: "7 Days",
        price: "€TBD",
        difficulty: "Easy",
        season: "August - September",
        image: festivalImg,
        description:
            "The ultimate summer combo — start with the world-famous La Tomatina tomato fight in Valencia, then make your way through Cork, Manchester and end with a vibrant long weekend in London.",
        highlights: [
            "La Tomatina festival in Valencia",
            "Stay at Blanq Ruzafa, Valencia",
            "Scenic stopover in Cork, Ireland",
            "Flixbus adventure from Manchester to London",
            "Lunch at Taj51, London",
            "The Devil Wears Prada show, London",
            "Bus Dinner Gastro experience, London",
        ],
        dailyPlan: [
            {
                day: "Day 1: Fly to Valencia",
                date: "August 26, 2025",
                activities: [
                    { time: "06:45", description: "Depart Berlin on Ryanair FR138", icon: Plane },
                    { time: "09:40", description: "Arrive Valencia — check into Blanq Ruzafa hotel", icon: Bed },
                    { time: "Afternoon", description: "Explore Valencia — explore the city before La Tomatina", icon: Globe },
                ],
            },
            {
                day: "Day 2: La Tomatina, Valencia",
                date: "August 27, 2025",
                activities: [
                    { time: "Full Day", description: "La Tomatina festival — the world's biggest tomato fight in Buñol", icon: Flower2 },
                    { time: "Evening", description: "Return to Blanq Ruzafa hotel, Valencia", icon: Bed },
                ],
            },
            {
                day: "Day 3: Valencia → Cork → Manchester",
                date: "August 28, 2025",
                activities: [
                    { time: "Morning", description: "Fly from Valencia to Cork", icon: Plane },
                    { time: "11:30", description: "Fly from Cork to Manchester (Ryanair FR768)", icon: Plane },
                    { time: "12:45", description: "Arrive Manchester", icon: Bed },
                    { time: "Evening", description: "Explore Manchester city centre", icon: Globe },
                ],
            },
            {
                day: "Day 4: Manchester → London",
                date: "August 29, 2025",
                activities: [
                    { time: "06:20", description: "Flixbus from Manchester to London", icon: Bus },
                    { time: "10:30", description: "Arrive London", icon: Bed },
                    { time: "13:00", description: "Lunch at Taj51", icon: Utensils },
                    { time: "Evening", description: "The Devil Wears Prada show", icon: Landmark },
                ],
            },
            {
                day: "Day 5: London",
                date: "August 30, 2025",
                activities: [
                    { time: "Evening", description: "Bus Dinner Gastro experience", icon: Utensils },
                ],
            },
            {
                day: "Day 6: London",
                date: "August 31, 2025",
                activities: [
                    { time: "Full Day", description: "Free day exploring London", icon: Globe },
                ],
            },
            {
                day: "Day 7: Departure from London",
                date: "September 1, 2025",
                activities: [
                    { time: "19:30", description: "Fly from London back to Berlin on Ryanair", icon: Plane },
                ],
            },
        ],
    },

    // ─────────────────────────────────────────────
    // 6. ROVANIEMI (FINLAND)
    // ─────────────────────────────────────────────
    {
        id: 6,
        slug: "rovaniemi-lapland",
        title: "Rovaniemi — Lapland Adventure",
        location: "Rovaniemi, Finland",
        duration: "6 Days",
        price: "€669",
        difficulty: "Easy",
        season: "September",
        image: cityImg,
        description:
            "Step into the magic of Finnish Lapland — the home of Santa Claus, Arctic huts, reindeer parks and the first hints of autumn Northern Lights in Rovaniemi.",
        highlights: [
            "Stay at Santa Claus Village on arrival night",
            "Arctic hut accommodation experience",
            "Stay at Appuka — traditional Lapland lodging",
            "Northern Lights viewing opportunity",
            "Overnight scenic train from Rovaniemi to Helsinki",
            "Nature walks in Lapland wilderness",
        ],
        dailyPlan: [
            {
                day: "Day 1: Fly to Rovaniemi",
                date: "September 11, 2025",
                activities: [
                    { time: "15:40", description: "Depart Berlin on Norwegian Airlines", icon: Plane },
                    { time: "21:40", description: "Arrive Rovaniemi — check into Santa Claus Village", icon: Bed },
                ],
            },
            {
                day: "Day 2: Rovaniemi Exploration",
                date: "September 12, 2025",
                activities: [
                    { time: "Full Day", description: "Check into Arctic hut — explore Rovaniemi, reindeer farm & Arctic Circle", icon: Mountain },
                ],
            },
            {
                day: "Day 3: Lapland Nature",
                date: "September 13, 2025",
                activities: [
                    { time: "Full Day", description: "Explore Lapland wilderness — stay at Appuka lodge", icon: Mountain },
                ],
            },
            {
                day: "Day 4: Lapland Activities",
                date: "September 14, 2025",
                activities: [
                    { time: "Full Day", description: "Activities in Lapland — hiking, fishing or Northern Lights hunt", icon: Mountain },
                ],
            },
            {
                day: "Day 5: Overnight Train to Helsinki",
                date: "September 15, 2025",
                activities: [
                    { time: "Full Day", description: "Final day in Rovaniemi", icon: Globe },
                    { time: "17:52", description: "Overnight train from Rovaniemi to Helsinki (VR Train)", icon: Train },
                ],
            },
            {
                day: "Day 6: Helsinki → Berlin",
                date: "September 16, 2025",
                activities: [
                    { time: "05:50", description: "Arrive Helsinki", icon: Train },
                    { time: "08:30", description: "Fly from Helsinki to Berlin on Norwegian Airlines", icon: Plane },
                    { time: "11:35", description: "Arrive Berlin", icon: Plane },
                ],
            },
        ],
    },

    // ─────────────────────────────────────────────
    // 7. AMSTERDAM
    // ─────────────────────────────────────────────
    {
        id: 7,
        slug: "amsterdam-weekend",
        title: "Amsterdam Long Weekend",
        location: "Amsterdam, Netherlands",
        duration: "5 Days",
        price: "€TBD",
        difficulty: "Easy",
        season: "September",
        image: cityImg,
        description:
            "A relaxed long weekend in the Dutch capital — canal cruises, world-class museums, cycling through the city, and a stay at the unique Monastery Hotel De Soete Moeder.",
        highlights: [
            "Rijksmuseum & Van Gogh Museum",
            "Canal boat tour through Amsterdam",
            "Cycling through Vondelpark",
            "Anne Frank House visit",
            "Stay at Monastery Hotel De Soete Moeder",
            "Jordaan neighbourhood exploration",
        ],
        dailyPlan: [
            {
                day: "Day 1: Arrival in Amsterdam",
                date: "September 26, 2025",
                activities: [
                    { time: "06:05", description: "Fly from Berlin to Amsterdam", icon: Plane },
                    { time: "07:30", description: "Arrive Amsterdam — check into accommodation", icon: Bed },
                    { time: "Afternoon", description: "Explore Jordaan neighbourhood & canals", icon: Globe },
                ],
            },
            {
                day: "Day 2: Museums & Canal Tour",
                date: "September 27, 2025",
                activities: [
                    { time: "Morning", description: "Rijksmuseum & Van Gogh Museum", icon: Landmark },
                    { time: "Afternoon", description: "Canal boat tour through Amsterdam's waterways", icon: Ship },
                    { time: "Evening", description: "Dinner at a canal-side restaurant", icon: Utensils },
                ],
            },
            {
                day: "Day 3: Monastery Hotel & Anne Frank",
                date: "September 28, 2025",
                activities: [
                    { time: "Morning", description: "Check into Monastery Hotel De Soete Moeder", icon: Bed },
                    { time: "Afternoon", description: "Anne Frank House visit", icon: Landmark },
                    { time: "Evening", description: "Evening walk through Vondelpark", icon: Globe },
                ],
            },
            {
                day: "Day 4: Cycling & Markets",
                date: "September 29, 2025",
                activities: [
                    { time: "Morning", description: "Rent bikes — cycle through the city and Vondelpark", icon: Globe },
                    { time: "Afternoon", description: "Albert Cuyp Market & Heineken Experience", icon: ShoppingBag },
                ],
            },
            {
                day: "Day 5: Departure",
                date: "September 30, 2025",
                activities: [
                    { time: "08:20", description: "Fly from Amsterdam back to Berlin", icon: Plane },
                    { time: "09:35", description: "Arrive Berlin", icon: Plane },
                ],
            },
        ],
    },

    // ─────────────────────────────────────────────
    // 8. DUBAI
    // ─────────────────────────────────────────────
    {
        id: 8,
        slug: "dubai-desert-city-fusion",
        title: "Dubai Desert & City Fusion",
        location: "Dubai, UAE",
        duration: "8 Days",
        price: "€TBD",
        difficulty: "Easy",
        season: "November",
        image: cityImg,
        description:
            "From soaring skyscrapers to vast deserts, experience the dynamic contrasts of Dubai — thrilling activities, iconic landmarks, and cultural adventures across one of the world's most dazzling cities.",
        highlights: [
            "Sky Observatory panoramic city views",
            "Jet Ski at Kite Beach",
            "Full day at Atlantis, The Palm",
            "Burj Khalifa 125th floor visit",
            "Evening Marina Yacht tour",
            "Arabian Desert Safari",
            "Museum of the Future, Miracle Garden & Global Village",
        ],
        dailyPlan: [
            {
                day: "Day 1: Departure from Berlin",
                date: "November 20, 2025",
                activities: [
                    { time: "21:25", description: "Depart Berlin on Eurowings to Dubai", icon: Plane },
                ],
            },
            {
                day: "Day 2: Arrival & Sky Observatory",
                date: "November 21, 2025",
                activities: [
                    { time: "07:00", description: "Arrive Dubai — check into Gevora Hotel", icon: Bed },
                    { time: "13:00", description: "Sky Observatory for panoramic city views", icon: Landmark },
                    { time: "16:45", description: "Jet Ski adventure at Kite Beach", icon: Waves },
                ],
            },
            {
                day: "Day 3: Atlantis, The Palm",
                date: "November 22, 2025",
                activities: [
                    { time: "07:30", description: "Full day at Atlantis Aquaventure Waterpark, The Palm", icon: Palmtree },
                ],
            },
            {
                day: "Day 4: Check-in City Premier & Photoshoot",
                date: "November 23, 2025",
                activities: [
                    { time: "Morning", description: "Check into City Premier Hotel", icon: Bed },
                    { time: "14:30", description: "Photoshoot at a scenic Dubai location", icon: Camera },
                ],
            },
            {
                day: "Day 5: Burj Khalifa, Dubai Mall & Marina Yacht",
                date: "November 24, 2025",
                activities: [
                    { time: "08:30", description: "Visit Burj Khalifa 125th floor", icon: Building2 },
                    { time: "12:30", description: "Explore the Dubai Mall", icon: ShoppingBag },
                    { time: "16:30", description: "Experience the Dubai Frame", icon: Landmark },
                    { time: "20:00", description: "Evening Marina Yacht tour", icon: Ship },
                ],
            },
            {
                day: "Day 6: Gold Souk & Desert Safari",
                date: "November 25, 2025",
                activities: [
                    { time: "Morning", description: "Wander through the Gold Souk", icon: ShoppingBag },
                    { time: "Afternoon", description: "Thrilling Arabian Desert Safari with dune bashing & Bedouin camp dinner", icon: Mountain },
                ],
            },
            {
                day: "Day 7: Museum of the Future, Miracle Garden & Global Village",
                date: "November 26, 2025",
                activities: [
                    { time: "Morning", description: "Visit the Museum of the Future", icon: Building2 },
                    { time: "Afternoon", description: "Stroll through the Dubai Miracle Garden", icon: Flower2 },
                    { time: "Evening", description: "Explore Global Village", icon: Globe },
                ],
            },
            {
                day: "Day 8: Shopping Day & Departure to India",
                date: "November 27, 2025",
                activities: [
                    { time: "Morning", description: "Shopping Day / Optional Abu Dhabi visit", icon: ShoppingBag },
                ],
            },
        ],
    },

    // ─────────────────────────────────────────────
    // 9. INDIA TRIP
    // ─────────────────────────────────────────────
    {
        id: 9,
        slug: "india-family-adventure",
        title: "India — Family & Festive Adventure",
        location: "Patna · Kolkata · Digha · Mandarmani · Jabalpur · Hyderabad, India",
        duration: "31 Days",
        price: "€TBD",
        difficulty: "Moderate",
        season: "November - December",
        image: cityImg,
        description:
            "A month-long immersive journey through India — from the beaches of Digha and Mandarmani, to the wildlife of Jabalpur, festive celebrations in Patna, and a grand finale in Hyderabad before flying home.",
        highlights: [
            "Beach escape to Digha & Mandarmani",
            "Explore Kolkata — the City of Joy",
            "Patna family time and local festivals",
            "Jabalpur — gateway to Kanha & Bandhavgarh National Parks",
            "Hyderabad — Charminar, Golconda Fort & biryani",
            "Scenic overnight train journeys across India",
            "Fly home from Hyderabad on Qatar Airways",
        ],
        dailyPlan: [
            {
                day: "Day 1: Dubai → Patna",
                date: "November 28, 2025",
                activities: [
                    { time: "11:20", description: "Fly from Dubai to Patna on IndiGo", icon: Plane },
                    { time: "20:45", description: "Arrive Patna", icon: Bed },
                ],
            },
            {
                day: "Day 2: Patna → Kolkata → Digha",
                date: "November 29, 2025",
                activities: [
                    { time: "08:00", description: "Train from Patna to Kolkata", icon: Train },
                    { time: "14:35", description: "Arrive Kolkata", icon: Train },
                    { time: "15:00", description: "Train from Kolkata to Digha", icon: Train },
                    { time: "17:25", description: "Arrive Digha — coastal town on Bay of Bengal", icon: Waves },
                    { time: "Evening", description: "Continue to Mandarmani beach", icon: Waves },
                ],
            },
            {
                day: "Day 3: Mandarmani → Kolkata",
                date: "November 30, 2025",
                activities: [
                    { time: "Morning", description: "Relax at Mandarmani beach", icon: Waves },
                    { time: "Afternoon", description: "Travel back to Kolkata", icon: Train },
                ],
            },
            {
                day: "Day 4: Kolkata Exploration",
                date: "December 1, 2025",
                activities: [
                    { time: "Full Day", description: "Explore Kolkata — Victoria Memorial, Howrah Bridge, Park Street", icon: Landmark },
                    { time: "21:55", description: "Overnight train from Shalimar to Patna", icon: Train },
                ],
            },
            {
                day: "Day 5: Arrive Patna",
                date: "December 2, 2025",
                activities: [
                    { time: "06:15", description: "Arrive Patna — spend time with family", icon: Bed },
                ],
            },
            {
                day: "Days 6–10: Patna Family Time",
                date: "December 3–7, 2025",
                activities: [
                    { time: "Full Days", description: "Family time in Patna — local sightseeing, festivals & food", icon: Globe },
                ],
            },
            {
                day: "Day 11: Patna → Jabalpur (overnight train)",
                date: "December 8, 2025",
                activities: [
                    { time: "20:15", description: "Overnight train from Patna to Jabalpur", icon: Train },
                ],
            },
            {
                day: "Day 12: Arrive Jabalpur",
                date: "December 9, 2025",
                activities: [
                    { time: "07:30", description: "Arrive Jabalpur", icon: Bed },
                    { time: "Afternoon", description: "Explore Jabalpur — Marble Rocks, Dhuandhar Falls", icon: Landmark },
                ],
            },
            {
                day: "Days 13–22: Jabalpur & Patna",
                date: "December 10–21, 2025",
                activities: [
                    { time: "Full Days", description: "Split time between Jabalpur and Patna — wildlife safaris, Narmada River, family gatherings", icon: Mountain },
                ],
            },
            {
                day: "Day 23: Jabalpur → Hyderabad",
                date: "December 24, 2025",
                activities: [
                    { time: "Full Day", description: "Fly from Jabalpur to Hyderabad", icon: Plane },
                    { time: "Evening", description: "Arrive Hyderabad — check in and rest", icon: Bed },
                ],
            },
            {
                day: "Day 24: Hyderabad — Old City",
                date: "December 25, 2025",
                activities: [
                    { time: "Morning", description: "Charminar & Laad Bazaar", icon: Landmark },
                    { time: "Afternoon", description: "Golconda Fort exploration", icon: Landmark },
                    { time: "Evening", description: "Celebrate Christmas Day in Hyderabad", icon: Globe },
                ],
            },
            {
                day: "Day 25: Hyderabad — Modern City",
                date: "December 26, 2025",
                activities: [
                    { time: "Morning", description: "HITEC City & Hussain Sagar Lake", icon: Globe },
                    { time: "Afternoon", description: "Ramoji Film City or Birla Mandir", icon: Landmark },
                ],
            },
            {
                day: "Day 26: Hyderabad — Food & Culture",
                date: "December 27, 2025",
                activities: [
                    { time: "Full Day", description: "Hyderabad food trail — famous Hyderabadi biryani, haleem & irani chai", icon: Utensils },
                ],
            },
            {
                day: "Day 27: Fly Home to Berlin",
                date: "December 28, 2025",
                activities: [
                    { time: "Morning", description: "Last morning in Hyderabad", icon: Globe },
                    { time: "Afternoon", description: "Fly from Hyderabad to Berlin on Qatar Airways", icon: Plane },
                ],
            },
        ],
    },

    // ─────────────────────────────────────────────
    // 10. ROMANIA (NEW YEAR)
    // ─────────────────────────────────────────────
    {
        id: 10,
        slug: "bucharest-new-year",
        title: "Bucharest New Year",
        location: "Bucharest, Romania",
        duration: "3 Days",
        price: "€TBD",
        difficulty: "Easy",
        season: "December - January",
        image: cityImg,
        description:
            "Ring in the New Year in the vibrant Romanian capital — explore Bucharest's grand boulevards, stunning communist-era architecture, lively old town and festive New Year celebrations.",
        highlights: [
            "New Year's Eve celebrations in Bucharest",
            "Palace of Parliament — world's heaviest building",
            "Old Town (Lipscani) nightlife & restaurants",
            "Herastrau Park & Village Museum",
            "Budget-friendly city break from Berlin",
        ],
        dailyPlan: [
            {
                day: "Day 1: Fly to Bucharest",
                date: "December 30, 2025",
                activities: [
                    { time: "16:30", description: "Fly from Berlin to Bucharest on Wizz Air", icon: Plane },
                    { time: "19:40", description: "Arrive Bucharest — check in", icon: Bed },
                    { time: "Evening", description: "Evening stroll in Old Town (Lipscani)", icon: Globe },
                ],
            },
            {
                day: "Day 2: Bucharest & New Year's Eve",
                date: "December 31, 2025",
                activities: [
                    { time: "Morning", description: "Palace of Parliament tour", icon: Landmark },
                    { time: "Afternoon", description: "Herastrau Park & Village Museum", icon: Globe },
                    { time: "Evening", description: "New Year's Eve celebrations in Bucharest city centre", icon: Globe },
                ],
            },
            {
                day: "Day 3: New Year's Day & Departure",
                date: "January 1, 2026",
                activities: [
                    { time: "Morning", description: "New Year's Day brunch in Old Town", icon: Utensils },
                    { time: "21:32", description: "Fly from Bucharest back to Berlin on Ryanair", icon: Plane },
                    { time: "22:45", description: "Arrive Berlin", icon: Plane },
                ],
            },
        ],
    },
];