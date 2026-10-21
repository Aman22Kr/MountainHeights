import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Droplets,
  Monitor,
  Heart,
  Truck,
  Eye,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { FACILITIES } from '../data/schoolData';

export const FacilitiesPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'learning' | 'recreation' | 'safety' | 'wellness'>('all');

  const filtered = FACILITIES.filter((fac) => {
    if (filter === 'all') return true;
    return fac.category === filter;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="bg-gradient-to-b from-amber-50/70 via-white to-slate-50 pt-12 pb-16 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5 text-amber-700" />
            <span>Child-Safe Architecture &amp; Certified Non-Toxic Play Areas</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Campus Infrastructure &amp; Amenities
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every room, corner, and apparatus at MountainHeights is engineered to foster autonomy, physical safety, and joyful discovery for children aged 6 months to 6 years.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                filter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              All Amenities ({FACILITIES.length})
            </button>
            <button
              onClick={() => setFilter('learning')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                filter === 'learning'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Learning &amp; Smart Tech
            </button>
            <button
              onClick={() => setFilter('recreation')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                filter === 'recreation'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Pool &amp; Recreation
            </button>
            <button
              onClick={() => setFilter('safety')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                filter === 'safety'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              CCTV &amp; Transport
            </button>
            <button
              onClick={() => setFilter('wellness')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                filter === 'wellness'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Dining &amp; Pediatric Care
            </button>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((fac) => (
              <div
                key={fac.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      {fac.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      <ShieldCheck className="h-3 w-3" />
                      Certified Safe
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">{fac.name}</h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {fac.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Highlights
                    </div>
                    <ul className="text-xs text-slate-700 space-y-1">
                      {fac.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-1 pt-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Infrastructure Features
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {fac.features.map((feat, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded bg-slate-100 text-slate-700 text-[11px]"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Safety Protocol:</span>{' '}
                  {fac.safetyStandard}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Child Protection Protocol Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Zero Compromise
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our 5-Point Child Protection Charter
            </h2>
            <p className="text-sm text-slate-600">
              From continuous monitoring to emergency pediatric response, our parents enjoy complete peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <Eye className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block mb-0.5">Zero Blind Spot High-Definition CCTV</strong>
                Coverage across classrooms, hallways, nap rooms, dining halls, and gated perimeters with daily footage audits.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block mb-0.5">Biometric Gate Sentry &amp; Visitor Escort</strong>
                Unescorted visitors are barred from classroom corridors. Parents must present registered security pick-up cards.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <Truck className="h-5 w-5 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block mb-0.5">GPS Monitored Fleet with Female Attendant</strong>
                Speed limits enforced at 40 km/h, child seat belts, and real-time transit status updates for enrolled commuters.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <Heart className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block mb-0.5">Full-Time Pediatric Nurse On Campus</strong>
                Daily temperature checks, nebulizer support, allergy tracking, and formal tie-up with nearby multi-specialty hospitals.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Ad Section */}
      <AdPlaceholder
        title="SafeKids Home Childproofing &amp; Fire Safety Kits"
        subtitle="Endorsed by MountainHeights safety council with 25% institutional privileges for parents."
        category="Safety Partner"
      />

      {/* Tour CTA */}
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="text-2xl font-bold">Inspect Our Campus With Your Own Eyes</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Book an appointment to tour the classrooms, splash pool, and dining hall. We welcome questions from prospective parents.
          </p>
          <div className="pt-2">
            <Link
              to="/tour"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-md"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Guided Campus Tour</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
