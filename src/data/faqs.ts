export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Services" | "Contractors & PMs" | "Quotes & Billing";
}

export const faqsData: FAQItem[] = [
  {
    question: "What types of commercial properties do you service?",
    answer: "We service a comprehensive range of commercial properties across Greater Houston, including office buildings, corporate campuses, retail strip centers, shopping malls, industrial warehouses, distribution centers, multifamily apartment complexes, medical clinics, schools, churches, hotels, and HOA community common areas.",
    category: "General"
  },
  {
    question: "Do you work with property management companies?",
    answer: "Yes. Working with commercial property managers and portfolio directors is a core focus of our business model. We can manage individual service requests, quarterly maintenance cycles, or comprehensive multi-property service agreements with unified invoicing and a single point of contact.",
    category: "Contractors & PMs"
  },
  {
    question: "Do you provide recurring services?",
    answer: "Yes. We coordinate recurring commercial service schedules based on your facility's operational demands. This includes daily or weekly janitorial programs, scheduled day porter services, routine parking lot sweeping, and quarterly or semi-annual pressure washing and window cleaning programs.",
    category: "Services"
  },
  {
    question: "Can you service multiple locations?",
    answer: "Yes. If your company manages a commercial portfolio with properties distributed across Houston, Sugar Land, Katy, Pearland, Cypress, and surrounding counties, we can coordinate and oversee services across all your locations through one central account manager.",
    category: "Contractors & PMs"
  },
  {
    question: "Do you work with general contractors?",
    answer: "Yes. We frequently partner with general contractors, construction managers, and tenant build-out teams throughout Houston for phased post-construction cleaning (rough, final, and punch-list cleaning) and exterior site pressure washing prior to owner handover and certificate of occupancy inspections.",
    category: "Contractors & PMs"
  },
  {
    question: "Do you provide post-construction cleaning?",
    answer: "Yes. Our post-construction cleaning service handles full debris clearance, drywall dust eradication from ceilings to floors, window label and adhesive scraping, fixture polishing, and detailed floor scrubbing to ensure the space is pristine and ready for tenant move-in.",
    category: "Services"
  },
  {
    question: "How quickly can I receive an estimate?",
    answer: "Standard commercial quote requests submitted through our website or by phone are reviewed promptly. For most standard properties and project scopes, we deliver formal pricing proposals within 24 to 48 business hours. For complex multi-site portfolios or urgent job-site turnarounds, expedited assessments can be coordinated.",
    category: "Quotes & Billing"
  },
  {
    question: "Can I send photos of the property?",
    answer: "Yes. Our commercial quote form includes an integrated photo upload tool allowing you to submit site photos, architectural plans, or scope documents directly. Visuals help us expedite scope verification and return your quote faster.",
    category: "Quotes & Billing"
  },
  {
    question: "Do you provide vendor documentation?",
    answer: "Yes. We provide complete vendor documentation packages upon request, including W-9 forms, Certificates of Insurance (COI) listing your property management company or ownership entity as additional insured, and standard vendor onboarding packages.",
    category: "General"
  },
  {
    question: "What areas of Houston do you serve?",
    answer: "We serve the entire Houston metropolitan area, including the City of Houston, Sugar Land, Richmond, Katy, Missouri City, Stafford, Pearland, Cypress, Rosenberg, Spring, The Woodlands, Conroe, Tomball, and all commercial corridors across Harris, Fort Bend, and surrounding counties.",
    category: "General"
  },
  {
    question: "How do you coordinate service delivery and quality control?",
    answer: "PenRunners serves as your dedicated single point of contact. We schedule and coordinate qualified, insured service crews, oversee site execution, verify compliance with the agreed scope of work, and maintain direct communication with your property or project manager before, during, and after service completion.",
    category: "General"
  },
  {
    question: "Do you offer after-hours or weekend scheduling?",
    answer: "Yes. We understand commercial operations cannot be disrupted during business hours. We coordinate evening, overnight, and weekend service execution for pressure washing, parking lot maintenance, floor refinishing, and deep janitorial projects.",
    category: "Services"
  }
];
