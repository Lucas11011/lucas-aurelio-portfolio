# Lucas Aurelio Portfolio

Modern, animated single-page portfolio highlighting frontend, UX, and product design work. Built with React, ScrollReveal, VanillaTilt, and a custom cursor trail for extra polish.

## Highlights

- **Two-tier tab navigation** with animated underlines for quick jumps between Home/Skills/Contact and Experience/Projects/UX/Certifications
  - `useRef` + dynamic inline styles move the underline to the active button on every tab change.
- **Theming and accessibility**: dark mode powered by CSS custom properties, icon inversion, and reduced-motion friendly transitions
  - Toggling a `dark-mode` class swaps CSS variables and applies icon filter adjustments globally.
- **Motion-rich storytelling**: ScrollReveal sequences, carousel sliders, 3D hero image tilt, and cursor trail follow effect
  - ScrollReveal `useEffect` hooks, CSS keyframes, and VanillaTilt animate sections, cards, and the hero image.
- **Interactive CTAs**: email copy-to-clipboard, downloadable resume, and external link affordances
  - Clipboard API handles email copy, anchor tags expose `download` attributes, and hover states show link icons.
- **Responsive layout** focused on mobile first, with tailored typography and spacing at common breakpoints
  - Component styles rely on CSS custom properties plus breakpoint-specific flex/grid adjustments.

## Sections Overview

- **Home**: Gradient last-name hero, product-focused summary, location chip, “My Focus” tech row, and pill-shaped social/resume CTAs.
- **Skills**: Categorized skills grid (see `src/components/Skills.js`) fed by plain arrays for easy edits.
- **Contact**: Carded layout with light-blue links, copy-to-clipboard button, and responsive stacking.
- **Experience & Projects**: Dual carousels with arrow buttons, pagination dots, swipe gestures, and sequential slide-in/out animations.
- **Cursor**: Lightweight custom cursor trail rendered via DOM nodes to add ambient motion across the site.

## Tech Stack

- **Runtime**: React 19, React Scripts 5
- **Styling**: Vanilla CSS modules + CSS variables
- **Animation libraries**: ScrollReveal for scroll-triggered sequences, VanillaTilt for hero depth effect
- **Tooling**: npm scripts (`start`, `build`, `test`) and CRA development server

## Project Structure

```
src/
├── components/     # UI sections, navigation, cursor
├── css/            # One stylesheet per component for scoped styles
├── icons/          # SVG iconography
├── imgs/           # Optimized raster assets
└── resume/         # Downloadable PDF
```

## Getting Started

### Prerequisites

- Node.js 18+ (tested on LTS)
- npm 9+

### Installation & Scripts

```bash
npm install        # install dependencies
npm start          # run dev server at http://localhost:3000
npm run build      # production bundle in build/
npm test           # CRA test runner
```

Hot reloading is enabled out of the box via `react-scripts start`.

## Development Notes

### Animated Tab Underlines
`useRef` stores button nodes so the underline can sync to width/position on every tab change:

```javascript
const activeButton = topTabsRef.current[activeTopTab];
setTopUnderlineStyle({
  width: `${activeButton.offsetWidth}px`,
  left: `${activeButton.offsetLeft}px`
});
```

### ScrollReveal Sequences
Sections register reveal animations inside `useEffect`, giving staggered enter transitions and keeping animations in sync with tab swaps.

### Top-Tab Fade
Each Home/Skills/Contact panel mounts inside a keyed wrapper with the `.top-content-fade` animation, producing a short opacity/translate reveal whenever the active tab changes.

### Cursor Trail
`Cursor` component emits dots at the previous pointer coordinates every ~150 ms (or when the pointer travels >14px), interpolates in-between dots for quick movements, and schedules fade/removal timers for each node to avoid DOM leaks.

### Theming
The entire palette lives in `:root` and `.dark-mode` tokens (`src/App.css`). Toggling the body class flips the experience instantly without recalculating styles in JS.

### Carousels (Experience & Projects)
- Buttons call a guarded transition helper that plays exit/enter animations (`slide-out-*` / `slide-in-*`) defined in the respective CSS files.
- `aria-live="polite"` containers announce slide changes for assistive tech.
- Swipe gestures are supported on touch devices via `onTouchStart`/`onTouchEnd` handlers.

## Customization

- **Content**: update the component data arrays (skills, projects, experience) directly in their respective files.
- **Carousels**: edit the `experiences` or `projects` arrays and adjust SVG/icon imports at the top of each component.
- **Colors/Fonts**: adjust CSS variables in `src/App.css`; the change propagates to every component.
- **Assets**: drop new icons/images in `src/icons` or `src/imgs` and import them where needed.
- **Contact links**: tweak card colors and link hues inside `src/css/Contact.css` to match new branding.

## Deployment

The default CRA build outputs to `build/`. Deploy the folder to any static host (Vercel, Netlify, GitHub Pages). Example Vercel flow:

1. `npm run build`
2. Upload `build/` or connect the repo and set the build command to `npm run build` with output `build`.

## Contact

- **Email**: lucas.aurelio.n@gmail.com
- **LinkedIn**: [Lucas Aurelio](https://www.linkedin.com/in/lucas-aurelio-n)
- **GitHub**: [@Lucas11011](https://github.com/Lucas11011)



