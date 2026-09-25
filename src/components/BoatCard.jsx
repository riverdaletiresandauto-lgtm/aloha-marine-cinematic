import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, TrendingUp, CheckCircle2, MessageCircle } from 'lucide-react';
import { useMultiplayer } from '../context/MultiplayerContext';

export function BoatCard({ boat, index = 0, onQuickView }) {
  const { toggleCompare, toggleSave, savedBoats, compareList, updateViewingBoat } = useMultiplayer();
  const [hovered, setHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const inCompare = compareList.includes(boat.id);
  const inSaved = savedBoats.includes(boat.id);

  return (
    <div
      className="reveal group relative rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-400 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
      style={{ animationDelay: `${index * 0.06}s` }}
      onMouseEnter={() => { setHovered(true); updateViewingBoat(boat.id); }}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <div className="absolute inset-0 transition-transform duration-700 ease-out" style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}>
          <img
            src={boat.image} alt={boat.title} loading="lazy"
            className={`w-full h-full object-cover transition-all duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ filter: hovered ? 'brightness(1.05) saturate(1.05)' : 'brightness(1)' }}
            onLoad={() => setImgLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
        </div>

        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {boat.featured && (
            <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-700">
              <TrendingUp className="w-3 h-3" /> Featured
            </span>
          )}
          {boat.tag && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-100 text-sky-700">
              {boat.tag}
            </span>
          )}
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-slate-900">
            {boat.condition}
          </span>
        </div>

        <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={(e) => { e.stopPropagation(); toggleSave(boat.id); }} className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-rose-100 hover:text-rose-500 transition shadow-sm" title="Add to Wishlist">
            <Heart className={`w-4 h-4 ${inSaved ? 'fill-rose-500 text-rose-500' : 'text-slate-400'}`} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); toggleCompare(boat.id); }} className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-sky-100 hover:text-sky-500 transition shadow-sm" title="Add to Compare">
            <CheckCircle2 className={`w-4 h-4 ${inCompare ? 'fill-sky-500 text-sky-500' : 'text-slate-400'}`} />
          </button>
        </div>

        <div className="absolute bottom-3 left-3 z-10">
          <span className="text-2xl font-display font-bold text-white drop-shadow-lg">{boat.priceLabel}</span>
        </div>

        <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="flex items-center gap-1.5 text-[10px] text-sky-600 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span>
            Live inspection
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] uppercase tracking-wider text-sky-600 font-semibold">{boat.brand}</span>
          <span className="text-[10px] text-slate-500 font-mono">{boat.year} · {boat.hp}HP</span>
        </div>
        <h3 className="font-display font-semibold text-slate-900 text-lg leading-tight mb-2 truncate group-hover:text-sky-600 transition-colors">{boat.model}</h3>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-200">
          <div className="flex items-center gap-1 text-[10px] text-slate-500">
            <span className="w-1 h-1 rounded-full bg-sky-500"></span>
            {boat.length} · {boat.fuel} · {boat.draft} draft
          </div>
          <button onClick={(e) => { e.stopPropagation(); onQuickView?.(boat); }} className="text-xs font-bold text-sky-600 hover:text-sky-700 transition flex items-center gap-1 group/btn">
            <Eye className="w-3.5 h-3.5 transition-transform group-hover/btn:scale-110" />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}