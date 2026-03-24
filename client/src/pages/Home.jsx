import React, { useEffect, useRef, useState } from 'react';

const services = [
  {
    id: 'salon',
    emoji: '✦',
    category: 'Ladies Salon',
    tagline: 'Where Beauty Blooms',
    desc: 'Premium hair care, treatments and styling for the modern woman. From blowouts to braids, we celebrate every texture and style.',
    items: ['Braiding & Weaves', 'Hair Treatment', 'Wig Installation', 'Manicure & Pedicure', 'Bridal Makeup'],
    color: '#e91e8c',
    bg: 'linear-gradient(135deg, #1a0010 0%, #0d0008 100%)',
  },
  {
    id: 'barber',
    emoji: '✂',
    category: "Gentlemen's Barber",
    tagline: 'Sharp. Clean. Confident.',
    desc: 'Master barbers delivering precision fades, clean lineups and expert beard grooming for the modern gentleman.',
    items: ['Haircut & Fade', 'Beard Trim & Shape', 'Hot Towel Shave', "Kids' Cuts", 'Hair Design'],
    color: '#c9a84c',
    bg: 'linear-gradient(135deg, #1a1400 0%, #0d0d00 100%)',
  },
  {
    id: 'boutique',
    emoji: '◈',
    category: 'Fashion Boutique',
    tagline: 'Dress Your Story',
    desc: 'Curated fashion for men and women — from African print elegance to everyday chic. Style that speaks before you do.',
    items: ["Ladies' Dresses", "Men's Outfits", 'African Print Sets', 'Accessories', 'Custom Orders'],
    color: '#4ecca3',
    bg: 'linear-gradient(135deg, #001a12 0%, #000d09 100%)',
  },
];

const testimonials = [
  { name: 'Amina M.', initials: 'AM', review: "I came for a haircut and left with a whole new outfit! Kifahari Styles is the best place in Nairobi — everything in one spot.", service: 'Salon + Boutique' },
  { name: 'Brian K.', initials: 'BK', review: "Best barber I've ever been to. The fade was clean, the beard was on point. I won't go anywhere else.", service: 'Barbershop' },
  { name: 'Faith W.', initials: 'FW', review: "Got my bridal hair and makeup done here — absolutely stunning! The team was so professional and patient.", service: 'Bridal Package' },
];

