import { Link } from 'react-router-dom';
import { Phone, FileText } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { trackPhoneClick } from '../../utils/analytics';

export default function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] flex h-16 safe-area-inset-bottom">
      <a
        href={`tel:${businessInfo.phoneRaw}`}
        onClick={() => trackPhoneClick('mobile_sticky_bar')}
        className="flex-1 bg-[#0f172a] text-white flex items-center justify-center gap-2 font-bold text-sm hover:bg-slate-800 transition active:bg-slate-950"
        id="mobile-sticky-call-btn"
      >
        <Phone size={18} className="text-[#2563eb]" />
        <span>Call Now</span>
      </a>
      <Link
        to="/request-quote"
        className="flex-1 bg-[#2563eb] text-white flex items-center justify-center gap-2 font-bold text-sm hover:bg-[#1d4ed8] transition active:bg-[#1e40af]"
        id="mobile-sticky-quote-btn"
      >
        <FileText size={18} />
        <span>Request Quote</span>
      </Link>
    </div>
  );
}
