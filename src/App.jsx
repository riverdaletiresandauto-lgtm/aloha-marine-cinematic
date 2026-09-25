import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { MultiplayerProvider } from './context/MultiplayerContext';
import { LiveShowroomPresence } from './components/LiveShowroomPresence';
import { LiveChatPanel } from './components/LiveChatPanel';
import { CompareBar } from './components/CompareBar';
import { CinematicHero } from './components/CinematicHero';
import { CinematicFooter } from './components/CinematicFooter';
import { BoatCard } from './components/BoatCard';
import { BOATS, OUTBOARDS, ACCESSORIES, BRANDS, REVIEWS, DEALERSHIP_INFO } from './data/boats';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Inventory = lazy(() => import('./pages/Inventory'));
const BoatDetail = lazy(() => import('./pages/BoatDetail'));
const Repower = lazy(() => import('./pages/Repower'));
const Service = lazy(() => import('./pages/Service'));
const Financing = lazy(() => import('./pages/Financing'));
const Sell = lazy(() => import('./pages/Sell'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-deep-900">
      {children}
      <CinematicFooter />
    </div>
  );
}

function App() {
  return (
    <MultiplayerProvider>
      <Router>
        <ScrollRestoration getKey={(location) => location.key} />
        <Routes>
          <Route path="/" element={
            <Layout>
              <Suspense fallback={
                <div className="min-h-[60vh] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-cyan-500/50 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-400">Loading cinematic showroom...</p>
                  </div>
                </div>
              }>
                <Home />
              </Suspense>
            </Layout>
          } />
          <Route path="/inventory" element={
            <Layout>
              <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><div className="w-12 h-12 border-4 border-cyan-500/50 border-t-cyan-400 rounded-full animate-spin"></div></div>}>
                <Inventory />
              </Suspense>
            </Layout>
          } />
          <Route path="/boat/:id" element={
            <Layout>
              <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><div className="w-12 h-12 border-4 border-cyan-500/50 border-t-cyan-400 rounded-full animate-spin"></div></div>}>
                <BoatDetail />
              </Suspense>
            </Layout>
          } />
          <Route path="/repower" element={
            <Layout>
              <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><div className="w-12 h-12 border-4 border-cyan-500/50 border-t-cyan-400 rounded-full animate-spin"></div></div>}>
                <Repower />
              </Suspense>
            </Layout>
          } />
          <Route path="/service" element={
            <Layout>
              <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><div className="w-12 h-12 border-4 border-cyan-500/50 border-t-cyan-400 rounded-full animate-spin"></div></div>}>
                <Service />
              </Suspense>
            </Layout>
          } />
          <Route path="/financing" element={
            <Layout>
              <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><div className="w-12 h-12 border-4 border-cyan-500/50 border-t-cyan-400 rounded-full animate-spin"></div></div>}>
                <Financing />
              </Suspense>
            </Layout>
          } />
          <Route path="/sell" element={
            <Layout>
              <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><div className="w-12 h-12 border-4 border-cyan-500/50 border-t-cyan-400 rounded-full animate-spin"></div></div>}>
                <Sell />
              </Suspense>
            </Layout>
          } />
          <Route path="/about" element={
            <Layout>
              <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><div className="w-12 h-12 border-4 border-cyan-500/50 border-t-cyan-400 rounded-full animate-spin"></div></div>}>
                <About />
              </Suspense>
            </Layout>
          } />
          <Route path="/contact" element={
            <Layout>
              <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><div className="w-12 h-12 border-4 border-cyan-500/50 border-t-cyan-400 rounded-full animate-spin"></div></div>}>
                <Contact />
              </Suspense>
            </Layout>
          } />
        </Routes>

        {/* Global Multiplayer Components */}
        <LiveShowroomPresence />
        <LiveChatPanel />
        <CompareBar />
      </Router>
    </MultiplayerProvider>
  );
}

export default App;