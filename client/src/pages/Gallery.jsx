import React, { useState, useEffect } from 'react';

const galleryItems = [
  { id: 1, category: 'salon', label: 'Natural Afro Beauty', img: 'https://media.istockphoto.com/id/1618291225/photo/breathless-beauty-stock-photo.jpg?s=2048x2048&w=is&k=20&c=HjWmxaIhSjqvcusVAW8BGJoNDxhObQB7KsGQxikFfa8=', tag: 'Hair' },
  { id: 2, category: 'salon', label: 'Braided Beauty', img: 'https://media.istockphoto.com/id/2176987814/photo/beautiful-brunette-woman-with-braids-in-her-hair-calm-and-confident-standing-sideways-to-the.jpg?s=2048x2048&w=is&k=20&c=cMXtNoNPuKtbjxjyna9B1Xtoo5xJ2JP3Ov4NdX3w3E8=', tag: 'Braids' },
  { id: 3, category: 'salon', label: 'Sassy Braids', img: 'https://media.istockphoto.com/id/1307868437/photo/even-my-braids-have-a-bit-of-sass.jpg?s=2048x2048&w=is&k=20&c=GQLtQKTHtJpS6bl4k6Pt2sdufD5dGulpFjK9L_Cfkk0=', tag: 'Braids' },
  { id: 4, category: 'salon', label: 'African Queen', img: 'https://media.istockphoto.com/id/1051478600/photo/portrait-of-an-african-american-woman.jpg?s=2048x2048&w=is&k=20&c=yw6nOkVf-sVdol1Sz26ZPtp8iFXykt8iRck24AI8_oI=', tag: 'Natural' },
  { id: 5, category: 'salon', label: 'Afro Side Profile', img: 'https://media.istockphoto.com/id/1411772543/photo/side-profile-of-african-woman-with-afro-isolated-against-a-white-background-in-a-studio.jpg?s=2048x2048&w=is&k=20&c=XRqBFGTpUohSzf-z2ncZ0L9XL-iPziRnL1eEHPnJuCE=', tag: 'Afro' },
  { id: 6, category: 'salon', label: 'Glowing Melanin', img: 'https://media.istockphoto.com/id/1302917954/photo/everything-you-need-to-shine-is-found-in-you.jpg?s=2048x2048&w=is&k=20&c=eysqckeGxx07vk1M4rnO4-oHA0PQ3YCvaJvsQ9x409w=', tag: 'Hair' },
  { id: 7, category: 'salon', label: 'Dyed Afro', img: 'https://media.istockphoto.com/id/1326835612/photo/portrait-of-young-woman-with-melanin-rich-skin-tone-with-dyed-hair-afro-beauty.jpg?s=2048x2048&w=is&k=20&c=2HyusZwygVmc0eREdmQqOKUYjvSJk1HDuQ2q-WJM-DQ=', tag: 'Color' },
  { id: 8, category: 'salon', label: 'Elegant Waves', img: 'https://media.istockphoto.com/id/2157114427/photo/portrait-of-black-woman-with-long-black-wavy-hair-and-dressed-in-elegant-makeup-beauty.jpg?s=2048x2048&w=is&k=20&c=nGm9v3_xb6jB4kdnmsm4u8lBFiz89aEJSfLduW0f8w4=', tag: 'Weave' },
  { id: 9, category: 'salon', label: 'Box Braids Back View', img: 'https://media.istockphoto.com/id/1474940019/photo/rear-view-of-african-girl-with-braided-hair.jpg?s=2048x2048&w=is&k=20&c=gqo-8iFqpxbVOkaUuQfACMyEUWPGg0DNIiqUhYJZBuE=', tag: 'Braids' },
  { id: 10, category: 'salon', label: 'Long Box Braids', img: 'https://media.istockphoto.com/id/1448909669/photo/rear-view-of-african-girl-with-braided-hair.jpg?s=2048x2048&w=is&k=20&c=MH7gy1_9KwtP56RDwo0AaeD3Ol4jyZ31uTKGc3zfj3E=', tag: 'Braids' },
  { id: 11, category: 'salon', label: 'Kanekalon Braids', img: 'https://media.istockphoto.com/id/1460077319/photo/top-view-of-young-girl-with-boxer-braids-african-hair-style-also-known-as-kanekalon-braids.jpg?s=2048x2048&w=is&k=20&c=50uaryhtoFsmguj8I0mNyTKNhdzrL03yFa-_pOXQVyY=', tag: 'Braids' },
  { id: 12, category: 'salon', label: 'Modern Hairstyle', img: 'https://media.istockphoto.com/id/1943858009/photo/selective-focus-african-woman-fixing-modern-stylish-hairstyle-isolated-on-pink-background.jpg?s=2048x2048&w=is&k=20&c=XwBVJI2QALyq51KWMVzAnS3hCQYSr0ayo213z8Tt8Es=', tag: 'Styling' },
  { id: 13, category: 'barber', label: 'Dreadlocks Style', img: 'https://media.istockphoto.com/id/2164185466/photo/portrait-of-a-young-man-in-green-with-dreadlocks-and-blue-sunglasses-isolated-on-pink.jpg?s=2048x2048&w=is&k=20&c=0tQwkLwG5Xsh_HH-WYvX5YfeFQokrG3111Scmie4GIc=', tag: 'Dreadlocks' },
  { id: 14, category: 'barber', label: 'Barber at Work', img: 'https://media.istockphoto.com/id/938631018/photo/barber-giving-a-haircut-in-his-shop.jpg?s=2048x2048&w=is&k=20&c=OvXnti5AKrSu11MbhkjP6DsPXRvGoAw2SMv5sOz7XA4=', tag: 'Cuts' },
  { id: 15, category: 'barber', label: 'Latin Haircut', img: 'https://media.istockphoto.com/id/1322878209/photo/hairdresser-session-latin-haircut.jpg?s=2048x2048&w=is&k=20&c=1yJTQiz1oAzHLK3T_NqJirWpz7x5k-E7ER2kEoEUSOg=', tag: 'Fade' },
  { id: 16, category: 'barber', label: 'Classic Barbershop', img: 'https://media.istockphoto.com/id/937451910/photo/barber-giving-a-haircut-in-his-shop.jpg?s=2048x2048&w=is&k=20&c=oPx_k8TvrOmkbD2p4Xcedv1fUeZ06aQO2h-Qpyr5f68=', tag: 'Cuts' },
  { id: 17, category: 'barber', label: 'Kids Haircut', img: 'https://media.istockphoto.com/id/464406044/photo/little-boy-getting-his-head-shaved-by-barber.jpg?s=2048x2048&w=is&k=20&c=-PUsUG5CyOJHBqUuxr3nOpKaY_0TifieK8-mq5qMWCc=', tag: 'Kids' },
  { id: 18, category: 'barber', label: 'Black Owned Barbershop', img: 'https://media.istockphoto.com/id/1441548710/photo/black-customers-receive-a-haircut-from-barbers-at-a-black-owned-barbershop.jpg?s=2048x2048&w=is&k=20&c=5bg1nvgh1LygUFoiOdtu88oHASvfcBWWJe0hoGawlCg=', tag: 'Barbershop' },
  { id: 19, category: 'barber', label: 'Clean Fade', img: 'https://media.istockphoto.com/id/2234905564/photo/barber-working-on-clients-hair.jpg?s=2048x2048&w=is&k=20&c=Ki7v8mcFdkEtPIOfd5ibibJTtNzuFibahEzpHGTyWU4=', tag: 'Fade' },
  { id: 20, category: 'barber', label: 'Beard Shaping', img: 'https://media.istockphoto.com/id/1354181322/photo/shot-of-a-handsome-young-man-trimming-his-beard-at-the-barber.jpg?s=2048x2048&w=is&k=20&c=bog5ll5l221qhx6Rhi-q42CMyZrKaJWut6u0NgEXc1I=', tag: 'Beard' },
  { id: 21, category: 'boutique', label: 'Gold Necklaces Display', img: 'https://media.istockphoto.com/id/2233262569/photo/a-storefront-window-display-showing-a-variety-of-gold-necklaces-earrings-and-other-jewelry-on.jpg?s=2048x2048&w=is&k=20&c=VGxuhOfRcYJI9IRjmXePiJF0wwA1NRar7sI-gxo7cm8=', tag: 'Jewellery' },
  { id: 22, category: 'boutique', label: 'Gold Jewellery Store', img: 'https://media.istockphoto.com/id/2182535517/photo/gold-jewelry-display-from-jewelry-store-window.jpg?s=2048x2048&w=is&k=20&c=xygNQ32nJs2_Jkcjnpx3G8yAg1qZOkVvhSITbmjQ9iU=', tag: 'Jewellery' },
  { id: 23, category: 'boutique', label: 'Gold & Gemstone', img: 'https://media.istockphoto.com/id/1414960496/photo/gold-and-gemstone-jewelry-in-store.jpg?s=2048x2048&w=is&k=20&c=tMKysdnLZfgjtQJPaRdpuFGLp67_wYmuRspxnbj9_wg=', tag: 'Jewellery' },
  { id: 24, category: 'boutique', label: 'Jewellery Counter', img: 'https://media.istockphoto.com/id/1432431924/photo/gold-jewelry-on-the-counter-of-a-jewelry-store-closeup.jpg?s=2048x2048&w=is&k=20&c=0xErk3IApyHzrbhE1IwYOeUEAejFqvvSn0N9PjlSjWM=', tag: 'Jewellery' },
  { id: 25, category: 'boutique', label: 'Scrap Gold', img: 'https://media.istockphoto.com/id/468847612/photo/scrap-gold.jpg?s=2048x2048&w=is&k=20&c=dui2Djhkv2WlfFxMGAyqqpG03OY5twgE3oyGww9PUOM=', tag: 'Jewellery' },
  { id: 26, category: 'boutique', label: 'Watches Display', img: 'https://media.istockphoto.com/id/2216633591/photo/many-watches-for-men-women-and-kids-on-display-in-a-shop-for-sale-in-a-shopping-centre.jpg?s=2048x2048&w=is&k=20&c=BxwxNcnqbcGp_nxyO6-CLrdvI0dK0C1YyADP0iDa6Zc=', tag: 'Watches' },
  { id: 27, category: 'boutique', label: 'Luxury Watches', img: 'https://media.istockphoto.com/id/1006534412/photo/many-different-various-watches-on-dispaly-in-shop-mechanical-watch-quartz-watch-stylish-clock.jpg?s=2048x2048&w=is&k=20&c=62dZylT-Jq7Y2Ur1ukod8cOXv3H9AuBOg4_I2t4QRIw=', tag: 'Watches' },
  { id: 28, category: 'boutique', label: 'Ladies Fashion', img: 'https://media.istockphoto.com/id/2208804149/photo/young-woman-searching-clothes-in-a-sustainable-fashion-market-store.jpg?s=2048x2048&w=is&k=20&c=5H9N5g6mPYD2bCT41eLTQneNnwPpV84yygjCJBl5r2E=', tag: 'Fashion' },
  { id: 29, category: 'boutique', label: "Men's Designer Wear", img: 'https://media.istockphoto.com/id/2249378193/photo/fashionable-man-selecting-sweater-in-designer-menswear-shop.jpg?s=2048x2048&w=is&k=20&c=dO420XoNrh6VXKlMB8Smv7uFckUbLIDUx3V37v5lENM=', tag: 'Menswear' },
  { id: 30, category: 'boutique', label: 'Haberdashery', img: 'https://media.istockphoto.com/id/479621806/photo/haberdashery.jpg?s=2048x2048&w=is&k=20&c=hgJCJII7kjPchGN80382TyDAGRXgTycp_b1-YDOuuuI=', tag: 'Fashion' },
  { id: 31, category: 'boutique', label: 'Shopping Experience', img: 'https://media.istockphoto.com/id/479621848/photo/hands-of-a-buyer.jpg?s=2048x2048&w=is&k=20&c=INYzZ-QNQkd1O4DWBn2uDKVJJoBK-GVVnnuEZHBkC64=', tag: 'Fashion' },
  { id: 32, category: 'boutique', label: 'Sunglasses Collection', img: 'https://media.istockphoto.com/id/1212426622/photo/sales-rack-of-sunglasses.jpg?s=2048x2048&w=is&k=20&c=RrxGsW6P_YULvUxr10YW2DGS4llUM_8I-ENxFAwDqIk=', tag: 'Accessories' },
  { id: 33, category: 'boutique', label: 'Shoe Shopping', img: 'https://media.istockphoto.com/id/472618018/photo/two-people-buying-shoes-in-retail-store.jpg?s=2048x2048&w=is&k=20&c=lvsuLoLZg_M3jfpAIj5nEva-u6l50wKHHD8vSIuHf8k=', tag: 'Shoes' },
  { id: 34, category: 'boutique', label: 'Sandals Display', img: 'https://media.istockphoto.com/id/2208285915/photo/customer-examining-variety-of-sandals-on-display.jpg?s=2048x2048&w=is&k=20&c=YI0jqr-9Mrey3MTc9SJPWDSn88S36BsYcx7y-SEKXKM=', tag: 'Shoes' },
  { id: 35, category: 'boutique', label: 'Fashion Pieces', img: 'https://media.istockphoto.com/id/1171482941/photo/plastic-mannequins-placed-at-the-entrance-of-a-large-clothing-supermarket.jpg?s=2048x2048&w=is&k=20&c=um6_qmxh7NmkmNBTDh1w16CiC3h6eIMgKvp5nz_Vqp0=', tag: 'Fashion' },
  { id: 36, category: 'boutique', label: 'Gold Jewellery', img: 'https://media.istockphoto.com/id/2182535524/photo/gold-jewelry-display-from-jewelry-store-window.jpg?s=2048x2048&w=is&k=20&c=zvkKbGjgZSE9Egd3oC1Dfay9ZD2NuXjDpVIzq3rPuig=', tag: 'Jewellery' },
];

