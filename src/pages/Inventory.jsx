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
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <header className="relative pt-8 pb-12 px-6 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
            <div>
              <span className="text-sky-600 text-xs font-bold uppercase tracking-widest">LIVE INVENTORY</span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
                Explore All Boats
              </h1>
              <p className="text-slate-500 mt-2 max-w-xl">
                {filteredBoats.length} vessels available — filter, compare, and discover your next adventure.
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              {/* Live Indicator */}
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 text-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                <span className="text-sky-600 font-mono">{onlineUsers.length}</span>
                <span className="text-slate-500">shoppers browsing</span>
              </div>
              {/* View Toggle */}
              <div className="flex bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg p-1 shadow-sm">
                <button onClick={() => setViewMode('grid')} className={`p-2 rounded transition ${viewMode === 'grid' ? 'bg-sky-500 text-white' : 'text-slate-500 hover:text-slate-700'}`} aria-label="Grid view"><Grid className="w-5 h-5" /></button>
                <button onClick={() => setViewMode('list')} className={`p-2 rounded transition ${viewMode === 'list' ? 'bg-sky-500 text-white' : 'text-slate-500 hover:text-slate-700'}`} aria-label="List view"><List className="w-5 h-5" /></button>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className={`relative transition-all duration-300 ${mobileFiltersOpen ? 'h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
            <div className="flex flex-col sm:flex-row gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <div className="relative flex-1 min-w-[200px]">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search models, brands, features..."
                  value={filters.search}
                  onChange={(e) => setFilters(f => ({ ...f, search: e.target.value }))}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/30"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <select value={filters.condition} onChange={(e) => setFilters(f => ({ ...f, condition: e.target.value }))} className="px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/30 appearance-none">
                  <option value="">All Conditions</option>
                  <option value="New">New</option>
                  <option value="Pre-Owned">Pre-Owned</option>
                </select>
                <select value={filters.brand} onChange={(e) => setFilters(f => ({ ...f, brand: e.target.value }))} className="px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/30 appearance-none">
                  <option value="">All Brands</option>
                  {BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
                <select value={filters.category} onChange={(e) => setFilters(f => ({ ...f, category: e.target.value }))} className="px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/30 appearance-none">
                  <option value="">All Types</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                {activeFilterCount > 0 && (
                  <button onClick={clearFilters} className="px-4 py-2.5 bg-rose-50 border border-rose-200 text-rose-600 rounded-lg hover:bg-rose-100 text-sm font-medium flex items-center gap-1">
                    <X className="w-4 h-4" /> Clear
                  </button>
                )}
                <button onClick={() => setShowFilters(!showFilters)} className="px-4 py-2.5 bg-sky-50 border border-sky-200 text-sky-600 rounded-lg hover:bg-sky-100 text-sm font-medium flex items-center gap-1">
                  <SlidersHorizontal className="w-4 h-4" /> Advanced
                  {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="mt-4 p-4 bg-white border border-slate-200 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 shadow-sm">
                <div>
                  <label className="text-xs text-slate-500 block mb-1">Price Min</label>
                  <input type="number" value={filters.priceMin} onChange={e => setFilters(f => ({ ...f, priceMin: e.target.value }))} placeholder="$0" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/30" />
                </div>
                <div>
                  <label className="text-xs text-slate-500 block mb-1">Price Max</label>
                  <input type="number" value={filters.priceMax} onChange={e => setFilters(f => ({ ...f, priceMax: e.target.value }))} placeholder="$500,000+" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/30" />
                </div>
                <div>
                  <label className="text-xs text-slate-500 block mb-1">Year Min</label>
                  <input type="number" value={filters.yearMin} onChange={e => setFilters(f => ({ ...f, yearMin: e.target.value }))} placeholder="2020" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/30" />
                </div>
                <div>
                  <label className="text-xs text-slate-500 block mb-1">Year Max</label>
                  <input type="number" value={filters.yearMax} onChange={e => setFilters(f => ({ ...f, yearMax: e.target.value }))} placeholder="2026" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/30" />
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Results Toolbar */}
      <div className="px-6 py-4 border-b border-slate-200 bg-white/80 sticky top-0 z-10 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-sm text-slate-500">
            Showing <span className="text-slate-900 font-bold">{filteredBoats.length}</span> of {BOATS.length} boats
            {activeFilterCount > 0 && <span className="ml-2 px-2 py-0.5 bg-sky-50 text-sky-600 rounded text-xs">{activeFilterCount} filters active</span>}
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm text-slate-500">Sort:</label>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/30 appearance-none">
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
      <button onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)} className="lg:hidden fixed bottom-24 left-1/2 -translate-x-1/2 z-40 px-6 py-3 bg-sky-50 border border-sky-200 text-sky-600 rounded-full font-medium flex items-center gap-2 shadow-lg shadow-sky-500/20">
        <Filter className="w-5 h-5" /> Filters {activeFilterCount > 0 && <span className="bg-sky-500 text-white px-2 py-0.5 rounded-full text-xs">{activeFilterCount}</span>}
      </button>

      {/* Inventory Grid/List */}
      <main className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {filteredBoats.length === 0 ? (
            <div className="text-center py-20">
              <Anchor className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-slate-900 text-xl font-bold mb-2">No boats match your filters</h3>
              <p className="text-slate-500 mb-6">Try adjusting your search or clearing filters</p>
              <button onClick={clearFilters} className="px-6 py-3 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 hover:bg-sky-100 font-medium">Clear All Filters</button>
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
                    <div key={boat.id} className="flex gap-6 p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg transition group">
                      <div className="relative w-64 h-40 flex-shrink-0 rounded-lg overflow-hidden">
                        <img src={boat.image} alt={boat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            {boat.featured && <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase rounded">Featured</span>}
                            <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-bold uppercase rounded">{boat.condition}</span>
                            <span className="px-2 py-0.5 bg-sky-100 text-sky-700 text-[10px] font-bold uppercase rounded">{boat.category}</span>
                          </div>
                          <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-sky-600 transition">{boat.brand} {boat.model} ({boat.year})</h3>
                          <p className="text-slate-500 text-sm mt-1">{boat.length} · {boat.hp}HP {boat.engine} · {boat.fuel} · Draft: {boat.draft}</p>
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200">
                          <span className="text-2xl font-display font-bold text-slate-900">{boat.priceLabel}</span>
                          <div className="flex items-center gap-2">
                            <Link to={`/boat/${boat.id}`} className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm transition">View Details</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Load More / Pagination */}
              <div className="mt-12 text-center">
                <button className="px-8 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 font-medium hover:border-sky-400 hover:bg-white hover:shadow-md transition w-full sm:w-auto">
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