# Portfolio Design Brainstorming

## Goal
Create a single-page portfolio website for Janya Mali with grey/dark grey color scheme, smooth scrolling navigation, and interactive sections.

---

<response>
<text>
**Design Movement**: Neo-Brutalism with Technical Precision

**Core Principles**:
- Raw, unapologetic geometry with sharp edges and bold borders
- High contrast between dark slate backgrounds and crisp white elements
- Monospaced typography mixed with geometric sans-serif for technical authenticity
- Asymmetric layouts that break conventional grid patterns

**Color Philosophy**: 
Industrial monochrome palette—charcoal (#1a1a1a) as the foundation, medium grey (#2d2d2d) for elevated surfaces, sharp white (#ffffff) for text and accents, with subtle steel blue (#4a5568) for interactive states. The intent is to evoke precision, clarity, and technical sophistication without warmth.

**Layout Paradigm**: 
Diagonal-cut sections with offset containers. Each major section uses clip-path polygons to create angled transitions, while content cards float with heavy drop shadows and thick borders. Navigation is fixed with a brutalist pill-style active state.

**Signature Elements**:
- Thick (3-4px) borders on all interactive elements
- Diagonal section dividers using CSS clip-path
- Monospaced labels for section headers and metadata

**Interaction Philosophy**: 
Instant, snappy feedback—no easing curves. Hover states use scale transforms and border color shifts. Clicks produce immediate visual confirmation through shadow depth changes.

**Animation**: 
Hard cuts and instant transitions. Elements snap into place rather than glide. Scroll-triggered animations use step functions instead of smooth easing. Timeline items pop in with scale transforms (0.95 → 1.0) on intersection.

**Typography System**: 
JetBrains Mono for labels, dates, and technical metadata (400, 500 weights). Space Grotesk for headings and body text (500, 600, 700 weights). Tight line-height (1.2) for headings, generous (1.7) for body. All-caps labels at 0.85rem with letter-spacing: 0.1em.
</text>
<probability>0.07</probability>
</response>

<response>
<text>
**Design Movement**: Glassmorphism with Depth Layering

**Core Principles**:
- Frosted glass surfaces with backdrop blur and subtle transparency
- Multi-layer depth through stacked translucent panels
- Soft shadows and ambient lighting effects
- Fluid, organic shapes contrasting with structured content

**Color Philosophy**: 
Deep charcoal gradient background (#0f0f0f → #1a1a1a) with layered glass panels in semi-transparent grey (rgba(45, 45, 45, 0.6)). White text (#f5f5f5) with reduced opacity for secondary content. Accent color: soft cyan (#67e8f9) for highlights and interactive states. The palette creates depth through transparency while maintaining readability.

**Layout Paradigm**: 
Floating card archipelago—each section exists as a semi-transparent glass panel with varied positioning and rotation. Content flows vertically but cards are offset horizontally, creating a staggered, magazine-style layout. Navigation is a frosted glass bar with blur effect.

**Signature Elements**:
- Backdrop-filter: blur(12px) on all cards
- Soft inner glow on glass panels (box-shadow: inset 0 1px 0 rgba(255,255,255,0.1))
- Circular profile image with multi-ring border gradient

**Interaction Philosophy**: 
Smooth, physics-based interactions. Hover states lift elements with increased blur and shadow. Scroll reveals trigger gentle fade-in with slight vertical translation. Timeline items expand with smooth height transitions.

**Animation**: 
All transitions use cubic-bezier(0.4, 0, 0.2, 1) with 300-400ms duration. Entrance animations stagger by 100ms. Parallax scrolling on background gradient. Timeline nodes pulse with subtle scale animation on active state.

**Typography System**: 
Outfit for headings (300, 500, 700 weights) with generous letter-spacing (0.02em). Inter for body text (400, 500 weights). Headings use gradient text effects (background-clip: text). Section titles at 2.5rem with light weight for elegance.
</text>
<probability>0.09</probability>
</response>

<response>
<text>
**Design Movement**: Swiss Modernism with Grid Precision

**Core Principles**:
- Mathematical grid system with strict alignment
- Hierarchical typography with clear size relationships
- Restrained color palette with intentional accent use
- Negative space as a primary design element

**Color Philosophy**: 
Neutral grey scale foundation—dark slate (#18181b) for background, medium grey (#27272a) for surfaces, light grey (#a1a1aa) for secondary text, pure white (#ffffff) for primary content. Single accent: warm amber (#f59e0b) used sparingly for CTAs and active states. The philosophy emphasizes content hierarchy through contrast, not decoration.

**Layout Paradigm**: 
12-column grid with mathematical proportions. Sections align to baseline grid with consistent vertical rhythm (8px base unit). Content containers use golden ratio (1.618) for width relationships. Navigation follows horizontal rhythm with equal spacing.

**Signature Elements**:
- Thin (1px) divider lines in subtle grey (#3f3f46)
- Numbered section labels in small caps
- Circular dots as visual anchors for timeline and lists

**Interaction Philosophy**: 
Minimal, purposeful interactions. Hover states use subtle color shifts and underlines. Focus states use amber outline. Scroll behavior is smooth but not animated—content simply appears at proper scroll position.

**Animation**: 
Fade-in only on initial load. No scroll animations. Transitions limited to color and opacity changes at 200ms with linear easing. Timeline uses vertical line that fills on scroll (stroke-dashoffset animation).

**Typography System**: 
IBM Plex Sans for all text (400, 500, 600 weights). Strict type scale: 0.875rem, 1rem, 1.25rem, 1.5rem, 2rem, 3rem. Line-height follows 1.5 ratio for body, 1.2 for headings. Section headers use small caps with letter-spacing: 0.15em. Consistent 24px vertical rhythm.
</text>
<probability>0.08</probability>
</response>

---

## Selected Approach

**Neo-Brutalism with Technical Precision** has been selected for its bold, distinctive aesthetic that aligns with a technical portfolio while avoiding common "AI slop" patterns. The sharp geometry, monospaced typography, and diagonal sections create a memorable, modern identity.
