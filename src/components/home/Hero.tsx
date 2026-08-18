import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { trackPhoneClick } from '../../utils/analytics';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#f8fafc] border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[600px] lg:min-h-[640px]">
        
        {/* Left Column (60% Desktop) - Crisp Geometric Balance Content */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 lg:py-16 bg-white relative">
          {/* Subtle Left Accent Geometry */}
          <div className="absolute top-0 left-0 w-1.5 sm:w-2 h-full bg-[#2563eb] opacity-20"></div>

          <div className="max-w-xl space-y-6">
            {/* Pill Tag with Geometric Dot */}
            <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200/80">
              <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
              <span className="text-[11px] font-black uppercase tracking-widest text-[#64748b]">
                {businessInfo.tagline}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] leading-[1.1] tracking-tight">
              Commercial Property Services <br />
              <span className="text-[#2563eb]">Without the Hassle.</span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-[#64748b] leading-relaxed font-normal">
              Reliable commercial cleaning, pressure washing, and facility services for Houston businesses, contractors, and property managers. One company. One point of contact.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/request-quote"
                className="bg-[#0f172a] hover:bg-slate-800 text-white px-8 py-4 rounded-md font-bold text-sm shadow-xl transition text-center flex items-center justify-center gap-2 group"
                id="hero-quote-btn"
              >
                <span>Request a Commercial Quote</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`tel:${businessInfo.phoneRaw}`}
                onClick={() => trackPhoneClick('hero')}
                className="border-2 border-slate-200 text-[#0f172a] px-8 py-4 rounded-md font-bold text-sm hover:bg-slate-50 transition text-center flex items-center justify-center gap-2"
                id="hero-call-btn"
              >
                <Phone size={16} className="text-[#2563eb]" />
                <span>Call {businessInfo.phone}</span>
              </a>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-100 text-xs text-[#64748b]">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={15} className="text-[#2563eb] shrink-0" />
                <span>Commercial B2B Focus</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={15} className="text-[#2563eb] shrink-0" />
                <span>Insured Trade Crews</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={15} className="text-[#2563eb] shrink-0" />
                <span>Multi-Site Portfolios</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (40% Desktop) - Deep Slate Geometric Framing & Territory Badge */}
        <div className="w-full lg:w-[40%] bg-[#0f172a] relative overflow-hidden flex flex-col justify-end p-8 sm:p-12 min-h-[340px] lg:min-h-auto">
          {/* Photography overlay */}
          <div
            className="absolute inset-0 opacity-40 bg-center bg-cover"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000")`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent"></div>

          {/* Floating Glassmorphism Geometric Card */}
          <div className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-md border border-white/20 text-white space-y-2 shadow-2xl">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#2563eb]" />
              <h4 className="font-bold uppercase text-xs tracking-widest text-[#2563eb]">
                Now Serving
              </h4>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed">
              Greater Houston Metropolitan Area: Sugar Land, Katy, Richmond, Missouri City, Pearland, Cypress, and surrounding commercial corridors.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-300 border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-blue-400" />
                COI & W-9 Compliant
              </span>
              <span>•</span>
              <span>Fast 24-48h Bids</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
