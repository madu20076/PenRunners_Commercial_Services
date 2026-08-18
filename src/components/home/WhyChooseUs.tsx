import { Link } from 'react-router-dom';
import { 
  UserCheck, Zap, Calendar, Building, Layers, 
  FileSpreadsheet, MessageSquare, FileCheck, ArrowRight, CheckCircle2 
} from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "One Point of Contact",
      desc: "No more calling 5 different contractors. A dedicated account manager handles scheduling, crew dispatch, and issue resolution.",
      icon: UserCheck
    },
    {
      title: "Fast Project Coordination",
      desc: "Rapid response times for urgent tenant move-outs, property turnarounds, inspection preparations, and last-minute requests.",
      icon: Zap
    },
    {
      title: "Flexible Scheduling",
      desc: "Evening, night, and weekend service execution to eliminate disruption to tenants, customers, and active construction sites.",
      icon: Calendar
    },
    {
      title: "Commercial-Focused Service",
      desc: "Our trade partners are vetted specifically for commercial workflows, commercial-grade equipment, and commercial site safety.",
      icon: Building
    },
    {
      title: "Multi-Location Capability",
      desc: "Scale services seamlessly across multiple properties in Houston, Sugar Land, Katy, Pearland, Cypress, and beyond.",
      icon: Layers
    },
    {
      title: "Easy Quote Requests",
      desc: "Submit your scope online, upload photos or plans, and receive transparent, itemized estimates without high-pressure sales.",
      icon: FileSpreadsheet
    },
    {
      title: "Project Status Communication",
      desc: "Clear updates from start to finish. We confirm crew arrival, scope completion, and project sign-off.",
      icon: MessageSquare
    },
    {
      title: "Vendor Documentation on Request",
      desc: "Complete vendor packets including W-9s and Certificates of Insurance (COI) naming your management entity as additional insured.",
      icon: FileCheck
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#0f172a] font-bold text-xs uppercase tracking-widest bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
            <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
            <span>Why Property Managers & Contractors Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
            Commercial Property Operations, Streamlined
          </h2>
          <p className="text-[#64748b] text-base sm:text-lg leading-relaxed">
            We eliminate the friction of coordinating multiple commercial trades by delivering single-source accountability, prompt communication, and verified quality standards.
          </p>
        </div>

        {/* 8 Geometric Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-[#f8fafc] border border-slate-200 hover:bg-white hover:border-[#2563eb]/60 hover:shadow-lg transition duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-md bg-white border border-slate-200 flex items-center justify-center text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition shadow-2xs">
                  <b.icon size={22} />
                </div>
                <h3 className="text-base font-bold text-[#0f172a] group-hover:text-[#2563eb] transition">
                  {b.title}
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial Trust CTA strip */}
        <div className="mt-16 bg-[#0f172a] text-white p-8 sm:p-10 rounded-lg flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#2563eb]"></div>
          <div className="space-y-2 text-center lg:text-left z-10 pl-2 sm:pl-4">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Ready to simplify your commercial property service workflows?
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              Get an itemized proposal for routine maintenance or scheduled single-service projects across Greater Houston.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 z-10 w-full sm:w-auto">
            <Link
              to="/request-quote"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-sm px-6 py-3.5 rounded-md shadow-md transition text-center whitespace-nowrap"
            >
              Request Commercial Quote
            </Link>
            <Link
              to="/about"
              className="border border-slate-700 text-white hover:bg-slate-800 font-bold text-sm px-6 py-3.5 rounded-md transition text-center whitespace-nowrap"
            >
              Learn About Us
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
