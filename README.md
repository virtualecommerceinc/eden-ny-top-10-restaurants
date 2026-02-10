# 🍽️ Eden, NY Restaurant Picker

A beautiful, interactive guide to the best restaurants in Eden, NY. Features a "Dinner Decider" quiz, shortlist builder, animated background, and mobile-first design.

**Live Site:** https://virtualecommerceinc.github.io/eden-ny-top-10-restaurants/

![Screenshot](screenshot.png)

## ✨ Features

- **Dinner Decider Quiz** - 5 quick questions to find your perfect restaurant match
- **Shortlist Builder** - Save your top picks and randomly select one
- **Animated Background** - Multi-layer sky/clouds/trees/grass (CSS only, respects reduced motion)
- **Filter & Search** - Find restaurants by name, category, or tags
- **Mobile-First Design** - Responsive layout that works on all devices
- **Accessible** - ARIA labels, keyboard navigation, skip links, screen reader friendly

## 📁 Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure (no hardcoded restaurant data!) |
| `styles.css` | All styles including animated background |
| `script.js` | Restaurant data + all interactive features |
| `README.md` | This file |

## 🔧 How to Edit

### Adding/Editing Restaurants

All restaurant data lives in **`script.js`** in the `restaurants` array. Each restaurant object:

```javascript
{
  id: 'unique-id',           // URL anchor, must be unique
  name: 'Restaurant Name',
  category: 'Category',
  emoji: '🍕',               // Displayed with category
  address: 'Full address',
  city: 'Eden',              // City name (affects "Near Eden" label)
  phone: '(716) 555-1234',   // Or null if unknown
  hours: 'Hours description',
  tags: ['tag1', 'tag2'],    // For filtering (lowercase)
  vibes: ['casual', 'family'], // General atmosphere
  priceLevel: 2,             // 1-3 (not currently displayed)
  shortWhy: 'Brief quote about why it\'s great.',
  whyTop10: [                // Bullet points (not currently displayed)
    'Reason 1',
    'Reason 2'
  ],
  links: {
    maps: 'https://...',     // Google Maps link
    yelp: 'https://...',     // Optional
    website: 'https://...',  // Optional
    // Add other source links as needed
  },
  quizTraits: {              // IMPORTANT: Affects quiz scoring
    vibe: ['casual', 'family'],
    craving: ['pizza', 'seafood'],
    hunger: ['medium', 'large'],
    time: ['lunch', 'dinner'],
    surprise: false          // true = unique find, false = classic
  },
  featured: false            // Set ONE restaurant to true for spotlight
}
```

### Quiz Scoring System

The quiz is **100% honest** - scores are calculated based on trait matching, not rigged results.

| Question | Max Points | How It Works |
|----------|------------|--------------|
| Vibe | 25 pts | Match user's vibe to restaurant vibes |
| Craving | 30 pts | Match food type preferences |
| Hunger | 20 pts | Match portion size expectations |
| Time | 15 pts | Match meal timing |
| Surprise | 10 pts | Bonus for unique finds (or classics) |

**Total: 100 points possible**

Top 3 restaurants by score are shown in results with "Why matched" bullets.

### Editing the Quiz

Quiz questions are in `script.js` in the `quizQuestions` array:

```javascript
{
  id: 'vibe',                    // Matches quizTraits key
  question: 'Question text?',
  options: [
    { icon: '🏠', label: 'Option text', value: ['trait1', 'trait2'] }
  ]
}
```

### Adding Filter Tags

Tags are auto-generated from restaurant data. To add a new tag category:

1. Add the tag to relevant restaurants' `tags` array
2. Tags appearing in 2+ restaurants automatically show as filter chips

### Changing the Featured Spotlight

Set `featured: true` on ONE restaurant in `script.js`. Currently it's Rayzor's Dawg House (displayed transparently in its own section, not hidden in quiz results).

## 🎨 Styling

### Animated Background

The background uses pure CSS with multiple layers:
- Sky gradient with twinkling stars
- Two cloud layers (back/front) with drift animation
- Tree silhouettes (back/front)
- Grass layer with texture

All animations respect `prefers-reduced-motion` automatically.

### Color Scheme

CSS variables in `styles.css`:

```css
--color-primary: #f59e0b;    /* Amber */
--color-secondary: #3b82f6;  /* Blue */
--color-accent: #ec4899;     /* Pink */
```

## 🚀 Deployment

This site is deployed via **GitHub Pages** from the `main` branch.

1. Make changes to any file
2. Commit and push to `main`
3. GitHub Pages auto-deploys in 1-2 minutes

```bash
git add .
git commit -m "Your change description"
git push origin main
```

## 📋 Sources

Each restaurant was researched using:
- Google Maps reviews
- Yelp listings
- TripAdvisor reviews
- Facebook pages
- Official websites

**Transparency:** Review summaries are compiled from public sources and may change. Always verify current hours and info before visiting.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally (just open `index.html` in a browser)
5. Submit a pull request

## 📄 License

Open for public use. Please link back to this repository if sharing.

---

**Built with ❤️ by [VirtualEcommerceInc](https://github.com/virtualecommerceinc)**
