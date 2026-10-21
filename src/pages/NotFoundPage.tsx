import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, Phone, Compass, ArrowRight } from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between">
      <div className="flex-1 flex items-center justify-center p-6 text-center">
        <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="h-16 w-16 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto text-2xl font-black font-mono">
            404
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Page Not Found
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Looks like you have wandered into uncharted playground territory! The page you were looking for doesn&rsquo;t exist or has moved.
            </p>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <Link
              to="/"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Back to Academy Homepage</span>
            </Link>

            <Link
              to="/programs"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 font-semibold text-xs sm:text-sm hover:bg-amber-100 transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              <span>Explore All Academic Programs</span>
            </Link>

            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs text-slate-500 hover:text-slate-900 transition-colors"
            >
              <span>Contact Admissions Secretariat &rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      <AdPlaceholder
        title="Little Explorer Campus Map &amp; Activity Compass"
        subtitle="A helpful visual guide for families navigating early childhood decisions."
        category="Community Service"
      />
    </div>
  );
};
