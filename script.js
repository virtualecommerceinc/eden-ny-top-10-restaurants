/**
 * Eden, NY Restaurant Picker
 * Single source of truth for restaurant data + interactive features
 */

// =============================================================================
// RESTAURANT DATA (Single Source of Truth)
// =============================================================================
const restaurants = [
  {
    id: 'eden-seafood',
    name: 'Eden Seafood & Pizzeria',
    category: 'Seafood & Pizza',
    emoji: '🐟',
    address: '8530 N Main St, Eden, NY 14057',
    city: 'Eden',
    phone: '(716) 992-9020',
    hours: 'Mon–Wed 11am–9pm | Thu–Sat 11am–10pm | Sun 11am–9pm',
    tags: ['seafood', 'pizza', 'family-friendly', 'casual'],
    vibes: ['casual', 'family'],
    priceLevel: 2,
    shortWhy: 'Fresh seafood and beloved pizzas in a friendly, family atmosphere.',
    whyTop10: [
      'Fresh seafood offerings with local reputation',
      'Popular pizzas and casual atmosphere',
      'Consistent reviews praising friendly service',
      'Family-friendly dining destination'
    ],
    links: {
      maps: 'https://goo.gl/maps/6wK6Zk3u3h9pGQWj9',
      yelp: 'https://www.yelp.com/biz/eden-seafood-and-pizzeria-eden'
    },
    // Quiz scoring attributes
    quizTraits: {
      vibe: ['casual', 'family'],
      craving: ['seafood', 'pizza', 'american'],
      hunger: ['medium', 'large'],
      time: ['lunch', 'dinner'],
      surprise: false
    }
  },
  {
    id: 'schunks',
    name: "Schunk's West Hill Grill",
    category: 'American Grill & Diner',
    emoji: '🍖',
    address: '6883 S Buffalo St, East Eden, NY 14057',
    city: 'East Eden',
    phone: null,
    hours: 'Call for hours',
    tags: ['american', 'diner', 'grill', 'comfort-food'],
    vibes: ['casual', 'family', 'neighborhood'],
    priceLevel: 2,
    shortWhy: 'Hearty American fare with generous portions in a welcoming neighborhood spot.',
    whyTop10: [
      'Well-reviewed for hearty American fare',
      'Popular with locals for daily dining',
      'Known for generous portions',
      'Welcoming, neighborhood atmosphere'
    ],
    links: {
      maps: 'https://goo.gl/maps/7jJ3sfsfTnvSwvRP9',
      tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g48232-d7702693-Reviews-Schunk_s_West_Hill_Grill-East_Eden_Eden_New_York.html'
    },
    quizTraits: {
      vibe: ['casual', 'family', 'neighborhood'],
      craving: ['american', 'comfort', 'burgers'],
      hunger: ['medium', 'large'],
      time: ['lunch', 'dinner'],
      surprise: false
    }
  },
  {
    id: 'four-corners',
    name: 'Four Corners Café',
    category: 'Café & Bakery',
    emoji: '☕',
    address: '7755 Erie Rd, Derby, NY 14047',
    city: 'Derby',
    phone: null,
    hours: 'Morning hours - call ahead',
    tags: ['cafe', 'bakery', 'breakfast', 'coffee'],
    vibes: ['cozy', 'morning', 'charming'],
    priceLevel: 1,
    shortWhy: 'Fresh-baked pastries and quality coffee in a charming community café.',
    whyTop10: [
      'Praised for fresh-baked pastries and breads',
      'Quality coffee and friendly baristas',
      'Popular morning destination for locals',
      'Charming, community-focused atmosphere'
    ],
    links: {
      maps: 'https://goo.gl/maps/DNHZqHjLvNvYqM1m9',
      facebook: 'https://www.facebook.com/fourcornerscafederby'
    },
    quizTraits: {
      vibe: ['cozy', 'quiet', 'charming'],
      craving: ['coffee', 'breakfast', 'pastries', 'light'],
      hunger: ['small', 'medium'],
      time: ['breakfast', 'brunch'],
      surprise: true
    }
  },
  {
    id: 'rayzors',
    name: "Rayzor's Dawg House",
    category: 'Hot Dogs & Fast Casual',
    emoji: '🌭',
    address: '7020 S Buffalo St, Orchard Park, NY 14127',
    city: 'Orchard Park',
    phone: null,
    hours: 'Lunch & Dinner hours',
    tags: ['hot-dogs', 'fast-casual', 'quick', 'family-friendly'],
    vibes: ['casual', 'quick', 'family', 'fun'],
    priceLevel: 1,
    shortWhy: 'Beloved local chain for quality hot dogs, quick service, and family fun.',
    whyTop10: [
      'Local favorite for quality hot dogs',
      'Reasonably priced, quick service',
      'Popular with families and kids',
      'Beloved regional fast-casual chain'
    ],
    links: {
      maps: 'https://goo.gl/maps/tCc1XfPqPtmXwLtN9',
      yelp: 'https://www.yelp.com/biz/rayzors-dawg-house-orchard-park'
    },
    quizTraits: {
      vibe: ['casual', 'quick', 'family', 'fun'],
      craving: ['american', 'fast-food', 'hot-dogs'],
      hunger: ['small', 'medium'],
      time: ['lunch', 'dinner'],
      surprise: false
    },
    featured: true // For spotlight section
  },
  {
    id: 'ladybird',
    name: 'Ladybird Deli & Bakery',
    category: 'Deli & Bakery',
    emoji: '🥪',
    address: '7749 Erie Rd, Derby, NY 14047',
    city: 'Derby',
    phone: null,
    hours: 'Lunch hours',
    tags: ['deli', 'bakery', 'sandwiches', 'takeout'],
    vibes: ['casual', 'quick', 'quality'],
    priceLevel: 1,
    shortWhy: 'Handmade sandwiches with quality ingredients and fresh-baked goods.',
    whyTop10: [
      'Handmade sandwiches with quality ingredients',
      'Fresh-baked breads and pastries daily',
      'Perfect for lunch on the go',
      'Consistently praised for value and quality'
    ],
    links: {
      maps: 'https://goo.gl/maps/GsdABdFQ71u6JJMb8',
      tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g48232-d11685041-Reviews-Ladybird_Deli_and_Bakery-Eden_New_York.html'
    },
    quizTraits: {
      vibe: ['casual', 'quick'],
      craving: ['sandwiches', 'deli', 'bakery', 'light'],
      hunger: ['small', 'medium'],
      time: ['lunch', 'brunch'],
      surprise: true
    }
  },
  {
    id: '18-mile',
    name: '18 Mile Bakery',
    category: 'Bakery & Café',
    emoji: '🍰',
    address: '8570 N Main St, Eden, NY 14057',
    city: 'Eden',
    phone: null,
    hours: 'Morning & Afternoon hours',
    tags: ['bakery', 'cafe', 'pastries', 'artisan'],
    vibes: ['cozy', 'charming', 'local'],
    priceLevel: 1,
    shortWhy: 'Renowned artisan bakery with wide variety of breads, cakes, and pastries.',
    whyTop10: [
      'Renowned for quality artisan baking',
      'Wide variety of breads, cakes, and pastries',
      'Excellent coffee and beverage selection',
      'Strong local following and reputation'
    ],
    links: {
      maps: 'https://goo.gl/maps/4mMD5WgL5pYSkAWn6',
      yelp: 'https://www.yelp.com/biz/18-mile-bakery-eden'
    },
    quizTraits: {
      vibe: ['cozy', 'charming', 'quiet'],
      craving: ['bakery', 'coffee', 'pastries', 'dessert'],
      hunger: ['small'],
      time: ['breakfast', 'brunch', 'afternoon'],
      surprise: true
    }
  },
  {
    id: 'eden-rest',
    name: 'Eden Restaurant & Lounge',
    category: 'American Pub',
    emoji: '🍽️',
    address: '8570 N Main St, Eden, NY 14057',
    city: 'Eden',
    phone: null,
    hours: 'Evening hours',
    tags: ['american', 'pub', 'lounge', 'drinks'],
    vibes: ['casual', 'evening', 'social'],
    priceLevel: 2,
    shortWhy: 'Popular dinner and drinks destination with a welcoming atmosphere.',
    whyTop10: [
      'Popular dinner and drinks destination',
      'Friendly staff and welcoming atmosphere',
      'Good pub food and drink selection',
      'Central Eden location on Main Street'
    ],
    links: {
      maps: 'https://goo.gl/maps/3ABnVV8zYkK2',
      website: 'https://www.edenrestaurantlounge.com'
    },
    quizTraits: {
      vibe: ['casual', 'social', 'evening'],
      craving: ['american', 'pub', 'comfort'],
      hunger: ['medium', 'large'],
      time: ['dinner', 'latenight'],
      surprise: false
    }
  },
  {
    id: 'smokeys',
    name: "Smokey's Saloon",
    category: 'Bar & Grill',
    emoji: '🍺',
    address: '8459 N Main St, Eden, NY 14057',
    city: 'Eden',
    phone: null,
    hours: 'Afternoon & Evening hours',
    tags: ['bar', 'grill', 'casual', 'neighborhood'],
    vibes: ['casual', 'neighborhood', 'local', 'relaxed'],
    priceLevel: 1,
    shortWhy: 'Neighborhood favorite for casual dining, drinks, and good times.',
    whyTop10: [
      'Local favorite for casual dining and drinks',
      'Affordable comfort food and grill items',
      'Friendly neighborhood bar atmosphere',
      'Popular spot for locals and regulars'
    ],
    links: {
      maps: 'https://goo.gl/maps/Dr9nYpN3K2Q2',
      facebook: 'https://www.facebook.com/SmokeysSaloonEden'
    },
    quizTraits: {
      vibe: ['casual', 'neighborhood', 'relaxed'],
      craving: ['american', 'pub', 'comfort', 'burgers'],
      hunger: ['medium'],
      time: ['dinner', 'latenight'],
      surprise: false
    }
  },
  {
    id: 'eden-brewing',
    name: 'Eden Brewing Company',
    category: 'Brewery & Pub',
    emoji: '🍺',
    address: '8401 S Buffalo St, Eden, NY 14057',
    city: 'Eden',
    phone: null,
    hours: 'Afternoon & Evening hours',
    tags: ['brewery', 'craft-beer', 'pub', 'local'],
    vibes: ['social', 'craft', 'evening', 'unique'],
    priceLevel: 2,
    shortWhy: 'Local craft brewery with quality house beers and welcoming taproom.',
    whyTop10: [
      'Local craft brewery with quality house beers',
      'Great for beer enthusiasts and casual visitors',
      'Welcoming taproom and patio space',
      'Supports local craft beer community'
    ],
    links: {
      maps: 'https://goo.gl/maps/wd6A3YZdHfM2',
      untappd: 'https://untappd.com/v/eden-brewing-company/'
    },
    quizTraits: {
      vibe: ['social', 'craft', 'unique', 'evening'],
      craving: ['beer', 'drinks', 'pub'],
      hunger: ['small', 'medium'],
      time: ['afternoon', 'dinner', 'latenight'],
      surprise: true
    }
  },
  {
    id: '8-mile',
    name: '8 Mile BBQ',
    category: 'BBQ & Smokehouse',
    emoji: '🔥',
    address: '8241 S Buffalo St, Orchard Park, NY 14127',
    city: 'Orchard Park',
    phone: null,
    hours: 'Lunch & Dinner hours',
    tags: ['bbq', 'smokehouse', 'ribs', 'american'],
    vibes: ['casual', 'hearty', 'flavorful'],
    priceLevel: 2,
    shortWhy: 'Authentic BBQ and smoked meats with traditional flavor and quality sides.',
    whyTop10: [
      'Well-regarded for authentic BBQ and smoked meats',
      'Tender ribs, brisket, and pulled pork',
      'Quality sides and traditional BBQ flavor',
      'Popular for casual dining and takeout'
    ],
    links: {
      maps: 'https://goo.gl/maps/Kk7yr5r6WxE2',
      yelp: 'https://www.yelp.com/biz/8-mile-bbq-orchard-park'
    },
    quizTraits: {
      vibe: ['casual', 'hearty'],
      craving: ['bbq', 'meat', 'american', 'comfort'],
      hunger: ['large'],
      time: ['lunch', 'dinner'],
      surprise: false
    }
  }
];

