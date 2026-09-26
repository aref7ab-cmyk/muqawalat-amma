import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "مظلات الدمام | سواتر الدمام | هناجر وبرجولات الدمام - 0552219925",
  description: "أقوى شركة مظلات وسواتر في الدمام والخبر والظهران. تركيب مظلات سيارات الدمام، سواتر حديد وقماش الدمام، هناجر الدمام، برجولات الدمام بضمان 10 سنوات وخصم 15%. اتصل 0552219925",
  keywords: "مظلات الدمام, سواتر الدمام, مظلات سيارات الدمام, سواتر حديد الدمام, هناجر الدمام, برجولات الدمام, مقاول مظلات الدمام",
  authors: [{ name: "فخر الخليج للمقاولات العامة" }],
  robots: "index, follow",
  openGraph: {
    title: "مظلات وسواتر الدمام - 0552219925",
    description: "أضخم شركة مظلات وسواتر في الدمام",
    url: "https://muqawalat-amma.vercel.app",
    type: "website",
    locale: "ar_SA",
    siteName: "فخر الخليج للمقاولات العامة",
  },
  twitter: {
    card: "summary_large_image",
    title: "مظلات وسواتر الدمام - 0552219925",
    description: "أضخم شركة مظلات وسواتر في الدمام",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GeneralContractor",
              "name": "فخر الخليج للمقاولات العامة",
              "url": "https://fakhr-alkhaleej.com",
              "telephone": "+966552219925",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "الدمام",
                "addressCountry": "SA"
              },
              "areaServed": "الدمام",
              "description": "متخصصون في الهياكل الحديدية والمستودعات، المظلات، السواتر، والترميم والصيانة الشاملة",
              "serviceType": [
                "الهياكل الحديدية والمستودعات",
                "المظلات",
                "السواتر",
                "الترميم والصيانة الشاملة"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
