import React from 'react';
import { Play, Film } from 'lucide-react';

interface VideoPlaceholderProps {
  title?: string;
  caption?: string;
  duration?: string;
  className?: string;
}

export const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({
  title = "A Day in the Life at MountainHeights: Play, Wonder & Growth",
  caption = "Tour our Shalimar campus, smart classrooms, splash pool & organic play zones.",
  duration = "03:45",
  className = "",
}) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-md ${className}`}>
      {/* 16:9 Aspect Ratio Box */}
      <div className="relative aspect-video w-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white">
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"
          aria-hidden="true"
        />

        {/* Video Placeholder Content */}
        <div className="relative z-10 flex flex-col items-center max-w-md mx-auto">
          {/* Mock Play Badge */}
          <div className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg transition-transform hover:scale-105 cursor-pointer">
            <Play className="h-7 w-7 fill-white translate-x-0.5 text-white" />
            <span className="sr-only">Play Video Tour</span>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-300">
            <Film className="h-3.5 w-3.5" />
            <span>Virtual Campus Spotlight</span>
            <span>·</span>
            <span className="text-slate-300">{duration}</span>
          </div>

          <h3 className="mt-2 text-base sm:text-lg font-bold text-white tracking-tight">
            {title}
          </h3>

          <p className="mt-1 text-xs sm:text-sm text-slate-300 line-clamp-2">
            {caption}
          </p>

          <div className="mt-4 inline-flex items-center px-2.5 py-1 rounded-md bg-white/10 text-[11px] text-slate-300 border border-white/10">
            Video layout reproduced without external embeds
          </div>
        </div>

        {/* Duration badge at bottom-right */}
        <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/60 backdrop-blur-xs text-[11px] font-mono text-slate-200">
          HD · {duration}
        </div>
      </div>
    </div>
  );
};
