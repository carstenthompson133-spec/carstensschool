// Nexus Unblocked - Pure Client JavaScript Game Portal

const INITIAL_GAMES = [
  {
    id: "cyber-snake",
    title: "Cyber Snake Arcade",
    category: "Retro",
    description: "The timeless arcade snake game reconstructed with slick neon aesthetics. Collect quantum energy nodes, expand your circuit trail, and avoid walls.",
    controls: "Arrow Keys or WASD to navigate. Space to restart.",
    thumbnail: "./assets/images/game_thumb_retro_snake_1792956053886.jpg",
    iframeUrl: "./games/snake/index.html",
    iframeCode: '<iframe src="./games/snake/index.html" title="Cyber Snake Arcade" width="100%" height="100%" frameborder="0" allowfullscreen="true" allow="autoplay; fullscreen; gamepad" sandbox="allow-scripts allow-same-origin allow-pointer-lock"></iframe>',
    rating: 4.9,
    plays: 18450,
    featured: true,
    tags: ["Retro", "Arcade", "Classic", "Reflex"]
  },
  {
    id: "puzzle-2048",
    title: "2048 Master Edition",
    category: "Puzzle",
    description: "Combine identical numbered tiles by sliding them across the grid. Strategize each turn to synthesize the 2048 tile and beyond.",
    controls: "Arrow keys or Swipe to slide tiles. [U] to undo.",
    thumbnail: "./assets/images/game_thumb_2048_puzzle_1792956055344.jpg",
    iframeUrl: "./games/2048/index.html",
    iframeCode: '<iframe src="./games/2048/index.html" title="2048 Master Edition" width="100%" height="100%" frameborder="0" allowfullscreen="true" allow="autoplay; fullscreen; gamepad" sandbox="allow-scripts allow-same-origin allow-pointer-lock"></iframe>',
    rating: 4.8,
    plays: 24910,
    featured: true,
    tags: ["Puzzle", "Numbers", "Strategy", "Brain"]
  },
  {
    id: "space-invaders",
    title: "Galactic Defense 1984",
    category: "Action",
    description: "Defend humanity from waves of alien spacecraft descending from the cosmos. Use bunker shields, dodge laser bombs, and destroy alien invaders.",
    controls: "Left / Right arrows or A/D to move cannon, Spacebar to shoot.",
    thumbnail: "./assets/images/game_thumb_space_invaders_1792956055701.jpg",
    iframeUrl: "./games/space-invaders/index.html",
    iframeCode: '<iframe src="./games/space-invaders/index.html" title="Galactic Defense 1984" width="100%" height="100%" frameborder="0" allowfullscreen="true" allow="autoplay; fullscreen; gamepad" sandbox="allow-scripts allow-same-origin allow-pointer-lock"></iframe>',
    rating: 4.9,
    plays: 21300,
    featured: true,
    tags: ["Action", "Arcade", "Shooter", "Retro"]
  },
  {
    id: "neon-breakout",
    title: "Neon Blazer: Breakout",
    category: "Arcade",
    description: "High-intensity brick breaker arcade challenge. Deflect the photon sphere, demolish colored neon barriers, and catch powerup capsules.",
    controls: "Mouse or Left/Right Arrow keys to position paddle. Space to launch ball.",
    thumbnail: "./assets/images/game_thumb_breakout_neon_1792956056989.jpg",
    iframeUrl: "./games/breakout/index.html",
    iframeCode: '<iframe src="./games/breakout/index.html" title="Neon Blazer: Breakout" width="100%" height="100%" frameborder="0" allowfullscreen="true" allow="autoplay; fullscreen; gamepad" sandbox="allow-scripts allow-same-origin allow-pointer-lock"></iframe>',
    rating: 4.7,
    plays: 15820,
    featured: true,
    tags: ["Arcade", "Skill", "Classic", "Reflex"]
  },
  {
    id: "quantum-pong",
    title: "Quantum Pong (1P / 2P)",
    category: "Sports",
    description: "Hyper-smooth digital table tennis. Play against smart adaptive AI difficulty or challenge a friend side-by-side in local two-player duel mode.",
    controls: "Player 1: W/S or Mouse. Player 2: Arrow Up/Down.",
    thumbnail: "./assets/images/game_thumb_breakout_neon_1792956056989.jpg",
    iframeUrl: "./games/pong/index.html",
    iframeCode: '<iframe src="./games/pong/index.html" title="Quantum Pong (1P / 2P)" width="100%" height="100%" frameborder="0" allowfullscreen="true" allow="autoplay; fullscreen; gamepad" sandbox="allow-scripts allow-same-origin allow-pointer-lock"></iframe>',
    rating: 4.6,
    plays: 12100,
    featured: false,
    tags: ["Sports", "2-Player", "Arcade", "Reflex"]
  },
  {
    id: "minesweeper-deluxe",
    title: "Minesweeper Deluxe",
    category: "Puzzle",
    description: "Uncover safe cells, flag hidden explosive charges, and clear the field using pure logic. Features Beginner (9x9) and Intermediate (16x16) modes.",
    controls: "Left click or tap to dig, Right click or Flag button to toggle flag.",
    thumbnail: "./assets/images/game_thumb_2048_puzzle_1792956055344.jpg",
    iframeUrl: "./games/minesweeper/index.html",
    iframeCode: '<iframe src="./games/minesweeper/index.html" title="Minesweeper Deluxe" width="100%" height="100%" frameborder="0" allowfullscreen="true" allow="autoplay; fullscreen; gamepad" sandbox="allow-scripts allow-same-origin allow-pointer-lock"></iframe>',
    rating: 4.7,
    plays: 17800,
    featured: false,
    tags: ["Puzzle", "Logic", "Strategy", "Classic"]
  },
  {
    id: "flappy-orb",
    title: "Flappy Orb Velocity",
    category: "Arcade",
    description: "Tap or press space to flap and navigate through narrow neon energy conduits. Test your timing and reflexes to hit legendary high scores.",
    controls: "Spacebar or Click / Screen Tap to boost upward.",
    thumbnail: "./assets/images/game_thumb_retro_snake_1792956053886.jpg",
    iframeUrl: "./games/flappy/index.html",
    iframeCode: '<iframe src="./games/flappy/index.html" title="Flappy Orb Velocity" width="100%" height="100%" frameborder="0" allowfullscreen="true" allow="autoplay; fullscreen; gamepad" sandbox="allow-scripts allow-same-origin allow-pointer-lock"></iframe>',
    rating: 4.5,
    plays: 31400,
    featured: false,
    tags: ["Arcade", "Endless", "Reflex", "Casual"]
  },
  {
    id: "tetra-drop",
    title: "Tetra Stack Drop",
    category: "Puzzle",
    description: "Rotate, shift, and hard-drop falling polyomino blocks to clear solid horizontal rows. Level up as the drop rate accelerates.",
    controls: "Left/Right arrow to slide, Up to rotate, Down for soft drop, Space for instant drop.",
    thumbnail: "./assets/images/game_thumb_space_invaders_1792956055701.jpg",
    iframeUrl: "./games/tetris/index.html",
    iframeCode: '<iframe src="./games/tetris/index.html" title="Tetra Stack Drop" width="100%" height="100%" frameborder="0" allowfullscreen="true" allow="autoplay; fullscreen; gamepad" sandbox="allow-scripts allow-same-origin allow-pointer-lock"></iframe>',
    rating: 4.9,
    plays: 39800,
    featured: true,
    tags: ["Puzzle", "Retro", "Blocks", "Classic"]
  }
];

