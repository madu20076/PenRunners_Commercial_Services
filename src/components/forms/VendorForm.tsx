import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { CheckCircle2, AlertCircle, UploadCloud, X, Send, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { trackVendorSubmitted } from '../../utils/analytics';

export default function VendorForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    website: '',
    servicesOffered: '',
    serviceArea: '',
    yearsInBusiness: '',
    commercialExperience: '3-5 years',
    hasCOI: 'Yes',
    hasWorkersComp: 'Yes',
    equipmentOwned: '',
    crewMembers: '3-5 technicians',
    maxProjectSize: '$25,000 - $100,000',
    hasReferences: 'Yes',
    additionalInfo: ''
  });

  const [coiFile, setCoiFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.companyName.trim()) errs.companyName = "Company Name is required";
    if (!formData.contactName.trim()) errs.contactName = "Contact Name is required";
    if (!formData.phone.trim() || formData.phone.length < 7) errs.phone = "Phone number is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) errs.email = "Valid email address is required";
    if (!formData.servicesOffered.trim()) errs.servicesOffered = "Primary services offered are required";
    if (!formData.serviceArea.trim()) errs.serviceArea = "Service area coverage is required";
    if (!formData.yearsInBusiness.trim()) errs.yearsInBusiness = "Years in business is required";
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    /* 
     * =========================================================================
     * FORMSPREE VENDOR ENDPOINT HOOK:
     * Hook directly into your Formspree vendor intake endpoint:
     * 
     * try {
     *   await fetch(businessInfo.formspreeVendorEndpoint, {
     *     method: "POST",
     *     headers: { "Content-Type": "application/json", "Accept": "application/json" },
     *     body: JSON.stringify(formData)
     *   });
     * } catch (err) {
     *   console.error("Vendor Form Error:", err);
     * }
     * =========================================================================
     */

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      trackVendorSubmitted(formData.servicesOffered);
    }, 850);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-200 space-y-8"
      noValidate
      id="vendor-partner-form"
    >
      <div className="border-b border-slate-100 pb-5">
        <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">
          <ShieldCheck size={16} />
          Commercial Trade Partner Onboarding
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-slate-950">
          Service Partner Qualification Form
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">
          Join our network of qualified, insured commercial trade crews serving the Houston metropolitan area.
        </p>
      </div>

      {submitted ? (
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl border border-slate-200 text-center space-y-6">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={36} />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-slate-900">Partner Application Received</h3>
            <p className="text-slate-600 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.contactName}</strong>. We have received the subcontractor onboarding submission for <strong className="text-slate-900">{formData.companyName}</strong>. Our vendor coordinator will review your trade capabilities and insurance profile.
            </p>
          </div>
          <div className="text-xs text-slate-500 max-w-md mx-auto bg-slate-50 p-4 rounded-xl border border-slate-200">
            Submissions are reviewed against active project scopes in Greater Houston. If your trade and geographical coverage align with upcoming commercial scopes, we will reach out to request your formal COI naming PenRunners as certificate holder.
          </div>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setCoiFile(null);
            }}
            className="text-blue-600 font-bold text-sm underline"
          >
            Submit another vendor application →
          </button>
        </div>
      ) : (
        <>
          {/* 1. Company Profile */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              1. Company & Primary Contact
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. Lone Star Commercial Washing LLC"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 transition ${
                    errors.companyName ? 'border-red-500' : 'border-slate-300'
                  }`}
                />
                {errors.companyName && <p className="text-red-600 text-xs mt-1">{errors.companyName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                  Contact Person Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={e => setFormData({ ...formData, contactName: e.target.value })}
                  placeholder="e.g. David Ramirez (Owner / Operations Mgr)"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 transition ${
                    errors.contactName ? 'border-red-500' : 'border-slate-300'
                  }`}
                />
                {errors.contactName && <p className="text-red-600 text-xs mt-1">{errors.contactName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                  Direct Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(832) 555-0199"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 transition ${
                    errors.phone ? 'border-red-500' : 'border-slate-300'
                  }`}
                />
                {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="dave@lonestarcommercial.com"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 transition ${
                    errors.email ? 'border-red-500' : 'border-slate-300'
                  }`}
                />
                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                  Company Website or Social / Portfolio Link
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={e => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://www.yourcompany.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 transition"
                />
              </div>
            </div>
          </div>

          {/* 2. Trade Capabilities & Experience */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              2. Trade Capabilities & Houston Coverage
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                  Services Offered (Trades) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.servicesOffered}
                  onChange={e => setFormData({ ...formData, servicesOffered: e.target.value })}
                  placeholder="e.g. Hot-water Pressure Washing, Janitorial, Window Cleaning"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 transition ${
                    errors.servicesOffered ? 'border-red-500' : 'border-slate-300'
                  }`}
                />
                {errors.servicesOffered && <p className="text-red-600 text-xs mt-1">{errors.servicesOffered}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                  Service Area / Territories Covered <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.serviceArea}
                  onChange={e => setFormData({ ...formData, serviceArea: e.target.value })}
                  placeholder="e.g. Greater Houston, Katy, Sugar Land, Harris & Fort Bend"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 transition ${
                    errors.serviceArea ? 'border-red-500' : 'border-slate-300'
                  }`}
                />
                {errors.serviceArea && <p className="text-red-600 text-xs mt-1">{errors.serviceArea}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                  Years in Business <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.yearsInBusiness}
                  onChange={e => setFormData({ ...formData, yearsInBusiness: e.target.value })}
                  placeholder="e.g. 6 years"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 transition ${
                    errors.yearsInBusiness ? 'border-red-500' : 'border-slate-300'
                  }`}
                />
                {errors.yearsInBusiness && <p className="text-red-600 text-xs mt-1">{errors.yearsInBusiness}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                  Commercial Project Experience Level
                </label>
                <select
                  value={formData.commercialExperience}
                  onChange={e => setFormData({ ...formData, commercialExperience: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 transition"
                >
                  <option value="1-2 years">1 – 2 Years Commercial Experience</option>
                  <option value="3-5 years">3 – 5 Years Commercial Experience</option>
                  <option value="5-10 years">5 – 10 Years Commercial Experience</option>
                  <option value="10+ years">10+ Years Commercial Experience</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                  Number of Dedicated Crew Members
                </label>
                <select
                  value={formData.crewMembers}
                  onChange={e => setFormData({ ...formData, crewMembers: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 transition"
                >
                  <option value="1-2 technicians">1 – 2 Technicians</option>
                  <option value="3-5 technicians">3 – 5 Technicians</option>
                  <option value="6-10 technicians">6 – 10 Technicians</option>
                  <option value="11+ technicians">11+ Technicians / Multiple Crews</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                  Max Project Size Capacity
                </label>
                <select
                  value={formData.maxProjectSize}
                  onChange={e => setFormData({ ...formData, maxProjectSize: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 transition"
                >
                  <option value="Under $10,000">Under $10,000</option>
                  <option value="$10,000 - $25,000">$10,000 – $25,000</option>
                  <option value="$25,000 - $100,000">$25,000 – $100,000</option>
                  <option value="$100,000+">$100,000+ (Large Commercial / Multi-Site)</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                  Key Commercial Equipment Owned
                </label>
                <textarea
                  rows={2}
                  value={formData.equipmentOwned}
                  onChange={e => setFormData({ ...formData, equipmentOwned: e.target.value })}
                  placeholder="e.g. 2x 3500 PSI hot water trailer rigs, 20-inch rotary surface cleaners, HEPA floor scrubbers, pure water window systems, boom lift certifications..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 transition"
                />
              </div>
            </div>
          </div>

          {/* 3. Insurance & Compliance */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              3. Compliance, Insurance & References
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                  General Liability Insurance ($1M+)?
                </label>
                <select
                  value={formData.hasCOI}
                  onChange={e => setFormData({ ...formData, hasCOI: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 transition font-medium"
                >
                  <option value="Yes">Yes - Active Policy</option>
                  <option value="Pending">Policy in Process</option>
                  <option value="No">No Policy Currently</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                  Workers' Compensation Policy?
                </label>
                <select
                  value={formData.hasWorkersComp}
                  onChange={e => setFormData({ ...formData, hasWorkersComp: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 transition font-medium"
                >
                  <option value="Yes">Yes - Active Policy</option>
                  <option value="Exempt">Exempt / Ghost Policy</option>
                  <option value="No">No Policy Currently</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                  Commercial References Available?
                </label>
                <select
                  value={formData.hasReferences}
                  onChange={e => setFormData({ ...formData, hasReferences: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 transition font-medium"
                >
                  <option value="Yes">Yes - Upon Request</option>
                  <option value="Limited">Limited / Developing</option>
                </select>
              </div>
            </div>

            {/* Upload COI */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                Upload Certificate of Insurance (COI) / Spec Sheet (Optional)
              </label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl p-4 text-center cursor-pointer bg-slate-50 hover:bg-blue-50/30 transition"
              >
                <UploadCloud className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                <p className="text-xs font-semibold text-slate-700">
                  {coiFile ? coiFile.name : 'Click to select sample COI or trade certifications (PDF / JPG)'}
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,image/*"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files && e.target.files[0]) {
                      setCoiFile(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                />
              </div>
              {coiFile && (
                <div className="flex items-center gap-2 mt-2 text-xs text-blue-700 bg-blue-50 p-2 rounded">
                  <span>Attached: {coiFile.name}</span>
                  <button type="button" onClick={() => setCoiFile(null)} className="text-red-500 font-bold ml-auto">
                    <X size={14} />
                  </button>
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                Additional Information / Notes
              </label>
              <textarea
                rows={3}
                value={formData.additionalInfo}
                onChange={e => setFormData({ ...formData, additionalInfo: e.target.value })}
                placeholder="Tell us about your specific commercial capabilities, after-hours flexibility, or specialty equipment..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-600 text-white font-black py-4 px-6 rounded-xl text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 cursor-pointer"
              id="submit-vendor-partner-btn"
            >
              {isSubmitting ? (
                <span>Processing Application...</span>
              ) : (
                <>
                  <Send size={18} />
                  <span>Apply to Become a Service Partner</span>
                </>
              )}
            </button>
            <p className="text-center text-[11px] text-slate-500 mt-3 leading-relaxed">
              Application does not guarantee project assignments. All service partners must complete credentialing and insurance verification prior to receiving work orders.
            </p>
          </div>
        </>
      )}
    </form>
  );
}
