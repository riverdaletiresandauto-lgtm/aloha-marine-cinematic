import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  const contactInfo = {
    sales: { phone: '(239) 555-0123', email: 'sales@alohamarineswfl.com', hours: 'Mon-Fri 8am-6pm, Sat 9am-4pm' },
    service: { phone: '(239) 555-0124', email: 'service@alohamarineswfl.com', hours: 'Mon-Fri 7am-5pm, Sat 8am-12pm' },
    parts: { phone: '(239) 555-0125', email: 'parts@alohamarineswfl.com', hours: 'Mon-Fri 8am-5pm' },
    address: '14550 Cypress Trace Dr, Fort Myers, FL 33912',
  };

  if (submitted) {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '60px 24px' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#dcfce7', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 24px' }}>✓</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '16px' }}>Message Sent!</h1>
        <p style={{ color: '#64748b', marginBottom: '32px' }}>Thank you for contacting Aloha Marine SWFL. Our team will respond within 24 hours.</p>
        <button onClick={() => setSubmitted(false)} style={{ background: '#0ea5e9', color: '#fff', padding: '14px 32px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div>
      <section style={{ background: '#fff', borderRadius: '16px', padding: '60px 24px', textAlign: 'center', marginBottom: '40px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '16px' }}>
          Contact <span style={{ color: '#0ea5e9' }}>Aloha Marine SWFL</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#475569', maxWidth: '600px', margin: '0 auto' }}>
          Have questions? Ready to schedule a sea trial? Need service? We're here to help.
        </p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        {/* Contact Form */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px' }}>Send Us a Message</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Phone *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Subject *</label>
              <select name="subject" value={formData.subject} onChange={handleChange} required style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }}>
                <option value="">Select a topic</option>
                <option value="sales">New / Pre-Owned Boat Sales</option>
                <option value="service">Service & Repair Appointment</option>
                <option value="repower">Suzuki Stealth Repower Quote</option>
                <option value="financing">Financing Pre-Approval</option>
                <option value="sell">Sell My Boat / Consignment</option>
                <option value="parts">Parts & Accessories</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Message *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows="6" style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
            </div>
            <button type="submit" style={{ background: '#0ea5e9', color: '#fff', padding: '14px', borderRadius: '8px', border: 'none', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px' }}>Sales Department</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#f0f9ff', color: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📞</div>
              <div>
                <div style={{ fontWeight: '600', color: '#0f172a' }}>{contactInfo.sales.phone}</div>
                <a href={`mailto:${contactInfo.sales.email}`} style={{ color: '#0ea5e9', fontSize: '0.875rem' }}>{contactInfo.sales.email}</a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#f0f9ff', color: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🕐</div>
              <div style={{ color: '#64748b' }}>{contactInfo.sales.hours}</div>
            </div>
            <a href="tel:+12395550123" style={{ background: '#0ea5e9', color: '#fff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}>
              Call Sales Now
            </a>
          </div>

          <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px' }}>Service Department</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#fef3c7', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🔧</div>
              <div>
                <div style={{ fontWeight: '600', color: '#0f172a' }}>{contactInfo.service.phone}</div>
                <a href={`mailto:${contactInfo.service.email}`} style={{ color: '#0ea5e9', fontSize: '0.875rem' }}>{contactInfo.service.email}</a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#fef3c7', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🕐</div>
              <div style={{ color: '#64748b' }}>{contactInfo.service.hours}</div>
            </div>
          </div>

          <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px' }}>Visit Us</h2>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#dcfce7', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📍</div>
              <div style={{ color: '#64748b' }}>
                <div style={{ fontWeight: '600', color: '#0f172a' }}>Main Location</div>
                <div>{contactInfo.address}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#dcfce7', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🚐</div>
              <div style={{ color: '#64748b' }}>
                <div style={{ fontWeight: '600', color: '#0f172a' }}>Mobile Service Area</div>
                <div>Charlotte, Lee, Collier, Hendry, Glades Counties</div>
                <div style={{ fontSize: '0.875rem' }}>We come to your dock, marina, or lift</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <section style={{ marginTop: '60px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px', textAlign: 'center' }}>Quick Links</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', maxWidth: '800px', margin: '0 auto' }}>
          <a href="/inventory" style={{ background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🚤</div>
            <div style={{ fontWeight: '600', color: '#0f172a' }}>Browse Inventory</div>
            <div style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '4px' }}>New & Pre-Owned</div>
          </a>
          <a href="/repower" style={{ background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>⚙️</div>
            <div style={{ fontWeight: '600', color: '#0f172a' }}>Repower Quote</div>
            <div style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '4px' }}>Suzuki Stealth</div>
          </a>
          <a href="/service" style={{ background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔧</div>
            <div style={{ fontWeight: '600', color: '#0f172a' }}>Schedule Service</div>
            <div style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '4px' }}>Mobile Dockside</div>
          </a>
          <a href="/financing" style={{ background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>💰</div>
            <div style={{ fontWeight: '600', color: '#0f172a' }}>Get Pre-Approved</div>
            <div style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '4px' }}>Same-Day Decision</div>
          </a>
          <a href="/sell" style={{ background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>💵</div>
            <div style={{ fontWeight: '600', color: '#0f172a' }}>Sell My Boat</div>
            <div style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '4px' }}>Consignment or Cash</div>
          </a>
          <a href="/about" style={{ background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>ℹ️</div>
            <div style={{ fontWeight: '600', color: '#0f172a' }}>About Us</div>
            <div style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '4px' }}>Our Story & Team</div>
          </a>
        </div>
      </section>
    </div>
  );
}