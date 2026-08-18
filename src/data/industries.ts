export interface IndustryItem {
  id: string;
  title: string;
  shortDesc: string;
  challenges: string;
  solutions: string[];
  keyServices: string[];
  image: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: "property-management",
    title: "Property Management Companies",
    shortDesc: "Single-point coordination for multi-tenant office buildings, industrial parks, and commercial retail portfolios.",
    challenges: "Managing multiple third-party vendors across several properties creates invoice bloat, inconsistent service quality, and administrative headaches for property managers.",
    solutions: [
      "One consolidated point of contact and unified billing across all properties",
      "Fast dispatch for tenant complaints, common area grime, or sudden turnovers",
      "Consistent quality control standards regardless of property location in Houston"
    ],
    keyServices: ["Commercial Pressure Washing", "Day Porter Services", "Commercial Janitorial", "Parking Lot Sweeping"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "general-contractors",
    title: "General Contractors & Builders",
    shortDesc: "Turnover-ready post-construction cleaning, exterior concrete washing, and final punch cleanup on strict schedules.",
    challenges: "Construction turnover dates are rigid, and project handoffs often suffer when last-minute cleaning crews miss deadlines, fail safety audits, or lack proper manpower.",
    solutions: [
      "Rigid adherence to milestone scheduling (Rough, Final, Touch-Up cleans)",
      "Strict compliance with job-site PPE, OSHA guidelines, and insurance requirements",
      "Full coverage from interior glass and floor detailing to exterior site cleanup"
    ],
    keyServices: ["Post-Construction Cleaning", "Commercial Pressure Washing", "Commercial Window Cleaning", "Concrete & Sidewalk Cleaning"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "apartment-communities",
    title: "Apartment Communities & Multi-Family",
    shortDesc: "Turnover cleaning, exterior breezeway washing, clubhouse janitorial, and parking area maintenance.",
    challenges: "High-volume turn cycles and tenant move-outs require quick turnaround times so units are ready for immediate re-leasing without losing days of rental revenue.",
    solutions: [
      "Fast-turn unit cleaning teams equipped with standardized turn checklists",
      "Scheduled breezeway, stairwell, and siding pressure washing",
      "Dumpster area sanitation and common amenity cleaning programs"
    ],
    keyServices: ["Apartment Turnover Cleaning", "Commercial Pressure Washing", "Exterior Building Cleaning", "Property Cleanouts"],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "commercial-real-estate",
    title: "Commercial Real Estate Owners & Landlords",
    shortDesc: "Asset preservation, tenant vacancy prep, and ongoing curb appeal enhancement to maximize lease rates.",
    challenges: "Vacant suites, dirty building exteriors, and stained parking areas degrade asset values and deter prospective commercial tenants during tours.",
    solutions: [
      "Broom-swept cleanouts of abandoned tenant spaces ready for show",
      "Exterior facade, window, and flatwork restoration to enhance property valuation",
      "Preventative maintenance programs that prolong asset lifespans"
    ],
    keyServices: ["Property Cleanouts", "Exterior Building Cleaning", "Commercial Window Cleaning", "Concrete & Sidewalk Cleaning"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "retail-shopping-centers",
    title: "Retail & Shopping Centers",
    shortDesc: "High-traffic sidewalk gum removal, parking lot power sweeping, glass cleaning, and trash portering.",
    challenges: "Heavy customer foot traffic produces food spills, discarded gum, overflowing trash receptacles, and dirty storefront glass that damages consumer perception.",
    solutions: [
      "Nightly or early morning parking lot sweeping and debris containment",
      "High-temperature sidewalk pressure washing for gum and oil stain eradication",
      "Reliable day porter support during peak shopping hours"
    ],
    keyServices: ["Parking Lot Cleaning & Sweeping", "Concrete & Sidewalk Cleaning", "Commercial Window Cleaning", "Day Porter Services"],
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "warehouses-industrial",
    title: "Warehouses & Industrial Facilities",
    shortDesc: "Heavy-duty loading dock washdowns, industrial floor scrubbing, pallet clearing, and warehouse turnover cleaning.",
    challenges: "Industrial sites accumulate heavy forklift tire marks, oil slicks, pallet debris, and loading dock grime that pose safety hazards and slow down logistics.",
    solutions: [
      "High-capacity industrial pressure washing and chemical degreasing",
      "Warehouse broom-sweep and floor scrubber service for lease turnover",
      "Large-scale junk, pallet, and racking cleanouts"
    ],
    keyServices: ["Commercial Pressure Washing", "Property Cleanouts", "Commercial Floor & Carpet Cleaning", "Parking Lot Cleaning & Sweeping"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "medical-professional-offices",
    title: "Medical & Professional Offices",
    shortDesc: "Sanitized clinical environments, spotless executive lobbies, and scheduled janitorial maintenance.",
    challenges: "Healthcare suites and professional office tenants demand stringent hygiene standards, pristine restrooms, and zero disruption during business hours.",
    solutions: [
      "EPA-registered hospital-grade disinfectant applications",
      "Nightly after-hours cleaning programs tailored to professional suites",
      "High-touch point sanitization (keypads, door pulls, counters)"
    ],
    keyServices: ["Commercial Janitorial Cleaning", "Commercial Floor & Carpet Cleaning", "Commercial Window Cleaning", "Day Porter Services"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "hotels-hospitality",
    title: "Hotels & Hospitality",
    shortDesc: "Porte-cochère pressure washing, entrance window cleaning, banquet carpet extraction, and exterior maintenance.",
    challenges: "Guest satisfaction scores directly correlate with the visual cleanliness of entryways, drop-off lanes, dining areas, and guest-facing public spaces.",
    solutions: [
      "Spotless drop-off and valet area pressure washing with oil stain removal",
      "Crystal-clear lobby glass and architectural facade cleaning",
      "Emergency spill and high-traffic carpet restorative cleaning"
    ],
    keyServices: ["Commercial Pressure Washing", "Exterior Building Cleaning", "Commercial Floor & Carpet Cleaning", "Commercial Window Cleaning"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "schools-churches",
    title: "Schools & Churches",
    shortDesc: "Sanitizing multi-purpose halls, sanctuary carpet cleaning, playground washdowns, and weekend event cleanup.",
    challenges: "Large congregation spaces and school facilities need thorough cleaning between weekly services, events, and school sessions within tight windows.",
    solutions: [
      "Deep extraction cleaning for sanctuaries, auditoriums, and classrooms",
      "Exterior walkway, courtyard, and playground pressure washing",
      "Flexible weekend and evening operational scheduling"
    ],
    keyServices: ["Commercial Janitorial Cleaning", "Commercial Floor & Carpet Cleaning", "Concrete & Sidewalk Cleaning", "Grounds & Exterior Property Maintenance"],
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "hoas-community-associations",
    title: "HOAs & Community Associations",
    shortDesc: "Common area amenity pressure washing, clubhouse cleaning, monument sign cleaning, and perimeter maintenance.",
    challenges: "HOA boards and community managers need reliable upkeep for shared assets like pool decks, perimeter walls, and monuments without exceeding maintenance budgets.",
    solutions: [
      "Pool deck, tennis court, and pavilion pressure washing with mildew treatment",
      "Subdivision entry monument and perimeter masonry wall cleaning",
      "Clubhouse deep cleaning and seasonal maintenance programs"
    ],
    keyServices: ["Commercial Pressure Washing", "Exterior Building Cleaning", "Grounds & Exterior Property Maintenance", "Concrete & Sidewalk Cleaning"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
  }
];
