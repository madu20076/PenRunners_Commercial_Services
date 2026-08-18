import { ElementType } from 'react';
import { Link } from 'react-router-dom';
import { HardHat, ShieldCheck, Clock, FileCheck, ArrowRight } from 'lucide-react';

interface Benefit {
  title: string;
  desc: string;
  icon: ElementType;
}

export default function GCSection() {
  const gcBenefits: Benefit[] = [
    {
      title: "Phased Rough & Final Cleaning",
      desc: "Sequenced trade cleans matching your milestones: rough clean, final pre-punch, and touch-up prior to owner inspection.",
      icon: Clock
    },
    {
      title: "Strict Job-Site Safety & PPE",
      desc: "Crews arrive equipped with hard hats, safety vests, eye protection, and boots, adhering strictly to OSHA guidelines.",
      icon: HardHat
    },
    {
      title: "Instant COI & W-9 Turnaround",
      desc: "Fast submittal of customized COIs with your General Contracting entity named as Additional Insured.",
      icon: FileCheck
    },
    {
      title: "Owner Walkthrough Ready",
      desc: "Window sticker removal, track vacuuming, paint overspray eradication, and floor polishing to secure timely CO handoff.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 bg-[#0f172a] text-white relative overflow-hidden border-b border-slate-800">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: GC Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#2563eb] text-xs font-bold uppercase tracking-wider">
              <HardHat size={14} className="text-[#2563eb]" />
              <span className="text-slate-200">General Contractor & Construction Solutions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Turnover-Ready Post-Construction Cleaning & Exterior Prep
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Superintendents and Project Managers rely on PenRunners to deliver inspection-ready rough, final, and punch-list cleaning without holding up scheduled client handoffs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {gcBenefits.map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 p-5 rounded-md space-y-2 hover:bg-white/10 transition"
                >
                  <div className="w-8 h-8 rounded-md bg-[#2563eb] flex items-center justify-center text-white">
                    <item.icon size={16} />
                  </div>
                  <h3 className="font-bold text-sm text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/request-quote?service=Post-Construction%20Cleaning"
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-sm px-6 py-3.5 rounded-md shadow-md transition flex items-center gap-2"
              >
                <span>Request a Construction Bid</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/post-construction-cleaning-houston"
                className="border border-slate-700 hover:bg-slate-800 text-slate-200 font-bold text-sm px-6 py-3.5 rounded-md transition"
              >
                View 3-Phase Scope
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-slate-700 shadow-2xl group bg-slate-950">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb180c5f5?auto=format&fit=crop&q=80&w=1000"
                alt="Post-Construction Cleaners on Commercial Houston Job Site"
                className="w-full h-[400px] object-cover opacity-80 group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-[#0f172a]/90 backdrop-blur-md p-5 rounded-md border border-slate-700/80 space-y-2">
                <div className="flex items-center gap-2 text-[#2563eb] text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck size={14} />
                  <span>Subcontractor Compliance</span>
                </div>
                <div className="text-white font-bold text-sm">
                  General Liability & Workers' Comp Verified
                </div>
                <p className="text-xs text-slate-300">
                  Direct COI generation with your construction entity named as certificate holder and additional insured.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
