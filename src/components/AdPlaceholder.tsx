import React from 'react';
import { ExternalLink, Tag } from 'lucide-react';

interface AdPlaceholderProps {
  title?: string;
  subtitle?: string;
  sponsorName?: string;
  category?: string;
  className?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({
  title = "Little Readers Book Fair & Pediatric Health Fair 2026",
  subtitle = "Special 20% privilege for MountainHeights enrolled families on Oxford early reading collections and cognitive toys.",
  sponsorName = "EarlyYears Community Partner Network",
  category = "Educational Partner Spotlight",
  className = "",
}) => {
  return (
    <aside
      aria-label="Sponsored Educational Partner Banner"
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 my-10 ${className}`}
    >
      <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-gradient-to-r from-amber-50/60 via-slate-50 to-sky-50/50 p-4 sm:p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
              <Tag className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <span>{category}</span>
                <span>·</span>
                <span className="text-slate-400">Sponsored Notice</span>
              </div>
              <h4 className="mt-1 text-sm sm:text-base font-semibold text-slate-900">
                {title}
              </h4>
              <p className="mt-0.5 text-xs sm:text-sm text-slate-600 max-w-2xl">
                {subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
            <span className="text-xs text-slate-400 hidden md:inline">
              Via {sponsorName}
            </span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer select-none">
              <span>View Offers</span>
              <ExternalLink className="h-3 w-3 text-slate-400" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
