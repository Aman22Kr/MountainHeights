import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Phone, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { SearchModal } from './SearchModal';
import { SCHOOL_INFO } from '../data/schoolData';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Programs', path: '/programs' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Campus Life', path: '/gallery' },
    { label: 'Notices', path: '/notices' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Notification / Hotline Banner */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 font-semibold text-amber-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Admissions Open 2026-27</span>
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-300">
              Preschool, Nursery &amp; Kindergarten (Ages 1.5–6 yrs)
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+919250057531"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="h-3 w-3 text-amber-400" />
              <span>+91 925 005 7531</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <Link
              to="/tour"
              className="flex items-center gap-1 text-amber-300 hover:text-amber-200 font-medium transition-colors"
            >
              <Calendar className="h-3 w-3" />
              <span>Book Campus Visit</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3-Zones */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Display Face, Single Element) */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-600 to-amber-500 text-white shadow-xs font-black text-lg group-hover:scale-105 transition-transform">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight leading-none text-slate-900 group-hover:text-amber-700 transition-colors">
                {SCHOOL_INFO.name}
              </span>
              <span className="text-[10px] tracking-wider text-slate-500 uppercase font-semibold mt-0.5">
                Early Learning Academy
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links (Whitespace-Nowrap, Single Line, Subtle Hover) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                    isActive
                      ? 'text-amber-800 border-amber-600 font-semibold'
                      : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Search & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Search"
              title="Search (Ctrl + K)"
            >
              <Search className="h-5 w-5" />
            </button>

            <Link
              to="/admissions"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-amber-600 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
            >
              <span>Apply Now</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-amber-50 text-amber-800 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate('/admissions');
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <span>Register for Admission</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate('/tour');
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-amber-900 bg-amber-50 border border-amber-200 rounded-lg hover:bg-amber-100 transition-colors"
              >
                <span>Book Campus Tour</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Dialog */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