const filters = [
  { id: 'all', label: 'All Work', emoji: '✦', color: '#c9a84c' },
  { id: 'salon', label: 'Ladies Salon', emoji: '💅', color: '#e91e8c' },
  { id: 'barber', label: 'Barbershop', emoji: '✂️', color: '#c9a84c' },
  { id: 'boutique', label: 'Boutique', emoji: '👗', color: '#4ecca3' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const filtered = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(g => g.category === activeFilter);

  const activeColor = filters.find(f => f.id === activeFilter)?.color || '#c9a84c';

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') {
        setLightboxIdx(prev => {
          const next = (prev + 1) % filtered.length;
          setLightbox(filtered[next]);
          return next;
        });
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIdx(prev => {
          const next = (prev - 1 + filtered.length) % filtered.length;
          setLightbox(filtered[next]);
          return next;
        });
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [filtered]);

  const openLightbox = (item, idx) => {
    setLightbox(item);
    setLightboxIdx(idx);
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', background: '#060606', color: '#fff', minHeight: '100vh', paddingTop: '80px' }}>
      <style>{`
        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes fadeIn { from{opacity:0;transform:scale(0.97)} to{opacity:1;transform:scale(1)} }
        .gal-item:hover .gal-overlay { opacity: 1 !important; }
        .gal-item:hover img { transform: scale(1.07) !important; }
        .gal-item img { transition: transform 0.5s ease; }
        .filter-btn:hover { color: #fff !important; border-color: rgba(255,255,255,0.3) !important; }
        @media(max-width:1024px){ .gal-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media(max-width:700px){ .gal-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media(max-width:400px){ .gal-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      {/* TICKER */}
      <div style={{ background: activeColor, overflow: 'hidden', padding: '0.7rem 0', transition: 'background 0.4s' }}>
        <div style={{ display: 'flex', animation: 'ticker 20s linear infinite', width: 'max-content' }}>
          {[...Array(8)].map((_, i) => (
            <span key={i} style={{ color: '#000', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.3em', textTransform: 'uppercase', padding: '0 2rem', whiteSpace: 'nowrap' }}>
              📸 {filtered.length} PHOTOS &nbsp; 💅 SALON &nbsp; ✂ BARBERSHOP &nbsp; 👗 BOUTIQUE &nbsp; 📍 NGONG ROAD NAIROBI &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* PAGE HEADER */}
      <div style={{ padding: '5rem 4rem 3rem', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: `radial-gradient(circle, ${activeColor}08 0%, transparent 70%)`, filter: 'blur(40px)', transition: 'all 0.5s' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '0.85rem', letterSpacing: '0.5em', color: activeColor, textTransform: 'uppercase', marginBottom: '1rem', transition: 'color 0.4s' }}>Our Portfolio</p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: '300', color: '#fff', marginBottom: '1rem', lineHeight: '1' }}>
            The <em style={{ color: activeColor, transition: 'color 0.4s' }}>Kifahari</em> Look
          </h1>
          <p style={{ color: '#bbb', fontSize: '1.1rem', maxWidth: '550px', lineHeight: '1.9', marginBottom: '2.5rem' }}>
            Real work. Real clients. Real transformations. Browse our full portfolio of {galleryItems.length} photos from our salon, barbershop and boutique.
          </p>

          {/* Filter Buttons */}
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            {filters.map(f => (
              <button key={f.id} className="filter-btn" onClick={() => setActiveFilter(f.id)} style={{
                background: activeFilter === f.id ? f.color : 'rgba(255,255,255,0.05)',
                color: activeFilter === f.id ? '#000' : '#888',
                border: activeFilter === f.id ? 'none' : '1px solid rgba(255,255,255,0.1)',
                padding: '0.8rem 1.8rem', fontSize: '0.95rem',
                fontWeight: '800', letterSpacing: '0.1em',
                textTransform: 'uppercase', cursor: 'pointer',
                fontFamily: 'inherit', borderRadius: '2px',
                transition: 'all 0.3s', display: 'flex',
                alignItems: 'center', gap: '0.5rem',
              }}>
                <span style={{ fontSize: '1.1rem' }}>{f.emoji}</span>
                <span>{f.label}</span>
                <span style={{ background: activeFilter === f.id ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.08)', padding: '0.2rem 0.6rem', borderRadius: '10px', fontSize: '0.8rem', fontWeight: '700' }}>
                  {f.id === 'all' ? galleryItems.length : galleryItems.filter(g => g.category === f.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* GALLERY GRID */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div
          className="gal-grid"
          key={activeFilter}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '8px',
          }}
        >
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="gal-item"
              onClick={() => openLightbox(item, i)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                height: '260px',
                background: '#111',
                animation: `fadeIn 0.4s ease ${Math.min(i * 0.03, 0.5)}s both`,
              }}
            >
              <img
                src={item.img}
                alt={item.label}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
              <div
                className="gal-overlay"
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                  opacity: 0, transition: 'opacity 0.4s',
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'flex-end', padding: '1.2rem',
                }}
              >
                <span style={{
                  background: activeColor, color: '#000',
                  fontSize: '0.6rem', fontWeight: '800',
                  padding: '0.2rem 0.6rem', letterSpacing: '0.15em',
                  textTransform: 'uppercase', alignSelf: 'flex-start',
                  marginBottom: '0.4rem',
                }}>{item.tag}</span>
                <p style={{ fontSize: '0.95rem', fontWeight: '700', color: '#fff', margin: '0 0 0.2rem' }}>{item.label}</p>
                <p style={{ fontSize: '0.75rem', color: activeColor, margin: 0, letterSpacing: '0.1em' }}>🔍 Click to enlarge</p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div style={{ marginTop: '5rem', textAlign: 'center', padding: '4rem', border: '1px dashed rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.02)' }}>
          <p style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📸</p>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontWeight: '300', color: '#fff', marginBottom: '0.8rem' }}>
            Want to be in our <em style={{ color: '#c9a84c' }}>Gallery?</em>
          </h3>
          <p style={{ color: '#888', fontSize: '1rem', lineHeight: '1.8', maxWidth: '450px', margin: '0 auto 2rem' }}>
            Book an appointment and join our growing family of satisfied clients. Your transformation could be next!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" style={{ background: '#c9a84c', color: '#000', padding: '1rem 2.5rem', fontSize: '0.9rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>📅 Book Now</a>
            <a href="/services" style={{ background: 'transparent', color: '#fff', padding: '1rem 2.5rem', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)' }}>View Services</a>
            <a href="https://wa.me/254700000000" style={{ background: '#25D366', color: '#fff', padding: '1rem 2.5rem', fontSize: '0.9rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>💬 WhatsApp</a>
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.97)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', animation: 'fadeIn 0.3s ease' }}
        >
          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); const prev = (lightboxIdx - 1 + filtered.length) % filtered.length; setLightbox(filtered[prev]); setLightboxIdx(prev); }}
            style={{ position: 'absolute', left: '2rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', width: '52px', height: '52px', borderRadius: '50%', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >‹</button>

          {/* Image container */}
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '860px', width: '100%' }}>
            <img
              src={lightbox.img}
              alt={lightbox.label}
              style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block', borderRadius: '2px' }}
            />
            <div style={{ padding: '1.2rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ background: activeColor, color: '#000', fontSize: '0.65rem', fontWeight: '800', padding: '0.25rem 0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{lightbox.tag}</span>
                <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff' }}>{lightbox.label}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: '#666' }}>{lightboxIdx + 1} / {filtered.length}</span>
                <button
                  onClick={() => setLightbox(null)}
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '0.5rem 1.2rem', cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'inherit', borderRadius: '2px' }}
                >✕ Close</button>
              </div>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); const next = (lightboxIdx + 1) % filtered.length; setLightbox(filtered[next]); setLightboxIdx(next); }}
            style={{ position: 'absolute', right: '2rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', width: '52px', height: '52px', borderRadius: '50%', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >›</button>
        </div>
      )}
    </div>
  );
}