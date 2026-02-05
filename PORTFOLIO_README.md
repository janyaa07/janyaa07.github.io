# Janya Mali Portfolio - Customization Guide

This portfolio website is built with React, TypeScript, and Tailwind CSS using a **Neo-Brutalism** design philosophy.

## Design Features

The website features a distinctive neo-brutalism aesthetic with:
- **Sharp geometric shapes** with thick borders (3-4px)
- **Heavy shadows** for depth and dimension
- **Monochrome palette**: Charcoal backgrounds with crisp white text
- **Technical typography**: JetBrains Mono for labels, Space Grotesk for content
- **Diagonal section transitions** using CSS clip-path
- **Instant, snappy interactions** without easing curves

## How to Update Content

### 1. Replace Resume File

The resume download currently links to a placeholder file. To add your actual resume:

1. Place your resume PDF in `client/public/` directory
2. Name it `resume.pdf` or update the link in `client/src/pages/Home.tsx` (line 540)

### 2. Update Profile Picture

Your profile picture is located at `client/public/profile.png`. To replace it:

1. Add your new image to `client/public/`
2. Update the src path in `client/src/pages/Home.tsx` (line 127) if using a different filename

### 3. Modify Personal Information

All content is in `client/src/pages/Home.tsx`. Key sections to update:

**Introduction (lines 90-95)**
- Update your bio text
- Modify social media links (LinkedIn, Email, GitHub)

**Education (lines 144-185)**
- Update university details, dates, and descriptions
- Modify the three education tabs (SUTD, TU Berlin, DPS Pune)

**Projects (lines 218-285)**
- Add/remove project cards
- Update titles, descriptions, and tech stacks
- Currently shows 8 projects in horizontal scroll

**Experience (lines 307-380)**
- Update work experience entries
- Modify roles, companies, dates, and achievements
- Timeline format with 4 entries

**Skills (lines 418-490)**
- Update skill categories and items
- Four tabs: Languages, Frameworks, Tools, Databases

### 4. Customize Colors

Colors are defined in `client/src/index.css` using OKLCH format:

```css
:root {
  --background: oklch(0.15 0.01 250);  /* Dark charcoal */
  --foreground: oklch(1 0 0);          /* White */
  --primary: oklch(0.45 0.08 250);     /* Steel blue */
  --border: oklch(0.35 0.01 250);      /* Border grey */
}
```

Adjust these values to change the color scheme while maintaining the design philosophy.

### 5. Add More Projects

To add projects to the horizontal scroll section, add new objects to the projects array (line 218):

```typescript
{
  title: "Your Project Name",
  description: "Brief description of the project",
  tech: ["Tech1", "Tech2", "Tech3"],
}
```

### 6. Update Fonts

Fonts are loaded from Google Fonts in `client/index.html` (line 12):
- **JetBrains Mono**: Technical labels and metadata
- **Space Grotesk**: Headings and body text

To change fonts, update the Google Fonts link and modify font families in `client/src/index.css`.

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Design Philosophy

This portfolio follows **Neo-Brutalism with Technical Precision**:

- **Raw, unapologetic geometry** with sharp edges
- **High contrast** between dark and light elements
- **Monospaced typography** for technical authenticity
- **Asymmetric layouts** that break conventional patterns
- **Instant interactions** without smooth animations
- **Thick borders and heavy shadows** for visual impact

The design avoids common "AI slop" patterns like centered layouts, purple gradients, and excessive rounded corners.

## File Structure

```
client/
├── public/
│   ├── profile.png          # Your profile picture
│   └── resume.pdf           # Your resume file
├── src/
│   ├── pages/
│   │   └── Home.tsx         # Main portfolio page (all content here)
│   ├── index.css            # Design tokens and theme
│   └── App.tsx              # App configuration
└── index.html               # Font imports
```

## Notes

- All sections use smooth scroll navigation
- Mobile responsive with hamburger menu
- Education and Skills use tab-based navigation
- Projects section has horizontal scroll
- Experience uses timeline layout
- Resume section provides download link

## Support

For technical issues or questions about the Manus platform, visit https://help.manus.im
