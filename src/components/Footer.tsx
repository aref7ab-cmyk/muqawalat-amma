'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: '#060a06',
      borderTop: '1px solid rgba(201,168,76,0.15)',
      padding: '4rem 0 0',
    }}>
      <div className="container">
        {/* Main footer content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          paddingBottom: '3rem',
        }}>
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                color: 'var(--color-gold)',
                lineHeight: 1.1,
              }}>
                فخر الخليج
              </div>
              <div style={{
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.55)',
                marginTop: '0.25rem',
                fontWeight: 500,
              }}>
                للمقاولات العامة
              </div>
            </div>
            <p style={{
              color: '#5a6e5a',
              fontSize: '0.92rem',
              lineHeight: 1.9,
              marginBottom: '1.5rem',
            }}>
              متخصصون في أعمال المقاولات العامة بالدمام - المملكة العربية السعودية
            </p>
            {/* Social-like contact buttons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="tel:0552219925"
                id="footer-call-btn"
                style={{
                  width: '44px',
                  height: '44px',
                  background: 'rgba(201,168,76,0.15)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  color: 'var(--color-gold)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = 'var(--color-gold)';
                  el.style.color = 'var(--color-dark)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = 'rgba(201,168,76,0.15)';
                  el.style.color = 'var(--color-gold)';
                }}
                aria-label="اتصال"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/966552219925"
                id="footer-whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '44px',
                  height: '44px',
                  background: 'rgba(37,211,102,0.1)',
                  border: '1px solid rgba(37,211,102,0.25)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  color: '#25D366',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = '#25D366';
                  el.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = 'rgba(37,211,102,0.1)';
                  el.style.color = '#25D366';
                }}
                aria-label="واتساب"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--color-gold)',
              marginBottom: '1.25rem',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid rgba(201,168,76,0.2)',
            }}>
              روابط سريعة
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { label: 'الرئيسية', href: '#home' },
                { label: 'من نحن', href: '#about' },
                { label: 'خدماتنا', href: '#services' },
                { label: 'معرض الأعمال', href: '#portfolio' },
                { label: 'الأسئلة الشائعة', href: '#faq' },
                { label: 'تواصل معنا', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      color: '#5a6e5a',
                      textDecoration: 'none',
                      fontSize: '0.92rem',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--color-gold)'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#5a6e5a'}
                  >
                    <span style={{ color: 'var(--color-gold)', fontSize: '0.7rem' }}>◆</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--color-gold)',
              marginBottom: '1.25rem',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid rgba(201,168,76,0.2)',
            }}>
              خدماتنا
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                'الهياكل الحديدية والمستودعات',
                'المظلات',
                'السواتر',
                'الترميم والصيانة الشاملة',
              ].map((service) => (
                <li key={service} style={{
                  color: '#5a6e5a',
                  fontSize: '0.92rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}>
                  <span style={{ color: 'var(--color-green-light)', fontSize: '0.7rem' }}>✓</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--color-gold)',
              marginBottom: '1.25rem',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid rgba(201,168,76,0.2)',
            }}>
              معلومات التواصل
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ color: '#5a6e5a', fontSize: '0.8rem', marginBottom: '0.3rem' }}>رقم التواصل</div>
                <a
                  href="tel:0552219925"
                  style={{
                    color: 'var(--color-gold)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  0552219925
                </a>
              </div>
              <div>
                <div style={{ color: '#5a6e5a', fontSize: '0.8rem', marginBottom: '0.3rem' }}>واتساب</div>
                <a
                  href="https://wa.me/966552219925"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#25D366',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  0552219925
                </a>
              </div>
              <div>
                <div style={{ color: '#5a6e5a', fontSize: '0.8rem', marginBottom: '0.3rem' }}>الموقع</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', fontWeight: 500 }}>
                  الدمام، المملكة العربية السعودية
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '1.5rem 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          textAlign: 'center',
        }}>
          <p style={{ color: '#3a4a3a', fontSize: '0.85rem' }}>
            © {currentYear} فخر الخليج للمقاولات العامة - جميع الحقوق محفوظة
          </p>
          <p style={{
            color: '#3a4a3a',
            fontSize: '0.8rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            paddingTop: '0.5rem',
            marginTop: '0.25rem',
          }}>
            تصميم وتطوير:{' '}
            <span style={{ color: '#5a6e5a', fontWeight: 600 }}>أبو يحيى</span>
            {' | '}
            <span style={{ color: '#4a5a4a' }}>781040510</span>
          </p>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/966552219925"
        id="float-whatsapp-btn"
        className="float-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  );
}
