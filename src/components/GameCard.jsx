import React, { useState } from 'react';
import { Play, Heart, Gamepad2, Star } from 'lucide-react';

export const GameCard = ({
  game,
  onPlay,
  isFavorite,
  onToggleFavorite,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={() => onPlay(game)}
      className="group relative bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 flex flex-col"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
        {!imgError ? (
          <img
            src={game.thumbnail}
            alt={game.title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 text-slate-500">
            <Gamepad2 className="w-10 h-10 mb-2 text-slate-600" />
            <span className="text-xs font-medium text-slate-400">{game.title}</span>
          </div>
        )}

        {/* Gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Favorite button */}
        <button
          onClick={(e) => onToggleFavorite(game.id, e)}
          className={`absolute top-2.5 right-2.5 p-2 rounded-lg backdrop-blur-md transition-all cursor-pointer ${
            isFavorite
              ? 'bg-rose-500/20 text-rose-400 hover:bg-rose-500/30'
              : 'bg-slate-950/40 text-slate-400 hover:text-white hover:bg-slate-950/70'
          }`}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>

        {/* Hover Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/30 transform group-hover:scale-105 transition-transform">
            <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
          </div>
        </div>
      </div>

      {/* Card Info Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h3 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors line-clamp-1">
              {game.title}
            </h3>
            <span className="flex items-center gap-1 text-xs text-amber-400 shrink-0 font-medium font-mono tabular-nums">
              <Star className="w-3 h-3 fill-amber-400" />
              {Number(game.rating).toFixed(1)}
            </span>
          </div>

          <p className="text-xs text-slate-400 line-clamp-2 mb-3 leading-relaxed">
            {game.description}
          </p>
        </div>

        {/* Unboxed Metadata (Zero-pill discipline) */}
        <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
          <span className="text-slate-300 font-medium">{game.category}</span>
          <span className="font-mono tabular-nums">{game.plays.toLocaleString()} plays</span>
        </div>
      </div>
    </div>
  );
};
