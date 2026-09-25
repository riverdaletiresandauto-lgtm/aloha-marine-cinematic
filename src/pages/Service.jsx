import React from 'react';
import { Link } from 'react-router-dom';

export default function Service() {
  const services = [
    { title: 'Mobile Dockside Service', desc: 'We come to your marina, dock, or lift. Full-service maintenance, repairs, and diagnostics without moving your boat.', icon: '🚐' },
    { title: 'Marine Electronics', desc: 'Simrad, Garmin, Lowrance installation. Radar, autopilot, sonar, VHF, networking, and software updates.', icon: '📡' },
    { title: 'Outboard Maintenance', desc: 'Factory-trained on Suzuki, Yamaha, Mercury, Honda. 100hr/300hr services, impellers, valve adjustments, diagnostics.', icon: '⚙️' },
    { title: 'Hull & Gelcoat Repair', desc: 'Fiberglass structural repair, gelcoat matching, blister repair, bottom paint, and running gear alignment.', icon: '🔧' },
    { title: 'Canvas & Upholstery', desc: 'Custom bimini tops, boat covers, enclosure systems, seat recovery, and interior refurbishment.', icon: '🎨' },
    { title: 'Rigging & Systems', desc: 'Complete vessel rigging: steering, controls, fuel, electrical, plumbing, hydraulic, and thruster systems.', icon: '⛓️' },
  ];

  return (
    <div>
      <section style={{ background: '#fff', borderRadius: '16px', padding: '60px 24px', textAlign: 'center', marginBottom: '40px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '16px' }}>
          Marine <span style={{ color: '#0ea5e9' }}>Service & Repair</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#475569', maxWidth: '600px', margin: '0 auto 32px' }}>
          Full-service marine center with mobile dockside capability. Suzuki & Yamaha certified. 
          Simrad & Garmin electronics partner. We keep you on the water.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" style={{ background: '#0ea5e9', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
            Schedule Service
          </Link>
          <a href="tel:+12395550123" style={{ background: '#0369a1', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
            Call: (239) 555-0123
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px', textAlign: 'center' }}>Our Service Capabilities</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {services.map((svc, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{svc.icon}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '8px' }}>{svc.title}</h3>
              <p style={{ color: '#64748b', marginBottom: '16px' }}>{svc.desc}</p>
              <Link to="/contact" style={{ color: '#0ea5e9', fontWeight: '600', textDecoration: 'none' }}>
                Request Service →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section style={{ background: '#fff', borderRadius: '16px', padding: '40px 24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px', textAlign: 'center' }}>Factory Certified Brands</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
          {['Suzuki Marine', 'Yamaha Marine', 'Mercury Marine', 'Honda Marine', 'Simrad Yachting', 'Garmin Marine', 'Lowrance', 'Power-Pole', 'Wet Sounds', 'JL Audio'].map((brand, i) => (
            <span key={i} style={{ background: '#f0f9ff', color: '#0ea5e9', padding: '8px 16px', borderRadius: '20px', fontWeight: '600', fontSize: '0.875rem' }}>
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section style={{ background: '#fff', borderRadius: '16px', padding: '40px 24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '32px', textAlign: 'center' }}>Quick Actions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <Link to="/contact" style={{ background: '#0ea5e9', color: '#fff', padding: '20px', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', textAlign: 'center' }}>
            Schedule Service Appointment
          </Link>
          <Link to="/financing" style={{ background: '#0369a1', color: '#fff', padding: '20px', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', textAlign: 'center' }}>
            Service Financing Available
          </Link>
          <a href="tel:+12395550123" style={{ background: '#0f172a', color: '#fff', padding: '20px', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', textAlign: 'center', display: 'block' }}>
            Emergency: (239) 555-0123
          </a>
          <Link to="/repower" style={{ background: '#0ea5e9', color: '#fff', padding: '20px', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', textAlign: 'center' }}>
            Suzuki Repower Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}