// App State
let games = [...INITIAL_GAMES];
let favorites = ['cyber-snake', 'space-invaders'];
let activeCategory = 'All';
let searchQuery = '';
let sortBy = 'popular';
let activeGame = null;

// Initialize from LocalStorage
try {
  const savedGames = localStorage.getItem('nexus_unblocked_games');
  if (savedGames) {
    const parsed = JSON.parse(savedGames);
    if (Array.isArray(parsed) && parsed.length > 0) games = parsed;
  }
  const savedFavs = localStorage.getItem('nexus_favorites');
  if (savedFavs) {
    favorites = JSON.parse(savedFavs);
  }
} catch (e) {}

// Save State
function saveState() {
  try {
    localStorage.setItem('nexus_unblocked_games', JSON.stringify(games));
    localStorage.setItem('nexus_favorites', JSON.stringify(favorites));
  } catch (e) {}
}

// Attempt to load external games.json
fetch('./games.json')
  .then(res => res.json())
  .then(data => {
    if (Array.isArray(data) && data.length > 0) {
      // Merge with custom games
      const customGames = games.filter(g => g.custom);
      games = [...data, ...customGames];
      render();
    }
  })
  .catch(() => {});

// DOM Elements
const catalogView = document.getElementById('catalogView');
const playerView = document.getElementById('playerView');
const heroSpotlight = document.getElementById('heroSpotlight');
const gamesGrid = document.getElementById('gamesGrid');
const gamesCountEl = document.getElementById('gamesCount');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const categoryTabs = document.getElementById('categoryTabs');
const favCountEl = document.getElementById('favCount');

