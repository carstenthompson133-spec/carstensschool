import React from 'react';
import { ShieldAlert, Plus, Code2 } from 'lucide-react';

export const TopNav = ({
  onHomeClick,
  onFavoritesClick,
  onFeaturedClick,
  onAddGameClick,
  onJsonClick,
  onCloakClick,
  activeTab,
  favoritesCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark (Single text element, no badges) */}
        <button
          onClick={onHomeClick}
          className="text-lg font-bold tracking-tight text-white hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
        >
          Nexus Arcade
        </button>

        {/* Zone 2: 4–5 single-line clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={onHomeClick}
            className={`cursor-pointer hover:text-white transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
              activeTab === 'all' ? 'text-emerald-400 font-semibold' : ''
            }`}
          >
            All Games
          </button>
          
          <button
            onClick={onFeaturedClick}
            className={`cursor-pointer hover:text-white transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
              activeTab === 'featured' ? 'text-emerald-400 font-semibold' : ''
            }`}
          >
            Featured
          </button>

          <button
            onClick={onFavoritesClick}
            className={`cursor-pointer hover:text-white transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
              activeTab === 'favorites' ? 'text-emerald-400 font-semibold' : ''
            }`}
          >
            Favorites {favoritesCount > 0 && `(${favoritesCount})`}
          </button>

          <button
            onClick={onJsonClick}
            className="cursor-pointer hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Code2 className="w-4 h-4 text-slate-400" />
            <span>JSON Database</span>
          </button>

          <button
            onClick={onCloakClick}
            className="cursor-pointer hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <ShieldAlert className="w-4 h-4 text-slate-400" />
            <span>Stealth Cloak</span>
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onAddGameClick}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm shadow-emerald-500/20"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Iframe Game</span>
          </button>
        </div>

      </div>
    </header>
  );
};
