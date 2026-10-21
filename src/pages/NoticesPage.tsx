import React, { useState } from 'react';
import {
  Bell,
  Calendar,
  Search,
  Bookmark,
  BookmarkCheck,
  Download,
  Sparkles,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { useApp } from '../context/AppContext';
import { NOTICES, Notice } from '../data/schoolData';

export const NoticesPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showSavedOnly, setShowSavedOnly] = useState<boolean>(false);

  const { savedNoticeIds, toggleSaveNotice, isNoticeSaved, showToast } = useApp();

  const handleDownload = (notice: Notice) => {
    showToast(`Downloading: ${notice.downloadName || notice.title + '.pdf'}`, 'success');
  };

  const filtered = NOTICES.filter((notice) => {
    if (showSavedOnly && !isNoticeSaved(notice.id)) return false;
    if (selectedCategory !== 'all' && notice.category.toLowerCase() !== selectedCategory.toLowerCase()) {
      return false;
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        notice.title.toLowerCase().includes(q) ||
        notice.summary.toLowerCase().includes(q) ||
        notice.details.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="bg-gradient-to-b from-amber-50/70 via-white to-slate-50 pt-12 pb-16 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5 text-amber-700" />
            <span>Official Communications &amp; Academic Dates</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Notice Board &amp; Parent Circulars
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Stay updated with admissions deadlines, holiday calendars, parent-teacher interaction schedules, and school events.
          </p>

          {/* Search bar & Filter */}
          <div className="max-w-xl mx-auto pt-4 flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search circulars, events, holidays..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-white"
              />
            </div>
            <button
              onClick={() => setShowSavedOnly(!showSavedOnly)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-colors flex items-center justify-center gap-1.5 ${
                showSavedOnly
                  ? 'bg-amber-600 text-white border-amber-600'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              <Bookmark className="h-4 w-4" />
              <span>Bookmarked ({savedNoticeIds.length})</span>
            </button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {['all', 'Admission', 'Event', 'Academic', 'Holiday', 'Circular'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowSavedOnly(false);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors capitalize ${
                  selectedCategory.toLowerCase() === cat.toLowerCase() && !showSavedOnly
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat === 'all' ? 'All Notices' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500 space-y-3">
              <Bell className="h-10 w-10 text-slate-300 mx-auto" />
              <p className="text-sm">No notices match your current filters.</p>
              <button
                onClick={() => {
                  setSearch('');
                  setSelectedCategory('all');
                  setShowSavedOnly(false);
                }}
                className="px-4 py-2 rounded-lg bg-amber-50 text-amber-800 text-xs font-semibold hover:bg-amber-100"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filtered.map((notice) => {
              const saved = isNoticeSaved(notice.id);
              return (
                <div
                  key={notice.id}
                  className={`p-6 rounded-2xl bg-white border transition-all duration-200 shadow-xs ${
                    notice.isImportant
                      ? 'border-amber-300/80 bg-amber-50/20'
                      : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold text-amber-800 px-2.5 py-0.5 rounded-full bg-amber-100">
                          {notice.category}
                        </span>
                        <span className="text-slate-400 font-medium">·</span>
                        <span className="text-slate-500">{notice.date}</span>
                        {notice.isImportant && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                            <ShieldAlert className="h-3 w-3" />
                            Priority Circular
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 pt-1">
                        {notice.title}
                      </h3>
                    </div>

                    <button
                      onClick={() => toggleSaveNotice(notice.id)}
                      className={`p-2 rounded-lg border transition-colors ${
                        saved
                          ? 'bg-amber-100 text-amber-800 border-amber-300'
                          : 'bg-white text-slate-400 border-slate-200 hover:text-slate-700 hover:bg-slate-50'
                      }`}
                      title={saved ? 'Remove bookmark' : 'Bookmark this notice'}
                      aria-label="Bookmark notice"
                    >
                      {saved ? (
                        <BookmarkCheck className="h-4 w-4" />
                      ) : (
                        <Bookmark className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {notice.summary}
                  </p>

                  <div className="mt-3 p-3.5 rounded-xl bg-slate-50 text-xs text-slate-600 leading-relaxed border border-slate-100">
                    {notice.details}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      MountainHeights Admin Secretariat
                    </span>
                    {notice.downloadName && (
                      <button
                        onClick={() => handleDownload(notice)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-amber-700"
                      >
                        <Download className="h-3.5 w-3.5" />
                        <span>Download Circular PDF</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Compact Ad Section */}
      <AdPlaceholder
        title="Scholastic Parent Literacy Guide 2026"
        subtitle="Free downloadable handbook for parents supporting early reading milestones at home."
        category="Educational Outreach"
      />
    </div>
  );
};
