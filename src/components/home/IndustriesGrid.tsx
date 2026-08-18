import { ElementType } from 'react';
import { Link } from 'react-router-dom';
import { industriesData } from '../../data/industries';
import { 
  Building, HardHat, Home, Building2, ShoppingBag, 
  Warehouse, Stethoscope, Hotel, School, Users, ArrowRight 
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

export default function IndustriesGrid() {
  return (
    <section className="py-20 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#0f172a] font-bold text-xs uppercase tracking-widest bg-slate-100 px-3.5 py-1 rounded-full border border-slate-200">
              <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
              <span>Tailored Commercial Portfolios</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
              Industries We Serve Throughout Houston
            </h2>
            <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
              Every facility type requires distinct cleaning standards, scheduling protocols, and safety procedures. We customize service plans to your operational needs.
            </p>
          </div>
          <Link
            to="/industries"
            className="text-sm font-bold text-[#2563eb] hover:text-[#1d4ed8] inline-flex items-center gap-1.5 shrink-0"
          >
            <span>Explore All Industry Solutions</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industriesData.map((ind) => {
            const Icon = industryIcons[ind.id] || Building;
            return (
              <Link
                key={ind.id}
                to={`/industries#${ind.id}`}
                className="group bg-white p-5 rounded-md border border-slate-200 hover:border-[#2563eb] hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-md bg-slate-50 border border-slate-200 text-[#2563eb] flex items-center justify-center group-hover:bg-[#2563eb] group-hover:text-white transition">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#0f172a] group-hover:text-[#2563eb] transition leading-snug">
                      {ind.title}
                    </h3>
                    <p className="text-[11px] text-[#64748b] mt-1 line-clamp-2">
                      {ind.shortDesc}
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500 group-hover:text-[#2563eb]">
                  <span>Scope details</span>
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
