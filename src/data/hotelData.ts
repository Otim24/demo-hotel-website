export interface Room {
  id: string;
  name: string;
  category: 'suite' | 'villa' | 'executive';
  tagline: string;
  description: string;
  sizeSqM: number;
  occupancy: string;
  bed: string;
  view: string;
  pricePerNight: number;
  featured: boolean;
  heroImage: string;
  gallery: string[];
  amenities: string[];
  highlights: { label: string; value: string }[];
  floorplan: {
    zones: { name: string; dimension: string; description: string }[];
  };
}

export interface DiningVenue {
  id: string;
  name: string;
  subtitle: string;
  type: string;
  hours: string;
  atmosphere: string;
  description: string;
  image: string;
  highlights: string[];
  sampleMenu: {
    category: string;
    items: { title: string; notes: string; price: string }[];
  }[];
}

export interface HotelAmenity {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  badge: string;
  hours: string;
  highlights: string[];
}

export interface EventSpace {
  id: string;
  name: string;
  capacityCocktail: number;
  capacityBanquet: number;
  capacityTheater: number;
  areaSqM: number;
  description: string;
  image: string;
  features: string[];
}

export const HOTEL_INFO = {
  name: 'The Northern',
  subtitle: 'Grand Hotel, Gulu',
  tagline: 'Refined modern luxury and quiet hospitality in Northern Uganda.',
  isDemo: true,
  demoNotice: 'Demonstration Purpose Only: Conceptual hospitality design and digital prototype.',
  location: {
    city: 'Gulu City',
    region: 'Northern Province, Uganda',
    address: 'Plot 14 Churchill Way, Gulu Central, Northern Uganda',
    coordinates: '2.7746° N, 32.2990° E',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127503.22097067885!2d32.23171801289196!3d2.774577881029278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a646c26a4b13%3A0xb304b5f81f185ef3!2sGulu%2C%20Uganda!5e0!3m2!1sen!2sug!4v1700000000000!5m2!1sen!2sug',
    elevation: '1,100 m above sea level',
    access: [
      { mode: 'Gulu Airport Transfer', detail: '10 minutes private chauffeured transfer from Gulu Airport' },
      { mode: 'Kampala Highway', detail: 'Direct access via Karuma Parkway connecting central Uganda to Gulu City' },
      { mode: 'Private Estate Helipad', detail: 'On-site helipad with secure arrival clearance for VIP delegations' },
    ],
  },
  contact: {
    reservationsPhone: '+256 784 811 929',
    conciergePhone: '+256 784 811 929',
    email: 'reservations@thenorthern-hotel.com',
    conciergeEmail: 'concierge@thenorthern-hotel.com',
    checkInTime: '14:00',
    checkOutTime: '11:00',
  },
};