// =============================================================================
// QUIZ CONFIGURATION
// =============================================================================
const quizQuestions = [
  {
    id: 'vibe',
    question: "What's the vibe you're going for tonight?",
    options: [
      { icon: '🏠', label: 'Casual & Relaxed', value: ['casual', 'relaxed', 'neighborhood'] },
      { icon: '👨‍👩‍👧‍👦', label: 'Family-Friendly', value: ['family', 'casual'] },
      { icon: '🍻', label: 'Social & Fun', value: ['social', 'fun', 'evening'] },
      { icon: '☕', label: 'Cozy & Quiet', value: ['cozy', 'quiet', 'charming'] }
    ]
  },
  {
    id: 'craving',
    question: "What are you craving?",
    options: [
      { icon: '🍔', label: 'American Comfort Food', value: ['american', 'comfort', 'burgers'] },
      { icon: '🍕', label: 'Pizza or Seafood', value: ['pizza', 'seafood'] },
      { icon: '🔥', label: 'BBQ & Smoked Meats', value: ['bbq', 'meat'] },
      { icon: '🥐', label: 'Coffee & Baked Goods', value: ['coffee', 'bakery', 'pastries', 'light'] },
      { icon: '🌭', label: 'Quick Bite (Hot Dogs, Deli)', value: ['fast-food', 'hot-dogs', 'sandwiches', 'deli'] }
    ]
  },
  {
    id: 'hunger',
    question: "How hungry are you?",
    options: [
      { icon: '🥗', label: 'Just a snack or light bite', value: ['small'] },
      { icon: '🍽️', label: 'Regular meal', value: ['medium'] },
      { icon: '🍖', label: 'I want to feast!', value: ['large'] }
    ]
  },
  {
    id: 'time',
    question: "When are you eating?",
    options: [
      { icon: '🌅', label: 'Breakfast / Brunch', value: ['breakfast', 'brunch'] },
      { icon: '☀️', label: 'Lunch', value: ['lunch'] },
      { icon: '🌙', label: 'Dinner', value: ['dinner'] },
      { icon: '🌃', label: 'Late Night', value: ['latenight', 'dinner'] }
    ]
  },
  {
    id: 'surprise',
    question: "Feeling adventurous?",
    options: [
      { icon: '✅', label: 'Stick to the classics', value: false },
      { icon: '🎲', label: 'Surprise me with something unique!', value: true }
    ]
  }
];

