import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqsData, FAQItem } from '../../data/faqs';
import { Link } from 'react-router-dom';

interface FAQSectionProps {
  limit?: number;
  showCategories?: boolean;
}

export default function FAQSection({ limit, showCategories = true }: FAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "General", "Services", "Contractors & PMs", "Quotes & Billing"];

  const filteredFaqs = faqsData.filter(faq => {
    if (selectedCategory === "All") return true;
    return faq.category === selectedCategory;
  });

  const displayedFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            <HelpCircle size={14} />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Commercial Property Services FAQ
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Common questions regarding commercial service coordination, scheduling, insurance, and quoting in Greater Houston.
          </p>
        </div>

        {/* Category Filter Pills (if enabled) */}
        {showCategories && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIdx(0);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Accordion List */}
        <div className="space-y-3">
          {displayedFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-blue-600 transition"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center bg-white border border-slate-200 p-6 rounded-2xl">
          <p className="text-sm font-semibold text-slate-900">
            Have a specific commercial property question not covered above?
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-4 text-xs font-bold">
            <Link to="/request-quote" className="text-blue-600 hover:underline">
              Submit a Project Inquiry →
            </Link>
            <Link to="/about" className="text-slate-600 hover:underline">
              Read More About Our Company →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
