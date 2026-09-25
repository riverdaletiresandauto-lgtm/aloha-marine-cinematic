import React from 'react';
import { Link } from 'react-router-dom';

const REVIEWS = [
  { name: 'Captain Jason R.', location: 'Cape Coral, FL', rating: 5, boat: 'Sea Born LX26', text: 'Excellent experience from start to finish. The Aloha Marine SWFL team made the custom ordering process easy and enjoyable. Their mobile service team came directly to my dock for the 20-hour service.' },
  { name: 'Mark & Sarah T.', location: 'Fort Myers Beach, FL', rating: 5, boat: 'Avalon Catalina 23', text: 'We shopped four dealerships between Tampa and Naples. Nobody matched Aloha\'s transparency and product knowledge. Financing was approved in under 15 minutes at great rates!' },
  { name: 'David K.', location: 'Sanibel Island, FL', rating: 5, boat: 'Robalo 266 Cayman', text: 'Bought my Robalo here last spring. The sea trial was thorough, the delivery orientation was top notch, and their repower technicians are truly factory certified experts.' },
];

const TEAM = [
  { name: 'Captain Jason Miller', role: 'Owner / Principal Broker', desc: '25+ years SWFL marine industry. USCG Master Captain. Suzuki & Yamaha Master Tech.' },
  { name: 'Sarah Mitchell', role: 'Sales & Customer Experience', desc: '15 years marine retail. Expert in financing, trade-ins, and delivery coordination.' },
  { name: 'Mike Torres', role: 'Service Director', desc: 'Suzuki Master Tech, Yamaha Certified, Simrad/Garmin Certified Installer.' },
  { name: 'Lisa Chen', role: 'Finance & Insurance Manager', desc: 'Marine lending specialist. 15+ lender relationships. Fast approvals.' },
];

const LOCATIONS = [
  { name: 'Fort Myers (Main)', address: '14550 Cypress Trace Dr, Fort Myers, FL 33912', phone: '(239) 555-0123', hours: 'Mon-Fri 8am-6pm, Sat 9am-4pm' },
  { name: 'Naples Satellite', address: '2890 Commercial Blvd, Naples, FL 34104', phone: '(239) 555-0124', hours: 'Mon-Fri 9am-5pm, By Appt' },
  { name: 'Mobile Service', address: 'Serving: Charlotte, Lee, Collier, Hendry, Glades Counties', phone: '(239) 555-0123', hours: 'By Appointment Only' },
];

