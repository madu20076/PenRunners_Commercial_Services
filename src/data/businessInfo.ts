export interface BusinessContactInfo {
  name: string;
  tagline: string;
  website: string;
  phone: string;
  phoneRaw: string;
  email: string;
  quoteEmail: string;
  vendorEmail: string;
  address: string;
  city: string;
  state: string;
  serviceRadius: string;
  hours: string;
  serviceAreas: string[];
  counties: string[];
  formspreeQuoteEndpoint: string;
  formspreeVendorEndpoint: string;
  ga4MeasurementId: string;
  gtmId: string;
  googleAdsConversionId: string;
}

export const businessInfo: BusinessContactInfo = {
  name: "PenRunners Commercial Services",
  tagline: "One Call. Multiple Property Solutions.",
  website: "https://www.penrunners.com",
  phone: "PHONE_NUMBER_HERE", // E.g. (713) 555-0199 - Replace with actual business number
  phoneRaw: "PHONE_NUMBER_HERE", // E.g. +17135550199 for tel: links
  email: "EMAIL_ADDRESS_HERE", // E.g. info@penrunners.com
  quoteEmail: "quotes@penrunners.com", // E.g. quotes@penrunners.com
  vendorEmail: "vendors@penrunners.com",
  address: "BUSINESS_ADDRESS_HERE", // E.g. 1000 Main St, Houston, TX 77002
  city: "Houston",
  state: "TX",
  serviceRadius: "Greater Houston Metropolitan Area & Surrounding Counties",
  hours: "Monday – Friday: 7:00 AM – 6:00 PM | 24/7 After-Hours Emergency Project Support",
  serviceAreas: [
    "Houston",
    "Sugar Land",
    "Richmond",
    "Katy",
    "Missouri City",
    "Stafford",
    "Pearland",
    "Cypress",
    "Rosenberg",
    "Spring",
    "The Woodlands",
    "Conroe",
    "Tomball",
    "Fulshear",
    "League City",
    "Pasadena",
    "Baytown",
    "Clear Lake",
    "Friendswood",
    "Bellaire",
    "West University Place",
    "Humble",
    "Kingwood"
  ],
  counties: [
    "Harris County",
    "Fort Bend County",
    "Montgomery County",
    "Brazoria County",
    "Galveston County"
  ],
  // Formspree Endpoints (Easily replaced with production Formspree IDs)
  formspreeQuoteEndpoint: "https://formspree.io/f/YOUR_QUOTE_FORM_ID",
  formspreeVendorEndpoint: "https://formspree.io/f/YOUR_VENDOR_FORM_ID",
  
  // Analytics & Tracking IDs
  ga4MeasurementId: "G-XXXXXXXXXX",
  gtmId: "GTM-XXXXXXX",
  googleAdsConversionId: "AW-XXXXXXXXX"
};
