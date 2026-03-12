# Replication Prompt — Ship Studio (Exact 1:1 Clone)

> **Role:** Act as a World-Class Senior Creative Technologist and Lead Frontend Engineer.

**Aesthetic Identity:** *Nautical Command Deck / Blueprint War Room*

You are building an EXACT 1:1 replica of **ship-studio.co** — a founder cohort landing page with a dark blueprint aesthetic, golden compass rose centerpiece, and cinematic scroll-driven animations. Every pixel, every color, every animation timing must match the reference. This is not an adaptation — it is a faithful reconstruction.

---

## 1. CORE DESIGN SYSTEM

### Palette

```
PALETTE:
  background    "Deep Charcoal":     #121212          → body background, all section backgrounds
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
  gold-400      "Base Gold":         #FBBF24           → PRIMARY ACCENT — CTA button, glows, compass labels, form labels
  gold-500      "Amber":             #F59E0B           → hover states
  gold-600      "Deep Amber":        #D97706           → active states
  gold-700      "Bronze":            #B45309           → dark accents
  gold-800      "Dark Bronze":       #92400E           → deep accents
  gold-900      "Chocolate":         #78350F           → darkest warm
  gold-950      "Espresso":          #451A03           → deepest warm
  grid-line     "Grid Line":         #1A1A1A           → background grid pattern lines (1px)
  border-muted  "Ghost Border":      rgba(255,255,255,0.1) → section dividers
  selection-bg  "Selection":         rgba(255,184,0,0.3)   → text selection
```

### Typography

```
TYPOGRAPHY SCALE:
  Role         | Font Family                          | Weight | Size           | Tracking | Line-Height | Style
  ────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  Hero Logo    | Instrument Serif, Playfair Display    | 400    | ~8rem (128px)  | normal   | 1.0         | normal
  Display/H1   | Instrument Serif, Playfair Display    | 400    | ~6rem (96px)   | normal   | 1.0         | normal + italic mix
  Sub-Display  | Instrument Serif, Playfair Display    | 400    | ~4rem (64px)   | normal   | 1.1         | italic
  Body Serif   | Instrument Serif, Playfair Display    | 400    | 24px           | normal   | 32px        | italic
  Nav Label    | Inter, sans-serif                     | 500    | 11px           | 0.55px   | normal      | uppercase
  UI Label     | Monospace (system stack)               | 400    | 10px           | 1px      | normal      | uppercase, gold color
  Button CTA   | Inter, sans-serif                     | 700    | 14px           | 2.8px    | normal      | uppercase
  Week Label   | Inter/Mono                            | 400    | 10-11px        | 1px+     | normal      | uppercase, gold-400
  Body Sans    | Inter, sans-serif                     | 300-400| 16px           | normal   | 1.6         | normal

⚑ DRAMA NOTE: The typographic drama is the EXTREME contrast between 6-8rem serif Display headings
  (Instrument Serif, 400 weight, mixed italic/roman IN THE SAME LINE) and tiny 10-11px monospace
  labels (uppercase, tracking 1px+, gold-colored). The italic serif body text at 24px creates a
  "handwritten journal" intimacy against the brutalist heading scale. Key device: some headings
  mix ROMAN and ITALIC in the same line (e.g., "Five weeks." roman + "One focus." italic).
  DO NOT flatten this contrast ratio.
```

Font loading:
```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
```

### Texture System

- **Background Grid:** `linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)` — covers ENTIRE page behind all sections
- **Blueprint SVG Drawings:** Thin stroke line-art of vintage transport vehicles (hot air balloon, ship, locomotive, car) + geometric construction lines, circles, protractors — positioned absolutely, very low opacity (~0.15-0.25), #B0B0B0 stroke or lighter
- **Custom Scrollbar:** width 8px, track #050505, thumb #333 (hover #555), border-radius 4px
- **Selection Color:** rgba(255, 184, 0, 0.3) background, white text
- **Border Radius:** Sharp/none on sections. No rounded corners except scrollbar thumb.
- **Shadow System:** CTA hover: `0 0 50px rgba(255,184,0,0.5)`; compass icons: golden `drop-shadow` filter glow

