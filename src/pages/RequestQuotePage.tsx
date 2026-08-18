import { useSearchParams } from 'react-router-dom';
import SEO from '../components/common/SEO';
import QuoteForm from '../components/forms/QuoteForm';
import { businessInfo } from '../data/businessInfo';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { trackPhoneClick, trackEmailClick } from '../utils/analytics';

export default function RequestQuotePage() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service') || undefined;
  const propertyParam = searchParams.get('propertyType') || undefined;

  return (
    <div>
      <SEO
        title={`Request a Commercial Property Quote | ${businessInfo.name}`}
        description="Get a fast, transparent commercial property service estimate in Greater Houston. Pressure washing, janitorial, post-construction cleanup, and facility maintenance."
      />

      {/* Header */}
      <section className="bg-slate-950 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
            alt="Houston Commercial Properties"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-500/30">
            <ShieldCheck size={14} />
            Commercial Project Intake
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Request a Commercial Property Quote
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Submit your property details below for an itemized commercial proposal. We coordinate projects across all of Greater Houston and Fort Bend County.
          </p>
        </div>
      </section>

      {/* Main Intake Form Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Direct Commercial Desk
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-blue-600 shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase">Direct Phone</div>
                      <a
                        href={`tel:${businessInfo.phoneRaw}`}
                        onClick={() => trackPhoneClick('quote_page_direct')}
                        className="text-slate-900 font-bold text-base hover:text-blue-600 transition"
                      >
                        {businessInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-blue-600 shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase">Email Inquiries</div>
                      <a
                        href={`mailto:${businessInfo.quoteEmail}`}
                        onClick={() => trackEmailClick('quote_page')}
                        className="text-slate-700 hover:text-blue-600 transition break-all"
                      >
                        {businessInfo.quoteEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-blue-600 shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase">Service Coverage</div>
                      <div className="text-slate-700 font-medium">Harris, Fort Bend, Brazoria & Montgomery Counties</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-blue-600 shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase">Turnaround Time</div>
                      <div className="text-slate-700 font-medium">Quotes delivered within 24 to 48 business hours</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees / Quality assurance box */}
              <div className="bg-slate-900 text-white p-7 rounded-2xl border border-slate-800 space-y-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider text-blue-400">
                  What You Can Expect:
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-blue-400 shrink-0" />
                    <span>Transparent, itemized pricing without surprise fees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-blue-400 shrink-0" />
                    <span>One dedicated account manager for all project communication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-blue-400 shrink-0" />
                    <span>Prompt COI and W-9 documentation delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-blue-400 shrink-0" />
                    <span>Flexible evening and weekend work schedules</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <QuoteForm
                defaultService={serviceParam}
                defaultPropertyType={propertyParam}
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
