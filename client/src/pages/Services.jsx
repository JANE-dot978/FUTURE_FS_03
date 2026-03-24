import React, { useEffect, useState } from 'react';

const salonMenu = [
  {
    category: 'HAIR CARE',
    color: '#e91e8c',
    items: [
      { name: 'Signature Wash & Blowout', price: 'KES 500', time: '45min', hot: false },
      { name: 'Deep Conditioning Treatment', price: 'KES 700', time: '1hr', hot: false },
      { name: 'Keratin Smoothing', price: 'KES 2,800', time: '2-3hr', hot: true },
      { name: 'Hair Coloring & Highlights', price: 'KES 2,000', time: '2-3hr', hot: true },
    ]
  },
  {
    category: 'BRAIDING',
    color: '#e91e8c',
    items: [
      { name: 'Box Braids — Small', price: 'KES 3,000', time: '4-5hr', hot: true },
      { name: 'Box Braids — Medium', price: 'KES 2,500', time: '3-4hr', hot: false },
      { name: 'Cornrows', price: 'KES 600', time: '1hr', hot: false },
      { name: 'Knotless Braids', price: 'KES 3,500', time: '5hr', hot: true },
      { name: 'Simple Braids', price: 'KES 800', time: '1-2hr', hot: false },
    ]
  },
  {
    category: 'WEAVES & WIGS',
    color: '#e91e8c',
    items: [
      { name: 'Weave Installation', price: 'KES 1,500', time: '2hr', hot: true },
      { name: 'Wig Installation', price: 'KES 1,000', time: '1hr', hot: false },
      { name: 'Wig Customization', price: 'KES 1,500', time: '2hr', hot: false },
    ]
  },
  {
    category: 'NAILS & BEAUTY',
    color: '#e91e8c',
    items: [
      { name: 'Classic Manicure', price: 'KES 400', time: '30min', hot: false },
      { name: 'Gel Manicure', price: 'KES 700', time: '45min', hot: true },
      { name: 'Pedicure', price: 'KES 600', time: '45min', hot: false },
      { name: 'Eyebrow Threading', price: 'KES 150', time: '15min', hot: false },
      { name: 'Everyday Makeup', price: 'KES 1,500', time: '1hr', hot: false },
      { name: 'Bridal Glam Package', price: 'KES 3,500', time: '2hr', hot: true },
    ]
  },
];

const barberMenu = [
  {
    category: 'CUTS & FADES',
    color: '#c9a84c',
    items: [
      { name: 'Classic Haircut', price: 'KES 250', time: '25min', hot: false },
      { name: 'Haircut & Fade', price: 'KES 300', time: '30min', hot: true },
      { name: 'Skin Fade', price: 'KES 350', time: '35min', hot: true },
      { name: 'Kids Haircut', price: 'KES 200', time: '20min', hot: false },
    ]
  },
  {
    category: 'BEARD GROOMING',
    color: '#c9a84c',
    items: [
      { name: 'Beard Trim & Shape', price: 'KES 150', time: '15min', hot: false },
      { name: 'Full Beard Groom', price: 'KES 300', time: '30min', hot: true },
      { name: 'Hot Towel Shave', price: 'KES 350', time: '30min', hot: true },
      { name: 'Haircut + Beard Combo', price: 'KES 400', time: '45min', hot: true },
    ]
  },
  {
    category: 'STYLING & COLOR',
    color: '#c9a84c',
    items: [
      { name: 'Hair Wash', price: 'KES 150', time: '15min', hot: false },
      { name: 'Hair Dye — Full', price: 'KES 800', time: '1hr', hot: false },
      { name: 'Hair Design & Pattern', price: 'KES 500', time: '45min', hot: true },
      { name: 'Dreadlocks Retouch', price: 'KES 600', time: '1hr', hot: false },
      { name: 'Eyebrow Shaping', price: 'KES 100', time: '10min', hot: false },
    ]
  },
];

