import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";

const BASE_URL = "https://muqawalat-amma.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "مظلات الدمام | سواتر الدمام | هناجر وبرجولات الدمام - فخر الخليج 0552219925",
    template: "%s | فخر الخليج للمقاولات العامة",
  },
  description: "أقوى شركة مظلات وسواتر في الدمام والخبر والظهران. تركيب مظلات سيارات الدمام، سواتر حديد وقماش الدمام، هناجر الدمام، برجولات الدمام. اتصل 0552219925",
  keywords: "مظلات الدمام, سواتر الدمام, مظلات سيارات الدمام, سواتر حديد الدمام, هناجر الدمام, برجولات الدمام, مقاول مظلات الدمام, هياكل حديدية الدمام",
  authors: [{ name: "فخر الخليج للمقاولات العامة" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "مظلات وسواتر الدمام - فخر الخليج 0552219925",
    description: "شركة متخصصة في المظلات والسواتر والهياكل الحديدية والمستودعات في الدمام، المملكة العربية السعودية.",
    url: BASE_URL,
    type: "website",
    locale: "ar_SA",
    siteName: "فخر الخليج للمقاولات العامة",
  },
  twitter: {
    card: "summary_large_image",
    title: "مظلات وسواتر الدمام - فخر الخليج 0552219925",
    description: "شركة متخصصة في المظلات والسواتر والهياكل الحديدية في الدمام.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "فخر الخليج للمقاولات العامة",
  "url": BASE_URL,
  "telephone": "+966552219925",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "الدمام",
    "addressCountry": "SA",
  },
  "areaServed": [
    { "@type": "City", "name": "الدمام" },
    { "@type": "City", "name": "الخبر" },
    { "@type": "City", "name": "الظهران" },
  ],
  "description": "متخصصون في الهياكل الحديدية والمستودعات، المظلات، السواتر، البرجولات، والترميم والصيانة الشاملة في الدمام",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "خدمات فخر الخليج للمقاولات",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "مظلات الدمام" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "سواتر الدمام" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "هناجر ومستودعات الدمام" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "هياكل حديدية الدمام" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "برجولات الدمام" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ترميم وصيانة الدمام" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href={BASE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
