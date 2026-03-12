AUDIT_MODE: high-fidelity

# SITE DNA — Ship Studio (ship-studio.co)

**URL:** https://www.ship-studio.co/
**Page Title:** Ship — Cohort 1
**OG Description:** Not an accelerator. A working room. Join 12 founders who build in public.
**Total Page Height:** 12,616px
**Viewport Sections:** 6 (`<section>` tags)

---

## Step 1.1 — Macro Page Architecture

**Section Strategy:** The site uses `<section>` tags (6 found). All sections are children of a React root `<div id="root">`. The page uses a single dark blueprint grid background with decorative SVG technical drawings throughout.

```
PAGE ARCHITECTURE: Ship Studio — https://www.ship-studio.co/
Total viewport sections: 6
Decorative Layers: Fixed/absolute blueprint background, diagonal golden momentum line, compass rose indicators
╔══════════════════════════════════════════════════════════════════════════════╗
║  NAV (STICKY)                                    HEIGHT: ~60px             ║
║  BG: transparent (becomes bg-deep-900/80 backdrop-blur on scroll)          ║
║  LAYOUT: flex row, space-between, full-width px-8 py-6                     ║
║  LEFT: MANIFESTO | PROGRAM | MENTORS | APPLY                              ║
║  RIGHT: S1 — 2026                                                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  SECTION 1: HERO                                 HEIGHT: ~100vh (≈1065px)  ║
║  BG: #121212 + SVG grid pattern + blueprint drawings                       ║
║  LAYOUT: centered composition, full-bleed                                  ║
║  CENTER: Large serif "Ship" logo + glowing compass rose (8-point star)      ║
║  SUB: "COHORT 1" italic below logo                                         ║
║  CORNERS: N/S/E/W/NE/NW/SE/SW compass labels in gold                       ║
║  TOP-RIGHT: Decorative compass rose #2 (4-point star, muted)               ║
║  BOTTOM-LEFT: Tagline text, BOTTOM-RIGHT: "HIGH SIGNAL LOW NOISE" + (?)    ║
║  BACKGROUND: Blueprint line-art illustrations (balloon, train, ship, car)   ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  SECTION 2: MANIFESTO (01-04)                    HEIGHT: 3967px            ║
║  BG: same #121212 dark + grid + blueprint drawings                         ║
║  LAYOUT: 4 manifesto blocks stacked vertically, each ~1000px               ║
║  EACH BLOCK: Large serif heading (left-center) + italic body (below/right)  ║
║  GLOWING ICON: Each block has a glowing golden-yellow SVG icon (left/right) ║
║  DIAGONAL LINE: Golden momentum line (#FFB800) cuts diagonally through      ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  SECTION 3: PROGRAM ("Five weeks. One focus.")   HEIGHT: 2817px            ║
║  BG: same dark theme                                                        ║
║  LAYOUT: Large heading top, then 5 week rows (timeline with golden line)    ║
║  EACH ROW: golden dot → WEEK XX label → Serif heading → italic desc → output║
║  LEFT: Vertical golden progress line with dots at each week                 ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  SECTION 4: MENTORS                              HEIGHT: 985px             ║
║  BG: same dark theme, border-t border-white/10                              ║
║  LAYOUT: heading + mentor cards grid                                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  SECTION 5: APPLICATION HERO                     HEIGHT: 1065px            ║
║  BG: same dark + overflow-hidden                                            ║
║  LAYOUT: centered large serif heading "Launch sequence."                    ║
║  SUB: italic body text below heading                                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  SECTION 6: APPLICATION FORM                     HEIGHT: 1604px            ║
║  BG: same dark theme                                                        ║
║  LAYOUT: Form fields centered, max-width constrained                        ║
║  FIELDS: CODENAME + FREQUENCY (2-col) → COORDINATES → THE PAYLOAD (textarea)║
║  CTA: "INITIATE LAUNCH SEQUENCE →" golden button, full-width                ║
║  BELOW: 3-column requirements (Required / Expected / Optional)              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  FOOTER                                          HEIGHT: ~200px            ║
║  LAYOUT: Compass rose icon + copyright + links                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

**OVERLAPPING ELEMENTS:**
- The diagonal golden "momentum line" is absolutely positioned and spans across multiple sections
- Blueprint SVG drawings (balloon, train, ship, car, compass) are positioned as fixed/absolute background elements that persist across sections
- The sticky nav overlays all sections with backdrop-blur on scroll

---

## Step 1.2 — Design Token Extraction

```
DESIGN TOKENS
─────────────────────────────────────────────────────
PALETTE (from Tailwind config + computed):
  background    "Deep Charcoal":     #121212          → body background, section backgrounds
  surface       "Surface":           #1E1E1E          → card fills, elevated surfaces
  deep-900      "Near Black":        #050505          → scrollbar track, deepest elements
  deep-800      "Ink":               #0A0A0A          → deep backgrounds
  deep-700      "Deep":              #121212           → alternate bg reference
  primary       "Pure White":        #FFFFFF           → main heading text, primary content
  secondary     "Silver":            #B0B0B0           → body text, descriptions
  gold-50       "Cream":             #FFFBEB           → lightest gold tint
  gold-100      "Pale Gold":         #FEF3C7           → subtle highlights
  gold-200      "Light Gold":        #FDE68A           → warm accents
  gold-300      "Warm Gold":         #FCD34D           → medium gold
  gold-400      "Base Gold":         #FBBF24           → PRIMARY ACCENT — CTA button, glows, labels
  gold-500      "Amber":             #F59E0B           → hover states
  gold-600      "Deep Amber":        #D97706           → active states
  gold-700      "Bronze":            #B45309           → dark accents
  gold-800      "Dark Bronze":       #92400E           → deep accents
  gold-900      "Chocolate":         #78350F           → darkest warm tone
  gold-950      "Espresso":          #451A03           → deepest warm tone
  grid-line     "Grid Line":         #1A1A1A           → background grid pattern lines
  border-muted  "Ghost Border":      rgba(255,255,255,0.1) → section dividers (border-white/10)
  selection-bg  "Selection":         rgba(255,184,0,0.3)   → text selection highlight
  scrollbar-thumb "Scrollbar":       #333333 → #555555 (hover)