// =============================================================================
// STATE MANAGEMENT
// =============================================================================
let state = {
  shortlist: JSON.parse(localStorage.getItem('edenPickerShortlist') || '[]'),
  activeFilters: [],
  searchQuery: '',
  sortBy: 'default',
  quizAnswers: {},
  quizStep: 0
};

let rollTimer = null;
let rollTimeout = null;

// =============================================================================
// DOM ELEMENTS
// =============================================================================
const elements = {
  // Navigation
  miniNav: document.getElementById('mini-nav'),
  miniQuizBtn: document.getElementById('mini-quiz-btn'),
  miniShortlistBtn: document.getElementById('mini-shortlist-btn'),
  shortlistCount: document.getElementById('shortlist-count'),
  
  // Hero
  takeQuizBtn: document.getElementById('take-quiz-btn'),
  browseBtn: document.getElementById('browse-btn'),
  
  // Spotlight
  spotlightCard: document.getElementById('spotlight-card'),
  
  // Shortlist
  shortlistPanel: document.getElementById('shortlist-panel'),
  shortlistEmpty: document.getElementById('shortlist-empty'),
  shortlistList: document.getElementById('shortlist-list'),
  shortlistActions: document.getElementById('shortlist-actions'),
  randomPickBtn: document.getElementById('random-pick-btn'),
  clearShortlistBtn: document.getElementById('clear-shortlist-btn'),
  
  // Filters
  searchInput: document.getElementById('search-input'),
  filterChips: document.getElementById('filter-chips'),
  sortSelect: document.getElementById('sort-select'),
  activeFilters: document.getElementById('active-filters'),
  resultsCount: document.getElementById('results-count'),
  
  // Restaurant List
  restaurantList: document.getElementById('restaurant-list'),
  noResults: document.getElementById('no-results'),
  clearFiltersBtn: document.getElementById('clear-filters-btn'),
  
  // Quiz Modal
  quizModal: document.getElementById('quiz-modal'),
  quizCloseBtn: document.getElementById('quiz-close-btn'),
  quizProgress: document.getElementById('quiz-progress'),
  quizQuestions: document.getElementById('quiz-questions'),
  quizResults: document.getElementById('quiz-results'),
  
  // Random Modal
  randomModal: document.getElementById('random-modal'),
  randomCloseBtn: document.getElementById('random-close-btn'),
  randomResult: document.getElementById('random-result')
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================
function saveState() {
  localStorage.setItem('edenPickerShortlist', JSON.stringify(state.shortlist));
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function getFilteredRestaurants() {
  let filtered = [...restaurants];
  
  // Apply search
  if (state.searchQuery) {
    const query = state.searchQuery.toLowerCase();
    filtered = filtered.filter(r => 
      r.name.toLowerCase().includes(query) ||
      r.category.toLowerCase().includes(query) ||
      r.tags.some(t => t.includes(query)) ||
      r.city.toLowerCase().includes(query)
    );
  }
  
  // Apply category filters
  if (state.activeFilters.length > 0) {
    filtered = filtered.filter(r => 
      state.activeFilters.some(f => r.tags.includes(f))
    );
  }
  
  // Apply sorting
  switch (state.sortBy) {
    case 'az':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'za':
      filtered.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'eden-first':
      filtered.sort((a, b) => {
        if (a.city === 'Eden' && b.city !== 'Eden') return -1;
        if (b.city === 'Eden' && a.city !== 'Eden') return 1;
        return 0;
      });
      break;
    default:
      // Keep original order
      break;
  }
  
  return filtered;
}

// =============================================================================
// RENDER FUNCTIONS
// =============================================================================
function renderRestaurantCard(restaurant, isSpotlight = false) {
  const isShortlisted = state.shortlist.includes(restaurant.id);
  const locationLabel = restaurant.city === 'Eden' ? '' : `Near Eden: ${restaurant.city}`;
  
  // Build link buttons
  const linkButtons = [];
  if (restaurant.links.maps) {
    linkButtons.push(`<a href="${restaurant.links.maps}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline" aria-label="Open ${restaurant.name} in Google Maps">📍 Maps</a>`);
  }
  if (restaurant.phone) {
    linkButtons.push(`<a href="tel:${restaurant.phone.replace(/\D/g, '')}" class="btn btn-sm btn-outline" aria-label="Call ${restaurant.name}">📞 Call</a>`);
  }
  if (restaurant.links.website) {
    linkButtons.push(`<a href="${restaurant.links.website}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline" aria-label="Visit ${restaurant.name} website">🌐 Website</a>`);
  }
  if (restaurant.links.yelp) {
    linkButtons.push(`<a href="${restaurant.links.yelp}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline" aria-label="View ${restaurant.name} on Yelp">Yelp</a>`);
  }
  if (restaurant.links.tripadvisor) {
    linkButtons.push(`<a href="${restaurant.links.tripadvisor}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline" aria-label="View ${restaurant.name} on TripAdvisor">TripAdvisor</a>`);
  }
  if (restaurant.links.facebook) {
    linkButtons.push(`<a href="${restaurant.links.facebook}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline" aria-label="Visit ${restaurant.name} on Facebook">Facebook</a>`);
  }
  if (restaurant.links.untappd) {
    linkButtons.push(`<a href="${restaurant.links.untappd}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline" aria-label="View ${restaurant.name} on Untappd">Untappd</a>`);
  }
  
  const html = `
    <article class="restaurant-card${isSpotlight ? ' spotlight-card' : ''}" id="${restaurant.id}" role="listitem">
      <div class="card-header">
        <div>
          <h3 class="card-title">${escapeHtml(restaurant.name)}</h3>
          ${locationLabel ? `<p class="card-location">${locationLabel}</p>` : ''}
        </div>
        <button 
          class="card-favorite ${isShortlisted ? 'active' : ''}" 
          data-id="${restaurant.id}"
          aria-label="${isShortlisted ? 'Remove from' : 'Add to'} shortlist"
          aria-pressed="${isShortlisted}"
        >❤️</button>
      </div>
      
      <p class="card-category">${restaurant.emoji} ${escapeHtml(restaurant.category)}</p>
      
      <div class="card-tags">
        ${restaurant.tags.slice(0, 4).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
      </div>
      
      <p class="card-why">"${escapeHtml(restaurant.shortWhy)}"</p>
      
      <div class="card-details">
        <p><strong>📍</strong> ${escapeHtml(restaurant.address)}</p>
        ${restaurant.phone ? `<p><strong>📞</strong> <a href="tel:${restaurant.phone.replace(/\D/g, '')}">${escapeHtml(restaurant.phone)}</a></p>` : ''}
        <p><strong>🕐</strong> ${escapeHtml(restaurant.hours)}</p>
      </div>
      
      <div class="card-actions">
        ${linkButtons.join('')}
        <button class="btn btn-sm ${isShortlisted ? 'btn-accent' : 'btn-primary'}" data-shortlist="${restaurant.id}">
          ${isShortlisted ? '✓ In Picks' : '+ Add to Picks'}
        </button>
      </div>
    </article>
  `;
  
  return html;
}

function renderRestaurants() {
  const filtered = getFilteredRestaurants();
  
  if (filtered.length === 0) {
    elements.restaurantList.innerHTML = '';
    elements.noResults.hidden = false;
    elements.resultsCount.textContent = 'No restaurants match your filters';
  } else {
    elements.noResults.hidden = true;
    elements.restaurantList.innerHTML = filtered
      .map((r, i) => {
        const card = renderRestaurantCard(r);
        // Add staggered animation delay
        return card.replace('class="restaurant-card"', `class="restaurant-card" style="animation-delay: ${i * 0.05}s"`);
      })
      .join('');
    elements.resultsCount.textContent = `Showing ${filtered.length} restaurant${filtered.length !== 1 ? 's' : ''}`;
  }
  
  // Attach event listeners
  attachCardListeners();
}

function renderSpotlight() {
  const featured = restaurants.find(r => r.featured);
  if (featured) {
    elements.spotlightCard.innerHTML = renderRestaurantCard(featured, true);
    attachCardListeners(elements.spotlightCard);
  }
}

function renderFilterChips() {
  // Get unique tags from all restaurants
  const tagCounts = {};
  restaurants.forEach(r => {
    r.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  
  // Show only tags that appear in 2+ restaurants, sorted by count
  const popularTags = Object.entries(tagCounts)
    .filter(([_, count]) => count >= 2)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([tag]) => tag);
  
  elements.filterChips.innerHTML = popularTags.map(tag => `
    <button 
      class="filter-chip ${state.activeFilters.includes(tag) ? 'active' : ''}" 
      data-filter="${tag}"
      aria-pressed="${state.activeFilters.includes(tag)}"
    >${tag}</button>
  `).join('');
  
  // Update active filters display
  if (state.activeFilters.length > 0 || state.searchQuery) {
    const parts = [];
    if (state.searchQuery) parts.push(`"${state.searchQuery}"`);
    if (state.activeFilters.length > 0) parts.push(state.activeFilters.join(', '));
    elements.activeFilters.innerHTML = `Filtering: ${parts.join(' + ')} <button class="btn btn-sm btn-outline" id="clear-all-filters">Clear</button>`;
    document.getElementById('clear-all-filters')?.addEventListener('click', clearAllFilters);
  } else {
    elements.activeFilters.innerHTML = '';
  }
  
  // Attach chip listeners
  elements.filterChips.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const filter = chip.dataset.filter;
      if (state.activeFilters.includes(filter)) {
        state.activeFilters = state.activeFilters.filter(f => f !== filter);
      } else {
        state.activeFilters.push(filter);
      }
      renderFilterChips();
      renderRestaurants();
    });
  });
}

