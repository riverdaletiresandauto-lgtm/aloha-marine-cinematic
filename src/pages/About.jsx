import React from 'react';
import { Link } from 'react-router-dom';
import { DEALERSHIP_INFO, REVIEWS } from '../data/boats';
import { Anchor, Shield, Star, Compass, Heart, Users, Sparkles, ChevronRight, CheckCircle2, MapPin, Phone, Mail, Clock } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative pt-20 pb-16 px-6 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-500/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 border border-sky-200 text-xs font-bold uppercase tracking-widest font-mono mb-6">
              <Anchor className="w-4 h-4" /> EST. 2012 · FAMILY OWNED
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mb-6">
              Aloha Marine SWFL — <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500">Where Captains Connect</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Three waterfront locations. One mission: deliver the most transparent, enjoyable boat buying and ownership experience on the Florida Gulf Coast.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/inventory" className="px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold tracking-wide transition shadow-lg shadow-sky-500/30 flex items-center gap-2">
                <Anchor className="w-5 h-5" /> Browse Inventory
              </Link>
              <Link to="/contact" className="px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-900 font-semibold tracking-wide transition flex items-center justify-center gap-2">
                <Compass className="w-5 h-5" /> Visit Our Locations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="pt-20 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sky-600 text-xs font-bold uppercase tracking-widest">OUR PHILOSOPHY</span>
              <h2 className="font-display text-3xl font-bold text-slate-900 mt-2 mb-6">More Than a Dealership</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Founded in 2012 by the Martinez family, Aloha Marine started as a single-service shop in Fort Myers. 
                Today, we operate three full-service marine centers across Southwest Florida — but our values haven't changed.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We believe buying a boat should feel like joining a community, not closing a transaction. 
                That's why every customer gets a dedicated captain for life — one point of contact for sales, service, storage, and upgrades.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-bold text-sm transition">
                Read Our Founder's Letter <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Shield, label: 'Transparency', val: 'No hidden fees. Ever.' },
                { icon: Heart, label: 'Relationship', val: 'Your captain for life.' },
                { icon: Star, label: 'Quality', val: 'Factory certified only.' },
              ].map((v, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center hover:border-sky-300 hover:shadow-lg transition">
                  <div className="w-14 h-14 rounded-xl bg-sky-100 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-7 h-7 text-sky-600" />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 mb-1">{v.label}</h4>
                  <p className="text-slate-500 text-sm">{v.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="pt-16 pb-20 px-6 bg-slate-50 border-t border-slate-200 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sky-600 text-xs font-bold uppercase tracking-widest">OUR LOCATIONS</span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-2">Three Waterfront Centers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Fort Myers (HQ)',
                address: '14501 S Cleveland Ave, Fort Myers, FL 33907',
                phone: '(239) 555-0199',
                features: ['Full Showroom', 'Service Center', 'Parts Dept', 'Indoor Storage'],
                image: '/images/location-fortmyers.jpg',
              },
              {
                name: 'Naples',
                address: '2500 Tamiami Trail N, Naples, FL 34103',
                phone: '(239) 555-0188',
                features: ['Showroom', 'Mobile Service Hub', 'Electronics Lab', 'Sea Trial Dock'],
                image: '/images/location-naples.jpg',
              },
              {
                name: 'Punta Gorda',
                address: '3900 Tamiami Trail, Punta Gorda, FL 33950',
                phone: '(941) 555-0177',
                features: ['Showroom', 'Repower Center', 'Rigging Shop', 'Haul-Out Facility'],
                image: '/images/location-puntagorda.jpg',
              },
            ].map((loc, i) => (
              <Link key={i} to="/contact" className="group relative rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-300 hover:shadow-xl transition">
                <div className="relative aspect-[4/3]">
                  <img src={loc.image} alt={loc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display font-bold text-white text-xl mb-1">{loc.name}</h3>
                  <p className="text-slate-300 text-sm mb-3 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {loc.address}
                  </p>
                  <p className="text-slate-300 text-sm mb-4 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" /> {loc.phone}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {loc.features.map((f, fi) => (
                      <span key={fi} className="px-2.5 py-1 bg-white/10 text-slate-300 text-xs rounded-full group-hover:bg-sky-500/20 group-hover:text-white transition">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="pt-16 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sky-600 text-xs font-bold uppercase tracking-widest">MEET THE CREW</span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-2">Your Captains for Life</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: 'Carlos Martinez', role: 'Founder & Principal', since: '2012', specialty: 'Brokerage & Acquisitions', cert: 'CPYB Certified', avatar: 'CM' },
              { name: 'Maria Martinez', role: 'Operations Director', since: '2012', specialty: 'Service & Customer Experience', cert: 'ABYC Standards', avatar: 'MM' },
              { name: 'Jake Thompson', role: 'Sales Manager', since: '2015', specialty: 'Sea Born & Sundance Specialist', cert: 'Suzuki Master Tech', avatar: 'JT' },
              { name: 'Sarah Chen', role: 'Service Manager', since: '2018', specialty: 'Simrad Electronics & Repowers', cert: 'Simrad Certified', avatar: 'SC' },
            ].map((t, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg transition text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                  {t.avatar}
                </div>
                <h4 className="font-display font-bold text-slate-900">{t.name}</h4>
                <p className="text-sky-600 text-sm font-medium mb-1">{t.role}</p>
                <p className="text-slate-500 text-xs mb-3">Team member since {t.since}</p>
                <p className="text-slate-500 text-sm mb-2">{t.specialty}</p>
                <span className="px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">{t.cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pt-8 pb-20 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, val: '12,000+', label: 'Happy Captains' },
              { icon: Star, val: '4.9', label: 'Google Rating' },
              { icon: Shield, val: '15+', label: 'Certified Techs' },
              { icon: Anchor, val: '3', label: 'Waterfront Locations' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="w-16 h-16 rounded-xl bg-sky-100 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-sky-600" />
                </div>
                <div className="font-display font-bold text-slate-900 text-4xl">{stat.val}</div>
                <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="pt-16 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sky-600 text-xs font-bold uppercase tracking-widest">REAL STORIES</span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-2">What Our Captains Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg transition">
                <div className="flex gap-0.5 mb-4 text-amber-400">
                  {[...Array(5)].map((_, si) => <Star key={si} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-600 mb-5 leading-relaxed">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{r.name}</p>
                    <p className="text-slate-500 text-xs">{r.boat}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}