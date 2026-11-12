import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

const BASE_URL = 'https://fekr-alkhaleej.com';

export const metadata: Metadata = {
  title: 'تواصل معنا - فخر الخليج للمقاولات العامة بالدمام',
  description: 'تواصل مع شركة فخر الخليج للمقاولات العامة في الدمام. اتصال مباشر على 0552219925 أو عبر واتساب للحصول على استشارة فنية وعرض سعر مجاني لمشروعك.',
  alternates: { canonical: `${BASE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section
          style={{
            position: 'relative',
            minHeight: '42vh',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(10,15,10,0.96) 0%, rgba(27,67,50,0.85) 100%)',
          }}
        >
          <div className="container" style={{ position: 'relative', zIndex: 2, padding: '8.5rem 1.5rem 3.5rem' }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
              <Link href="/" style={{ color: 'var(--color-gold)', textDecoration: 'none' }}>
                الرئيسية
              </Link>
              <span>/</span>
              <span style={{ color: '#ffffff' }}>تواصل معنا</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.25rem)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}
            >
              تواصل مع <span className="gold-shimmer">فخر الخليج</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                color: 'rgba(255,255,255,0.8)',
                maxWidth: '650px',
                lineHeight: 1.8,
              }}
            >
              فريقنا جاهز للرد على استفساراتكم وتقديم المشورة الفنية وعروض الأسعار التنافسية لجميع مشاريع المقاولات في الدمام والشرقية.
            </p>
          </div>
        </section>

        {/* Contact section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

