import React from 'react';
import { Link } from 'react-router-dom';

const BOATS = [
  { id: 'sea-born-fx24-bay-2026', title: '2026 Sea Born FX24 Bay ES', brand: 'Sea Born', model: 'FX24 Bay ES', year: 2026, condition: 'New', category: 'Bay Boat', price: 89900, priceLabel: '$89,900', length: '24 ft', beam: '8 ft 6 in', hp: 300, engine: 'Suzuki DF300APX Stealth', fuel: '68 Gal', draft: '13 in', weight: '3,000 lbs', hours: 0, image: '/images/2026-sea-born-fx24-bay-es.jpg', featured: true, tag: 'LATEST ARRIVAL' },
  { id: 'sea-born-lx26-2021', title: '2021 Sea Born LX26 Center Console', brand: 'Sea Born', model: 'LX26 Center Console', year: 2021, condition: 'Pre-Owned', category: 'Center Console', price: 119900, priceLabel: '$119,900', length: '27 ft', beam: '9 ft 2 in', hp: 500, engine: 'Twin Suzuki DF250 White Stealth', fuel: '135 Gal', draft: '20 in', weight: '5,500 lbs', hours: 142, image: '/images/2021-sea-born-lx26-center-console.jpg', featured: true, tag: 'FEATURED LUXURY' },
  { id: 'robalo-266-cayman-2023', title: '2023 Robalo 266 Cayman', brand: 'Robalo', model: '266 Cayman', year: 2023, condition: 'Pre-Owned', category: 'Hybrid Bay/Offshore', price: 159900, priceLabel: '$159,900', length: '26 ft 6 in', beam: '9 ft 4 in', hp: 425, engine: 'Yamaha XTO 425 V8', fuel: '110 Gal', draft: '18 in', weight: '4,500 lbs', hours: 76, image: '/images/robalo-266-cayman.jpg', featured: true, tag: 'OFFSHORE HYBRID' },
  { id: 'sea-born-lx22-2020', title: '2020 Sea Born LX22 Center Console', brand: 'Sea Born', model: 'LX22 CC', year: 2020, condition: 'Pre-Owned', category: 'Center Console', price: 59995, priceLabel: '$59,995', length: '22 ft 5 in', beam: '8 ft 6 in', hp: 200, engine: 'Suzuki 200HP 4-Stroke', fuel: '91 Gal', draft: '13 in', weight: '2,300 lbs', hours: 118, image: '/images/2020-sea-born-lx22-center-console.jpg', featured: false, tag: 'BEST VALUE' },
  { id: 'yamaha-255-fsh-sport-e-2023', title: '2023 Yamaha Boats 255 FSH Sport E', brand: 'Yamaha', model: '255 FSH Sport E', year: 2023, condition: 'Pre-Owned', category: 'Jet Center Console', price: 89995, priceLabel: '$89,995', length: '24 ft 6 in', beam: '8 ft 6 in', hp: 500, engine: 'Twin 1.8L SVHO Supercharged Jet Engines', fuel: '111 Gal', draft: '22 in', weight: '4,835 lbs', hours: 64, image: '/images/2023-yamaha-boats-255-fsh-sport-e.jpg', featured: false, tag: 'SUPERCHARGED' },
  { id: 'sea-ray-270-sundeck-2016', title: '2016 Sea Ray 270 Sundeck', brand: 'Sea Ray', model: '270 Sundeck', year: 2016, condition: 'Pre-Owned', category: 'Deck Boat / Cruiser', price: 49900, priceLabel: '$49,900', length: '27 ft 2 in', beam: '8 ft 6 in', hp: 300, engine: 'Mercury 300 Verado Pro FourStroke', fuel: '65 Gal', draft: '21 in', weight: '5,925 lbs', hours: 285, image: '/images/2016-sea-ray-270-sundeck.jpg', featured: false, tag: 'ENTERTAINER' },
  { id: 'avalon-catalina-quad-lounge-2023', title: '2023 Avalon Catalina Quad Lounge 23', brand: 'Avalon', model: 'Catalina 23 Quad Lounge', year: 2023, condition: 'Pre-Owned', category: 'Luxury Pontoon', price: 74995, priceLabel: '$74,995', length: '23 ft 5 in', beam: '8 ft 6 in', hp: 200, engine: 'Mercury 200HP FourStroke Outboard', fuel: '53 Gal', draft: '12 in', weight: '2,890 lbs', hours: 42, image: '/images/avalon-catalina-quad-lounge-23.jpg', featured: false, tag: 'TRITOON LUXURY' },
  { id: 'key-west-189-fs-2020', title: '2020 Key West 189 FS', brand: 'Key West', model: '189 Family Sportsman', year: 2020, condition: 'Pre-Owned', category: 'Center Console', price: 34995, priceLabel: '$34,995', length: '18 ft 9 in', beam: '8 ft 0 in', hp: 150, engine: 'Yamaha F150XB FourStroke', fuel: '40 Gal', draft: '12 in', weight: '1,650 lbs', hours: 156, image: '/images/2020-key-west-189-fs.jpg', featured: false, tag: 'EASY TOW' },
];

