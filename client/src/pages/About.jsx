import React, { useEffect } from 'react';

const team = [
  { name: 'Mama Wanjiku', role: 'Head Stylist & Founder', emoji: '👩🏾', desc: 'Over 10 years of experience in hair styling and beauty. Trained in Nairobi and Kampala.' },
  { name: 'Brian Otieno', role: 'Master Barber', emoji: '💈', desc: 'Precision fades and beard grooming specialist. 7 years experience serving Nairobi gentlemen.' },
  { name: 'Aisha Kamau', role: 'Fashion Curator', emoji: '👗', desc: 'Passionate about African fashion and modern style. Curates every piece in our boutique.' },
];

const values = [
  { icon: '💎', title: 'Quality Always', desc: 'We use only premium products and ensure every service meets the highest standard before you leave our chair.' },
  { icon: '🤝', title: 'Honest Pricing', desc: 'What you see is what you pay. No hidden charges, no surprises. Transparent pricing for every service.' },
  { icon: '👨‍👩‍👧‍👦', title: 'Family First', desc: 'From kids to grandparents, everyone is welcome at Kifahari Styles. We serve all ages with care and patience.' },
  { icon: '🌍', title: 'Proudly Kenyan', desc: 'Born and raised in Nairobi. We celebrate African beauty, fashion and culture in everything we do.' },
  { icon: '✨', title: 'Your Confidence', desc: 'We believe every person deserves to walk out feeling amazing. Your confidence is our greatest achievement.' },
  { icon: '🕐', title: 'Always On Time', desc: 'We respect your time. Book ahead and we will be ready for you the moment you walk through our doors.' },
];

