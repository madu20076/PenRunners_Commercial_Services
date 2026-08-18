import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { businessInfo } from '../data/businessInfo';
import { MapPin, CheckCircle2, ArrowRight, Shield, Building, Phone } from 'lucide-react';
import { trackPhoneClick } from '../utils/analytics';

interface RegionData {
  name: string;
  counties: string;
  description: string;
  hubs: {
    city: string;
    submarkets: string[];
    localSeoSlug?: string;
  }[];
}

const regions: RegionData[] = [
  {
    name: "Fort Bend County & Southwest Metro",
    counties: "Fort Bend County, TX",
    description: "One of the nation's fastest growing commercial and residential epicenters. We provide rapid dispatch and dedicated commercial property coordination across Sugar Land, Katy, Richmond, Rosenberg, and Missouri City.",
    hubs: [
      {
        city: "Sugar Land, TX",
        submarkets: ["Town Center", "First Colony", "Imperial", "Highway 6 Corridor", "Business Park"],
        localSeoSlug: "/commercial-cleaning-sugar-land"
      },
      {
        city: "Katy, TX",
        submarkets: ["Energy Corridor West", "Katy Mills", "Grand Parkway 99 Corridor", "Cinco Ranch Commercial", "Mason Rd"],
        localSeoSlug: "/commercial-cleaning-katy"
      },
      {
        city: "Richmond & Rosenberg, TX",
        submarkets: ["FM 762 Corridor", "Brazos Town Center", "Historic Commercial District", "US-59 Corridor"],
        localSeoSlug: "/commercial-cleaning-richmond-tx"
      },
      {
        city: "Missouri City & Stafford, TX",
        submarkets: ["Sienna Commercial", "Stafford Freeport Business Park", "Texas Parkway", "US-90A Industrial"],
        localSeoSlug: "/commercial-cleaning-missouri-city-tx"
      },
      {
        city: "Fulshear, TX",
        submarkets: ["Cross Creek Commercial", "FM 1093 / Westpark Tollway Extension Corridor"]
      }
    ]
  },
  {
    name: "City of Houston & Harris County Core",
    counties: "Harris County, TX",
    description: "Comprehensive property services for major corporate centers, industrial corridors, medical hubs, and shopping destinations across inner and outer loop Houston.",
    hubs: [
      {
        city: "Downtown & Midtown Houston",
        submarkets: ["Central Business District", "Theater District", "Convention District", "Midtown Commercial"]
      },
      {
        city: "Galleria / Uptown / Westchase",
        submarkets: ["Post Oak Blvd", "Westheimer Commercial Corridor", "Richmond Ave", "Westchase District"]
      },
      {
        city: "Energy Corridor & West Houston",
        submarkets: ["I-10 Katy Freeway", "Eldridge Parkway", "Memorial Commercial Districts"]
      },
      {
        city: "Texas Medical Center & Museum District",
        submarkets: ["Fannin / Main Healthcare Corridors", "Holcombe Blvd", "NRG Park Area"]
      },
      {
        city: "Cypress & Northwest Houston",
        submarkets: ["US-290 Corridor", "Bridgeland Commercial", "Spring Cypress Rd", "Barker Cypress"],
        localSeoSlug: "/commercial-cleaning-cypress-tx"
      },
      {
        city: "Spring, Tomball & The Woodlands",
        submarkets: ["ExxonMobil Campus Area", "Old Town Spring", "Grand Parkway North", "Town Center Woodlands"]
      },
      {
        city: "Humble, Kingwood & Lake Houston",
        submarkets: ["IAH Airport Logistics Hubs", "FM 1960 Commercial", "Kingwood Town Center"]
      },
      {
        city: "Pasadena, Baytown & East Corridor",
        submarkets: ["Ship Channel Logistics Centers", "Beltway 8 East", "State Hwy 225 Industrial"]
      }
    ]
  },
  {
    name: "Brazoria & Galveston County Corridors",
    counties: "Brazoria & Galveston Counties, TX",
    description: "Serving the southern growth hubs including retail strip centers, medical satellite facilities, and commercial office complexes.",
    hubs: [
      {
        city: "Pearland, TX",
        submarkets: ["Pearland Town Center", "Highway 288 Commercial Corridor", "Broadway St / FM 518", "Silverlake"],
        localSeoSlug: "/commercial-cleaning-pearland"
      },
      {
        city: "League City, Friendswood & Clear Lake",
        submarkets: ["Baybrook Mall Area", "NASA / Johnson Space Center Corridor", "I-45 South Corridor"]
      }
    ]
  }
];

export default function ServiceAreas() {
  return (
    <div>
      <SEO
        title="Commercial Property Service Areas in Houston & Fort Bend | PenRunners"
        description="Serving commercial properties, business parks, retail centers and general contractors across Houston, Sugar Land, Katy, Pearland, Cypress, Richmond, and Missouri City."
      />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600"
            alt="Houston Metropolitan Commercial Region"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-500/30">
              <MapPin size={14} />
              Geographic Service Reach
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Houston Commercial Service Areas
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We coordinate commercial property cleaning, pressure washing, and facility maintenance throughout Harris County, Fort Bend County, and surrounding metropolitan business districts.
            </p>
          </div>
        </div>
      </section>

      {/* Regions Breakdown */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {regions.map((region, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-8"
            >
              <div className="border-b border-slate-100 pb-5">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {region.counties}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-1">
                  {region.name}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed max-w-4xl">
                  {region.description}
                </p>
              </div>

              {/* Hubs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {region.hubs.map((hub, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                        <MapPin size={16} className="text-blue-600 shrink-0" />
                        <span>{hub.city}</span>
                      </div>

                      <div className="mt-3 space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          Coverage Corridors:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {hub.submarkets.map((sub, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[11px] bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold">
                      {hub.localSeoSlug ? (
                        <Link
                          to={hub.localSeoSlug}
                          className="text-blue-600 hover:underline inline-flex items-center gap-1"
                        >
                          <span>Local Services Guide</span>
                          <ArrowRight size={12} />
                        </Link>
                      ) : (
                        <span className="text-slate-500">Commercial Dispatched</span>
                      )}

                      <Link
                        to={`/request-quote?city=${encodeURIComponent(hub.city.split(',')[0])}`}
                        className="text-slate-700 hover:text-blue-600"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Dispatch Phone Banner */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-black">
            Need Service at Multiple Properties Across Different Houston Cities?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Consolidate your multi-location accounts under one master agreement. One point of contact, consolidated billing, and standardized quality across all your Houston-area assets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link
              to="/request-quote"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg transition"
            >
              Request Multi-Site Portfolio Quote
            </Link>
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              onClick={() => trackPhoneClick('service_areas_footer')}
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm px-7 py-4 rounded-xl transition flex items-center justify-center gap-2"
            >
              <Phone size={16} className="text-blue-400" />
              <span>Direct Commercial Line: {businessInfo.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