function renderShortlist() {
  const count = state.shortlist.length;
  elements.shortlistCount.textContent = count;
  
  if (count === 0) {
    elements.shortlistEmpty.hidden = false;
    elements.shortlistList.innerHTML = '';
    elements.shortlistActions.hidden = true;
  } else {
    elements.shortlistEmpty.hidden = true;
    elements.shortlistActions.hidden = false;
    
    elements.shortlistList.innerHTML = state.shortlist.map(id => {
      const restaurant = restaurants.find(r => r.id === id);
      if (!restaurant) return '';
      return `
        <li class="shortlist-item">
          <span>${restaurant.emoji} ${escapeHtml(restaurant.name)}</span>
          <button data-remove="${id}" aria-label="Remove ${restaurant.name} from shortlist">×</button>
        </li>
      `;
    }).join('');
    
    // Attach remove listeners
    elements.shortlistList.querySelectorAll('[data-remove]').forEach(btn => {
      btn.addEventListener('click', () => {
        toggleShortlist(btn.dataset.remove);
      });
    });
  }
}

// =============================================================================
// SHORTLIST FUNCTIONS
// =============================================================================
function toggleShortlist(restaurantId) {
  const index = state.shortlist.indexOf(restaurantId);
  if (index > -1) {
    state.shortlist.splice(index, 1);
  } else {
    state.shortlist.push(restaurantId);
  }
  saveState();
  renderShortlist();
  renderRestaurants();
  renderSpotlight();
}

