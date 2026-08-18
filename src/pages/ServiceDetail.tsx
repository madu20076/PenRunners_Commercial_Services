import { ElementType } from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import SEO from '../components/common/SEO';
import QuoteForm from '../components/forms/QuoteForm';
import { servicesData } from '../data/services';
import { businessInfo } from '../data/businessInfo';
import { 
  Droplets, Sparkles, Building, Waves, Columns, 
  Trash2, Home, Truck, Layers, Sparkle, Trees, 
  CheckCircle2, ArrowRight, ShieldCheck, Phone, MapPin, Building2 
} from 'lucide-react';
import { trackPhoneClick } from '../utils/analytics';

const iconMap: Record<string, ElementType> = {
  "Droplets": Droplets,
  "Sparkles": Sparkles,
  "Building": Building,
  "Waves": Waves,
  "Columns": Columns,
  "Trash2": Trash2,
  "Home": Home,
  "Truck": Truck,
  "Layers": Layers,
  "Sparkle": Sparkle,
  "Trees": Trees
};

export default function ServiceDetail() {
  const location = useLocation();
  const currentSlug = location.pathname.replace(/^\//, '');

  const service = servicesData.find(s => s.slug === currentSlug || s.id === currentSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = iconMap[service.iconName] || Droplets;

  return (
    <div>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "provider": {
            "@type": "LocalBusiness",
            "name": businessInfo.name,
            "telephone": businessInfo.phone,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Houston",
              "addressRegion": "TX",
              "addressCountry": "US"
            }
          },
          "areaServed": businessInfo.serviceAreas.map(c => ({
            "@type": "City",
            "name": c
          })),
          "description": service.shortDescription
        }}
      />

      {/* Hero Header */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-500/30">
              <Icon size={14} />
              <span>Commercial Service Scope</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              {service.title} in Houston, TX
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {service.shortDescription}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#quote-section"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg transition"
              >
                Request a Proposal
              </a>
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                onClick={() => trackPhoneClick(`service_detail_${service.id}`)}
                className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition flex items-center gap-2"
              >
                <Phone size={16} className="text-blue-400" />
                <span>{businessInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Quote Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Detailed Overview */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Service Overview & Delivery
                </div>
                <h2 className="text-2xl font-black text-slate-950">
                  Professional Coordination for {service.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.fullDescription}
                </p>

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included / Scope Breakdown */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Comprehensive Scope Checklist
                </h3>
                <p className="text-xs text-slate-500">
                  Our commercial project managers coordinate all necessary equipment, safety protocols, and certified labor:
                </p>
                <div className="space-y-2.5 pt-2">
                  {service.scopeItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suitable Property Types */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Ideal For Commercial Property Types
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.suitableFor.map((type, idx) => (
                    <div key={idx} className="p-3 bg-blue-50/50 rounded-xl border border-blue-100/80 flex items-center gap-2.5 text-xs font-semibold text-blue-950">
                      <Building2 size={16} className="text-blue-600 shrink-0" />
                      <span>{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Houston Coverage Callout */}
              <div className="bg-slate-900 text-white rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                  <MapPin size={14} />
                  <span>Coverage Across Greater Houston</span>
                </div>
                <h4 className="text-lg font-bold text-white">
                  Available for Immediate Project Scheduling in:
                </h4>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {businessInfo.serviceAreas.map(c => (
                    <span key={c} className="bg-slate-800 border border-slate-700 text-slate-300 text-xs px-2.5 py-1 rounded">
                      {c}, TX
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sticky Form Column */}
            <div className="lg:col-span-5" id="quote-section">
              <div className="sticky top-28 space-y-6">
                <QuoteForm
                  defaultService={service.title}
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
