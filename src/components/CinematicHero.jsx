import React, { useState } from 'react';
import { useMultiplayer } from '../context/MultiplayerContext';
import { DEALERSHIP_INFO } from '../data/boats';
import { Anchor, Shield, Star, Compass, Phone, Sparkles } from 'lucide-react';

export function CinematicHero() {
  const { onlineUsers } = useMultiplayer();
  const [isPlaying, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-deep-900">
      {/* Background Image with Cinematic Grading */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-yacht.jpg"
          alt="Cinematic luxury yacht"
          className="w-full h-full object-cover scale-105 animate-float opacity-80"
          style={{ filter: 'brightness(0.35) contrast(1.1) saturate(0.95)' }}
        />
        {/* Cinematic horizontal flare glow overlays */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-[150px] pointer-events-none" />
        
        {/* Deep cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-900/40 to-deep-900" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep-900 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center flex flex-col items-center">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-6 animate-fade-up">
          <span className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold uppercase tracking-widest font-mono">
            <Sparkles className="w-3.5 h-3.5" /> REVOLUTIONARY MULTIPLAYER SHOWROOM
          </span>
          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 text-[10px] font-bold tracking-widest font-mono uppercase">
            {onlineUsers.length} shoppers exploring live
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none mb-6 max-w-5xl">
          Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 font-normal italic pr-2">Pure Luxury</span> Meets The Florida Gulf.
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed mb-10 font-light">
          Experience Southwest Florida's premier dealership for <span className="text-white font-semibold">Sea Born, Sundance, & Spyder</span>. Explore live inventory, repower with custom Stealth Suzuki outboards, or inspect detailed specifications collaboratively with other shoppers.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <a
            href="#showroom"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold tracking-wide transition shadow-lg shadow-cyan-500/30 text-center flex items-center justify-center gap-2 group"
          >
            <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
            Explore Showroom
          </a>
          <a
            href="#repower"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-deep-800/80 hover:bg-deep-700/80 border border-white/10 text-white font-semibold tracking-wide transition backdrop-blur-md text-center flex items-center justify-center gap-2"
          >
            <Anchor className="w-4 h-4" />
            Suzuki Stealth Motors
          </a>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl mt-20 pt-10 border-t border-white/5">
          <div className="flex flex-col items-center">
            <Shield className="w-6 h-6 text-cyan-400 mb-2" />
            <h4 className="text-white font-bold text-sm">Certified Techs</h4>
            <p className="text-slate-400 text-xs mt-1">Suzuki & Yamaha experts</p>
          </div>
          <div className="flex flex-col items-center">
            <Compass className="w-6 h-6 text-cyan-400 mb-2" />
            <h4 className="text-white font-bold text-sm">Mobile Service</h4>
            <p className="text-slate-400 text-xs mt-1">We come directly to your dock</p>
          </div>
          <div className="flex flex-col items-center">
            <Star className="w-6 h-6 text-cyan-400 mb-2" />
            <h4 className="text-white font-bold text-sm">4.9 Star Rating</h4>
            <p className="text-slate-400 text-xs mt-1">From 200+ Google reviews</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="w-6 h-6 text-cyan-400 mb-2" />
            <h4 className="text-white font-bold text-sm">Same-Day Estimates</h4>
            <p className="text-slate-400 text-xs mt-1">Fast & transparent booking</p>
          </div>
        </div>
      </div>
    </section>
  );
}
