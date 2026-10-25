import React from 'react';
import { Play, Sparkles, Flame } from 'lucide-react';

export const HeroBanner = ({
  featuredGame,
  onPlay,
  totalGames,
}) => {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-slate-900/60 border border-slate-800/80 mb-10 p-6 md:p-8">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left column: Text details */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-400 mb-3">
            <Flame className="w-4 h-4 text-emerald-400" />
            <span>SPOTLIGHT ARCADE TITLE</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">{totalGames} Games Stored</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance mb-3">
            {featuredGame.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 line-clamp-2 max-w-xl mb-5 leading-relaxed">
            {featuredGame.description}
          </p>

          <div className="flex items-center gap-3 text-xs text-slate-400 mb-6">
            <span>{featuredGame.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-400">★ {Number(featuredGame.rating).toFixed(1)}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{featuredGame.plays.toLocaleString()} plays</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400 font-medium">100% Client Iframe</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onPlay(featuredGame)}
              className="flex items-center gap-2.5 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-500/25 hover:scale-[1.02] cursor-pointer"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Play Now</span>
            </button>

            <div className="text-xs text-slate-400 hidden sm:block">
              Controls: <span className="text-slate-300">{featuredGame.controls}</span>
            </div>
          </div>
        </div>

        {/* Right column: Featured media preview */}
        <div className="lg:col-span-5 relative group">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-950">
            <img
              src={featuredGame.thumbnail}
              alt={featuredGame.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
              <span className="flex items-center gap-1.5 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                Featured Selection
              </span>
              <span className="font-mono text-[11px] text-slate-400">Ready to Launch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