const galleryItems = [
  { label: 'Salon Styling', img: 'https://media.istockphoto.com/id/1475067093/photo/shades-of-brown.jpg?s=2048x2048&w=is&k=20&c=nBxiBSnFOv5fNCceip_LYZxBrnj5TM--la2an91H-ao=', gridRow: 'span 2' },
  { label: 'Clean Fade', img: 'https://media.istockphoto.com/id/2234905564/photo/barber-working-on-clients-hair.jpg?s=2048x2048&w=is&k=20&c=Ki7v8mcFdkEtPIOfd5ibibJTtNzuFibahEzpHGTyWU4=' },
  { label: 'Fashion Pieces', img: 'https://media.istockphoto.com/id/1171482941/photo/plastic-mannequins-placed-at-the-entrance-of-a-large-clothing-supermarket.jpg?s=2048x2048&w=is&k=20&c=um6_qmxh7NmkmNBTDh1w16CiC3h6eIMgKvp5nz_Vqp0=' },
  { label: 'Box Braids', img: 'https://media.istockphoto.com/id/509053820/photo/think-pink.jpg?s=2048x2048&w=is&k=20&c=9J2f-iqvSgj1mVX6bLA-pAI7e5cilK5mdjrG6W-zkc0=' },
  { label: 'Jewellery', img: 'https://media.istockphoto.com/id/2182535524/photo/gold-jewelry-display-from-jewelry-store-window.jpg?s=2048x2048&w=is&k=20&c=zvkKbGjgZSE9Egd3oC1Dfay9ZD2NuXjDpVIzq3rPuig=' },
  { label: 'Beard Shaping', img: 'https://media.istockphoto.com/id/1354181322/photo/shot-of-a-handsome-young-man-trimming-his-beard-at-the-barber.jpg?s=2048x2048&w=is&k=20&c=bog5ll5l221qhx6Rhi-q42CMyZrKaJWut6u0NgEXc1I=' },
];

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) scale(1)';
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  const heroRef = useRef(null);
  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', background: '#080808', color: '#fff', overflowX: 'hidden' }}>

      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px) scale(0.97);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.3); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-animate { animation: fadeInUp 1s ease forwards; }
        .hero-animate-2 { animation: fadeInUp 1s ease 0.2s forwards; opacity: 0; }
        .hero-animate-3 { animation: fadeInUp 1s ease 0.4s forwards; opacity: 0; }
        .hero-animate-4 { animation: fadeInUp 1s ease 0.6s forwards; opacity: 0; }
        .hero-animate-5 { animation: fadeInUp 1s ease 0.8s forwards; opacity: 0; }
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto !important; }
          .gallery-grid > div { grid-row: span 1 !important; height: 200px; }
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section id="home" style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

        <div ref={heroRef} style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0a0800 0%, #080808 40%, #00100a 100%)' }} />
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(233,30,140,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', top: '40%', left: '30%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(78,204,163,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '950px', padding: '0 2rem', paddingTop: '6rem' }}>

          <div className="hero-animate" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(201,168,76,0.4)', borderRadius: '30px', padding: '0.5rem 1.5rem', marginBottom: '2.5rem', background: 'rgba(201,168,76,0.08)' }}>
            <span style={{ color: '#c9a84c', fontSize: '0.7rem' }}>✦</span>
            <span style={{ fontSize: '0.85rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#fff' }}>Nairobi's Premier Style Destination</span>
            <span style={{ color: '#c9a84c', fontSize: '0.7rem' }}>✦</span>
          </div>

          <h1 className="hero-animate-2" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(4rem, 11vw, 8rem)', fontWeight: '300', lineHeight: '1.05', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            <span style={{ display: 'block', color: '#fff' }}>Where Style</span>
            <span style={{ display: 'block', color: '#c9a84c', fontStyle: 'italic' }}>Meets Confidence</span>
          </h1>

          <p className="hero-animate-3" style={{ fontSize: '1rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>
            Salon · Barbershop · Boutique
          </p>

          <p className="hero-animate-4" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', maxWidth: '560px', margin: '0 auto 3.5rem', lineHeight: '1.9' }}>
            Three worlds of style under one roof. Premium hair care, precision cuts and curated fashion — all at Kifahari Styles, Nairobi.
          </p>

          <div className="hero-animate-5" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '5rem' }}>
            <a href="#contact" style={{ background: '#c9a84c', color: '#000', padding: '1.1rem 2.8rem', fontSize: '0.9rem', letterSpacing: '0.2em', fontWeight: '700', textTransform: 'uppercase', borderRadius: '2px', textDecoration: 'none', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.target.style.background = '#e8c96a'; e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 10px 30px rgba(201,168,76,0.4)'; }}
              onMouseLeave={e => { e.target.style.background = '#c9a84c'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}
            >Book Appointment</a>
            <a href="#services" style={{ background: 'transparent', color: '#fff', padding: '1.1rem 2.8rem', fontSize: '0.9rem', letterSpacing: '0.2em', fontWeight: '600', textTransform: 'uppercase', borderRadius: '2px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.target.style.borderColor = '#c9a84c'; e.target.style.color = '#c9a84c'; e.target.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.4)'; e.target.style.color = '#fff'; e.target.style.transform = 'translateY(0)'; }}
            >View Services</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem' }}>
            {[{ num: '500+', label: 'Happy Clients' }, { num: '3', label: 'Style Categories' }, { num: '5★', label: 'Rated Service' }, { num: '3+', label: 'Years in Nairobi' }].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', color: '#c9a84c', fontWeight: '600', lineHeight: '1' }}>{stat.num}</div>
                <div style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginTop: '0.4rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Scroll</span>
          <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, #c9a84c, transparent)', animation: 'scrollPulse 2s ease infinite' }} />
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" style={{ padding: '9rem 0', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <p style={{ fontSize: '0.85rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '1rem' }}>What We Offer</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: '300', marginBottom: '1.2rem', color: '#fff' }}>
              Three Worlds, <em style={{ color: '#c9a84c' }}>One Address</em>
            </h2>
            <p style={{ color: '#ccc', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto', lineHeight: '1.9' }}>A complete style experience for every member of your family</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3px' }}>
            {services.map((s, idx) => (
              <div key={s.id} className={`reveal reveal-delay-${idx + 1}`} style={{ background: s.bg, padding: '3.5rem 2.8rem', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden', transition: 'all 0.4s ease', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = s.color + '60'; e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = `0 20px 60px ${s.color}20`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '250px', height: '250px', borderRadius: '50%', background: `radial-gradient(circle, ${s.color}20 0%, transparent 70%)` }} />
                <div style={{ fontSize: '3rem', color: s.color, marginBottom: '1.5rem' }}>{s.emoji}</div>
                <div style={{ display: 'inline-block', fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: s.color, border: `1px solid ${s.color}60`, padding: '0.35rem 1rem', borderRadius: '20px', marginBottom: '1.2rem' }}>{s.category}</div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontWeight: '400', marginBottom: '0.8rem', color: '#fff' }}>{s.tagline}</h3>
                <p style={{ color: '#ccc', fontSize: '0.95rem', lineHeight: '1.9', marginBottom: '2rem' }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  {s.items.map((item, j) => (
                    <li key={j} style={{ fontSize: '0.9rem', color: '#fff', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                      <span style={{ color: s.color, fontSize: '0.7rem' }}>—</span>{item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: s.color, fontWeight: '700', textDecoration: 'none' }}>Book This Service →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '7rem 0', background: 'linear-gradient(135deg, #0d0d00 0%, #080808 50%, #000d09 100%)', borderTop: '1px solid rgba(201,168,76,0.15)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <p className="reveal" style={{ fontSize: '0.85rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '1.5rem' }}>Why Kifahari Styles</p>
          <h2 className="reveal" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: '300', lineHeight: '1.2', marginBottom: '2rem', color: '#fff' }}>
            <em style={{ color: '#c9a84c' }}>Kifahari</em> means Luxurious in Swahili.<br />
            <span style={{ color: '#fff' }}>We live up to the name.</span>
          </h2>
          <p className="reveal" style={{ color: '#ccc', fontSize: '1.05rem', lineHeight: '1.9', maxWidth: '650px', margin: '0 auto 3.5rem' }}>
            Born in Nairobi with a simple belief — that everyone deserves to look and feel their best. We brought a salon, barbershop and boutique together so your family gets everything in one visit.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
            {[{ icon: '◆', title: 'Quality First', desc: 'Premium products & expert hands on every service' }, { icon: '◆', title: 'Family Friendly', desc: 'Services for every age — kids to adults' }, { icon: '◆', title: 'Your Style', desc: 'We listen, we advise and we deliver your vision' }].map((v, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{ textAlign: 'center', maxWidth: '200px' }}>
                <div style={{ color: '#c9a84c', fontSize: '1rem', marginBottom: '1rem' }}>{v.icon}</div>
                <h4 style={{ fontSize: '0.95rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem', fontWeight: '700', color: '#fff' }}>{v.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#ccc', lineHeight: '1.7' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" style={{ padding: '9rem 0', background: '#080808' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontSize: '0.85rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '1rem' }}>Our Work</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: '300', color: '#fff' }}>
              The <em style={{ color: '#c9a84c' }}>Kifahari</em> Look
            </h2>
          </div>
          <div className="reveal gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '280px 280px', gap: '4px' }}>
            {galleryItems.map((g, i) => (
              <div key={i} style={{ gridRow: g.gridRow, position: 'relative', overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.06)' }}
                onMouseEnter={e => { e.currentTarget.querySelector('.goverlay').style.opacity = '1'; e.currentTarget.querySelector('img').style.transform = 'scale(1.08)'; }}
                onMouseLeave={e => { e.currentTarget.querySelector('.goverlay').style.opacity = '0'; e.currentTarget.querySelector('img').style.transform = 'scale(1)'; }}
              >
                <img src={g.img} alt={g.label} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.6s ease' }} />
                <div className="goverlay" style={{ position: 'absolute', inset: 0, background: 'rgba(201,168,76,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.4s', fontFamily: 'Georgia, serif', fontSize: '1.5rem', color: '#000', fontStyle: 'italic', fontWeight: '700' }}>{g.label}</div>
              </div>
            ))}
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '2rem', color: '#aaa', fontSize: '0.95rem' }}>📸 Follow us on Instagram for more of our work</p>
        </div>
      </section>
      <section style={{ padding: '9rem 0', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontSize: '0.85rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '1rem' }}>Client Love</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: '300', color: '#fff' }}>
              What Our <em style={{ color: '#c9a84c' }}>Clients Say</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)', padding: '2.8rem', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(201,168,76,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ color: '#c9a84c', fontSize: '1.2rem', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>★★★★★</div>
                <p style={{ color: '#ddd', fontSize: '1rem', lineHeight: '1.9', marginBottom: '1.8rem', fontStyle: 'italic' }}>"{t.review}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', color: '#c9a84c', fontWeight: '700' }}>{t.initials}</div>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: '700', color: '#fff' }}>{t.name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#c9a84c' }}>{t.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ padding: '9rem 0', background: 'linear-gradient(135deg, #1a1400 0%, #080808 50%, #001a12 100%)', borderTop: '1px solid rgba(201,168,76,0.15)', textAlign: 'center' }}>
        <div className="reveal" style={{ maxWidth: '750px', margin: '0 auto', padding: '0 2rem' }}>
          <p style={{ fontSize: '0.85rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '1.5rem' }}>Ready to Transform?</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: '300', marginBottom: '1.5rem', color: '#fff' }}>
            Book Your <em style={{ color: '#c9a84c' }}>Appointment</em> Today
          </h2>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '3.5rem' }}>
            Walk in or book ahead — we're always ready for you.<br />Located along Ngong Road, Nairobi.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="#contact" style={{ background: '#c9a84c', color: '#000', padding: '1.1rem 2.8rem', fontSize: '0.9rem', letterSpacing: '0.2em', fontWeight: '700', textTransform: 'uppercase', borderRadius: '2px', textDecoration: 'none', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.target.style.background = '#e8c96a'; e.target.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.target.style.background = '#c9a84c'; e.target.style.transform = 'translateY(0)'; }}
            >Book Appointment</a>
            <a href="https://wa.me/254700000000" style={{ background: '#25D366', color: '#fff', padding: '1.1rem 2.8rem', fontSize: '0.9rem', letterSpacing: '0.2em', fontWeight: '700', textTransform: 'uppercase', borderRadius: '2px', textDecoration: 'none', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; }}
            >💬 WhatsApp Us</a>
            <a href="tel:+254700000000" style={{ background: 'transparent', color: '#fff', padding: '1.1rem 2.8rem', fontSize: '0.9rem', letterSpacing: '0.2em', fontWeight: '600', textTransform: 'uppercase', borderRadius: '2px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.target.style.borderColor = '#c9a84c'; e.target.style.color = '#c9a84c'; e.target.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.4)'; e.target.style.color = '#fff'; e.target.style.transform = 'translateY(0)'; }}
            >📞 Call Us</a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', color: '#aaa', fontSize: '0.95rem', flexWrap: 'wrap' }}>
            <span>📍 Ngong Road, Nairobi</span>
            <span>🕐 Mon–Sat: 8AM–8PM</span>
            <span>📞 +254 700 000 000</span>
          </div>
        </div>
      </section>

    </div>
  );
}