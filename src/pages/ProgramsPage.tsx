import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Calendar,
  Sparkles,
  Award,
} from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { PROGRAMS, Program } from '../data/schoolData';

export const ProgramsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredPrograms = PROGRAMS.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'toddler') return p.slug === 'mother-toddler' || p.slug === 'playgroup';
    if (activeFilter === 'preschool') return p.slug === 'nursery' || p.slug === 'kindergarten';
    if (activeFilter === 'care') return p.slug === 'daycare' || p.slug === 'activity-club';
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="bg-gradient-to-b from-amber-50/70 via-white to-slate-50 pt-12 pb-16 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5 text-amber-700" />
            <span>Curriculum for Ages 6 Months to 6 Years</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Academic &amp; Developmental Programs
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our multi-stage curriculum is calibrated to match each developmental leap—from infant sensory discovery to school-readiness phonics and arithmetic.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                activeFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              All Programs ({PROGRAMS.length})
            </button>
            <button
              onClick={() => setActiveFilter('toddler')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                activeFilter === 'toddler'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Toddlers &amp; Playgroup (0.5–2.5 yrs)
            </button>
            <button
              onClick={() => setActiveFilter('preschool')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                activeFilter === 'preschool'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Nursery &amp; Kindergarten (2.5–5.5 yrs)
            </button>
            <button
              onClick={() => setActiveFilter('care')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                activeFilter === 'care'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Daycare &amp; Enrichment Clubs
            </button>
          </div>
        </div>
      </section>

      {/* Program Grid */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-100">
                      Age: {prog.ageGroup}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {prog.ratio}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{prog.title}</h3>
                    <p className="mt-1 text-xs text-amber-700 font-medium">
                      {prog.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {prog.overview}
                  </p>

                  {/* Highlights list */}
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Curriculum Pillars
                    </div>
                    <ul className="text-xs text-slate-700 space-y-1.5">
                      {prog.curriculumPillars.map((pillar, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pillar}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timings and Ratio box */}
                  <div className="p-3 rounded-xl bg-slate-50 text-xs text-slate-600 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      <span><strong>Timings:</strong> {prog.timings}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      <span><strong>Batch Ratio:</strong> {prog.ratio}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400">Term Fee:</span>{' '}
                    <span className="text-sm font-bold text-slate-900">
                      ₹{prog.termFee.toLocaleString()}
                    </span>
                  </div>
                  <Link
                    to={`/programs/${prog.slug}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-amber-600 transition-colors"
                  >
                    <span>Full Syllabus</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Day Routine Timeline */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Balanced Daily Rhythm
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              A Typical Day at MountainHeights
            </h2>
            <p className="text-sm text-slate-600">
              Young children thrive when structure meets predictable freedom. Here is how our typical preschool morning unfolds.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="px-3 py-1.5 rounded-lg bg-amber-100 text-amber-900 font-mono text-xs font-bold shrink-0">
                8:45 AM
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Arrival, Greeting &amp; Free Sensorial Choice</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Children are warmly received by their teachers, hang up their bags, and choose tactile Montessori apparatus (puzzles, sensory trays, tactile swatches).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="px-3 py-1.5 rounded-lg bg-sky-100 text-sky-900 font-mono text-xs font-bold shrink-0">
                9:30 AM
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Morning Circle, Phonics &amp; Rhymes</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Affirmations, calendar/weather check, multi-sensory Jolly Phonics song, and puppet storytelling introducing the week&rsquo;s inquiry theme.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-900 font-mono text-xs font-bold shrink-0">
                10:15 AM
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Hygienic Handwash &amp; Nutritious Snack</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Supervised table manners, social chatting with peers, and wholesome organic warm snacks prepared in our campus kitchen.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="px-3 py-1.5 rounded-lg bg-purple-100 text-purple-900 font-mono text-xs font-bold shrink-0">
                10:50 AM
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Outdoor Sand &amp; Splash / Gross Motor Play</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Running, soft hurdle balancing, ball pool jumping, water pouring, or gardening in the organic vegetable beds.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="px-3 py-1.5 rounded-lg bg-rose-100 text-rose-900 font-mono text-xs font-bold shrink-0">
                11:45 AM
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Creative Art Studio &amp; Reflective Story Wrap-up</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Finger painting, clay sculpting, and a gentle wind-down story before safe handover to parents or transition into the daycare wing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Ad Section */}
      <AdPlaceholder
        title="Scholastic Early Learners Book Collection"
        subtitle="Specially curated reading bundles recommended by MountainHeights early literacy educators."
        category="Reading Partner"
      />

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="text-2xl font-bold">Unsure Which Program Suits Your Child Best?</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Our developmental counselors are happy to guide you based on your child&rsquo;s exact age and readiness.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm hover:bg-amber-400 transition-colors shadow-md"
            >
              Consult an Academic Counselor
            </Link>
            <Link
              to="/admissions"
              className="px-6 py-2.5 rounded-xl bg-slate-800 text-white font-semibold text-xs sm:text-sm border border-slate-700 hover:bg-slate-700 transition-colors"
            >
              Start Admission Registration
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