// Modals
const addModal = document.getElementById('addModal');
const jsonModal = document.getElementById('jsonModal');
const cloakModal = document.getElementById('cloakModal');
const jsonTextarea = document.getElementById('jsonTextarea');

// Icons SVG Helper
function getSvg(name) {
  switch (name) {
    case 'play':
      return '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
    case 'heart':
      return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
    case 'star':
      return '<svg width="13" height="13" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
    default:
      return '';
  }
}

// Render Functions
function render() {
  if (activeGame) {
    catalogView.style.display = 'none';
    playerView.style.display = 'flex';
    renderPlayer();
  } else {
    catalogView.style.display = 'block';
    playerView.style.display = 'none';
    renderCatalog();
  }
  if (favCountEl) {
    favCountEl.innerText = favorites.length > 0 ? `(${favorites.length})` : '';
  }
}

function renderCatalog() {
  // Filter & Sort
  let list = games.filter(g => {
    if (activeCategory === 'Favorites') {
      if (!favorites.includes(g.id)) return false;
    } else if (activeCategory !== 'All') {
      if (g.category.toLowerCase() !== activeCategory.toLowerCase()) return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match = g.title.toLowerCase().includes(q) ||
                    g.description.toLowerCase().includes(q) ||
                    g.category.toLowerCase().includes(q) ||
                    (g.tags && g.tags.some(t => t.toLowerCase().includes(q)));
      if (!match) return false;
    }
    return true;
  });

  list.sort((a, b) => {
    if (sortBy === 'popular') return b.plays - a.plays;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'title') return a.title.localeCompare(b.title);
    return 0;
  });

  // Hero Spotlight
  if (activeCategory === 'All' && !searchQuery) {
    const featured = games.find(g => g.featured) || games[0];
    heroSpotlight.style.display = 'grid';
    heroSpotlight.innerHTML = `
      <div class="hero-glow"></div>
      <div>
        <div class="hero-kicker">
          <span>★ SPOTLIGHT TITLE</span>
          <span>·</span>
          <span style="color: #94a3b8;">${games.length} Games Ready</span>
        </div>
        <h1 class="hero-title">${featured.title}</h1>
        <p class="hero-desc">${featured.description}</p>
        <div class="hero-meta">
          <span>${featured.category}</span>
          <span>·</span>
          <span style="color: #fbbf24;">★ ${Number(featured.rating).toFixed(1)}</span>
          <span>·</span>
          <span>${featured.plays.toLocaleString()} plays</span>
          <span>·</span>
          <span style="color: #10b981;">100% Client Iframe</span>
        </div>
        <button class="btn-primary" onclick="launchGame('${featured.id}')">
          ${getSvg('play')}
          <span>Play Now</span>
        </button>
      </div>
      <div class="hero-thumb-wrapper" onclick="launchGame('${featured.id}')" style="cursor: pointer;">
        <img src="${featured.thumbnail}" alt="${featured.title}" onerror="this.src='./assets/images/game_thumb_retro_snake_1792956053886.jpg'">
      </div>
    `;
  } else {
    heroSpotlight.style.display = 'none';
  }

  // Count
  gamesCountEl.innerText = `${list.length} ${list.length === 1 ? 'game' : 'games'} available`;

  // Grid
  if (list.length === 0) {
    gamesGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: rgba(15,23,42,0.3); border-radius: 16px; border: 1px solid var(--border-color);">
        <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">No games found</h3>
        <p style="color: #94a3b8; font-size: 13px;">Try adjusting your keyword or switching categories.</p>
      </div>
    `;
    return;
  }

  gamesGrid.innerHTML = list.map(game => {
    const isFav = favorites.includes(game.id);
    return `
      <div class="game-card" onclick="launchGame('${game.id}')">
        <div class="card-thumb-wrap">
          <img src="${game.thumbnail}" alt="${game.title}" onerror="this.src='./assets/images/game_thumb_retro_snake_1792956053886.jpg'">
          <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFav('${game.id}')" title="Favorite">
            ${getSvg('heart')}
          </button>
          <div class="play-overlay">
            <div class="play-circle">${getSvg('play')}</div>
          </div>
        </div>
        <div class="card-content">
          <div>
            <div class="card-title-row">
              <h3 class="card-title">${game.title}</h3>
              <span class="card-rating">${getSvg('star')} ${Number(game.rating).toFixed(1)}</span>
            </div>
            <p class="card-desc">${game.description}</p>
          </div>
          <div class="card-footer">
            <span>${game.category}</span>
            <span>${game.plays.toLocaleString()} plays</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderPlayer() {
  if (!activeGame) return;
  const isFav = favorites.includes(activeGame.id);

  playerView.innerHTML = `
    <div class="player-header">
      <button class="back-btn" onclick="closeGame()">
        ← Back to Arcade
      </button>
      <div class="player-actions">
        <button class="btn-secondary" onclick="toggleFav('${activeGame.id}')">
          <span style="color: ${isFav ? '#f43f5e' : 'inherit'}">${getSvg('heart')}</span>
          <span>${isFav ? 'Favorited' : 'Favorite'}</span>
        </button>
        <button class="btn-secondary" onclick="openPopout()">
          ↗ Popout Window
        </button>
      </div>
    </div>

    <div class="iframe-wrapper" id="playerWrapper">
      <div class="iframe-inner">
        <iframe id="gameIframe" src="${activeGame.iframeUrl}" title="${activeGame.title}" allow="autoplay; fullscreen; gamepad" sandbox="allow-scripts allow-same-origin allow-pointer-lock"></iframe>
      </div>
      <div class="player-bar">
        <div>
          <strong style="color: #fff; font-size: 15px;">${activeGame.title}</strong>
          <span style="color: #64748b; font-size: 12px; margin-left: 8px;">${activeGame.category} · ★ ${Number(activeGame.rating).toFixed(1)}</span>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn-secondary" onclick="reloadIframe()" title="Reload">⟳ Restart</button>
          <button class="btn-primary" onclick="toggleFullscreen()">⛶ Fullscreen</button>
        </div>
      </div>
    </div>

    <div class="player-info-grid">
      <div class="info-card">
        <div class="info-title">ℹ Instructions & Controls</div>
        <p style="font-size: 13px; color: #cbd5e1; margin-bottom: 12px; line-height: 1.6;">${activeGame.description}</p>
        <div class="controls-callout">
          <strong style="color: #10b981;">Controls:</strong> ${activeGame.controls}
        </div>
      </div>

      <div class="info-card">
        <div class="info-title" style="justify-content: space-between;">
          <span>&lt;/&gt; Iframe Source Code</span>
          <button class="btn-secondary" style="padding: 4px 8px; font-size: 11px;" onclick="copyIframeCode()">Copy Code</button>
        </div>
        <p style="font-size: 12px; color: #94a3b8; margin-bottom: 8px;">Embed this game into any website or portal.</p>
        <div class="code-block">${escapeHtml(activeGame.iframeCode)}</div>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// User Actions
window.launchGame = function(id) {
  const g = games.find(item => item.id === id);
  if (!g) return;
  g.plays++;
  activeGame = g;
  saveState();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  render();
};

window.closeGame = function() {
  activeGame = null;
  render();
};

window.toggleFav = function(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
  } else {
    favorites.push(id);
  }
  saveState();
  render();
};

window.reloadIframe = function() {
  const f = document.getElementById('gameIframe');
  if (f) f.src = f.src;
};

window.toggleFullscreen = function() {
  const el = document.getElementById('playerWrapper');
  if (!el) return;
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  } else {
    el.requestFullscreen().catch(() => {});
  }
};

window.openPopout = function() {
  if (!activeGame) return;
  const w = window.open('about:blank', '_blank');
  if (w) {
    w.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${activeGame.title}</title>
          <style>body,html{margin:0;padding:0;height:100%;overflow:hidden;background:#000;}iframe{border:none;width:100%;height:100%;display:block;}</style>
        </head>
        <body>${activeGame.iframeCode}</body>
      </html>
    `);
    w.document.close();
  }
};

