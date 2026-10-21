import React, { useState } from 'react';
import { Sparkles, Calendar, X, Film, ZoomIn, ArrowRight } from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { VideoPlaceholder } from '../components/VideoPlaceholder';
import { GALLERY_ITEMS, GalleryItem } from '../data/schoolData';

export const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'events' | 'campus' | 'learning' | 'activities'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filtered = GALLERY_ITEMS.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="bg-gradient-to-b from-amber-50/70 via-white to-slate-50 pt-12 pb-16 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5 text-amber-700" />
            <span>Memories &amp; Moments of Childhood Wonder</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Campus Life &amp; Events Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Take a visual tour through celebrations, science experiments, splash pool days, and joyful classroom achievements at MountainHeights.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                filter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              All Moments ({GALLERY_ITEMS.length})
            </button>
            <button
              onClick={() => setFilter('events')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                filter === 'events'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Festivals &amp; Annual Day
            </button>
            <button
              onClick={() => setFilter('activities')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                filter === 'activities'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Splash &amp; Sand Play
            </button>
            <button
              onClick={() => setFilter('learning')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                filter === 'learning'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Classroom Discovery
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Showcase Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-xl transition-all duration-300"
              >
                {/* Visual Representation Area */}
                <div
                  className={`aspect-4/3 w-full bg-gradient-to-tr ${item.gradient} p-6 flex flex-col justify-between text-white relative overflow-hidden`}
                >
                  <div className="flex justify-between items-start">
                    <span className="px-2.5 py-1 rounded-md bg-black/25 backdrop-blur-xs text-[11px] font-semibold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-medium text-white/80">
                      {item.date}
                    </span>
                    <h3 className="text-base font-bold text-white tracking-tight mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-3 text-[11px] font-semibold text-amber-700 group-hover:underline flex items-center gap-1">
                    <span>View photo details</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Day Highlights Video Placeholder */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Campus Showcase
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Annual Day &amp; Cultural Extravaganza
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              Every child takes the stage to sing, dance, and express themselves before proud parents and grandparents.
            </p>
          </div>

          <VideoPlaceholder
            title="MountainHeights Annual Concert: Colors of Imagination"
            caption="Highlights from our annual stage celebration featuring choir, theatrics, and taekwondo."
            duration="05:12"
          />
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="w-full max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`aspect-16/9 w-full bg-gradient-to-tr ${selectedItem.gradient} p-8 flex flex-col justify-between text-white relative`}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>

              <span className="px-3 py-1 rounded-md bg-black/30 backdrop-blur-xs text-xs font-bold uppercase tracking-wider self-start">
                {selectedItem.category}
              </span>

              <div>
                <span className="text-xs text-white/80">{selectedItem.date}</span>
                <h3 className="text-xl font-extrabold text-white">
                  {selectedItem.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedItem.description}
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Shalimar Bagh Campus Archive</span>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-1.5 rounded-lg bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compact Ad Section */}
      <AdPlaceholder
        title="Family Studio Photography: Graduation Portraits"
        subtitle="Capture timeless memories with our campus portrait partners at special academic rates."
        category="Photography Partner"
      />
    </div>
  );
};
