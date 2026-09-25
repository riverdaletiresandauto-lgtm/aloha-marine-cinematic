import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMultiplayer } from '../context/MultiplayerContext';
import { BOATS, BRANDS, CATEGORIES, DEALERSHIP_INFO } from '../data/boats';
import { BoatCard } from '../components/BoatCard';
import { Anchor, ChevronRight, Filter, X, SlidersHorizontal, ChevronDown, ChevronUp, Grid, List } from 'lucide-react';

export function Inventory() {
  const { onlineUsers, updateViewingBoat, compareList, savedBoats } = useMultiplayer();
  const [filters, setFilters] = useState({
    search: '',
    condition: '',
    brand: '',
    category: '',
    priceMin: '',
    priceMax: '',
    yearMin: '',
    yearMax: '',
    hpMin: '',
    hpMax: '',
  });
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredBoats = useMemo(() => {
    let result = BOATS;
    if (filters.search) {
      const s = filters.search.toLowerCase();
      result = result.filter(b => 
        b.title.toLowerCase().includes(s) ||
        b.brand.toLowerCase().includes(s) ||
        b.model.toLowerCase().includes(s) ||
        b.category.toLowerCase().includes(s)
      );
    }
    if (filters.condition) result = result.filter(b => b.condition === filters.condition);
    if (filters.brand) result = result.filter(b => b.brand === filters.brand);
    if (filters.category) result = result.filter(b => b.category === filters.category);
    if (filters.priceMin) result = result.filter(b => b.price >= parseInt(filters.priceMin));
    if (filters.priceMax) result = result.filter(b => b.price <= parseInt(filters.priceMax));
    if (filters.yearMin) result = result.filter(b => b.year >= parseInt(filters.yearMin));
    if (filters.yearMax) result = result.filter(b => b.year <= parseInt(filters.yearMax));
    if (filters.hpMin) result = result.filter(b => b.hp >= parseInt(filters.hpMin));
    if (filters.hpMax) result = result.filter(b => b.hp <= parseInt(filters.hpMax));

    switch (sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'year-desc': result.sort((a, b) => b.year - a.year); break;
      case 'year-asc': result.sort((a, b) => a.year - b.year); break;
      case 'hp-desc': result.sort((a, b) => b.hp - a.hp); break;
      case 'newest': result.sort((a, b) => (b.condition === 'New' ? 1 : 0) - (a.condition === 'New' ? 1 : 0)); break;
      default: result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return result;
  }, [filters, sortBy]);

  const activeFilterCount = Object.values(filters).filter(v => v).length;

  const clearFilters = () => {
    setFilters({ search: '', condition: '', brand: '', category: '', priceMin: '', priceMax: '', yearMin: '', yearMax: '', hpMin: '', hpMax: '' });
  };

  return (
    <div className="min-h-screen bg-deep-900">
      {/* Page Header */}
      <header className="relative pt-8 pb-12 px-6 bg-gradient-to-b from-deep-900 to-deep-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
            <div>
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">LIVE INVENTORY</span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
                Explore All Boats
              </h1>
              <p className="text-slate-400 mt-2 max-w-xl">
                {filteredBoats.length} vessels available — filter, compare, and discover your next adventure.
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              {/* Live Indicator */}
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-300 font-mono">{onlineUsers.length}</span>
                <span className="text-slate-400">shoppers browsing</span>
              </div>
              {/* View Toggle */}
              <div className="flex bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-1">
                <button onClick={() => setViewMode('grid')} className={`p-2 rounded transition ${viewMode === 'grid' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`} aria-label="Grid view"><Grid className="w-5 h-5" /></button>
                <button onClick={() => setViewMode('list')} className={`p-2 rounded transition ${viewMode === 'list' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`} aria-label="List view"><List className="w-5 h-5" /></button>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className={`relative transition-all duration-300 ${mobileFiltersOpen ? 'h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
            <div className="flex flex-col sm:flex-row gap-4 p-4 bg-deep-800/40 backdrop-blur-sm border border-white/10 rounded-xl">
              <div className="relative flex-1 min-w-[200px]">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search models, brands, features..."
                  value={filters.search}
                  onChange={(e) => setFilters(f => ({ ...f, search: e.target.value }))}
                  className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <select value={filters.condition} onChange={(e) => setFilters(f => ({ ...f, condition: e.target.value }))} className="px-3 py-2.5 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 appearance-none">
                  <option value="">All Conditions</option>
                  <option value="New">New</option>
                  <option value="Pre-Owned">Pre-Owned</option>
                </select>
                <select value={filters.brand} onChange={(e) => setFilters(f => ({ ...f, brand: e.target.value }))} className="px-3 py-2.5 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 appearance-none">
                  <option value="">All Brands</option>
                  {BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
                <select value={filters.category} onChange={(e) => setFilters(f => ({ ...f, category: e.target.value }))} className="px-3 py-2.5 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 appearance-none">
                  <option value="">All Types</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                {activeFilterCount > 0 && (
                  <button onClick={clearFilters} className="px-4 py-2.5 bg-rose-500/20 border border-rose-500/30 text-rose-400 rounded-lg hover:bg-rose-500/30 text-sm font-medium flex items-center gap-1">
                    <X className="w-4 h-4" /> Clear
                  </button>
                )}
                <button onClick={() => setShowFilters(!showFilters)} className="px-4 py-2.5 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/30 text-sm font-medium flex items-center gap-1">
                  <SlidersHorizontal className="w-4 h-4" /> Advanced
                  {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="mt-4 p-4 bg-deep-800/40 backdrop-blur-sm border border-white/10 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Price Min</label>
                  <input type="number" value={filters.priceMin} onChange={e => setFilters(f => ({ ...f, priceMin: e.target.value }))} placeholder="$0" className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Price Max</label>
                  <input type="number" value={filters.priceMax} onChange={e => setFilters(f => ({ ...f, priceMax: e.target.value }))} placeholder="$500,000+" className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Year Min</label>
                  <input type="number" value={filters.yearMin} onChange={e => setFilters(f => ({ ...f, yearMin: e.target.value }))} placeholder="2020" className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Year Max</label>
                  <input type="number" value={filters.yearMax} onChange={e => setFilters(f => ({ ...f, yearMax: e.target.value }))} placeholder="2026" className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30" />
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Results Toolbar */}
      <div className="px-6 py-4 border-b border-white/5 bg-deep-950/50 sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-sm text-slate-400">
            Showing <span className="text-white font-bold">{filteredBoats.length}</span> of {BOATS.length} boats
            {activeFilterCount > 0 && <span className="ml-2 px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded text-xs">{activeFilterCount} filters active</span>}
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm text-slate-400">Sort:</label>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 appearance-none">
              <option value="featured">Featured First</option>
              <option value="newest">Newest First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="year-desc">Year: Newest</option>
              <option value="year-asc">Year: Oldest</option>
              <option value="hp-desc">HP: Highest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Mobile Filter Toggle */}
      <button onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)} className="lg:hidden fixed bottom-24 left-1/2 -translate-x-1/2 z-40 px-6 py-3 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-full font-medium flex items-center gap-2 shadow-lg shadow-cyan-500/20">
        <Filter className="w-5 h-5" /> Filters {activeFilterCount > 0 && <span className="bg-cyan-500 text-slate-950 px-2 py-0.5 rounded-full text-xs">{activeFilterCount}</span>}
      </button>

      {/* Inventory Grid/List */}
      <main className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {filteredBoats.length === 0 ? (
            <div className="text-center py-20">
              <Anchor className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">No boats match your filters</h3>
              <p className="text-slate-400 mb-6">Try adjusting your search or clearing filters</p>
              <button onClick={clearFilters} className="px-6 py-3 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/30 font-medium">Clear All Filters</button>
            </div>
          ) : (
            <>
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                  {filteredBoats.map((boat, i) => (
                    <BoatCard key={boat.id} boat={boat} index={i} onQuickView={(b) => updateViewingBoat(b.id)} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredBoats.map((boat, i) => (
                    <div key={boat.id} className="flex gap-6 p-4 rounded-xl bg-deep-800/40 border border-white/10 hover:border-cyan-400/30 transition group">
                      <div className="relative w-64 h-40 flex-shrink-0 rounded-lg overflow-hidden">
                        <img src={boat.image} alt={boat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-r from-deep-900/60 to-transparent" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            {boat.featured && <span className="px-2 py-0.5 bg-amber-500/90 text-black text-[10px] font-bold uppercase rounded">Featured</span>}
                            <span className="px-2 py-0.5 bg-white/10 text-white text-[10px] font-bold uppercase rounded">{boat.condition}</span>
                            <span className="px-2 py-0.5 bg-cyan-500/90 text-black text-[10px] font-bold uppercase rounded">{boat.category}</span>
                          </div>
                          <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition">{boat.brand} {boat.model} ({boat.year})</h3>
                          <p className="text-slate-400 text-sm mt-1">{boat.length} · {boat.hp}HP {boat.engine} · {boat.fuel} · Draft: {boat.draft}</p>
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                          <span className="text-2xl font-display font-bold text-white">{boat.priceLabel}</span>
                          <div className="flex items-center gap-2">
                            <Link to={`/boat/${boat.id}`} className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition">View Details</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Load More / Pagination */}
              <div className="mt-12 text-center">
                <button className="px-8 py-3 rounded-xl bg-deep-800/60 border border-white/10 text-white font-medium hover:border-cyan-400/40 hover:bg-deep-800 transition w-full sm:w-auto">
                  Load More Boats
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}