export const ROOMS: Room[] = [
  {
    id: 'savanna-presidential-sanctuary',
    name: 'Presidential Penthouse Suite',
    category: 'suite',
    tagline: 'Private infinity plunge pool with panoramic city and northern horizon views.',
    description:
      'Spanning 240 square meters of secluded luxury on the top floor of the hotel. Featuring hand-carved local teak accents, a dual-sided stone fireplace, an expansive open-air mahogany terrace, and dedicated around-the-clock private butler service.',
    sizeSqM: 240,
    occupancy: 'Up to 4 Guests',
    bed: 'King Grand Master & Optional Twin Suite',
    view: 'Unobstructed Northern Horizon & Skyline',
    pricePerNight: 1250,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    ],
    amenities: [
      'Private Heated Infinity Plunge Pool',
      'Dedicated 24-Hour Butler & Sommelier Service',
      'Handcrafted Terrazzo Soaking Tub & Rain Shower',
      'Curated Artisanal In-Suite Wine & Spirits Cellar',
      'Private Sunrise Breakfast Service on Deck',
      'Fiber Optic High-Speed Wireless Network',
    ],
    highlights: [
      { label: 'Interior Space', value: '240 sqm / 2,580 sqft' },
      { label: 'Outdoor Living', value: '110 sqm Private Deck' },
      { label: 'Service Level', value: 'Bespoke Private Butler' },
      { label: 'Climate', value: 'Whisper-Quiet Multi-Zone Control' },
    ],
    floorplan: {
      zones: [
        { name: 'Grand Master Suite', dimension: '65 sqm', description: 'Sculpted king bed framed by floor-to-ceiling glass and dual walk-in dressing parlors.' },
        { name: 'Living Salon & Fireplace', dimension: '70 sqm', description: 'Central stone fireplace, library corner, and hand-woven silk seating.' },
        { name: 'Terrazzo Spa Bath', dimension: '35 sqm', description: 'Freestanding circular stone bath, twin basalt vanities, and rain chamber.' },
        { name: 'Panoramic Veranda & Plunge Pool', dimension: '110 sqm', description: 'Covered teak sundeck with heated stone plunge pool and sunset daybeds.' },
      ],
    },
  },
  {
    id: 'acholi-heritage-villa',
    name: 'Acholi Garden Villa',
    category: 'villa',
    tagline: 'Contemporary architectural homage to indigenous craftsmanship and volcanic stone.',
    description:
      'Constructed with indigenous quarry stones and hand-woven thatch accents, the Acholi Garden Villa blends timeless regional vernacular with crisp modern hospitality. Includes an enclosed courtyard garden, sunken daybeds, and floor-to-ceiling glass that folds away into lush grounds.',
    sizeSqM: 175,
    occupancy: '2 to 3 Guests',
    bed: 'Sculpted Teak California King',
    view: 'Private Garden & Courtyard Grounds',
    pricePerNight: 850,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    ],
    amenities: [
      'Enclosed Courtyard with Outdoor Rainfall Bath',
      'Custom African Mahogany Furnishings',
      'Signature Botanical Bath Amenities by Local Herbalists',
      'Espresso Bar & Northern Botanical Tea Selection',
      'Complimentary Hotel Chauffeur Service',
      'Twice-Daily Housekeeping with Evening Turndown',
    ],
    highlights: [
      { label: 'Interior Space', value: '175 sqm / 1,880 sqft' },
      { label: 'Courtyard', value: 'Private Enclosed Garden' },
      { label: 'Bath Experience', value: 'Freestanding Stone Tub' },
      { label: 'Entertainment', value: 'Acoustic Soundstage & Curated Library' },
    ],
    floorplan: {
      zones: [
        { name: 'Villa Master Chamber', dimension: '55 sqm', description: 'Understated luxury with handcrafted indigenous timber rafters and garden outlook.' },
        { name: 'Enclosed Garden Courtyard', dimension: '45 sqm', description: 'Private courtyard with volcanic stone fountain and outdoor rain shower.' },
        { name: 'En-Suite Basalt Bathroom', dimension: '30 sqm', description: 'Dual carved stone basins and floor-to-ceiling garden glazed doors.' },
        { name: 'Covered Veranda Lounge', dimension: '45 sqm', description: 'Deep outdoor dining table and cushioned daybeds overlooking courtyard grounds.' },
      ],
    },
  },
  {
    id: 'executive-horizon-suite',
    name: 'Executive Horizon Suite',
    category: 'executive',
    tagline: 'Tailored for senior diplomats, leaders, and discerning business travelers.',
    description:
      'Designed for focus, rest, and private meetings. Features an ergonomic solid-oak executive study, secure encrypted communications, sound-insulated architectural glazing, and an elegant parlor for hosting intimate briefings or private dining.',
    sizeSqM: 120,
    occupancy: '2 Guests',
    bed: 'Plush Feather-Top Super King',
    view: 'Gulu City Skyline & Hills',
    pricePerNight: 580,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    ],
    amenities: [
      'Executive Study with Private Safe & Encrypted Fiber',
      'Seamless Video Conferencing Tech & Acoustic Paneling',
      'Italian Calacatta Marble Bathroom with Walk-In Shower',
      'Full Butler Pressing & Wardrobe Concierge',
      'Access to The Northern Executive Club Lounge',
      'Complimentary Airport Chauffeur Transfer',
    ],
    highlights: [
      { label: 'Interior Space', value: '120 sqm / 1,290 sqft' },
      { label: 'Work Area', value: 'Private Executive Boardroom Desk' },
      { label: 'Club Privileges', value: 'Full Executive Lounge Access' },
      { label: 'Connectivity', value: 'Dedicated 500Mbps Fiber Port' },
    ],
    floorplan: {
      zones: [
        { name: 'Executive Master Quarters', dimension: '48 sqm', description: 'Acoustically isolated sleeping chamber with walk-in security safe.' },
        { name: 'Private Briefing Salon', dimension: '38 sqm', description: 'Meeting lounge with encrypted video conference portal and bar cabinet.' },
        { name: 'Calacatta Marble Bath', dimension: '24 sqm', description: 'Dual marble vanities, rainfall shower stall, and luxury grooming station.' },
        { name: 'City Horizon Balcony', dimension: '18 sqm', description: 'Private balcony facing north-west with panoramic skyline views.' },
      ],
    },
  },
  {
    id: 'terrace-deluxe-room',
    name: 'Terrace Deluxe Room',
    category: 'suite',
    tagline: 'Effortless serenity with private balcony overlooking the hotel grounds.',
    description:
      'An intimate sanctuary filled with soft natural light, tactile linen drapes, and earth-toned ceramics. Guests enjoy an expansive private covered terrace, deep goose-down bedding, and handcrafted furniture sourced from Northern artisans.',
    sizeSqM: 85,
    occupancy: '2 Guests',
    bed: 'King Bed or Twin Beds',
    view: 'Pool Gardens & Courtyard',
    pricePerNight: 390,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    ],
    amenities: [
      'Private Covered Terrace with Deep Daybed',
      'Walk-In Dressing Room with Bespoke Cabinetry',
      'Twin Vanities & Rainfall Shower in Basalt Stone',
      'Organic Artisanal Teas & Single Origin Arabica',
      'Smart Climate & Curtained Lighting Moods',
      'Nightly Aromatherapy Turndown Service',
    ],
    highlights: [
      { label: 'Interior Space', value: '85 sqm / 915 sqft' },
      { label: 'Terrace', value: '25 sqm Private Veranda' },
      { label: 'Bed Options', value: 'King or Double Twin' },
      { label: 'Location', value: 'Quiet Wing West' },
    ],
    floorplan: {
      zones: [
        { name: 'Deluxe Sleeping Chamber', dimension: '42 sqm', description: 'Crisp Egyptian cotton linens and bespoke timber nightstands.' },
        { name: 'Basalt Stone Bathroom', dimension: '18 sqm', description: 'Stone walk-in rainfall shower and botanical bath products.' },
        { name: 'Private Shaded Veranda', dimension: '25 sqm', description: 'Teak daybed and outdoor breakfast table overlooking the pool gardens.' },
      ],
    },
  },
];

