
# Portfolio Updates — CV, Portrait Hover, Social Media & Mobile

## 1. Download CV Button in Navbar
- Copy the uploaded PDF (`Updated-Resume-M.A.Rezaee_022300.pdf`) to `public/docs/resume.pdf`
- Add a "Download CV" button/link to the Navbar (visible on desktop, included in mobile menu)
- Also update the CV link in the Contact section to point to the local file

## 2. Second Portrait on Hover
- In `Hero.tsx`, add `portrait-4.jpg` as a second image layered on top of `portrait-1.jpg`
- The second portrait is hidden by default and fades in on hover using CSS transitions (`opacity-0 hover:opacity-100` on the container with `group` class)

## 3. Social Media Links
Add a social media row/section to the Contact section and the Footer with icons for:
- **Telegram**: @maminre (link: `https://t.me/maminre`)
- **Instagram**: @maminrezai (link: `https://instagram.com/maminrezai`)
- **X/Twitter**: @AminReformist (link: `https://x.com/AminReformist`)
- **WhatsApp**: `https://wa.me/qr/ERDSPOB6INRHP1`
- **Phone**: +989150616788
- **Eita**: maminrezai (link: `https://eitaa.com/maminrezai`)
- **Email**: m.amin.rezai@gmail.com

Using Lucide icons where available and simple SVG icons or text labels for Telegram, Eita, and WhatsApp.

## 4. Mobile Responsiveness Check
- Ensure all sections use responsive grid (`grid-cols-1` on mobile, expanding on `md:`)
- Ensure text sizes scale down on small screens
- Ensure the portrait hover effect works on mobile (tap to toggle)
- Ensure social media icons wrap properly on small screens

---

## Technical Details

### Files to create:
- **`public/docs/resume.pdf`** — copy from uploaded PDF

### Files to modify:
- **`src/components/Navbar.tsx`** — add "Download CV" button linking to `/docs/resume.pdf`
- **`src/components/sections/Hero.tsx`** — add portrait-4.jpg as hover overlay image
- **`src/components/sections/Contact.tsx`** — add social media links row, update CV link to local file
- **`src/components/Footer.tsx`** — add social media icon row
