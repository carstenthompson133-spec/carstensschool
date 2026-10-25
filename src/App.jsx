import React, { useState, useEffect, useMemo } from 'react';
import { Search, SlidersHorizontal, Gamepad2, Sparkles, Plus, Code2 } from 'lucide-react';
import { DEFAULT_GAMES } from './data/defaultGames.js';
import { TopNav } from './components/TopNav.jsx';
import { HeroBanner } from './components/HeroBanner.jsx';
import { GameCard } from './components/GameCard.jsx';
import { GamePlayer } from './components/GamePlayer.jsx';
import { AddGameModal } from './components/AddGameModal.jsx';
import { JsonViewerModal } from './components/JsonViewerModal.jsx';
import { CloakModal } from './components/CloakModal.jsx';

const CATEGORIES = [
  'All',
  'Retro',
  'Puzzle',
  'Action',
  'Arcade',
  'Sports',
  'Favorites',
];

export default function App() {
  // Initialize games from localStorage or default
  const [games, setGames] = useState(() => {
    const saved = localStorage.getItem('nexus_unblocked_games');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {}
    }
    return DEFAULT_GAMES;
  });

  // Favorites
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('nexus_favorites');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return ['cyber-snake', 'space-invaders'];
  });

  // Navigation & Filtering State
  const [selectedGame, setSelectedGame] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isJsonModalOpen, setIsJsonModalOpen] = useState(false);
  const [isCloakModalOpen, setIsCloakModalOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('nexus_unblocked_games', JSON.stringify(games));
  }, [games]);

  useEffect(() => {
    localStorage.setItem('nexus_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Keyboard shortcut for Panic cloak (Escape key or ` key)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes(e.target?.tagName)) {
        setIsCloakModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handlePlayGame = (game) => {
    // Increment play count
    setGames((prev) =>
      prev.map((g) => (g.id === game.id ? { ...g, plays: g.plays + 1 } : g))
    );
    setSelectedGame(game);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddGame = (newGame) => {
    setGames((prev) => [newGame, ...prev]);
    setSelectedGame(newGame);
  };

  const handleImportGames = (imported) => {
    setGames(imported);
  };

  const handleResetDefaults = () => {
    setGames(DEFAULT_GAMES);
    localStorage.removeItem('nexus_unblocked_games');
  };

  // Filter & Sort
  const filteredGames = useMemo(() => {
    return games
      .filter((game) => {
        // Category filter
        if (activeCategory === 'Favorites') {
          if (!favorites.includes(game.id)) return false;
        } else if (activeCategory !== 'All') {
          if (game.category.toLowerCase() !== activeCategory.toLowerCase()) return false;
        }

        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = game.title.toLowerCase().includes(q);
          const matchDesc = game.description.toLowerCase().includes(q);
          const matchCategory = game.category.toLowerCase().includes(q);
          const matchTag = game.tags?.some((t) => t.toLowerCase().includes(q));
          if (!matchTitle && !matchDesc && !matchCategory && !matchTag) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'popular') return b.plays - a.plays;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        return 0;
      });
  }, [games, activeCategory, searchQuery, sortBy, favorites]);

  const featuredGame = useMemo(() => {
    return games.find((g) => g.featured) || games[0];
  }, [games]);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Bar Contract Compliant Header */}
      <TopNav
        onHomeClick={() => {
          setSelectedGame(null);
          setActiveCategory('All');
        }}
        onFavoritesClick={() => {
          setSelectedGame(null);
          setActiveCategory('Favorites');
        }}
        onFeaturedClick={() => {
          if (featuredGame) handlePlayGame(featuredGame);
        }}
        onAddGameClick={() => setIsAddModalOpen(true)}
        onJsonClick={() => setIsJsonModalOpen(true)}
        onCloakClick={() => setIsCloakModalOpen(true)}
        activeTab={activeCategory === 'Favorites' ? 'favorites' : selectedGame ? '' : 'all'}
        favoritesCount={favorites.length}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedGame ? (
          /* Active Game View */
          <GamePlayer
            game={selectedGame}
            onBack={() => setSelectedGame(null)}
            isFavorite={favorites.includes(selectedGame.id)}
            onToggleFavorite={toggleFavorite}
            onSelectGame={handlePlayGame}
            allGames={games}
          />
        ) : (
          /* Catalog & Arcade Browser */
          <>
            {/* Featured Hero Banner */}
            {activeCategory === 'All' && !searchQuery && (
              <HeroBanner
                featuredGame={featuredGame}
                onPlay={handlePlayGame}
                totalGames={games.length}
              />
            )}

            {/* Filter & Search Toolbar */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
              
              {/* Category Segmented Buttons */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl overflow-x-auto no-scrollbar">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-emerald-500 text-slate-950 shadow-sm'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                      }`}
                    >
                      {cat}
                      {cat === 'Favorites' && favorites.length > 0 && (
                        <span className="ml-1.5 opacity-75 font-mono">({favorites.length})</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Search & Sort Controls */}
              <div className="flex items-center gap-3">
                <div className="relative flex-1 md:w-64">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search unblocked games..."
                    className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
                    >
                      ✕
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 rounded-xl px-2.5 py-1.5 shrink-0">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    aria-label="Sort games"
                    className="bg-transparent text-xs text-slate-300 font-medium focus:outline-none cursor-pointer pr-1"
                  >
                    <option value="popular" className="bg-slate-900 text-white">Most Popular</option>
                    <option value="rating" className="bg-slate-900 text-white">Top Rated</option>
                    <option value="title" className="bg-slate-900 text-white">Alphabetical (A-Z)</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Games Grid Header */}
            <div className="flex items-center justify-between text-xs text-slate-400 mb-4 px-1">
              <span className="font-medium text-slate-300">
                {activeCategory === 'Favorites'
                  ? 'Your Favorited Games'
                  : `${activeCategory} Collection`}
              </span>
              <span className="font-mono tabular-nums">
                {filteredGames.length} {filteredGames.length === 1 ? 'game' : 'games'} available
              </span>
            </div>

            {/* Game Grid */}
            {filteredGames.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filteredGames.map((game) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    onPlay={handlePlayGame}
                    isFavorite={favorites.includes(game.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 px-4 bg-slate-900/20 border border-slate-800/60 rounded-2xl">
                <Gamepad2 className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white mb-1">No games found</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto mb-4">
                  {searchQuery
                    ? `No titles matched "${searchQuery}". Try a different keyword.`
                    : activeCategory === 'Favorites'
                    ? "You haven't added any games to your favorites yet. Click the heart icon on any card!"
                    : "No games found in this category."}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('All');
                  }}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg text-white transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/60 py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-semibold">Nexus Unblocked</span>
            <span aria-hidden="true">·</span>
            <span>Client-side Iframe Arcade Portal</span>
            <span aria-hidden="true">·</span>
            <span>Press <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-300 font-mono">`</kbd> for Stealth Cloak</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsJsonModalOpen(true)}
              className="hover:text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>games.json</span>
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="hover:text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Submit Game</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AddGameModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddGame={handleAddGame}
      />

      <JsonViewerModal
        isOpen={isJsonModalOpen}
        onClose={() => setIsJsonModalOpen(false)}
        games={games}
        onImportGames={handleImportGames}
        onResetDefaults={handleResetDefaults}
      />

      <CloakModal
        isOpen={isCloakModalOpen}
        onClose={() => setIsCloakModalOpen(false)}
      />
    </div>
  );
}
