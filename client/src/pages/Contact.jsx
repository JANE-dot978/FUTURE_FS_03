import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', service: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/myknwrzo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '', service: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setLoading(false);
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', background: '#060606', color: '#fff', minHeight: '100vh', paddingTop: '80px' }}>
      <style>{`
        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .inp:focus { border-color: #c9a84c !important; outline: none; }
        .inp { transition: border-color 0.3s; }
        @media(max-width:900px){
          .contact-grid { grid-template-columns: 1fr !important; }
          .page-header-contact { padding: 3rem 2rem 2rem !important; }
        }
      `}</style>

      {/* TICKER */}
      <div style={{ background: '#c9a84c', overflow: 'hidden', padding: '0.7rem 0' }}>
        <div style={{ display: 'flex', animation: 'ticker 20s linear infinite', width: 'max-content' }}>
          {[...Array(8)].map((_, i) => (
            <span key={i} style={{ color: '#000', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.3em', textTransform: 'uppercase', padding: '0 2rem', whiteSpace: 'nowrap' }}>
              📞 +254 700 000 000 &nbsp; 📍 NGONG ROAD NAIROBI &nbsp; 🕐 MON–SAT 8AM–8PM &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* PAGE HEADER */}
      <div className="page-header-contact" style={{ padding: '5rem 4rem 3rem', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '0.85rem', letterSpacing: '0.5em', color: '#c9a84c', textTransform: 'uppercase', marginBottom: '1rem' }}>Get In Touch</p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: '300', color: '#fff', marginBottom: '1rem', lineHeight: '1' }}>
            Visit or <em style={{ color: '#c9a84c' }}>Book Us</em>
          </h1>
          <p style={{ color: '#bbb', fontSize: '1.1rem', maxWidth: '500px', lineHeight: '1.9' }}>
            Walk in anytime or send us a message and we will get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 2rem' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'start' }}>

          {/* LEFT — Info */}
          <div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontWeight: '300', color: '#fff', marginBottom: '2.5rem' }}>
              Find <em style={{ color: '#c9a84c' }}>Us</em>
            </h2>

            {[
              { icon: '📍', title: 'Location', lines: ['Ngong Road, Nairobi', 'Kenya'] },
              { icon: '🕐', title: 'Opening Hours', lines: ['Monday – Saturday: 8AM – 8PM', 'Sunday: 10AM – 6PM'] },
              { icon: '📞', title: 'Call or WhatsApp', lines: ['+254 700 000 000'] },
              { icon: '📧', title: 'Email', lines: ['hello@kifaharistyles.co.ke'] },
            ].map((info, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: '50px', height: '50px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                  {info.icon}
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: '700', marginBottom: '0.5rem' }}>{info.title}</p>
                  {info.lines.map((line, j) => (
                    <p key={j} style={{ fontSize: '1rem', color: '#ccc', margin: '0.2rem 0', lineHeight: '1.6' }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* WhatsApp + Call buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
              <a href="https://wa.me/254700000000" style={{ background: '#25D366', color: '#fff', padding: '1rem 2rem', fontSize: '0.9rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                💬 Chat on WhatsApp
              </a>
              <a href="tel:+254700000000" style={{ background: 'transparent', color: '#fff', padding: '1rem 2rem', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                📞 Call Us Now
              </a>
            </div>

            {/* Google Maps */}
            <div style={{ marginTop: '3rem', border: '1px solid rgba(201,168,76,0.2)', overflow: 'hidden' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.277!2d36.7721!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664f5b7e3!2sNgong%20Road%2C%20Nairobi!5e0!3m2!1sen!2ske"
                width="100%"
                height="250"
                style={{ border: 0, display: 'block', filter: 'grayscale(80%) invert(90%)' }}
                allowFullScreen
                loading="lazy"
                title="Kifahari Styles Location"
              />
            </div>
          </div>

          {/* RIGHT — Form */}
          <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)', padding: '3rem' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontWeight: '300', color: '#fff', marginBottom: '0.5rem' }}>
              Send a <em style={{ color: '#c9a84c' }}>Message</em>
            </h2>
            <p style={{ color: '#888', fontSize: '0.95rem', marginBottom: '2.5rem', lineHeight: '1.7' }}>
              Fill in your details below and we will get back to you within a few hours.
            </p>

            {status === 'success' && (
              <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', padding: '1rem 1.5rem', marginBottom: '1.5rem', borderRadius: '2px' }}>
                <p style={{ color: '#22c55e', fontSize: '0.95rem', margin: 0, fontWeight: '600' }}>✅ Message sent! We will contact you shortly.</p>
              </div>
            )}
            {status === 'error' && (
              <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', padding: '1rem 1.5rem', marginBottom: '1.5rem', borderRadius: '2px' }}>
                <p style={{ color: '#ef4444', fontSize: '0.95rem', margin: 0, fontWeight: '600' }}>❌ Something went wrong. Please WhatsApp us directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {[
                { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'Jane Wanjiku' },
                { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'jane@example.com' },
                { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+254 7XX XXX XXX' },
              ].map((field, i) => (
                <div key={i} style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: '700', marginBottom: '0.5rem' }}>{field.label}</label>
                  <input
                    className="inp"
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required={field.label.includes('*')}
                    style={{ width: '100%', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', padding: '0.9rem 1rem', color: '#fff', fontSize: '0.95rem', fontFamily: 'inherit', boxSizing: 'border-box', borderRadius: '2px' }}
                  />
                </div>
              ))}

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: '700', marginBottom: '0.5rem' }}>Service Interested In</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  style={{ width: '100%', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', padding: '0.9rem 1rem', color: '#fff', fontSize: '0.95rem', fontFamily: 'inherit', boxSizing: 'border-box', borderRadius: '2px' }}
                >
                  <option value="">Select a service...</option>
                  <option>Ladies Salon</option>
                  <option>Barbershop</option>
                  <option>Fashion Boutique</option>
                  <option>Multiple Services</option>
                </select>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: '700', marginBottom: '0.5rem' }}>Message *</label>
                <textarea
                  className="inp"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what you need or when you'd like to visit..."
                  rows={5}
                  required
                  style={{ width: '100%', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', padding: '0.9rem 1rem', color: '#fff', fontSize: '0.95rem', fontFamily: 'inherit', boxSizing: 'border-box', resize: 'vertical', borderRadius: '2px' }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{ width: '100%', background: '#c9a84c', color: '#000', padding: '1.1rem', fontSize: '0.95rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', opacity: loading ? 0.7 : 1, transition: 'all 0.3s' }}
              >
                {loading ? 'Sending...' : '📩 Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}