### Tailwind Configuration (embed EXACTLY)

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

### Custom CSS (embed EXACTLY)

```css
body { background-color: #121212; color: #ffffff; overflow-x: hidden; }
::selection { background: rgba(255, 184, 0, 0.3); color: white; }
html { scroll-behavior: smooth; }
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #050505; }
::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #555; }
```

---

## 2. COMPONENT ARCHITECTURE — Section by Section

### Global Background Layer — "The Blueprint Canvas"

BEFORE any sections, create a FULL-PAGE background layer containing:
1. The grid pattern (CSS background-image on body or a fixed div)
2. SVG blueprint line-art drawings positioned ABSOLUTELY behind all content:
   - **Hot air balloon** (left side, ~400px tall, thin stroke line-art, muted gray at opacity 0.15-0.2)
   - **Ship/sailboat** (bottom-left, ~300px wide)
   - **Locomotive/train** (bottom-right, ~350px wide)
   - **Car/automobile** (bottom-right area, ~250px wide)
   - **Compass rose #2** (top-right, 4-point star with concentric circles and compass ring, ~200px)
   - **Geometric construction lines** — scattered circles, arcs, protractors, crosshair/plus marks (+)
3. All blueprint drawings use thin stroke (1-2px), no fill, color approximately rgba(176,176,176,0.15)

### Navigation — "The Floating Compass Bar"

```
SECTION: NAV (Sticky)
Height: ~60px | BG: transparent (morphs on scroll)
Position: fixed top, z-index: 50, full width
┌────────────────────────────────────────────────────────┐
│  MANIFESTO   PROGRAM   MENTORS   APPLY    │  S1 — 2026│
└────────────────────────────────────────────────────────┘
```

**Sticky Nav State Machine:**
```
STATE MACHINE: Navigation Bar
Type: Morphing (scroll-triggered)
STATES:
  State A (scrollY < 60px): bg transparent, no blur, white text
  State B (scrollY >= 60px): bg rgba(5,5,5,0.8), backdrop-blur(12px), white text
TRANSITION A→B:
  Trigger: scroll position > 60px
  [nav-bg] backgroundColor: transparent → rgba(5,5,5,0.8) DURATION:200ms
  [nav-bg] backdropFilter: none → blur(12px) DURATION:200ms
TRANSITION B→A: reverse
```

**Nav Interaction:**
```
INTERACTION: Navigation Link
STATE         | color           | transition
──────────────────────────────────────────────
DEFAULT       | #FFFFFF         | –
HOVER         | #FBBF24 (gold)  | transition-colors 300ms
```

Nav links: Inter, 500 weight, 11px, uppercase, tracking 0.55px. Anchor links to sections via smooth scroll.
Left: MANIFESTO | PROGRAM | MENTORS | APPLY
Right: "S1 — 2026"

---

### Section 1 — "The Compass Rose" (Hero)

```
SECTION 1: HERO — The Compass Rose
Height: 100vh | BG: transparent (inherits #121212 + grid) | Padding: 0
Content: full-bleed, absolutely positioned centered composition
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│           [NW]            [N]            [NE]                  │
│                          ╱│╲                                   │
│                         ╱ │ ╲                                  │
│                        ╱  │  ╲                                 │
│           [W] ◄───────○───┼───○───────► [E]                    │
│                        ╲  │  ╱     "Ship"                      │
│                         ╲ │ ╱    (Instrument Serif ~8rem white) │
│                          ╲│╱     "COHORT 1"                    │
│           [SW]            [S]    (serif italic, muted)  [SE]   │
│                                                                │
│  "A FIVE-WEEK COHORT FOR FOUNDERS             HIGH SIGNAL      │
│   WHO BELIEVE IN EXECUTION OVER OPTICS."       LOW NOISE  (?) │
└────────────────────────────────────────────────────────────────┘
```

