'use client';

import { handleWhatsAppClick, handlePhoneClick, handleQuoteClick } from '@/lib/analytics';

const WA_HREF = 'https://wa.me/966552219925';
const TEL_HREF = 'tel:0552219925';

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        padding: '6rem 0',
        background: 'var(--color-dark-2)',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)',
      }} />

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section-label">اتصل بنا</p>
          <div className="gold-line" style={{ margin: '0 auto 1.5rem' }} />
          <h2 className="section-title">
            نسعد <span>بتواصلكم</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            للاستفسار عن خدماتنا أو طلب عرض سعر أو مناقشة مشروعكم، نحن في خدمتكم
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {/* Call Card */}
          <button
            id="contact-call-card"
            onClick={() => handlePhoneClick(TEL_HREF)}
            style={{
              textDecoration: 'none',
              display: 'block',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              width: '100%',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(-6px)';
              el.style.boxShadow = '0 20px 40px rgba(201,168,76,0.2)';
              el.style.borderColor = 'rgba(201,168,76,0.5)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = 'none';
              el.style.borderColor = 'rgba(201,168,76,0.25)';
            }}
          >
            <div style={{
              position: 'absolute',
              top: '-30px',
              right: '-30px',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'rgba(201,168,76,0.05)',
              pointerEvents: 'none',
            }} />
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-light))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              boxShadow: '0 8px 25px rgba(201,168,76,0.4)',
              animation: 'pulse-gold 2s infinite',
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="var(--color-dark)">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 800,
              color: 'var(--color-white)',
              marginBottom: '0.5rem',
            }}>
              اتصال مباشر
            </h3>
            <p style={{ color: '#8fa68f', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
              للتحدث مع فريقنا مباشرةً
            </p>
            <div style={{
              fontSize: '1.6rem',
              fontWeight: 900,
              color: 'var(--color-gold)',
              letterSpacing: '0.02em',
            }}>
              0552219925
            </div>
          </button>

          {/* WhatsApp Card */}
          <button
            id="contact-whatsapp-card"
            onClick={() => { handleQuoteClick(); handleWhatsAppClick(WA_HREF); }}
            style={{
              textDecoration: 'none',
              display: 'block',
              background: 'linear-gradient(135deg, rgba(37,211,102,0.1), rgba(37,211,102,0.03))',
              border: '1px solid rgba(37,211,102,0.2)',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              width: '100%',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(-6px)';
              el.style.boxShadow = '0 20px 40px rgba(37,211,102,0.2)';
              el.style.borderColor = 'rgba(37,211,102,0.4)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = 'none';
              el.style.borderColor = 'rgba(37,211,102,0.2)';
            }}
          >
            <div style={{
              position: 'absolute',
              top: '-30px',
              left: '-30px',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'rgba(37,211,102,0.04)',
              pointerEvents: 'none',
            }} />
            <div style={{
              width: '80px',
              height: '80px',
              background: '#25D366',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              boxShadow: '0 8px 25px rgba(37,211,102,0.4)',
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 800,
              color: 'var(--color-white)',
              marginBottom: '0.5rem',
            }}>
              واتساب
            </h3>
            <p style={{ color: '#8fa68f', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
              أرسل رسالة في أي وقت
            </p>
            <div style={{
              fontSize: '1.6rem',
              fontWeight: 900,
              color: '#25D366',
              letterSpacing: '0.02em',
            }}>
              0552219925
            </div>
          </button>
        </div>

        {/* Location info */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '1.5rem',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '12px',
          maxWidth: '400px',
          margin: '3rem auto 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', fontWeight: 500 }}>
            الدمام - المملكة العربية السعودية
          </span>
        </div>
      </div>
    </section>
  );
}
