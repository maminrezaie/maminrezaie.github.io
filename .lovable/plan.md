

# Portfolio Updates

Multiple content and visual changes across the site.

---

## 1. Portrait Photos
- Copy `user-uploads://portrait-1.jpg` and `user-uploads://portrait-4.jpg` to `public/images/` to replace the current portraits
- Update Hero section to use the new portrait (portrait-1.jpg as primary since it was described as "the first" = last attached)

## 2. Hero Section Updates
- Add "Web Designer" to the subtitle/tagline (e.g., "English Graduate . Scholar . Translator . Web Designer")
- Add a "See My Work" button linking to the `#showcase` section

## 3. About / Skills Section
- Add "Web design (WordPress / WooCommerce)" to the skills list

## 4. Showcase Section Updates
- Update Rezaie Saffron URL from `rezaiesaffron.ir` to `rezaei-saffron.ir`
- Add English version of Rezaei Saffron as a separate project card linking to `https://rezaei-saffron.ir/en/`
- Copy the 3 uploaded screenshots (`Screenshot1.png`, `Screenshot2.png`, `Screenshot3.png`) to `public/images/` and embed them as preview images in the showcase cards
  - Screenshot1 = Rezaei Saffron (Persian)
  - Screenshot2 = Rezaei Saffron (English)
  - Screenshot3 = Gandomak Shop

## 5. Experience Section
- Add a new entry: "Freelance Web Designer" with expertise in WordPress/WooCommerce site building

## 6. Reduce Section Spacing
- Reduce `section-padding` vertical padding (currently `py-20 lg:py-28`) to something tighter like `py-12 lg:py-16`

## 7. Contact Form
- Update the Formspree endpoint from `xpwzgkjd` to `xlgwbdgo`

---

## Technical Details

### Files to modify:
- **`public/images/`** -- copy 5 uploaded files (2 portraits + 3 screenshots)
- **`src/components/sections/Hero.tsx`** -- update tagline, add "See My Work" button, update portrait src
- **`src/components/sections/About.tsx`** -- add web design skill
- **`src/components/sections/Showcase.tsx`** -- update saffron URL, add English saffron card, embed screenshot images in each card
- **`src/components/sections/Experience.tsx`** -- add freelance web designer entry
- **`src/components/sections/Contact.tsx`** -- change Formspree endpoint to `xlgwbdgo`
- **`src/index.css`** -- reduce `section-padding` vertical values