function clearAllFilters() {
  state.activeFilters = [];
  state.searchQuery = '';
  elements.searchInput.value = '';
  renderFilterChips();
  renderRestaurants();
}

function randomPick() {
  if (state.shortlist.length === 0) return;

  const shortlistRestaurants = state.shortlist
    .map(id => restaurants.find(r => r.id === id))
    .filter(Boolean);

  if (shortlistRestaurants.length === 0) return;

  stopRandomRoll();
  openModal(elements.randomModal);

  const renderWinner = (restaurant) => {
    elements.randomResult.innerHTML = `
      <h3>🎲 The Pick Is In!</h3>
      <p class="winner-name">${restaurant.emoji} ${escapeHtml(restaurant.name)}</p>
      <p>${escapeHtml(restaurant.shortWhy)}</p>
      <div class="winner-actions">
        ${restaurant.links.maps ? `<a href="${restaurant.links.maps}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">📍 Get Directions</a>` : ''}
        <button class="btn btn-secondary" id="spin-again">🔄 Roll Again</button>
        ${restaurant.links.yelp ? `<a href="${restaurant.links.yelp}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">⭐ Yelp Reviews</a>` : ''}
      </div>
    `;

    document.getElementById('spin-again')?.addEventListener('click', randomPick);
  };

  if (shortlistRestaurants.length === 1) {
    renderWinner(shortlistRestaurants[0]);
    return;
  }

  elements.randomResult.innerHTML = `
    <h3>🎲 Rolling...</h3>
    <div class="dice-stage" aria-hidden="true">
      <div class="die">🎲</div>
      <div class="die">🎲</div>
    </div>
    <p class="roll-name">Picking between favorites...</p>
  `;

  const rollName = elements.randomResult.querySelector('.roll-name');
  let lastIndex = -1;

  rollTimer = setInterval(() => {
    if (!rollName) return;
    let nextIndex = Math.floor(Math.random() * shortlistRestaurants.length);
    if (shortlistRestaurants.length > 1) {
      while (nextIndex === lastIndex) {
        nextIndex = Math.floor(Math.random() * shortlistRestaurants.length);
      }
    }
    lastIndex = nextIndex;
    const candidate = shortlistRestaurants[nextIndex];
    rollName.textContent = `${candidate.emoji} ${candidate.name}`;
  }, 90);

  rollTimeout = setTimeout(() => {
    stopRandomRoll();
    const finalWinner = shortlistRestaurants[Math.floor(Math.random() * shortlistRestaurants.length)];
    renderWinner(finalWinner);
  }, 1600);
}

