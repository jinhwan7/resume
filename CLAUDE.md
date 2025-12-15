# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bilingual (Korean/English) resume website built as a **monorepo** using:
- **Astro 5.16** (SSR-enabled) with React components
- **pnpm workspaces** for package management
- **Turbo** for build orchestration
- **Cloudflare Pages** for hosting

Based on https://github.com/hmmhmmhm/resume

## Development Commands

All commands should be run from the repository root:

```bash
# Install dependencies
pnpm install

# Development server (starts on localhost:4321)
pnpm dev

# Build all packages
pnpm build

# Type checking across all packages
pnpm check-types

# Lint and format
pnpm lint
pnpm format

# Preview production build locally
cd apps/resume && pnpm preview

# Deploy to Cloudflare Pages
cd apps/resume && pnpm deploy
```

### Resume App Specific Commands

From `apps/resume/`:

```bash
# Optimize images in public/ directory
pnpm optimize:images

# Download company/service icons
pnpm download:icons

# Start dev server without Node warnings
pnpm dev
```

## Architecture

### Monorepo Structure

```
apps/resume/           # Main Astro SSR application
packages/
  astro-i18n/         # Custom i18next integration for Astro
  astro-tailwind/     # Shared Tailwind CSS configuration
```

### Key Directories in apps/resume/

- `src/pages/[lang]/` - Dynamic routes for language-specific pages (ko, en)
- `src/components/` - React and Astro components
- `src/data/resume.tsx` - Main resume data structure (TypeScript)
- `src/i18n/locales/` - Translation files (ko.json, en.json)
- `src/middleware.ts` - Language detection and routing
- `public/` - Static assets (logos, icons, images)

### Language & i18n System

**Language Detection Flow:**
1. URL path is checked first (`/ko`, `/en`)
2. Falls back to `Accept-Language` header
3. Default: Korean (`ko`)

**Translation Architecture:**
- Server-side translation resolution (SSR)
- Data function `getResumeData(lang)` merges static data with translations at build time
- Helper functions (`extractResumeTranslations`) prevent sending entire i18n bundles to client
- Translation keys follow dot notation: `resume.sections.work`

**Important:** When modifying resume content:
- Update `src/data/resume.tsx` for structural data (companies, projects, URLs, badges)
- Update `src/i18n/locales/ko.json` and `en.json` for translated strings

### Component Patterns

**Astro Components** (`.astro` files):
- Server-rendered by default
- Used for layout, SEO, and static content
- Examples: `CommonHead.astro`, `CommonBody.astro`

**React Components** (`.tsx` files):
- Interactive client-side components
- Hydration strategy: `client:idle` (loads after page is interactive)
- Examples: `ResumePage.tsx`, `Navbar.tsx`, `ResumeCard.tsx`

### Styling System

- **Tailwind CSS 4.1** with custom configuration in `@repo/astro-tailwind`
- CSS variables for theming (HSL values: `--primary`, `--background`, etc.)
- Dark mode: CSS class-based (`.dark`)
- Component variants: Class Variance Authority (CVA)
- Utility merge: `tailwind-merge` + `clsx` via `cn()` function in `src/lib/utils.ts`

### TypeScript Configuration

Path alias `@/*` maps to `src/*`:
```typescript
import { Button } from "@/components/ui/button"
```

## Data Flow

1. **Resume Data** (`src/data/resume.tsx`): Define structure, companies, projects, URLs, badges
2. **Translations** (`src/i18n/locales/*.json`): Language-specific text
3. **Data Function** (`src/data/get-resume-data.ts`): Merges data + translations
4. **Pages** (`src/pages/[lang]/index.astro`): Renders components with merged data
5. **Components**: Display data with React (client) or Astro (server)

## Common Tasks

### Adding Resume Content

1. Update company/work data in `src/data/resume.tsx` (DATA object)
2. Add translated strings to `src/i18n/locales/ko.json` and `en.json`
3. Reference translations with dot notation keys

### Creating New Components

UI components go in:
- `src/components/ui/` - Base components (Button, Card, Badge, etc.)
- `src/components/magicui/` - Animation components
- `src/components/` - Page-specific components

Import shadcn-style components from `@/components/ui/*`

### Modifying Styles

Colors and theme variables are in `src/styles/globals.css`:
```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --background: 0 0% 100%;
  /* ... */
}
```

Tailwind config extends from `@repo/astro-tailwind/tailwind.config.js`

### Adding Dependencies

Use pnpm in the appropriate workspace:
```bash
# Add to resume app
pnpm --filter resume add <package>

# Add to workspace package
pnpm --filter @repo/astro-i18n add <package>

# Add to root (dev dependency)
pnpm add -Dw <package>
```

## Build & Deployment

**Build Output:**
- `dist/` - SSR build artifacts for Cloudflare Pages
- `.astro/` - Astro build cache and type definitions

**Deployment Target:** Cloudflare Pages (via `@astrojs/cloudflare` adapter)

**Caching:**
- Turbo caches build outputs (`.turbo/`)
- Astro caches type definitions (`.astro/`)

## Special Features

- **PDF Download**: Language-specific resume PDF downloads
- **QR Code Generation**: Contact QR codes via `qrcode` package
- **Markdown Rendering**: `react-markdown` for project descriptions
- **Structured Data**: Schema.org JSON-LD for SEO
- **Query Parameters**: `?nonav` hides navbar for embedded views
- **Animation**: Framer Motion for transitions and blur fade effects

## Node & Package Manager

- **Required Node Version**: >=18
- **Package Manager**: pnpm 9.0.0
- **Workspace**: pnpm workspaces configured in `pnpm-workspace.yaml`
