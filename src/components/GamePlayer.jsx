import React, { useState, useRef } from 'react';
import {
  ArrowLeft,
  Maximize2,
  RotateCw,
  ExternalLink,
  Heart,
  Copy,
  Check,
  Code,
  Info,
  Tv,
} from 'lucide-react';

export const GamePlayer = ({
  game,
  onBack,
  isFavorite,
  onToggleFavorite,
  onSelectGame,
  allGames,
}) => {
  const [isTheater, setIsTheater] = useState(false);
  const [copied, setCopied] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const iframeContainerRef = useRef(null);

  const handleFullscreen = () => {
    if (!iframeContainerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      iframeContainerRef.current.requestFullscreen().catch(() => {});
    }
  };

  const handleReload = () => {
    setIframeKey((prev) => prev + 1);
  };

  const handleOpenBlank = () => {
    const w = window.open('about:blank', '_blank');
    if (w) {
      w.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${game.title}</title>
            <style>
              body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; background: #000; }
              iframe { border: none; width: 100%; height: 100%; display: block; }
            </style>
          </head>
          <body>
            ${game.iframeCode}
          </body>
        </html>
      `);
      w.document.close();
    }
  };

  const handleCopyIframe = () => {
    navigator.clipboard.writeText(game.iframeCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const relatedGames = allGames
    .filter((g) => g.id !== game.id)
    .slice(0, 4);

  return (
    <div className="flex flex-col gap-6">
      {/* Top breadcrumb & Quick actions */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Arcade</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={(e) => onToggleFavorite(game.id, e)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
              isFavorite
                ? 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span>{isFavorite ? 'Favorited' : 'Favorite'}</span>
          </button>

          <button
            onClick={handleOpenBlank}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
            title="Open game directly in clean blank window"
          >
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">Popout Window</span>
          </button>
        </div>
      </div>

      {/* Main Iframe Player Area */}
      <div
        ref={iframeContainerRef}
        className={`relative bg-black rounded-2xl border border-slate-800 shadow-2xl overflow-hidden transition-all duration-300 ${
          isTheater ? 'w-full max-w-none' : 'w-full'
        }`}
      >
        {/* The Game Iframe */}
        <div className="relative aspect-[16/9] min-h-[440px] sm:min-h-[540px] w-full bg-slate-950 flex items-center justify-center">
          <iframe
            key={iframeKey}
            src={game.iframeUrl}
            title={game.title}
            className="w-full h-full border-0 absolute inset-0"
            allow="autoplay; fullscreen; gamepad; focus-without-user-activation *"
            sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-forms"
          />
        </div>

        {/* Player Floating Control Toolbar */}
        <div className="bg-slate-900/95 border-t border-slate-800/80 px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-base font-bold text-white tracking-tight">
              {game.title}
            </h2>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
              <span aria-hidden="true">·</span>
              <span>{game.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-400">★ {Number(game.rating).toFixed(1)}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReload}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Restart / Reload Game"
            >
              <RotateCw className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsTheater(!isTheater)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer hidden md:flex items-center justify-center"
              title={isTheater ? 'Default view' : 'Theater mode'}
            >
              <Tv className="w-4 h-4" />
            </button>

            <button
              onClick={handleFullscreen}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-colors cursor-pointer"
              title="Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
              <span className="hidden sm:inline">Fullscreen</span>
            </button>
          </div>
        </div>
      </div>

      {/* Details & Controls Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Game instructions */}
        <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800/80 rounded-xl p-5 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <Info className="w-4 h-4 text-emerald-400" />
            <span>Instructions & Controls</span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {game.description}
          </p>

          <div className="bg-slate-950/70 border border-slate-800/60 rounded-lg p-3 text-xs text-slate-300">
            <span className="font-semibold text-emerald-400 mr-2">Controls:</span>
            <span>{game.controls}</span>
          </div>

          {game.tags && (
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="text-slate-500 font-medium">Tags:</span>
              {game.tags.map((tag, idx) => (
                <span key={tag} className="flex items-center gap-2">
                  <span className="text-slate-400">{tag}</span>
                  {idx < game.tags.length - 1 && <span aria-hidden="true" className="text-slate-600">·</span>}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Raw Iframe Code Panel */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-5 flex flex-col justify-between gap-3">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Code className="w-4 h-4 text-cyan-400" />
                <span>Iframe Source Code</span>
              </div>
              <button
                onClick={handleCopyIframe}
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <p className="text-xs text-slate-400 mb-2">
              Embed this game into any website or HTML portal using this iframe tag.
            </p>
          </div>

          <pre className="bg-slate-950 p-3 rounded-lg text-[11px] font-mono text-cyan-300/90 overflow-x-auto whitespace-pre-wrap break-all border border-slate-800/60 max-h-32">
            {game.iframeCode}
          </pre>
        </div>
      </div>

      {/* Related Games Row */}
      <div className="mt-4">
        <h3 className="text-lg font-bold text-white mb-4">More Games to Play</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {relatedGames.map((relGame) => (
            <div
              key={relGame.id}
              onClick={() => onSelectGame(relGame)}
              className="group bg-slate-900/40 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl overflow-hidden cursor-pointer transition-all"
            >
              <div className="aspect-[4/3] bg-slate-950 overflow-hidden">
                <img
                  src={relGame.thumbnail}
                  alt={relGame.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <h4 className="text-xs font-bold text-white group-hover:text-emerald-400 line-clamp-1">
                  {relGame.title}
                </h4>
                <div className="text-[11px] text-slate-400 mt-1 flex items-center justify-between">
                  <span>{relGame.category}</span>
                  <span className="text-amber-400 font-mono">★ {Number(relGame.rating).toFixed(1)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
