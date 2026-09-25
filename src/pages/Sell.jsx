import React, { useState } from 'react';

export default function Sell() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', boatBrand: '', boatModel: '', boatYear: '', 
    boatLength: '', boatCondition: '', hours: '', askingPrice: '', message: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert('Thank you! Our team will contact you within 24 hours.'); };

  return (
    <div>
      <section style={{ background: '#fff', borderRadius: '16px', padding: '60px 24px', textAlign: 'center', marginBottom: '40px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '16px' }}>
          Sell <span style={{ color: '#0ea5e9' }}>Your Boat</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#475569', maxWidth: '600px', margin: '0 auto 32px' }}>
          Two ways to sell: Consignment (we sell, you keep ownership until sold) or 
          Direct Purchase (we buy it today). Fast, transparent, hassle-free.
        </p>
      </section>

      {/* Two Options */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '60px' }}>
        {/* Consignment */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
          <div style={{ background: '#f0f9ff', border: '2px solid #0ea5e9', borderRadius: '12px', padding: '24px', marginBottom: '24px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0ea5e9', marginBottom: '8px' }}>Consignment Program</h2>
            <p style={{ color: '#0369a1' }}>You keep title. We market, show, & sell. Higher net to you.</p>
          </div>
          <ul style={{ color: '#475569', lineHeight: '2' }}>
            <li>✓ You set the asking price (with our market guidance)</li>
            <li>✓ Professional photography & video walkthrough</li>
            <li>✓ Listed on Boat Trader, YachtWorld, Boats.com, our site</li>
            <li>✓ We handle all showings, sea trials, negotiations</li>
            <li>✓ Secure escrow & title transfer</li>
            <li>✓ 10% commission (capped at $7,500)</li>
            <li>✓ No fee if we don't sell it</li>
            <li>✓ You keep using your boat until sold</li>
          </ul>
        </div>

        {/* Direct Purchase */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
          <div style={{ background: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '12px', padding: '24px', marginBottom: '24px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '8px' }}>Direct Purchase</h2>
            <p style={{ color: '#92400e' }}>We buy your boat today. Cash offer within 24 hours.</p>
          </div>
          <ul style={{ color: '#475569', lineHeight: '2' }}>
            <li>✓ Fair market cash offer based on NADA/ABOS data</li>
            <li>✓ Offer valid for 7 days / 50 engine hours</li>
            <li>✓ We handle payoff on your existing loan</li>
            <li>✓ Same-day wire transfer upon acceptance</li>
            <li>✓ No prep, no listing, no strangers at your dock</li>
            <li>✓ We handle all paperwork & title transfer</li>
            <li>✓ Pickup at your location (FL, Gulf Coast)</li>
            <li>✓ Best for: quick sale, estate, upgrade, relocation</li>
          </ul>
        </div>
      </section>

      {/* Valuation Form */}
      <section style={{ background: '#fff', borderRadius: '16px', padding: '40px 24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', marginBottom: '60px', maxWidth: '700px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '8px', textAlign: 'center' }}>Get Your Free Valuation</h2>
        <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '32px' }}>Fill out the form below. We'll research comparable sales and send you a market analysis within 24 hours.</p>
        
        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Your Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Phone *</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }} />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Boat Brand *</label>
            <input type="text" name="boatBrand" value={formData.boatBrand} onChange={handleChange} required style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Model *</label>
            <input type="text" name="boatModel" value={formData.boatModel} onChange={handleChange} required style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Year *</label>
            <input type="number" name="boatYear" value={formData.boatYear} onChange={handleChange} required min="1980" max="2026" style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Length (ft) *</label>
            <input type="text" name="boatLength" value={formData.boatLength} onChange={handleChange} required style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Condition *</label>
            <select name="boatCondition" value={formData.boatCondition} onChange={handleChange} required style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }}>
              <option value="">Select condition</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
              <option value="Needs Work">Needs Work</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Engine Hours</label>
            <input type="number" name="hours" value={formData.hours} onChange={handleChange} min="0" style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Asking Price (Optional)</label>
            <input type="text" name="askingPrice" value={formData.askingPrice} onChange={handleChange} style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }} />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Additional Details</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem', fontFamily: 'inherit' }}></textarea>
          </div>
          <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
            <button type="submit" style={{ background: '#0ea5e9', color: '#fff', padding: '14px 48px', borderRadius: '8px', border: 'none', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>
              Get My Free Valuation
            </button>
          </div>
        </form>
      </section>

      {/* Process */}
      <section style={{ background: '#fff', borderRadius: '16px', padding: '40px 24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '32px', textAlign: 'center' }}>How It Works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          {[
            { step: '1', title: 'Submit Details', desc: 'Fill out the form above or call us' },
            { step: '2', title: 'We Research', desc: 'Market analysis using NADA, ABOS, sold comps' },
            { step: '3', title: 'Get Offer', desc: 'Consignment price recommendation or cash offer' },
            { step: '4', title: 'You Decide', desc: 'Choose consignment or direct purchase' },
            { step: '5', title: 'We Handle It', desc: 'Marketing, showings, paperwork, closing' },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#0ea5e9', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 16px' }}>{item.step}</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}