export default function Home() {
  const featured = BOATS.filter(b => b.featured);
  
  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#fff', borderRadius: '16px', padding: '60px 24px', textAlign: 'center', marginBottom: '40px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '16px' }}>
          Where <span style={{ color: '#0ea5e9' }}>Pure Luxury</span> Meets The Florida Gulf
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#475569', maxWidth: '600px', margin: '0 auto 32px' }}>
          Southwest Florida's premier dealership for Sea Born, Sundance, & Spyder boats. 
          Explore live inventory, repower with custom Stealth Suzuki outboards, or schedule service today.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/inventory" style={{ background: '#0ea5e9', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
            Explore Showroom
          </Link>
          <Link to="/repower" style={{ background: '#0369a1', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
            Suzuki Stealth Motors
          </Link>
        </div>
      </section>

      {/* Featured Boats */}
      <section>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px' }}>Featured Inventory</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {featured.map(boat => (
            <Link key={boat.id} to={`/boat/${boat.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
                <div style={{ height: '200px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0ea5e9' }}>
                  {boat.image ? <img src={boat.image} alt={boat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span>🚤 {boat.brand} {boat.model}</span>}
                </div>
                <div style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                    <span style={{ background: '#0ea5e9', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>{boat.brand}</span>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a' }}>{boat.priceLabel}</span>
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '8px' }}>{boat.model}</h3>
                  <div style={{ fontSize: '0.875rem', color: '#64748b', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <span>{boat.year} • {boat.length}</span>
                    <span>{boat.engine}</span>
                    <span>{boat.hp} HP</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link to="/inventory" style={{ background: '#fff', color: '#0ea5e9', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', border: '2px solid #0ea5e9', display: 'inline-block' }}>
            View All Inventory
          </Link>
        </div>
      </section>

      {/* Services */}
      <section style={{ marginTop: '60px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px', textAlign: 'center' }}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {[
            { title: 'New & Pre-Owned Sales', desc: 'Sea Born, Sundance, Spyder, Robalo, Yamaha, Sea Ray, Avalon & more', link: '/inventory' },
            { title: 'Suzuki Stealth Repower', desc: 'Factory-certified Suzuki outboard installation & rigging', link: '/repower' },
            { title: 'Marine Service & Repair', desc: 'Mobile dockside service, electronics, hull repair, maintenance', link: '/service' },
            { title: 'Financing & Trade-Ins', desc: 'Competitive marine lending, same-day approvals, trade-in values', link: '/financing' },
            { title: 'Sell Your Boat', desc: 'Consignment & direct purchase programs', link: '/sell' },
            { title: 'Simrad Electronics', desc: 'Navigation, radar, autopilot & sound system installation', link: '/service' },
          ].map((svc, i) => (
            <Link key={i} to={svc.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '8px' }}>{svc.title}</h3>
                <p style={{ color: '#64748b', marginBottom: '16px' }}>{svc.desc}</p>
                <span style={{ color: '#0ea5e9', fontWeight: '600' }}>Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ marginTop: '60px', background: '#fff', borderRadius: '16px', padding: '40px 24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0ea5e9' }}>12+</div>
            <div style={{ color: '#64748b' }}>Vessels in Stock</div>
          </div>
          <div>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0ea5e9' }}>4.9★</div>
            <div style={{ color: '#64748b' }}>Google Rating</div>
          </div>
          <div>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0ea5e9' }}>200+</div>
            <div style={{ color: '#64748b' }}>Reviews</div>
          </div>
          <div>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0ea5e9' }}>15+</div>
            <div style={{ color: '#64748b' }}>Years Experience</div>
          </div>
        </div>
      </section>
    </div>
  );
}