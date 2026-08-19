export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  scopeItems: string[];
  suitableFor: string[];
  iconName: string;
  cardImage: string;
  heroImage: string;
  altText: string;
  image: string; // backwards compatibility
  metaTitle: string;
  metaDescription: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "commercial-pressure-washing",
    slug: "commercial-pressure-washing-houston",
    title: "Commercial Pressure Washing",
    shortDescription: "High-volume hot and cold pressure washing for building facades, commercial concrete, loading docks, and exterior flatwork.",
    fullDescription: "PenRunners Commercial Services coordinates professional commercial pressure washing services across Greater Houston. We manage the equipment, water recovery compliance, and qualified crews needed to eliminate heavy grease, tire marks, mildew, algae, and grime from commercial properties without disrupting ongoing operations.",
    highlights: [
      "Hot-water & variable PSI pressure washing capabilities",
      "Environmental wastewater containment and recovery standards",
      "After-hours and weekend scheduling to avoid tenant traffic",
      "Uniformed, insured service crews with commercial-grade rigs"
    ],
    scopeItems: [
      "Building exterior walls, stucco, brick, and panels",
      "Dumpster enclosures and grease-pad washdowns",
      "Loading docks, warehouse ramps, and staging bays",
      "Breezeways, common corridors, and multi-family walkways",
      "Drive-thrus, gas station aprons, and convenience store pads"
    ],
    suitableFor: [
      "Shopping Centers & Strip Malls",
      "Industrial Parks & Warehouses",
      "Apartment Communities & HOAs",
      "Office Buildings & Corporate Campuses",
      "Parking Garages & Transportation Hubs"
    ],
    iconName: "Droplets",
    cardImage: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1600",
    altText: "Commercial pressure washing technician power washing concrete flatwork and commercial exterior surfaces",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1200",
    metaTitle: "Commercial Pressure Washing Houston | PenRunners Commercial Services",
    metaDescription: "Professional commercial pressure washing in Houston, Sugar Land, Katy & Harris County. Facades, flatwork, parking areas & loading docks. Request a commercial quote."
  },
  {
    id: "post-construction-cleaning",
    slug: "post-construction-cleaning-houston",
    title: "Post-Construction Cleaning",
    shortDescription: "Phased rough, final, and turnover cleaning for general contractors, tenant build-outs, and new commercial developments.",
    fullDescription: "Get your commercial construction projects inspection-ready and tenant-turnover ready on schedule. PenRunners Commercial Services coordinates experienced construction cleanup crews who work in lockstep with GC superintendents to handle debris removal, drywall dust eradication, paint overspray removal, and detailed final punch-list sanitization.",
    highlights: [
      "Structured 3-phase clean: Rough Clean, Final Clean, and Touch-Up / Punch Clean",
      "Strict job-site PPE and safety protocol compliance",
      "Rapid turnaround before owner walkthroughs and CO inspections",
      "Experience with retail build-outs, corporate interiors, and ground-up builds"
    ],
    scopeItems: [
      "Complete drywall dust and fine particulate removal from all surfaces",
      "Window sticker, adhesive, silicone, and paint overspray removal",
      "Polishing fixtures, hardware, doors, baseboards, and millwork",
      "Hard surface floor scrubbing, sealing, or carpet pre-occupancy vacuuming",
      "HVAC vent and return register vacuuming and exterior wipe-down"
    ],
    suitableFor: [
      "General Contractors & Construction Managers",
      "Commercial Interior Fit-Out Specialists",
      "Retail Rollout Contractors",
      "Commercial Real Estate Developers",
      "Healthcare & Educational Renovations"
    ],
    iconName: "HardHat",
    cardImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
    altText: "Pristine commercial interior handover following post-construction detailing and cleanup",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    metaTitle: "Post-Construction Cleaning Houston | Final Clean for General Contractors",
    metaDescription: "Reliable post-construction cleaning in Houston. Phased rough, final & punch-list cleaning for commercial GCs, retail build-outs & developers."
  },
  {
    id: "commercial-janitorial",
    slug: "commercial-cleaning-houston",
    title: "Commercial Janitorial Cleaning",
    shortDescription: "Customized daily, weekly, or recurring janitorial programs designed for commercial facilities, offices, and medical suites.",
    fullDescription: "Maintain a pristine, hygienic work environment that reflects the professionalism of your organization. PenRunners Commercial Services manages tailored janitorial contracts with strict quality control, transparent task tracking, and vetted cleaning teams for facilities of every scale.",
    highlights: [
      "Customized scope of work based on square footage and foot traffic",
      "Dedicated account management and quality assurance audits",
      "Green cleaning chemicals and hospital-grade EPA disinfectants",
      "Restroom hygiene programs with automated inventory management"
    ],
    scopeItems: [
      "Restroom sanitization, restocking, and touchpoint disinfection",
      "Trash & recycling removal with liner replacement",
      "Lobby, conference room, and cubicle dusting and surface wipe-down",
      "Hard floor sweeping, mopping, and vacuuming high-traffic carpet areas",
      "Breakroom cleaning, appliance exterior sanitization, and sink scrubbing"
    ],
    suitableFor: [
      "Corporate Headquarters & Professional Offices",
      "Medical Offices & Outpatient Clinics",
      "Financial Institutions & Law Firms",
      "Tech Centers & Coworking Facilities",
      "Schools, Daycares & Religious Facilities"
    ],
    iconName: "Building2",
    cardImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
    altText: "Spotless commercial corporate office space maintained by commercial janitorial cleaning services",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    metaTitle: "Commercial Janitorial Cleaning Houston | Office & Facility Cleaning",
    metaDescription: "Reliable commercial janitorial cleaning in Houston, Sugar Land, & Katy. Scheduled office cleaning, sanitation, and multi-tenant facility care."
  },
  {
    id: "exterior-building-cleaning",
    slug: "exterior-building-cleaning-houston",
    title: "Exterior Building Cleaning",
    shortDescription: "Gentle soft-washing and precision exterior cleaning for multi-story commercial facades, EIFS, metal panels, and masonry.",
    fullDescription: "Protect your commercial asset's architectural integrity and curb appeal. Harsh mildew, carbon fallout, and Houston humidity take a heavy toll on building envelopes. PenRunners coordinates specialized low-pressure soft washing and exterior surface cleaning using chemical agents that eliminate organic growth at the roots without damaging substrates.",
    highlights: [
      "Low-pressure chemical soft washing for delicate siding and EIFS",
      "Restores curb appeal and extends exterior paint and coating lifespans",
      "Capable of managing low-to-mid rise facades with aerial lifts",
      "Safe around landscape plantings, signage, and glass coatings"
    ],
    scopeItems: [
      "Stucco, EIFS, brick, stone, and split-face block cleaning",
      "Metal panel and architectural cladding restoration",
      "Awnings, entrance canopies, and architectural shade structures",
      "Soffits, fascias, parapets, and exterior gutter line washing",
      "Removal of spider webs, dirt dauber nests, and environmental staining"
    ],
    suitableFor: [
      "Corporate Office Parks",
      "Hotels & Hospitality Properties",
      "Apartment Complexes & Multi-Family Portfolios",
      "Auto Dealerships & Showrooms",
      "Retail Centers & Lifestyle Destinations"
    ],
    iconName: "Building",
    cardImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600",
    altText: "Clean modern commercial building facade and exterior architecture maintained with exterior building washing",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
    metaTitle: "Exterior Building Cleaning Houston | Commercial Facade Soft Washing",
    metaDescription: "Commercial exterior building cleaning and soft washing in Houston. Safe cleaning for stucco, EIFS, brick, and metal panels."
  },
  {
    id: "concrete-sidewalk-cleaning",
    slug: "concrete-sidewalk-cleaning-houston",
    title: "Concrete & Sidewalk Cleaning",
    shortDescription: "Rotary surface scrubbing and hot-water restoration for entryways, pedestrian walkways, plazas, and commercial curbs.",
    fullDescription: "Entry walkways and exterior concrete are the first touchpoint for your clients, tenants, and visitors. PenRunners Commercial Services coordinates rotary surface cleaning machines and high-temperature pressure washing to erase chewing gum, oil drips, drink spills, and deep-set soil from concrete surfaces quickly and uniformly.",
    highlights: [
      "Even, stripe-free rotary flat-surface scrubbing technology",
      "Targeted commercial gum, oil, and rust stain spot treatments",
      "Slip-and-fall hazard mitigation from algae and slippery mildew buildup",
      "High-speed execution with minimal interruption to business foot traffic"
    ],
    scopeItems: [
      "Main entrance plazas and storefront walkways",
      "Pedestrian sidewalks, handicap ramps, and ADA curb cutouts",
      "Outdoor dining patios and retail promenade concourses",
      "Stairwells, landings, and concrete breezeways",
      "Curbs, wheel stops, and drive-through lanes"
    ],
    suitableFor: [
      "Retail Centers & Strip Malls",
      "Medical Clinics & Hospital Entrances",
      "Restaurants & Fast-Casual Drive-Thrus",
      "Office Parks & Corporate Plazas",
      "Municipal & Institutional Facilities"
    ],
    iconName: "Footprints",
    cardImage: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=1600",
    altText: "Clean commercial concrete plaza, sidewalk walkway, and commercial building entrance",
    image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=1200",
    metaTitle: "Commercial Concrete & Sidewalk Cleaning Houston | PenRunners",
    metaDescription: "Professional concrete, sidewalk, and entryway surface washing in Houston. Rotary scrubbing, gum removal, and stain mitigation."
  },
  {
    id: "commercial-window-cleaning",
    slug: "commercial-window-cleaning-houston",
    title: "Commercial Window Cleaning",
    shortDescription: "Interior and exterior window washing for low to mid-rise commercial properties, storefronts, and multi-tenant offices.",
    fullDescription: "Crystal-clear windows improve interior natural lighting and project pride of ownership. PenRunners coordinates pure-water pole systems, traditional squeegee techniques, and lift-operated window cleaning for storefronts, office parks, and multi-story commercial facilities across Greater Houston.",
    highlights: [
      "Pure deionized water-fed pole systems for spot-free drying",
      "Interior and exterior glass, sills, mullions, and track detailing",
      "Scheduled recurring routes or on-demand project-based cleans",
      "Strict ladder, harness, and lift safety compliance"
    ],
    scopeItems: [
      "Storefront display glass and commercial glass doors",
      "Multi-story office window washing up to 4 stories",
      "Interior glass partition walls, conference room glass, and atriums",
      "Hard water deposit and mineral stain removal treatments",
      "Screen cleaning, frame wipe-downs, and sill brushing"
    ],
    suitableFor: [
      "Retail Centers & Auto Dealerships",
      "Corporate Campuses & Branch Offices",
      "Medical Suites & Outpatient Centers",
      "Hotels & Conference Venues",
      "Restaurants & Cafes"
    ],
    iconName: "Layers",
    cardImage: "https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&q=80&w=1600",
    altText: "Commercial window cleaning technician washing glass facade on modern corporate property",
    image: "https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&q=80&w=1200",
    metaTitle: "Commercial Window Cleaning Houston | Storefront & Office Glass",
    metaDescription: "Professional commercial window cleaning in Houston. Interior & exterior pure-water window washing for offices, retail, and commercial properties."
  },
  {
    id: "parking-lot-cleaning",
    slug: "parking-lot-cleaning-houston",
    title: "Parking Lot Cleaning & Sweeping",
    shortDescription: "Power sweeping, trash portering, and washdown maintenance for commercial parking garages, lots, and loading areas.",
    fullDescription: "A well-maintained parking lot deters pests, reduces liability, and maintains property value. PenRunners coordinates scheduled power sweeping, trash containment, perimeter portering, and power scrubbing for parking garages and surface lots of all dimensions.",
    highlights: [
      "Mechanical regenerative-air and vacuum sweeping trucks",
      "Hand-portering for islands, corners, planters, and fence lines",
      "Odor control and oil slick mitigation in parking garages",
      "Scheduled nightly or early morning passes to avoid vehicular congestion"
    ],
    scopeItems: [
      "Asphalt and concrete surface sweeping for sand, glass, and gravel",
      "Emptying exterior trash receptacles and replacing heavy-duty liners",
      "Blowing off sidewalks, entrance ramps, and loading docks",
      "Sweeping multi-level parking decks, ramps, and stairwells",
      "Removal of windblown litter from perimeters and detention basins"
    ],
    suitableFor: [
      "Shopping Centers & Big-Box Retailers",
      "Industrial Parks & Logistics Hubs",
      "Commercial Office Garages",
      "Apartment Communities & Student Housing",
      "Event Centers & Stadium Parking"
    ],
    iconName: "Truck",
    cardImage: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=1600",
    altText: "Clean, well-maintained commercial parking lot and business center exterior",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=1200",
    metaTitle: "Parking Lot Cleaning & Sweeping Houston | Commercial Grounds Care",
    metaDescription: "Reliable parking lot sweeping, garage scrubbing, and litter portering in Houston, Katy, Sugar Land, and Fort Bend County."
  },
  {
    id: "property-cleanouts",
    slug: "property-cleanout-houston",
    title: "Property Cleanouts & Trash-Outs",
    shortDescription: "Full-scale commercial cleanouts, tenant abandonment clearing, and bulk debris removal for property managers and owners.",
    fullDescription: "When tenants leave behind furniture, inventory, or debris, vacant space cannot generate revenue. PenRunners Commercial Services coordinates rapid property cleanouts, hauling, and broom-swept preparation so your leasing team or contractors can take over without delay.",
    highlights: [
      "Rapid dispatch for tenant abandonments, foreclosures, and lease turnovers",
      "Heavy machinery and roll-off dumpster coordination when needed",
      "Responsible disposal, recycling, and donation sorting where viable",
      "Broom-swept and vacuumed finish ready for contractor walkthrough"
    ],
    scopeItems: [
      "Commercial office furniture, cubicles, desks, and electronics haul-away",
      "Retail fixture, shelving, display case, and signage removal",
      "Warehouse pallet, racking, packaging, and abandoned cargo disposal",
      "Illegal dumping cleanup along alleys, fence lines, and loading docks",
      "Document destruction coordination and non-hazardous item clearing"
    ],
    suitableFor: [
      "Commercial Property Management Portfolios",
      "Commercial Real Estate Brokers & Landlords",
      "Warehouse Operators & Third-Party Logistics",
      "Bank-Owned / REO Commercial Properties",
      "Storage Facility Operators"
    ],
    iconName: "Trash2",
    cardImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600",
    altText: "Commercial warehouse floor and storage bays cleared and broom-swept after property cleanout",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    metaTitle: "Commercial Property Cleanouts Houston | Warehouse & Office Cleanout",
    metaDescription: "Fast commercial property cleanouts and tenant trash-outs in Houston. Clear office spaces, retail suites, and warehouses for immediate re-leasing."
  },
  {
    id: "apartment-turnover-cleaning",
    slug: "apartment-turnover-cleaning-houston",
    title: "Apartment & Rental Property Turnover Cleaning",
    shortDescription: "High-volume, rapid turnover cleaning for multifamily communities, student housing, and build-to-rent portfolios.",
    fullDescription: "Keep your occupancy rates high with fast, reliable unit turnover cleaning. PenRunners Commercial Services coordinates dedicated turnover cleaning crews capable of processing high volumes of apartment units during peak turn seasons with strict checklist compliance.",
    highlights: [
      "Standardized multi-point turnover cleaning checklists",
      "Same-day or next-day turnaround capabilities during peak turns",
      "Deep appliance degreasing (ovens, refrigerators, drip pans)",
      "Coordinated with maintenance teams for seamless lockbox access"
    ],
    scopeItems: [
      "Kitchen deep clean: stove interiors, range hoods, cabinets, and countertops",
      "Bathroom descaling, tile scrubbing, mirror polishing, and sanitization",
      "Baseboards, ceiling fans, light fixtures, switch plates, and door frames",
      "Closet shelving, patio doors, window tracks, and blinds detailing",
      "Carpet vacuuming and hard floor cleaning ready for new resident move-in"
    ],
    suitableFor: [
      "Multifamily Apartment Communities",
      "Property Management Companies",
      "Build-To-Rent Single Family Portfolios",
      "Student Housing Complexes",
      "Senior Living & Assisted Living Facilities"
    ],
    iconName: "Home",
    cardImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1600",
    altText: "Sparkling clean modern apartment interior and kitchen fixtures prepared for tenant turnover",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200",
    metaTitle: "Apartment Turnover Cleaning Houston | Multifamily Unit Turn Services",
    metaDescription: "High-quality apartment turnover cleaning in Houston for property managers. Fast unit turn cleans, deep kitchen/bath scrubbing, and move-in prep."
  },
  {
    id: "day-porter-services",
    slug: "day-porter-services-houston",
    title: "Day Porter Services",
    shortDescription: "Uniformed on-site cleaning and facility support during operating hours to keep high-traffic properties immaculate.",
    fullDescription: "High-traffic commercial properties require continuous maintenance throughout the business day. PenRunners coordinates dedicated, uniformed day porters who manage common area cleanliness, restroom monitoring, spill response, and continuous curb appeal enhancement while your property is open to the public.",
    highlights: [
      "Professional, background-checked, and uniformed on-site personnel",
      "Continuous restroom restocking, trash emptying, and spill response",
      "Proactive inspection of lobbies, corridors, and exterior perimeters",
      "Flexible part-time or full-time daily staffing schedules"
    ],
    scopeItems: [
      "Continuous monitoring and servicing of high-traffic public restrooms",
      "Emptying lobby, exterior, and food-court waste receptacles",
      "Immediate cleanup of beverage spills, wet floors, and hazards",
      "Disinfecting high-touch elevator buttons, handrails, and door handles",
      "Maintaining exterior main entrances, ash urns, and glass entry doors"
    ],
    suitableFor: [
      "Class-A Office Buildings",
      "Shopping Malls & Lifestyle Centers",
      "Medical Centers & Hospital Pavilions",
      "Corporate Campuses & Headquarters",
      "Convention Centers & High-Traffic Venues"
    ],
    iconName: "UserCheck",
    cardImage: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=1600",
    altText: "Impeccably maintained commercial building lobby and front facility entrance supported by day porter services",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=1200",
    metaTitle: "Day Porter Services Houston | On-Site Commercial Facility Support",
    metaDescription: "Professional day porter services in Houston. Uniformed daytime facility cleaners for office buildings, retail centers, and commercial campuses."
  },
  {
    id: "commercial-floor-carpet-cleaning",
    slug: "commercial-floor-carpet-cleaning-houston",
    title: "Commercial Floor & Carpet Cleaning",
    shortDescription: "Deep extraction carpet cleaning, tile and grout restoration, and VCT strip, seal, and wax programs.",
    fullDescription: "Extend the operational lifespan of your commercial flooring investments. From high-traffic carpet tiles in corporate office suites to greasy quarry tiles in commercial kitchens and polished VCT hallways, PenRunners coordinates commercial-grade equipment and specialized chemistries for restorative and recurring floor care.",
    highlights: [
      "Truck-mounted hot water extraction (steam cleaning) and low-moisture encapsulation",
      "Rotary hard floor stripping, multi-coat waxing, and high-speed burnishing",
      "High-pressure tile and grout deep extraction and sealant applications",
      "Fast drying times to minimize tenant workflow disruption"
    ],
    scopeItems: [
      "Commercial carpet stain removal, traffic lane restoration, and deodorization",
      "VCT stripping, wax removal, and 4-5 coat commercial polymer finish",
      "Ceramic, porcelain, and quarry tile grout line scrubbing and extraction",
      "Concrete cleaning, light densifying, and dustproofing coatings",
      "Preventative maintenance floor programs on scheduled cycles"
    ],
    suitableFor: [
      "Corporate Offices & Call Centers",
      "Schools, Universities & Daycare Centers",
      "Medical Clinics & Dental Offices",
      "Retail Stores & Showrooms",
      "Churches & Assembly Halls"
    ],
    iconName: "Sparkles",
    cardImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1600",
    altText: "Polished high-gloss commercial flooring and deep-cleaned commercial tiles",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
    metaTitle: "Commercial Floor & Carpet Cleaning Houston | VCT Wax & Tile Care",
    metaDescription: "Commercial carpet cleaning, VCT strip & wax, and tile & grout restoration in Houston, Sugar Land, Katy, and Harris County."
  },
  {
    id: "grounds-exterior-maintenance",
    slug: "grounds-exterior-maintenance-houston",
    title: "Grounds & Exterior Property Maintenance",
    shortDescription: "Coordinated exterior grounds upkeep, litter management, drain clearance, and exterior fixture maintenance.",
    fullDescription: "Maintain a cohesive, upscale exterior presentation year-round. PenRunners Commercial Services coordinates ongoing exterior property maintenance for commercial portfolios, ensuring your grounds, detention areas, signage perimeters, and common spaces remain pristine, safe, and well-maintained.",
    highlights: [
      "Comprehensive exterior property audits and proactive maintenance reporting",
      "Storm drain grate clearing and water runoff path maintenance",
      "Litter containment along retention ponds, tree beds, and boundaries",
      "Consolidated single-vendor invoicing for all exterior needs"
    ],
    scopeItems: [
      "Commercial grounds debris policing and perimeter fence clearing",
      "Exterior light fixture globe cleaning and cobweb removal",
      "Stormwater inlet and catch basin grate debris clearing",
      "Dumpster corrals, enclosure gates, and bollard maintenance checks",
      "Seasonal exterior cleanup and storm debris cleanup coordination"
    ],
    suitableFor: [
      "Commercial Real Estate Portfolios",
      "Industrial & Logistics Parks",
      "HOA Common Areas & Commercial Developments",
      "Retail Centers & Power Centers",
      "Churches & Campus Grounds"
    ],
    iconName: "Trees",
    cardImage: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&q=80&w=1600",
    altText: "Immaculate commercial property grounds, landscaping, and exterior perimeter care",
    image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&q=80&w=1200",
    metaTitle: "Grounds & Exterior Property Maintenance Houston | PenRunners",
    metaDescription: "Exterior grounds maintenance, litter patrol, drain clearing, and property upkeep for commercial real estate in Greater Houston."
  }
];
