import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, TrendingUp, CheckCircle2, MessageCircle } from 'lucide-react';

export function BoatCard({ boat, index = 0, onQuickView }) {
  const { toggleCompare, toggleSave, savedBoats, compareList, updateViewingBoat } = useMultiplayer();
  const [hovered, setHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const inCompare = compareList.includes(boat.id);
  const inSaved = savedBoats.includes(boat.id);

  return (
    <div
      className="reveal group relative rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/60 bg-deep-800/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/15"
      style={{ animationDelay: `${index * 0.06}s` }}
      onMouseEnter={() => { setHovered(true); updateViewingBoat(boat.id); }}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <div className="absolute inset-0 transition-transform duration-700 ease-out" style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}>
          <img
            src={boat.image} alt={boat.title} loading="lazy"
            className={`w-full h-full object-cover transition-all duration-700 ${imgLoaded ? 'opacity-90' : 'opacity-0'}`}
            style={{ filter: hovered ? 'brightness(1.15) saturate(1.1)' : 'brightness(0.85)' }}
            onLoad={() => setImgLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-900 via-deep-900/30 to-transparent" />
        </div>

        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {boat.featured && (
            <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/90 text-black backdrop-blur-sm">
              <TrendingUp className="w-3 h-3" /> Featured
            </span>
          )}
          {boat.tag && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/90 text-black backdrop-blur-sm">
              {boat.tag}
            </span>
          )}
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white">
            {boat.condition}
          </span>
        </div>

        <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={(e) => { e.stopPropagation(); toggleSave(boat.id); }} className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-rose-500 transition" title="Add to Wishlist">
            <Heart className={`w-4 h-4 ${inSaved ? 'fill-rose-400 text-rose-400' : 'text-white'}`} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); toggleCompare(boat.id); }} className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-cyan-500 transition" title="Add to Compare">
            <CheckCircle2 className={`w-4 h-4 ${inCompare ? 'fill-cyan-400 text-cyan-400' : 'text-white'}`} />
          </button>
        </div>

        <div className="absolute bottom-3 left-3 z-10">
          <span className="text-2xl font-display font-bold text-white drop-shadow-lg">{boat.priceLabel}</span>
        </div>

        <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="flex items-center gap-1.5 text-[10px] text-cyan-300 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            Live inspection
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] uppercase tracking-wider text-cyan-400 font-semibold">{boat.brand}</span>
          <span className="text-[10px] text-slate-400 font-mono">{boat.year} · {boat.hp}HP</span>
        </div>
        <h3 className="font-display font-semibold text-white text-lg leading-tight mb-2 truncate group-hover:text-cyan-300 transition-colors">{boat.model}</h3>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
          <div className="flex items-center gap-1 text-[10px] text-slate-400">
            <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
            {boat.length} · {boat.fuel} · {boat.draft} draft
          </div>
          <button onClick={(e) => { e.stopPropagation(); onQuickView?.(boat); }} className="text-xs font-bold text-cyan-300 hover:text-white transition flex items-center gap-1 group/btn">
            <Eye className="w-3.5 h-3.5 transition-transform group-hover/btn:scale-110" />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}