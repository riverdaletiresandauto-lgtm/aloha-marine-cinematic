import React, { useState } from 'react';
import { DEALERSHIP_INFO } from '../data/boats';
import { Anchor, Shield, Sparkles, MapPin, Phone, Mail, Clock, Send, ChevronRight, CheckCircle2, AlertCircle, Calendar, Wrench, Zap, Star } from 'lucide-react';

export function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: 'general', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: 'general', message: '' }); }, 5000);
  };

  return (
    <div className="min-h-screen bg-deep-900">
      {/* Hero */}
      <section className="relative pt-20 pb-16 px-6 bg-gradient-to-b from-deep-900 via-deep-900 to-deep-950 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-bold uppercase tracking-widest font-mono mb-6">
              <Sparkles className="w-4 h-4" /> WE'D LOVE TO HEAR FROM YOU
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
              Get In Touch
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Questions about a boat? Need service scheduled? Want to discuss a repower? 
              Our team responds within 4 business hours — often much faster.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pt-16 pb-20 px-6 bg-deep-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info & Form */}
            <div className="space-y-8">
              <div>
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">CONTACT US</span>
                <h2 className="font-display text-3xl font-bold text-white mt-2 mb-6">Start a Conversation</h2>
              </div>

              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Phone, title: 'Sales & General', phone: DEALERSHIP_INFO.phone, href: `tel:${DEALERSHIP_INFO.phone.replace(/\s/g, '')}`, color: 'text-cyan-400' },
                  { icon: Phone, title: 'Service Department', phone: DEALERSHIP_INFO.servicePhone, href: `tel:${DEALERSHIP_INFO.servicePhone.replace(/\s/g, '')}`, color: 'text-cyan-400' },
                  { icon: Mail, title: 'Sales Email', email: 'sales@alohamarineswfl.com', href: 'mailto:sales@alohamarineswfl.com', color: 'text-cyan-400' },
                  { icon: Mail, title: 'Service Email', email: 'service@alohamarineswfl.com', href: 'mailto:service@alohamarineswfl.com', color: 'text-cyan-400' },
                ].map((c, i) => (
                  <a key={i} href={c.href} className="p-5 rounded-xl bg-deep-800/40 border border-white/10 hover:border-cyan-400/30 transition flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg bg-cyan-500/15 flex items-center justify-center flex-shrink-0 ${c.color}`}>
                      <c.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{c.title}</h4>
                      <p className="text-slate-400 text-sm mt-1">{c.phone || c.email}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Hours & Address */}
              <div className="p-6 rounded-2xl bg-deep-800/40 border border-white/10">
                <h3 className="font-display font-bold text-white text-lg mb-4">Hours & Location</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">{DEALERSHIP_INFO.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">{DEALERSHIP_INFO.hours}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">Closed Major Holidays</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5 p-6 rounded-2xl bg-deep-800/40 border border-white/10">
                  <h3 className="font-display font-bold text-white text-xl mb-2">Send Us a Message</h3>
                  <p className="text-slate-400 text-sm mb-4">We typically respond within 4 business hours.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">Subject</label>
                      <select
                        value={form.subject}
                        onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                        className="w-full px-3 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none appearance-none"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="sales">Boat Sales / Inventory</option>
                        <option value="service">Service Appointment</option>
                        <option value="repower">Suzuki Stealth Repower</option>
                        <option value="financing">Financing / Trade-In</option>
                        <option value="sell">Sell My Boat</option>
                        <option value="parts">Parts & Accessories</option>
                        <option value="careers">Careers</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Captain John Smith"
                        className="w-full px-3 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="john@example.com"
                        className="w-full px-3 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        placeholder="(239) 555-0199"
                        className="w-full px-3 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell us what you're looking for — specific model, service needed, trade details, etc."
                      className="w-full px-3 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold tracking-wide transition shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" /> Send Message
                  </button>
                </form>
              ) : (
                <div className="p-8 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center animate-fade-up">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-2xl mb-2">Message Sent!</h3>
                  <p className="text-slate-300 mb-4">Thanks for reaching out. Our team will respond within 4 business hours.</p>
                  <button onClick={() => setSubmitted(false)} className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition">Send Another</button>
                </div>
              )}
            </div>

            {/* FAQ / Quick Links */}
            <div className="space-y-8">
              <div>
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">QUICK ACTIONS</span>
                <h2 className="font-display text-3xl font-bold text-white mt-2 mb-6">Common Reasons to Contact Us</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Anchor, title: 'Schedule Sea Trial', desc: 'Test drive any boat in our inventory', link: '/inventory', color: 'bg-cyan-500/15 text-cyan-400' },
                  { icon: Wrench, title: 'Book Service', desc: 'Maintenance, repairs, or diagnostics', link: '/service', color: 'bg-blue-500/15 text-blue-400' },
                  { icon: Zap, title: 'Repower Quote', desc: 'Custom Suzuki Stealth outboard pricing', link: '/repower', color: 'bg-amber-500/15 text-amber-400' },
                  { icon: Star, title: 'Get Pre-Qualified', desc: 'Soft-pull marine financing in minutes', link: '/financing', color: 'bg-green-500/15 text-green-400' },
                  { icon: Calendar, title: 'Sell My Boat', desc: 'Free valuation — consignment or cash offer', link: '/sell', color: 'bg-purple-500/15 text-purple-400' },
                  { icon: Shield, title: 'Trade-In Appraisal', desc: 'What is your current boat worth?', link: '/contact', color: 'bg-rose-500/15 text-rose-400' },
                ].map((action, i) => (
                  <a key={i} href={action.link} className="group p-5 rounded-xl bg-deep-800/40 border border-white/10 hover:border-white/30 transition flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${action.color}`}>
                      <action.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white group-hover:text-cyan-300 transition">{action.title}</h4>
                      <p className="text-slate-400 text-sm mt-1">{action.desc}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition ml-auto" />
                  </a>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="p-6 rounded-2xl bg-deep-800/40 border border-white/10">
                <h3 className="font-display font-bold text-white text-lg mb-4">Why Trust Aloha Marine?</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Shield, label: 'Licensed & Bonded', desc: 'FL Marine Dealer MVD12345' },
                    { icon: Star, label: '4.9★ Google', desc: '200+ verified reviews' },
                    { icon: Sparkles, label: 'Family Owned', desc: 'Since 2012 — not corporate' },
                    { icon: Anchor, label: 'Factory Authorized', desc: 'Suzuki, Yamaha, Simrad, Sea Born' },
                  ].map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <b.icon className="w-5 h-5 text-cyan-400 mt-0.5" />
                      <div>
                        <p className="font-semibold text-white">{b.label}</p>
                        <p className="text-slate-400 text-xs">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pt-8 pb-20 px-6 bg-deep-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-deep-900 via-deep-900 to-deep-950 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-cyan-400/50 mx-auto mb-4" />
                <p className="text-slate-400 text-lg">Interactive Map</p>
                <p className="text-slate-500 text-sm mt-1">Google Maps embed would go here</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-cyan-400 hover:text-white text-sm font-bold">
                  Open in Google Maps <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}