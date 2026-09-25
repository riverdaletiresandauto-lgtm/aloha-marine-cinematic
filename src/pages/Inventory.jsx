import React, { useState, useMemo } from 'react';
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

const BRANDS = ['Sea Born', 'Robalo', 'Yamaha', 'Sea Ray', 'Avalon', 'Key West'];
const CATEGORIES = ['Bay Boat', 'Center Console', 'Hybrid Bay/Offshore', 'Jet Center Console', 'Deck Boat / Cruiser', 'Luxury Pontoon'];

export default function Inventory() {
  const [search, setSearch] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [sort, setSort] = useState('price-desc');
  const [view, setView] = useState('grid');

  const filtered = useMemo(() => {
    return BOATS.filter(b => {
      const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase()) || 
        b.brand.toLowerCase().includes(search.toLowerCase()) ||
        b.model.toLowerCase().includes(search.toLowerCase());
      const matchesBrand = !brand || b.brand === brand;
      const matchesCategory = !category || b.category === category;
      const matchesCondition = !condition || b.condition === condition;
      return matchesSearch && matchesBrand && matchesCategory && matchesCondition;
    }).sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'year-desc') return b.year - a.year;
      if (sort === 'year-asc') return a.year - b.year;
      return 0;
    });
  }, [search, brand, category, condition, sort]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a' }}>Inventory</h1>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => setView('grid')} style={{ padding: '8px 16px', background: view === 'grid' ? '#0ea5e9' : '#fff', color: view === 'grid' ? '#fff' : '#0f172a', border: '1px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer' }}>Grid</button>
          <button onClick={() => setView('list')} style={{ padding: '8px 16px', background: view === 'list' ? '#0ea5e9' : '#fff', color: view === 'list' ? '#fff' : '#0f172a', border: '1px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer' }}>List</button>
        </div>
      </div>

      {/* Filters */}
      <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', marginBottom: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search boats..." style={{ padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }} />
          <select value={brand} onChange={e => setBrand(e.target.value)} style={{ padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }}>
            <option value="">All Brands</option>
            {BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
          <select value={category} onChange={e => setCategory(e.target.value)} style={{ padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }}>
            <option value="">All Categories</option>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={condition} onChange={e => setCondition(e.target.value)} style={{ padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }}>
            <option value="">All Conditions</option>
            <option value="New">New</option>
            <option value="Pre-Owned">Pre-Owned</option>
          </select>
          <select value={sort} onChange={e => setSort(e.target.value)} style={{ padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }}>
            <option value="price-desc">Price: High to Low</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="year-desc">Year: Newest First</option>
            <option value="year-asc">Year: Oldest First</option>
          </select>
        </div>
        <div style={{ color: '#64748b', fontSize: '0.875rem' }}>
          Showing {filtered.length} of {BOATS.length} vessels
        </div>
      </div>

      {/* Results */}
      {view === 'grid' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {filtered.map(boat => (
            <Link key={boat.id} to={`/boat/${boat.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
                <div style={{ height: '200px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
      ) : (
        <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#0f172a' }}>Vessel</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#0f172a' }}>Brand</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#0f172a' }}>Year</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#0f172a' }}>Length</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#0f172a' }}>Engine</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#0f172a' }}>HP</th>
                <th style={{ padding: '12px 16px', textAlign: 'right', fontWeight: '600', color: '#0f172a' }}>Price</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(boat => (
                <tr key={boat.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px 16px' }}>
                    <Link to={`/boat/${boat.id}`} style={{ fontWeight: '600', color: '#0ea5e9', textDecoration: 'none' }}>{boat.model}</Link>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#0f172a' }}>{boat.brand}</td>
                  <td style={{ padding: '12px 16px', color: '#0f172a' }}>{boat.year}</td>
                  <td style={{ padding: '12px 16px', color: '#0f172a' }}>{boat.length}</td>
                  <td style={{ padding: '12px 16px', color: '#64748b' }}>{boat.engine}</td>
                  <td style={{ padding: '12px 16px', color: '#0f172a' }}>{boat.hp} HP</td>
                  <td style={{ padding: '12px 16px', textAlign: 'right', fontWeight: 'bold', color: '#0f172a' }}>{boat.priceLabel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 24px', color: '#64748b' }}>
          <p>No vessels match your criteria. Try adjusting your filters.</p>
        </div>
      )}
    </div>
  );
}