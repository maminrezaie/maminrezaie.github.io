

# Fix 404 Navigation + Change "E" to "Eita"

## Problem
The URL `maminrezaie.github.io/#contact` causes a 404 because HashRouter interprets `#contact` as the route path `/contact`, which doesn't exist. This happens in two places:
- The Navbar's non-home navigation sends `navigate("/#contact")` which is malformed for HashRouter
- The 404 page's "Return to Home" link uses `href="/"` instead of HashRouter-compatible navigation

## Changes

### 1. Fix Navbar anchor navigation (`src/components/Navbar.tsx`)
In `handleClick`, when on the home page, prevent the hash from changing by using `scrollIntoView` only. When not on the home page, navigate to `/` first, then scroll after a short delay.

### 2. Fix NotFound "Return to Home" link (`src/pages/NotFound.tsx`)
Replace the raw `<a href="/">` with react-router's `<Link to="/">` so it works with HashRouter.

### 3. Change "E" to "Eita" in social icons
- **`src/components/Footer.tsx`** (line 41): Replace `<span className="text-[10px] font-bold">E</span>` with `<span className="text-[7px] font-bold leading-none">Eita</span>`
- **`src/components/sections/Contact.tsx`** (line 128): Replace `<span className="text-xs font-bold">E</span>` with `<span className="text-[8px] font-bold leading-none">Eita</span>`