const boutiqueMenu = [
  {
    category: "LADIES' WEAR",
    color: '#4ecca3',
    items: [
      { name: 'Casual Day Dress', price: 'From KES 1,200', time: 'In Stock', hot: false },
      { name: 'Evening Gown', price: 'From KES 3,500', time: 'In Stock', hot: true },
      { name: 'Office Wear Set', price: 'From KES 2,000', time: 'In Stock', hot: false },
      { name: 'African Print Dress', price: 'From KES 1,800', time: 'In Stock', hot: true },
    ]
  },
  {
    category: "MEN'S WEAR",
    color: '#4ecca3',
    items: [
      { name: 'Casual Shirt', price: 'From KES 800', time: 'In Stock', hot: false },
      { name: 'Formal Shirt', price: 'From KES 1,200', time: 'In Stock', hot: false },
      { name: 'Chino Trousers', price: 'From KES 1,000', time: 'In Stock', hot: false },
      { name: 'African Print Shirt', price: 'From KES 1,500', time: 'In Stock', hot: true },
    ]
  },
  {
    category: 'ACCESSORIES & MORE',
    color: '#4ecca3',
    items: [
      { name: 'Gold Jewellery Set', price: 'From KES 500', time: 'In Stock', hot: true },
      { name: 'Handbags & Purses', price: 'From KES 800', time: 'In Stock', hot: false },
      { name: 'Shoes & Sandals', price: 'From KES 1,500', time: 'In Stock', hot: false },
      { name: 'Kids Outfit', price: 'From KES 600', time: 'In Stock', hot: false },
      { name: 'Custom Tailored Order', price: 'Quote on Request', time: '3-5 days', hot: false },
    ]
  },
];

const tabs = [
  {
    id: 'salon',
    label: 'Ladies Salon',
    emoji: '💅',
    icon: '✦',
    color: '#e91e8c',
    desc: 'Hair, nails, makeup & more',
    menu: salonMenu,
    img: 'https://media.istockphoto.com/id/1475067093/photo/shades-of-brown.jpg?s=2048x2048&w=is&k=20&c=nBxiBSnFOv5fNCceip_LYZxBrnj5TM--la2an91H-ao=',
  },
  {
    id: 'barber',
    label: 'Barbershop',
    emoji: '✂️',
    icon: '✂',
    color: '#c9a84c',
    desc: 'Cuts, fades & beard grooming',
    menu: barberMenu,
    img: 'https://media.istockphoto.com/id/2234905564/photo/barber-working-on-clients-hair.jpg?s=2048x2048&w=is&k=20&c=Ki7v8mcFdkEtPIOfd5ibibJTtNzuFibahEzpHGTyWU4=',
  },
  {
    id: 'boutique',
    label: 'Boutique',
    emoji: '👗',
    icon: '◈',
    color: '#4ecca3',
    desc: 'Fashion, accessories & more',
    menu: boutiqueMenu,
    img: 'https://media.istockphoto.com/id/1171482941/photo/plastic-mannequins-placed-at-the-entrance-of-a-large-clothing-supermarket.jpg?s=2048x2048&w=is&k=20&c=um6_qmxh7NmkmNBTDh1w16CiC3h6eIMgKvp5nz_Vqp0=',
  },
];

