import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMultiplayer } from '../context/MultiplayerContext';
import { BOATS, OUTBOARDS, ACCESSORIES, BRANDS, REVIEWS, DEALERSHIP_INFO } from '../data/boats';
import { CinematicHero } from '../components/CinematicHero';
import { BoatCard } from '../components/BoatCard';
import { Anchor, ChevronRight, Star, Shield, Compass, Sparkles, Wrench, TrendingUp, Zap } from 'lucide-react';

export function Home() {
  const { onlineUsers, updateViewingBoat } = useMultiplayer();
  const [scrolled, setScrolled] = useState(false);
  const featuredBoats = BOATS.filter(b => b.featured).slice(0, 6);
  const latestBoats = BOATS.filter(b => b.condition === 'New').slice(0, 4);
  const preOwnedBoats = BOATS.filter(b => b.condition === 'Pre-Owned').slice(0, 4);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="relative">
      {/* Cinematic Hero */}
      <CinematicHero />

      {/* Floating Live Indicator */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 text-sm">
          <span className="relative flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-300 font-mono">{onlineUsers.length}</span>
            <span className="text-slate-400">shoppers live</span>
          </span>
        </div>
      </div>

      {/* Featured Boats Section */}
      <section id="showroom" className="relative pt-16 pb-24 px-6 bg-deep-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">CURATED SELECTION</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
                Featured Inventory
              </h2>
              <p className="text-slate-400 mt-2 max-w-md">
                Hand-picked models with the best value, performance, and features.
              </p>
            </div>
            <Link to="/inventory" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 font-bold text-sm transition whitespace-nowrap">
              View All Inventory <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {featuredBoats.map((boat, i) => (
              <BoatCard key={boat.id} boat={boat} index={i} onQuickView={(b) => updateViewingBoat(b.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* Dual Column: New + Pre-Owned */}
      <section className="relative pt-8 pb-24 px-6 bg-gradient-to-b from-deep-900 via-deep-900 to-deep-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* New Boats */}
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">BRAND NEW</span>
                  <h3 className="font-display text-2xl font-bold text-white mt-2">New Arrivals</h3>
                  <p className="text-slate-400 mt-1">Fresh from the factory — zero hours, full warranty.</p>
                </div>
                <Link to="/inventory?condition=New" className="text-cyan-400 hover:text-white text-sm font-bold flex items-center gap-1">View All <ChevronRight className="w-4 h-4" /></Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {latestBoats.map((boat, i) => (
                  <BoatCard key={boat.id} boat={boat} index={i} onQuickView={(b) => updateViewingBoat(b.id)} />
                ))}
              </div>
            </div>

            {/* Pre-Owned */}
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">CERTIFIED PRE-OWNED</span>
                  <h3 className="font-display text-2xl font-bold text-white mt-2">Quality Pre-Owned</h3>
                  <p className="text-slate-400 mt-1">Thoroughly inspected, serviced, and ready for the water.</p>
                </div>
                <Link to="/inventory?condition=Pre-Owned" className="text-cyan-400 hover:text-white text-sm font-bold flex items-center gap-1">View All <ChevronRight className="w-4 h-4" /></Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {preOwnedBoats.map((boat, i) => (
                  <BoatCard key={boat.id} boat={boat} index={i} onQuickView={(b) => updateViewingBoat(b.id)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="relative pt-16 pb-24 px-6 bg-deep-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">COMPLETE MARINE SOLUTIONS</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
              Full-Service Dealership
            </h2>
            <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
              From repowering to electronics installation — our certified technicians handle it all.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Wrench, title: 'Mobile Dockside Service', desc: 'We come to your slip. Scheduled maintenance, repairs, & diagnostics.', link: '/service' },
              { icon: Anchor, title: 'Suzuki Stealth Repowers', desc: 'Custom painted outboards. Factory certified. Best warranty in the industry.', link: '/repower' },
              { icon: Zap, title: 'Simrad & Marine Electronics', desc: 'Full glass bridge installs. Radar, sonar, autopilot, networking.', link: '/service#electronics' },
              { icon: Sparkles, title: 'Detailing & Ceramic Coat', desc: 'Premium marine detailing. Ceramic Pro certified. 5-year protection.', link: '/service#detailing' },
            ].map((s, i) => (
              <Link key={i} to={s.link} className="group relative p-6 rounded-2xl bg-deep-800/40 border border-white/10 hover:border-cyan-400/40 hover:bg-deep-800/60 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-500/25 transition-transform">
                    <s.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-white mb-2">{s.title}</h4>
                  <p className="text-slate-400 text-sm mb-4">{s.desc}</p>
                  <span className="text-cyan-400 text-sm font-bold flex items-center gap-1">
                    Learn More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brands / Partners */}
      <section className="relative pt-16 pb-24 px-6 bg-deep-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">AUTHORIZED PARTNERS</span>
            <h2 className="font-display text-3xl font-bold text-white mt-2">Brands We Trust & Represent</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {BRANDS.map((b, i) => (
              <span key={i} className="font-bold text-lg text-slate-300 hover:text-cyan-400 transition cursor-default whitespace-nowrap">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative pt-16 pb-24 px-6 bg-deep-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">CUSTOMER STORIES</span>
            <h2 className="font-display text-3xl font-bold text-white mt-2">What Captains Are Saying</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((r, i) => (
              <div key={i} className="relative p-6 rounded-2xl bg-deep-800/40 border border-white/10 hover:border-cyan-400/30 transition">
                <div className="flex gap-0.5 mb-4 text-amber-400">
                  {[...Array(5)].map((_, si) => <Star key={si} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-300 mb-5 leading-relaxed">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{r.name}</p>
                    <p className="text-slate-400 text-xs">{r.boat}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative pt-16 pb-24 px-6 bg-gradient-to-b from-deep-900 via-deep-900 to-deep-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative rounded-3xl p-10 md:p-16 bg-deep-800/60 border border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Ready to Find Your Perfect Boat?
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Schedule a sea trial, get a trade-in appraisal, or explore financing. Our team is ready to help.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={`tel:${DEALERSHIP_INFO.phone.replace(/\s/g, '')}`} className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold tracking-wide transition shadow-lg shadow-cyan-500/30">
                  Call: {DEALERSHIP_INFO.phone}
                </a>
                <Link to="/contact" className="px-8 py-4 rounded-xl bg-deep-700/80 hover:bg-deep-600/80 border border-white/10 text-white font-semibold tracking-wide transition backdrop-blur-md">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}