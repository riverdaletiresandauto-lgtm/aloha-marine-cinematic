import React, { useState } from 'react';

export default function Financing() {
  const [amount, setAmount] = useState(75000);
  const [down, setDown] = useState(15000);
  const [term, setTerm] = useState(180);
  const [rate, setRate] = useState(7.49);

  const calculate = () => {
    const principal = amount - down;
    const monthlyRate = rate / 100 / 12;
    const months = term;
    if (principal <= 0) return 0;
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(payment);
  };

  const payment = calculate();
  const totalPaid = payment * term;
  const totalInterest = totalPaid - (amount - down);

  return (
    <div>
      <section style={{ background: '#fff', borderRadius: '16px', padding: '60px 24px', textAlign: 'center', marginBottom: '40px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '16px' }}>
          Marine <span style={{ color: '#0ea5e9' }}>Financing</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#475569', maxWidth: '600px', margin: '0 auto 32px' }}>
          Competitive rates. Same-day approvals. Terms up to 180 months. 
          We work with 15+ marine lenders to find your best deal.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:+12395550123" style={{ background: '#0ea5e9', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
            Apply Now: (239) 555-0123
          </a>
          <Link to="/inventory" style={{ background: '#fff', color: '#0ea5e9', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', border: '2px solid #0ea5e9' }}>
            Browse Boats
          </Link>
        </div>
      </section>

      {/* Calculator */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px', alignItems: 'start' }}>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px' }}>Loan Calculator</h2>
          
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Boat Price: ${amount.toLocaleString()}</label>
            <input type="range" min="10000" max="500000" step="5000" value={amount} onChange={e => setAmount(Number(e.target.value))} style={{ width: '100%', accentColor: '#0ea5e9' }} />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Down Payment: ${down.toLocaleString()}</label>
            <input type="range" min="0" max={amount} step="1000" value={down} onChange={e => setDown(Number(e.target.value))} style={{ width: '100%', accentColor: '#0ea5e9' }} />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Term: {term} months ({term/12} years)</label>
            <input type="range" min="24" max="180" step="12" value={term} onChange={e => setTerm(Number(e.target.value))} style={{ width: '100%', accentColor: '#0ea5e9' }} />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Estimated Rate: {rate}%</label>
            <input type="range" min="5.99" max="12.99" step="0.25" value={rate} onChange={e => setRate(Number(e.target.value))} style={{ width: '100%', accentColor: '#0ea5e9' }} />
          </div>

          <div style={{ background: '#f0f9ff', borderRadius: '12px', padding: '24px', border: '1px solid #bae6fd' }}>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0ea5e9' }}>${payment}/mo</div>
            <div style={{ color: '#64748b', marginTop: '8px' }}>Estimated Monthly Payment</div>
            <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #bae6fd', color: '#475569', fontSize: '0.875rem' }}>
              <div>Amount Financed: ${(amount - down).toLocaleString()}</div>
              <div>Total Payments: ${totalPaid.toLocaleString()}</div>
              <div>Total Interest: ${totalInterest.toLocaleString()}</div>
            </div>
            <div style={{ marginTop: '16px', fontSize: '0.75rem', color: '#64748b' }}>
              *Estimate only. Actual rates vary by credit, vessel age, and lender.
            </div>
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px' }}>Why Finance With Aloha Marine?</h2>
          <ul style={{ color: '#475569', lineHeight: '2' }}>
            <li>✓ 15+ marine lending partners (Essex, Trident, Bank of the West, more)</li>
            <li>✓ Same-day pre-approval for qualified buyers</li>
            <li>✓ Terms up to 180 months (15 years)</li>
            <li>✓ Rates as low as 5.99% for well-qualified buyers</li>
            <li>✓ Financing for new & pre-owned (up to 20 years old)</li>
            <li>✓ Trade-in equity applied as down payment</li>
            <li>✓ No prepayment penalties on most programs</li>
            <li>✓ Protection packages: GAP, extended service, tire/trailer</li>
            <li>✓ Business & commercial marine lending available</li>
            <li>✓ Personal concierge from application to funding</li>
          </ul>
        </div>
      </section>

      {/* Lenders */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px', textAlign: 'center' }}>Our Lending Partners</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
          {['Essex Credit', 'Trident Funding', 'Bank of the West', 'US Bank', 'Wells Fargo', 'SunTrust', 'BB&T', 'KeyBank', 'Regions', 'First National'].map((lender, i) => (
            <span key={i} style={{ background: '#f8fafc', color: '#0f172a', padding: '8px 16px', borderRadius: '20px', fontWeight: '600', fontSize: '0.875rem', border: '1px solid #e2e8f0' }}>
              {lender}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', borderRadius: '16px', padding: '40px 24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '32px', textAlign: 'center' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {[
            { q: 'What credit score do I need?', a: 'Most programs start at 650+. Best rates at 720+. We have options for various credit profiles.' },
            { q: 'How long does approval take?', a: 'Same-day pre-approval for complete applications. Final funding typically 1-3 business days.' },
            { q: 'Can I finance a trade-in?', a: 'Yes! We apply your trade equity as down payment. We handle payoff on your existing loan.' },
            { q: 'What about older boats?', a: 'Up to 20 model years for pre-owned. Older classics may qualify for specialty lending.' },
          ].map((faq, i) => (
            <div key={i} style={{ background: '#f8fafc', borderRadius: '12px', padding: '24px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '8px' }}>{faq.q}</h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem' }}>{faq.a}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a href="tel:+12395550123" style={{ background: '#0ea5e9', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}>
            Get Pre-Approved Today
          </a>
        </div>
      </section>
    </div>
  );
}