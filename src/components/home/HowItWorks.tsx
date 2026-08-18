import { FileSpreadsheet, Search, CalendarCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Submit Property Details",
      desc: "Tell us about your property location, square footage, scope of work, and preferred service timeline online or by phone.",
      icon: FileSpreadsheet
    },
    {
      number: "02",
      title: "Scope Review & Estimate",
      desc: "We assess your site specifications, verify access constraints, and deliver a transparent, itemized commercial estimate.",
      icon: Search
    },
    {
      number: "03",
      title: "Service Scheduling",
      desc: "We coordinate qualified, insured trade crews and schedule execution during normal, after-hours, or weekend windows.",
      icon: CalendarCheck
    },
    {
      number: "04",
      title: "Quality Execution & Sign-Off",
      desc: "Work is completed to commercial standards with active project coordination, site verification, and prompt reporting.",
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#0f172a] font-bold text-xs uppercase tracking-widest bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
            <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
            How PenRunners Works
          </h2>
          <p className="text-[#64748b] text-base sm:text-lg leading-relaxed">
            A frictionless coordination workflow designed to eliminate administrative hassle and deliver consistent property results every time.
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#f8fafc] rounded-lg p-7 border border-slate-200 shadow-2xs hover:shadow-md hover:border-[#2563eb]/50 transition relative flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black text-[#2563eb]">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-md bg-white border border-slate-200 flex items-center justify-center text-[#2563eb] shadow-2xs group-hover:bg-[#2563eb] group-hover:text-white transition">
                    <step.icon size={18} />
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#0f172a] mb-2 group-hover:text-[#2563eb] transition">
                  {step.title}
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-bold text-slate-500 group-hover:text-[#2563eb]">
                <span>Phase {step.number} Protocol</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/request-quote"
            className="inline-flex items-center gap-2 bg-[#0f172a] hover:bg-slate-800 text-white font-bold text-sm px-8 py-4 rounded-md shadow-lg transition"
          >
            <span>Start Your Property Estimate Now</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