function stopRandomRoll() {
  if (rollTimer) {
    clearInterval(rollTimer);
    rollTimer = null;
  }
  if (rollTimeout) {
    clearTimeout(rollTimeout);
    rollTimeout = null;
  }
}

// =============================================================================
// QUIZ FUNCTIONS
// =============================================================================
function startQuiz() {
  state.quizAnswers = {};
  state.quizStep = 0;
  elements.quizResults.hidden = true;
  elements.quizQuestions.hidden = false;
  renderQuizQuestion();
  openModal(elements.quizModal);
}

function renderQuizQuestion() {
  const question = quizQuestions[state.quizStep];
  if (!question) {
    showQuizResults();
    return;
  }
  
  // Update progress bar
  const progress = ((state.quizStep) / quizQuestions.length) * 100;
  elements.quizProgress.querySelector('.quiz-progress-bar').style.width = `${progress}%`;
  elements.quizProgress.setAttribute('aria-valuenow', state.quizStep);
  
  elements.quizQuestions.innerHTML = `
    <div class="quiz-question">
      <h3>${question.question}</h3>
      <div class="quiz-options" role="radiogroup" aria-label="${question.question}">
        ${question.options.map((opt, i) => `
          <button 
            class="quiz-option" 
            data-question="${question.id}" 
            data-value='${JSON.stringify(opt.value)}'
            role="radio"
            aria-checked="false"
          >
            <span class="quiz-option-icon">${opt.icon}</span>
            <span>${escapeHtml(opt.label)}</span>
          </button>
        `).join('')}
      </div>
      <div class="quiz-nav">
        ${state.quizStep > 0 ? '<button class="btn btn-outline" id="quiz-back">← Back</button>' : '<span></span>'}
        <span class="quiz-step">${state.quizStep + 1} of ${quizQuestions.length}</span>
      </div>
    </div>
  `;
  
  // Attach option listeners
  elements.quizQuestions.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const questionId = btn.dataset.question;
      const value = JSON.parse(btn.dataset.value);
      state.quizAnswers[questionId] = value;
      
      // Visual feedback
      elements.quizQuestions.querySelectorAll('.quiz-option').forEach(b => {
        b.classList.remove('selected');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('selected');
      btn.setAttribute('aria-checked', 'true');
      
      // Move to next question after brief delay
      setTimeout(() => {
        state.quizStep++;
        renderQuizQuestion();
      }, 300);
    });
  });
  
  // Back button
  document.getElementById('quiz-back')?.addEventListener('click', () => {
    state.quizStep--;
    renderQuizQuestion();
  });
}

