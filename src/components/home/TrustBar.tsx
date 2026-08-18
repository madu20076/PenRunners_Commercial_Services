import { Droplets, Sparkles, HardHat, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrustBar() {
  const highlights = [
    {
      title: "Commercial Pressure Washing",
      desc: "Commercial building & concrete cleaning for retail, industrial, and parking structures.",
      icon: Droplets,
      slug: "commercial-pressure-washing-houston"
    },
    {
      title: "Commercial Janitorial",
      desc: "Full facility custodial programs for corporate office, medical, and educational sites.",
      icon: Sparkles,
      slug: "commercial-janitorial-services-houston"
    },
    {
      title: "Post-Construction Cleaning",
      desc: "Turnover cleaning for GCs, from initial rough clean to final white-glove inspection detail.",
      icon: HardHat,
      slug: "post-construction-cleaning-houston"
    },
    {
      title: "Day Porter Services",
      desc: "Uniformed on-site daytime maintenance to keep your commercial property pristine all day.",
      icon: UserCheck,
      slug: "day-porter-services-houston"
    }
  ];

  return (
    <div className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {highlights.map((item, index) => (
          <Link
            key={item.title}
            to={`/${item.slug}`}
            className={`p-6 sm:p-8 flex flex-col hover:bg-slate-50 transition group ${
              index < highlights.length - 1 ? 'lg:border-r border-b sm:border-b-0 border-slate-200/80' : ''
            }`}
          >
            <div className="text-[#2563eb] mb-3 group-hover:scale-105 transition-transform">
              <item.icon className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-sm mb-1.5 text-[#0f172a] group-hover:text-[#2563eb] transition-colors">
              {item.title}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              {item.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