export default function About() {
  return (
    <div>
      <section style={{ background: '#fff', borderRadius: '16px', padding: '60px 24px', textAlign: 'center', marginBottom: '40px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '16px' }}>
          About <span style={{ color: '#0ea5e9' }}>Aloha Marine SWFL</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#475569', maxWidth: '700px', margin: '0 auto 32px' }}>
          Southwest Florida's trusted full-service marine centers & dealerships since 2009. 
          Family-owned. Factory-certified. Customer-obsessed.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/inventory" style={{ background: '#0ea5e9', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
            View Inventory
          </Link>
          <Link to="/contact" style={{ background: '#fff', color: '#0ea5e9', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', border: '2px solid #0ea5e9' }}>
            Contact Us
          </Link>
        </div>
      </section>

      {/* Mission */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center', marginBottom: '60px' }}>
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '16px' }}>Our Mission</h2>
          <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '16px' }}>
            To be Southwest Florida's most trusted marine partner by delivering honest advice, 
            factory-certified expertise, and a customer experience that exceeds expectations — 
            whether you're buying your first boat, repowering your favorite vessel, or 
            trusting us with your family's safety on the water.
          </p>
          <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '16px' }}>
            We're not just a dealership. We're boaters ourselves. We know the Gulf, the backcountry, 
            the passes, and the sandbars. We know what works here — and what doesn't.
          </p>
          <p style={{ color: '#475569', lineHeight: '1.8' }}>
            Every boat we sell, every motor we rig, every repair we make — it's personal. 
            Our name is on it. Our reputation rides on it.
          </p>
        </div>
        <div style={{ background: '#f0f9ff', borderRadius: '16px', padding: '40px', textAlign: 'center', border: '1px solid #bae6fd' }}>
          <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#0ea5e9', marginBottom: '8px' }}>15+</div>
          <div style={{ color: '#0369a1', fontSize: '1.125rem', marginBottom: '24px' }}>Years Serving SWFL</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', textAlign: 'left' }}>
            <div><strong style={{ color: '#0f172a', fontSize: '1.125rem' }}>12+</strong> <span style={{ color: '#475569' }}>Brands Represented</span></div>
            <div><strong style={{ color: '#0f172a', fontSize: '1.125rem' }}>4.9★</strong> <span style={{ color: '#475569' }}>Google Rating</span></div>
            <div><strong style={{ color: '#0f172a', fontSize: '1.125rem' }}>200+</strong> <span style={{ color: '#475569' }}>5-Star Reviews</span></div>
            <div><strong style={{ color: '#0f172a', fontSize: '1.125rem' }}>500+</strong> <span style={{ color: '#475569' }}>Vessels Delivered</span></div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px', textAlign: 'center' }}>Our Team</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {TEAM.map((member, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#0ea5e9', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 16px' }}>
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '4px' }}>{member.name}</h3>
              <p style={{ color: '#0ea5e9', fontWeight: '600', fontSize: '0.875rem', marginBottom: '12px' }}>{member.role}</p>
              <p style={{ color: '#64748b', fontSize: '0.875rem' }}>{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Locations */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px', textAlign: 'center' }}>Our Locations</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {LOCATIONS.map((loc, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '12px' }}>{loc.name}</h3>
              <p style={{ color: '#64748b', marginBottom: '8px' }}>{loc.address}</p>
              <p style={{ color: '#64748b', marginBottom: '8px' }}>
                <strong style={{ color: '#0f172a' }}>Phone:</strong> <a href={`tel:${loc.phone}`} style={{ color: '#0ea5e9' }}>{loc.phone}</a>
              </p>
              <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                <strong style={{ color: '#0f172a' }}>Hours:</strong> {loc.hours}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section style={{ background: '#fff', borderRadius: '16px', padding: '40px 24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px', textAlign: 'center' }}>What Our Customers Say</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {REVIEWS.map((review, i) => (
            <div key={i} style={{ background: '#f8fafc', borderRadius: '12px', padding: '24px', border: '1px solid #e2e8f0' }}>
              <div style={{ color: '#f59e0b', marginBottom: '12px' }}>
                {'★'.repeat(review.rating)}
              </div>
              <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px', fontStyle: 'italic' }}>"{review.text}"</p>
              <div style={{ color: '#0f172a', fontWeight: '600' }}>{review.name}</div>
              <div style={{ color: '#64748b', fontSize: '0.875rem' }}>{review.location} • {review.boat}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Authorized Brands */}
      <section style={{ background: '#fff', borderRadius: '16px', padding: '40px 24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px', textAlign: 'center' }}>Authorized Brands & Partners</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
          {['Sea Born Boats', 'Sundance Boats', 'Spyder Flats Boats', 'Robalo Boats', 'Yamaha Boats', 'Sea Ray', 'Avalon Pontoons', 'Key West Boats', 'Bayliner', 'Suzuki Marine', 'Yamaha Marine', 'Mercury Marine', 'Honda Marine', 'Simrad Yachting', 'Garmin Marine', 'Lowrance', 'Power-Pole', 'Wet Sounds', 'JL Audio', 'Minn Kota', 'Dometic'].map((brand, i) => (
            <span key={i} style={{ background: '#f0f9ff', color: '#0ea5e9', padding: '8px 16px', borderRadius: '20px', fontWeight: '600', fontSize: '0.875rem' }}>
              {brand}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}