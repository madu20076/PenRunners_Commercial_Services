import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { businessInfo } from '../data/businessInfo';
import { 
  Building, ShieldCheck, UserCheck, CheckCircle2, 
  Layers, Clock, ArrowRight, Phone, FileCheck, Target, Eye, Sparkles 
} from 'lucide-react';
import { trackPhoneClick } from '../utils/analytics';

export default function About() {
  const values = [
    {
      title: "Single-Source Accountability",
      desc: "We take full ownership of project coordination from initial site walk and scope definition to final quality verification.",
      icon: UserCheck
    },
    {
      title: "Proactive Communication",
      desc: "No guessing whether a crew arrived. You receive real-time schedule confirmations and post-service documentation.",
      icon: Clock
    },
    {
      title: "Vetted Trade Standards",
      desc: "We coordinate with experienced, insured commercial trade crews equipped with commercial-grade machinery and safety gear.",
      icon: ShieldCheck
    },
    {
      title: "Complete Compliance",
      desc: "Certificates of Insurance (COI) and W-9 documentation are delivered promptly to simplify vendor onboarding with your management company.",
      icon: FileCheck
    }
  ];

  return (
    <div>
      <SEO
        title={`About PenRunners Commercial Services | Houston Facility Solutions`}
        description="Learn about PenRunners Commercial Services: our single-point-of-contact coordination model, commercial quality standards, and full Houston area coverage."
      />

      {/* Hero Section */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
            alt="Houston Commercial District"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-500/30">
              <Building size={14} />
              About Our Commercial Company
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              One Call. Multiple Property Solutions.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              PenRunners Commercial Services coordinates and manages commercial property cleaning, pressure washing, and facility services for property managers, general contractors, and business owners throughout Greater Houston.
            </p>
          </div>
        </div>
      </section>

      {/* The Story & Model */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Why PenRunners Was Built
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Solving the Vendor Management Headache for Houston Commercial Properties
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Commercial property managers and construction superintendents often spend countless hours vetting, scheduling, and chasing individual subcontractors for pressure washing, janitorial cleaning, window detailing, parking lot sweeping, and turnover cleanouts.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                PenRunners was created to eliminate that friction. By serving as your centralized project manager and single point of contact, we dispatch qualified, insured trade crews and handle all project logistics, quality control, and vendor documentation.
              </p>
              <p className="text-slate-900 font-bold text-base leading-relaxed">
                You make one call or submit one request, and we ensure the job is executed to commercial standards on your schedule.
              </p>
            </div>

            <div className="lg:col-span-6 bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">
                Our Core Operational Commitments
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 text-sm">One Central Point of Contact:</strong>
                    <p className="text-xs text-slate-600">No navigating multiple phone numbers or disjointed invoices.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 text-sm">Insured Trade Crews:</strong>
                    <p className="text-xs text-slate-600">All coordinated service partners maintain verified General Liability policies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 text-sm">Quality Sign-Off & Verification:</strong>
                    <p className="text-xs text-slate-600">Active oversight and photo verification before job completion.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 text-sm">Commercial Scale Capabilities:</strong>
                    <p className="text-xs text-slate-600">Equipped for multi-story buildings, regional retail centers, and industrial acreage.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Operating Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950">
              The Standards That Guide Every Project
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <v.icon size={22} />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Regulatory Notice */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck size={18} className="text-blue-600" />
              <span>Commercial Operations & Licensing Notice</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              PenRunners Commercial Services coordinates and manages commercial facility maintenance and property cleaning projects throughout the Greater Houston metropolitan area. Services are performed by qualified, insured trade crews and specialized commercial service providers. PenRunners does not personally perform regulated work that requires a state-mandated professional occupational license.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-950 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black">
            Ready to Partner With PenRunners?
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Experience the convenience of single-source commercial property service coordination for your Houston-area properties.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link
              to="/request-quote"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg transition"
            >
              Request a Commercial Quote
            </Link>
            <Link
              to="/become-a-service-partner"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm px-7 py-4 rounded-xl transition"
            >
              Apply as a Service Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
