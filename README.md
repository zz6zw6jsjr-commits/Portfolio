# Anika Sharma — Personal Portfolio & Research Showcase

An editorial, responsive, craft-focused personal portfolio website designed for a student developer exploring frontend engineering, quantitative alpha research on **WorldQuant BRAIN**, and disciplined software craftsmanship.

---

## 🎨 Visual Identity & Design System

The visual design is inspired by high-end typography publications, scientific journals, and developer portfolios:

- **Warm Off-White Canvas (`#F5F1E8`):** Tactile paper tone providing natural contrast without harsh screen glare.
- **Deep Slate/Blue-Green Text (`#233940`):** High legibility and contrast meeting WCAG AA standards.
- **Terracotta Accent (`#CB593F`):** Warm accent for primary actions, badges, and focal points.
- **Forest Green Accent (`#385451`):** Grounded secondary accent for quantitative metrics, status indicators, and live tags.
- **Editorial Typography Pairing:**
  - **Headings:** `Fraunces` — dynamic, elegant serif with contemporary editorial weight.
  - **Body:** `DM Sans` — clear, approachable, legible grotesque sans-serif.
  - **Technical Labels & Data:** `DM Mono` — structured monospace for code, metrics, and tags.

---

## 🚀 Quick Start / How to Run

Because this site is built using modern web standards (Semantic HTML5, CSS Custom Properties, and native ES Modules), it requires **zero build steps** and runs instantly.

### Running with Python (Recommended & Built-in):
```bash
# In the portfolio root directory:
python3 -m http.server 3000
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Running with VS Code Live Server:
Right-click `index.html` and select **"Open with Live Server"**.

---

## 📂 Project Architecture

```
Portfolio/
├── index.html                 # Semantic, accessible HTML structure
├── package.json               # Project manifest & npm scripts
├── README.md                  # Documentation and customization guide
├── public/
│   └── favicon.svg            # Custom SVG monogram favicon (#CB593F & #233940)
└── src/
    ├── main.js                # Modular JS: Navigation, Alpha simulator, Modals, Clipboard
    ├── data/
    │   └── portfolioData.js   # ⭐ Centralized single-source-of-truth data configuration
    └── styles/
        ├── main.css           # Master stylesheet entry point
        ├── variables.css      # Design tokens (colors, fonts, spacing, shadows)
        ├── reset.css          # Modern CSS reset & focus states
        ├── typography.css     # Fraunces / DM Sans / DM Mono typographic hierarchy
        ├── layout.css         # Responsive container, sticky nav, mobile drawer
        ├── components.css     # Buttons, editorial hero specimen, cards, forms, modals
        └── animations.css     # Subtle micro-interactions and intersection reveals
```

---

## ⚙️ Customization Guide

All personal information, project descriptions, skills, and links can be customized in one single file:
👉 **`src/data/portfolioData.js`**

### 1. Update Bio & Headline
Open `src/data/portfolioData.js` and modify the `personal` object:
```javascript
personal: {
  name: "Your Name",
  role: "Your Role / Degree",
  location: "Your City",
  headline: "Building at the intersection of code, data & markets.",
  shortBio: "..."
}
```

### 2. Update Contact Details & Links
In `src/data/portfolioData.js`:
```javascript
contact: {
  email: "your.name@example.com",
  links: [
    { platform: "GitHub", handle: "github.com/yourusername", url: "https://github.com/..." },
    { platform: "LinkedIn", handle: "linkedin.com/in/yourusername", url: "https://linkedin.com/in/..." }
  ]
}
```

### 3. Add or Edit Projects & Alphas
Modify the `projects` array in `src/data/portfolioData.js` to add your own repositories or WorldQuant BRAIN alphas.

---

## 🧪 Interactive Highlights

1. **WorldQuant BRAIN Alpha Specimen & Simulator:**
   - Features a real formula: `rank(ts_decay_linear(returns(close, 5), d)) - rank(vwap / close)`.
   - Users can drag the **Linear Decay Window** slider (4d to 28d) to dynamically watch simulated Sharpe, Fitness, Turnover, and the SVG equity curve recalculate in real time.
2. **Project Deep-Dive Modals:**
   - Click "Inspect Details" or "Inspect Methodology" on any project card to view an accessible breakdown of engineering decisions, backtest assumptions, and git conventions.
3. **One-Click Email Copy with Toast Notification:**
   - Click "Copy Email" to copy the email address to your clipboard with non-intrusive visual confirmation.
4. **Accessible Navigation:**
   - Smooth scrolling, sticky navigation with active section scroll-spy, and a fully keyboard-accessible mobile drawer.

---

## ♿ Accessibility & Performance

- **WCAG AA Compliant:** High-contrast color ratios between `#233940`, `#385451`, `#CB593F`, and `#F5F1E8`.
- **Keyboard Navigable:** Visible `:focus-visible` ring indicators, `aria-expanded` toggles, and Escape key handling for dialogs and drawers.
- **Prefers-Reduced-Motion:** Respects operating system motion reduction settings.
- **Lightweight & Fast:** Zero heavy framework runtimes for sub-second page loads.

