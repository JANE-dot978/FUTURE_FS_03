import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
        background: scrolled ? 'rgba(8,8,8,0.98)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
        padding: scrolled ? '1rem 0' : '1.5rem 0',
        transition: 'all 0.4s ease',
        fontFamily: 'Segoe UI, sans-serif',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          padding: '0 2rem', display: 'flex',
          alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* Logo */}
          <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '2px' }}>
            <span style={{ fontSize: '2rem', fontWeight: '800', color: '#c9a84c', fontFamily: 'Georgia, serif' }}>K</span>
            <span style={{ fontSize: '1.1rem', fontWeight: '300', color: '#fff', fontFamily: 'Georgia, serif', letterSpacing: '0.05em' }}>ifahari Styles</span>
          </a>

          {/* Desktop Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} id="desktop-links">
            {links.map(link => (
              <a key={link.label} href={link.href} style={{
                color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
                fontSize: '0.75rem', letterSpacing: '0.2em',
                textTransform: 'uppercase', fontWeight: '500',
                transition: 'color 0.3s',
              }}
                onMouseEnter={e => e.target.style.color = '#c9a84c'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
              >{link.label}</a>
            ))}
            <a href="/contact" style={{
              background: '#c9a84c', color: '#000',
              padding: '0.6rem 1.5rem', borderRadius: '2px',
              fontSize: '0.75rem', letterSpacing: '0.2em',
              fontWeight: '700', textTransform: 'uppercase',
              textDecoration: 'none', transition: 'all 0.3s',
            }}
              onMouseEnter={e => e.target.style.background = '#e8c96a'}
              onMouseLeave={e => e.target.style.background = '#c9a84c'}
            >Book Now</a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} id="hamburger-btn" style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'none', flexDirection: 'column', gap: '5px', padding: '5px',
          }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: '25px', height: '2px',
                background: '#fff', transition: 'all 0.3s',
                transform: isOpen
                  ? i === 0 ? 'translateY(7px) rotate(45deg)'
                  : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'none'
                  : 'none',
                opacity: isOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{
            background: 'rgba(8,8,8,0.99)',
            borderTop: '1px solid rgba(201,168,76,0.15)',
            padding: '2rem',
            display: 'flex', flexDirection: 'column', gap: '1.5rem',
          }}>
            {links.map(link => (
              <a key={link.label} href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
                  fontSize: '0.9rem', letterSpacing: '0.2em',
                  textTransform: 'uppercase', fontWeight: '500',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid rgba(201,168,76,0.1)',
                }}>
                {link.label}
              </a>
            ))}
            <a href="/contact" onClick={() => setIsOpen(false)} style={{
              background: '#c9a84c', color: '#000',
              padding: '1rem', textAlign: 'center',
              fontSize: '0.8rem', letterSpacing: '0.2em',
              fontWeight: '700', textTransform: 'uppercase',
              textDecoration: 'none', borderRadius: '2px',
            }}>Book Now</a>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          #desktop-links { display: none !important; }
          #hamburger-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          #desktop-links { display: flex !important; }
          #hamburger-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}

export default Navbar;