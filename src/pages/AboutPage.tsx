import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Heart,
  Award,
  Users,
  Compass,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { SCHOOL_INFO } from '../data/schoolData';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-amber-50/80 via-white to-slate-50 pt-12 pb-16 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5 text-amber-700" />
            <span>Founded in 2005 · Over 20 Years of Nurturing Childhood</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Legacy of Joyful Learning &amp; Discovery
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover the philosophy, educators, and standards that make <strong className="text-slate-900">{SCHOOL_INFO.name}</strong> a premier early childhood sanctuary for curious little learners.
          </p>
        </div>
      </section>

      {/* Story & Evolution */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Our Genesis
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Two Decades of Child-Centered Excellence in Shalimar Bagh
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Founded in 2005 as <span className="font-semibold text-slate-900">Phulwari Heights School</span>, our academy began with a single vision: to replace high-pressure rote learning with open-ended, sensory-rich discovery. 
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Over the past twenty years, our campus has welcomed more than 1,400 toddlers and young scholars, guiding their first words, mathematical curiosity, stage confidence, and empathetic interactions. Under our new brand identity, <span className="font-semibold text-slate-900">MountainHeights</span>, we combine timeless Montessori wisdom with modern e-learning tools, child psychology, and safe infrastructure.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-extrabold text-amber-600 font-mono">1,400+</div>
                  <div className="text-xs text-slate-600 mt-0.5">Alumni thriving in top primary schools</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-extrabold text-emerald-600 font-mono">10:1</div>
                  <div className="text-xs text-slate-600 mt-0.5">Intimate student-educator ratio</div>
                </div>
              </div>
            </div>

            {/* Quote / Director's Desk */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-lg border border-amber-400/30">
                    MH
                  </div>
                  <div>
                    <div className="font-bold text-white text-base">Director&rsquo;s Message</div>
                    <div className="text-xs text-amber-300">Early Childhood Advisory Council</div>
                  </div>
                </div>

                <blockquote className="text-xs sm:text-sm text-slate-300 italic leading-relaxed pt-2 border-t border-slate-700/80">
                  &ldquo;A child&rsquo;s brain develops faster between birth and age six than at any other point in life. When we foster their curiosity with warmth, respect their natural pace, and give them rich materials to manipulate, learning ceases to be a chore—it becomes their favorite daily adventure.&rdquo;
                </blockquote>

                <div className="pt-2 text-xs text-slate-400">
                  Dr. Sunita K. Verma · Founder &amp; Academic Director
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Guiding Principles
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Mission, Vision &amp; Values
            </h2>
            <p className="text-sm text-slate-600">
              Every song sung, story read, and puzzle solved at MountainHeights is anchored in our core ethos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To create a safe, stimulating, and affectionate educational sanctuary where every child feels cherished, capable, and excited to explore the world around them.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To be the benchmark of early years development across the capital region, nurturing lifelong learners celebrated for their emotional maturity, creativity, and empathy.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Core Values</h3>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Unconditional Kindness &amp; Inclusivity</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Curiosity Over Performance Rote</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Safety &amp; Impeccable Hygiene</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Transparent Parent Collaboration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Standards & Safety Protocols */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Staff Credentials
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Passionate, Certified &amp; Trained Early Educators
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                At MountainHeights, our educators are not merely supervisors—they are trained child developmental facilitators. Every teacher holds recognized certifications in Early Childhood Care and Education (ECCE) or Nursery Teacher Training (NTT).
              </p>

              <div className="space-y-2.5 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>100% Police Verified:</strong> Strict background checks and reference verifications for all staff members, drivers, and attendants.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Pediatric First-Aid Certified:</strong> Regular CPR, emergency response, and choking prevention drills.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Continuous Pedagogical Workshops:</strong> Ongoing training with child psychologists on phonetics, behavioral development, and sensory integration.</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-4">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
                <Award className="h-5 w-5 text-amber-700" />
                <span>Awards &amp; Recognitions</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="p-3 bg-white rounded-xl border border-amber-100">
                  <div className="font-bold text-slate-900">Excellence in Early Childhood Education (North Delhi)</div>
                  <div className="text-slate-500 text-xs">Educational Heritage Forum · 2024</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-amber-100">
                  <div className="font-bold text-slate-900">Best Play-Based &amp; Sensory Infrastructure</div>
                  <div className="text-slate-500 text-xs">Pre-Primary Development Summit · 2023</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-amber-100">
                  <div className="font-bold text-slate-900">Clean &amp; Safe Campus Green Star Certification</div>
                  <div className="text-slate-500 text-xs">Urban School Hygiene Council · 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Ad Section */}
      <AdPlaceholder
        title="Little Scholar Developmental Assessments"
        subtitle="Exclusive pediatric developmental screening clinics for MountainHeights families."
        category="Institutional Partner"
      />

      {/* Tour CTA */}
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="text-2xl font-bold">Come Experience the Warmth of Our Campus</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            We welcome prospective families to tour our classrooms, meet teachers, and observe a live morning circle.
          </p>
          <div className="pt-2">
            <Link
              to="/tour"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-md"
            >
              <Calendar className="h-4 w-4" />
              <span>Schedule Your Campus Visit</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