TYPOGRAPHY SCALE:
  Role         | Font Family                          | Weight | Size                | Tracking | Line-Height | Style
  ────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  Hero Logo    | Instrument Serif, Playfair Display    | 400    | ~8rem (128px est.)  | normal   | 1.0         | normal
  Display/H1   | Instrument Serif, Playfair Display    | 400    | ~6rem (96px est.)   | normal   | 1.0         | normal (some italic)
  Sub-Display  | Instrument Serif, Playfair Display    | 400    | ~4rem (64px est.)   | normal   | 1.1         | italic
  Body Serif   | Instrument Serif, Playfair Display    | 400    | 24px                | normal   | 32px        | italic
  Nav/Label    | Inter, sans-serif                     | 500    | 11px                | 0.55px   | normal      | uppercase
  UI Label     | Monospace system stack                | 400    | 10px                | 1px      | normal      | uppercase, gold color
  Button CTA   | Inter, sans-serif                     | 700    | 14px                | 2.8px    | normal      | uppercase
  Week Label   | Inter/Mono                            | 400    | 10-11px             | 1px+     | normal      | uppercase, gold-400
  Body Sans    | Inter, sans-serif                     | 300-400| 16px                | normal   | 1.6         | normal

  ⚑ DRAMA NOTES: The site's typographic drama comes from the EXTREME contrast between:
  - Massive serif Display headings (Instrument Serif, 6-8rem, weight 400, often mixed italic/roman in same line)
  - Tiny monospace labels (10-11px, uppercase, letter-spacing 1px+, gold-colored)
  - The italic serif body text creates a "handwritten journal" intimacy against the brutalist scale of headings
  - Key structural device: Some headings mix ROMAN and ITALIC in the same line (e.g., "Five weeks." roman + "One focus." italic)

FONT IMPORTS:
  - Inter: weights 300, 400, 500, 600
  - Instrument Serif: italic 0 and 1
  - Playfair Display: italic + non-italic, weights 400-700

SPACING GRID: Tailwind defaults. Key observed spacings: py-32, py-48, px-8, gap-8, gap-16
BORDER RADIUS: Mostly sharp/none on sections and containers. rounded on scrollbar thumb (4px).
SHADOW SYSTEM:
  - CTA Button hover: 0 0 50px rgba(255,184,0,0.5) — massive golden glow
  - Compass icons: golden drop-shadow filter glow
