# Anika Sharma — Pure Vanilla HTML & CSS Portfolio

A modern, responsive, editorial personal portfolio website built with **100% pure vanilla HTML5 and CSS3**. Zero JavaScript required, zero npm dependencies, and zero build steps.

---

## 🎨 Design Philosophy & Color Palette

- **Warm Off-White Canvas (`#F5F1E8`):** Tactile paper tone providing natural contrast without harsh screen glare.
- **Deep Slate / Dark Blue-Green Text (`#233940`):** High legibility and contrast meeting WCAG AA standards.
- **Terracotta Accent (`#CB593F`):** Warm accent for primary actions, badges, and focal points.
- **Forest Green Accent (`#385451`):** Secondary accent for quantitative metrics, status indicators, and live tags.
- **Editorial Typography:**
  - **Headings:** `Fraunces` (Editorial serif)
  - **Body:** `DM Sans` (Clean modern sans-serif)
  - **Technical Labels & Data:** `DM Mono` (Monospace for code and metrics)

---

## 📂 Project Architecture

```
Portfolio/
├── index.html       # Complete semantic HTML5 structure with all content
├── style.css        # Clean, modular CSS (Tokens, Grid, Typography, Components)
├── favicon.svg      # Editorial monogram vector favicon
└── README.md        # Documentation and customization guide
```

---

## 🚀 How to Run & View

Because this website uses 100% pure HTML and CSS:

### Option 1: Double Click `index.html`
Simply double-click `index.html` in your file explorer / macOS Finder. It opens instantly in your default web browser!

### Option 2: Run with Python (Optional Local Server)
```bash
python3 -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 3: VS Code Live Server
Right-click `index.html` in VS Code and click **"Open with Live Server"**.

---

## ✏️ How to Customize

All content is directly editable in **`index.html`**:
- **Personal Details & Bio:** Edit the Hero section (`<h1 class="hero-headline">` and `<p class="lead-text">`).
- **Projects & Research:** Edit the project cards in `#projects`. Clickable deep dives use semantic `<details>` and `<summary>` tags that expand without requiring JavaScript!
- **Skills:** Add or modify skills in the `#skills` section.
- **Contact Email & Links:** Update the email address and your GitHub / LinkedIn links in the `#contact` section.
- **Colors & Spacing:** Easily adjust design variables at the top of **`style.css`** under `:root`.