const milestones = [
  { year: '2021', title: 'We Opened', desc: 'Kifahari Styles opened its doors on Ngong Road with just a salon chair and a big dream.' },
  { year: '2022', title: 'Barbershop Added', desc: 'After overwhelming demand from our clients\' husbands and brothers, we added a full barbershop.' },
  { year: '2023', title: 'Boutique Launched', desc: 'We expanded to fashion — curating African print sets, accessories and everyday outfits.' },
  { year: '2024', title: '500+ Happy Clients', desc: 'Reached a milestone of over 500 regular clients. A family we are truly proud of.' },
  { year: '2025', title: 'Going Digital', desc: 'Launched our website to make booking easier and bring Kifahari Styles to more Nairobi families.' },
];

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.ab-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', background: '#060606', color: '#fff', minHeight: '100vh', paddingTop: '80px' }}>
      <style>{`
        .ab-reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .val-card:hover { border-color: rgba(201,168,76,0.5) !important; transform: translateY(-4px) !important; background: rgba(201,168,76,0.05) !important; }
        .val-card { transition: all 0.3s ease; }
        .team-card:hover { border-color: rgba(201,168,76,0.4) !important; transform: translateY(-6px) !important; }
        .team-card { transition: all 0.3s ease; }
        @media(max-width:768px){
          .hero-split { flex-direction: column !important; }
          .values-grid { grid-template-columns: 1fr 1fr !important; }
          .team-grid { grid-template-columns: 1fr !important; }
          .timeline { padding-left: 1.5rem !important; }
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0a0800 0%, #060606 50%, #00100a 100%)' }} />
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(233,30,140,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '5rem 4rem', width: '100%' }}>
          <div className="hero-split" style={{ display: 'flex', alignItems: 'center', gap: '5rem' }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '0.85rem', letterSpacing: '0.5em', color: '#c9a84c', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Our Story</p>
              <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: '300', lineHeight: '1.05', color: '#fff', marginBottom: '2rem' }}>
                More Than a<br /><em style={{ color: '#c9a84c' }}>Style Shop.</em>
              </h1>
              <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.9', maxWidth: '500px', marginBottom: '2.5rem' }}>
                Kifahari Styles was born from a simple belief — that every person in Nairobi deserves to look and feel their absolute best, without having to choose between quality and affordability.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/contact" style={{ background: '#c9a84c', color: '#000', padding: '1rem 2.5rem', fontSize: '0.9rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  Book Visit
                </a>
                <a href="/services" style={{ background: 'transparent', color: '#fff', padding: '1rem 2.5rem', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
                  Our Services
                </a>
              </div>
            </div>

            {/* Stats panel */}
            <div style={{ flexShrink: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
              {[
                { num: '2021', label: 'Year Founded' },
                { num: '500+', label: 'Happy Clients' },
                { num: '3', label: 'Services Under 1 Roof' },
                { num: '5★', label: 'Client Rating' },
              ].map((s, i) => (
                <div key={i} style={{ background: '#0a0a0a', padding: '2.5rem 2rem', textAlign: 'center', minWidth: '140px' }}>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', color: '#c9a84c', fontWeight: '700', lineHeight: '1' }}>{s.num}</div>
                  <div style={{ fontSize: '0.8rem', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.5rem', lineHeight: '1.4' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT IS KIFAHARI ===== */}
      <section style={{ padding: '7rem 4rem', background: '#0a0a0a', borderTop: '1px solid rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div className="ab-reveal">
            <p style={{ fontSize: '0.85rem', letterSpacing: '0.5em', color: '#c9a84c', textTransform: 'uppercase', marginBottom: '1.5rem' }}>The Name</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '300', color: '#fff', marginBottom: '2rem', lineHeight: '1.2' }}>
              <em style={{ color: '#c9a84c' }}>Kifahari</em> is a Swahili word<br />meaning <em style={{ color: '#c9a84c' }}>Luxurious.</em>
            </h2>
            <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '2', maxWidth: '700px', margin: '0 auto 3rem' }}>
              We chose this name intentionally. We wanted every client — regardless of their budget — to feel like royalty when they walk through our doors. Luxury is not about price. It is about how you feel when you leave.
            </p>
          </div>

          {/* Quote */}
          <div className="ab-reveal" style={{ borderLeft: '4px solid #c9a84c', padding: '2rem 3rem', background: 'rgba(201,168,76,0.05)', textAlign: 'left', maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem', fontStyle: 'italic', color: '#fff', lineHeight: '1.7', marginBottom: '1rem' }}>
              "Style is a way to say who you are without having to speak."
            </p>
            <p style={{ fontSize: '0.85rem', color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '700' }}>— Kifahari Styles, Nairobi</p>
          </div>
        </div>
      </section>

      {/* ===== OUR STORY TIMELINE ===== */}
      <section style={{ padding: '7rem 4rem', background: '#060606' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="ab-reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <p style={{ fontSize: '0.85rem', letterSpacing: '0.5em', color: '#c9a84c', textTransform: 'uppercase', marginBottom: '1rem' }}>How We Got Here</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '300', color: '#fff' }}>
              Our <em style={{ color: '#c9a84c' }}>Journey</em>
            </h2>
          </div>

          <div className="timeline" style={{ position: 'relative', paddingLeft: '3rem' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '2px', background: 'linear-gradient(to bottom, #c9a84c, rgba(201,168,76,0.1))' }} />

            {milestones.map((m, i) => (
              <div key={i} className="ab-reveal" style={{ position: 'relative', marginBottom: '3.5rem', paddingLeft: '1.5rem' }}>
                {/* Dot */}
                <div style={{ position: 'absolute', left: '-3.6rem', top: '0.3rem', width: '16px', height: '16px', borderRadius: '50%', background: '#c9a84c', border: '3px solid #060606', boxShadow: '0 0 0 3px rgba(201,168,76,0.3)' }} />

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', color: '#c9a84c', fontWeight: '700' }}>{m.year}</span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff', margin: 0 }}>{m.title}</h3>
                </div>
                <p style={{ color: '#999', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section style={{ padding: '7rem 4rem', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="ab-reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontSize: '0.85rem', letterSpacing: '0.5em', color: '#c9a84c', textTransform: 'uppercase', marginBottom: '1rem' }}>What We Stand For</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '300', color: '#fff' }}>
              Our <em style={{ color: '#c9a84c' }}>Values</em>
            </h2>
          </div>

          <div className="ab-reveal values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {values.map((v, i) => (
              <div key={i} className="val-card" style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)', padding: '2.5rem 2rem', cursor: 'default' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.2rem' }}>{v.icon}</div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#fff', marginBottom: '0.8rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.92rem', color: '#999', lineHeight: '1.8', margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section style={{ padding: '7rem 4rem', background: '#060606' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="ab-reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontSize: '0.85rem', letterSpacing: '0.5em', color: '#c9a84c', textTransform: 'uppercase', marginBottom: '1rem' }}>The People Behind the Magic</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '300', color: '#fff' }}>
              Meet the <em style={{ color: '#c9a84c' }}>Team</em>
            </h2>
          </div>

          <div className="ab-reveal team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {team.map((member, i) => (
              <div key={i} className="team-card" style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)', padding: '3rem 2rem', textAlign: 'center', cursor: 'default' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>{member.emoji}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff', marginBottom: '0.4rem' }}>{member.name}</h3>
                <p style={{ fontSize: '0.8rem', color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '700', marginBottom: '1.2rem' }}>{member.role}</p>
                <p style={{ fontSize: '0.92rem', color: '#999', lineHeight: '1.8', margin: 0 }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section style={{ padding: '7rem 4rem', textAlign: 'center', background: 'linear-gradient(135deg, #1a1400 0%, #060606 50%, #001a12 100%)', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="ab-reveal" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.85rem', letterSpacing: '0.5em', color: '#c9a84c', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Come Visit Us</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '300', color: '#fff', marginBottom: '1.5rem' }}>
            We'd Love to <em style={{ color: '#c9a84c' }}>Meet You</em>
          </h2>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '3rem' }}>
            Come say hello at Kifahari Styles on Ngong Road, Nairobi. We are open Monday to Saturday, 8AM to 8PM.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" style={{ background: '#c9a84c', color: '#000', padding: '1.1rem 2.8rem', fontSize: '0.9rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>Book Appointment</a>
            <a href="https://wa.me/254700000000" style={{ background: '#25D366', color: '#fff', padding: '1.1rem 2.8rem', fontSize: '0.9rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>💬 WhatsApp Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}