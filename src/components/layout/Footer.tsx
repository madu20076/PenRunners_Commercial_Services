import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Building, Shield, Clock, FileCheck, ArrowRight } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { servicesData } from '../../data/services';
import { trackPhoneClick, trackEmailClick } from '../../utils/analytics';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white border-t border-slate-800 pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group focus:outline-none" aria-label="PenRunners Home">
              <div className="w-10 h-10 bg-[#2563eb] rounded-md flex items-center justify-center text-white shadow-xs">
                <Building className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl tracking-tighter leading-none">
                  PENRUNNERS
                </span>
                <span className="text-[#2563eb] font-bold text-[10px] tracking-[0.2em] uppercase mt-0.5">
                  Commercial Services
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              <strong className="text-slate-200">One Call. Multiple Property Solutions.</strong>
              <br />
              PenRunners Commercial Services coordinates and manages commercial property cleaning, pressure washing, and facility services for property managers, general contractors, and facility directors across Greater Houston.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Shield size={14} className="text-[#2563eb] shrink-0" />
                <span>Single Point of Contact for All Trade Coordination</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck size={14} className="text-[#2563eb] shrink-0" />
                <span>Vendor Documentation & COIs Available Upon Request</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#2563eb] shrink-0" />
                <span>24/7 After-Hours Emergency Project Support</span>
              </div>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4 border-l-2 border-[#2563eb] pl-2">
              Commercial Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {servicesData.slice(0, 7).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/${service.slug}`}
                    className="hover:text-white hover:underline transition inline-flex items-center gap-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-[#2563eb] hover:text-blue-400 font-bold inline-flex items-center gap-1 text-xs pt-1"
                >
                  View All 12 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries & Local Areas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4 border-l-2 border-[#2563eb] pl-2">
              Industries & Coverage
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/industries" className="hover:text-white transition">
                  Property Management
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition">
                  General Contractors
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition">
                  Apartment Communities
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition">
                  Commercial Real Estate
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition">
                  Retail & Warehouses
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <Link to="/commercial-cleaning-sugar-land" className="hover:text-white transition text-xs">
                  Sugar Land Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link to="/commercial-cleaning-katy" className="hover:text-white transition text-xs">
                  Katy Commercial Services
                </Link>
              </li>
              <li>
                <Link to="/service-areas" className="text-[#2563eb] hover:text-blue-400 text-xs font-bold">
                  All Houston Service Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Quotes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4 border-l-2 border-[#2563eb] pl-2">
              Commercial Desk
            </h4>
            <div className="space-y-3.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone size={16} className="text-[#2563eb] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-500 uppercase font-semibold">Direct Dispatch / Estimates</div>
                  <a
                    href={`tel:${businessInfo.phoneRaw}`}
                    onClick={() => trackPhoneClick('footer')}
                    className="text-white font-bold hover:text-[#2563eb] transition"
                  >
                    {businessInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail size={16} className="text-[#2563eb] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-500 uppercase font-semibold">Quote Inquiries</div>
                  <a
                    href={`mailto:${businessInfo.quoteEmail}`}
                    onClick={() => trackEmailClick('footer_quote')}
                    className="text-slate-300 hover:text-white transition break-all"
                  >
                    {businessInfo.quoteEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#2563eb] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-500 uppercase font-semibold">Headquarters</div>
                  <span className="text-slate-300">{businessInfo.address}</span>
                  <div className="text-xs text-slate-400">{businessInfo.city}, {businessInfo.state}</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/request-quote"
                  className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-center py-3 px-4 rounded-md font-bold text-xs block transition shadow-md"
                >
                  Request a Commercial Quote
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Geometric Balance Territory Strip */}
        <div className="py-6 border-b border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-bold uppercase tracking-widest">
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300">
            <Link to="/service-areas" className="hover:text-white transition">Houston</Link>
            <Link to="/commercial-cleaning-katy" className="hover:text-white transition">Katy</Link>
            <Link to="/commercial-cleaning-sugar-land" className="hover:text-white transition">Sugar Land</Link>
            <Link to="/commercial-cleaning-pearland" className="hover:text-white transition">Pearland</Link>
            <Link to="/commercial-cleaning-cypress-tx" className="hover:text-white transition">Cypress</Link>
            <Link to="/commercial-cleaning-richmond-tx" className="hover:text-white transition">Richmond</Link>
            <Link to="/commercial-cleaning-missouri-city-tx" className="hover:text-white transition">Missouri City</Link>
          </div>
          <div className="text-slate-400">
            © {currentYear} PenRunners Commercial Services
          </div>
        </div>

        {/* Corporate Legal and Subcontractor / Partner row */}
        <div className="py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link to="/about" className="hover:text-slate-200 transition">
              About PenRunners
            </Link>
            <Link to="/become-a-service-partner" className="hover:text-slate-200 transition">
              Become a Service Partner
            </Link>
            <Link to="/government-institutional-services" className="hover:text-slate-200 transition">
              Government & Institutional
            </Link>
            <Link to="/service-areas" className="hover:text-slate-200 transition">
              Houston Service Areas
            </Link>
          </div>
        </div>

        {/* Disclaimer / Compliance Notice */}
        <div className="pt-4 border-t border-slate-900 text-[11px] text-slate-400 leading-relaxed max-w-5xl">
          <p>
            <strong className="text-slate-300">Commercial Operations Notice:</strong> PenRunners Commercial Services coordinates and manages commercial facility maintenance and property cleaning projects throughout the Greater Houston metropolitan area. Services are performed by qualified, insured trade crews and specialized commercial service providers. PenRunners does not personally perform regulated work that requires a state-mandated professional occupational license.
          </p>
        </div>
      </div>
    </footer>
  );
}
