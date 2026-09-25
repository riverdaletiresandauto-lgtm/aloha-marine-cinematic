import React from 'react';
import { Link } from 'react-router-dom';

const OUTBOARDS = [
  { id: 'suzuki-df150a-stealth', name: 'Suzuki DF150A Stealth', brand: 'Suzuki Marine', hp: 150, price: 15495, priceLabel: '$15,495', tag: 'IN STOCK', image: '/images/2023-suzuki-df150a-stealth-outboard.jpg', desc: 'Matte Black stealth graphics, 2.9L inline 4-cylinder, DOHC 16-valve, lean burn fuel control, and keyless security system.', warranty: '5-Year Factory Warranty' },
  { id: 'suzuki-df140b-stealth', name: 'Suzuki DF140B/BG Stealth', brand: 'Suzuki Marine', hp: 140, price: 13995, priceLabel: '$13,995', tag: 'ELECTRONIC CONTROL', image: '/images/2023-suzuki-df150a-stealth-outboard.jpg', desc: 'Drive-by-wire precision control, high-compression 2.0L engine, incredible power-to-weight ratio for flats and bay boats.', warranty: '5-Year Factory Warranty' },
  { id: 'suzuki-df115b-stealth', name: 'Suzuki DF115B Stealth', brand: 'Suzuki Marine', hp: 115, price: 11995, priceLabel: '$11,995', tag: 'HIGH EFFICIENCY', image: '/images/2023-suzuki-df150a-stealth-outboard.jpg', desc: 'Ultra-quiet four-stroke power, offset driveshaft for compact balance, multi-point electronic fuel injection.', warranty: '5-Year Factory Warranty' },
];

export default function Repower() {
  return (
    <div>
      <section style={{ background: '#fff', borderRadius: '16px', padding: '60px 24px', textAlign: 'center', marginBottom: '40px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '16px' }}>
          Suzuki Stealth <span style={{ color: '#0ea5e9' }}>Repower Center</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#475569', maxWidth: '600px', margin: '0 auto 32px' }}>
          Factory-certified Suzuki Marine repower specialists. Transform your vessel with whisper-quiet, 
          fuel-efficient 4-stroke outboards backed by industry-leading 5-year warranties.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" style={{ background: '#0ea5e9', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
            Get Repower Quote
          </Link>
          <Link to="/inventory" style={{ background: '#fff', color: '#0ea5e9', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', border: '2px solid #0ea5e9' }}>
            Browse Inventory
          </Link>
        </div>
      </section>

      {/* Available Outboards */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px' }}>In-Stock Stealth Outboards</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {OUTBOARDS.map(motor => (
            <div key={motor.id} style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
              <div style={{ height: '200px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0ea5e9' }}>
                {motor.image ? <img src={motor.image} alt={motor.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span>⚙️ {motor.name}</span>}
              </div>
              <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                  <span style={{ background: '#0ea5e9', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>{motor.hp} HP</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a' }}>{motor.priceLabel}</span>
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '8px' }}>{motor.name}</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '16px' }}>{motor.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#64748b' }}>
                  <span>{motor.warranty}</span>
                  <span style={{ background: motor.tag === 'IN STOCK' ? '#dcfce7' : '#fef3c7', color: motor.tag === 'IN STOCK' ? '#166534' : '#92400e', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>{motor.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Repower With Us */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px', textAlign: 'center' }}>Why Choose Aloha Marine for Your Repower?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {[
            { title: 'Factory Certified', desc: 'Suzuki Marine Certified Repower Center with factory-trained technicians' },
            { title: 'Complete Installation', desc: 'Turnkey rigging: controls, gauges, wiring, fuel systems, hydraulic steering' },
            { title: 'Sea Trial & Tuning', desc: 'Every repower includes full sea trial, prop tuning, and performance verification' },
            { title: '5-Year Warranty', desc: 'Industry-leading factory warranty on all new Suzuki outboards' },
            { title: 'Trade-In Program', desc: 'We buy your old outboard — competitive trade values applied to new motor' },
            { title: 'Financing Available', desc: 'Repower financing with terms up to 180 months, rates as low as 6.99%' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ color: '#64748b' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section style={{ background: '#fff', borderRadius: '16px', padding: '40px 24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '32px', textAlign: 'center' }}>The Repower Process</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          {[
            { step: '1', title: 'Consultation', desc: 'Free vessel assessment & motor recommendation' },
            { step: '2', title: 'Quote & Finance', desc: 'Detailed estimate with financing options' },
            { step: '3', title: 'Schedule', desc: 'Convenient timing at our shop or your dock' },
            { step: '4', title: 'Installation', desc: 'Professional rigging by certified techs' },
            { step: '5', title: 'Sea Trial', desc: 'Performance verification & customer orientation' },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#0ea5e9', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 16px' }}>{item.step}</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link to="/contact" style={{ background: '#0ea5e9', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}>
            Start Your Repower Quote
          </Link>
        </div>
      </section>
    </div>
  );
}