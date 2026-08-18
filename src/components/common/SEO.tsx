import { useEffect } from 'react';
import { businessInfo } from '../../data/businessInfo';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  keywords?: string[];
  ogImage?: string;
  schemaType?: 'LocalBusiness' | 'Service' | 'WebPage';
  serviceName?: string;
  structuredData?: Record<string, any>;
}

export default function SEO({
  title = `${businessInfo.name} | ${businessInfo.tagline}`,
  description = "Commercial property cleaning, pressure washing, post-construction cleanup, and facility maintenance throughout Greater Houston, Sugar Land, Katy, and Fort Bend County.",
  canonicalPath = "",
  keywords = [
    "commercial pressure washing Houston",
    "commercial cleaning Houston",
    "post construction cleaning Houston",
    "commercial janitorial services Houston",
    "commercial property maintenance Houston",
    "commercial window cleaning Houston",
    "property cleanup Houston",
    "apartment turnover cleaning Houston",
    "parking lot cleaning Houston",
    "commercial cleaning Fort Bend County",
    "pressure washing Sugar Land",
    "post construction cleaning Katy"
  ],
  ogImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
  schemaType = "LocalBusiness",
  serviceName,
  structuredData
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords.join(', '));

    // Update OpenGraph tags
    const ogTags: Record<string, string> = {
      'og:title': title,
      'og:description': description,
      'og:image': ogImage,
      'og:type': 'website',
      'og:url': `${businessInfo.website}${canonicalPath}`
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Inject JSON-LD Schema
    const scriptId = 'penrunners-jsonld-schema';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const defaultSchema = {
      "@context": "https://schema.org",
      "@type": schemaType === "Service" ? "Service" : "LocalBusiness",
      "name": businessInfo.name,
      "image": ogImage,
      "telephone": businessInfo.phone,
      "email": businessInfo.email,
      "url": businessInfo.website,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Houston",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "areaServed": businessInfo.serviceAreas.map(city => ({
        "@type": "City",
        "name": `${city}, TX`
      })),
      "priceRange": "$$",
      "description": description,
      ...(serviceName ? { "serviceType": serviceName } : {})
    };

    scriptTag.text = JSON.stringify(structuredData || defaultSchema);
  }, [title, description, canonicalPath, keywords, ogImage, schemaType, serviceName, structuredData]);

  return null;
}