**COMPOSITION MAP: Hero Compass Rose**
```
Element count: 15+ distinct visual objects

CENTER:    8-point compass star SVG (golden-yellow #FFB800 → #FBBF24)
           Size: ~500px diameter, centered in viewport, z-index: front
           Star shape: 4 primary points (N/S/E/W, sharp elongated) + 4 secondary (NE/NW/SE/SW, shorter)
           Lines: thin golden lines from center to all 8 directions

ABOVE:     "Ship" text — Instrument Serif ~8rem, white, centered over star
           "COHORT 1" — Instrument Serif italic ~2rem, rgba(255,255,255,0.5), below "Ship"

LABELS:    8 compass direction labels:
           N, S, E, W — gold-400 (#FBBF24), serif, positioned at star tips
           NE, NW, SE, SW — smaller, more muted (~30% opacity), intermediate positions

TOP-RIGHT: Secondary compass rose — 4-point star ~200px, muted golden/gray
           Surrounded by concentric circles and compass ring (thin stroke, very low opacity)
           CSS animation: spin-slow (60s linear infinite)

BOTTOM-LEFT: "A FIVE-WEEK COHORT FOR FOUNDERS WHO BELIEVE IN EXECUTION OVER OPTICS."
             Font: Label style (Inter/mono, ~10-11px, uppercase, tracking wide), color: secondary
BOTTOM-RIGHT: "HIGH SIGNAL" + line break + "LOW NOISE" | same label style
              (?) info toggle: 24px circle, border 1px solid white/30
```

**Compass Star Pulse Animation:**
```
ANIMATION: Compass Rose Pulse
Trigger: page-load (continuous)
Library: CSS @keyframes
TIMELINE:
  t=0ms     [compass-star]    filter: drop-shadow(0 0 20px rgba(255,184,0,0.4))
  t=2000ms  [compass-star]    filter: drop-shadow(0 0 40px rgba(255,184,0,0.7))   DURATION:2000ms  EASING:ease-in-out
  t=4000ms  [compass-star]    filter: drop-shadow(0 0 20px rgba(255,184,0,0.4))   DURATION:2000ms  EASING:ease-in-out
LOOP: infinite

ANIMATION: Secondary Compass Slow Spin
Trigger: page-load (continuous)
[secondary-compass] transform: rotate(0deg) → rotate(360deg) DURATION:60s EASING:linear LOOP:infinite
```

---

### Section 2 — "The Manifesto Scroll" (5 Principles)

This section consists of 5 manifesto blocks stacked vertically, each ~1000px tall. A golden diagonal line ("The Momentum Vector") cuts across the section. Each block has an asymmetric 2-column layout with a **glowing icon** on one side.

**DIAGONAL MOMENTUM LINE:**
- Absolutely positioned, spans height of entire manifesto section
- 3-4px thick, #FFB800 with glow filter
- Rotated ~-30deg to -45deg
- Moves/transforms with scroll position (parallax-linked)
- The golden glow creates a sense of forward thrust

**Each manifesto block follows this pattern:**

```
MANIFESTO BLOCK TEMPLATE:
Height: ~1000px | BG: transparent | Layout: asymmetric
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  ┌─ICON SIDE (~30%)──────┐  ┌─TEXT SIDE (~70%)────────────────┐│
│  │  [GLOWING SVG ICON]    │  │  "[HEADING TEXT]"               ││
│  │  golden-yellow stroke  │  │  (Display serif, ~5-6rem,       ││
│  │  + glow effect          │  │   white, roman)                ││
│  │  within circle ~200px  │  │                                ││
│  │  with dashed orbit ring│  │  "[BODY TEXT]"                  ││
│  └────────────────────────┘  │  (Body serif italic 24px,       ││
│                              │   secondary #B0B0B0)            ││
│  ┌─LARGE NUMBER────────┐    └─────────────────────────────────┘│
│  │  "0X" (very large,   │                                      │
│  │  low opacity ~0.05,  │                                      │
│  │  serif, positioned   │                                      │
│  │  behind/beside text) │                                      │
│  └──────────────────────┘                                      │
└────────────────────────────────────────────────────────────────┘
```

