# The Northern | Grand Hotel & Safari Sanctuary

A bespoke, prestigious multi-page website built with **Astro** and **Tailwind CSS** for **The Northern**, a luxury hotel and safari sanctuary in Northern Uganda (Gulu).

---

## Architectural & Design Highlights

- **Aesthetic Direction**: Understated, prestigious quiet luxury inspired by iconic global retreats (Aman, Belmond, Singita). Deep obsidian and warm charcoal surfaces, champagne gold accents, warm sand typography, and atmospheric architectural photography.
- **Strict Copy Standards**:
  - Zero emojis across all pages and components.
  - Zero em dashes (`—` or `–`) in copy, relying on clean grammatical punctuation.
  - Dignified, human editorial copy tailored to Northern Uganda heritage, volcanic stone masonry, and savanna wilderness.
- **Dynamic Accommodations Showcase**:
  - Replaces basic card grids with an editorial split magazine presentation.
  - Interactive room category tabs with live animated indicators.
  - Floating glassmorphic HUD displaying square meters, orientation, and direct nightly tariffs.
  - Interactive in-card thumbnail gallery switchers.
  - Architectural specification grids (balcony dimensions, butler service levels, climate tech).
- **Glassmorphism & Layered Visual Depth**:
  - Frosted translucent glass panels (`backdrop-filter: blur(18px)` with subtle gold-tinted borders).
  - Background imagery with dark vignettes and ambient radial illumination.
- **Flawless Mobile & Tablet Optimization**:
  - Sticky glassmorphic navigation with scroll detection.
  - Full-screen mobile navigation drawer with backdrop blur and smooth entrance transitions.
  - Touch-friendly action buttons and horizontally scrollable filter selectors.
- **Interactive Google Maps Integration**:
  - Stylized interactive Google Maps embed with GPS coordinates (`2.7746° N, 32.2990° E`), elevation notes, and direct external maps trigger.
  - Detailed private transfer logistics (air charter from Entebbe, estate helipad, chauffeured 4x4 cruiser via Karuma Parkway).
- **Interactive Sanctuary Reservation Engine**:
  - Quick-search booking bar on the hero section.
  - Global glassmorphic reservation modal accessible from any page.
  - Dedicated full-page reservation engine (`/reserve`) with real-time tariff calculations and instant reference confirmation.

---

## Page Architecture

1. **Home (`/`)**: Hero with cinematic background and quick booking bar, dynamic room showcase, architectural stone heritage narrative, dining preview, bespoke expeditions, interactive Google Map, and testimonials.
2. **Accommodations (`/rooms`)**: Comprehensive folio of suites and private villas with category filters (All, Suites, Villas, Executive) and alternating editorial spreads.
3. **Dining & Lounges (`/dining`)**: The Savanna Hearth, Churchill Terrace & Bar, The Pool Pavilion, tasting menus, and table reservation inquiries.
4. **Safari & Excursions (`/experiences`)**: Private air charters to Kidepo Valley, Aruu Cascades treks, Acholi artisanal workshops, night astronomy, and custom 4x4 fleet specifications.
5. **Gatherings & Events (`/events`)**: The Grand Karuma Ballroom, The Acholi Executive Boardroom, The Sunken Pavilion Gardens, capacity matrices, and private RFP form.
6. **Location & Concierge (`/contact`)**: Interactive Google Map, GPS coordinates, arrival routes, 24-hour concierge contacts, and secure communication portal.
7. **Direct Reservations (`/reserve`)**: Step-by-step reservation workflow with real-time rate calculation and butler concierge dispatch.

---

## Development & Build Commands

```bash
# Run local development server
npm run dev

# Build production static bundle
npm run build

# Preview production build locally
npm run preview
```
