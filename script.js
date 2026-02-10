// script.js - Restaurant Picker dynamic rendering stub

const restaurants = [
  {
    name: "Eden Seafood & Pizzeria",
    city: "Eden",
    state: "NY",
    zip: "14057",
    addressLine: "8530 N Main St",
    categoryTags: ["Seafood", "Pizza"],
    vibeTags: ["Family-friendly", "Casual"],
    shortWhy: "Fresh seafood, popular pizzas, friendly service.",
    reviewThemes: ["fresh seafood", "casual atmosphere", "family-friendly"],
    links: {
      googleMaps: "https://goo.gl/maps/6wK6Zk3u3h9pGQWj9",
      yelp: "https://www.yelp.com/biz/eden-seafood-and-pizzeria-eden"
    },
    distanceLabel: "Eden"
  },
  // Additional 9 restaurant entries go here...
];

function renderRestaurants() {
  const container = document.getElementById('restaurant-list');
  container.innerHTML = '';
  restaurants.forEach(r => {
    const card = document.createElement('article');
    card.className = 'restaurant-card';
    const title = document.createElement('h2');
    title.textContent = `${r.distanceLabel === 'Eden' ? '' : 'Near Eden: '}${r.name}`;
    card.appendChild(title);
    // Further dynamic rendering logic (details, tags, sources) to be implemented
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderRestaurants();
  // TODO: init filters, shortlist, quiz modal
});