**Glowing Icon Style:** Each icon is a thin stroke SVG (~2-3px stroke width), colored #FFB800/#FBBF24, with:
- A circular container (~200px) with a dashed orbit ring around it
- A radial glow: `filter: drop-shadow(0 0 30px rgba(255,184,0,0.5))`
- Background circle: dark with slight golden tint

**Block 01 — "We believe in founders who work"**
- Layout: Full-width text, no icon visible at this point
- "We believe" (serif, ~6rem, white) + "in" (serif italic, gold-400, same line)
- "founders" (serif, ~6rem, white, offset right)
- "who work" (serif italic, ~6rem, very low opacity ~0.1, OUTLINE/STROKE style not filled — appears as ghost text)
- "01" large number, very low opacity, right side

**Block 02 — "Execution compounds. Optics don't."**
- Icon: **Sailboat** (golden stroke SVG, left side, glowing)
- Body: "We ignore vanity metrics. We focus on shipping code, content, and product. If it doesn't move the needle, we don't do it."

**Block 03 — "Distribution is a skill, not a budget line."**
- Icon: **Locomotive/Train** (golden stroke SVG, right side, glowing)
- Body: "Paid ads are for scaling. Organic traction is for validation. We build channels that belong to us, not platforms that rent to us."

**Block 04 — "Ship in public. Learn in public."**
- Icon: **4-Point Compass Star** (golden stroke SVG, left side, glowing)
- Body: "Secrecy protects bad ideas. Feedback refines good ones. We document the journey to build momentum before the launch."

**Block 05 — "Honest feedback over polite applause."**
- Icon: **Hot Air Balloon** (golden stroke SVG, right side, glowing)
- Body: "We don't do 'great job' unless it is actually a great job. Radical candor saves time and builds better products."

**Manifesto Entrance Animations:**
```
ANIMATION: Manifesto Text Fade-In (per block)
Trigger: scroll-enter (element enters viewport)
Library: Framer Motion
TIMELINE:
  t=0ms     [heading]    FROM: opacity:0, translateY(30px)
  t=300ms   [heading]    TO:   opacity:1, translateY(0)      DURATION:600ms  EASING:ease-out
  t=150ms   [body text]  FROM: opacity:0, translateY(20px)
  t=500ms   [body text]  TO:   opacity:1, translateY(0)      DURATION:500ms  EASING:ease-out

ANIMATION: Glowing Icon Entrance (per block)
Trigger: scroll-enter
  t=0ms     [icon SVG]   FROM: opacity:0, scale:0.8, filter:drop-shadow(0 0 0 transparent)
  t=200ms   [icon SVG]   TO:   opacity:1, scale:1, filter:drop-shadow(0 0 30px rgba(255,184,0,0.5))  DURATION:800ms
```

---

### Section 3 — "The Five-Week Compass" (Program Timeline)

```
SECTION 3: PROGRAM TIMELINE
Height: 2817px | BG: transparent | Padding: py-32
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  "Five weeks." (serif ~6rem, white, ROMAN)                     │
│  "One focus." (serif ~6rem, white/lighter, ITALIC)             │
│                                                                │
│  [4-POINT COMPASS STAR DIVIDER — small, centered, gold/muted] │
│                                                                │
│  ┌─VERTICAL TIMELINE─────────────────────────────────────────┐ │
│  │ [golden line 3px wide, gold-400, left side]                │ │
│  │                                                             │ │
│  │ ●──── WEEK 01                                              │ │
│  │ │     "Foundation"               "Clarify your thesis.     │ │
│  │ │     (serif ~3rem, white)        Kill your darlings."     │ │
│  │ │                                 (serif italic, secondary) │ │
│  │ │                                 OUTPUT: "One-page brief  │ │
│  │ │                                 that survives scrutiny"   │ │
│  │ │                                                           │ │
│  │ ●──── WEEK 02                                              │ │
│  │ │     "Distribution"             "Build channels that      │ │
│  │ │                                 don't require ad spend." │ │
│  │ │                                 OUTPUT: "First 100 users │ │
│  │ │                                 strategy"                │ │
│  │ │                                                           │ │
│  │ ●──── WEEK 03                                              │ │
│  │ │     "Momentum"                 "Ship publicly. Document  │ │
│  │ │                                 the journey."            │ │
│  │ │                                 OUTPUT: "Launch sequence  │ │
│  │ │                                 executed"                │ │
│  │ │                                                           │ │
│  │ ●──── WEEK 04                                              │ │
│  │ │     "Signal"                   [description]              │ │
│  │ │                                 OUTPUT: [output]          │ │
│  │ │                                                           │ │
│  │ ●──── WEEK 05                                              │ │
│  │       "Launch"                   [description]              │ │
│  │                                   OUTPUT: [output]          │ │
│  └─────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────┘
```

