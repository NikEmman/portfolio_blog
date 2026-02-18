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
├── public/
│   └── posts/              # Blog post markdown files
├── src/
│   ├── components/         # (optional subdirectory)
│   ├── App.jsx             # Root component with theme provider
│   ├── App.css             # Global styles
│   ├── Blog.jsx            # Blog listing page
│   ├── Post.jsx            # Single post page
│   ├── LandingPage.jsx     # Home/landing page
│   ├── NavBar.jsx          # Navigation component
│   ├── Footer.jsx          # Footer component
│   ├── ThemeContext.jsx    # Theme context provider
│   ├── ThemeSwitch.jsx     # Theme toggle component
│   ├── ProjectCard.jsx     # Project display card
│   ├── ErrorPage.jsx       # 404 error page
│   ├── routes.jsx          # Route definitions
│   ├── main.jsx            # Entry point
│   └── projectData.js      # Static project data
├── eslint.config.js        # ESLint configuration
├── vite.config.js          # Vite configuration
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

- Uses `ThemeContext` with `isDark` boolean
- CSS uses `[data-theme="dark"]` and `[data-theme="light"]` selectors
- Check system preference with `window.matchMedia("(prefers-color-scheme: dark)")`

### Markdown Blog Posts

- Posts stored as `.md` files in `/public/posts/`
- Index file (`index.txt`) lists all post filenames
- Use `react-markdown` with `remark-gfm` for GitHub-flavored markdown
- Use `highlight.js` for code syntax highlighting
