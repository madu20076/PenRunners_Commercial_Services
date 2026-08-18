import { Link } from 'react-router-dom';
import { 
  Building2, CheckCircle2, Clock, UserCheck, 
  FileText, CreditCard, Layers, Calendar, ArrowRight 
} from 'lucide-react';

export default function PropertyManagerSection() {
  const pmFeatures = [
    {
      title: "Fast Response Times",
      desc: "Prompt dispatch for emergency spills, lease-end turnover cleanouts, and urgent tenant escalation items.",
      icon: Clock
    },
    {
      title: "Single Point of Contact",
      desc: "Work directly with a designated commercial account coordinator who understands your portfolio's specific standards.",
      icon: UserCheck
    },
    {
      title: "Detailed Service Reporting",
      desc: "Receive verification photos and job-completion sign-offs so you can confirm quality without physically driving to the site.",
      icon: FileText
    },
    {
      title: "Flexible Billing & Invoicing",
      desc: "Consolidated monthly invoices, split billing by building asset, or itemized PO tracking matched to your accounting workflow.",
      icon: CreditCard
    },
    {
      title: "Multi-Property Coverage",
      desc: "Uniform quality and pricing across all your properties in Houston, Fort Bend County, Harris County, and surrounding submarkets.",
      icon: Layers
    },
    {
      title: "Scheduled & On-Demand Services",
      desc: "Mix recurring janitorial and porter programs with seasonal exterior washdowns or sudden tenant cleanouts.",
      icon: Calendar
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            <Building2 size={14} />
            Property Management Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Built for Commercial Property Managers & Facilities Teams
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Whether you manage a single office building, a retail strip center, or an entire portfolio of commercial properties, PenRunners Commercial Services simplifies your maintenance workflow.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pmFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-blue-300 hover:bg-white transition-all duration-200 space-y-3.5 shadow-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100/70 text-blue-700 flex items-center justify-center">
                <feature.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom PM Action Strip */}
        <div className="mt-14 bg-gradient-to-r from-slate-950 to-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-black">
              Manage Multiple Commercial Properties in Houston?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Let's build a customized maintenance schedule and master service agreement for your commercial portfolio.
            </p>
          </div>
          <Link
            to="/request-quote"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg transition transform active:scale-95 shrink-0 flex items-center gap-2"
          >
            <span>Discuss Property Management Support</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
