

# Fix Hero Buttons + Bigger "Eita"

## Changes

### 1. Fix Hero "Get in Touch" and "See My Work" buttons (`src/components/sections/Hero.tsx`)
The `<a href="#contact">` and `<a href="#showcase">` links break with HashRouter because the browser navigates to `/#contact` which is interpreted as a route. Fix by converting them to `<button>` elements that use `scrollIntoView`, matching the Navbar's behavior.

- Replace the `<a href="#contact">` with a `<button>` that calls `document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })`
- Replace the `<a href="#showcase">` with a `<button>` that does the same for `#showcase`

### 2. Make "Eita" text bigger
- **Footer** (`src/components/Footer.tsx`, line 35): Change `text-[7px]` to `text-[9px]`
- **Contact** (`src/components/sections/Contact.tsx`, line 128): Change `text-[8px]` to `text-[10px]`