TEXTURE:
  - Background grid: linear-gradient pattern (1px #1A1A1A lines, horizontal + vertical)
  - Blueprint SVG drawings: thin stroke, muted gray-gold, technical drafting aesthetic
  - Custom scrollbar: thin 8px, dark track, gray thumb
─────────────────────────────────────────────────────
```

---

## Step 1.3 — Section Blueprints

### SECTION 1: HERO (Compass Rose)

```
SECTION 1: HERO — Compass Rose
Height: 100vh (~1065px) | BG: #121212 + grid-pattern + blueprint SVG drawings | Padding: 0
Content: full-bleed, centered composition
┌────────────────────────────────────────────────────────────────┐
│  ┌─NAV──────────────────────────────────────┐                  │
│  │ MANIFESTO  PROGRAM  MENTORS  APPLY  │  S1 — 2026  │        │
│  └──────────────────────────────────────────┘                  │
│                                                                │
│           [NW]            [N]            [NE]                  │
│                          ╱│╲                     ┌──────────┐  │
│                         ╱ │ ╲                    │ COMPASS  │  │
│                        ╱  │  ╲                   │ ROSE #2  │  │
│           [W] ◄───────○───┼───○───────► [E]      │ (muted)  │  │
│                        ╲  │  ╱     "Ship"        └──────────┘  │
│                         ╲ │ ╱    (large serif)                 │
│                          ╲│╱     "COHORT 1"                    │
│           [SW]            [S]            [SE]    (serif italic) │
│                                                                │
│  ┌─BOTTOM-LEFT────────────────┐  ┌─BOTTOM-RIGHT──────────────┐│
│  │ "A FIVE-WEEK COHORT FOR    │  │            HIGH SIGNAL     ││
│  │ FOUNDERS WHO BELIEVE IN    │  │            LOW NOISE  (?)  ││
│  │ EXECUTION OVER OPTICS."    │  │                            ││
│  └────────────────────────────┘  └────────────────────────────┘│
└────────────────────────────────────────────────────────────────┘
Layout: absolute positioning, compass rose centered in viewport
Background elements: blueprint line-art (hot air balloon left, ship bottom-left, locomotive bottom-right, car bottom-right)
```

```
CONTENT MAP: Section 1
  [nav-link] → "MANIFESTO" | Style: Label | Color: primary | Font: Inter 500 11px uppercase tracking-wide
  [nav-link] → "PROGRAM" | Style: Label | Color: primary | Font: same
  [nav-link] → "MENTORS" | Style: Label | Color: primary | Font: same
  [nav-link] → "APPLY" | Style: Label | Color: primary | Font: same
  [label] → "S1 — 2026" | Style: Label | Color: primary | Font: mono/Inter
  [hero-logo] → "Ship" | Style: Hero Logo | Color: primary | Font: Instrument Serif ~8rem
  [sub-title] → "COHORT 1" | Style: Sub-Display | Color: secondary (muted) | Font: Instrument Serif italic
  [compass-label] → "N" / "S" / "E" / "W" / "NW" / "NE" / "SW" / "SE" | Style: Label | Color: gold-400
  [tagline] → "A FIVE-WEEK COHORT FOR FOUNDERS WHO BELIEVE IN EXECUTION OVER OPTICS." | Style: Label | Color: secondary
  [tagline] → "HIGH SIGNAL LOW NOISE" | Style: Label | Color: secondary
  [button] → "(?)" info toggle | Style: ghost circle | Color: secondary
```

---

### SECTION 2: MANIFESTO (4 Principles — Blocks 01-04)

Each manifesto block follows the same asymmetric layout pattern with 2 text columns and a glowing icon. The golden diagonal "momentum line" cuts through.

#### SECTION 2.1: Principle 01 — "We believe in founders who work"

```
SECTION 2.1: MANIFESTO BLOCK 01
Height: ~1000px | BG: transparent (inherits #121212) | Layout: asymmetric text block
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  "We believe" (large serif, white, ~6rem)                      │
│                "in" (serif italic, gold-400, same line)         │
│                                                                │
│           "founders" (large serif, white, right-aligned ~6rem) │
│                                                                │
│  "who work" (large serif italic, very low opacity ~0.2         │
│              outline/stroke style, NOT filled)                  │
│                                                                │
│  ┌──[NUMBERED LABEL]───────────────────────────────────────┐   │
│  │ "01" (very large serif, low opacity, right side)         │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### SECTION 2.2: Principle 02 — "Execution compounds. Optics don't."

```
SECTION 2.2: MANIFESTO BLOCK 02
Height: ~1000px | BG: transparent | Layout: 2-column asymmetric
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  ┌─LEFT (~30%)──────────┐  ┌─RIGHT (~70%)──────────────────┐  │
│  │  [GLOWING ICON]       │  │  "Execution compounds.        │  │
│  │  Sailboat              │  │   Optics don't."              │  │
│  │  golden-yellow stroke  │  │  (Display serif, ~5rem)       │  │
│  │  glow effect           │  │                               │  │
│  │  within circle          │  │                               │  │
│  │  ~200x200px            │  │  "We ignore vanity metrics..." │  │
│  └───────────────────────┘  │  (Body serif italic, secondary) │  │
│                              └───────────────────────────────┘ │
│                                                                │
│  ═══════════════ GOLDEN DIAGONAL LINE ═══════════════════════  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### SECTION 2.3: Principle 03 — "Distribution is a skill, not a budget line."

```
Same layout pattern as 2.2 but icon is a LOCOMOTIVE (golden stroke, right side)
Heading: "Distribution is a skill, not a budget line."
Body: "Paid ads are for scaling. Organic traction is for validation. We build channels that belong to us, not platforms that rent to us."
```

#### SECTION 2.4: Principle 04 — "Ship in public. Learn in public."

```
Same layout pattern, icon is a 4-POINT COMPASS STAR (golden stroke, left side)
Heading: "Ship in public. Learn in public."
Body: "Secrecy protects bad ideas. Feedback refines good ones. We document the journey to build momentum before the launch."
```

#### SECTION 2.5: Principle 05 — "Honest feedback over polite applause."

```
Same layout pattern, icon is a HOT AIR BALLOON (golden stroke, right side)
Heading: "Honest feedback over polite applause."
Body: "We don't do 'great job' unless it is actually a great job. Radical candor saves time and builds better products."
```

---

### SECTION 3: PROGRAM — "Five weeks. One focus."

```
SECTION 3: PROGRAM
Height: 2817px | BG: transparent (inherits #121212) | Padding: py-32
Content max-width: constrained
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  "Five weeks." (Display serif, ~6rem, white, roman)            │
│  "One focus." (Display serif, ~6rem, lighter/italic)           │
│                                                                │
│  [COMPASS STAR DIVIDER — small 4-point star, centered]          │
│                                                                │
│  ┌─TIMELINE─────────────────────────────────────────────────┐  │
│  │ ●──── WEEK 01                                             │  │
│  │ │     "Foundation"    "Clarify your thesis."    OUTPUT:    │  │
│  │ │     (Display serif)  (Body serif italic)      "One-page  │  │
│  │ │                                                brief..." │  │
│  │ │                                                          │  │
│  │ ●──── WEEK 02                                             │  │
│  │ │     "Distribution"  "Build channels that      OUTPUT:    │  │
│  │ │     (Display serif)  don't require ad spend." "First 100 │  │
│  │ │                                                users..." │  │
│  │ │                                                          │  │
│  │ ●──── WEEK 03                                             │  │
│  │ │     "Momentum"      "Ship publicly.           OUTPUT:    │  │
│  │ │     (Display serif)  Document the journey."   "Launch    │  │
│  │ │                                                seq..."   │  │
│  │ │                                                          │  │
│  │ ●──── WEEK 04                                             │  │
│  │ │     "Signal"        [description]             OUTPUT:    │  │
│  │ │                                               [output]   │  │
│  │ │                                                          │  │
│  │ ●──── WEEK 05                                             │  │
│  │       "Launch"        [description]             OUTPUT:    │  │
│  │                                                 [output]   │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
Layout: Vertical timeline with golden line (left side, 3px wide, gold-400)
        Golden dots (●) at each week node (~12px diameter, solid gold-400)
        Each row: 3-column — Week name (serif ~3rem) | Description (italic serif) | Output (mono/sans)
        "OUTPUT" label above each output text (mono, gold-400, 10px uppercase)
        Gold underline below output text
```

---

### SECTION 5: APPLICATION HERO — "Launch sequence."

```
SECTION 5: APPLICATION HERO
Height: 1065px | BG: #121212 + overflow-hidden | Padding: centered
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│                                                                │
│              "Launch sequence."                                │
│              (Display serif, ~6rem, centered)                  │
│                                                                │
│              "Not an accelerator. Not a course."               │
│              (Body serif italic, secondary)                    │
│              "A working room for builders who..."              │
│                                                                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### SECTION 6: APPLICATION FORM — "Launch Sequence Form"

```
SECTION 6: APPLICATION FORM
Height: 1604px | BG: #121212 | Padding: pt-32
Content max-width: ~700px centered
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  ┌─ROW 1: 2-COLUMN────────────────────────────────────────┐   │
│  │  CODENAME (gold label, mono 10px)  │ FREQUENCY (same)  │   │
│  │  ┌──────────────────┐ ┌────────────────────┐            │   │
│  │  │  Full Name        │ │  Email Address     │            │   │
│  │  │  (input, bg:       │ │  (input, bg:       │           │   │
│  │  │   transparent,     │ │   transparent,     │           │   │
│  │  │   border-b white/20│ │   border-b white/20│           │   │
│  │  │   focus: gold)     │ │   focus: gold)     │           │   │
│  │  └──────────────────┘ └────────────────────┘            │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                │
│  COORDINATES (gold label)                                      │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Twitter / LinkedIn / Portfolio                           │  │
│  │  (input, same style)                                      │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                │
│  THE PAYLOAD (gold label)                                      │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  What are you building? Why now?                          │  │
│  │  (textarea, ~120px height, same border style)             │  │
│  │                                                            │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │          INITIATE LAUNCH SEQUENCE  →                      │  │
│  │  (button: bg gold-400, text black, uppercase,             │  │
│  │   tracking-widest, font-bold 14px, full-width,            │  │
│  │   py-5, hover: glow 0 0 50px rgba(255,184,0,0.5))        │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  ✦ REQUIRED           ✦ EXPECTED           ✦ OPTIONAL    │  │
│  │  Something live.       5-10 hours per       Prior         │  │
│  │  Doesn't have to       week. Non-           experience.   │  │
│  │  be pretty.            negotiable.          We care about │  │
│  │                                             velocity.     │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Step 1.3b — Visual Composition Inventory (Hero)

```
COMPOSITION MAP: Hero — Compass Rose
Element count: 15+ distinct visual objects

CENTER:    8-point compass star (golden-yellow, #FFB800 → #FBBF24 gradient)
           Size: ~500px diameter, Position: centered in viewport, Z-index: front
           Glow: pulsing drop-shadow filter animation, golden glow radiating outward
           Star shape: 4 primary points (N/S/E/W, sharp elongated) + 4 secondary (NE/NW/SE/SW, shorter)
           Lines: thin golden lines from center to edge, diamond-cut pattern

ABOVE:     "Ship" text — large Instrument Serif, ~8rem, white, positioned over center of star
           "COHORT 1" — Instrument Serif italic, ~2rem, muted white/secondary, below "Ship"

LABELS:    8 compass direction labels positioned around the star:
           N (top center), S (bottom center), E (far right), W (far left) — GOLD-400 color, serif
           NE, NW, SE, SW — smaller, more muted, intermediate positions

TOP-RIGHT: Secondary compass rose — 4-point star, ~200px, muted golden/gray tone
           Surrounded by concentric circles and compass ring (thin stroke, very low opacity)
           This is a DECORATIVE BACKGROUND element, NOT interactive

BACKGROUND BLUEPRINT DRAWINGS (positioned absolutely, very low opacity ~0.15-0.25):
  BL-1:    Hot air balloon (line-art, stroke only) — left side, ~mid-height
  BL-2:    Ship/boat (line-art, stroke only) — bottom-left
  BL-3:    Locomotive/train (line-art, stroke only) — bottom-right
  BL-4:    Car/automobile (line-art, stroke only) — bottom-right area
  BL-5:    Geometric construction lines, circles, protractors — scattered

AMBIENT:   Background grid pattern: horizontal + vertical lines, #1A1A1A on #121212
           The grid is subtle and creates a "technical drawing paper" effect
           Small decorative crosshair/plus marks (+) scattered at grid intersections
```

---

## Step 1.4 — Scroll & Entrance Animation Audit

```
ANIMATION: Compass Rose Pulse
Section: 1 (Hero)
Trigger: page-load (continuous)
Library: CSS @keyframes (likely via Tailwind + custom)
TIMELINE:
  t=0ms     [compass-star]    filter: drop-shadow(0 0 20px rgba(255,184,0,0.4))
  t=2000ms  [compass-star]    filter: drop-shadow(0 0 40px rgba(255,184,0,0.7))   DURATION:2000ms  EASING:ease-in-out
  t=4000ms  [compass-star]    filter: drop-shadow(0 0 20px rgba(255,184,0,0.4))   DURATION:2000ms  EASING:ease-in-out
LOOP: yes — infinite pulse

ANIMATION: Compass Rose Slow Spin
Section: 1 (Hero, top-right secondary compass)
Trigger: page-load (continuous)
Library: CSS animation (Tailwind animate-spin-slow)
TIMELINE:
  t=0ms     [secondary-compass]   transform: rotate(0deg)
  t=60000ms [secondary-compass]   transform: rotate(360deg)   DURATION:60s  EASING:linear
LOOP: yes — infinite

ANIMATION: Manifesto Text Fade-In
Section: 2 (Manifesto blocks)
Trigger: scroll-enter (element enters viewport)
Library: Framer Motion (scroll-triggered)
TIMELINE:
  t=0ms     [heading text]    FROM: opacity:0, transform:translateY(30px)
  t=300ms   [heading text]    TO:   opacity:1, transform:translateY(0)      DURATION:600ms  EASING:ease-out
  t=150ms   [body text]       FROM: opacity:0, transform:translateY(20px)
  t=500ms   [body text]       TO:   opacity:1, transform:translateY(0)      DURATION:500ms  EASING:ease-out

ANIMATION: Glowing Icon Entrance
Section: 2 (each manifesto block)
Trigger: scroll-enter
Library: Framer Motion + CSS filter animation
TIMELINE:
  t=0ms     [icon SVG]        FROM: opacity:0, scale:0.8, filter:drop-shadow(0 0 0 transparent)
  t=200ms   [icon SVG]        TO:   opacity:1, scale:1, filter:drop-shadow(0 0 30px rgba(255,184,0,0.5))  DURATION:800ms

ANIMATION: Golden Diagonal Line
Section: 2 (spans across page)
Trigger: scroll-position (parallax/scroll-linked, appears to move as user scrolls)
Library: CSS transform + scroll-driven
BEHAVIOR: A golden (#FFB800) diagonal line extends from top-right to bottom-left across the manifesto section, moving with scroll position. Appears around section 2 and extends through sections 2-3.

ANIMATION: Week Timeline Node Entrance
Section: 3 (Program)
Trigger: scroll-enter
Library: Framer Motion
TIMELINE:
  t=0ms     [golden dot]      FROM: scale:0, opacity:0
  t=200ms   [golden dot]      TO:   scale:1, opacity:1     DURATION:400ms  EASING:spring
  t=100ms   [week label]      FROM: opacity:0, x:-20
  t=400ms   [week label]      TO:   opacity:1, x:0         DURATION:300ms
  t=200ms   [week heading]    FROM: opacity:0, y:20
  t=600ms   [week heading]    TO:   opacity:1, y:0          DURATION:400ms
```

---

## Step 1.5 — Micro-Interaction Catalog

```
INTERACTION: Navigation Link
Selector hint: nav a
STATE         | color           | transform    | other
─────────────────────────────────────────────────────────
DEFAULT       | #FFFFFF         | none         | tracking: 0.55px, uppercase
HOVER         | #FBBF24 (gold) | none         | transition-colors 300ms
MECHANISM: CSS transition (Tailwind hover:text-gold-400 transition-colors duration-300)

INTERACTION: CTA Button — "INITIATE LAUNCH SEQUENCE"
Selector hint: form button / section 6 CTA
STATE         | background    | color    | transform    | box-shadow                      | other
─────────────────────────────────────────────────────────────────────────────────────────────
DEFAULT       | #FBBF24       | #000000  | scale(1)     | none                            | tracking: 2.8px, uppercase, font-bold
HOVER         | #FFC000       | #000000  | scale(1.01)  | 0 0 50px rgba(255,184,0,0.5)    | massive golden glow
ACTIVE        | #F59E0B       | #000000  | scale(0.98)  | 0 0 30px rgba(255,184,0,0.3)    | –
MECHANISM: CSS transition (transition-all duration-300)
⚑ SPECIAL: The hover glow effect is the signature interaction — a MASSIVE 50px golden bokeh glow

INTERACTION: Form Input Fields
Selector hint: input, textarea
STATE         | background    | borderBottom        | color    | other
─────────────────────────────────────────────────────────────────────
DEFAULT       | transparent   | 1px solid white/20  | white    | placeholder: muted gray
FOCUS         | transparent   | 1px solid #FBBF24   | white    | label above transitions to gold
MECHANISM: CSS transition (transition-all duration-300)
⚑ SPECIAL: Labels ("CODENAME", "FREQUENCY" etc.) are mono uppercase gold — they sit ABOVE each input, not inside

INTERACTION: Info Toggle Button (?)
Selector hint: bottom-right of hero
STATE         | border             | color        | other
──────────────────────────────────────────────────────────
DEFAULT       | 1px solid white/30 | white/70     | small circle, ~24px
HOVER         | 1px solid white/60 | white        | –
MECHANISM: CSS transition
```

---

## Step 1.6 — Component Behavior Deep-Dive

```
STATE MACHINE: Sticky Navigation
Location: Top of page
Type: Morphing
STATES:
  State A (top): Transparent background, white text, no blur
  State B (scrolled): bg-deep-900/80 (rgba(5,5,5,0.8)), backdrop-blur, white text
INITIAL STATE: A
TRANSITION A→B:
  Trigger: scroll position > ~60px
  [nav-bg]: backgroundColor: transparent → rgba(5,5,5,0.8) over 200ms
  [nav-bg]: backdropFilter: none → blur(12px) over 200ms
TRANSITION B→A: reverse when scroll < 60px

STATE MACHINE: Golden Momentum Line (Diagonal)
Location: Sections 2-3
Type: Scroll-linked position
STATES:
  The line's Y-position (and possibly angle) adjusts continuously based on scroll position
  It creates a sense of forward motion/thrust across the manifesto sections
INTERNAL LAYOUT:
  Container: position absolute, full page width
  Line: transform rotate(~-30deg to -45deg), 3-4px thick, #FFB800 with glow
  Length: spans ~3000px+ vertically
```

---

## Step 1.7 — Scroll Choreography Map

```
SCROLL CHOREOGRAPHY MAP
─────────────────────────────────────────────────────────────────────
Scroll %  │ Viewport Position        │ Event / Animation Trigger
─────────────────────────────────────────────────────────────────────
0%        │ Page load                │ Hero compass star pulse begins;
          │                          │ Secondary compass slow-spin starts;
          │                          │ Nav is transparent
~5%       │ Scroll past hero nav     │ Nav transitions to dark/blurred bg
~8-10%    │ Manifesto block 01       │ "We believe in founders who work" fades in
          │ enters viewport          │ from below (opacity + translateY)
~15%      │ Manifesto block 02       │ "Execution compounds" heading + sailboat icon
          │                          │ fade in; golden diagonal line appears
~25%      │ Manifesto block 03       │ "Distribution is a skill" + locomotive icon
          │                          │ Golden line continues diagonally
~35%      │ Manifesto block 04       │ "Ship in public" + compass star icon
~45%      │ Manifesto block 05       │ "Honest feedback" + balloon icon
~50%      │ Program section header   │ "Five weeks. One focus." fades in
~55-70%   │ Week rows enter          │ Each week row animates in sequence:
          │                          │ golden dot pops → label slides in → heading fades up
~75%      │ Mentors section          │ Mentor cards animate in
~80%      │ Application hero         │ "Launch sequence." heading fades in
~85-95%   │ Application form         │ Form fields fade in
100%      │ Footer                   │ Final elements visible
─────────────────────────────────────────────────────────────────────
SCROLL BEHAVIORS:
  Parallax elements: Golden diagonal line (scroll-linked transform), background blueprint drawings (slight parallax)
  Sticky elements: Navigation bar (sticks at top, style morphs on scroll)
  Nav state change: ~60px scroll threshold
```

---

## Step 1.8 — Technical Stack Detection

```
TECHNICAL STACK
  Framework:   React 19.2.3 (via esm.sh CDN import map) — confidence: HIGH (import map confirms)
  Animation:   Framer Motion 12.23.26 (via esm.sh CDN) — confidence: HIGH (import map confirms)
  CSS:         Tailwind CSS v3 (via CDN: https://cdn.tailwindcss.com) — confidence: HIGH
  Icons:       Lucide React 0.562.0 (via esm.sh CDN) — confidence: HIGH (import map confirms)
  Build:       Vite (bundled output: /assets/index-BhXYekyS.js) — confidence: HIGH
  Scroll:      Native smooth scroll (html { scroll-behavior: smooth }) — no Lenis/Locomotive
  Fonts:       Google Fonts CDN (Inter, Instrument Serif, Playfair Display)
  State Mgmt:  None detected — appears to be a single-page static site with no complex state
  ES Module:   Import map using esm.sh as module CDN
  Hosting:     Unknown (custom domain, likely Vercel/Netlify given Vite build)
```

---

## Step 1.9 — Motion Philosophy + Copy Voice

```
MOTION PHILOSOPHY:
The motion design is deliberate and cinematic, not bouncy or playful. Animations serve to create
a sense of GRAVITY and FORWARD MOMENTUM — the glowing compass star pulses like a heartbeat, the
diagonal golden line cuts through the page like a vector of progress, and content reveals are
slow scroll-triggered fades that feel like pages turning in a manifesto. The secondary compass's
60-second rotation creates an almost imperceptible sense of time passing. If all animations were
removed, the site would lose its sense of being a LIVING document — the pulse and slow spin give
it the feeling of a war room dashboard, constantly active, waiting for action. The motion vocabulary
is: slow, purposeful, golden, gravitational.

COPY VOICE PATTERN:
  Tone:          Provocative-philosophical — blending anti-establishment rhetoric with intimate directness
  Sentence form: Contrasting pairs ("X over Y", "Not X. Y.") — fragments, rarely full complex sentences
  Key device:    Antithesis/contrast — every major statement sets up an opposition:
                 "Execution over optics" / "High signal, low noise" / "Not an accelerator. A working room."
                 "Channels that belong to us, not platforms that rent to us."
  Example pattern: "[Bold claim]. [Counter-expectation]." e.g. "Execution compounds. Optics don't."
                   "Distribution is a skill, not a budget line."
                   "Honest feedback over polite applause."
  Label vocabulary: Military/nautical terminology — "CODENAME", "FREQUENCY", "COORDINATES",
                    "THE PAYLOAD", "INITIATE LAUNCH SEQUENCE", "Launch sequence"
  Form labels use nautical metaphors to transform a mundane signup into a mission briefing
```

---

## Tailwind Configuration (EXACT — from page source)

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        background: '#121212',
        surface: '#1E1E1E',
        primary: '#FFFFFF',
        secondary: '#B0B0B0',
        gold: {
          50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d',
          400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309',
          800: '#92400e', 900: '#78350f', 950: '#451a03',
        },
        deep: { 900: '#050505', 800: '#0a0a0a', 700: '#121212' }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Instrument Serif', 'Playfair Display', 'serif'],
      },
      animation: { 'spin-slow': 'spin 60s linear infinite' },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
      }
    },
  },
}
```

## Custom CSS (EXACT — from page source)

```css
body { background-color: #121212; color: #ffffff; overflow-x: hidden; }
::selection { background: rgba(255, 184, 0, 0.3); color: white; }
html { scroll-behavior: smooth; }
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #050505; }
::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #555; }
```

## Import Map (EXACT — from page source)

```json
{
  "imports": {
    "framer-motion": "https://esm.sh/framer-motion@^12.23.26",
    "react/": "https://esm.sh/react@^19.2.3/",
    "react": "https://esm.sh/react@^19.2.3",
    "lucide-react": "https://esm.sh/lucide-react@^0.562.0",
    "react-dom/": "https://esm.sh/react-dom@^19.2.3/"
  }
}
```
