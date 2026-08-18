import { businessInfo } from '../data/businessInfo';

// Analytics & Lead Tracking Utilities
// Supports GA4, Google Tag Manager (GTM), and Google Ads conversion events without throwing errors when IDs are not set.

export type TrackingEventType =
  | 'quote_form_started'
  | 'quote_form_submitted'
  | 'phone_clicked'
  | 'email_clicked'
  | 'service_page_viewed'
  | 'vendor_form_submitted'
  | 'request_capability_info'
  | 'gc_quote_initiated';

export interface EventParams {
  serviceName?: string;
  propertyType?: string;
  cityName?: string;
  formType?: string;
  location?: string;
  [key: string]: unknown;
}

export function trackEvent(eventName: TrackingEventType, params: EventParams = {}): void {
  // Push to GTM dataLayer if available
  if (typeof window !== 'undefined') {
    const win = window as unknown as { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
    
    // GTM dataLayer
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push({
      event: eventName,
      ...params,
      timestamp: new Date().toISOString()
    });

    // GA4 / Google Ads gtag
    if (typeof win.gtag === 'function') {
      win.gtag('event', eventName, {
        ...params,
        send_to: businessInfo.ga4MeasurementId !== 'G-XXXXXXXXXX' ? businessInfo.ga4MeasurementId : undefined
      });
    }

    // Development logging
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[Analytics Event Tracked]: ${eventName}`, params);
    }
  }
}

export function trackPhoneClick(locationContext: string = 'header'): void {
  trackEvent('phone_clicked', { location: locationContext });
}

export function trackEmailClick(locationContext: string = 'footer'): void {
  trackEvent('email_clicked', { location: locationContext });
}

export function trackQuoteStarted(serviceName?: string): void {
  trackEvent('quote_form_started', { serviceName });
}

export function trackQuoteSubmitted(propertyType: string, serviceCount: number): void {
  trackEvent('quote_form_submitted', { propertyType, serviceCount });
}

export function trackVendorSubmitted(primaryTrade: string): void {
  trackEvent('vendor_form_submitted', { primaryTrade });
}
