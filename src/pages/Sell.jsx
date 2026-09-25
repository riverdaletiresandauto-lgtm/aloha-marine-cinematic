import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DEALERSHIP_INFO } from '../data/boats';
import { Anchor, Shield, Sparkles, ChevronRight, CheckCircle2, AlertCircle, Calendar, Phone, DollarSign, Upload, Search, Mail } from 'lucide-react';

export function Sell() {
  const [mode, setMode] = useState('consign');
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-deep-900">
      {/* Hero */}
      <section className="relative pt-20 pb-16 px-6 bg-gradient-to-b from-deep-900 via-deep-900 to-deep-950 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-widest font-mono mb-6">
              <DollarSign className="w-4 h-4" /> MAXIMIZE YOUR RETURN
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
              Sell Your Boat <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">With Confidence</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Two paths to sell: <span className="text-white font-semibold">Consignment</span> (we handle everything, you get top dollar) 
              or <span className="text-white font-semibold">Direct Purchase</span> (instant offer, same-day funds).
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold tracking-wide transition shadow-lg shadow-cyan-500/30 flex items-center gap-2">
                <Search className="w-5 h-5" /> Get Free Valuation
              </Link>
              <Link to="/inventory" className="px-8 py-4 rounded-xl bg-deep-800/80 hover:bg-deep-700/80 border border-white/10 text-white font-semibold tracking-wide transition backdrop-blur-md flex items-center justify-center gap-2">
                <Anchor className="w-5 h-5" /> See How We Market
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mode Selector */}
      <section className="pt-8 pb-12 px-6 bg-deep-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-4 p-2 bg-deep-800/40 border border-white/10 rounded-xl">
            <button
              onClick={() => setMode('consign')}
              className={`py-3 px-4 rounded-lg font-bold transition ${mode === 'consign' ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30' : 'text-slate-400 hover:text-white'}`}
            >
              Consignment (Recommended)
            </button>
            <button
              onClick={() => setMode('buyout')}
              className={`py-3 px-4 rounded-lg font-bold transition ${mode === 'buyout' ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30' : 'text-slate-400 hover:text-white'}`}
            >
              Direct Purchase
            </button>
          </div>
        </div>
      </section>

      {/* Consignment Details */}
      {mode === 'consign' && (
        <section className="pt-8 pb-20 px-6 bg-deep-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">HOW CONSIGNMENT WORKS</span>
                <h2 className="font-display text-3xl font-bold text-white mt-2 mb-8">We Do The Work. You Get The Best Price.</h2>
                
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Free Market Valuation', desc: 'We analyze recent sales, current listings, and market trends to price your boat competitively.' },
                    { step: '02', title: 'Professional Prep & Photography', desc: 'Detailing, ceramic coating, 50+ HD photos, drone aerial, and 3D walkthrough — on us.' },
                    { step: '03', title: 'Multi-Channel Marketing', desc: 'Listed on Boat Trader, YachtWorld, our site, social media, and emailed to our 5,000+ buyer database.' },
                    { step: '04', title: 'Showings & Sea Trials', desc: 'We handle all inquiries, schedule showings, and accompany buyers on water tests.' },
                    { step: '05', title: 'Negotiation & Closing', desc: 'We negotiate on your behalf, handle contracts, surveys, haul-outs, and fund disbursement.' },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center flex-shrink-0">
                        <span className="font-display font-bold text-cyan-400 text-xl">{step.step}</span>
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-white">{step.title}</h4>
                        <p className="text-slate-400 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-8 rounded-2xl bg-deep-800/40 border border-white/10 backdrop-blur-sm">
                  <h3 className="font-display font-bold text-white text-xl mb-6">What You Get</h3>
                  <ul className="space-y-3">
                    {[
                      'No upfront costs — we invest in marketing',
                      'You set the minimum acceptable price',
                      'Monthly activity reports with views & inquiries',
                      'Secure escrow & title transfer handling',
                      'Pay only when sold (industry-low 8% commission)',
                      'Trade-in credit bonus toward new boat purchase',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                  <h4 className="font-display font-bold text-amber-400 mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" /> Trade-In Bonus
                  </h4>
                  <p className="text-slate-300">
                    Apply your consignment proceeds toward any new Sea Born, Sundance, or Spyder and receive an <span className="text-white font-bold">additional 2% dealer credit</span> on top of your sale price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Direct Purchase Details */}
      {mode === 'buyout' && (
        <section className="pt-8 pb-20 px-6 bg-deep-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">INSTANT OFFER PROGRAM</span>
                <h2 className="font-display text-3xl font-bold text-white mt-2 mb-8">Cash Offer in 24 Hours. Funds in 48.</h2>
                
                <div className="space-y-6">
                  {[
                    { title: 'Submit Details', desc: 'Fill out our quick form with year, make, model, hours, condition, and photos.' },
                    { title: 'Get Verbal Offer', desc: 'Our acquisition team reviews and calls with a firm cash offer within 24 hours.' },
                    { title: 'Quick Inspection', desc: 'We schedule a brief on-site or dockside inspection at your convenience.' },
                    { title: 'Same-Day Payment', desc: 'Wire transfer or certified check upon title transfer. No waiting.' },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center flex-shrink-0">
                        <span className="font-display font-bold text-cyan-400 text-xl">{i + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-white">{step.title}</h4>
                        <p className="text-slate-400 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-rose-500/10 border border-rose-500/30">
                  <h4 className="font-display font-bold text-rose-400 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" /> Important
                  </h4>
                  <p className="text-slate-300">
                    Direct purchase offers are typically <span className="text-white font-bold">10-15% below retail</span> to account for our reconditioning, marketing, warranty, and holding costs. 
                    For maximum return, we recommend <span className="text-cyan-400 font-bold">Consignment</span>.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-8 rounded-2xl bg-deep-800/40 border border-white/10 backdrop-blur-sm">
                  <h3 className="font-display font-bold text-white text-xl mb-6">Ideal For Direct Purchase</h3>
                  <ul className="space-y-3">
                    {[
                      'Need to sell quickly (relocation, estate, upgrade)',
                      'Boats 10+ years old with high hours',
                      'Project boats needing significant work',
                      'Avoiding showings, surveys, and negotiations',
                      'Wanting guaranteed sale with no contingencies',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Start the Process */}
      <section className="pt-16 pb-20 px-6 bg-deep-950 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">GET STARTED</span>
            <h2 className="font-display text-3xl font-bold text-white mt-2">Ready to Know What Your Boat is Worth?</h2>
            <p className="text-slate-400 mt-3">Free, no-obligation market valuation. We'll reply within 4 business hours.</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs text-slate-400 block mb-1">Year</label>
                <input type="number" min="1990" max={new Date().getFullYear() + 1} placeholder="2022" className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none" />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Make / Brand</label>
                <input type="text" placeholder="Sea Born" className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none" />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Model</label>
                <input type="text" placeholder="FX24 Bay ES" className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none" />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Length</label>
                <input type="text" placeholder="24'" className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs text-slate-400 block mb-1">Engine(s) & Hours</label>
                <input type="text" placeholder="Twin Yamaha F300, 450 hrs each" className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs text-slate-400 block mb-1">Condition & Notable Features</label>
                <textarea rows={3} placeholder="Excellent. Garmin GPSMAP 8612, Seakeeper 3, Power-Pole, custom cover..." className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none resize-none"></textarea>
              </div>
              <div className="md:col-span-2">
                <label className="text-xs text-slate-400 block mb-1">Photos (Drag & drop or click to upload)</label>
                <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-cyan-400/50 transition">
                  <Upload className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                  <p className="text-slate-400">Up to 20 photos • JPG, PNG • Max 10MB each</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
              <div>
                <label className="text-xs text-slate-400 block mb-1">Your Name</label>
                <input type="text" required placeholder="Captain John Smith" className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none" />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Email or Phone</label>
                <input type="text" required placeholder="john@example.com / (239) 555-0199" className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none" />
              </div>
            </div>

            <button type="submit" className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold tracking-wide text-lg transition shadow-lg shadow-cyan-500/30">
              Get My Free Valuation
            </button>

            {formSubmitted && (
              <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center animate-fade-up">
                <Sparkles className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                <h4 className="text-white font-bold text-lg mb-1">Valuation Request Sent!</h4>
                <p className="text-slate-300">Our appraisal team will review and contact you within 4 business hours with a detailed market analysis.</p>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}