import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Calendar,
  Sparkles,
  Download,
  ShieldCheck,
  ChevronRight,
  Heart,
} from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { useApp } from '../context/AppContext';
import { PROGRAMS } from '../data/schoolData';

export const ProgramDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { showToast } = useApp();

  const program = PROGRAMS.find((p) => p.slug === slug);

  if (!program) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
        <div className="max-w-md bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="h-12 w-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
            !
          </div>
          <h2 className="text-xl font-bold text-slate-900">Program Not Found</h2>
          <p className="text-sm text-slate-600">
            The program you are looking for does not exist or has been updated.
          </p>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800"
          >
            <span>View All Programs</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  const handleDownloadSyllabus = () => {
    showToast(`Downloading syllabus overview for ${program.title}...`, 'success');
  };

  const otherPrograms = PROGRAMS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="hover:text-slate-900">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <Link to="/programs" className="hover:text-slate-900">Programs</Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">{program.title}</span>
          </nav>
        </div>
      </div>

      {/* Program Hero Header */}
      <section className="bg-gradient-to-b from-amber-50/70 via-white to-slate-50 py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200">
                  Target Age: {program.ageGroup}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                  Batch Ratio {program.ratio}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {program.title}
              </h1>

              <p className="text-base text-amber-800 font-medium">
                {program.tagline}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                {program.overview}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to={`/admissions?program=${encodeURIComponent(program.title)}`}
                  className="px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-amber-600 transition-colors shadow-sm"
                >
                  Apply for this Program
                </Link>

                <button
                  onClick={handleDownloadSyllabus}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
                >
                  <Download className="h-4 w-4 text-slate-500" />
                  <span>Download Curriculum PDF</span>
                </button>
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="lg:col-span-4">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-md space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">
                  Program Quick Facts
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-1 border-b border-slate-50">
                    <span className="text-slate-500">Age Eligibility:</span>
                    <span className="font-semibold text-slate-900">{program.ageGroup}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-50">
                    <span className="text-slate-500">Class Timings:</span>
                    <span className="font-semibold text-slate-900">{program.timings}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-50">
                    <span className="text-slate-500">Teacher Ratio:</span>
                    <span className="font-semibold text-slate-900">{program.ratio}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-50">
                    <span className="text-slate-500">Term Composite Fee:</span>
                    <span className="font-bold text-amber-700 font-mono">
                      ₹{program.termFee.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500">Classroom Wing:</span>
                    <span className="font-semibold text-slate-900">AC &amp; Splash Zone</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/tour"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200 hover:bg-amber-100 transition-colors"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Observe a Live Class</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Pillars & Developmental Milestones */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Pillars */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Foundational Learning
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Curriculum Pillars
              </h2>
              <div className="space-y-3">
                {program.curriculumPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                  >
                    <div className="h-6 w-6 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{pillar}</h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Structured through hands-on tactile games, peer dialogue, and sensory integration stations.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Milestones */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Expected Outcomes
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Target Developmental Milestones
              </h2>
              <div className="space-y-3">
                {program.keyMilestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-slate-800">
                        {milestone}
                      </p>
                      <span className="text-[11px] text-emerald-700 font-semibold">
                        Monitored via bi-weekly portfolio reviews
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule Breakdown */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Timetable &amp; Routines
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Sample Day Schedule for {program.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Rhythms balance high-focus sensory tasks with relaxation, fresh meals, and movement.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="divide-y divide-slate-100">
              {program.dailySchedule.map((slot, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-md bg-amber-50 text-amber-900 font-mono text-xs font-bold shrink-0">
                      {slot.time}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {slot.activity}
                      </h4>
                      <p className="text-xs text-slate-600">
                        {slot.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium self-end sm:self-center shrink-0">
                    Stage {idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Programs */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-slate-900">
              Explore Adjacent Age Programs
            </h3>
            <Link
              to="/programs"
              className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1"
            >
              <span>View all programs</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPrograms.map((op) => (
              <div
                key={op.id}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">{op.ageGroup}</span>
                  <span className="text-slate-400">{op.ratio}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">{op.title}</h4>
                <p className="text-xs text-slate-600 line-clamp-2">
                  {op.overview}
                </p>
                <Link
                  to={`/programs/${op.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800"
                >
                  <span>Learn more</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Ad Section */}
      <AdPlaceholder
        title="Oxford Early Years Phonics Flashcard Starter Kits"
        subtitle="Recommended home discovery package matching MountainHeights curriculum milestones."
        category="Learning Resource Partner"
      />
    </div>
  );
};
