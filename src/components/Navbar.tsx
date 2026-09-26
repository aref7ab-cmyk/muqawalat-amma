'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'معرض الأعمال', href: '#portfolio' },
  { label: 'الأسئلة الشائعة', href: '#faq' },
  { label: 'تواصل معنا', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          zIndex: 1000,
          transition: 'all 0.4s ease',
          background: scrolled
            ? 'rgba(10, 15, 10, 0.97)'
            : 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%)',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
          padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="#home" onClick={handleLinkClick} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <span style={{
                fontSize: '1.4rem',
                fontWeight: 900,
                color: 'var(--color-gold)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}>
                فخر الخليج
              </span>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.75)',
                letterSpacing: '0.05em',
              }}>
                للمقاولات العامة
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul
            style={{
              display: 'flex',
              gap: '0.25rem',
              listStyle: 'none',
              alignItems: 'center',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    color: 'rgba(255,255,255,0.85)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    padding: '0.5rem 0.85rem',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    display: 'block',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = 'var(--color-gold)';
                    (e.target as HTMLElement).style.background = 'rgba(201,168,76,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.85)';
                    (e.target as HTMLElement).style.background = 'transparent';
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:0552219925"
                className="btn-primary"
                style={{ padding: '0.55rem 1.25rem', fontSize: '0.9rem' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                اتصل الآن
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            id="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
            }}
            className="hamburger-btn"
            aria-label="فتح القائمة"
          >
            <span style={{
              display: 'block',
              width: '26px',
              height: '2px',
              background: 'var(--color-gold)',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: isOpen ? 'rotate(45deg) translateY(7px)' : 'none',
            }} />
            <span style={{
              display: 'block',
              width: '26px',
              height: '2px',
              background: 'var(--color-gold)',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              opacity: isOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block',
              width: '26px',
              height: '2px',
              background: 'var(--color-gold)',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: isOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: 999,
          background: 'rgba(10,15,10,0.98)',
          backdropFilter: 'blur(20px)',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.77, 0, 0.175, 1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          paddingTop: '5rem',
        }}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            style={{
              color: 'var(--color-white)',
              textDecoration: 'none',
              fontSize: '1.5rem',
              fontWeight: 700,
              padding: '0.75rem 2rem',
              borderBottom: '1px solid rgba(201,168,76,0.2)',
              width: '80%',
              textAlign: 'center',
              transition: 'color 0.2s ease',
              animationDelay: `${i * 0.05}s`,
            }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--color-gold)'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--color-white)'}
          >
            {link.label}
          </a>
        ))}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="tel:0552219925" className="btn-primary" onClick={handleLinkClick}>
            اتصل الآن
          </a>
          <a href="https://wa.me/966552219925" className="btn-whatsapp" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
            واتساب
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
