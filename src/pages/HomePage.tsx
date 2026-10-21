import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Sparkles,
  ShieldCheck,
  Heart,
  Users,
  Compass,
  Smile,
  BookOpen,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Phone,
  Droplets,
  Star,
  MapPin,
  Clock,
} from 'lucide-react';
import { VideoPlaceholder } from '../components/VideoPlaceholder';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { SCHOOL_INFO, PROGRAMS, FACILITIES, TESTIMONIALS, NOTICES } from '../data/schoolData';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/70 via-white to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/70">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none opacity-40">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline & Action */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100/80 text-amber-900 text-xs font-semibold tracking-wide border border-amber-200">
                <Sparkles className="h-3.5 w-3.5 text-amber-700" />
                <span>Admissions Open for Session 2026&ndash;2027</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Where Young Minds <br className="hidden sm:inline" />
                <span className="text-amber-600">Blossom With Wonder</span> &amp; Joy
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Welcome to <strong className="text-slate-900 font-semibold">{SCHOOL_INFO.fullName}</strong>.
                Established in 2005 (formerly known as Phulwari Heights School), we provide a joyful, child-centered environment blending Montessori exploration, early literacy, and caring guidance.
              </p>

              {/* Key Highlights Bullet points */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>10:1 Student&ndash;Teacher Ratio</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>100% CCTV &amp; Guarded Gates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Splash Pool &amp; Soft Ball Arena</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Nutritious In-House Meals</span>
                </div>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/admissions"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-amber-600 shadow-md transition-all active:scale-95"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/tour"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-800 font-semibold text-sm border border-slate-300 hover:bg-slate-50 shadow-xs transition-all active:scale-95"
                >
                  <Calendar className="h-4 w-4 text-amber-600" />
                  <span>Schedule Campus Tour</span>
                </Link>

                <a
                  href="tel:+919250057531"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
                >
                  <Phone className="h-4 w-4 text-slate-500" />
                  <span>+91 925 005 7531</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Visual Card Stage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl bg-white p-6 shadow-xl border border-slate-200/80">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white font-bold text-lg">
                      MH
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm sm:text-base">
                        Shalimar Campus
                      </div>
                      <div className="text-xs text-slate-500">
                        Ages 6 Months &ndash; 6 Years
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Open for Visits
                  </span>
                </div>

                {/* Simulated campus feature collage */}
                <div className="grid grid-cols-2 gap-3 py-4">
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-100 space-y-1">
                    <div className="flex items-center justify-between">
                      <BookOpen className="h-5 w-5 text-amber-700" />
                      <span className="text-xs font-bold text-amber-800">10:1</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900">Small Batches</div>
                    <div className="text-xs text-slate-600">Personalized attention for every child</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-100 space-y-1">
                    <div className="flex items-center justify-between">
                      <Droplets className="h-5 w-5 text-sky-700" />
                      <span className="text-xs font-bold text-sky-800">Sensory</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900">Splash Pool</div>
                    <div className="text-xs text-slate-600">Clean, shallow water fun &amp; swimming confidence</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-100 space-y-1">
                    <div className="flex items-center justify-between">
                      <ShieldCheck className="h-5 w-5 text-emerald-700" />
                      <span className="text-xs font-bold text-emerald-800">100%</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900">CCTV Safety</div>
                    <div className="text-xs text-slate-600">Secure perimeter &amp; police-verified staff</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-100 space-y-1">
                    <div className="flex items-center justify-between">
                      <Smile className="h-5 w-5 text-purple-700" />
                      <span className="text-xs font-bold text-purple-800">Full Care</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900">Daycare Wing</div>
                    <div className="text-xs text-slate-600">Warm meals, nap suites &amp; evening enrichment</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Accreditation: Early Years Foundation</span>
                  <Link
                    to="/about"
                    className="text-amber-700 hover:text-amber-800 font-semibold inline-flex items-center gap-1"
                  >
                    <span>Read Our Story</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                20+
              </div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                Years of Legacy (Since 2005)
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 font-mono">
                10:1
              </div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                Student-to-Teacher Ratio
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                1,400+
              </div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                Joyful Alumni in Top Schools
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-mono">
                100%
              </div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                Child Safety Compliance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Educational Philosophy & Pillars */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
              The MountainHeights Pedagogy
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              A Four-Pillar Foundation for Early Childhood
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We cultivate the whole child. Our experiential curriculum blends sensorial discovery with early cognitive problem-solving, emotional resilience, and physical vitality.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-800 flex items-center justify-center font-bold">
                <Sparkles className="h-5 w-5 text-amber-700" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Inquiry-Based Learning</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Children explore open-ended questions through science tables, magnifying glasses, and sensory bins that transform curiosity into analytical confidence.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-sky-500/10 text-sky-800 flex items-center justify-center font-bold">
                <BookOpen className="h-5 w-5 text-sky-700" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Synthetic Phonics &amp; Math</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Jolly Phonics multi-sensory techniques build natural reading fluency, while tactile Montessori beads make numbers intuitive and enjoyable.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-800 flex items-center justify-center font-bold">
                <Heart className="h-5 w-5 text-emerald-700" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Empathy &amp; Social Harmony</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Daily friendship circles, collaborative art, and gentle problem-solving nurture respectful communication and genuine care for fellow classmates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-800 flex items-center justify-center font-bold">
                <Compass className="h-5 w-5 text-purple-700" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Motor &amp; Sensory Agility</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From water play in our splash pool to obstacle course jumping, children develop body awareness, muscular coordination, and healthy habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Programs */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Academic Programs
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Designed for Every Developmental Milestone
              </h2>
            </div>
            <Link
              to="/programs"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-800"
            >
              <span>Explore all programs</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-200 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      Age: {prog.ageGroup}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Ratio {prog.ratio}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {prog.title}
                    </h3>
                    <p className="mt-1 text-xs text-amber-700 font-medium">
                      {prog.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3">
                    {prog.overview}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Curriculum Focus
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {prog.curriculumPillars.slice(0, 3).map((pillar, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-amber-500 font-bold">·</span>
                          <span>{pillar}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-500">
                    <span className="font-semibold text-slate-900">₹{prog.termFee.toLocaleString()}</span> / term
                  </div>
                  <Link
                    to={`/programs/${prog.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 group-hover:text-amber-700 transition-colors"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Campus Video Spotlight (Strictly adhering to YouTube embed requirement) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Virtual Walkthrough
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Experience the Energy of MountainHeights
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Take a peek inside our vibrant classrooms, peaceful nap dormitories, splash pool, and discovery centers.
            </p>
          </div>

          {/* Reusable VideoPlaceholder reproducing 16:9 aspect ratio */}
          <VideoPlaceholder
            title="A Day in the Life at MountainHeights (Class of 2026)"
            caption="Watch our learners discover phonics, splash pool fun, and creative arts in our Shalimar Bagh campus."
            duration="03:45"
          />

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/tour"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition-colors"
            >
              <Calendar className="h-4 w-4 text-amber-400" />
              <span>Book an In-Person Guided Tour</span>
            </Link>
            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm hover:bg-slate-200 transition-colors"
            >
              <span>Explore All Facilities</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Campus Infrastructure & Facilities Spotlight */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Purpose-Built Infrastructure
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Safe, Cheerful &amp; Stimulating Facilities
            </h2>
            <p className="text-sm text-slate-600">
              Every square foot is engineered specifically for toddler safety, high ventilation, and joyful hands-on play.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES.slice(0, 4).map((fac) => (
              <div
                key={fac.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700">
                    {fac.category}
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{fac.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {fac.description}
                </p>
                <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Safety standard:</span> {fac.safetyStandard}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/facilities"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-700 hover:text-amber-800"
            >
              <span>View all 8 campus facilities &amp; transport routes</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Parent Voices & Real Testimonials */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Parent Reviews
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Trusted by Over 1,200 Delhi Families
            </h2>
            <p className="text-sm text-slate-600">
              Here is what parents say about our warm educators, healthy environment, and child development outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;{test.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60">
                  <div className="text-sm font-bold text-slate-900">{test.parentName}</div>
                  <div className="text-xs text-slate-500">
                    Parent of {test.childName} · {test.program}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Upcoming Events & Circulars */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                School Circulars
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Latest Announcements &amp; Notices
              </h2>
            </div>
            <Link
              to="/notices"
              className="text-xs sm:text-sm font-semibold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1"
            >
              <span>View full notice board</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NOTICES.slice(0, 3).map((notice) => (
              <div
                key={notice.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-amber-700 px-2 py-0.5 rounded bg-amber-50">
                      {notice.category}
                    </span>
                    <span className="text-slate-400">{notice.date}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {notice.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {notice.summary}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    {notice.isImportant ? 'Urgent Circular' : 'General Notice'}
                  </span>
                  <Link
                    to="/notices"
                    className="text-xs font-semibold text-amber-700 hover:text-amber-800"
                  >
                    Read Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Compact Advertisement Section (as required for every relevant page) */}
      <AdPlaceholder
        title="Oxford Early Years Reading Carnival &amp; Wellness Clinic"
        subtitle="MountainHeights families enjoy complimentary developmental book packages and 15% partner savings."
        category="Campus Partner Spotlight"
      />

      {/* 9. Final Call to Action Strip */}
      <section className="bg-slate-900 text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Give Your Child an Inspiring Beginning?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Schedule a personalized campus walkthrough, meet our passionate educators, and experience how MountainHeights nurtures curiosity.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/admissions"
              className="px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-md"
            >
              Start Admission Registration
            </Link>
            <Link
              to="/tour"
              className="px-6 py-3 rounded-xl bg-slate-800 text-white font-semibold text-sm border border-slate-700 hover:bg-slate-700 transition-colors"
            >
              Book Campus Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
