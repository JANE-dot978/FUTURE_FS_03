import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid rgba(201,168,76,0.15)', fontFamily: 'Segoe UI, sans-serif' }}>

      <style>{`
        .footer-link:hover { color: #c9a84c !important; }
        .social-btn:hover { background: #c9a84c !important; color: #000 !important; border-color: #c9a84c !important; }
        @media(max-width:900px){
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 3rem !important; }
        }
        @media(max-width:550px){
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-bottom-inner { flex-direction: column !important; text-align: center !important; gap: 1rem !important; }
        }
      `}</style>

      {/* TOP STRIP */}
      <div style={{ background: 'linear-gradient(135deg, #1a1400 0%, #0a0a0a 50%, #001a12 100%)', padding: '3rem 4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <p style={{ fontSize: '0.8rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '0.5rem' }}>Ready to Visit?</p>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: '300', color: '#fff', margin: 0 }}>
              Come experience <em style={{ color: '#c9a84c' }}>Kifahari Styles</em>
            </h3>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/contact" style={{ background: '#c9a84c', color: '#000', padding: '0.9rem 2rem', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s' }}>
              Book Now →
            </a>
            <a href="https://wa.me/254700000000" style={{ background: '#25D366', color: '#fff', padding: '0.9rem 2rem', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 4rem' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '4rem' }}>

          {/* Brand */}
          <div>
            <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '2px', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#c9a84c', fontFamily: 'Georgia, serif', lineHeight: '1' }}>K</span>
              <span style={{ fontSize: '1.3rem', fontWeight: '300', color: '#fff', fontFamily: 'Georgia, serif', letterSpacing: '0.05em' }}>ifahari Styles</span>
            </a>
            <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.9', maxWidth: '280px', marginBottom: '2rem' }}>
              Nairobi's premier destination for salon, barbershop and boutique services — all under one roof on Ngong Road.
            </p>
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              {[
                { label: 'IG', href: '#' },
                { label: 'FB', href: '#' },
                { label: 'TW', href: '#' },
                { label: 'YT', href: '#' },
              ].map((s, i) => (
                <a key={i} href={s.href} className="social-btn" style={{ width: '38px', height: '38px', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: '700', color: '#888', textDecoration: 'none', transition: 'all 0.3s' }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: '700', marginBottom: '1.5rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                { label: '💅 Ladies Salon', href: '/services' },
                { label: '✂️ Barbershop', href: '/services' },
                { label: '👗 Boutique', href: '/services' },
                { label: '💍 Jewellery', href: '/services' },
                { label: '👟 Shoes', href: '/services' },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="footer-link" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: '700', marginBottom: '1.5rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Contact', href: '/contact' },
                { label: 'Book Appointment', href: '/contact' },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="footer-link" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: '700', marginBottom: '1.5rem' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {[
                { icon: '📍', text: 'Ngong Road, Nairobi, Kenya' },
                { icon: '📞', text: '+254 700 000 000' },
                { icon: '📧', text: 'hello@kifaharistyles.co.ke' },
                { icon: '🕐', text: 'Mon–Sat: 8AM – 8PM' },
                { icon: '🕐', text: 'Sunday: 10AM – 6PM' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: '0.1rem' }}>{item.icon}</span>
                  <span style={{ fontSize: '0.9rem', color: '#888', lineHeight: '1.6' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem 4rem' }}>
        <div className="footer-bottom-inner" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#555', fontSize: '0.85rem', margin: 0 }}>
            © {currentYear} Kifahari Styles. All rights reserved. Nairobi, Kenya.
          </p>
          <p style={{ color: '#555', fontSize: '0.85rem', margin: 0 }}>
            Built with ♥ by{' '}
            <a href="https://janegathu.netlify.app" target="_blank" rel="noreferrer" style={{ color: '#c9a84c', textDecoration: 'none' }}>
              Jane Gathu
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}