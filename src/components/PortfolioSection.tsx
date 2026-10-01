'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// All 20 images
const allImages = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  src: `/images/${i + 1}.jpg`,
  alt: `معرض أعمال فخر الخليج للمقاولات العامة - صورة ${i + 1}`,
}));

export default function PortfolioSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(12);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxOpen]);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') prevImage();
    if (e.key === 'ArrowLeft') nextImage();
  };

  return (
    <section
      id="portfolio"
      style={{
        padding: '6rem 0',
        background: '#ffffff',
        position: 'relative',
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)',
      }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="section-label">معرض أعمالنا</p>
          <div className="gold-line" style={{ margin: '0 auto 1.5rem' }} />
          <h2 className="section-title">
            من <span>أعمالنا</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            نماذج من مشاريعنا المنجزة في الهياكل الحديدية والمظلات والسواتر وأعمال الصيانة
          </p>
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1rem',
        }}>
          {allImages.slice(0, visibleCount).map((img, index) => (
            <div
              key={img.id}
              onClick={() => openLightbox(index)}
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                aspectRatio: index % 5 === 0 ? '16/10' : '4/3',
                background: '#f4f4f5',
                border: '1px solid #e4e4e7',
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                style={{
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'scale(1.08)'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'scale(1)'}
              />
              {/* Hover overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,15,10,0.8) 0%, rgba(27,67,50,0.3) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'rgba(201,168,76,0.9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        {visibleCount < allImages.length && (
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              onClick={() => setVisibleCount(allImages.length)}
              className="btn-secondary"
            >
              عرض جميع الصور ({allImages.length})
            </button>
          </div>
        )}

        {/* CTA */}
        <div style={{
          marginTop: '4rem',
          textAlign: 'center',
          background: '#f9fafb',
          border: '1px solid #e4e4e7',
          borderRadius: '20px',
          padding: '3rem 2rem',
        }}>
          <h3 style={{
            fontSize: '1.6rem',
            fontWeight: 800,
            color: '#0a2e1f',
            marginBottom: '0.75rem',
          }}>
            هل تريد مشروعاً مشابهاً؟
          </h3>
          <p style={{ color: '#52525b', marginBottom: '1.75rem', fontSize: '1rem' }}>
            تواصل معنا الآن للحصول على استشارة مجانية
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:0552219925" className="btn-primary">
              اتصال مباشر
            </a>
            <a href="https://wa.me/966552219925" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
              واتساب
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.95)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-label="معاينة الصورة"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: 'white',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '1.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10001,
            }}
            aria-label="إغلاق"
          >
            ✕
          </button>

          {/* Counter */}
          <div style={{
            position: 'absolute',
            top: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '0.9rem',
            background: 'rgba(0,0,0,0.5)',
            padding: '0.4rem 1rem',
            borderRadius: '20px',
          }}>
            {currentIndex + 1} / {allImages.length}
          </div>

          {/* Image */}
          <div
            style={{ position: 'relative', width: '90vw', height: '85vh', maxWidth: '1200px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allImages[currentIndex].src}
              alt={allImages[currentIndex].alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Prev/Next */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(201,168,76,0.8)',
              border: 'none',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '1.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10001,
            }}
            aria-label="السابق"
          >
            ›
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(201,168,76,0.8)',
              border: 'none',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '1.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10001,
            }}
            aria-label="التالي"
          >
            ‹
          </button>
        </div>
      )}
    </section>
  );
}