window.copyIframeCode = function() {
  if (!activeGame) return;
  navigator.clipboard.writeText(activeGame.iframeCode).then(() => {
    alert('Iframe code copied to clipboard!');
  });
};

// Filter Category click
document.querySelectorAll('.category-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeCategory = tab.dataset.category;
    activeGame = null;
    render();
  });
});

// Search and Sort
if (searchInput) {
  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value;
    render();
  });
}

if (sortSelect) {
  sortSelect.addEventListener('change', e => {
    sortBy = e.target.value;
    render();
  });
}

// Navigation links
document.querySelectorAll('[data-nav]').forEach(btn => {
  btn.addEventListener('click', () => {
    const nav = btn.dataset.nav;
    activeGame = null;
    if (nav === 'all') {
      activeCategory = 'All';
      document.querySelectorAll('.category-tab').forEach(t => t.classList.toggle('active', t.dataset.category === 'All'));
    } else if (nav === 'featured') {
      const featured = games.find(g => g.featured) || games[0];
      launchGame(featured.id);
      return;
    } else if (nav === 'favorites') {
      activeCategory = 'Favorites';
      document.querySelectorAll('.category-tab').forEach(t => t.classList.toggle('active', t.dataset.category === 'Favorites'));
    } else if (nav === 'json') {
      openJsonModal();
      return;
    } else if (nav === 'cloak') {
      openCloakModal();
      return;
    }
    render();
  });
});