export default function Services() {
  const [active, setActive] = useState('salon');
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const tab = tabs.find(t => t.id === active);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [active]);

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', background: '#060606', color: '#fff', minHeight: '100vh', paddingTop: '80px' }}>
      <style>{`
        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .menu-row:hover { background: rgba(255,255,255,0.04) !important; padding-left: 1.5rem !important; }
        .menu-row { transition: all 0.2s ease; }
        .tab-card:hover { transform: translateY(-4px) !important; }
        @media(max-width:900px){
          .menu-grid { grid-template-columns: 1fr !important; }
          .banner-inner { flex-direction: column !important; text-align: center !important; align-items: center !important; }
          .tab-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* TICKER */}
      <div style={{ background: tab.color, overflow: 'hidden', padding: '0.7rem 0', transition: 'background 0.4s' }}>
        <div style={{ display: 'flex', animation: 'ticker 20s linear infinite', width: 'max-content' }}>
          {[...Array(8)].map((_, i) => (
            <span key={i} style={{ color: '#000', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.3em', textTransform: 'uppercase', padding: '0 2rem', whiteSpace: 'nowrap' }}>
              ✦ OPEN MON–SAT 8AM–8PM &nbsp; 📍 NGONG ROAD NAIROBI &nbsp; 📞 +254 700 000 000 &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* PAGE HEADER */}
      <div style={{ padding: '4rem 4rem 3rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.5em', color: tab.color, textTransform: 'uppercase', marginBottom: '1rem', transition: 'color 0.4s' }}>Service Menu</p>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: '300', lineHeight: '1', color: '#fff', marginBottom: '1rem' }}>
          Browse All Our <em style={{ color: tab.color, transition: 'color 0.4s' }}>Services</em>
        </h1>
        <p style={{ color: '#bbb', fontSize: '1.15rem', maxWidth: '600px', lineHeight: '1.8' }}>
          We offer <strong style={{ color: '#fff' }}>3 categories</strong> of premium services — all under one roof. Tap a category below to explore what we offer and view our prices.
        </p>
      </div>

      {/* ===== CATEGORY SELECTOR — BIG VISIBLE CARDS ===== */}
      <div style={{ padding: '3rem 4rem', background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ fontSize: '1rem', color: '#888', marginBottom: '1.5rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '600' }}>
          👇 Choose a Category
        </p>
        <div className="tab-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {tabs.map(t => (
            <button key={t.id} className="tab-card" onClick={() => setActive(t.id)} style={{
              background: active === t.id ? `${t.color}18` : '#111',
              border: active === t.id ? `2px solid ${t.color}` : '2px solid rgba(255,255,255,0.08)',
              padding: '2rem 1.5rem', cursor: 'pointer',
              fontFamily: 'inherit', textAlign: 'left',
              transition: 'all 0.3s', borderRadius: '4px',
              position: 'relative', overflow: 'hidden',
            }}>
              {active === t.id && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: t.color }} />
              )}
              <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>{t.emoji}</div>
              <div style={{ fontSize: '1.3rem', fontWeight: '800', color: active === t.id ? t.color : '#fff', marginBottom: '0.4rem', transition: 'color 0.3s' }}>
                {t.label}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '1rem' }}>{t.desc}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.8rem', color: active === t.id ? t.color : '#555', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {active === t.id ? '✓ Currently Viewing' : 'Tap to View →'}
                </span>
                <span style={{ background: active === t.id ? t.color : 'rgba(255,255,255,0.08)', color: active === t.id ? '#000' : '#666', fontSize: '0.75rem', fontWeight: '800', padding: '0.3rem 0.8rem', borderRadius: '20px' }}>
                  {t.menu.reduce((a, s) => a + s.items.length, 0)} services
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* MENU CONTENT */}
      <div key={active} style={{ maxWidth: '1300px', margin: '0 auto', padding: '5rem 2rem' }}>

        {/* Big decorative label */}
        <div style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative' }}>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(4rem, 12vw, 10rem)', fontWeight: '700', color: `${tab.color}08`, lineHeight: '1', userSelect: 'none' }}>
            {tab.label.toUpperCase()}
          </div>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ height: '1px', width: '60px', background: tab.color }} />
            <span style={{ fontSize: '1rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: tab.color, whiteSpace: 'nowrap', fontWeight: '700' }}>{tab.emoji} {tab.label}</span>
            <div style={{ height: '1px', width: '60px', background: tab.color }} />
          </div>
        </div>

        {/* Menu Grid */}
        <div className="menu-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem 5rem' }}>
          {tab.menu.map((section, si) => (
            <div key={si}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: `2px solid ${tab.color}40` }}>
                <span style={{ fontSize: '0.85rem', letterSpacing: '0.3em', fontWeight: '800', color: tab.color, textTransform: 'uppercase' }}>{section.category}</span>
                <div style={{ flex: 1, height: '1px', background: `${tab.color}20` }} />
              </div>

              {section.items.map((item, ii) => (
                <div key={ii} className="menu-row" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '1rem 1rem', gap: '1rem',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  cursor: 'default',
                  borderLeft: item.hot ? `3px solid ${tab.color}` : '3px solid transparent',
                }}
                  onMouseEnter={() => setHoveredIdx(`${si}-${ii}`)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                      <span style={{ fontSize: '1rem', fontWeight: '600', color: hoveredIdx === `${si}-${ii}` ? '#fff' : '#ddd', transition: 'color 0.2s' }}>{item.name}</span>
                      {item.hot && (
                        <span style={{ background: tab.color, color: '#000', fontSize: '0.6rem', fontWeight: '800', padding: '0.15rem 0.5rem', letterSpacing: '0.1em' }}>🔥 HOT</span>
                      )}
                    </div>
                    <span style={{ fontSize: '0.8rem', color: '#666' }}>🕐 {item.time}</span>
                  </div>
                  <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.05rem', color: tab.color, fontWeight: '700', whiteSpace: 'nowrap', flexShrink: 0 }}>{item.price}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div style={{ marginTop: '3rem', padding: '1.5rem 2rem', borderLeft: `4px solid ${tab.color}`, background: `${tab.color}08`, display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '1.5rem' }}>💡</span>
          <div>
            <p style={{ fontSize: '0.95rem', color: '#ccc', margin: '0 0 0.3rem', fontWeight: '600' }}>Good to know</p>
            <p style={{ fontSize: '0.88rem', color: '#888', margin: 0, lineHeight: '1.7' }}>
              Prices may vary depending on hair length, product used, and complexity of style. Walk in or WhatsApp us for a free consultation before booking.
            </p>
          </div>
        </div>

        {/* BOOK NOW + GALLERY BANNER */}
        <div style={{ marginTop: '5rem', position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
          <img src={tab.img} alt={tab.label} style={{ width: '100%', height: '320px', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.25)', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${tab.color}30, transparent)` }} />
          <div className="banner-inner" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4rem', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: '0.8rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: tab.color, marginBottom: '0.8rem' }}>Ready to visit?</p>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontWeight: '300', color: '#fff', margin: '0 0 0.5rem' }}>
                Book at <em style={{ color: tab.color }}>Kifahari Styles</em>
              </h2>
              <p style={{ color: '#ccc', fontSize: '1rem', margin: 0 }}>📍 Ngong Road, Nairobi &nbsp;·&nbsp; Mon–Sat 8AM–8PM</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="/contact" style={{
                background: tab.color, color: '#000',
                padding: '1.1rem 2.5rem', fontSize: '0.9rem',
                fontWeight: '800', letterSpacing: '0.2em',
                textTransform: 'uppercase', textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                transition: 'all 0.3s',
              }}>
                📅 Book Now
              </a>
              <a href="/gallery" style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                color: '#fff', border: '2px solid rgba(255,255,255,0.4)',
                padding: '1.1rem 2.5rem', fontSize: '0.9rem',
                fontWeight: '800', letterSpacing: '0.2em',
                textTransform: 'uppercase', textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = tab.color; e.currentTarget.style.color = tab.color; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = '#fff'; }}
              >
                🖼️ Explore Gallery
              </a>
              <a href="https://wa.me/254700000000" style={{
                background: '#25D366', color: '#fff',
                padding: '1.1rem 2.5rem', fontSize: '0.9rem',
                fontWeight: '800', letterSpacing: '0.2em',
                textTransform: 'uppercase', textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}