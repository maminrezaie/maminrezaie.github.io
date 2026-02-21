

# Add AcademiaPen.ir to Showcase

## Changes

### 1. Copy the screenshot to the project
Copy the uploaded screenshot to `public/images/screenshot-academiapen.png` to match the existing naming convention.

### 2. Add entry to showcase data (`src/components/sections/Showcase.tsx`)
Add a new project object to the `projects` array:

```ts
{
  title: "AcademiaPen",
  url: "https://academiapen.ir/",
  description:
    "A professional academic writing service for humanities sciences—papers and theses written by humans.",
  image: "/images/screenshot-academiapen.png",
}
```

This will appear as a fourth card in the showcase grid alongside the existing three stores. The grid already uses `md:grid-cols-3`, so we may want to adjust to `md:grid-cols-2 lg:grid-cols-4` or keep 3 columns and let the fourth wrap naturally. Keeping the existing 3-column layout is simplest—AcademiaPen will appear on a second row.

