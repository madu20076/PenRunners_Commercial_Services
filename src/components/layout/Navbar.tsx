import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Building, FileText, CheckCircle2 } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { servicesData } from '../../data/services';
import { trackPhoneClick } from '../../utils/analytics';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Corporate Trust & Contact Strip */}
      <div className="bg-[#0f172a] text-slate-300 text-xs py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-slate-300 font-semibold tracking-wide">
              <span className="inline-block w-2 h-2 rounded-full bg-[#2563eb] animate-pulse"></span>
              Serving Greater Houston, Fort Bend & Harris County
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-400">
              <CheckCircle2 size={13} className="text-[#2563eb]" />
              Insured Commercial Project Coordination
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/become-a-service-partner"
              className="text-slate-300 hover:text-white transition flex items-center gap-1.5 hover:underline font-medium text-xs"
            >
              <FileText size={13} className="text-[#2563eb]" />
              Vendor Application
            </Link>
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              onClick={() => trackPhoneClick('top_bar')}
              className="font-bold text-white hover:text-blue-300 transition flex items-center gap-1.5 text-xs tracking-wider"
            >
              <Phone size={13} className="text-[#2563eb]" />
              <span>{businessInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Geometric Balance Theme */}
      <nav
        className={`w-full bg-white transition-all duration-200 border-b border-slate-200 ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none" aria-label="PenRunners Home">
              <div className="w-10 h-10 bg-[#0f172a] rounded-md flex items-center justify-center text-white shadow-xs group-hover:bg-[#2563eb] transition-colors">
                <Building className="w-5 h-5 text-[#2563eb] group-hover:text-white transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#0f172a] font-black text-2xl tracking-tighter leading-none">
                  PENRUNNERS
                </span>
                <span className="text-[#2563eb] text-[10px] font-bold uppercase tracking-[0.2em] -mt-0.5">
                  Commercial Services
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 font-bold text-sm text-[#0f172a]">
              <Link
                to="/"
                className={`transition-colors py-2 ${
                  isActive('/') && location.pathname === '/'
                    ? 'text-[#2563eb]'
                    : 'text-[#0f172a] hover:text-[#2563eb]'
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link
                  to="/services"
                  className={`flex items-center gap-1 transition-colors py-2 ${
                    isActive('/services')
                      ? 'text-[#2563eb]'
                      : 'text-[#0f172a] hover:text-[#2563eb]'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#2563eb]' : ''}`} />
                </Link>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-[540px] bg-white border border-slate-200 rounded-md shadow-xl p-5 grid grid-cols-2 gap-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex justify-between items-center">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb]">
                        Commercial Service Catalog
                      </span>
                      <Link to="/services" className="text-xs font-bold text-slate-500 hover:text-[#2563eb]">
                        View All (12) →
                      </Link>
                    </div>
                    {servicesData.map((service) => (
                      <Link
                        key={service.id}
                        to={`/${service.slug}`}
                        className="p-2 rounded-md hover:bg-slate-50 transition flex flex-col text-left group/item"
                      >
                        <span className="text-xs font-bold text-slate-900 group-hover/item:text-[#2563eb] transition-colors leading-snug">
                          {service.title}
                        </span>
                        <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {service.shortDescription}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/industries"
                className={`transition-colors py-2 ${
                  isActive('/industries')
                    ? 'text-[#2563eb]'
                    : 'text-[#0f172a] hover:text-[#2563eb]'
                }`}
              >
                Industries
              </Link>

              <Link
                to="/service-areas"
                className={`transition-colors py-2 ${
                  isActive('/service-areas')
                    ? 'text-[#2563eb]'
                    : 'text-[#0f172a] hover:text-[#2563eb]'
                }`}
              >
                Service Areas
              </Link>

              <Link
                to="/about"
                className={`transition-colors py-2 ${
                  isActive('/about')
                    ? 'text-[#2563eb]'
                    : 'text-[#0f172a] hover:text-[#2563eb]'
                }`}
              >
                About
              </Link>

              {/* Primary Geometric CTA Button */}
              <Link
                to="/request-quote"
                className="bg-[#2563eb] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#1d4ed8] transition font-bold text-sm tracking-wide inline-flex items-center justify-center"
              >
                Request a Quote
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-3">
              <Link
                to="/request-quote"
                className="bg-[#2563eb] text-white text-xs font-bold px-3.5 py-2 rounded-md shadow-xs"
              >
                Quote
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-[#0f172a] hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <Link
              to="/"
              className={`block px-3 py-2.5 rounded-md text-base font-bold ${
                isActive('/') && location.pathname === '/'
                  ? 'bg-blue-50 text-[#2563eb]'
                  : 'text-[#0f172a] hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            <Link
              to="/services"
              className={`block px-3 py-2.5 rounded-md text-base font-bold ${
                isActive('/services')
                  ? 'bg-blue-50 text-[#2563eb]'
                  : 'text-[#0f172a] hover:bg-slate-50'
              }`}
            >
              Services (All 12 Scopes)
            </Link>

            <Link
              to="/industries"
              className={`block px-3 py-2.5 rounded-md text-base font-bold ${
                isActive('/industries')
                  ? 'bg-blue-50 text-[#2563eb]'
                  : 'text-[#0f172a] hover:bg-slate-50'
              }`}
            >
              Industries We Serve
            </Link>

            <Link
              to="/service-areas"
              className={`block px-3 py-2.5 rounded-md text-base font-bold ${
                isActive('/service-areas')
                  ? 'bg-blue-50 text-[#2563eb]'
                  : 'text-[#0f172a] hover:bg-slate-50'
              }`}
            >
              Houston Service Areas
            </Link>

            <Link
              to="/about"
              className={`block px-3 py-2.5 rounded-md text-base font-bold ${
                isActive('/about')
                  ? 'bg-blue-50 text-[#2563eb]'
                  : 'text-[#0f172a] hover:bg-slate-50'
              }`}
            >
              About PenRunners
            </Link>

            <Link
              to="/become-a-service-partner"
              className="block px-3 py-2.5 rounded-md text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Vendor & Subcontractor Application
            </Link>

            <Link
              to="/government-institutional-services"
              className="block px-3 py-2.5 rounded-md text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Government & Institutional Services
            </Link>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link
                to="/request-quote"
                className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-center font-bold py-3.5 rounded-md shadow-md"
              >
                Request a Commercial Quote
              </Link>
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                onClick={() => trackPhoneClick('mobile_nav')}
                className="w-full border-2 border-slate-200 text-[#0f172a] text-center font-bold py-3 rounded-md hover:bg-slate-50 flex items-center justify-center gap-2"
              >
                <Phone size={16} className="text-[#2563eb]" />
                <span>Call {businessInfo.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
