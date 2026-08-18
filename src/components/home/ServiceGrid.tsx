import { ElementType } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/services';
import { 
  Droplets, Sparkles, Building, Waves, Columns, 
  AppWindow, Trash2, Home, Truck, Layers, 
  Sparkle, Trees, ArrowRight 
} from 'lucide-react';

const iconMap: Record<string, ElementType> = {
  "Droplets": Droplets,
  "Sparkles": Sparkles,
  "Building": Building,
  "Waves": Waves,
  "Columns": Columns,
  "Window": AppWindow,
  "Trash2": Trash2,
  "Home": Home,
  "Truck": Truck,
  "Layers": Layers,
  "Sparkle": Sparkle,
  "Trees": Trees
};

export default function ServiceGrid() {
  return (
    <section className="py-20 bg-[#f8fafc] border-b border-slate-200" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[#0f172a] text-xs font-bold uppercase tracking-wider">
            <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
            <span>Commercial Service Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight">
            Commercial Property Services We Coordinate
          </h2>
          <p className="text-[#64748b] text-base sm:text-lg leading-relaxed">
            Consolidate your commercial maintenance needs with one reliable partner. From high-pressure exterior washing to post-construction turnover cleaning, we manage the entire project lifecycle.
          </p>
        </div>

        {/* 12 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Droplets;

            return (
              <div
                key={service.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg hover:border-[#2563eb]/50 transition duration-200 flex flex-col group"
              >
                {/* Image header with geometric overlay */}
                <div className="relative h-48 overflow-hidden bg-[#0f172a]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent"></div>
                  
                  {/* Floating Geometric Icon */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-md bg-[#2563eb] text-white flex items-center justify-center shadow-md">
                    <IconComponent size={20} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] group-hover:text-[#2563eb] transition">
                      {service.title}
                    </h3>
                    <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb] shrink-0"></div>
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/${service.slug}`}
                      className="text-xs font-bold text-[#0f172a] group-hover:text-[#2563eb] flex items-center gap-1 transition"
                    >
                      <span>Scope Details</span>
                      <ArrowRight size={14} />
                    </Link>

                    <Link
                      to={`/request-quote?service=${encodeURIComponent(service.title)}`}
                      className="text-xs font-bold text-white bg-[#0f172a] group-hover:bg-[#2563eb] px-4 py-2 rounded-md transition"
                    >
                      Get Pricing
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all services footer link */}
        <div className="mt-14 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#0f172a] hover:bg-slate-800 text-white font-bold text-sm px-8 py-4 rounded-md shadow-lg transition"
          >
            <span>View All 12 Commercial Services in Detail</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
