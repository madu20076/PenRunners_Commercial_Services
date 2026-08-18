import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { CheckCircle2, AlertCircle, UploadCloud, X, Send, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { trackQuoteStarted, trackQuoteSubmitted } from '../../utils/analytics';

interface QuoteFormProps {
  defaultService?: string;
  defaultPropertyType?: string;
  className?: string;
  compact?: boolean;
}

const PROPERTY_TYPES = [
  "Office Building / Corporate Suite",
  "Retail Strip Center / Shopping Mall",
  "Warehouse / Industrial Distribution",
  "Apartment Community / Multi-Family",
  "Commercial Construction Job Site",
  "Medical / Dental / Healthcare Clinic",
  "Hotel / Hospitality Property",
  "School / University / Daycare",
  "Church / Religious Facility",
  "HOA Common Area / Subdivision",
  "Other Commercial Property"
];

const AVAILABLE_SERVICES = [
  "Commercial Pressure Washing",
  "Post-Construction Cleaning",
  "Commercial Janitorial Cleaning",
  "Exterior Building Cleaning",
  "Concrete & Sidewalk Cleaning",
  "Commercial Window Cleaning",
  "Parking Lot Cleaning & Sweeping",
  "Property Cleanouts & Trash-Outs",
  "Apartment Turnover Cleaning",
  "Day Porter Services",
  "Commercial Floor & Carpet Cleaning",
  "Grounds & Exterior Maintenance"
];

export default function QuoteForm({
  defaultService,
  defaultPropertyType = "Office Building / Corporate Suite",
  className = "",
  compact = false
}: QuoteFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    jobTitle: "",
    email: "",
    phone: "",
    propertyAddress: "",
    city: "Houston",
    propertyType: defaultPropertyType,
    servicesNeeded: defaultService ? [defaultService] : [] as string[],
    propertySize: "",
    desiredDate: "",
    serviceFrequency: "One-Time Project",
    numberOfProperties: "1 Location",
    projectDescription: "",
    preferredContact: "Email" as "Email" | "Phone" | "Either"
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hasStarted, setHasStarted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFieldFocus = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackQuoteStarted(defaultService);
    }
  };

  const handleCheckboxToggle = (service: string) => {
    setFormData(prev => {
      const exists = prev.servicesNeeded.includes(service);
      const updated = exists
        ? prev.servicesNeeded.filter(s => s !== service)
        : [...prev.servicesNeeded, service];
      return { ...prev, servicesNeeded: updated };
    });
    if (errors.servicesNeeded) {
      setErrors(prev => {
        const next = { ...prev };
        delete next.servicesNeeded;
        return next;
      });
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setSelectedFiles(prev => [...prev, ...newFiles].slice(0, 5));
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full Name is required";
    if (!formData.companyName.trim()) errs.companyName = "Company Name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) errs.email = "Valid email address is required";
    if (!formData.phone.trim() || formData.phone.length < 7) errs.phone = "Phone number is required";
    if (!formData.propertyAddress.trim()) errs.propertyAddress = "Property address is required";
    if (formData.servicesNeeded.length === 0) errs.servicesNeeded = "Please select at least one service";
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(`field-${firstErrorKey}`);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);

    /* 
     * =========================================================================
     * FORMSPREE INTEGRATION HOOK:
     * When connecting Formspree endpoint in production:
     * 
     * try {
     *   await fetch(businessInfo.formspreeQuoteEndpoint, {
     *     method: "POST",
     *     headers: { "Content-Type": "application/json", "Accept": "application/json" },
     *     body: JSON.stringify(formData)
     *   });
     * } catch (err) {
     *   console.error("Quote Form Submit Error:", err);
     * }
     * =========================================================================
     */

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      trackQuoteSubmitted(formData.propertyType, formData.servicesNeeded.length);
    }, 850);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl border border-blue-100 text-center space-y-6">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 size={36} />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-black text-slate-950">Thank You For Your Quote Request</h3>
          <p className="text-slate-600 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            We have received your commercial project details for <strong className="text-slate-900">{formData.propertyAddress}</strong>. Our commercial coordination team will review the requirements and contact you promptly regarding your quote.
          </p>
        </div>
        
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-left text-xs text-slate-600 space-y-1.5">
          <div className="font-bold text-slate-900 text-sm mb-1">Request Summary:</div>
          <div><strong>Company:</strong> {formData.companyName}</div>
          <div><strong>Services:</strong> {formData.servicesNeeded.join(", ")}</div>
          <div><strong>Preferred Contact:</strong> {formData.preferredContact} ({formData.preferredContact === 'Phone' ? formData.phone : formData.email})</div>
        </div>

        <div className="pt-4">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: "",
                companyName: "",
                jobTitle: "",
                email: "",
                phone: "",
                propertyAddress: "",
                city: "Houston",
                propertyType: defaultPropertyType,
                servicesNeeded: [],
                propertySize: "",
                desiredDate: "",
                serviceFrequency: "One-Time Project",
                numberOfProperties: "1 Location",
                projectDescription: "",
                preferredContact: "Email"
              });
              setSelectedFiles([]);
            }}
            className="text-blue-600 hover:text-blue-700 font-bold text-sm underline focus:outline-none"
          >
            Submit another commercial property request →
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-100 space-y-8 ${className}`}
      noValidate
      id="commercial-quote-form"
    >
      {/* Form Header Info */}
      <div className="border-b border-slate-100 pb-5">
        <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">
          <ShieldCheck size={16} />
          Commercial Property Proposal Request
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-slate-950">
          Get Pricing for Your Property or Project
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">
          Fill out your property specifications below. We provide fast, itemized commercial estimates across Greater Houston.
        </p>
      </div>

      {/* Section 1: Contact & Company Info */}
      <div className="space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          1. Contact & Business Information
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="field-fullName"
              required
              value={formData.fullName}
              onFocus={handleFieldFocus}
              onChange={e => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Marcus Vance"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                errors.fullName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
              }`}
            />
            {errors.fullName && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="field-companyName"
              required
              value={formData.companyName}
              onFocus={handleFieldFocus}
              onChange={e => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="e.g. Apex Property Management"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                errors.companyName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
              }`}
            />
            {errors.companyName && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.companyName}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              Job Title
            </label>
            <input
              type="text"
              value={formData.jobTitle}
              onFocus={handleFieldFocus}
              onChange={e => setFormData({ ...formData, jobTitle: e.target.value })}
              placeholder="e.g. Senior Property Manager / GC Super"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              Preferred Contact Method
            </label>
            <select
              value={formData.preferredContact}
              onChange={e => setFormData({ ...formData, preferredContact: e.target.value as "Email" | "Phone" | "Either" })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            >
              <option value="Email">Email Communication</option>
              <option value="Phone">Phone Call</option>
              <option value="Either">Either (Email or Phone)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              Work Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="field-email"
              required
              value={formData.email}
              onFocus={handleFieldFocus}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@company.com"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
              }`}
            />
            {errors.email && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="field-phone"
              required
              value={formData.phone}
              onFocus={handleFieldFocus}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(713) 555-0100"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                errors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
              }`}
            />
            {errors.phone && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.phone}</p>}
          </div>
        </div>
      </div>

      {/* Section 2: Property Specifications */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          2. Property Location & Scope
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              Property Street Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="field-propertyAddress"
              required
              value={formData.propertyAddress}
              onFocus={handleFieldFocus}
              onChange={e => setFormData({ ...formData, propertyAddress: e.target.value })}
              placeholder="e.g. 4500 Westheimer Rd"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                errors.propertyAddress ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
              }`}
            />
            {errors.propertyAddress && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.propertyAddress}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              City / Metro Area
            </label>
            <select
              value={formData.city}
              onChange={e => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            >
              {businessInfo.serviceAreas.map(c => (
                <option key={c} value={c}>{c}, TX</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              Property Type
            </label>
            <select
              value={formData.propertyType}
              onChange={e => setFormData({ ...formData, propertyType: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            >
              {PROPERTY_TYPES.map(pt => (
                <option key={pt} value={pt}>{pt}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              Approx. Square Footage / Size
            </label>
            <input
              type="text"
              value={formData.propertySize}
              onChange={e => setFormData({ ...formData, propertySize: e.target.value })}
              placeholder="e.g. 25,000 sq ft / 4 stories"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              Service Frequency
            </label>
            <select
              value={formData.serviceFrequency}
              onChange={e => setFormData({ ...formData, serviceFrequency: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            >
              <option value="One-Time Project">One-Time Project</option>
              <option value="Daily Janitorial">Daily Janitorial Schedule</option>
              <option value="Weekly / Bi-Weekly">Weekly / Bi-Weekly Schedule</option>
              <option value="Monthly / Quarterly Maintenance">Monthly / Quarterly Maintenance</option>
              <option value="Multi-Property Account">Multi-Property Portfolio Agreement</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              Desired Service Date / Timeline
            </label>
            <input
              type="text"
              value={formData.desiredDate}
              onChange={e => setFormData({ ...formData, desiredDate: e.target.value })}
              placeholder="e.g. Within 2 weeks / Immediate / Next month"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              Number of Properties in Scope
            </label>
            <select
              value={formData.numberOfProperties}
              onChange={e => setFormData({ ...formData, numberOfProperties: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            >
              <option value="1 Location">1 Location</option>
              <option value="2-5 Locations">2 – 5 Locations (Regional)</option>
              <option value="6-15 Locations">6 – 15 Locations (Portfolio)</option>
              <option value="16+ Locations">16+ Locations (Enterprise)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Section 3: Services Selection (Multi-select) */}
      <div className="space-y-3 pt-4 border-t border-slate-100">
        <div className="flex justify-between items-center">
          <label className="block text-xs font-bold text-slate-800 uppercase">
            3. Select Services Needed <span className="text-red-500">*</span>
          </label>
          <span className="text-xs text-slate-400 font-medium">Select all that apply</span>
        </div>

        {errors.servicesNeeded && (
          <p className="text-red-600 text-xs flex items-center gap-1 bg-red-50 p-2 rounded">
            <AlertCircle size={13} /> {errors.servicesNeeded}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1">
          {AVAILABLE_SERVICES.map(service => {
            const isSelected = formData.servicesNeeded.includes(service);
            return (
              <label
                key={service}
                className={`flex items-start gap-2.5 p-3 rounded-lg border cursor-pointer transition text-xs font-medium ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/70 text-blue-950 font-semibold shadow-xs'
                    : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80 text-slate-700'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleCheckboxToggle(service)}
                  className="mt-0.5 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 shrink-0"
                />
                <span className="leading-tight">{service}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Section 4: Project Description & Photos */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          4. Scope Description & Optional Attachments
        </h4>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
            Project Description & Special Requirements
          </label>
          <textarea
            rows={compact ? 3 : 4}
            value={formData.projectDescription}
            onChange={e => setFormData({ ...formData, projectDescription: e.target.value })}
            placeholder="Please detail areas needing attention, existing conditions, access constraints (gates, security, after-hours requirements), and any specific project objectives..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          ></textarea>
        </div>

        {/* Photo Upload Area */}
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
            Upload Property Photos / Site Plans (Optional)
          </label>
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl p-5 text-center cursor-pointer bg-slate-50 hover:bg-blue-50/30 transition group"
          >
            <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-blue-600 mx-auto mb-1.5 transition-colors" />
            <p className="text-xs font-semibold text-slate-700">
              Click to select or drag & drop property photos, PDFs, or architectural plans
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              JPG, PNG, PDF up to 15MB each (Max 5 files)
            </p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {/* Selected File Chips */}
          {selectedFiles.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {selectedFiles.map((file, idx) => (
                <div
                  key={idx}
                  className="bg-blue-50 border border-blue-200 text-blue-900 text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5"
                >
                  <span className="truncate max-w-[180px] font-medium">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => removeFile(idx)}
                    className="text-blue-700 hover:text-red-600 p-0.5"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Submission CTA */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-black py-4 px-6 rounded-xl text-base uppercase tracking-wider shadow-lg hover:shadow-xl transition transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
          id="submit-commercial-quote-btn"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Processing Your Project Scope...</span>
            </>
          ) : (
            <>
              <Send size={18} />
              <span>Request My Commercial Quote</span>
            </>
          )}
        </button>
        <p className="text-center text-xs text-slate-500 mt-3">
          No residential pressure washing or residential solicitations. B2B commercial property accounts only.
        </p>
      </div>
    </form>
  );
}