**Timeline Visual Details:**
- Golden vertical line: 3px wide, gold-400 (#FBBF24), left side
- Golden dots: ~12px diameter, solid gold-400, one at each week node
- "WEEK XX" labels: mono/Inter uppercase, gold-400, 10px, tracking 1px+
- Week names: Instrument Serif, ~3rem, white
- Descriptions: Instrument Serif italic, ~20-24px, secondary
- "OUTPUT" label: mono, gold-400, 10px uppercase, positioned above output text
- Output text: Inter, white, ~14-16px
- Gold underline below each output

**Timeline Node Animation:**
```
ANIMATION: Week Timeline Node Entrance (per week, staggered)
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

### Section 4 — "The Crew" (Mentors)

```
SECTION 4: MENTORS
Height: 985px | BG: transparent, border-t border-white/10 | Padding: py-32 md:py-48
Layout: Heading + grid of mentor cards
```

Heading uses same Display serif pattern. Mentor cards show name + role + avatar/icon. Cards use subtle borders, dark surface backgrounds (#1E1E1E), with hover glow effects.

---

### Section 5 — "The Launch Deck" (Application Hero)

```
SECTION 5: APPLICATION HERO
Height: 100vh (~1065px) | BG: transparent, overflow-hidden
Layout: centered
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│              "Launch sequence."                                │
│              (Display serif, ~6rem, centered, white)           │
│                                                                │
│              "Not an accelerator. Not a course."               │
│              "A working room for builders who..."              │
│              (Body serif italic, 24px, secondary, centered)    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Section 6 — "The Mission Brief" (Application Form)

```
SECTION 6: APPLICATION FORM
Height: 1604px | BG: transparent | Padding: pt-32
Content max-width: ~700px centered
┌────────────────────────────────────────────────────────────────┐
│  ┌─ROW 1: 2-col grid───────────────────────────────────────┐  │
│  │  CODENAME (gold label)         │ FREQUENCY (gold label) │  │
│  │  [Full Name input]             │ [Email Address input]  │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                │
│  COORDINATES (gold label)                                      │
│  [Twitter / LinkedIn / Portfolio input]                        │
│                                                                │
│  THE PAYLOAD (gold label)                                      │
│  [What are you building? Why now? — textarea]                  │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │          INITIATE LAUNCH SEQUENCE  →                      │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                │
│  ✦ REQUIRED              ✦ EXPECTED              ✦ OPTIONAL   │
│  Something live.          5-10 hours per week.    Prior        │
│  Doesn't have to          Non-negotiable.         experience.  │
│  be pretty.                                       We care      │
│                                                   about        │
│                                                   velocity.    │
└────────────────────────────────────────────────────────────────┘
```

**Form Field Labels:** Monospace, 10px, uppercase, gold-400, tracking 1px, positioned ABOVE each input (not as placeholder).

**Form Input Interactions:**
```
INTERACTION: Form Input Fields
STATE         | background    | borderBottom        | color    | label-color
──────────────────────────────────────────────────────────────────────────────
DEFAULT       | transparent   | 1px solid white/20  | white    | gold-400
FOCUS         | transparent   | 1px solid #FBBF24   | white    | gold-400 (brighter)
MECHANISM: transition-all duration-300
```

**CTA Button — "INITIATE LAUNCH SEQUENCE →"**
```
INTERACTION: Primary CTA Button
STATE         | background    | color    | transform    | box-shadow                      | other
──────────────────────────────────────────────────────────────────────────────────────────────────
DEFAULT       | #FBBF24       | #000000  | scale(1)     | none                            | tracking:2.8px, uppercase, font-bold 14px, py-5, full-width
HOVER         | #FFC000       | #000000  | scale(1.01)  | 0 0 50px rgba(255,184,0,0.5)    | MASSIVE golden glow
ACTIVE        | #F59E0B       | #000000  | scale(0.98)  | 0 0 30px rgba(255,184,0,0.3)    | –
MECHANISM: transition-all duration-300
```

**Requirements Row:** 3-column grid below button. Each with ✦ (gold compass star icon) + label (mono, gold, uppercase "REQUIRED"/"EXPECTED"/"OPTIONAL") + description (Inter, white, ~16px).

---

## 3. SCROLL CHOREOGRAPHY MAP

```
SCROLL CHOREOGRAPHY MAP
─────────────────────────────────────────────────────────────────────
Scroll %  │ Viewport Position        │ Event / Animation Trigger
─────────────────────────────────────────────────────────────────────
0%        │ Page load                │ Compass star pulse begins;
          │                          │ Secondary compass slow-spin (60s);
          │                          │ Nav is transparent
~5%       │ Scroll past hero nav     │ Nav morphs: bg dark+blur
~8-10%    │ Manifesto block 01       │ "We believe in founders who work" fades in
~15%      │ Manifesto block 02       │ "Execution compounds" + sailboat icon fade in
          │                          │ Golden diagonal line appears
~25%      │ Manifesto block 03       │ "Distribution" + locomotive icon
~35%      │ Manifesto block 04       │ "Ship in public" + compass star icon
~45%      │ Manifesto block 05       │ "Honest feedback" + balloon icon
~50%      │ Program header           │ "Five weeks. One focus." fades in
~55-70%   │ Week rows enter          │ Each week: dot pops → label slides → heading fades
~75%      │ Mentors section          │ Cards animate in
~80%      │ Application hero         │ "Launch sequence." heading fades in
~85-95%   │ Application form         │ Form fields fade in
100%      │ Footer                   │ Final elements
─────────────────────────────────────────────────────────────────────
```

---

## 4. TECHNICAL REQUIREMENTS

```
TECHNICAL REQUIREMENTS
  Stack:                React 19 + Tailwind CSS (CDN) + Vite
  Animation:            Framer Motion 12 (via esm.sh CDN import map)
  Icons:                Lucide React (via esm.sh CDN import map)
  Scroll:               Native smooth scroll (html { scroll-behavior: smooth })
  Animation Lifecycle:  Use Framer Motion's useInView for scroll-triggered animations;
                        motion.div with initial/whileInView/transition props
  Scroll Trigger Setup: IntersectionObserver via Framer Motion's useInView hook;
                        trigger when element enters viewport
  Hover Implementation: Tailwind hover: classes + transition-all duration-300;
                        CTA button: hover:shadow-[0_0_50px_rgba(255,184,0,0.5)]
  Custom Cursor:        None (standard browser cursor)
  Font Loading:         Google Fonts CDN: Inter 300,400,500,600 + Instrument Serif ital@0;1
                        + Playfair Display ital,wght@0,400;0,500;0,600;0,700;1,400
  Import Map:           {
                          "framer-motion": "https://esm.sh/framer-motion@^12.23.26",
                          "react": "https://esm.sh/react@^19.2.3",
                          "react/": "https://esm.sh/react@^19.2.3/",
                          "react-dom/": "https://esm.sh/react-dom@^19.2.3/",
                          "lucide-react": "https://esm.sh/lucide-react@^0.562.0"
                        }
```

---

## 5. EXECUTION DIRECTIVE

*"Do not build a website — build a command deck for the ship that hasn't sailed yet. Every glow should feel like the instrument panel of something about to launch."*