// Add Game Modal
window.openAddModal = function() {
  addModal.classList.remove('hidden');
};
window.closeAddModal = function() {
  addModal.classList.add('hidden');
};

const addGameForm = document.getElementById('addGameForm');
if (addGameForm) {
  addGameForm.addEventListener('submit', e => {
    e.preventDefault();
    const title = document.getElementById('addTitle').value.trim();
    const iframeVal = document.getElementById('addIframe').value.trim();
    const category = document.getElementById('addCategory').value;
    const controls = document.getElementById('addControls').value.trim() || 'Keyboard / Mouse';
    const description = document.getElementById('addDesc').value.trim() || 'Custom unblocked game.';

    if (!title || !iframeVal) return;

    let url = iframeVal;
    let code = iframeVal;

    if (iframeVal.includes('<iframe')) {
      const match = iframeVal.match(/src=["']([^"']+)["']/i);
      if (match && match[1]) url = match[1];
    } else {
      code = `<iframe src="${url}" title="${title}" width="100%" height="100%" frameborder="0" allowfullscreen="true" allow="autoplay; fullscreen; gamepad" sandbox="allow-scripts allow-same-origin allow-pointer-lock"></iframe>`;
    }

    const newGame = {
      id: `custom-${Date.now()}`,
      title,
      category,
      description,
      controls,
      thumbnail: './assets/images/game_thumb_retro_snake_1792956053886.jpg',
      iframeUrl: url,
      iframeCode: code,
      rating: 5.0,
      plays: 1,
      custom: true,
      tags: ['Custom', category]
    };

    games.unshift(newGame);
    saveState();
    closeAddModal();
    addGameForm.reset();
    launchGame(newGame.id);
  });
}

// JSON Modal
window.openJsonModal = function() {
  jsonTextarea.value = JSON.stringify(games, null, 2);
  jsonModal.classList.remove('hidden');
};
window.closeJsonModal = function() {
  jsonModal.classList.add('hidden');
};

window.copyJson = function() {
  navigator.clipboard.writeText(jsonTextarea.value).then(() => {
    alert('games.json copied to clipboard!');
  });
};

window.downloadJson = function() {
  const blob = new Blob([jsonTextarea.value], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'games.json';
  a.click();
};

window.applyJson = function() {
  try {
    const parsed = JSON.parse(jsonTextarea.value);
    if (!Array.isArray(parsed)) throw new Error('Must be an array.');
    games = parsed;
    saveState();
    closeJsonModal();
    render();
    alert('Custom JSON applied successfully!');
  } catch (err) {
    alert('Invalid JSON: ' + err.message);
  }
};

window.resetDefaults = function() {
  games = [...INITIAL_GAMES];
  saveState();
  closeJsonModal();
  render();
};

// Cloak Modal
window.openCloakModal = function() {
  cloakModal.classList.remove('hidden');
};
window.closeCloakModal = function() {
  cloakModal.classList.add('hidden');
};

window.setPresetCloak = function(name) {
  let title = 'Google Docs';
  let icon = 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico';
  if (name === 'drive') {
    title = 'My Drive - Google Drive';
    icon = 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png';
  } else if (name === 'classroom') {
    title = 'Classes - Google Classroom';
    icon = 'https://ssl.gstatic.com/classroom/favicon.png';
  } else if (name === 'canvas') {
    title = 'Dashboard | Canvas';
    icon = 'https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico';
  }
  document.title = title;
  let link = document.querySelector("link[rel*='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'shortcut icon';
    document.head.appendChild(link);
  }
  link.href = icon;
  closeCloakModal();
};

window.resetTabCloak = function() {
  document.title = 'Nexus Unblocked - Retro & Web Arcade Games';
  let link = document.querySelector("link[rel*='icon']");
  if (link) link.href = './favicon.svg';
  closeCloakModal();
};

window.panicEscape = function() {
  window.location.href = 'https://www.google.com';
};

// Keyboard Hotkey (Press ` or Esc for Cloak)
window.addEventListener('keydown', e => {
  if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes(e.target?.tagName)) {
    if (cloakModal.classList.contains('hidden')) openCloakModal();
    else closeCloakModal();
  }
});

// Initial Render
render();
