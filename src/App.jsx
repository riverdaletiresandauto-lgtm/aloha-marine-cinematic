import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import BoatDetail from './pages/BoatDetail';
import Repower from './pages/Repower';
import Service from './pages/Service';
import Financing from './pages/Financing';
import Sell from './pages/Sell';
import About from './pages/About';
import Contact from './pages/Contact';

function Layout({ children }) {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f9ff', color: '#0f172a' }}>
      <nav style={{ background: '#0284c7', color: '#fff', padding: '12px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}>Aloha Marine SWFL</Link>
          <Link to="/inventory" style={{ color: '#fff', textDecoration: 'none' }}>Inventory</Link>
          <Link to="/repower" style={{ color: '#fff', textDecoration: 'none' }}>Repower</Link>
          <Link to="/service" style={{ color: '#fff', textDecoration: 'none' }}>Service</Link>
          <Link to="/financing" style={{ color: '#fff', textDecoration: 'none' }}>Financing</Link>
          <Link to="/sell" style={{ color: '#fff', textDecoration: 'none' }}>Sell</Link>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
          <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
        </div>
      </nav>
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        {children}
      </main>
      <footer style={{ background: '#0284c7', color: '#fff', padding: '16px 24px', textAlign: 'center', marginTop: '40px' }}>
        <p>&copy; 2026 Aloha Marine SWFL. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/inventory" element={<Layout><Inventory /></Layout>} />
      <Route path="/boat/:id" element={<Layout><BoatDetail /></Layout>} />
      <Route path="/repower" element={<Layout><Repower /></Layout>} />
      <Route path="/service" element={<Layout><Service /></Layout>} />
      <Route path="/financing" element={<Layout><Financing /></Layout>} />
      <Route path="/sell" element={<Layout><Sell /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
    </Routes>
  );
}