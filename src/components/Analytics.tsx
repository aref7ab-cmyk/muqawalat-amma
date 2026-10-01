'use client';

import Script from 'next/script';
import { GA_ID, GADS_ID } from '@/lib/analytics';

/**
 * Injects GA4 and Google Ads gtag scripts.
 * Renders nothing if environment variables are not set.
 * Place inside <body> in layout.tsx.
 */
export default function Analytics() {
  if (!GA_ID && !GADS_ID) return null;

  const trackingId = GA_ID || GADS_ID;
  const initScript = [
    'window.dataLayer = window.dataLayer || [];',
    'function gtag(){dataLayer.push(arguments);}',
    "gtag('js', new Date());",
    GA_ID ? `gtag('config', '${GA_ID}', { page_path: window.location.pathname });` : '',
    GADS_ID ? `gtag('config', '${GADS_ID}');` : '',
  ].filter(Boolean).join('\n');

  return (
    <>
      <Script
        id="gtag-js"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: initScript }}
      />
    </>
  );
}
