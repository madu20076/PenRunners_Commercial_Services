import { Link } from 'react-router-dom';
import { MapPin, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

export default function ServiceAreaSection() {
  const primaryCounties = [
    {
      name: "Fort Bend County",
      cities: ["Sugar Land", "Katy", "Richmond", "Rosenberg", "Missouri City", "Stafford", "Fulshear"],
      desc: "Comprehensive commercial property coordination across all Fort Bend business corridors and master-planned developments."
    },
    {
      name: "Harris County",
      cities: ["Houston (All Corridors)", "Cypress", "Spring", "Tomball", "Humble", "Kingwood", "Pasadena", "Baytown", "Clear Lake"],
      desc: "Full metropolitan coverage including Downtown, Galleria/Uptown, Energy Corridor, Medical Center, and North/South transit arteries."
    },
    {
      name: "Montgomery & Surrounding",
      cities: ["The Woodlands", "Conroe", "Pearland (Brazoria)", "League City (Galveston)", "Friendswood"],
      desc: "Regional expansion supporting commercial centers, retail corridors, and business campuses across neighboring counties."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            <MapPin size={14} />
            Regional Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Commercial Property Coverage Across Greater Houston
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We provide coordinated commercial property cleaning, pressure washing, and facility services throughout <strong className="text-slate-900">Harris County</strong>, <strong className="text-slate-900">Fort Bend County</strong>, and the surrounding Texas Gulf Coast region.
          </p>
        </div>

        {/* 3 County Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {primaryCounties.map((county) => (
            <div
              key={county.name}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                    TX
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {county.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {county.desc}
                </p>

                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Key Municipalities Served:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {county.cities.map((city) => (
                      <span
                        key={city}
                        className="bg-white border border-slate-200 text-slate-700 text-xs px-2.5 py-1 rounded-md font-medium"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80">
                <Link
                  to="/service-areas"
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>View Area Capabilities</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Area Availability Checker Box */}
        <div className="mt-14 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center max-w-3xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-sm">
            <MapPin size={22} />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-950">
            Check Service Availability for Your Property
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Need service for a property outside standard city limits or managing a multi-location regional portfolio? Contact our commercial desk for confirmation.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-quote"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-sm transition"
            >
              Verify Your Property Location
            </Link>
            <Link
              to="/service-areas"
              className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-sm px-6 py-3 rounded-xl transition"
            >
              Browse All Municipalities
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
