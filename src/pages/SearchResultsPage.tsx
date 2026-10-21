import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { Search, ArrowRight, BookOpen, Sparkles, Bell, HelpCircle, X } from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { useApp } from '../context/AppContext';
import { PROGRAMS, FACILITIES, FAQS, NOTICES } from '../data/schoolData';

export const SearchResultsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [filterType, setFilterType] = useState<'all' | 'program' | 'facility' | 'notice' | 'faq'>('all');

  const { addRecentSearch } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      addRecentSearch(query);
      setSearchParams({ q: query.trim() });
    }
  };

  const cleanQuery = query.trim().toLowerCase();

  const matchedPrograms = cleanQuery
    ? PROGRAMS.filter(
        (p) =>
          p.title.toLowerCase().includes(cleanQuery) ||
          p.overview.toLowerCase().includes(cleanQuery) ||
          p.tagline.toLowerCase().includes(cleanQuery) ||
          p.ageGroup.toLowerCase().includes(cleanQuery)
      ).map((p) => ({
        type: 'program' as const,
        id: p.id,
        title: p.title,
        subtitle: `Age: ${p.ageGroup} · ${p.tagline}`,
        description: p.overview,
        link: `/programs/${p.slug}`,
      }))
    : [];

  const matchedFacilities = cleanQuery
    ? FACILITIES.filter(
        (f) =>
          f.name.toLowerCase().includes(cleanQuery) ||
          f.description.toLowerCase().includes(cleanQuery) ||
          f.safetyStandard.toLowerCase().includes(cleanQuery)
      ).map((f) => ({
        type: 'facility' as const,
        id: f.id,
        title: f.name,
        subtitle: `Category: ${f.category} · Safety Standard Certified`,
        description: f.description,
        link: '/facilities',
      }))
    : [];

  const matchedNotices = cleanQuery
    ? NOTICES.filter(
        (n) =>
          n.title.toLowerCase().includes(cleanQuery) ||
          n.summary.toLowerCase().includes(cleanQuery) ||
          n.details.toLowerCase().includes(cleanQuery)
      ).map((n) => ({
        type: 'notice' as const,
        id: n.id,
        title: n.title,
        subtitle: `${n.date} · Circular Category: ${n.category}`,
        description: n.summary,
        link: '/notices',
      }))
    : [];

  const matchedFaqs = cleanQuery
    ? FAQS.filter(
        (faq) =>
          faq.question.toLowerCase().includes(cleanQuery) ||
          faq.answer.toLowerCase().includes(cleanQuery)
      ).map((faq) => ({
        type: 'faq' as const,
        id: faq.id,
        title: faq.question,
        subtitle: `FAQ Category: ${faq.category}`,
        description: faq.answer,
        link: '/faq',
      }))
    : [];

  const allResults = [
    ...matchedPrograms,
    ...matchedFacilities,
    ...matchedNotices,
    ...matchedFaqs,
  ];

  const filteredResults = allResults.filter((item) => {
    if (filterType === 'all') return true;
    return item.type === filterType;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="bg-gradient-to-b from-amber-50/70 via-white to-slate-50 pt-12 pb-14 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Search MountainHeights Archives
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Find programs, safety guidelines, circulars, fees, and campus tour info.
          </p>

          <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto relative pt-2">
            <Search className="h-5 w-5 text-slate-400 absolute left-4 top-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-11 pr-24 py-3 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-white shadow-xs"
            />
            <button
              type="submit"
              className="absolute right-2 top-3 px-4 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
            >
              Search
            </button>
          </form>

          {/* Type filters */}
          {cleanQuery && (
            <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  filterType === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 border border-slate-200'
                }`}
              >
                All Results ({allResults.length})
              </button>
              <button
                onClick={() => setFilterType('program')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  filterType === 'program'
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 border border-slate-200'
                }`}
              >
                Programs ({matchedPrograms.length})
              </button>
              <button
                onClick={() => setFilterType('facility')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  filterType === 'facility'
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 border border-slate-200'
                }`}
              >
                Facilities ({matchedFacilities.length})
              </button>
              <button
                onClick={() => setFilterType('notice')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  filterType === 'notice'
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 border border-slate-200'
                }`}
              >
                Notices ({matchedNotices.length})
              </button>
              <button
                onClick={() => setFilterType('faq')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  filterType === 'faq'
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 border border-slate-200'
                }`}
              >
                FAQs ({matchedFaqs.length})
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Results Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {!cleanQuery ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500 space-y-4">
              <Search className="h-10 w-10 text-slate-300 mx-auto" />
              <p className="text-sm">Type a search term above to browse all academy archives.</p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {['Splash Pool', 'Nursery', 'Admission', 'Fees', 'Shalimar Bagh', 'Daycare'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => {
                        setQuery(term);
                        setSearchParams({ q: term });
                      }}
                      className="px-3 py-1.5 rounded-md bg-slate-100 text-xs text-slate-700 hover:bg-slate-200"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500 space-y-3">
              <Search className="h-10 w-10 text-slate-300 mx-auto" />
              <p className="text-sm">
                No matching results found for &ldquo;{query}&rdquo;.
              </p>
              <p className="text-xs text-slate-400">
                Try searching for broad terms such as &ldquo;program&rdquo;, &ldquo;pool&rdquo;, &ldquo;admission&rdquo;, or &ldquo;fees&rdquo;.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-xs text-slate-500 font-medium">
                Found {filteredResults.length} matching result{filteredResults.length === 1 ? '' : 's'} for &ldquo;{query}&rdquo;
              </div>

              {filteredResults.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="block p-5 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-amber-400 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold uppercase tracking-wider text-amber-800 px-2 py-0.5 rounded bg-amber-50">
                          {item.type}
                        </span>
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-500">{item.subtitle}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mt-1">
                        {item.description}
                      </p>
                    </div>

                    <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Compact Ad Section */}
      <AdPlaceholder
        title="Scholastic Early Learners Encyclopedia &amp; Activity Box"
        subtitle="Specially formatted discovery boxes for toddlers and preschoolers."
        category="Reading Partner"
      />
    </div>
  );
};
