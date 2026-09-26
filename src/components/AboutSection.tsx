'use client';

import Image from 'next/image';

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: 'جودة في التنفيذ',
    desc: 'نُولي الاهتمام بكل تفصيلة في مراحل العمل لضمان نتيجة تليق بتوقعاتكم',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'تنظيم العمل',
    desc: 'نلتزم بالجداول الزمنية المتفق عليها ونحافظ على انتظام سير المشروع',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: 'تواصل مباشر',
    desc: 'نتواصل معكم بشفافية في كل مرحلة من مراحل المشروع دون تعقيد',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: 'حلول مناسبة',
    desc: 'نقدم حلولاً مصممة خصيصاً لطبيعة مشروعكم واحتياجاتكم الفعلية',
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: '6rem 0',
        background: 'linear-gradient(180deg, var(--color-dark) 0%, var(--color-dark-2) 100%)',
      }}
    >
      <div className="container">
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section-label">من نحن</p>
          <div className="gold-line" style={{ margin: '0 auto 1.5rem' }} />
          <h2 className="section-title">
            نبذة عن <span>فخر الخليج</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            شركة متخصصة في أعمال المقاولات العامة بالدمام، نلتزم بتقديم حلول هيكلية متكاملة تجمع بين الدقة في التنفيذ والاهتمام بمتطلبات كل مشروع.
          </p>
        </div>

        {/* Content grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          alignItems: 'center',
          marginBottom: '4rem',
        }}>
          {/* Image */}
          <div style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            height: '420px',
            gridColumn: 'span 1',
          }}>
            <Image
              src="/images/2.jpg"
              alt="أعمال فخر الخليج للمقاولات العامة"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(10,15,10,0.8) 0%, transparent 60%)',
            }} />
            {/* Decorative border */}
            <div style={{
              position: 'absolute',
              inset: '12px',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: '8px',
              pointerEvents: 'none',
            }} />
          </div>

          {/* Text */}
          <div style={{ padding: '1rem' }}>
            <p className="section-label">رؤيتنا</p>
            <h3 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              color: 'var(--color-white)',
              marginBottom: '1.25rem',
              lineHeight: 1.4,
            }}>
              نبني بثقة،<br/>
              <span style={{ color: 'var(--color-gold)' }}>ونُنجز بالتزام</span>
            </h3>
            <p style={{
              color: '#8fa68f',
              lineHeight: 2,
              fontSize: '1.02rem',
              marginBottom: '1.5rem',
            }}>
              فخر الخليج للمقاولات العامة شركة تعمل في مجال الهياكل الحديدية والمظلات والسواتر وأعمال الصيانة. نسعى في كل مشروع إلى تحقيق أعلى مستويات الجودة والدقة في التنفيذ، مع الحرص على رضا العميل في كل مرحلة.
            </p>
            <p style={{
              color: '#8fa68f',
              lineHeight: 2,
              fontSize: '1.02rem',
            }}>
              نؤمن بأن كل مشروع يستحق اهتماماً خاصاً، لذلك نخصص وقتنا وجهدنا لفهم متطلباتكم وتقديم حل مناسب يُلبي احتياجاتكم الفعلية.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <a href="#contact" className="btn-primary">
                تواصل معنا
              </a>
            </div>
          </div>
        </div>

        {/* Why us features */}
        <div style={{ marginTop: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{
              fontSize: '1.6rem',
              fontWeight: 800,
              color: 'var(--color-white)',
            }}>
              لماذا <span style={{ color: 'var(--color-gold)' }}>فخر الخليج؟</span>
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '1.5rem',
          }}>
            {features.map((feature, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  background: 'linear-gradient(135deg, rgba(27,67,50,0.2) 0%, rgba(201,168,76,0.05) 100%)',
                  border: '1px solid rgba(201,168,76,0.15)',
                  borderRadius: '16px',
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))',
                  border: '1px solid rgba(201,168,76,0.3)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                  color: 'var(--color-gold)',
                }}>
                  {feature.icon}
                </div>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--color-white)',
                  marginBottom: '0.75rem',
                }}>
                  {feature.title}
                </h4>
                <p style={{
                  color: '#8fa68f',
                  fontSize: '0.92rem',
                  lineHeight: 1.8,
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
