

# Blog Page — WordPress-Ready with Placeholder Content

Since you'll set up the WordPress connection later, I'll create a blog page now with static placeholder posts that matches your portfolio's design. When your WordPress site is ready, we can swap in the API integration.

## What You'll Get

- A new `/blog` route with a clean blog listing page
- A `/blog/:slug` route for individual post detail pages
- 3 placeholder blog posts with sample content
- A "Blog" link added to the Navbar
- Design consistent with the rest of your portfolio (Playfair Display headings, warm color scheme, cards)
- Fully responsive layout (single column on mobile, grid on larger screens)

## Technical Details

### New files:
- **`src/pages/Blog.tsx`** — Blog listing page with card grid showing post title, excerpt, date, and category
- **`src/pages/BlogPost.tsx`** — Individual post page with back navigation
- **`src/data/blogPosts.ts`** — Static placeholder posts data (easily replaceable with WordPress API later)

### Files to modify:
- **`src/App.tsx`** — Add `/blog` and `/blog/:slug` routes
- **`src/components/Navbar.tsx`** — Add "Blog" link to navigation (desktop and mobile)

### Placeholder posts will include:
1. "The Art of Literary Translation" 
2. "Critical Theory in Modern Education"
3. "Bridging Cultures Through Language"

Each with a title, date, category, excerpt, and body text. When you're ready to connect WordPress, we'll replace the static data with `fetch` calls to your WordPress REST API (`/wp-json/wp/v2/posts`).