export const DINING_VENUES: DiningVenue[] = [
  {
    id: 'the-savanna-hearth',
    name: 'The Hearth Restaurant',
    subtitle: 'Fine Dining & Regional Culinary Excellence',
    type: 'Signature Restaurant',
    hours: 'Breakfast: 06:30 - 10:30 | Dinner: 18:30 - 22:30',
    atmosphere: 'Intimate candlelit dining beneath soaring cathedral timber ceilings',
    description:
      'Showcasing heirloom grains, pasture-raised beef, fresh river fish, and locally sourced herbs prepared over wood-fired embers. Our executive chef crafts a progressive tasting menu paired with exceptional vintage wines.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
    highlights: [
      'Six-Course Tasting Menu Available Nightly',
      'Sommelier Selection of Over 300 Global Bottles',
      'Open Fire Charcoal Kitchen & Private Chef Table',
    ],
    sampleMenu: [
      {
        category: 'First Courses',
        items: [
          {
            title: 'Smoked Nile Perch Carpaccio',
            notes: 'Cold-pressed simsim oil, pickled wild shallots, finger lime pearls, cassava crisp',
            price: '$26',
          },
          {
            title: 'Northern Heritage Millet Veloute',
            notes: 'Roasted forest mushrooms, truffle butter, charred leek oil, toasted seeds',
            price: '$22',
          },
        ],
      },
      {
        category: 'Main Courses',
        items: [
          {
            title: 'Wood-Fired Grass-Fed Tenderloin',
            notes: 'Smoked sweet potato puree, marrow reduction, baby charred greens, mustard seed jus',
            price: '$48',
          },
          {
            title: 'Roasted Guinea Fowl with Groundnut Crust',
            notes: 'Steamed matooke duxelles, braised bitter greens, spiced pomegranate glaze',
            price: '$42',
          },
        ],
      },
      {
        category: 'Confections',
        items: [
          {
            title: 'Dark Forest Cocoa Tart',
            notes: 'Cardamom salted caramel, wild honeycomb gelato, roasted coffee nibs',
            price: '$18',
          },
        ],
      },
    ],
  },
  {
    id: 'churchill-terrace-bar',
    name: 'Churchill Terrace & Bar',
    subtitle: 'Sundowners, Single Malts & Bespoke Cocktails',
    type: 'Cocktail Lounge & Open-Air Veranda',
    hours: '12:00 - 00:00 Daily',
    atmosphere: 'Sunken velvet banquettes, low teak tables, fire pits under the stars',
    description:
      'Perched high over the hotel western gardens to capture northern sunsets. Enjoy handcrafted infusions made with indigenous botanicals, rare Japanese and Scottish single malts, and small sharing plates.',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=80',
    highlights: [
      'Sunset Aperitivo Hour with Live Acoustic Music',
      'Curated Humidor with Hand-Rolled Cigars',
      'Artisanal Negronis Infused with Local Tamarind & Hibiscus',
    ],
    sampleMenu: [
      {
        category: 'Signature Libations',
        items: [
          {
            title: 'The Northern Ember',
            notes: 'Peated malt, charred rosemary, local wild honey syrup, aromatic bitters',
            price: '$19',
          },
          {
            title: 'Gulu Twilight',
            notes: 'Dry gin, northern hibiscus cordial, fresh yuzu, sparkling wine float',
            price: '$17',
          },
        ],
      },
      {
        category: 'Lounge Plates',
        items: [
          {
            title: 'Spiced Lamb Brochettes',
            notes: 'Charred onion salsa, herb garlic flatbread, minted goat yoghurt',
            price: '$24',
          },
        ],
      },
    ],
  },
  {
    id: 'the-pool-pavilion',
    name: 'The Pool Pavilion',
    subtitle: 'Light Fare, Pressed Botanicals & Daybeds',
    type: 'Al Fresco Oasis',
    hours: '08:00 - 19:00 Daily',
    atmosphere: 'Breezy white linen shade, water reflections, quiet birdsong',
    description:
      'Adjacent to the 30-meter horizon pool, serving chilled cold-pressed juices, organic salads, wood-oven flatbreads, and refreshing sorbets directly to your lounger.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80',
    highlights: [
      'Poolside Service with Complimentary Mineral Water & Cooling Spritzers',
      'Artisanal Fresh Fruit Smoothies & Coconut Refreshers',
    ],
    sampleMenu: [
      {
        category: 'Light Bites',
        items: [
          {
            title: 'Chilled Watermelon & Goat Feta Salad',
            notes: 'Wild mint, aged balsamic reduction, roasted pumpkin seeds',
            price: '$18',
          },
          {
            title: 'Grilled King Prawn Skewers',
            notes: 'Kaffir lime butter, avocado cilantro dip, cassava crisps',
            price: '$28',
          },
        ],
      },
    ],
  },
];

