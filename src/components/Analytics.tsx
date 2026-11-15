'use client';

import Script from 'next/script';

const GA_ID = 'G-5VRSSL1TKP';

/**
 * Injects GA4 and Google Ads gtag scripts.
 * Renders nothing if environment variables are not set.
 * Place inside <body> in layout.tsx.
 */
export default function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}', { page_path: window.location.pathname });`}</Script>
    </>
  );
}
