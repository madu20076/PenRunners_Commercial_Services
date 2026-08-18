import { ElementType } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { industriesData } from '../data/industries';
import { 
  Building, HardHat, Home, Building2, ShoppingBag, 
  Warehouse, Stethoscope, Hotel, School, Users, CheckCircle2, ArrowRight, ShieldCheck 
} from 'lucide-react';

const industryIcons: Record<string, ElementType> = {
  "property-management": Building,
  "general-contractors": HardHat,
  "apartment-communities": Home,
  "commercial-real-estate": Building2,
  "retail-shopping-centers": ShoppingBag,
  "warehouses-industrial": Warehouse,
  "medical-professional-offices": Stethoscope,
  "hotels-hospitality": Hotel,
  "schools-churches": School,
  "hoas-community-associations": Users
};

export default function Industries() {
  return (
    <div>
      <SEO
        title="Commercial Industries We Serve | PenRunners Houston"
        description="Tailored property maintenance, turnover cleaning, and pressure washing solutions for Houston property managers, general contractors, retail centers, and industrial facilities."
      />

      {/* Hero Header */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
            alt="Commercial Industries Houston"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-500/30">
              <ShieldCheck size={14} />
              Industry-Specific Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Industries We Serve Throughout Houston
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Every facility type requires different maintenance standards, safety protocols, and operational workflows. We tailor our service delivery to match the exact requirements of your commercial property sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Detailed Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {industriesData.map((ind, index) => {
            const Icon = industryIcons[ind.id] || Building;
            const isEven = index % 2 === 0;

            return (
              <div
                key={ind.id}
                id={ind.id}
                className={`bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
              >
                {/* Visual / Image Side */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-xl overflow-hidden shadow-md group">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                        <Icon size={16} />
                      </div>
                      <span className="font-bold text-sm">{ind.title}</span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      Commercial Sector Overview
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                      {ind.title}
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {ind.shortDesc}
                    </p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100">
                    <div className="text-xs font-bold uppercase text-slate-500">The Operational Challenge:</div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                      "{ind.challenges}"
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase text-slate-900 tracking-wider">
                      How PenRunners Solves It:
                    </div>
                    <div className="space-y-2">
                      {ind.solutions.map((sol, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended services tags */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Coordinated Services:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {ind.keyServices.map((srv) => (
                        <span
                          key={srv}
                          className="bg-blue-50 text-blue-900 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-md"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={`/request-quote?propertyType=${encodeURIComponent(ind.title)}`}
                      className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition shadow-xs"
                    >
                      <span>Request Quote for {ind.title}</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-black">
            Have a Specialized Commercial Property Layout?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            From regional distribution campuses to historic institutional facilities, our project coordinators tailor service workflows to match your exact operating guidelines.
          </p>
          <Link
            to="/request-quote"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg transition"
          >
            <span>Discuss Your Industry Scope</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
