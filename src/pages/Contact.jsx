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
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative pt-20 pb-16 px-6 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-500/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 border border-sky-200 text-xs font-bold uppercase tracking-widest font-mono mb-6">
              <Sparkles className="w-4 h-4" /> WE'D LOVE TO HEAR FROM YOU
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mb-6">
              Get In Touch
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Questions about a boat? Need service scheduled? Want to discuss a repower? 
              Our team responds within 4 business hours — often much faster.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pt-16 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info & Form */}
            <div className="space-y-8">
              <div>
                <span className="text-sky-600 text-xs font-bold uppercase tracking-widest">CONTACT US</span>
                <h2 className="font-display text-3xl font-bold text-slate-900 mt-2 mb-6">Start a Conversation</h2>
              </div>

              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Phone, title: 'Sales & General', phone: DEALERSHIP_INFO.phone, href: `tel:${DEALERSHIP_INFO.phone.replace(/\s/g, '')}`, color: 'text-sky-600' },
                  { icon: Phone, title: 'Service Department', phone: DEALERSHIP_INFO.servicePhone, href: `tel:${DEALERSHIP_INFO.servicePhone.replace(/\s/g, '')}`, color: 'text-sky-600' },
                  { icon: Mail, title: 'Sales Email', email: 'sales@alohamarineswfl.com', href: 'mailto:sales@alohamarineswfl.com', color: 'text-sky-600' },
                  { icon: Mail, title: 'Service Email', email: 'service@alohamarineswfl.com', href: 'mailto:service@alohamarineswfl.com', color: 'text-sky-600' },
                ].map((c, i) => (
                  <a key={i} href={c.href} className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-md transition flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0 ${c.color}`}>
                      <c.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{c.title}</h4>
                      <p className="text-slate-500 text-sm mt-1">{c.phone || c.email}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Hours & Address */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-display font-bold text-slate-900 text-lg mb-4">Hours & Location</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-sky-600" />
                    <span className="text-slate-600">{DEALERSHIP_INFO.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-sky-600" />
                    <span className="text-slate-600">{DEALERSHIP_INFO.hours}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-sky-600" />
                    <span className="text-slate-600">Closed Major Holidays</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-display font-bold text-slate-900 text-xl mb-2">Send Us a Message</h3>
                  <p className="text-slate-500 text-sm mb-4">We typically respond within 4 business hours.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-slate-500 block mb-1">Subject</label>
                      <select
                        value={form.subject}
                        onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                        className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/30 appearance-none"
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
                      <label className="text-xs text-slate-500 block mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Captain John Smith"
                        className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/30"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-500 block mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="john@example.com"
                        className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/30"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-500 block mb-1">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        placeholder="(239) 555-0199"
                        className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-500 block mb-1">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell us what you're looking for — specific model, service needed, trade details, etc."
                      className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/30 resize-none"
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold tracking-wide transition shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" /> Send Message
                  </button>
                </form>
              ) : (
                <div className="p-8 rounded-2xl bg-sky-50 border border-sky-200 text-center animate-fade-up">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-2xl mb-2">Message Sent!</h3>
                  <p className="text-slate-600 mb-4">Thanks for reaching out. Our team will respond within 4 business hours.</p>
                  <button onClick={() => setSubmitted(false)} className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold transition">Send Another</button>
                </div>
              )}
            </div>

            {/* FAQ / Quick Links */}
            <div className="space-y-8">
              <div>
                <span className="text-sky-600 text-xs font-bold uppercase tracking-widest">QUICK ACTIONS</span>
                <h2 className="font-display text-3xl font-bold text-slate-900 mt-2 mb-6">Common Reasons to Contact Us</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Anchor, title: 'Schedule Sea Trial', desc: 'Test drive any boat in our inventory', link: '/inventory', color: 'bg-sky-100 text-sky-600' },
                  { icon: Wrench, title: 'Book Service', desc: 'Maintenance, repairs, or diagnostics', link: '/service', color: 'bg-blue-100 text-blue-600' },
                  { icon: Zap, title: 'Repower Quote', desc: 'Custom Suzuki Stealth outboard pricing', link: '/repower', color: 'bg-amber-100 text-amber-600' },
                  { icon: Star, title: 'Get Pre-Qualified', desc: 'Soft-pull marine financing in minutes', link: '/financing', color: 'bg-emerald-100 text-emerald-600' },
                  { icon: Calendar, title: 'Sell My Boat', desc: 'Free valuation — consignment or cash offer', link: '/sell', color: 'bg-purple-100 text-purple-600' },
                  { icon: Shield, title: 'Trade-In Appraisal', desc: 'What is your current boat worth?', link: '/contact', color: 'bg-rose-100 text-rose-600' },
                ].map((action, i) => (
                  <a key={i} href={action.link} className="group p-5 rounded-xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${action.color}`}>
                      <action.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 group-hover:text-sky-600 transition">{action.title}</h4>
                      <p className="text-slate-500 text-sm mt-1">{action.desc}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-sky-600 transition ml-auto" />
                  </a>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h3 className="font-display font-bold text-slate-900 text-lg mb-4">Why Trust Aloha Marine?</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Shield, label: 'Licensed & Bonded', desc: 'FL Marine Dealer MVD12345' },
                    { icon: Star, label: '4.9★ Google', desc: '200+ verified reviews' },
                    { icon: Sparkles, label: 'Family Owned', desc: 'Since 2012 — not corporate' },
                    { icon: Anchor, label: 'Factory Authorized', desc: 'Suzuki, Yamaha, Simrad, Sea Born' },
                  ].map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <b.icon className="w-5 h-5 text-sky-600 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">{b.label}</p>
                        <p className="text-slate-500 text-xs">{b.desc}</p>
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
      <section className="pt-8 pb-20 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-sky-500/50 mx-auto mb-4" />
                <p className="text-slate-600 text-lg">Interactive Map</p>
                <p className="text-slate-500 text-sm mt-1">Google Maps embed would go here</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 text-sm font-bold">
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