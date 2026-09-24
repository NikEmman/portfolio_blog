# AGENTS.md - Portfolio Blog Development Guide

## Project Overview

A React-based portfolio and blog website built with Vite. Uses React Router for navigation, React Markdown for blog content, and includes dark/light theme switching.

## Tech Stack

- **Framework**: React 18.3 with Vite 6
- **Routing**: React Router DOM 7
- **Markdown**: react-markdown with remark-gfm
- **Syntax Highlighting**: highlight.js
- **Linting**: ESLint 9 with react plugins

---

## Commands

### Development

```bash
npm run dev          # Start Vite dev server with hot reload
```

### Building

```bash
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
```

### Linting

```bash
npm run lint         # Run ESLint on all files
```

### Single Test

No test framework is currently configured. To add tests:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

---

## Code Style Guidelines

### General Rules

- Use functional components with arrow functions or `function` keyword
- Use Hooks (`useState`, `useEffect`, `useContext`) for state management
- Avoid class components
- No TypeScript in this project (plain JavaScript/JSX only)

### Imports

```javascript
// React core imports first
import { useState, useEffect } from "react";

// Third-party library imports
import ReactMarkdown from "react-markdown";
import { Outlet } from "react-router";

// Local component imports (use named exports)
import NavBar from "./NavBar";
import ThemeSwitch from "./ThemeSwitch";

// CSS imports last
import "./App.css";
```

### File Naming

- Components: PascalCase (`Blog.jsx`, `ProjectCard.jsx`)
- Utilities/Data: camelCase (`projectData.js`, `routes.jsx`)
- Context: PascalCase with `Context` suffix (`ThemeContext.jsx`)

### Component Structure

```javascript
// 1. Imports
import { useState } from "react";
import "./Component.css";

// 2. Component definition (default export)
const ComponentName = () => {
  // 3. Hooks first
  const [state, setState] = useState(initialValue);

  // 4. Effects
  useEffect(() => {
    // effect logic
  }, [dependencies]);

  // 5. Event handlers
  const handleClick = () => {
    // handler logic
  };

  // 6. Render
  return <div>{/* JSX */}</div>;
};

export default ComponentName;
```

### JSX Formatting

- Use double quotes for strings in JSX attributes
- Self-close tags with no children: `<Component />`
- Use parentheses for multi-line JSX returns
- Use `className` instead of `class`

### Naming Conventions

- Variables/functions: camelCase (`isDark`, `handleChange`)
- Components: PascalCase (`Blog`, `ProjectCard`)
- Boolean variables: prefix with `is`, `has`, `should` (`isDark`, `hasError`)
- Event handlers: prefix with `handle` (`handleChange`, `handleSubmit`)

### Error Handling

- Use try/catch for async operations
- Log errors with `console.error`
- Set loading/error states appropriately

```javascript
try {
  const response = await fetch(url);
  const data = await response.json();
  setData(data);
} catch (error) {
  console.error("Error fetching data:", error);
  setError(true);
}
```

### Context Usage

- Create context with `createContext()` (no default value for provider-only)
- Export both the context and a provider wrapper
- Use hooks to consume context values

### Prop Handling

- Use prop-types for type checking if needed
- Destructure props in function parameters
- Provide default values for optional props

---

## ESLint Configuration

The project uses ESLint with these rules:

- ES2020 JavaScript
- React 18.3
- React Hooks rules enabled
- react-refresh warnings for development

Key rules:

- `react/jsx-no-target-blank`: off
- `react-refresh/only-export-components`: warn (allows constant exports)

Run `npm run lint` to check for issues.

---

## File Structure

```bash
/home/dickyv/repos/portfolio_blog/
├── private/                # Git-ignored: CV (PDF + HTML), pitch notes, job criteria. Never commit or deploy
├── public/
│   ├── _redirects          # Netlify SPA fallback
│   ├── og-image.png        # Social preview image
│   └── *.png / *.webp      # Project screenshots
├── src/
│   ├── content/            # All site copy and data (edit these to change what the site says)
│   │   ├── site.js         # Profile, contact links, stats, principles
│   │   ├── experience.js   # Current role, police role, case studies
│   │   ├── projects.js     # Project cards
│   │   ├── skills.js       # Skill groups
│   │   ├── about.js        # About paragraphs
│   │   └── posts.js        # Loads src/posts/*.md at build time
│   ├── components/         # Header, Footer, CaseStudy, ProjectCard, Icon, etc.
│   ├── pages/              # Home, Blog, Post, ErrorPage
│   ├── posts/              # Blog post markdown files
│   ├── App.jsx             # Layout: header, outlet, footer, hash scrolling
│   ├── App.css             # Design tokens, base styles, shared utilities
│   ├── ThemeContext.jsx    # Theme context
│   ├── ThemeProvider.jsx   # Theme state, persisted to localStorage
│   ├── useTheme.js         # Hook to consume the theme context
│   ├── routes.jsx          # Route definitions
│   └── main.jsx            # Entry point
├── index.html              # Meta/OG tags, JSON-LD, pre-paint theme script, fonts
├── eslint.config.js
├── vite.config.js
└── package.json
```

---

## Key Patterns

### Fetching Data

```javascript
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("/endpoint");
      const data = await response.json();
      setState(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  fetchData();
}, []);
```

### Theme Switching

- `ThemeProvider` exposes `isDark` and `handleToggleTheme`; consume with `useTheme()`
- The theme is set as `data-theme` on `<html>`; an inline script in `index.html` applies it before first paint
- CSS tokens live in `App.css` under `:root` and `[data-theme="dark"]`
- The preference is saved to `localStorage` only when the visitor toggles; until then the site follows `prefers-color-scheme` live
- Toggling uses the View Transitions API to reveal the new theme as a circle from the toggle; browsers without it get a short colour fade (`.theme-fade`), and reduced-motion users get an instant switch

### Content

- Site copy lives in `src/content/`, not in components
- Use `**bold**` inside content strings; `Emphasis` renders it
- Never name the current employer, its products or clients, or dates for ongoing work: the repo is public
- The CV is not published on the site; contact is by email, with the CV sent on request

### Markdown Blog Posts

- Posts are `.md` files in `src/posts/`, loaded with `import.meta.glob` (no index file)
- Each post starts with a `## Title` line and an `_date_` line
- Slugs come from filenames; newest filename sorts first
- Use `react-markdown` with `remark-gfm`, and `highlight.js` for code blocks
