import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMultiplayer } from '../context/MultiplayerContext';
import { BOATS, DEALERSHIP_INFO } from '../data/boats';
import { Anchor, Heart, CheckCircle2, ChevronLeft, Phone, Calendar, Shield, Share2, Sparkles, AlertCircle } from 'lucide-react';

export default function BoatDetail() {
  const { id } = useParams();
  const { onlineUsers, toggleCompare, toggleSave, savedBoats, compareList } = useMultiplayer();
  const boat = BOATS.find(b => b.id === id) || BOATS[0];
  
  const [selectedImg, setSelectedImg] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState('quote');

  const gallery = boat.gallery || [boat.image, boat.image, boat.image];
  const inSaved = savedBoats.includes(boat.id);
  const inCompare = compareList.includes(boat.id);

  const currentlyViewing = onlineUsers.filter(u => u.viewingBoatId === boat.id);

  return (
    <div className="min-h-screen bg-deep-900 pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation / Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/inventory" className="flex items-center gap-2 text-cyan-400 hover:text-white transition text-sm font-bold">
            <ChevronLeft className="w-4 h-4" /> Back to All Boats
          </Link>

          {/* Viewing Badge */}
          {currentlyViewing.length > 0 && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              {currentlyViewing.length} other shopper{currentlyViewing.length > 1 ? 's' : ''} inspecting this boat right now
            </div>
          )}
        </div>

        {/* Title & Price Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase">{boat.brand}</span>
              <span className="px-2.5 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase">{boat.condition}</span>
              {boat.tag && <span className="px-2.5 py-1 rounded-full bg-amber-500/90 text-black text-xs font-bold uppercase">{boat.tag}</span>}
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">{boat.title}</h1>
            <p className="text-slate-400 mt-2 text-sm sm:text-base font-mono">{boat.year} · {boat.length} · {boat.hp}HP · Stock #{boat.id.slice(0, 8)}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-xs text-slate-400 uppercase tracking-widest font-bold block">PRICE</span>
              <span className="text-3xl sm:text-4xl font-display font-bold text-white">{boat.priceLabel}</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => toggleSave(boat.id)} className="p-3 rounded-xl bg-deep-800 border border-white/10 hover:border-rose-500 transition" title="Save">
                <Heart className={`w-5 h-5 ${inSaved ? 'fill-rose-500 text-rose-500' : 'text-white'}`} />
              </button>
              <button onClick={() => toggleCompare(boat.id)} className="p-3 rounded-xl bg-deep-800 border border-white/10 hover:border-cyan-400 transition" title="Compare">
                <CheckCircle2 className={`w-5 h-5 ${inCompare ? 'fill-cyan-400 text-cyan-400' : 'text-white'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Gallery + Main Spec Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Image Gallery */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-deep-950">
              <img src={gallery[selectedImg]} alt={boat.title} className="w-full h-full object-cover transition-all duration-500" />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(idx)}
                  className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition ${selectedImg === idx ? 'border-cyan-400 ring-2 ring-cyan-400/30' : 'border-white/10 opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="p-6 rounded-2xl bg-deep-800/40 border border-white/10 backdrop-blur-sm h-fit">
            <h3 className="font-display font-bold text-white text-xl mb-4">Interested in this vessel?</h3>
            
            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center">
                <Sparkles className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <h4 className="text-white font-bold mb-1">Inquiry Sent!</h4>
                <p className="text-slate-300 text-sm">A boat specialist from Aloha Marine will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-4">
                <div className="grid grid-cols-2 gap-2 p-1 bg-black/40 rounded-lg text-xs font-semibold">
                  <button type="button" onClick={() => setInquiryType('quote')} className={`py-2 rounded transition ${inquiryType === 'quote' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'}`}>Request Quote</button>
                  <button type="button" onClick={() => setInquiryType('trial')} className={`py-2 rounded transition ${inquiryType === 'trial' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'}`}>Schedule Sea Trial</button>
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1">Full Name</label>
                  <input type="text" required placeholder="Captain John Smith" className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white text-sm focus:border-cyan-400/50 focus:outline-none" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Email or Phone</label>
                  <input type="text" required placeholder="john@example.com / (239) 555-0199" className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white text-sm focus:border-cyan-400/50 focus:outline-none" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Comments / Questions</label>
                  <textarea rows={3} placeholder="Is this boat available for a weekend water test?" className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white text-sm focus:border-cyan-400/50 focus:outline-none resize-none"></textarea>
                </div>

                <button type="submit" className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold tracking-wide transition shadow-lg shadow-cyan-500/20">
                  Submit Inquiry
                </button>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-cyan-400" /> Direct: {DEALERSHIP_INFO.phone}</span>
                  <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-cyan-400" /> Certified Dealer</span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Detailed Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2 p-8 rounded-2xl bg-deep-800/40 border border-white/10 backdrop-blur-sm">
            <h3 className="font-display font-bold text-white text-2xl mb-6">Specifications & Features</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8 pb-8 border-b border-white/5">
              {[
                { label: 'Year', val: boat.year },
                { label: 'Length', val: boat.length },
                { label: 'Engine', val: `${boat.hp} HP ${boat.engine}` },
                { label: 'Fuel Type', val: boat.fuel },
                { label: 'Draft', val: boat.draft },
                { label: 'Condition', val: boat.condition },
              ].map((s, i) => (
                <div key={i}>
                  <span className="text-xs text-slate-400 uppercase font-mono block">{s.label}</span>
                  <span className="text-white font-bold text-lg">{s.val}</span>
                </div>
              ))}
            </div>

            <h4 className="font-display font-bold text-white text-lg mb-4">Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {boat.features?.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <h4 className="font-display font-bold text-white text-lg mb-3">Overview</h4>
            <p className="text-slate-300 leading-relaxed text-sm">{boat.description}</p>
          </div>

          {/* Dealership Info Card */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-deep-800/40 border border-white/10 backdrop-blur-sm">
              <h4 className="font-display font-bold text-white text-lg mb-4">Aloha Marine SWFL Advantage</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span>Factory Certified Technicians</span>
                </li>
                <li className="flex items-start gap-2">
                  <Anchor className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span>Suzuki Stealth Authorized Repower Center</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span>Comprehensive Pre-Delivery Inspection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