export const HOTEL_AMENITIES: HotelAmenity[] = [
  {
    id: 'horizon-swimming-pool',
    title: '30-Meter Infinity Horizon Pool',
    subtitle: 'Heated waters, private cabanas, and sun terraces',
    category: 'Wellness & Leisure',
    description:
      'An expansive heated outdoor lap and leisure pool lined with basalt stone and surrounded by private cabanas, fragrant frangipani, and full poolside dining service.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80',
    badge: 'Signature Feature',
    hours: '06:00 - 21:00 Daily',
    highlights: [
      'Temperature Controlled Heated Water',
      'Private Cushioned Daybed Cabanas with Curtains',
      'Dedicated Poolside Steward Service',
      'Complimentary Sun Protection & Chilled Botanicals',
    ],
  },
  {
    id: 'aswa-wellness-spa',
    title: 'The Aswa Holistic Wellness Spa',
    subtitle: 'Therapeutic massage, herbal hydrotherapy, and steam suites',
    category: 'Spa & Recovery',
    description:
      'A sanctuary dedicated to rejuvenation and physical restoration. Features five private treatment suites, granite soaking baths, eucalyptus steam rooms, and botanical treatments.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80',
    badge: 'Holistic Spa',
    hours: '08:00 - 20:00 Daily',
    highlights: [
      'Five Individual & Couple Treatment Suites',
      'Heated Basalt Stone Soaking Baths',
      'Swedish, Deep Tissue & Aromatherapy Massage',
      'Herbal Steam Rooms & Cedar Saunas',
    ],
  },
  {
    id: 'executive-fitness-center',
    title: 'Executive Fitness & Movement Studio',
    subtitle: 'Technogym cardio, free weights, and private yoga deck',
    category: 'Fitness & Health',
    description:
      'Equipped with state-of-the-art Italian Technogym machinery, panoramic glass overlooking landscaped gardens, Olympic free weights, and personal training upon request.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80',
    badge: '24/7 Access',
    hours: 'Open 24 Hours for Hotel Residents',
    highlights: [
      'Technogym Connected Treadmills & Ellipticals',
      'Free Weight Zone with Dumbbells & Olympic Benches',
      'Sunrise Yoga Deck with Complimentary Mats',
      'Chilled Towels, Fresh Fruit & Electrolyte Station',
    ],
  },
  {
    id: 'private-executive-lounge',
    title: 'The Northern Club Lounge & Library',
    subtitle: 'Quiet meeting parlor, private bar, and concierge office',
    category: 'Business & Privilege',
    description:
      'A reserved club salon for suite guests and executive delegates, offering quiet meeting areas, high-speed encrypted Wi-Fi, afternoon high tea, and evening digestifs.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    badge: 'Executive Privilege',
    hours: '07:00 - 23:00 Daily',
    highlights: [
      'Dedicated Executive Concierge & Meeting Assistance',
      'Complimentary Afternoon Tea & Canapés',
      'Private High-Definition Video Conference Nook',
      'Selection of International Newspapers & Literature',
    ],
  },
];