function calculateQuizScores() {
  const scores = restaurants.map(r => {
    let score = 0;
    const matchReasons = [];
    
    // Vibe matching
    if (state.quizAnswers.vibe) {
      const vibeMatch = state.quizAnswers.vibe.some(v => r.quizTraits.vibe.includes(v));
      if (vibeMatch) {
        score += 25;
        matchReasons.push('Matches your vibe');
      }
    }
    
    // Craving matching
    if (state.quizAnswers.craving) {
      const cravingMatch = state.quizAnswers.craving.some(c => r.quizTraits.craving.includes(c));
      if (cravingMatch) {
        score += 30;
        matchReasons.push('Serves what you\'re craving');
      }
    }
    
    // Hunger level matching
    if (state.quizAnswers.hunger) {
      const hungerMatch = state.quizAnswers.hunger.some(h => r.quizTraits.hunger.includes(h));
      if (hungerMatch) {
        score += 20;
        matchReasons.push('Right portion size for your appetite');
      }
    }
    
    // Time matching
    if (state.quizAnswers.time) {
      const timeMatch = state.quizAnswers.time.some(t => r.quizTraits.time.includes(t));
      if (timeMatch) {
        score += 15;
        matchReasons.push('Open when you want to eat');
      }
    }
    
    // Surprise factor
    if (state.quizAnswers.surprise === true && r.quizTraits.surprise) {
      score += 10;
      matchReasons.push('Unique local find');
    } else if (state.quizAnswers.surprise === false && !r.quizTraits.surprise) {
      score += 5;
      matchReasons.push('Reliable classic choice');
    }
    
    return { restaurant: r, score, matchReasons };
  });
  
  // Sort by score descending
  scores.sort((a, b) => b.score - a.score);
  
  return scores;
}

