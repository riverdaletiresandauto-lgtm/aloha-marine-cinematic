import React from 'react';
import { Link } from 'react-router-dom';
import { DEALERSHIP_INFO } from '../data/boats';
import { Anchor, Shield, Star, Compass, Phone, Sparkles, MessageSquare, Camera, Tv, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';

export function CinematicFooter() {
  return (
    <footer className="relative bg-slate-50 border-t border-slate-200">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-white/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Top Section: Brand + Contact */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Anchor className="w-8 h-8 text-sky-600" />
              <span className="font-display text-2xl font-bold text-slate-900 tracking-tight">ALOHA MARINE SWFL</span>
            </div>
            <p className="text-slate-600 max-w-md text-base leading-relaxed mb-6">
              Southwest Florida's trusted full-service marine centers & dealerships. 
              Specializing in <span className="text-sky-600 font-semibold">Sea Born, Sundance & Spyder</span> boats,
              custom Suzuki Stealth repowers, and premium marine electronics.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-sky-100 border border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-700 text-sm transition">
                <MessageSquare className="w-4 h-4" />
                Facebook
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-sky-100 border border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-700 text-sm transition">
                <Camera className="w-4 h-4" />
                Instagram
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-sky-100 border border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-700 text-sm transition">
                <Tv className="w-4 h-4" />
                YouTube
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-slate-900 font-bold mb-4">Quick Links</h4>
            <nav className="space-y-2 text-sm">
              {[
                { label: 'New & Pre-Owned Inventory', href: '/inventory' },
                { label: 'Suzuki Stealth Repower Center', href: '/repower' },
                { label: 'Simrad & Marine Electronics', href: '/service' },
                { label: 'Service & Mobile Dockside', href: '/service' },
                { label: 'Financing & Trade-Ins', href: '/financing' },
                { label: 'Sell Your Boat / Consignment', href: '/sell' }
              ].map((item, i) => (
                <Link
                  key={i}
                  to={item.href}
                  className="flex items-center gap-2 text-slate-600 hover:text-sky-600 transition group"
                >
                  <ChevronRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-slate-900 font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a href={`tel:${DEALERSHIP_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-slate-600 hover:text-sky-600 transition">
                <Phone className="w-4 h-4 text-sky-600" />
                <span>{DEALERSHIP_INFO.phone}</span>
              </a>
              <a href={`mailto:${DEALERSHIP_INFO.email}`} className="flex items-center gap-2 text-slate-600 hover:text-sky-600 transition">
                <Mail className="w-4 h-4 text-sky-600" />
                <span>sales@alohamarineswfl.com</span>
              </a>
              <a href={`mailto:${DEALERSHIP_INFO.serviceEmail}`} className="flex items-center gap-2 text-slate-600 hover:text-sky-600 transition">
                <Mail className="w-4 h-4 text-sky-600" />
                <span>service@alohamarineswfl.com</span>
              </a>
              <div className="flex items-start gap-2 text-slate-600 pt-2">
                <MapPin className="w-4 h-4 text-sky-600 mt-0.5" />
                <span className="text-sm">{DEALERSHIP_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 pt-2">
                <Clock className="w-4 h-4 text-sky-600" />
                <span className="text-xs">{DEALERSHIP_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 my-10" />

        {/* Bottom Section: Stats + Brands + Legal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-center md:text-left">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-sky-600" />
              <span className="text-slate-600 text-sm">Certified Technicians</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500" />
              <span className="text-slate-600 text-sm">{DEALERSHIP_INFO.googleRating}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-sky-600" />
              <span className="text-slate-600 text-sm">{DEALERSHIP_INFO.experienceYears} Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-sky-600" />
              <span className="text-slate-600 text-sm">Family Owned</span>
            </div>
          </div>

          {/* Authorized Brands */}
          <div className="text-center md:text-center">
            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-3">AUTHORIZED BRANDS & PARTNERS</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-slate-600 text-sm font-medium">
              <span className="hover:text-sky-600 transition">Sea Born</span>
              <span className="text-slate-300">·</span>
              <span className="hover:text-sky-600 transition">Sundance</span>
              <span className="text-slate-300">·</span>
              <span className="hover:text-sky-600 transition">Spyder</span>
              <span className="text-slate-300">·</span>
              <span className="hover:text-sky-600 transition">Suzuki Marine</span>
              <span className="text-slate-300">·</span>
              <span className="hover:text-sky-600 transition">Yamaha</span>
              <span className="text-slate-300">·</span>
              <span className="hover:text-sky-600 transition">Simrad</span>
              <span className="text-slate-300">·</span>
              <span className="hover:text-sky-600 transition">Power-Pole</span>
              <span className="text-slate-300">·</span>
              <span className="hover:text-sky-600 transition">Wet Sounds</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Aloha Marine SWFL. All rights reserved.
            </p>
            <p className="text-slate-400 text-xs mt-1">
              Marine Dealer License MVD12345 · Site by Aloha Digital
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}