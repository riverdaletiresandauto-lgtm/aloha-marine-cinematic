import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BOATS = {
  'sea-born-fx24-bay-2026': { id: 'sea-born-fx24-bay-2026', title: '2026 Sea Born FX24 Bay ES', brand: 'Sea Born', model: 'FX24 Bay ES', year: 2026, condition: 'New', category: 'Bay Boat', price: 89900, priceLabel: '$89,900', length: '24 ft', beam: '8 ft 6 in', hp: 300, engine: 'Suzuki DF300APX Stealth', fuel: '68 Gal', draft: '13 in', weight: '3,000 lbs', hours: 0, image: '/images/2026-sea-born-fx24-bay-es.jpg', featured: true, tag: 'LATEST ARRIVAL', description: 'The 2026 Sea Born FX24 Bay ES represents the gold standard of high-performance bay fishing in Southwest Florida waters.', features: ['Twin 10-inch Simrad NSX Touchscreen GPS/Sonar', 'Twin 25-Gallon Aerated Livewells', 'Wireless Cellphone Charger & Fast USB-C Ports', 'Minn Kota Riptide Terrova 36V Trolling Motor pre-rig', 'Power-Pole Pro Series II 8ft Shallow Water Anchor', 'Wet Sounds Ultra Marine Audio 6-Speaker Sound System', 'Raw & Freshwater Washdown System', 'Custom Magic Tilt Aluminum Tandem Torsion Trailer'] },
  'sea-born-lx26-2021': { id: 'sea-born-lx26-2021', title: '2021 Sea Born LX26 Center Console', brand: 'Sea Born', model: 'LX26 Center Console', year: 2021, condition: 'Pre-Owned', category: 'Center Console', price: 119900, priceLabel: '$119,900', length: '27 ft', beam: '9 ft 2 in', hp: 500, engine: 'Twin Suzuki DF250 White Stealth', fuel: '135 Gal', draft: '20 in', weight: '5,500 lbs', hours: 142, image: '/images/2021-sea-born-lx26-center-console.jpg', featured: true, tag: 'FEATURED LUXURY', description: 'A breathtaking offshore powerhouse with offshore deep-vee styling. Twin 250HP Suzuki outboards rocket this vessel past 56 MPH.', features: ['Twin 12-inch Simrad EVO3S Displays', 'Simrad 4G Radar and RS40 VHF Marine Radio', 'JL Audio Marine M6 Series 8-Speaker system', 'Freshwater Electric Head inside console', 'Twin 30-Gallon Livewells', 'Gemlux Deluxe Outriggers', 'Full SeaDek EVA marine flooring'] },
  'robalo-266-cayman-2023': { id: 'robalo-266-cayman-2023', title: '2023 Robalo 266 Cayman', brand: 'Robalo', model: '266 Cayman', year: 2023, condition: 'Pre-Owned', category: 'Hybrid Bay/Offshore', price: 159900, priceLabel: '$159,900', length: '26 ft 6 in', beam: '9 ft 4 in', hp: 425, engine: 'Yamaha XTO 425 V8', fuel: '110 Gal', draft: '18 in', weight: '4,500 lbs', hours: 76, image: '/images/robalo-266-cayman.jpg', featured: true, tag: 'OFFSHORE HYBRID', description: 'The premier crossover fishing machine. Whether casting in 18 inches of skinny water or running 40 miles offshore.', features: ['Yamaha Helm Master EX Joystick Docking System', 'Dual Garmin GPSMAP 8612xsv 12-inch Displays', 'Garmin Fantom 24 Dome Radar', 'Twin 8-ft Blade Power Poles (Black)', 'Hydraulic Jackplate with digital gauge', 'Three Independent Livewells', 'Clarion Marine Bluetooth Sound with JL Audio amps'] },
};

export default function BoatDetail() {
  const { id } = useParams();
  const boat = BOATS[id];
  
  if (!boat) return <div style={{ padding: '40px', textAlign: 'center' }}>Boat not found</div>;

  return (
    <div>
      <Link to="/inventory" style={{ display: 'inline-block', marginBottom: '24px', color: '#0ea5e9', textDecoration: 'none', fontWeight: '600' }}>
        ← Back to Inventory
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
        {/* Gallery */}
        <div>
          <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
            <div style={{ height: '400px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {boat.image ? <img src={boat.image} alt={boat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ color: '#0ea5e9', fontSize: '2rem' }}>🚤 {boat.brand} {boat.model}</span>}
            </div>
          </div>
        </div>

        {/* Details */}
        <div>
          <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
              <div>
                <span style={{ background: '#0ea5e9', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', marginRight: '8px' }}>{boat.brand}</span>
                {boat.tag && <span style={{ background: '#fef3c7', color: '#92400e', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>{boat.tag}</span>}
              </div>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a' }}>{boat.priceLabel}</span>
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '8px' }}>{boat.model}</h1>
            <p style={{ color: '#64748b', marginBottom: '24px' }}>{boat.year} {boat.condition} • {boat.category}</p>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '24px' }}>{boat.description}</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
              <div><strong style={{ color: '#0f172a' }}>Length:</strong> <span style={{ color: '#64748b' }}>{boat.length}</span></div>
              <div><strong style={{ color: '#0f172a' }}>Beam:</strong> <span style={{ color: '#64748b' }}>{boat.beam}</span></div>
              <div><strong style={{ color: '#0f172a' }}>Engine:</strong> <span style={{ color: '#64748b' }}>{boat.engine}</span></div>
              <div><strong style={{ color: '#0f172a' }}>Horsepower:</strong> <span style={{ color: '#64748b' }}>{boat.hp} HP</span></div>
              <div><strong style={{ color: '#0f172a' }}>Fuel:</strong> <span style={{ color: '#64748b' }}>{boat.fuel}</span></div>
              <div><strong style={{ color: '#0f172a' }}>Draft:</strong> <span style={{ color: '#64748b' }}>{boat.draft}</span></div>
              <div><strong style={{ color: '#0f172a' }}>Weight:</strong> <span style={{ color: '#64748b' }}>{boat.weight}</span></div>
              <div><strong style={{ color: '#0f172a' }}>Hours:</strong> <span style={{ color: '#64748b' }}>{boat.hours}</span></div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{ background: '#0ea5e9', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
                Inquire About This Boat
              </Link>
              <Link to="/financing" style={{ background: '#0369a1', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
                Calculate Financing
              </Link>
            </div>
          </div>

          {/* Features */}
          <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '16px' }}>Key Features</h2>
            <ul style={{ columns: '2', gap: '16px', color: '#475569', lineHeight: '2' }}>
              {boat.features.map((f, i) => <li key={i} style={{ breakInside: 'avoid' }}>{f}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}