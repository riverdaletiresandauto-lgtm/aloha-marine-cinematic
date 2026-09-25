import React from 'react';
import { Link } from 'react-router-dom';
import { DEALERSHIP_INFO } from '../data/boats';
import { Anchor, Wrench, Zap, Shield, Sparkles, ChevronRight, CheckCircle2, AlertCircle, Calendar, Phone } from 'lucide-react';

export function Service() {
  const services = [
    {
      category: 'Mechanical & Engine',
      icon: Wrench,
      items: [
        'Suzuki & Yamaha Factory Maintenance',
        'Outboard Repower & Installation',
        'Lower Unit Service & Rebuilds',
        'Fuel System Cleaning & Diagnostics',
        'Cooling System & Impeller Replacement',
        'Winterization & Spring Commissioning',
      ]
    },
    {
      category: 'Electronics & Navigation',
      icon: Zap,
      items: [
        'Simrad & Lowrance Glass Bridge Installs',
        'CHIRP Sonar & StructureScan Setup',
        'Radar & Autopilot Integration',
        'NMEA 2000 Network Design',
        'VHF & AIS Installation',
        'Custom Switch Panels & Power Distribution',
      ]
    },
    {
      category: 'Hull & Cosmetic',
      icon: Sparkles,
      items: [
        'Ceramic Pro Marine Coating (5yr)',
        'Gelcoat Repair & Color Matching',
        'Fiberglass Structural Repair',
        'Non-Skid Deck Restoration',
        'Canvas & Upholstery Repair',
        'Teak Cleaning, Sealing & Restoration',
      ]
    },
    {
      category: 'Systems & Accessories',
      icon: Anchor,
      items: [
        'Power-Pole Shallow Water Anchors',
        'Wet Sounds Marine Audio Systems',
        'Seakeeper Gyro Stabilizers',
        'AC/DC Electrical Upgrades',
        'Watermaker & HVAC Service',
        'Custom Rigging & Fabrication',
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-deep-900">
      {/* Hero */}
      <section className="relative pt-20 pb-16 px-6 bg-gradient-to-b from-deep-900 via-deep-900 to-deep-950 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-bold uppercase tracking-widest font-mono mb-6">
              <Shield className="w-4 h-4" /> FACTORY CERTIFIED TECHNICIANS
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
              Full-Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">Marine Center</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Suzuki & Yamaha Master Technicians. Simrad Certified Installers. 
              Mobile dockside service across SWFL — we come to your slip.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`tel:${DEALERSHIP_INFO.phone.replace(/\s/g, '')}`} className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold tracking-wide transition shadow-lg shadow-cyan-500/30 flex items-center gap-2">
                <Phone className="w-5 h-5" /> Schedule Service
              </a>
              <Link to="/contact" className="px-8 py-4 rounded-xl bg-deep-800/80 hover:bg-deep-700/80 border border-white/10 text-white font-semibold tracking-wide transition backdrop-blur-md flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" /> Request Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="pt-20 pb-20 px-6 bg-deep-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((cat, ci) => (
              <div key={ci} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center">
                    <cat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">{cat.category}</h3>
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-3 p-4 rounded-xl bg-deep-800/40 border border-white/10 hover:border-cyan-400/30 transition">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Dockside Service Highlight */}
      <section id="mobile" className="pt-8 pb-20 px-6 bg-deep-950 border-t border-white/5 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <img src="/images/mobile-service.jpg" alt="Mobile marine service truck" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-900/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <p className="text-cyan-300 text-sm font-bold uppercase tracking-widest mb-1">Mobile Service Radius</p>
                  <p className="text-2xl font-display font-bold text-white">50 Miles from Fort Myers</p>
                  <p className="text-slate-400 text-sm mt-1">Marco Island → Punta Gorda → Naples</p>
                </div>
              </div>
            </div>
            <div>
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">WE COME TO YOU</span>
              <h2 className="font-display text-3xl font-bold text-white mt-2 mb-6">Mobile Dockside Service</h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Why trailer your boat when our fully equipped service trucks come to your dock, marina, or lift?
                From routine maintenance to complex electronics installs — we bring the shop to you.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'No trailer needed — we service at your slip',
                  'Same rates as in-shop (no travel surcharge within radius)',
                  'Full diagnostic computer on board',
                  'Sea trial verification after every repair',
                  'Digital inspection reports with photos',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold tracking-wide transition">
                <Calendar className="w-5 h-5" /> Schedule Mobile Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="pt-16 pb-20 px-6 bg-deep-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">THE ALOHA DIFFERENCE</span>
            <h2 className="font-display text-3xl font-bold text-white mt-2">Why Captains Trust Aloha Marine</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Factory Trained', desc: 'Suzuki Master Techs & Yamaha Certified on staff' },
              { icon: Sparkles, title: 'Digital Transparency', desc: 'Photo/video inspection reports sent to your phone' },
              { icon: AlertCircle, title: 'No Surprise Billing', desc: 'Approved estimate required before any work begins' },
              { icon: Calendar, title: 'Fast Turnaround', desc: 'Most maintenance completed same-day' },
              { icon: Anchor, title: 'Warranty Work', desc: 'Authorized for Suzuki, Yamaha, Simrad, Power-Pole' },
              { icon: Phone, title: 'Direct Communication', desc: 'Text your tech directly — no service writer runaround' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-deep-800/40 border border-white/10 hover:border-cyan-400/30 transition">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="font-display font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}