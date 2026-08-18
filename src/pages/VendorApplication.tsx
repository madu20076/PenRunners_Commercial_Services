import SEO from '../components/common/SEO';
import VendorForm from '../components/forms/VendorForm';
import { businessInfo } from '../data/businessInfo';
import { 
  Briefcase, CheckCircle2, ShieldCheck, DollarSign, 
  FileText, Clock, Users, ArrowRight 
} from 'lucide-react';

export default function VendorApplication() {
  const partnerPerks = [
    {
      title: "Consistent Commercial Scopes",
      desc: "Access qualified commercial job opportunities across Greater Houston without spending hours on direct sales prospecting.",
      icon: Briefcase
    },
    {
      title: "Prompt & Reliable Payment",
      desc: "Straightforward payment terms upon project completion and scope sign-off, without chasing individual commercial accounts.",
      icon: DollarSign
    },
    {
      title: "Clear Scopes of Work",
      desc: "Detailed project requirements, site access details, and agreed milestones provided up front for every work order.",
      icon: FileText
    },
    {
      title: "Focus on Your Craft",
      desc: "You and your crews focus on quality field execution while we manage client communication, contract paperwork, and administrative coordination.",
      icon: Users
    }
  ];

  return (
    <div>
      <SEO
        title="Become a Service Partner | Commercial Subcontractor Opportunities"
        description="Join PenRunners' qualified network of insured commercial service crews and subcontractors. Commercial cleaning, pressure washing, and facility projects in Greater Houston."
      />

      {/* Hero Header */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600"
            alt="Commercial Construction and Trade Partners"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-500/30">
              <Briefcase size={14} />
              Service Partner Network
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Grow Your Business With Additional Commercial Projects
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              PenRunners Commercial Services partners with qualified, insured trade crews and specialized subcontractors across the Greater Houston metropolitan area.
            </p>
          </div>
        </div>
      </section>

      {/* Perks and Requirements Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Requirements & Benefits */}
            <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-28">
              
              <div className="space-y-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Partner With PenRunners
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                  Why Partner With Us?
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We coordinate projects for corporate office buildings, retail centers, general contractors, and apartment communities. We look for reliable, high-integrity service crews who take pride in their work.
                </p>
              </div>

              {/* Perks list */}
              <div className="space-y-4">
                {partnerPerks.map((perk) => (
                  <div
                    key={perk.title}
                    className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <perk.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{perk.title}</h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{perk.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Minimum Qualification Criteria */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <ShieldCheck size={18} className="text-blue-400" />
                  <span>Minimum Partner Criteria</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                    <span>Active Commercial General Liability Insurance ($1M+)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                    <span>Workers' Compensation or verified exemption</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                    <span>Commercial-grade machinery, vehicles & safety gear</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                    <span>Verifiable commercial project history and references</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column: Application Form */}
            <div className="lg:col-span-7">
              <VendorForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