export const EVENT_SPACES: EventSpace[] = [
  {
    id: 'the-grand-karuma-ballroom',
    name: 'The Grand Karuma Ballroom',
    capacityCocktail: 350,
    capacityBanquet: 240,
    capacityTheater: 300,
    areaSqM: 420,
    description:
      'A pillarless architectural marvel featuring 7-meter ceilings, acoustic wood baffles, private VIP holding suites, and dedicated vehicular access for summits, dignitary banquets, and grand celebrations.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Automated 4K Laser Projection & Cinema Sound',
      'Simultaneous Translation Booths for International Delegations',
      'Dedicated Executive Banquet Kitchen',
      'Direct Private Driveway & Secure VIP Entry',
    ],
  },
  {
    id: 'the-acholi-boardroom',
    name: 'The Acholi Executive Boardroom',
    capacityCocktail: 35,
    capacityBanquet: 24,
    capacityTheater: 30,
    areaSqM: 95,
    description:
      'Fitted with a continuous 20-seat solid teak boardroom table, ergonomic leather seating, high-security encrypted video conferencing, and an adjacent private dining parlor.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Ultra-Wide 105-inch Dual Interactive Displays',
      'Studio Quality Ceiling Microphone Array',
      'Dedicated Barista & Executive Refreshment Station',
      'Soundproofed Double-Glazed Wall Construction',
    ],
  },
  {
    id: 'the-sunken-pavilion-gardens',
    name: 'The Sunken Pavilion Gardens',
    capacityCocktail: 500,
    capacityBanquet: 350,
    capacityTheater: 400,
    areaSqM: 1200,
    description:
      'Lush manicured lawn flanked by royal palms, indigenous acacia trees, and ambient architectural water features. An unrivaled venue for twilight wedding ceremonies and outdoor corporate galas.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Underground High-Capacity Power & Audio Infrastructure',
      'Built-In Atmospheric Landscape Lighting Grid',
      'Full Marquee & High-Peak Stretched Canopy Provision',
      'Private Garden Restroom Pavilions',
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'The Northern sets a formidable standard for luxury hotel hospitality in East Africa. The precision of the butler service, the architectural restraint, and the calm of the executive suites create an unforgettable stay.',
    author: 'Ambassador Marcus Vance',
    role: 'Diplomatic Mission Chief',
    location: 'Geneva',
  },
  {
    quote:
      'Not merely a luxury hotel, but a dignified cultural landmark. Dinner at The Hearth and the tranquility of the garden villa made our stay seamless in every respect.',
    author: 'Dr. Evelyn Atim',
    role: 'Conservation Architect & Heritage Fellow',
    location: 'Nairobi',
  },
  {
    quote:
      'Our summit required airtight security, flawless audiovisual setups, and executive comfort. The Northern team executed everything without a single compromise.',
    author: 'Arthur Henderson',
    role: 'Director of African Operations, Energy Holdings',
    location: 'London',
  },
];
