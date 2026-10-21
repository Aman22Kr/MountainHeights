import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { SCHOOL_INFO, PROGRAMS } from '../data/schoolData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: School Identity */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-slate-950 font-black text-lg">
                M
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {SCHOOL_INFO.name}
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Established in 2005. A premier early childhood sanctuary fostering cognitive, emotional, and social development through child-centered, play-based Montessori inquiry.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 text-[11px] text-amber-300 border border-slate-700">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>{SCHOOL_INFO.formerName}</span>
            </div>
            <div className="text-xs text-slate-400 pt-1">
              Maintained for GitHub: <span className="text-slate-200 font-mono">Aman22kr</span>
            </div>
          </div>

          {/* Col 2: Programs */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Early Years Programs
            </h4>
            <ul className="space-y-2 text-sm">
              {PROGRAMS.map((program) => (
                <li key={program.id}>
                  <Link
                    to={`/programs/${program.slug}`}
                    className="text-slate-400 hover:text-amber-300 transition-colors flex items-center justify-between group"
                  >
                    <span>{program.title}</span>
                    <span className="text-[11px] text-slate-500 group-hover:text-amber-400">
                      {program.ageGroup}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Explore Campus
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  Our Legacy &amp; Pedagogy
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-slate-400 hover:text-white transition-colors">
                  Admission Registration &amp; Fees
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-slate-400 hover:text-white transition-colors">
                  Smart Classrooms &amp; Splash Pool
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-white transition-colors">
                  Campus Life &amp; Events Gallery
                </Link>
              </li>
              <li>
                <Link to="/notices" className="text-slate-400 hover:text-white transition-colors">
                  Notice Board &amp; Circulars
                </Link>
              </li>
              <li>
                <Link to="/tour" className="text-slate-400 hover:text-white transition-colors">
                  Schedule a Campus Tour
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-white transition-colors">
                  Parent FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Campus Visit &amp; Contact
            </h4>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
              <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{SCHOOL_INFO.address}</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
              <Phone className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                {SCHOOL_INFO.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="block hover:text-white transition-colors"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
              <Mail className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
              <a
                href={`mailto:${SCHOOL_INFO.admissionsEmail}`}
                className="hover:text-white transition-colors"
              >
                {SCHOOL_INFO.admissionsEmail}
              </a>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-slate-400">
              <Clock className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{SCHOOL_INFO.officeHours}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2005&ndash;{new Date().getFullYear()} {SCHOOL_INFO.fullName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/faq" className="hover:text-slate-400 transition-colors">
              Admissions FAQ
            </Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-slate-400 transition-colors">
              Campus Map
            </Link>
            <span>·</span>
            <span className="flex items-center gap-1 text-slate-400">
              <span>Crafted for Aman22kr</span>
              <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
