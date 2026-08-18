import { useLocation, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import QuoteForm from '../components/forms/QuoteForm';
import { businessInfo } from '../data/businessInfo';
import { 
  MapPin, CheckCircle2, Building, ShieldCheck, 
  Phone, ArrowRight, HardHat, Droplets, Sparkles 
} from 'lucide-react';
import { trackPhoneClick } from '../utils/analytics';

interface LocalPageConfig {
  city: string;
  county: string;
  serviceTitle: string;
  metaTitle: string;
  metaDesc: string;
  headline: string;
  subheadline: string;
  localCorridors: string[];
  propertyTypes: string[];
  keyPoints: string[];
}

export default function LocalSEOPage() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  // Helper to extract city and service based on path
  const getPageConfig = (): LocalPageConfig => {
    if (path.includes('sugar-land')) {
      const isPressure = path.includes('pressure-washing');
      const isPostConst = path.includes('post-construction');
      const srv = isPressure 
        ? "Commercial Pressure Washing" 
        : isPostConst 
        ? "Post-Construction Cleaning" 
        : "Commercial Property Cleaning & Janitorial";
      return {
        city: "Sugar Land",
        county: "Fort Bend County",
        serviceTitle: srv,
        metaTitle: `${srv} Sugar Land, TX | ${businessInfo.name}`,
        metaDesc: `Professional ${srv.toLowerCase()} in Sugar Land, TX. Serving Town Center, First Colony, Highway 6 business parks, and retail centers. Fast quotes & insured crews.`,
        headline: `${srv} in Sugar Land, TX`,
        subheadline: "Professional commercial property cleaning, exterior pressure washing, and facility maintenance coordination for Sugar Land businesses, general contractors, and property managers.",
        localCorridors: ["Sugar Land Town Square", "First Colony Commercial District", "Highway 6 Corridor", "US-59 / I-69 Business Parks", "Imperial Sugar Land"],
        propertyTypes: ["Corporate Office Suites", "Medical Clinics & Healthcare Suites", "Retail Centers & Restaurants", "Commercial Buildouts", "Apartment Communities"],
        keyPoints: [
          "Coordinated service delivery across Fort Bend County",
          "After-hours and weekend scheduling to avoid tenant disruption",
          "Qualified, insured commercial crews with standardized quality control",
          "Complete vendor documentation (W-9, COIs) delivered promptly"
        ]
      };
    }

    if (path.includes('katy')) {
      const isPressure = path.includes('pressure-washing');
      const isPostConst = path.includes('post-construction');
      const srv = isPressure 
        ? "Commercial Pressure Washing" 
        : isPostConst 
        ? "Post-Construction Cleaning" 
        : "Commercial Cleaning & Janitorial Services";
      return {
        city: "Katy",
        county: "Fort Bend & Harris Counties",
        serviceTitle: srv,
        metaTitle: `${srv} Katy, TX | ${businessInfo.name}`,
        metaDesc: `Reliable ${srv.toLowerCase()} in Katy, TX. Serving I-10 Energy Corridor West, Grand Parkway 99, Katy Mills, and Cinco Ranch commercial sites.`,
        headline: `${srv} in Katy, TX`,
        subheadline: "Comprehensive commercial property solutions for Katy retail centers, corporate offices, logistics facilities, and new commercial construction turnover projects.",
        localCorridors: ["I-10 Katy Freeway Corridor", "Grand Parkway (SH-99)", "Katy Mills Commercial Area", "Mason Road Retail Corridors", "Cinco Ranch Commercial"],
        propertyTypes: ["Logistics & Warehouses", "Retail Strip Centers", "Commercial Construction Sites", "Multi-Family Complexes", "Medical Offices"],
        keyPoints: [
          "Rapid response for fast-growing West Houston commercial developments",
          "Turnover-ready post-construction rough & final cleaning",
          "High-volume hot water pressure washing for concrete & parking lots",
          "Single point of contact for multi-property commercial owners"
        ]
      };
    }

    if (path.includes('richmond')) {
      return {
        city: "Richmond & Rosenberg",
        county: "Fort Bend County",
        serviceTitle: "Commercial Cleaning & Property Maintenance",
        metaTitle: `Commercial Cleaning & Pressure Washing Richmond, TX | ${businessInfo.name}`,
        metaDesc: `Commercial property cleaning and pressure washing in Richmond and Rosenberg, TX. Serving Brazos Town Center, FM 762, and US-59 commercial corridors.`,
        headline: "Commercial Property Services in Richmond & Rosenberg, TX",
        subheadline: "Single-source coordination for exterior washing, commercial janitorial, and property maintenance across Richmond, Rosenberg, and Fort Bend County.",
        localCorridors: ["Brazos Town Center", "FM 762 Corridor", "US-59 / I-69 Corridor", "Historic Richmond Commercial Hubs", "Reading Road Centers"],
        propertyTypes: ["Retail Centers", "Office Buildings", "Commercial Developments", "Warehouses", "HOA Common Properties"],
        keyPoints: [
          "Dedicated Fort Bend County commercial account coordination",
          "Scheduled and project-based exterior maintenance",
          "Full COI compliance naming your company as additional insured",
          "Transparent pricing with zero hidden fees"
        ]
      };
    }

    if (path.includes('missouri-city')) {
      return {
        city: "Missouri City & Stafford",
        county: "Fort Bend County",
        serviceTitle: "Commercial Property Cleaning & Services",
        metaTitle: `Commercial Cleaning & Pressure Washing Missouri City, TX | ${businessInfo.name}`,
        metaDesc: `Commercial property services in Missouri City & Stafford, TX. Serving Sienna commercial developments, Texas Parkway, and Stafford Freeport business parks.`,
        headline: "Commercial Property Services in Missouri City & Stafford, TX",
        subheadline: "Commercial cleaning, pressure washing, and facility maintenance coordination for businesses, industrial parks, and community facilities in Missouri City and Stafford.",
        localCorridors: ["Sienna Commercial Corridors", "Texas Parkway", "Stafford Freeport Business Park", "US-90A Commercial Hubs", "Murphy Road Corridor"],
        propertyTypes: ["Industrial Parks", "Corporate Offices", "Retail Centers", "Educational & Daycare Centers", "Multi-Family Properties"],
        keyPoints: [
          "Industrial park floor scrubbing and loading dock washdowns",
          "Consistent quality control and routine maintenance scheduling",
          "Fast quote turnarounds within 24 to 48 business hours",
          "Fully insured crews equipped for commercial-grade demands"
        ]
      };
    }

    if (path.includes('pearland')) {
      return {
        city: "Pearland",
        county: "Brazoria & Harris Counties",
        serviceTitle: "Commercial Property Services",
        metaTitle: `Commercial Property Cleaning & Pressure Washing Pearland, TX | ${businessInfo.name}`,
        metaDesc: `Commercial cleaning, pressure washing, and post-construction cleanup in Pearland, TX. Serving Highway 288, Pearland Town Center, and Broadway Street.`,
        headline: "Commercial Property Services in Pearland, TX",
        subheadline: "Professional commercial cleaning, pressure washing, and post-construction cleanup for Pearland shopping centers, medical offices, and commercial facilities.",
        localCorridors: ["Pearland Town Center", "SH-288 Commercial Corridor", "Broadway St / FM 518", "Silverlake Commercial Centers", "Dixie Farm Rd"],
        propertyTypes: ["Shopping Centers & Strip Malls", "Medical & Dental Clinics", "Office Complexes", "Commercial Construction Sites", "Apartment Communities"],
        keyPoints: [
          "High-temperature concrete cleaning and sidewalk gum removal",
          "Professional post-construction final cleaning for tenant build-outs",
          "Custom recurring service schedules (daily, weekly, monthly)",
          "Single point of contact for all property maintenance needs"
        ]
      };
    }

    // Default: Cypress / Northwest Houston
    return {
      city: "Cypress",
      county: "Harris County",
      serviceTitle: "Commercial Property Services",
      metaTitle: `Commercial Property Cleaning & Pressure Washing Cypress, TX | ${businessInfo.name}`,
      metaDesc: `Commercial cleaning, exterior washing, and post-construction cleanup in Cypress, TX. Serving US-290, Barker Cypress, and Bridgeland commercial centers.`,
      headline: "Commercial Property Services in Cypress, TX",
      subheadline: "Reliable commercial property solutions for Cypress businesses, retail centers, general contractors, and commercial real estate assets.",
      localCorridors: ["US-290 Northwest Freeway Corridor", "Barker Cypress Road", "Spring Cypress Rd", "Bridgeland Commercial Centers", "Fry Road Corridor"],
      propertyTypes: ["Master-Planned Commercial Centers", "Commercial Tenant Buildouts", "Office Parks", "Retail Centers", "Industrial Warehouses"],
      keyPoints: [
        "Rapid dispatch across Northwest Houston and Cypress commercial corridors",
        "Insured trade crews vetted for commercial site standards",
        "Fast project coordination for urgent turnovers and tenant move-ins",
        "Comprehensive service portfolio under one management roof"
      ]
    };
  };

  const config = getPageConfig();

  return (
    <div>
      <SEO
        title={config.metaTitle}
        description={config.metaDesc}
      />

      {/* Hero Header */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
            alt={`${config.city} Commercial Property`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-500/30">
              <MapPin size={14} />
              {config.city}, TX • {config.county}
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              {config.headline}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {config.subheadline}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#local-quote-form"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg transition"
              >
                Request a {config.city} Estimate
              </a>
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                onClick={() => trackPhoneClick(`local_seo_${config.city}`)}
                className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition flex items-center gap-2"
              >
                <Phone size={16} className="text-blue-400" />
                <span>{businessInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Quote Form Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Local Commercial Overview */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Commercial Coordination
                </div>
                <h2 className="text-2xl font-black text-slate-950">
                  Reliable Commercial Property Services in {config.city}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  PenRunners Commercial Services coordinates and manages commercial property cleaning, pressure washing, and facility maintenance for businesses, property managers, and general contractors in <strong>{config.city}</strong> and across <strong>{config.county}</strong>.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Instead of dealing with multiple uncoordinated subcontractors, you work with a single point of contact who schedules vetted, insured trade crews, oversees quality control, and ensures your property is maintained to pristine commercial standards.
                </p>

                <div className="pt-4 space-y-2.5">
                  {config.keyPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Local Corridors & Submarkets */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Key Commercial Corridors Served in {config.city}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {config.localCorridors.map((corr, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs font-semibold text-slate-800 flex items-center gap-2">
                      <MapPin size={14} className="text-blue-500 shrink-0" />
                      <span>{corr}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supported Property Types in City */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Commercial Properties We Maintain in {config.city}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {config.propertyTypes.map((pt, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold px-3 py-1.5 rounded-lg"
                    >
                      {pt}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sticky Form Column */}
            <div className="lg:col-span-5" id="local-quote-form">
              <div className="sticky top-28 space-y-6">
                <QuoteForm
                  defaultPropertyType="Office Building / Corporate Suite"
                  compact={true}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
