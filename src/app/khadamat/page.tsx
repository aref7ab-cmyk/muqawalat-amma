import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

const BASE_URL = 'https://fekr-alkhaleej.com';

export const metadata: Metadata = {
  title: 'خدماتنا - فخر الخليج للمقاولات العامة بالدمام',
  description: 'دليل خدمات شركة فخر الخليج للمقاولات العامة في الدمام والشرقية: مظلات، سواتر، هناجر ومستودعات، هياكل حديدية، برجولات، وترميم وصيانة شاملة. اتصل 0552219925.',
  alternates: { canonical: `${BASE_URL}/khadamat` },
};

const services = [
  {
    title: 'مظلات الدمام',
    desc: 'تركيب كافة أنواع المظلات للسيارات والحدائق والمسابح والمداخل بأعلى جودة وخامات مقاومة لأجواء المنطقة الشرقية.',
    img: '/images/5.jpg',
    slug: 'mazallat-aldammam',
    features: ['مظلات سيارات سكنية وتجارية', 'مظلات حدائق وجلسات خارجية', 'أقمشة PVC وبولي إيثيلين ألمانية وكورية'],
  },
  {
    title: 'سواتر الدمام',
    desc: 'تركيب سواتر حديد وقماش وخشب طبيعي وبلاستيكي لتوفير الخصوصية والأمان التام للفلل والمباني.',
    img: '/images/10.jpg',
    slug: 'sawatir-aldammam',
    features: ['سواتر حديد مجدول وشرائح', 'سواتر قماش بألوان عصرية', 'دهانات مقاومة للصدأ والعوامل الجوية'],
  },
  {
    title: 'هناجر ومستودعات الدمام',
    desc: 'تصميم وتنفيذ هناجر ومستودعات تجارية وصناعية بمواصفات هندسية دقيقة وعوازل حرارية وصوتية متطورة.',
    img: '/images/1.jpg',
    slug: 'hanajir-almustodaat-aldammam',
    features: ['تصاميم ومخططات هندسية معتمدة', 'عوازل أسقف وجدران عالية الكفاءة', 'سرعة إنجاز ومتانة استثنائية'],
  },
  {
    title: 'هياكل حديدية الدمام',
    desc: 'تصنيع وتشييد الهياكل المعدنية والإنشائية، الأسقف الحديدية، السلالم، والأبواب والأسوار بأعلى معايير الأمان.',
    img: '/images/7.jpg',
    slug: 'hayakil-hadidiya-aldammam',
    features: ['هياكل حديدية متينة للمباني والمصانع', 'لحام وتشطيبات هندسية دقيقة', 'مقاومة عالية للصدأ والتآكل'],
  },
  {
    title: 'برجولات الدمام',
    desc: 'تصميم وتركيب برجولات خشبية ومعدنية وألومنيوم للحدائق والمسابح والأسطح بلمسات معمارية أنيقة.',
    img: '/images/3.jpg',
    slug: 'barjolat-aldammam',
    features: ['برجولات خشبية طبيعية وصناعية', 'برجولات معدنية مودرن', 'إمكانية إضافة تظليل وإضاءة ديكورية'],
  },
  {
    title: 'ترميم وصيانة الدمام',
    desc: 'خدمات ترميم وصيانة شاملة للمباني والمنازل والمنشآت، تشمل معالجة الشقوق، العزل، الدهانات، وأعمال الواجهات.',
    img: '/images/4.jpg',
    slug: 'tarimeem-wasianah-aldammam',
    features: ['ترميم واجهات وتجديد تشطيبات', 'عزل مائي وحراري معتمد', 'عقود صيانة دورية واستجابة سريعة'],
  },
];

export default function ServicesIndexPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section
          style={{
            position: 'relative',
            minHeight: '48vh',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(10,15,10,0.95) 0%, rgba(27,67,50,0.85) 100%)',
          }}
        >
          <div className="container" style={{ position: 'relative', zIndex: 2, padding: '9rem 1.5rem 4rem' }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
              <Link href="/" style={{ color: 'var(--color-gold)', textDecoration: 'none' }}>
                الرئيسية
              </Link>
              <span>/</span>
              <span style={{ color: '#ffffff' }}>خدماتنا</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}
            >
              خدمات <span className="gold-shimmer">فخر الخليج</span> للمقاولات
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                color: 'rgba(255,255,255,0.8)',
                maxWidth: '700px',
                lineHeight: 1.8,
              }}
            >
              نقدم حلولاً متكاملة ومبتكرة في تنفيذ المظلات والسواتر والهناجر والهياكل الحديدية والبرجولات وأعمال الترميم بالدمام والمنطقة الشرقية بمواصفات هندسية رائدة.
            </p>
          </div>
        </section>

        {/* Services Grid Section */}
        <section style={{ padding: '5rem 0', background: '#f8faf8' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}>
              {services.map((service, index) => (
                <article
                  key={service.slug}
                  id={`service-card-${index}`}
                  className="card-hover"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e4e4e7',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  }}
                >
                  {/* Card Image */}
                  <Link href={`/khadamat/${service.slug}`} style={{ display: 'block' }}>
                    <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                      />
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(10,15,10,0.85) 0%, rgba(10,15,10,0.2) 60%, transparent 100%)',
                      }} />
                    </div>
                  </Link>

                  {/* Card Body */}
                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h2 style={{
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      marginBottom: '0.75rem',
                      lineHeight: 1.4,
                    }}>
                      <Link
                        href={`/khadamat/${service.slug}`}
                        style={{
                          color: '#0a2e1f',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {service.title}
                      </Link>
                    </h2>

                    <p style={{
                      color: '#52525b',
                      fontSize: '0.94rem',
                      lineHeight: 1.85,
                      marginBottom: '1.25rem',
                    }}>
                      {service.desc}
                    </p>

                    {/* Features checklist */}
                    <ul style={{ listStyle: 'none', marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {service.features.map((feat, i) => (
                        <li key={i} style={{ fontSize: '0.88rem', color: '#374151', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>✓</span>
                          {feat}
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                      <Link
                        href={`/khadamat/${service.slug}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: 'var(--color-gold)',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          textDecoration: 'none',
                        }}
                      >
                        عرض تفاصيل الخدمة
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

