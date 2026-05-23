const API = 'https://univestree-backend.vercel.app/api/universities';

const universitiesContainer = document.getElementById('universitiesContainer');
const searchInput = document.getElementById('searchInput');
const countryFilter = document.getElementById('countryFilter');

async function fetchAndDisplay() {
  const query = searchInput ? searchInput.value.trim() : '';
  const country = countryFilter ? countryFilter.value : '';

  let url = `${API}/search?`;
  if (query) url += `query=${encodeURIComponent(query)}&`;
  if (country) url += `country=${encodeURIComponent(country)}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    displayUniversities(Array.isArray(data) ? data : []);
  } catch (e) {
    console.error('Search failed:', e);
  }
}

function displayUniversities(data) {
  if (!universitiesContainer) return;
  if (data.length === 0) {
    universitiesContainer.innerHTML = '<p>No universities found.</p>';
    return;
  }
  universitiesContainer.innerHTML = data.map(university => `
    <div class="university-card">
      <h3>${university.name}</h3>
      <p>${university.city ? university.city + ', ' : ''}${university.country}</p>
      <p>QS Ranking: #${university.ranking}</p>
      <p>Acceptance Rate: ${university.acceptanceRate}%</p>
      <button onclick="window.location.href='university-details.html'">
        View Details
      </button>
    </div>
  `).join('');
}

// Load all on page start
fetchAndDisplay();

if (searchInput) searchInput.addEventListener('input', fetchAndDisplay);
if (countryFilter) countryFilter.addEventListener('change', fetchAndDisplay);
