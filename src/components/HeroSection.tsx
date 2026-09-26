'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/images/5.jpg"
          alt="فخر الخليج للمقاولات العامة - أعمال هياكل حديدية"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Dark overlay with gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(10,15,10,0.92) 0%, rgba(27,67,50,0.75) 50%, rgba(10,15,10,0.85) 100%)',
        }} />
        {/* Gold accent overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)',
        }} />
      </div>

      {/* Animated background shapes */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.15)',
        animation: 'spin 20s linear infinite',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.1)',
        animation: 'spin 30s linear infinite reverse',
        zIndex: 1,
      }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '8rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: '750px' }}>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(201,168,76,0.15)',
              border: '1px solid rgba(201,168,76,0.4)',
              borderRadius: '50px',
              padding: '0.4rem 1.2rem',
              marginBottom: '1.75rem',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.1s',
            }}
          >
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--color-gold)',
              display: 'block',
              animation: 'pulse-gold 2s infinite',
            }} />
            <span style={{ color: 'var(--color-gold)', fontWeight: 600, fontSize: '0.9rem' }}>
              الدمام - المملكة العربية السعودية
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 6vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.2,
              marginBottom: '1.5rem',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s ease 0.2s',
            }}
          >
            <span style={{ color: 'var(--color-white)', display: 'block' }}>فخر الخليج</span>
            <span className="gold-shimmer" style={{ display: 'block' }}>للمقاولات العامة</span>
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2.5vw, 1.3rem)',
              color: 'rgba(255,255,255,0.8)',
              marginBottom: '2.5rem',
              lineHeight: 1.9,
              fontWeight: 400,
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s ease 0.35s',
            }}
          >
            حلول متكاملة لأعمال المقاولات والهياكل الحديدية والمستودعات والمظلات والسواتر
            <br />
            <span style={{ color: 'var(--color-gold-light)', fontWeight: 600 }}>
              احترافية في التنفيذ، دقة في التفاصيل
            </span>
          </p>

          {/* Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s ease 0.5s',
            }}
          >
            <a href="#contact" className="btn-primary" style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              تواصل معنا
            </a>
            <a
              href="https://wa.me/966552219925"
              className="btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              واتساب
            </a>
            <a href="#portfolio" className="btn-secondary" style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}>
              معرض الأعمال
            </a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '2.5rem',
              marginTop: '3.5rem',
              flexWrap: 'wrap',
              opacity: loaded ? 1 : 0,
              transition: 'all 0.7s ease 0.7s',
            }}
          >
            {[
              { label: 'مشروع منجز', value: '٥٠+' },
              { label: 'عميل راضٍ', value: '٤٠+' },
              { label: 'خدمة متكاملة', value: '٤' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: 'var(--color-gold)',
                  lineHeight: 1.1,
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.25rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        zIndex: 2,
        opacity: loaded ? 1 : 0,
        transition: 'opacity 1s ease 1.2s',
      }}>
        <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>تصفح</span>
        <div style={{
          width: '24px',
          height: '40px',
          border: '2px solid rgba(201,168,76,0.4)',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '6px',
        }}>
          <div style={{
            width: '4px',
            height: '8px',
            background: 'var(--color-gold)',
            borderRadius: '2px',
            animation: 'scrollBounce 1.5s ease infinite',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
