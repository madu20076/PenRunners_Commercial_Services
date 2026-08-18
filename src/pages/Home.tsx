import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import ServiceGrid from '../components/home/ServiceGrid';
import WhyChooseUs from '../components/home/WhyChooseUs';
import IndustriesGrid from '../components/home/IndustriesGrid';
import GCSection from '../components/home/GCSection';
import PropertyManagerSection from '../components/home/PropertyManagerSection';
import HowItWorks from '../components/home/HowItWorks';
import ServiceAreaSection from '../components/home/ServiceAreaSection';
import FAQSection from '../components/home/FAQSection';
import QuoteForm from '../components/forms/QuoteForm';
import { businessInfo } from '../data/businessInfo';
import { Phone, Shield, ArrowRight, Building, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <SEO
        title={`${businessInfo.name} | Commercial Property Services Houston`}
        description="Commercial cleaning, pressure washing, post-construction cleanup, property cleanouts and facility services for businesses, property managers and contractors across Greater Houston."
      />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Core Services Grid */}
      <ServiceGrid />

      {/* 4. Why Choose Us / One Vendor Model */}
      <WhyChooseUs />

      {/* 5. Industries We Serve */}
      <IndustriesGrid />

      {/* 6. General Contractors & Construction Turnover Section */}
      <GCSection />

      {/* 7. Property Managers & Facilities Section */}
      <PropertyManagerSection />

      {/* 8. 4-Step Process */}
      <HowItWorks />

      {/* 9. Coverage Areas (Fort Bend, Harris County, etc.) */}
      <ServiceAreaSection />

      {/* 10. FAQ Section */}
      <FAQSection limit={8} />

      {/* 11. Government & Institutional Preview Banner */}
      <section className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
              Institutional & Public Sector Capabilities
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              Government, School District & Municipal Facility Coordination
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              Equipped for municipal contracts, public education facilities, and government agency property upkeep with complete vendor documentation.
            </p>
          </div>
          <Link
            to="/government-institutional-services"
            className="bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition whitespace-nowrap"
          >
            Explore Public Sector Capabilities →
          </Link>
        </div>
      </section>

      {/* 12. Main Homepage Lead Intake & Bottom Quote Section */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left text column */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-500/30 text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Building size={14} />
                Commercial Project Desk
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Request Your Commercial Property Estimate
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Connect with our commercial project desk today. Whether you need immediate turnover cleaning, a scheduled quarterly pressure washing program, or multi-property portfolio support across Houston.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-800 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-blue-400 shrink-0" />
                  <span>Itemized, transparent commercial quotes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-blue-400 shrink-0" />
                  <span>Flexible after-hours and weekend scheduling</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-blue-400 shrink-0" />
                  <span>W-9 and COI documents provided promptly</span>
                </div>
              </div>

              <div className="pt-4">
                <div className="text-xs text-slate-400 uppercase font-bold mb-1">
                  Prefer direct telephone assistance?
                </div>
                <a
                  href={`tel:${businessInfo.phoneRaw}`}
                  className="text-2xl sm:text-3xl font-black text-white hover:text-blue-400 transition flex items-center gap-2"
                >
                  <Phone size={24} className="text-blue-400" />
                  <span>{businessInfo.phone}</span>
                </a>
              </div>
            </div>

            {/* Right form column */}
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
