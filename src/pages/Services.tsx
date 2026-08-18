import { ElementType } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { servicesData } from '../data/services';
import { 
  Droplets, Sparkles, Building, Waves, Columns, 
  AppWindow, Trash2, Home, Truck, Layers, 
  Sparkle, Trees, CheckCircle2, ArrowRight, ShieldCheck 
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

export default function Services() {
  return (
    <div>
      <SEO
        title="Commercial Property Services Portfolio | PenRunners Houston"
        description="Explore our full scope of commercial property services: pressure washing, post-construction cleanup, janitorial, window cleaning, parking lot sweeping & property maintenance."
      />

      {/* Hero Header */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
            alt="Commercial Facilities Houston"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-500/30">
              <ShieldCheck size={14} />
              Commercial Property Maintenance
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Commercial Property Services
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We coordinate and manage commercial cleaning, exterior pressure washing, and facility maintenance projects across Greater Houston. One call connects you to a complete commercial service catalog.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Listing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Droplets;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Visual / Image Side */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-xl overflow-hidden shadow-md group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                        <Icon size={16} />
                      </div>
                      <span className="font-bold text-sm">{service.title}</span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      Commercial Service Scope
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </div>

                  {/* Key Scope List */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold uppercase text-slate-900 tracking-wider">
                      Coordinated Scope Includes:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.scopeItems.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights tags */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Commercial Advantages:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.highlights.map((h, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-md"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap gap-4">
                    <Link
                      to={`/${service.slug}`}
                      className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition"
                    >
                      <span>Full Service Page</span>
                      <ArrowRight size={14} />
                    </Link>
                    <Link
                      to={`/request-quote?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition shadow-xs"
                    >
                      <span>Request Pricing</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-black">
            Need a Custom Multi-Service Maintenance Agreement?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            We bundle exterior washing, routine cleaning, and property maintenance into consolidated service agreements with predictable monthly invoicing.
          </p>
          <Link
            to="/request-quote"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg transition"
          >
            <span>Request a Consolidated Property Proposal</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
