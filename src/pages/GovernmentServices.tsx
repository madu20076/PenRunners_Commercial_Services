import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import QuoteForm from '../components/forms/QuoteForm';
import { businessInfo } from '../data/businessInfo';
import { 
  Building2, ShieldCheck, FileCheck, CheckCircle2, 
  MapPin, Phone, ArrowRight, Award, FileSpreadsheet, Lock 
} from 'lucide-react';
import { trackPhoneClick, trackEvent } from '../utils/analytics';

export default function GovernmentServices() {
  const naicsCodes = [
    { code: "561720", title: "Janitorial Services", desc: "Commercial interior sanitization, routine cleaning & facility upkeep" },
    { code: "561790", title: "Other Services to Buildings & Dwellings", desc: "Pressure washing, window cleaning & exterior surface maintenance" },
    { code: "561730", title: "Landscaping & Grounds Maintenance", desc: "Exterior property clearing, perimeter maintenance & debris removal" },
    { code: "238990", title: "All Other Specialty Trade Contractors", desc: "Post-construction cleanup & specialty site turnarounds" }
  ];

  const publicSectors = [
    { title: "Municipal & County Facilities", desc: "City halls, courthouses, public works depots, annexes, and emergency operations centers." },
    { title: "Public School Districts & Higher Ed", desc: "Sanitizing academic hallways, auditorium deep cleaning, campus pressure washing, and turnover prep." },
    { title: "Transit & Transportation Hubs", desc: "Bus terminals, park-and-ride facilities, parking garages, and multi-modal transit stations." },
    { title: "Parks, Recreation & Community Centers", desc: "Pavilions, concrete walkways, municipal pool decks, and public event plazas." }
  ];

  return (
    <div>
      <SEO
        title="Government & Institutional Commercial Services | PenRunners Houston"
        description="Public sector property maintenance, commercial janitorial, and exterior pressure washing coordination for Houston municipal facilities, school districts, and government entities."
      />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1600"
            alt="Government & Institutional Buildings"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-500/30">
              <Award size={14} />
              Public Sector & Institutional Procurement
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Government & Institutional Facility Services
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Reliable commercial cleaning, pressure washing, post-construction cleanup, and grounds maintenance coordination for public agencies, municipal entities, and educational institutions in Greater Houston.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Procurement Readiness */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Contracting & Compliance
                </span>
                <h2 className="text-2xl font-black text-slate-950">
                  Procurement-Ready Facility Support
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  PenRunners Commercial Services understands the strict documentation, compliance mandates, and purchasing guidelines governing public sector contracts. We provide comprehensive capability documentation, W-9 packages, and verified Certificates of Insurance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs text-slate-900 block">Prompt Vendor Packets</strong>
                      <span className="text-[11px] text-slate-500">W-9, COI, and banking info ready</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs text-slate-900 block">Strict Safety Protocols</strong>
                      <span className="text-[11px] text-slate-500">OSHA & PPE compliant crews</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs text-slate-900 block">Flexible Contracting</strong>
                      <span className="text-[11px] text-slate-500">Purchase orders & net terms supported</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs text-slate-900 block">Single Account POC</strong>
                      <span className="text-[11px] text-slate-500">Dedicated public sector coordinator</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* NAICS Codes */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Primary NAICS & PSC Classifications
                </h3>
                <div className="space-y-3 pt-1">
                  {naicsCodes.map((item) => (
                    <div key={item.code} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-black bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                            {item.code}
                          </span>
                          <span className="font-bold text-xs sm:text-sm text-slate-900">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Public Sectors */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Institutional Entities Served
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {publicSectors.map((sec, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                      <h4 className="font-bold text-xs text-slate-900">{sec.title}</h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed">{sec.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Quote Column */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <QuoteForm
                  defaultPropertyType="Other Commercial Property"
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
