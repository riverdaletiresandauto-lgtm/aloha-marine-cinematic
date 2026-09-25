import React from 'react';
import { Link } from 'react-router-dom';
import { BOATS, OUTBOARDS, DEALERSHIP_INFO } from '../data/boats';
import { Anchor, Wrench, Sparkles, Shield, ChevronRight, Zap, Star, CheckCircle2, AlertCircle } from 'lucide-react';

export function Repower() {
  return (
    <div className="min-h-screen bg-deep-900">
      {/* Hero */}
      <section className="relative pt-20 pb-16 px-6 bg-gradient-to-b from-deep-900 via-deep-900 to-deep-950 border-b border-white/5">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-widest font-mono mb-6">
              <Zap className="w-4 h-4" /> CERTIFIED REPOWER CENTER
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
              Suzuki <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">Stealth Series</span> Repowers
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Factory-certified Suzuki Marine dealership specializing in custom-painted Stealth outboards. 
              Transform your vessel's performance, reliability, and aesthetics with America's #1 repower choice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold tracking-wide transition shadow-lg shadow-cyan-500/30 flex items-center gap-2">
                <Wrench className="w-5 h-5" /> Get Repower Quote
              </Link>
              <Link to="/inventory" className="px-8 py-4 rounded-xl bg-deep-800/80 hover:bg-deep-700/80 border border-white/10 text-white font-semibold tracking-wide transition backdrop-blur-md flex items-center gap-2">
                <Anchor className="w-5 h-5" /> View Boats with New Motors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Stealth */}
      <section className="pt-20 pb-20 px-6 bg-deep-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">WHY STEALTH?</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2 mb-6 tracking-tight">
                The Suzuki Stealth Advantage
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Every Stealth outboard from Aloha Marine receives custom paint matching your boat's exact gelcoat, 
                stainless steel propellers, digital gauges, and our exclusive 7-year warranty — all installed by 
                Suzuki Master Technicians at our waterfront facility.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Sparkles, title: 'Custom Color Match', desc: 'Painted to match your hull perfectly — no wrap, real marine paint' },
                  { icon: Shield, title: '7-Year Factory Warranty', desc: 'Best in the industry, backed by Suzuki Marine USA' },
                  { icon: Zap, title: 'Digital Integration', desc: 'Suzuki Precision Control gauges, keyless start, lean burn tech' },
                  { icon: Wrench, title: 'Master Tech Installation', desc: 'Rigged by certified Suzuki Master Technicians only' },
                  { icon: Star, title: 'Trade-In Program', desc: 'We buy your old outboard — credit toward new Stealth' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src="/images/stealth-outboard.jpg" 
                  alt="Suzuki Stealth outboard custom painted" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-900/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                    <p className="text-cyan-300 text-sm font-bold uppercase tracking-widest mb-1">Available Horsepower Range</p>
                    <p className="text-3xl font-display font-bold text-white">150HP — 350HP</p>
                    <p className="text-slate-400 text-sm mt-1">V6 & V8 Models · DF150A–DF350A</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outboard Models Grid */}
      <section className="pt-8 pb-20 px-6 bg-deep-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">OUR REPOWER LINEUP</span>
            <h2 className="font-display text-3xl font-bold text-white mt-2">Stealth Models Available</h2>
            <p className="text-slate-400 mt-3 max-w-2xl mx-auto">Each motor custom-matched to your vessel's weight, usage, and performance goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OUTBOARDS.map((motor, i) => (
              <Link key={motor.id} to="/contact" className="group relative p-6 rounded-2xl bg-deep-800/40 border border-white/10 hover:border-cyan-400/40 hover:bg-deep-800/60 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase">{motor.hp} HP</span>
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold">{motor.shaft} Shaft</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">{motor.model}</h3>
                  <p className="text-slate-400 text-sm mb-4">{motor.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {motor.features.map((f, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/5 text-slate-300 text-xs rounded-full">{f}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-lg font-display font-bold text-white">Starting at {motor.priceLabel}</span>
                    <span className="text-cyan-400 font-bold flex items-center gap-1 group-hover:gap-2 transition">Configure <ChevronRight className="w-4 h-4" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="pt-16 pb-20 px-6 bg-deep-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">OUR PROCESS</span>
            <h2 className="font-display text-3xl font-bold text-white mt-2">From Quote to Water in 3 Steps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Consultation & Spec', desc: 'We measure transom, discuss usage, and select the perfect Stealth model with color match.', icon: Zap },
              { step: '02', title: 'Custom Build', desc: 'Motor painted at our facility, rigged with stainless prop, digital gauges, and controls.', icon: Wrench },
              { step: '03', title: 'Install & Sea Trial', desc: 'Professional installation, alignment, break-in, and on-water performance verification.', icon: Anchor },
            ].map((step, i) => (
              <div key={i} className="relative p-8 rounded-2xl bg-deep-800/40 border border-white/10 backdrop-blur-sm">
                <div className="absolute top-6 right-6 text-5xl font-black text-white/5">{step.step}</div>
                <div className="w-14 h-14 rounded-xl bg-cyan-500/15 flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-16 pb-20 px-6 bg-gradient-to-b from-deep-900 to-deep-950">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative rounded-3xl p-10 md:p-16 bg-deep-800/60 border border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10" />
            <div className="relative z-10">
              <AlertCircle className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h2 className="font-display text-3xl font-bold text-white mb-4">Your Old Outboard Has Value</h2>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                Trade in your current motor — any brand, any condition — for credit toward a new Suzuki Stealth. 
                We'll handle the removal, disposal, and paperwork.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold tracking-wide transition shadow-lg shadow-cyan-500/30">
                <Wrench className="w-5 h-5" /> Start My Trade-In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}