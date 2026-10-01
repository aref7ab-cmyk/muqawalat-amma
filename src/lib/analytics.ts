/**
 * Analytics & Conversion Tracking Helper
 *
 * Supports:
 *  - Google Analytics 4 (NEXT_PUBLIC_GA_ID)
 *  - Google Ads Conversion Tracking (NEXT_PUBLIC_GOOGLE_ADS_ID + labels)
 *
 * All functions are safe to call even when IDs are not configured.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** GA4 Measurement ID — set via Vercel env var */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

/** Google Ads account ID — set via Vercel env var */
export const GADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? '';

/**
 * Google Ads conversion labels — replace placeholder values in Vercel env vars.
 * Each label corresponds to a distinct conversion action defined in Google Ads.
 */
export const CONVERSION_LABELS = {
  whatsapp: process.env.NEXT_PUBLIC_GADS_LABEL_WHATSAPP ?? '',
  phone: process.env.NEXT_PUBLIC_GADS_LABEL_PHONE ?? '',
  quote: process.env.NEXT_PUBLIC_GADS_LABEL_QUOTE ?? '',
};

/** Push a raw command to gtag — no-op when gtag is unavailable. */
function gtag(...args: unknown[]): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args);
  }
}

/**
 * Track a named GA4 event.
 *
 * Supported event names:
 *  click_whatsapp | click_phone | click_quote | view_service | view_gallery
 */
export function trackEvent(
  eventName: 'click_whatsapp' | 'click_phone' | 'click_quote' | 'view_service' | 'view_gallery',
  params?: Record<string, string | number | boolean>
): void {
  if (!GA_ID) return;
  gtag('event', eventName, params ?? {});
}

/** Track a Google Ads conversion — only fires when both IDs and label are set. */
export function trackAdsConversion(
  label: keyof typeof CONVERSION_LABELS,
  value?: number
): void {
  if (!GADS_ID || !CONVERSION_LABELS[label]) return;
  gtag('event', 'conversion', {
    send_to: GADS_ID + '/' + CONVERSION_LABELS[label],
    ...(value !== undefined ? { value, currency: 'SAR' } : {}),
  });
}

/**
 * Handles a WhatsApp link click:
 *  1. Fires GA4 event
 *  2. Fires Google Ads conversion
 *  3. Opens the link (preserves any UTM params already on the href)
 */
export function handleWhatsAppClick(href: string): void {
  trackEvent('click_whatsapp', { link: href });
  trackAdsConversion('whatsapp');
  window.open(href, '_blank', 'noopener,noreferrer');
}

/**
 * Handles a phone (tel:) link click:
 *  1. Fires GA4 event
 *  2. Fires Google Ads conversion
 *  3. Opens the tel: link
 */
export function handlePhoneClick(href: string): void {
  trackEvent('click_phone', { link: href });
  trackAdsConversion('phone');
  window.location.href = href;
}

/**
 * Handles a "request a quote" click:
 *  1. Fires GA4 event
 *  2. Fires Google Ads conversion
 */
export function handleQuoteClick(): void {
  trackEvent('click_quote');
  trackAdsConversion('quote');
}
