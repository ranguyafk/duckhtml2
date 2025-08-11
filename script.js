
// Load and display games
async function loadGames() {
  try {
    const response = await fetch('games.json');
    const games = await response.json();

    const container = document.getElementById('gameContainer');
    container.innerHTML = ''; // clear if needed

    games.forEach(game => {
      const tagsHtml = game.tags.map(tag => `<span>${tag}</span>`).join('');
      const gameCard = `
        <div class="game" data-title="${game.title.toLowerCase()}" data-tags="${game.tags.join(', ').toLowerCase()}">
          <img src="${game.image}" alt="${game.title}" />
          <div class="game-content">
            <h3 class="game-title">${game.title}</h3>
            <p class="game-description">${game.description}</p>
            <div class="game-tags">${tagsHtml}</div>
            <div class="play-button">
              <a href="${game.url}" aria-label="Play ${game.title}">Play</a>
            </div>
          </div>
        </div>`;
      container.insertAdjacentHTML('beforeend', gameCard);
    });

    // Initialize random game button after games are loaded
    initRandomGameButton(games);
  } catch (err) {
    console.error('Failed to load games:', err);
  }
}

// Initialize random game button with all games from games.json
function initRandomGameButton(games) {
  const randomGameBtn = document.getElementById('randomGameBtn');
  if(randomGameBtn) {
    randomGameBtn.addEventListener('click', () => {
      if (games && games.length > 0) {
        const randomIndex = Math.floor(Math.random() * games.length);
        const randomGame = games[randomIndex];
        window.location.href = randomGame.url;
      }
    });
  }
}

// Search and filter function combined
function filterGames() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const filterValue = document.getElementById('filterSelect').value.toLowerCase();
  const games = document.querySelectorAll('.game');

  games.forEach(game => {
    const title = game.getAttribute('data-title').toLowerCase();
    const tags = game.getAttribute('data-tags').toLowerCase();

    // Check search term match
    const matchesSearch = title.includes(searchTerm) || tags.includes(searchTerm);

    // Check filter match (if filter is "all", always true)
    const matchesFilter = filterValue === 'all' || tags.split(', ').includes(filterValue);

    if (matchesSearch && matchesFilter) {
      game.style.display = 'flex';
    } else {
      game.style.display = 'none';
    }
  });
}

// Load games when the page loads
document.addEventListener('DOMContentLoaded', loadGames);