function showQuizResults() {
  // Update progress to 100%
  elements.quizProgress.querySelector('.quiz-progress-bar').style.width = '100%';
  elements.quizProgress.setAttribute('aria-valuenow', quizQuestions.length);
  
  const scores = calculateQuizScores();
  const top3 = scores.slice(0, 3);
  
  elements.quizQuestions.hidden = true;
  elements.quizResults.hidden = false;
  
  elements.quizResults.innerHTML = `
    <div class="quiz-results-header">
      <h3>🎯 Your Top Matches!</h3>
      <p>Based on your answers, here are your best picks:</p>
    </div>
    
    ${top3.map((result, i) => `
      <div class="quiz-result-card ${i === 0 ? 'top-pick' : ''}">
        <p class="result-name">${result.restaurant.emoji} ${escapeHtml(result.restaurant.name)}</p>
        <p class="result-score">${result.score}% match</p>
        <ul class="result-reasons">
          ${result.matchReasons.map(r => `<li>${escapeHtml(r)}</li>`).join('')}
        </ul>
        <div class="result-actions">
          ${result.restaurant.links.maps ? `<a href="${result.restaurant.links.maps}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">📍 Maps</a>` : ''}
          ${result.restaurant.phone ? `<a href="tel:${result.restaurant.phone.replace(/\D/g, '')}" class="btn btn-sm btn-outline">📞 Call</a>` : ''}
          <button class="btn btn-sm btn-primary" data-add-shortlist="${result.restaurant.id}">
            ${state.shortlist.includes(result.restaurant.id) ? '✓ In Picks' : '+ Add to Picks'}
          </button>
        </div>
      </div>
    `).join('')}
    
    <div class="quiz-results-footer">
      <button class="btn btn-secondary" id="retake-quiz">🔄 Retake Quiz</button>
      <button class="btn btn-outline" id="close-quiz-results">Browse All</button>
    </div>
  `;
  
  // Attach listeners
  elements.quizResults.querySelectorAll('[data-add-shortlist]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.addShortlist;
      if (!state.shortlist.includes(id)) {
        toggleShortlist(id);
        btn.textContent = '✓ In Picks';
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-accent');
      }
    });
  });
  
  document.getElementById('retake-quiz')?.addEventListener('click', startQuiz);
  document.getElementById('close-quiz-results')?.addEventListener('click', () => {
    closeModal(elements.quizModal);
    document.getElementById('restaurants').scrollIntoView({ behavior: 'smooth' });
  });
}

// =============================================================================
// MODAL FUNCTIONS
// =============================================================================
function openModal(modal) {
  modal.hidden = false;
  modal.querySelector('.modal-content')?.focus();
  document.body.style.overflow = 'hidden';
  
  // Trap focus
  modal.addEventListener('keydown', trapFocus);
}

function closeModal(modal) {
  if (modal === elements.randomModal) {
    stopRandomRoll();
  }
  modal.hidden = true;
  document.body.style.overflow = '';
  modal.removeEventListener('keydown', trapFocus);
}

function trapFocus(e) {
  if (e.key !== 'Tab') return;
  
  const modal = e.currentTarget;
  const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

// =============================================================================
// EVENT LISTENERS
// =============================================================================
function attachCardListeners(container = document) {
  // Favorite buttons
  container.querySelectorAll('.card-favorite').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleShortlist(btn.dataset.id);
    });
  });
  
  // Add to picks buttons
  container.querySelectorAll('[data-shortlist]').forEach(btn => {
    btn.addEventListener('click', () => {
      toggleShortlist(btn.dataset.shortlist);
    });
  });
}

function setupEventListeners() {
  // Sticky nav visibility
  let lastScroll = 0;
  const heroHeight = document.querySelector('.hero')?.offsetHeight || 500;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > heroHeight) {
      elements.miniNav.classList.add('visible');
    } else {
      elements.miniNav.classList.remove('visible');
    }
    
    lastScroll = currentScroll;
  }, { passive: true });
  
  // Quiz buttons
  elements.takeQuizBtn?.addEventListener('click', startQuiz);
  elements.miniQuizBtn?.addEventListener('click', startQuiz);
  
  // Browse button
  elements.browseBtn?.addEventListener('click', () => {
    document.getElementById('restaurants').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Shortlist button (scroll to section)
  elements.miniShortlistBtn?.addEventListener('click', () => {
    document.getElementById('shortlist-section').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Search
  elements.searchInput?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim();
    renderFilterChips();
    renderRestaurants();
  });
  
  // Sort
  elements.sortSelect?.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderRestaurants();
  });
  
  // Clear filters
  elements.clearFiltersBtn?.addEventListener('click', clearAllFilters);
  
  // Random pick
  elements.randomPickBtn?.addEventListener('click', randomPick);
  
  // Clear shortlist
  elements.clearShortlistBtn?.addEventListener('click', () => {
    state.shortlist = [];
    saveState();
    renderShortlist();
    renderRestaurants();
    renderSpotlight();
  });
  
  // Modal close buttons
  elements.quizCloseBtn?.addEventListener('click', () => closeModal(elements.quizModal));
  elements.randomCloseBtn?.addEventListener('click', () => closeModal(elements.randomModal));
  
  // Close modals on backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', () => {
      closeModal(backdrop.closest('.modal'));
    });
  });
  
  // Close modals on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal:not([hidden])').forEach(modal => {
        closeModal(modal);
      });
    }
  });
}

// =============================================================================
// INITIALIZATION
// =============================================================================
function init() {
  renderSpotlight();
  renderFilterChips();
  renderRestaurants();
  renderShortlist();
  setupEventListeners();
  
  console.log('🍽️ Eden Restaurant Picker initialized!');
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
