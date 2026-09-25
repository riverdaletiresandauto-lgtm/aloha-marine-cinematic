import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DEALERSHIP_INFO } from '../data/boats';
import { Anchor, Shield, Sparkles, Calculator, ChevronRight, CheckCircle2, AlertCircle, Clock, Percent, CreditCard } from 'lucide-react';

export function Financing() {
  const [calculator, setCalculator] = useState({
    price: 125000,
    downPayment: 25000,
    term: 180,
    rate: 7.24,
  });
  const [result, setResult] = useState({ monthly: 0, total: 0, totalInterest: 0 });

  const calculate = () => {
    const principal = calculator.price - calculator.downPayment;
    const monthlyRate = calculator.rate / 100 / 12;
    const months = calculator.term;
    const monthly = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const total = monthly * months;
    setResult({ monthly: Math.round(monthly), total: Math.round(total), totalInterest: Math.round(total - principal) });
  };

  return (
    <div className="min-h-screen bg-deep-900">
      {/* Hero */}
      <section className="relative pt-20 pb-16 px-6 bg-gradient-to-b from-deep-900 via-deep-900 to-deep-950 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-bold uppercase tracking-widest font-mono mb-6">
              <Percent className="w-4 h-4" /> COMPETITIVE MARINE FINANCING
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
              Finance Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">Dream Vessel</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Partner lenders offering rates as low as <span className="text-white font-bold">7.24% APR</span> with terms up to <span className="text-white font-bold">20 years</span>. 
              Soft credit pull — no impact to your score. Decision in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold tracking-wide transition shadow-lg shadow-cyan-500/30 flex items-center gap-2">
                <Calculator className="w-5 h-5" /> Get Pre-Qualified
              </Link>
              <Link to="/inventory" className="px-8 py-4 rounded-xl bg-deep-800/80 hover:bg-deep-700/80 border border-white/10 text-white font-semibold tracking-wide transition backdrop-blur-md flex items-center justify-center gap-2">
                <Anchor className="w-5 h-5" /> Browse Inventory
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="pt-16 pb-20 px-6 bg-deep-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator */}
            <div className="p-8 rounded-2xl bg-deep-800/40 border border-white/10 backdrop-blur-sm">
              <h2 className="font-display text-2xl font-bold text-white mb-6">Payment Calculator</h2>
              <div className="space-y-6">
                <div>
                  <label className="flex items-center justify-between text-sm mb-2">
                    <span className="text-slate-300">Purchase Price</span>
                    <span className="font-bold text-white">${calculator.price.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="25000"
                    max="500000"
                    step="5000"
                    value={calculator.price}
                    onChange={e => setCalculator(c => ({ ...c, price: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none accent-cyan-500"
                  />
                </div>
                <div>
                  <label className="flex items-center justify-between text-sm mb-2">
                    <span className="text-slate-300">Down Payment</span>
                    <span className="font-bold text-white">${calculator.downPayment.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max={calculator.price}
                    step="1000"
                    value={calculator.downPayment}
                    onChange={e => setCalculator(c => ({ ...c, downPayment: Math.min(parseInt(e.target.value), c.price) }))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none accent-cyan-500"
                  />
                </div>
                <div>
                  <label className="flex items-center justify-between text-sm mb-2">
                    <span className="text-slate-300">Loan Term</span>
                    <span className="font-bold text-white">{calculator.term} months ({calculator.term / 12} years)</span>
                  </label>
                  <input
                    type="range"
                    min="36"
                    max="240"
                    step="12"
                    value={calculator.term}
                    onChange={e => setCalculator(c => ({ ...c, term: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none accent-cyan-500"
                  />
                </div>
                <div>
                  <label className="flex items-center justify-between text-sm mb-2">
                    <span className="text-slate-300">Estimated Rate</span>
                    <span className="font-bold text-white">{calculator.rate}% APR</span>
                  </label>
                  <input
                    type="range"
                    min="6.99"
                    max="12.99"
                    step="0.25"
                    value={calculator.rate}
                    onChange={e => setCalculator(c => ({ ...c, rate: parseFloat(e.target.value) }))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none accent-cyan-500"
                  />
                  <p className="text-xs text-slate-500 mt-1">Rate for illustration only. Actual rate based on credit profile.</p>
                </div>

                <button onClick={calculate} className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold tracking-wide transition">
                  Calculate Payment
                </button>

                {result.monthly > 0 && (
                  <div className="pt-6 border-t border-white/5 space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-black/40 rounded-xl">
                        <span className="text-xs text-slate-400 block">Monthly Payment</span>
                        <span className="text-2xl font-display font-bold text-cyan-400">${result.monthly.toLocaleString()}</span>
                      </div>
                      <div className="p-4 bg-black/40 rounded-xl">
                        <span className="text-xs text-slate-400 block">Total Payments</span>
                        <span className="text-2xl font-display font-bold text-white">${result.total.toLocaleString()}</span>
                      </div>
                      <div className="p-4 bg-black/40 rounded-xl">
                        <span className="text-xs text-slate-400 block">Total Interest</span>
                        <span className="text-2xl font-display font-bold text-amber-400">${result.totalInterest.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Why Finance With Us */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-white mb-2">Why Finance Through Aloha Marine?</h2>
              <p className="text-slate-400">We've partnered with the top marine lenders to get you the best terms.</p>

              <div className="space-y-4">
                {[
                  { icon: Shield, title: 'Multiple Lenders, One App', desc: 'We shop Essex, Bank of the West, Sheffield, & more — you get the best rate.' },
                  { icon: Sparkles, title: 'Terms Up to 20 Years', desc: 'Longer terms = lower monthly payments. Keep more cash for fuel & upgrades.' },
                  { icon: Calculator, title: 'Soft Pull Pre-Qual', desc: 'Check your rate in 60 seconds with zero credit score impact.' },
                  { icon: Clock, title: 'Same-Day Decisions', desc: 'Most approvals within hours. Close and hit the water this weekend.' },
                  { icon: Percent, title: 'Rates from 7.24% APR', desc: 'Competitive marine-specific rates — not generic personal loan rates.' },
                  { icon: CreditCard, title: 'Bundle Extras', desc: 'Roll electronics, extended warranty, and accessories into one loan.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-xl bg-deep-800/40 border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lender Partners */}
      <section className="pt-8 pb-20 px-6 bg-deep-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">LENDING PARTNERS</span>
            <h2 className="font-display text-3xl font-bold text-white mt-2">Trusted Marine Lenders</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {['Essex Credit', 'Bank of the West', 'Sheffield Financial', 'BB&T / Truist', 'LightStream', 'Southwest Funding'].map((l, i) => (
              <span key={i} className="font-bold text-lg text-slate-300 hover:text-cyan-400 transition cursor-default">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pt-16 pb-20 px-6 bg-deep-900">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">COMMON QUESTIONS</span>
            <h2 className="font-display text-3xl font-bold text-white mt-2">Financing FAQ</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'What credit score do I need?', a: 'Most marine lenders prefer 680+, but we work with programs down to 620 with stronger down payments.' },
              { q: 'Can I finance a pre-owned boat?', a: 'Yes — up to 20 years on boats 2020 and newer. Older vessels typically 10-15 year terms.' },
              { q: 'Is there a prepayment penalty?', a: 'Our partner lenders offer no prepayment penalties — pay off early anytime.' },
              { q: 'Can I include accessories in the loan?', a: 'Absolutely. Electronics, extended warranties, and add-ons can be bundled.' },
              { q: 'How fast is the process?', a: 'Soft pull pre-qual in minutes. Full approval typically same business day with docs.' },
            ].map((faq, i) => (
              <details key={i} className="group p-5 rounded-xl bg-deep-800/40 border border-white/10">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-semibold text-white">{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-cyan-400 transition-transform group-open:rotate-90" />
                </summary>
                <p className="text-slate-400 text-sm mt-4 pb-2">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}