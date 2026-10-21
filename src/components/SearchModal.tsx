import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, Sparkles, HelpCircle, Bell, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PROGRAMS, FACILITIES, FAQS, NOTICES } from '../data/schoolData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { recentSearches, addRecentSearch, clearRecentSearches } = useApp();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle modal
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.trim().toLowerCase();

  const matchedPrograms = cleanQuery
    ? PROGRAMS.filter(
        (p) =>
          p.title.toLowerCase().includes(cleanQuery) ||
          p.overview.toLowerCase().includes(cleanQuery) ||
          p.ageGroup.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchedFacilities = cleanQuery
    ? FACILITIES.filter(
        (f) =>
          f.name.toLowerCase().includes(cleanQuery) ||
          f.description.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchedFaqs = cleanQuery
    ? FAQS.filter(
        (faq) =>
          faq.question.toLowerCase().includes(cleanQuery) ||
          faq.answer.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchedNotices = cleanQuery
    ? NOTICES.filter(
        (n) =>
          n.title.toLowerCase().includes(cleanQuery) ||
          n.summary.toLowerCase().includes(cleanQuery)
      )
    : [];

  const totalResults =
    matchedPrograms.length + matchedFacilities.length + matchedFaqs.length + matchedNotices.length;

  const handleSelect = (url: string, searchKey?: string) => {
    if (searchKey) {
      addRecentSearch(searchKey);
    }
    onClose();
    navigate(url);
  };

  const handleFullSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (cleanQuery) {
      addRecentSearch(query);
      onClose();
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search MountainHeights"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleFullSearch} className="relative border-b border-slate-200 flex items-center px-4">
          <Search className="h-5 w-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programs, admissions, facilities, circulars..."
            autoFocus
            className="w-full py-4 pl-3 pr-10 text-base text-slate-900 placeholder:text-slate-400 focus:outline-hidden bg-transparent"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600"
              aria-label="Clear search input"
            >
              <X className="h-4 w-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[11px] font-mono text-slate-400 bg-slate-100 border border-slate-200 rounded">
              ESC
            </kbd>
          )}
        </form>

        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!cleanQuery ? (
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                <span>Recent Searches</span>
                {recentSearches.length > 0 && (
                  <button
                    onClick={clearRecentSearches}
                    className="text-xs text-slate-400 hover:text-slate-600"
                  >
                    Clear All
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setQuery(item);
                    }}
                    className="px-3 py-1 text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-500 mb-2">Quick Navigation</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <button
                    onClick={() => handleSelect('/admissions', 'Admissions')}
                    className="flex items-center gap-2 p-2 rounded-lg text-slate-700 hover:bg-amber-50 text-left transition-colors"
                  >
                    <BookOpen className="h-4 w-4 text-amber-600 shrink-0" />
                    <span>Admissions & Fees</span>
                  </button>
                  <button
                    onClick={() => handleSelect('/facilities', 'Facilities')}
                    className="flex items-center gap-2 p-2 rounded-lg text-slate-700 hover:bg-sky-50 text-left transition-colors"
                  >
                    <Sparkles className="h-4 w-4 text-sky-600 shrink-0" />
                    <span>Smart Campus & Pools</span>
                  </button>
                  <button
                    onClick={() => handleSelect('/tour', 'Book Tour')}
                    className="flex items-center gap-2 p-2 rounded-lg text-slate-700 hover:bg-emerald-50 text-left transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Schedule Campus Tour</span>
                  </button>
                  <button
                    onClick={() => handleSelect('/faq', 'FAQ')}
                    className="flex items-center gap-2 p-2 rounded-lg text-slate-700 hover:bg-purple-50 text-left transition-colors"
                  >
                    <HelpCircle className="h-4 w-4 text-purple-600 shrink-0" />
                    <span>Parent FAQs</span>
                  </button>
                </div>
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-8 text-center text-slate-500">
              <p className="text-sm">No direct results found for &ldquo;{query}&rdquo;</p>
              <button
                onClick={handleFullSearch}
                className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-amber-800 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
              >
                <span>Search all archives</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {matchedPrograms.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Programs ({matchedPrograms.length})
                  </h4>
                  <div className="space-y-1">
                    {matchedPrograms.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => handleSelect(`/programs/${p.slug}`, p.title)}
                        className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-left transition-colors group"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-900 group-hover:text-amber-700">
                            {p.title}
                          </div>
                          <div className="text-xs text-slate-500">
                            Age: {p.ageGroup} · {p.tagline}
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {matchedFacilities.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Facilities ({matchedFacilities.length})
                  </h4>
                  <div className="space-y-1">
                    {matchedFacilities.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => handleSelect('/facilities', f.name)}
                        className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-left transition-colors group"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-900 group-hover:text-sky-700">
                            {f.name}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">
                            {f.description}
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-slate-600 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {matchedNotices.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Announcements & Notices ({matchedNotices.length})
                  </h4>
                  <div className="space-y-1">
                    {matchedNotices.map((n) => (
                      <button
                        key={n.id}
                        onClick={() => handleSelect('/notices', n.title)}
                        className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-left transition-colors group"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 flex items-center gap-2">
                            <Bell className="h-3.5 w-3.5 text-emerald-600" />
                            <span>{n.title}</span>
                          </div>
                          <div className="text-xs text-slate-500">
                            {n.date} · {n.category}
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-slate-600 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {matchedFaqs.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Frequently Asked Questions ({matchedFaqs.length})
                  </h4>
                  <div className="space-y-1">
                    {matchedFaqs.map((faq) => (
                      <button
                        key={faq.id}
                        onClick={() => handleSelect('/faq', faq.question)}
                        className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 text-left transition-colors group"
                      >
                        <div className="max-w-xl">
                          <div className="text-sm font-medium text-slate-900">
                            {faq.question}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">
                            {faq.answer}
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-slate-600 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {cleanQuery && (
          <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Press Enter to view complete results page</span>
            <button
              onClick={handleFullSearch}
              className="text-amber-700 font-semibold hover:underline"
            >
              See all results ({totalResults}) &rarr;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
